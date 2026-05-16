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

function formatCurrency(value) {
  return `Rp ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
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

function renderProducts(list = products) {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  productGrid.innerHTML = list.map(product => `
    <div class="card">
      <div class="card-header">
        <span class="rarity-badge rarity-${product.rarity}">${product.rarity.replace('-', ' ')}</span>
        <button class="wishlist-btn ${wishlist.some(item => item.id === product.id) ? 'active' : ''}" onclick="toggleWishlistItem(${product.id})" title="Tambah ke Wishlist">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h3 class="card-title">${product.name}</h3>
      <div class="card-meta">
        <span>${product.reviews} Reviews</span>
        <span>Grade ${product.grading}/10</span>
      </div>
      <p class="price">${formatCurrency(product.price)}</p>
      <div class="stock-indicator ${product.stock <= 5 ? 'stock-low' : 'stock-available'}">
        ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
      </div>
      <div class="rating">${'★'.repeat(Math.round(product.rating))} ${product.rating.toFixed(1)}</div>
      <div class="card-actions">
        <button class="btn btn-add" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i>Add to Cart</button>
        <div class="action-row">
          <button class="btn btn-review" onclick="openReviewModal(${product.id})">Review</button>
          <button class="btn btn-trade" onclick="openTradeModal(${product.id})">Trade</button>
        </div>
      </div>
    </div>
  `).join('');
}

function updateBadgeCounts() {
  document.getElementById('cartCount').textContent = cart.length;
  document.getElementById('wishlistCount').textContent = wishlist.length;
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product || product.stock <= 0) return alert('Produk tidak tersedia.');
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
  updateBadgeCounts();
}

function toggleWishlistItem(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const index = wishlist.findIndex(item => item.id === productId);
  if (index >= 0) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(product);
  }
  renderProducts();
  renderWishlist();
  updateBadgeCounts();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = cart.length === 0 ? '<p>Keranjang kosong.</p>' : cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatCurrency(item.price)} x ${item.quantity}</div>
      </div>
      <div class="qty">
        <button onclick="changeCartQuantity(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeCartQuantity(${index}, 1)">+</button>
      </div>
      <button class="cart-remove" onclick="removeCartItem(${index})">×</button>
    </div>
  `).join('');
  calculateCartTotals();
}

function changeCartQuantity(index, delta) {
  const item = cart[index];
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart.splice(index, 1);
  renderCart();
  updateBadgeCounts();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  renderCart();
  updateBadgeCounts();
}

function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById('subtotal').textContent = formatCurrency(subtotal);
  const discountAmount = parseInt(document.getElementById('discountAmount').dataset.value || '0', 10);
  const shippingCost = parseInt(document.getElementById('shippingCost').dataset.value || '0', 10);
  document.getElementById('totalPrice').textContent = formatCurrency(subtotal - discountAmount + shippingCost);
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const validCoupons = { WELCOME20: 0.2, BOOSTER10: 0.1 };
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
  wishlistItems.innerHTML = wishlist.length === 0 ? '<p>Wishlist kosong.</p>' : wishlist.map(item => `
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
  wishlist = wishlist.filter(item => item.id !== productId);
  renderWishlist();
  renderProducts();
  updateBadgeCounts();
}

function addAllWishlistToCart() {
  wishlist.forEach(item => {
    const existing = cart.find(cartItem => cartItem.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
  });
  wishlist = [];
  renderWishlist();
  renderCart();
  updateBadgeCounts();
}

function clearCart() {
  cart = [];
  document.getElementById('discountAmount').textContent = 'Rp 0';
  document.getElementById('discountAmount').dataset.value = '0';
  renderCart();
  updateBadgeCounts();
}

function clearWishlist() {
  wishlist = [];
  renderWishlist();
  renderProducts();
  updateBadgeCounts();
}

function checkoutTokopedia() {
  if (!cart.length) return alert('Keranjang kosong. Tambahkan produk terlebih dahulu.');
  window.open('https://www.tokopedia.com', '_blank');
}

function openReviewModal(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  currentReviewProduct = product;
  document.getElementById('reviewProductName').value = product.name;
  document.getElementById('reviewText').value = '';
  document.getElementById('reviewModal').classList.add('active');
}

function openTradeModal(productId) {
  const product = products.find(item => item.id === productId);
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
  alert(`Terima kasih! Review Anda untuk ${currentReviewProduct.name} telah dikirim.`);
  closeModal('reviewModal');
}

function submitTrade(event) {
  event.preventDefault();
  alert(`Trade request untuk ${currentTradeProduct.name} telah dikirim. Tim kami akan menghubungi Anda segera.`);
  closeModal('tradeModal');
}

function switchAdminTab(tab) {
  const tabs = document.querySelectorAll('.admin-tab');
  const contents = document.querySelectorAll('.admin-tab-content');
  tabs.forEach(button => button.classList.toggle('active', button.textContent.toLowerCase().includes(tab)));
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

  const newProduct = {
    id: products.length + 1,
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
  products.push(newProduct);
  renderProducts();
  renderInventory();
  event.target.reset();
  alert('Produk baru berhasil ditambahkan.');
}

function renderInventory() {
  const inventoryBody = document.getElementById('inventoryTableBody');
  inventoryBody.innerHTML = products.map(product => `
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
  const totalOrders = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalRevenue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const popularProduct = products.reduce((best, item) => (item.sales > (best.sales || 0) ? item : best), {});
  document.getElementById('totalOrders').textContent = totalOrders;
  document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
  document.getElementById('popularProduct').textContent = popularProduct.name || '-';
  document.getElementById('conversionRate').textContent = totalOrders ? `${Math.min(100, Math.round((totalOrders / products.length) * 12))}%` : '0%';
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle('dark-mode', currentTheme === 'dark');
}

function filterProducts() {
  const rarity = document.getElementById('rarityFilter').value;
  const minPrice = parseInt(document.getElementById('priceMin').value, 10) || 0;
  const maxPrice = parseInt(document.getElementById('priceMax').value, 10) || Infinity;
  const filtered = products.filter(product => {
    if (rarity && product.rarity !== rarity) return false;
    if (product.price < minPrice) return false;
    if (product.price > maxPrice) return false;
    return true;
  });
  renderProducts(filtered);
}

function sortProducts() {
  const sortBy = document.getElementById('sortBy').value;
  const sorted = [...products];
  if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);
  if (sortBy === 'popular') sorted.sort((a, b) => b.popularity - a.popularity);
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
  const result = products.filter(product => product.name.toLowerCase().includes(query));
  renderProducts(result);
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
  renderNews();
  renderProducts();
  renderInventory();
  renderCart();
  renderWishlist();
  calculateShipping();
  updateBadgeCounts();
});
