/*
  store.js
  A modular client-side state store with:
  - subscribe/getState/dispatch reducer pattern
  - middleware support
  - localStorage persistence
  - history/time-travel (undo/redo)
  - devtools hook (console-friendly)
  - simple plugin API and example slices

  This file is intentionally verbose and explanatory to both
  teach and provide a large, feature-rich store for your shop.
*/

// Lightweight helper utilities
function isObject(o) {
  return o !== null && typeof o === 'object' && !Array.isArray(o);
}

function deepClone(obj) {
  // Very safe deep clone for plain objects/arrays using structuredClone if available
  if (typeof structuredClone === 'function') return structuredClone(obj);
  return JSON.parse(JSON.stringify(obj));
}

function shallowMerge(a, b) {
  return Object.assign({}, a, b);
}

function noop() {}

// Default serializer for persistence
const JSONSafe = {
  stringify: (v) => {
    try {
      return JSON.stringify(v);
    } catch (e) {
      return String(v);
    }
  },
  parse: (s) => {
    try {
      return JSON.parse(s);
    } catch (e) {
      return null;
    }
  }
};

// -----------------------------
// Core store implementation
// -----------------------------
function createStore({ reducer, preloadedState = {}, middleware = [], persistKey = null, enableHistory = true, maxHistory = 200 } = {}) {
  if (typeof reducer !== 'function') throw new Error('createStore requires a reducer function');

  let currentState = deepClone(preloadedState);
  let listeners = new Set();
  let isDispatching = false;

  // History for undo/redo
  let history = [];
  let historyIndex = -1; // -1 means no history saved yet

  function saveHistory(snapshot) {
    if (!enableHistory) return;
    // Trim forward history if we've undone
    if (historyIndex < history.length - 1) {
      history = history.slice(0, historyIndex + 1);
    }
    history.push(deepClone(snapshot));
    historyIndex = history.length - 1;
    if (history.length > maxHistory) {
      history.shift();
      historyIndex = history.length - 1;
    }
  }

  // Try load persisted state
  if (persistKey && typeof localStorage !== 'undefined') {
    try {
      const stored = localStorage.getItem(persistKey);
      if (stored) {
        const parsed = JSONSafe.parse(stored);
        if (parsed && isObject(parsed)) {
          currentState = shallowMerge(currentState, parsed);
        }
      }
    } catch (e) {
      // ignore
      console.warn('store: failed to load persisted state', e);
    }
  }

  function persistState() {
    if (!persistKey || typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(persistKey, JSONSafe.stringify(currentState));
    } catch (e) {
      console.warn('store: failed to persist state', e);
    }
  }

  // Basic getState
  function getState() {
    return deepClone(currentState);
  }

  // Subscription API
  function subscribe(fn) {
    if (typeof fn !== 'function') throw new Error('subscribe expects a function');
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  // Private notify
  function notify() {
    for (const l of Array.from(listeners)) {
      try {
        l(getState());
      } catch (err) {
        console.error('store listener error', err);
      }
    }
  }

  // Reducer dispatcher
  function baseDispatch(action) {
    if (!action || typeof action.type === 'undefined') {
      throw new Error('Actions must be objects with a `type` property');
    }
    if (isDispatching) throw new Error('Reducers may not dispatch actions');
    try {
      isDispatching = true;
      const nextState = reducer(currentState, action);
      currentState = nextState;
    } finally {
      isDispatching = false;
    }
    saveHistory(currentState);
    persistState();
    notify();
    return action;
  }

  // Apply middleware chain
  let dispatch = baseDispatch;
  if (middleware && middleware.length) {
    const middlewareAPI = {
      getState,
      dispatch: (act) => dispatch(act)
    };
    const chain = middleware.map(mw => mw(middlewareAPI));
    dispatch = chain.reduceRight((next, mw) => mw(next), baseDispatch);
  }

  // Time travel APIs
  function undo() {
    if (!enableHistory) return false;
    if (historyIndex <= 0) return false;
    historyIndex -= 1;
    currentState = deepClone(history[historyIndex]);
    persistState();
    notify();
    return true;
  }

  function redo() {
    if (!enableHistory) return false;
    if (historyIndex >= history.length - 1) return false;
    historyIndex += 1;
    currentState = deepClone(history[historyIndex]);
    persistState();
    notify();
    return true;
  }

  function jumpTo(index) {
    if (!enableHistory) return false;
    if (index < 0 || index >= history.length) return false;
    historyIndex = index;
    currentState = deepClone(history[historyIndex]);
    persistState();
    notify();
    return true;
  }

  function getHistory() {
    return history.map(h => deepClone(h));
  }

  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') throw new Error('replaceReducer expects a function');
    reducer = nextReducer;
  }

  // Initialize first snapshot for history
  saveHistory(currentState);

  return {
    getState,
    subscribe,
    dispatch: (action) => dispatch(action),
    undo,
    redo,
    jumpTo,
    getHistory,
    replaceReducer
  };
}

// -----------------------------
// Built-in middleware
// -----------------------------
function loggerMiddleware({ getState }) {
  return next => action => {
    console.groupCollapsed(`Action: ${action.type}`);
    console.log('Prev state:', getState());
    console.log('Action:', action);
    const result = next(action);
    console.log('Next state:', getState());
    console.groupEnd();
    return result;
  };
}

function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') return action(dispatch, getState);
    return next(action);
  };
}

// -----------------------------
// Small utility reducers and slice helpers
// -----------------------------
function combineReducers(reducersMap) {
  return function rootReducer(state = {}, action) {
    const next = {};
    let changed = false;
    for (const key of Object.keys(reducersMap)) {
      const reducer = reducersMap[key];
      const previous = state[key];
      const value = reducer(previous, action);
      next[key] = value;
      if (value !== previous) changed = true;
    }
    return changed ? next : state;
  };
}

function createSlice({ name, initialState, reducers }) {
  const actionCreators = {};
  const sliceReducer = (state = initialState, action) => {
    if (!action || !action.type) return state;
    const parts = String(action.type).split('/');
    if (parts[0] !== name) return state;
    const type = parts.slice(1).join('/');
    const handler = reducers[type];
    if (!handler) return state;
    return handler(state, action.payload);
  };
  for (const key of Object.keys(reducers)) {
    actionCreators[`${name}/${key}`] = (payload) => ({ type: `${name}/${key}`, payload });
  }
  return { name, reducer: sliceReducer, actions: actionCreators };
}

// -----------------------------
// Shop-specific default slices
// -----------------------------
const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    'set'(state, payload) {
      return Array.isArray(payload) ? payload : state;
    },
    'update'(state, payload) {
      if (!payload || typeof payload.id === 'undefined') return state;
      return state.map(p => p.id === payload.id ? Object.assign({}, p, payload) : p);
    },
    'add'(state, payload) {
      if (!payload) return state;
      return [...state, payload];
    },
    'remove'(state, payload) {
      return state.filter(p => p.id !== payload);
    }
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    'set'(state, payload) {
      return Array.isArray(payload) ? payload : state;
    },
    'add'(state, payload) {
      const found = state.find(i => i.id === payload.id);
      if (found) return state.map(i => i.id === payload.id ? Object.assign({}, i, { quantity: i.quantity + (payload.quantity || 1) }) : i);
      return [...state, Object.assign({}, payload, { quantity: payload.quantity || 1 })];
    },
    'remove'(state, payload) {
      return state.filter(i => i.id !== payload);
    },
    'updateQuantity'(state, payload) {
      return state.map(i => i.id === payload.id ? Object.assign({}, i, { quantity: payload.quantity }) : i).filter(i => i.quantity > 0);
    },
    'clear'(state, payload) {
      return [];
    }
  }
});

const uiSlice = createSlice({
  name: 'ui',
  initialState: { theme: 'light', promoVisible: true },
  reducers: {
    'setTheme'(state, payload) {
      return Object.assign({}, state, { theme: payload });
    },
    'togglePromo'(state) {
      return Object.assign({}, state, { promoVisible: !state.promoVisible });
    }
  }
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    'set'(state, payload) { return Array.isArray(payload) ? payload : state; },
    'add'(state, payload) { return [...state, payload]; },
    'remove'(state, payload) { return state.filter(i => i.id !== payload); },
    'clear'() { return []; }
  }
});

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: [],
  reducers: {
    'add'(state, payload) {
      if (!payload || typeof payload.productId === 'undefined') return state;
      return [...state, Object.assign({}, payload, { id: Date.now() })];
    },
    'clear'() { return []; }
  }
});

const tradesSlice = createSlice({
  name: 'trades',
  initialState: [],
  reducers: {
    'add'(state, payload) {
      if (!payload || typeof payload.productId === 'undefined') return state;
      return [...state, Object.assign({}, payload, { id: Date.now(), status: 'pending', createdAt: new Date().toISOString() })];
    },
    'clear'() { return []; }
  }
});

const salesSlice = createSlice({
  name: 'sales',
  initialState: [],
  reducers: {
    'add'(state, payload) {
      if (!payload || typeof payload.productId === 'undefined') return state;
      return [...state, Object.assign({}, payload, { id: Date.now(), status: 'pending', createdAt: new Date().toISOString() })];
    },
    'clear'() { return []; }
  }
});

// -----------------------------
// Store factory for shop
// -----------------------------
function createShopStore({ initial = {}, persistKey = 'pokecatalog_store', enableLogger = true } = {}) {
  const rootReducer = combineReducers({
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    ui: uiSlice.reducer,
    reviews: reviewsSlice.reducer,
    trades: tradesSlice.reducer,
    sales: salesSlice.reducer
  });

  const mw = [thunkMiddleware];
  if (enableLogger) mw.push(loggerMiddleware);

  const store = createStore({ reducer: rootReducer, preloadedState: initial, middleware: mw, persistKey, enableHistory: true });

  // Attach action helpers to store for convenience
  store.actions = {
    products: productsSlice.actions,
    cart: cartSlice.actions,
    wishlist: wishlistSlice.actions,
    ui: uiSlice.actions,
    reviews: reviewsSlice.actions,
    trades: tradesSlice.actions,
    sales: salesSlice.actions
  };

  // Convenience selectors
  store.select = {
    allProducts: () => store.getState().products,
    cartItems: () => store.getState().cart,
    wishlistItems: () => store.getState().wishlist,
    ui: () => store.getState().ui,
    reviews: () => store.getState().reviews,
    trades: () => store.getState().trades,
    sales: () => store.getState().sales,
    totals: () => {
      const cart = store.getState().cart || [];
      const subtotal = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0);
      const count = cart.reduce((s, i) => s + (i.quantity || 0), 0);
      return { subtotal, count };
    }
  };

  return store;
}

// -----------------------------
// Auto-initialize when run in browser
// - Reads window.products, window.cart, window.wishlist, window.currentTheme (if available)
// - Creates a global `shopStore` on window
// - Subscribes to store updates and reflects some changes back to DOM globals for backward compatibility
// -----------------------------
if (typeof window !== 'undefined') {
  // Collect initial globals safely
  const initial = {};
  try {
    if (Array.isArray(window.products)) initial.products = deepClone(window.products);
    if (Array.isArray(window.cart)) initial.cart = deepClone(window.cart);
    if (Array.isArray(window.wishlist)) initial.wishlist = deepClone(window.wishlist);
    if (window.currentTheme) initial.ui = { theme: window.currentTheme };
  } catch (e) {
    console.warn('store: error reading initial globals', e);
  }

  // Create the store
  const shopStore = createShopStore({ initial, persistKey: 'pokecatalog_store_v1', enableLogger: false });

  // Attach to window for easy access
  window.shopStore = shopStore;

  // Synchronize back to legacy globals used by app.js
  // This helps existing code work without refactoring: it reads `products`, `cart`, `wishlist` as before.
  function syncGlobals(state) {
    try {
      // Replace top-level globals with deep clones (avoid shared mutation)
      window.products = deepClone(state.products || []);
      window.cart = deepClone(state.cart || []);
      window.wishlist = deepClone(state.wishlist || []);
      window.reviews = deepClone(state.reviews || []);
      window.tradeRequests = deepClone(state.trades || []);
      window.salesRequests = deepClone(state.sales || []);
      if (state.ui && state.ui.theme) {
        window.currentTheme = state.ui.theme;
        if (state.ui.theme === 'dark') document.body.classList.add('dark-mode');
        else document.body.classList.remove('dark-mode');
      }
      // Expose computed totals
      const totals = shopStore.select.totals();
      window.shopTotals = totals;
    } catch (e) {
      console.warn('store: sync failed', e);
    }
  }

  // Initial sync
  syncGlobals(shopStore.getState());

  // Subscribe for live sync
  shopStore.subscribe((s) => syncGlobals(s));

  // Expose handy helper functions to integrate with old UI without modifying app.js
  window.shop = {
    addToCart(product, qty = 1) {
      shopStore.dispatch(shopStore.actions.cart['add'](Object.assign({}, product, { quantity: qty })));
    },
    removeFromCart(productId) {
      shopStore.dispatch(shopStore.actions.cart['remove'](productId));
    },
    addToWishlist(product) {
      shopStore.dispatch(shopStore.actions.wishlist['add'](product));
    },
    addReview(review) {
      shopStore.dispatch(shopStore.actions.reviews['add'](review));
    },
    addTradeRequest(request) {
      shopStore.dispatch(shopStore.actions.trades['add'](request));
    },
    addSellRequest(request) {
      shopStore.dispatch(shopStore.actions.sales['add'](request));
    },
    toggleTheme() {
      const cur = shopStore.getState().ui?.theme || 'light';
      shopStore.dispatch(shopStore.actions.ui['setTheme'](cur === 'light' ? 'dark' : 'light'));
    },
    getState() { return shopStore.getState(); },
    dispatch(action) { return shopStore.dispatch(action); },
    undo() { return shopStore.undo(); },
    redo() { return shopStore.redo(); }
  };

  // Small convenience: expose a debug attach function for devtools
  window.attachShopDevtools = function attachShopDevtools() {
    shopStore.subscribe(state => {
      // Simple console-based devtools snapshot
      console.info('[shopStore] state snapshot', state);
    });
    console.info('shopStore devtools attached — use window.shop and window.shopStore');
  };

  // If the store contains persisted state that differs from window globals, sync DOM now
  document.addEventListener('DOMContentLoaded', () => {
    try { syncGlobals(shopStore.getState()); } catch (e) { /* ignore */ }
  });
}

// Provide exports for module consumers
export default createShopStore;
export { createStore, createShopStore, createSlice, combineReducers, loggerMiddleware, thunkMiddleware };

/* End of store.js */
