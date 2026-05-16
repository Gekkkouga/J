const products = [
  {
    id: 1,
    name: 'Charizard Holo Rare',
    rarity: 'holo-rare',
    price: 850000,
    stock: 3,
    rating: 4.9,
    sales: 123,
    image: 'https://images.pokemontcg.io/base1/4_hires.png',
    grading: 9,
    popularity: 98,
    reviews: 45,
    category: 'legendary',
  },
  {
    id: 2,
    name: 'Pikachu VMax',
    rarity: 'rare',
    price: 420000,
    stock: 12,
    rating: 4.7,
    sales: 87,
    image: 'https://images.pokemontcg.io/swsh25/6_hires.png',
    grading: 8,
    popularity: 87,
    reviews: 29,
    category: 'rare',
  },
  {
    id: 3,
    name: 'Mewtwo GX',
    rarity: 'legendary',
    price: 1200000,
    stock: 2,
    rating: 5.0,
    sales: 44,
    image: 'https://images.pokemontcg.io/sm115/62_hires.png',
    grading: 10,
    popularity: 95,
    reviews: 61,
    category: 'legendary',
  },
  {
    id: 4,
    name: 'Squirtle Starter Pack',
    rarity: 'common',
    price: 90000,
    stock: 20,
    rating: 4.3,
    sales: 210,
    image: 'https://images.pokemontcg.io/base2/7_hires.png',
    grading: 7,
    popularity: 72,
    reviews: 18,
    category: 'common',
  },
  {
    id: 5,
    name: 'Eevee Evolution Box',
    rarity: 'uncommon',
    price: 185000,
    stock: 8,
    rating: 4.5,
    sales: 134,
    image: 'https://images.pokemontcg.io/sm115/19_hires.png',
    grading: 8,
    popularity: 83,
    reviews: 32,
    category: 'uncommon',
  },
  {
    id: 6,
    name: 'Blastoise Full Art',
    rarity: 'holo-rare',
    price: 780000,
    stock: 4,
    rating: 4.8,
    sales: 99,
    image: 'https://images.pokemontcg.io/base1/2_hires.png',
    grading: 9,
    popularity: 91,
    reviews: 51,
    category: 'holo-rare',
  },
  {
    id: 7,
    name: 'Gardevoir EX',
    rarity: 'rare',
    price: 320000,
    stock: 15,
    rating: 4.4,
    sales: 74,
    image: 'https://images.pokemontcg.io/sm12/11_hires.png',
    grading: 8,
    popularity: 79,
    reviews: 24,
    category: 'rare',
  },
  {
    id: 8,
    name: 'Starter Bundle - Fire',
    rarity: 'uncommon',
    price: 145000,
    stock: 11,
    rating: 4.6,
    sales: 102,
    image: 'https://images.pokemontcg.io/base1/10_hires.png',
    grading: 7,
    popularity: 80,
    reviews: 27,
    category: 'uncommon',
  }
];

const boosterPacks = [
  {
    title: 'Thunderstorm Booster',
    description: 'Buka paket listrik berisi 1 kartu Rare atau Holo dan 2 kartu lainnya.',
    odds: '1/3 Rare, 1/2 Uncommon',
    cards: [
      { name: 'Zapdos', rarity: 'legendary', image: 'https://images.pokemontcg.io/base1/145_hires.png' },
      { name: 'Jolteon', rarity: 'rare', image: 'https://images.pokemontcg.io/cr01/38_hires.png' },
      { name: 'Electabuzz', rarity: 'uncommon', image: 'https://images.pokemontcg.io/base2/2_hires.png' },
      { name: 'Raichu', rarity: 'rare', image: 'https://images.pokemontcg.io/sm10/21_hires.png' }
    ]
  },
  {
    title: 'Mystic Moon Pack',
    description: 'Paket sihir bulan dengan chance untuk mendapatkan kartu GX langka.',
    odds: '1/4 GX, 1/2 Rare',
    cards: [
      { name: 'Lunala GX', rarity: 'legendary', image: 'https://images.pokemontcg.io/sm08/64_hires.png' },
      { name: 'Clefable', rarity: 'rare', image: 'https://images.pokemontcg.io/sm12/24_hires.png' },
      { name: 'Umbreon', rarity: 'uncommon', image: 'https://images.pokemontcg.io/sm12/36_hires.png' },
      { name: 'Snorlax', rarity: 'rare', image: 'https://images.pokemontcg.io/bw7/77_hires.png' }
    ]
  },
  {
    title: 'Starter Hero Box',
    description: 'Perfect pack untuk kolektor baru: 3 kartu guaranteed nilai tinggi.',
    odds: '1/5 Holo, 1/3 Rare',
    cards: [
      { name: 'Charmeleon', rarity: 'uncommon', image: 'https://images.pokemontcg.io/base1/5_hires.png' },
      { name: 'Squirtle', rarity: 'common', image: 'https://images.pokemontcg.io/base1/7_hires.png' },
      { name: 'Bulbasaur', rarity: 'common', image: 'https://images.pokemontcg.io/base1/1_hires.png' },
      { name: 'Venusaur', rarity: 'rare', image: 'https://images.pokemontcg.io/base1/15_hires.png' }
    ]
  }
];

const newsArticles = [
  {
    title: 'Diskon Booster Pack Baru',
    date: '15 Mei 2026',
    summary: 'Grand opening! Dapatkan hingga 25% diskon untuk semua booster pack selama minggu ini.',
  },
  {
    title: 'Koleksi Eksklusif Ditambahkan',
    date: '12 Mei 2026',
    summary: 'Kami menambahkan kartu langka baru dari edisi terbatas dan update stock setiap hari.',
  },
  {
    title: 'Event Trading Online',
    date: '10 Mei 2026',
    summary: 'Gabung event trade bersama komunitas dan menangkan voucher belanja PokeCatalog.ID.',
  }
];

let cart = [];
let wishlist = [];
let currentReviewProduct = null;
let currentTradeProduct = null;
let currentTheme = 'light';
const serverFeeUSD = 0.5;
const usdToIdr = 15500;

function formatCurrency(value) {
  return `Rp ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

function getShopStore() {
  return typeof window !== 'undefined' ? window.shopStore : null;
}

function getProducts() {
  const store = getShopStore();
  return store ? store.select.allProducts() : products;
}

function getCart() {
  const store = getShopStore();
  return store ? store.select.cartItems() : cart;
}

function getWishlist() {
  const store = getShopStore();
  return store ? store.select.wishlistItems() : wishlist;
}

function getReviews() {
  const store = getShopStore();
  return store ? store.select.reviews() : [];
}

function getTrades() {
  const store = getShopStore();
  return store ? store.select.trades() : [];
}

function getSellRequests() {
  const store = getShopStore();
  return store ? store.select.sales() : [];
}

function getUi() {
  const store = getShopStore();
  return store ? store.select.ui() : { theme: currentTheme, promoVisible: true };
}

function dispatchAction(action) {
  const store = getShopStore();
  if (store) return store.dispatch(action);
  return null;
}

function syncAppState() {
  renderNews();
  renderProducts();
  renderInventory();
  renderCart();
  renderWishlist();
  calculateShipping();
  updateBadgeCounts();
  updateSalesAnalytics();
  renderRequests();
  renderPromo();
}

function renderNews() {
  const newsGrid = document.getElementById('newsGrid');
  newsGrid.innerHTML = newsArticles.map(article => `
    <div class="news-card">
      <h3>${article.title}</h3>
      <small>${article.date}</small>
      <p>${article.summary}</p>
    </div>
  `).join('');
}

function renderProducts(list = getProducts()) {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  const wishlistItems = getWishlist();

  productGrid.innerHTML = list.map(product => `
    <div class="card">
      <div class="card-header">
        <span class="rarity-badge rarity-${product.rarity}">${product.rarity.replace('-', ' ')}</span>
        <button class="wishlist-btn ${wishlistItems.some(item => item.id === product.id) ? 'active' : ''}" onclick="toggleWishlistItem(${product.id})" title="Tambah ke Wishlist">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h3 class="card-title">${product.name}</h3>
      <div class="card-meta">
        <span>${product.reviews || 0} Reviews</span>
        <span>Grade ${product.grading || 0}/10</span>
      </div>
      <p class="price">${formatCurrency(product.price)}</p>
      <div class="stock-indicator ${product.stock <= 5 ? 'stock-low' : 'stock-available'}">
        ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
      </div>
      <div class="rating">${'★'.repeat(Math.round(product.rating || 0))} ${product.rating ? product.rating.toFixed(1) : '0.0'}</div>
      <div class="card-actions">
        <button class="btn btn-add" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i>Add to Cart</button>
        <div class="action-row">
          <button class="btn btn-review" onclick="openReviewModal(${product.id})">Review</button>
          <button class="btn btn-trade" onclick="openTradeModal(${product.id})">Trade</button>
          <button class="btn btn-sell" onclick="openSellModal(${product.id})">Sell</button>
        </div>
      </div>
    </div>
  `).join('');
}

function updateBadgeCounts() {
  const cartCount = getCart().reduce((sum, item) => sum + (item.quantity || 0), 0);
  document.getElementById('cartCount').textContent = cartCount;
  document.getElementById('wishlistCount').textContent = getWishlist().length;
}

function addToCart(productId) {
  const product = getProducts().find(item => item.id === productId);
  if (!product || product.stock <= 0) return alert('Produk tidak tersedia.');
  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.cart.add(Object.assign({}, product, { quantity: 1 })));
  } else {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  }
  renderCart();
  updateBadgeCounts();
}

function toggleWishlistItem(productId) {
  const product = getProducts().find(item => item.id === productId);
  if (!product) return;
  const store = getShopStore();
  if (store) {
    const exists = getWishlist().some(item => item.id === productId);
    if (exists) {
      store.dispatch(store.actions.wishlist.remove(productId));
    } else {
      store.dispatch(store.actions.wishlist.add(product));
    }
  } else {
    const index = wishlist.findIndex(item => item.id === productId);
    if (index >= 0) {
      wishlist.splice(index, 1);
    } else {
      wishlist.push(product);
    }
  }
  renderProducts();
  renderWishlist();
  updateBadgeCounts();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const currentCart = getCart();
  cartItems.innerHTML = currentCart.length === 0 ? '<p>Keranjang kosong.</p>' : currentCart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatCurrency(item.price)} x ${item.quantity}</div>
      </div>
      <div class="qty">
        <button onclick="changeCartQuantity(${item.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeCartQuantity(${item.id}, 1)">+</button>
      </div>
      <button class="cart-remove" onclick="removeCartItem(${item.id})">×</button>
    </div>
  `).join('');
  calculateCartTotals();
}

function changeCartQuantity(productId, delta) {
  const store = getShopStore();
  const item = getCart().find(i => i.id === productId);
  if (!item) return;
  const nextQty = item.quantity + delta;
  if (store) {
    if (nextQty <= 0) {
      store.dispatch(store.actions.cart.remove(productId));
    } else {
      store.dispatch(store.actions.cart.updateQuantity({ id: productId, quantity: nextQty }));
    }
  } else {
    item.quantity = nextQty;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
  }
  renderCart();
  updateBadgeCounts();
}

function removeCartItem(productId) {
  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.cart.remove(productId));
  } else {
    cart = cart.filter(i => i.id !== productId);
  }
  renderCart();
  updateBadgeCounts();
}

function calculateCartTotals() {
  const subtotal = getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = parseInt(document.getElementById('discountAmount').dataset.value || '0', 10);
  const shippingCost = parseInt(document.getElementById('shippingCost').dataset.value || '0', 10);
  const serverFee = Math.round(serverFeeUSD * usdToIdr);
  document.getElementById('subtotal').textContent = formatCurrency(subtotal);
  document.getElementById('serverFee').textContent = formatCurrency(serverFee);
  document.getElementById('totalPrice').textContent = formatCurrency(subtotal - discountAmount + shippingCost + serverFee);
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const validCoupons = { WELCOME20: 0.2, BOOSTER10: 0.1 };
  const subtotal = getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!validCoupons[code]) {
    document.getElementById('discountAmount').textContent = 'Rp 0';
    document.getElementById('discountAmount').dataset.value = '0';
    return alert('Kode kupon tidak valid.');
  }
  const discount = Math.floor(subtotal * validCoupons[code]);
  document.getElementById('discountAmount').textContent = formatCurrency(discount);
  document.getElementById('discountAmount').dataset.value = discount.toString();
  calculateCartTotals();
  alert(`Kupon ${code} berhasil diterapkan!`);
}

function calculateShipping() {
  const shippingValue = document.getElementById('shippingLocation').value;
  const shippingRates = { jakarta: 20000, surabaya: 30000, bandung: 25000, medan: 50000, bali: 40000, other: 60000 };
  const cost = shippingRates[shippingValue] || 60000;
  const shippingCost = document.getElementById('shippingCost');
  shippingCost.textContent = formatCurrency(cost);
  shippingCost.dataset.value = cost.toString();
  calculateCartTotals();
}

function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('open');
}

function toggleWishlist() {
  document.getElementById('wishlistPanel').classList.toggle('open');
}

function renderWishlist() {
  const wishlistItems = document.getElementById('wishlistItems');
  const currentWishlist = getWishlist();
  wishlistItems.innerHTML = currentWishlist.length === 0 ? '<p>Wishlist kosong.</p>' : currentWishlist.map(item => `
    <div class="wishlist-item">
      <div class="wishlist-item-img"><img src="${item.image}" alt="${item.name}"></div>
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${item.name}</div>
        <div class="wishlist-item-price">${formatCurrency(item.price)}</div>
      </div>
      <button class="wishlist-item-remove" onclick="removeWishlistItem(${item.id})">Remove</button>
    </div>
  `).join('');
}

function removeWishlistItem(productId) {
  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.wishlist.remove(productId));
  } else {
    wishlist = wishlist.filter(item => item.id !== productId);
  }
  renderWishlist();
  renderProducts();
  updateBadgeCounts();
}

function addAllWishlistToCart() {
  const store = getShopStore();
  const currentWishlist = getWishlist();
  currentWishlist.forEach(item => {
    if (store) {
      store.dispatch(store.actions.cart.add(Object.assign({}, item, { quantity: 1 })));
    } else {
      const existing = cart.find(cartItem => cartItem.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
    }
  });
  if (store) {
    store.dispatch(store.actions.wishlist.clear());
  } else {
    wishlist = [];
  }
  renderWishlist();
  renderCart();
  updateBadgeCounts();
}

function clearCart() {
  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.cart.clear());
  } else {
    cart = [];
  }
  document.getElementById('discountAmount').textContent = 'Rp 0';
  document.getElementById('discountAmount').dataset.value = '0';
  renderCart();
  updateBadgeCounts();
}

function clearWishlist() {
  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.wishlist.clear());
  } else {
    wishlist = [];
  }
  renderWishlist();
  renderProducts();
  updateBadgeCounts();
}

function checkoutTokopedia() {
  if (!getCart().length) return alert('Keranjang kosong. Tambahkan produk terlebih dahulu.');
  const serverFee = Math.round(serverFeeUSD * usdToIdr);
  alert(`Pembayaran akan mencakup biaya server $${serverFeeUSD.toFixed(2)} (sekitar ${formatCurrency(serverFee)}).`);
  window.open('https://www.tokopedia.com', '_blank');
}

function openReviewModal(productId) {
  const product = getProducts().find(item => item.id === productId);
  if (!product) return;
  currentReviewProduct = product;
  document.getElementById('reviewProductName').value = product.name;
  document.getElementById('reviewText').value = '';
  document.getElementById('reviewRating').value = '5 - Excellent';
  document.getElementById('reviewModal').classList.add('active');
}

function openTradeModal(productId) {
  const product = getProducts().find(item => item.id === productId);
  if (!product) return;
  currentTradeProduct = product;
  document.getElementById('tradeOffering').value = product.name;
  document.getElementById('tradeYourPokemon').value = '';
  document.getElementById('tradeUsername').value = '';
  document.getElementById('tradeContact').value = '';
  document.getElementById('tradeModal').classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function submitReview(event) {
  event.preventDefault();
  if (!currentReviewProduct) return;

  const rating = parseInt(document.getElementById('reviewRating').value, 10);
  const comment = document.getElementById('reviewText').value.trim();
  const review = {
    productId: currentReviewProduct.id,
    productName: currentReviewProduct.name,
    rating,
    comment,
    createdAt: new Date().toLocaleString('id-ID'),
  };

  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.reviews.add(review));
    const product = getProducts().find(item => item.id === currentReviewProduct.id);
    if (product) {
      const count = (product.reviews || 0) + 1;
      const totalRating = ((product.rating || 0) * (product.reviews || 0)) + rating;
      store.dispatch(store.actions.products.update(Object.assign({}, product, {
        rating: Math.min(5, totalRating / count),
        reviews: count
      })));
    }
  } else {
    currentReviewProduct.reviews = (currentReviewProduct.reviews || 0) + 1;
    currentReviewProduct.rating = Math.min(5, ((currentReviewProduct.rating || 0) * (currentReviewProduct.reviews - 1) + rating) / currentReviewProduct.reviews);
  }

  renderProducts();
  renderRequests();
  alert(`Terima kasih! Review Anda untuk ${currentReviewProduct.name} telah dikirim.`);
  closeModal('reviewModal');
}

function submitTrade(event) {
  event.preventDefault();
  if (!currentTradeProduct) return;

  const request = {
    productId: currentTradeProduct.id,
    productName: currentTradeProduct.name,
    offeredPokemon: document.getElementById('tradeYourPokemon').value.trim(),
    username: document.getElementById('tradeUsername').value.trim(),
    contact: document.getElementById('tradeContact').value.trim(),
    fee: serverFeeUSD,
    createdAt: new Date().toLocaleString('id-ID'),
  };

  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.trades.add(request));
  }

  renderRequests();
  alert(`Trade request untuk ${currentTradeProduct.name} telah dikirim. Biaya service $${serverFeeUSD.toFixed(2)} akan berlaku saat transaksi.`);
  closeModal('tradeModal');
}

function openSellModal(productId) {
  const product = getProducts().find(item => item.id === productId);
  if (!product) return;
  currentTradeProduct = product;
  document.getElementById('sellOffering').value = product.name;
  document.getElementById('sellPrice').value = product.price;
  document.getElementById('sellYourName').value = '';
  document.getElementById('sellContact').value = '';
  document.getElementById('sellModal').classList.add('active');
}

function submitSell(event) {
  event.preventDefault();
  if (!currentTradeProduct) return;

  const request = {
    productId: currentTradeProduct.id,
    productName: currentTradeProduct.name,
    askingPrice: parseInt(document.getElementById('sellPrice').value, 10) || currentTradeProduct.price,
    sellerName: document.getElementById('sellYourName').value.trim(),
    contact: document.getElementById('sellContact').value.trim(),
    fee: serverFeeUSD,
    createdAt: new Date().toLocaleString('id-ID'),
  };

  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.sales.add(request));
  }

  renderRequests();
  alert(`Sell request untuk ${currentTradeProduct.name} telah dikirim. Biaya server $${serverFeeUSD.toFixed(2)} akan berlaku.`);
  closeModal('sellModal');
}

function switchAdminTab(tab) {
  const tabs = document.querySelectorAll('.admin-tab');
  const contents = document.querySelectorAll('.admin-tab-content');
  tabs.forEach(button => button.classList.toggle('active', button.getAttribute('onclick').includes(tab)));
  contents.forEach(c => c.classList.toggle('active', c.id === `${tab}Tab`));
}

function addProduct(event) {
  event.preventDefault();
  const name = document.getElementById('newProductName').value;
  const price = parseInt(document.getElementById('newProductPrice').value, 10);
  const rarity = document.getElementById('newProductRarity').value;
  const image = document.getElementById('newProductImage').value;
  const stock = parseInt(document.getElementById('newProductStock').value, 10);
  const grading = parseInt(document.getElementById('newProductGrading').value, 10);

  const currentProducts = getProducts();
  const nextId = currentProducts.length ? Math.max(...currentProducts.map(p => p.id)) + 1 : 1;
  const newProduct = {
    id: nextId,
    name,
    rarity,
    price,
    stock,
    rating: 4.5,
    sales: 0,
    image,
    grading,
    popularity: 50,
    reviews: 0,
    category: rarity,
  };

  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.products.add(newProduct));
  } else {
    products.push(newProduct);
  }

  renderProducts();
  renderInventory();
  event.target.reset();
  alert('Produk baru berhasil ditambahkan.');
}

function renderInventory() {
  const inventoryBody = document.getElementById('inventoryTableBody');
  inventoryBody.innerHTML = getProducts().map(product => `
    <tr>
      <td>${product.name}</td>
      <td>${product.stock}</td>
      <td>${formatCurrency(product.price)}</td>
      <td>${product.rarity}</td>
      <td><button class="btn btn-review" onclick="addToCart(${product.id})">Add to Cart</button></td>
    </tr>
  `).join('');
}

function updateSalesAnalytics() {
  const orders = getCart();
  const productsList = getProducts();
  const totalOrders = orders.reduce((sum, item) => sum + item.quantity, 0);
  const totalRevenue = orders.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const popularProduct = productsList.reduce((best, item) => (item.sales > (best.sales || 0) ? item : best), {});
  document.getElementById('totalOrders').textContent = totalOrders;
  document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
  document.getElementById('popularProduct').textContent = popularProduct.name || '-';
  document.getElementById('conversionRate').textContent = totalOrders ? `${Math.min(100, Math.round((totalOrders / Math.max(1, productsList.length)) * 15))}%` : '0%';
}

function toggleTheme() {
  const store = getShopStore();
  if (store) {
    const ui = getUi();
    const nextTheme = ui.theme === 'dark' ? 'light' : 'dark';
    store.dispatch(store.actions.ui.setTheme(nextTheme));
    document.body.classList.toggle('dark-mode', nextTheme === 'dark');
  } else {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
  }
}

function filterProducts() {
  const rarity = document.getElementById('rarityFilter').value;
  const minPrice = parseInt(document.getElementById('priceMin').value, 10) || 0;
  const maxPrice = parseInt(document.getElementById('priceMax').value, 10) || Infinity;
  const filtered = getProducts().filter(product => {
    if (rarity && product.rarity !== rarity) return false;
    if (product.price < minPrice) return false;
    if (product.price > maxPrice) return false;
    return true;
  });
  renderProducts(filtered);
}

function sortProducts() {
  const sortBy = document.getElementById('sortBy').value;
  const sorted = [...getProducts()];
  if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  if (sortBy === 'popular') sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  if (sortBy === 'newest') sorted.sort((a, b) => b.id - a.id);
  renderProducts(sorted);
}

function resetFilters() {
  document.getElementById('rarityFilter').value = '';
  document.getElementById('sortBy').value = 'newest';
  document.getElementById('priceMin').value = '';
  document.getElementById('priceMax').value = '';
  renderProducts();
}

function searchProduct() {
  const query = document.getElementById('search').value.toLowerCase();
  const result = getProducts().filter(product => product.name.toLowerCase().includes(query));
  renderProducts(result);
}

function renderRequests() {
  const reviews = getReviews();
  const trades = getTrades();
  const sales = getSellRequests();
  const reviewList = document.getElementById('reviewRequestsList');
  const tradeList = document.getElementById('tradeRequestsList');
  const sellList = document.getElementById('sellRequestsList');

  reviewList.innerHTML = reviews.length === 0 ? '<p>Belum ada review baru.</p>' : reviews.map(request => `
    <div class="request-item">
      <strong>${request.productName}</strong>
      <p>${request.comment}</p>
      <small>Rating: ${request.rating}/5 — ${request.createdAt}</small>
    </div>
  `).join('');

  tradeList.innerHTML = trades.length === 0 ? '<p>Belum ada trade request.</p>' : trades.map(request => `
    <div class="request-item">
      <strong>${request.productName}</strong>
      <p>${request.username} ingin trade ${request.offeredPokemon}</p>
      <small>Contact: ${request.contact} — Biaya service $${request.fee.toFixed(2)} — ${request.createdAt}</small>
    </div>
  `).join('');

  if (sellList) {
    sellList.innerHTML = sales.length === 0 ? '<p>Belum ada sell request.</p>' : sales.map(request => `
      <div class="request-item">
        <strong>${request.productName}</strong>
        <p>Asking Price: ${formatCurrency(request.askingPrice)}</p>
        <small>Seller: ${request.sellerName} — Contact: ${request.contact} — Biaya service $${request.fee.toFixed(2)} — ${request.createdAt}</small>
      </div>
    `).join('');
  }
}

function renderPromo() {
  const promo = document.getElementById('promoBanner');
  if (!promo) return;
  const ui = getUi();
  promo.style.display = ui.promoVisible === false ? 'none' : 'block';
}

function togglePromo() {
  const store = getShopStore();
  if (store) {
    store.dispatch(store.actions.ui.togglePromo());
  } else {
    const promo = document.getElementById('promoBanner');
    if (promo) promo.style.display = promo.style.display === 'none' ? 'block' : 'none';
  }
}

function openBoosterPack() {
  const pack = boosterPacks[Math.floor(Math.random() * boosterPacks.length)];
  const cards = [];
  const basePool = [...pack.cards];
  while (cards.length < 3) {
    const candidate = basePool[Math.floor(Math.random() * basePool.length)];
    if (!cards.some(card => card.name === candidate.name)) cards.push(candidate);
  }
  const boosterResult = document.getElementById('boosterResult');
  boosterResult.innerHTML = `
    <h3>${pack.title}</h3>
    <p>${pack.description}</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(130px,1fr)); gap: 10px; margin-top: 15px;">
      ${cards.map(card => `
        <div style="background: #fff; border-radius: 12px; padding: 10px; text-align: center; box-shadow: 0 6px 14px rgba(0,0,0,0.08);">
          <img src="${card.image}" alt="${card.name}" style="width: 100%; max-height: 100px; object-fit: contain; border-radius: 8px;">
          <strong style="display:block; margin-top: 8px;">${card.name}</strong>
          <span style="font-size: 12px; color: #444;">${card.rarity}</span>
        </div>
      `).join('')}
    </div>
  `;
}

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 20) {
    const spinner = document.getElementById('loadingSpinner');
    spinner.classList.add('active');
    setTimeout(() => spinner.classList.remove('active'), 700);
  }
});

function toggleAdminPanel() {
  const panel = document.getElementById('adminPanel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  syncAppState();
});
