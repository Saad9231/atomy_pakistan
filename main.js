// ATOMY PAKISTAN - SPA ROUTER & COMPLETE APPLICATION LOGIC
import './style.css';

const ATOMY_PRODUCTS = [
  {
    id: 'D00101',
    name: 'HemoHIM *1set (60 packets)',
    category: 'HemoHIM',
    badgeRank: 1,
    pricePKR: 28500,
    pv: 54000,
    hashtags: ['#GST REDUCED', '#Immunity', '#GlobalNo1'],
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80',
    description: 'Atomy HemoHIM is an individually approved functional health supplement designed to awaken exhausted immune cells. Formulated from Angelica Gigas, Cnidium Officinale, and Paeonia Japonica.',
    ingredients: 'Angelica Gigas Nakai, Cnidium Officinale Makino, Paeonia Japonica Miyabe, Honey, Vitamin C, Vitamin B1, Vitamin B6.',
    howToUse: 'Take 1 packet (20ml) twice a day. Enjoy directly or dilute with warm water.'
  },
  {
    id: 'D00207',
    name: 'Absolute Skincare Set (6 Products)',
    category: 'BEAUTY',
    badgeRank: 2,
    pricePKR: 52000,
    pv: 100000,
    hashtags: ['#AbsoluteSeries', '#DeAgeing', '#LuxurySkincare'],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    description: 'CellActive™ Code & Technology targeting skin aging signals. Includes Toner, Ampoule, Serum, Lotion, Eye Complex, and Nutrition Cream.',
    ingredients: 'Dormin, EGF, Lupin Protein, Plant Stem Cell Extract, Green Tea Water.',
    howToUse: 'Apply in order: Toner → Ampoule → Serum → Lotion → Eye Complex → Nutrition Cream every morning and night.'
  },
  {
    id: 'D00351',
    name: 'Evening Care 4-Set (Home Spa)',
    category: 'BEAUTY',
    badgeRank: 3,
    pricePKR: 11500,
    pv: 13000,
    hashtags: ['#DeepCleansing', '#HomeSpa', '#PoreCare'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    description: 'Home spa treatment 4-set: Deep Cleanser, Foam Cleanser, Peeling Gel, and Peel Off Mask for radiant, clear skin.',
    ingredients: 'Ginkgo Biloba, Ginseng Extract, Carrot Root Extract, Centella Asiatica.',
    howToUse: 'Step 1 Deep Cleanser, Step 2 Foam Cleanser, Step 3 Peeling Gel (1-2 times a week), Step 4 Peel-off Mask.'
  },
  {
    id: 'D94085',
    name: 'Atomy Pure Shilajit Capsules',
    category: 'HEALTH',
    badgeRank: 4,
    pricePKR: 8500,
    pv: 12000,
    hashtags: ['#HimalayanShilajit', '#Vigor', '#Stamina'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    description: '100% Pure Organic Himalayan Shilajit enriched with Fulvic Acid and over 84 trace minerals for peak stamina and mental clarity.',
    ingredients: 'Standardized Himalayan Shilajit Extract (minimum 50% Fulvic Acid).',
    howToUse: 'Take 1 capsule daily with milk or warm water after breakfast.'
  },
  {
    id: 'D90178',
    name: 'Atomy 100% PURE Spirulina (120 Caps)',
    category: 'HEALTH',
    badgeRank: 5,
    pricePKR: 6200,
    pv: 7000,
    hashtags: ['#Superfood', '#HawaiiSpirulina', '#Antioxidant'],
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80',
    description: '100% Hawaii Kailua Kona grown Spirulina providing essential amino acids, chlorophyll, and antioxidants.',
    ingredients: 'Pure Organic Spirulina Powder (100%).',
    howToUse: 'Take 2 capsules daily with plenty of water.'
  },
  {
    id: 'D00502',
    name: 'Atomy Toothpaste Set (200g x 5 Tubes)',
    category: 'PERSONAL CARE',
    badgeRank: 6,
    pricePKR: 5400,
    pv: 3200,
    hashtags: ['#Propolis', '#GreenTea', '#OralCare'],
    image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=600&q=80',
    description: 'Natural Propolis and Green Tea extract toothpaste for antibacterial protection, plaque removal, and fresh breath.',
    ingredients: 'Green Tea Extract, Propolis Extract, Dental Type Silica, Sodium Pyrophosphate.',
    howToUse: 'Brush teeth thoroughly after meals at least twice a day.'
  },
  {
    id: 'D00608',
    name: 'Atomy Dish Detergent (1kg Concentrate)',
    category: 'HOME',
    badgeRank: 7,
    pricePKR: 3200,
    pv: 3100,
    hashtags: ['#EcoFriendly', '#NaturalExtracts', '#Class1Detergent'],
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
    description: 'Class 1 Eco-friendly natural dishwashing liquid safe for washing dishes, fruits, and vegetables.',
    ingredients: 'Calamansi Extract, Bergamot, Plant-based Surfactants.',
    howToUse: 'Dilute 1 drop in 1 liter of water for dishwashing or fruit rinsing.'
  },
  {
    id: 'D00712',
    name: 'Atomy Cafe Arabica Coffee (80 Sticks)',
    category: 'FOOD',
    badgeRank: 8,
    pricePKR: 4800,
    pv: 4000,
    hashtags: ['#100PercentArabica', '#FreezeDried', '#RichAroma'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    description: '100% Premium Arabica Coffee beans from Brazil and Colombia, finely micro-ground for smooth taste.',
    ingredients: '100% Freeze-dried Instant Arabica Coffee Powder.',
    howToUse: 'Dissolve 1 stick in 100ml-150ml of hot or cold water.'
  }
];

const state = {
  cart: [],
  activeCategory: 'ALL',
  activeTab: 'ALL',
  sortMode: 'DEFAULT',
  currentSlide: 0,
  isSlidePlaying: true,
  slideTimer: null,
  activePage: 'home'
};

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// SPA PAGE ROUTER
window.switchPage = function(pageId) {
  state.activePage = pageId;
  const pages = document.querySelectorAll('.page-view');
  pages.forEach(p => p.classList.remove('active'));

  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update navbar active tab state
  document.querySelectorAll('.gnb-menu-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-page') === pageId);
  });

  // Portal tabs
  const tabMall = document.getElementById('tab-mall-btn');
  const tabOffice = document.getElementById('tab-office-btn');
  if (tabMall && tabOffice) {
    if (pageId === 'office') {
      tabMall.classList.remove('tab-mall');
      tabMall.classList.add('tab-office');
      tabOffice.classList.remove('tab-office');
      tabOffice.classList.add('tab-mall');
    } else {
      tabMall.classList.remove('tab-office');
      tabMall.classList.add('tab-mall');
      tabOffice.classList.remove('tab-mall');
      tabOffice.classList.add('tab-office');
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// HERO CAROUSEL
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide-item');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  const toggleBtn = document.getElementById('hero-toggle');
  const counter = document.getElementById('hero-counter');

  if (!slides.length) return;

  function updateSlider() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === state.currentSlide);
    });
    if (counter) counter.textContent = `${state.currentSlide + 1} / ${slides.length}`;
  }

  function nextSlide() {
    state.currentSlide = (state.currentSlide + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    state.currentSlide = (state.currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function startTimer() {
    if (state.slideTimer) clearInterval(state.slideTimer);
    state.slideTimer = setInterval(nextSlide, 4000);
    state.isSlidePlaying = true;
    if (toggleBtn) toggleBtn.textContent = '⏸';
  }

  function stopTimer() {
    if (state.slideTimer) clearInterval(state.slideTimer);
    state.isSlidePlaying = false;
    if (toggleBtn) toggleBtn.textContent = '▶';
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startTimer(); });
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (state.isSlidePlaying) stopTimer();
      else startTimer();
    });
  }

  startTimer();
}

// RENDER PRODUCTS
function renderProducts() {
  const grid = document.getElementById('atomy-product-grid');
  if (!grid) return;

  let filtered = [...ATOMY_PRODUCTS];

  if (state.activeCategory !== 'ALL') {
    filtered = filtered.filter(p => p.category.toUpperCase() === state.activeCategory.toUpperCase());
  }

  if (state.activeTab === 'BEST') {
    filtered.sort((a, b) => a.badgeRank - b.badgeRank);
  } else if (state.activeTab === 'NEW') {
    filtered = filtered.filter(p => p.badgeRank > 4);
  } else if (state.activeTab === 'RECOMMEND') {
    filtered = filtered.filter(p => p.pv >= 10000);
  }

  if (state.sortMode === 'PRICE_LOW') {
    filtered.sort((a, b) => a.pricePKR - b.pricePKR);
  } else if (state.sortMode === 'PRICE_HIGH') {
    filtered.sort((a, b) => b.pricePKR - a.pricePKR);
  } else if (state.sortMode === 'PV_HIGH') {
    filtered.sort((a, b) => b.pv - a.pv);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding:40px; color:#888;">No products found matching your filter criteria.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="atomy-product-card">
      <div class="card-rank-badge">BEST <b>${p.badgeRank}</b></div>
      <div class="card-image-box" onclick="openProductDetailModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-info-box">
        <h3 class="card-title" onclick="openProductDetailModal('${p.id}')">${p.name}</h3>
        <div class="card-price-row">
          <span class="card-price-value">Rs. ${p.pricePKR.toLocaleString()}</span>
        </div>
        <div class="card-pv-tag">⚡ ${p.pv.toLocaleString()} PV</div>
        <div class="card-member-note">Distributor price and PV information will be shown after login</div>
        <div class="card-hashtags">
          ${p.hashtags.map(h => `<span class="card-hashtag-item">${h}</span>`).join('')}
        </div>
        <div class="card-actions-row">
          <button class="btn-card-cart" onclick="addToCart('${p.id}')">🛒 Add to Cart</button>
          <button class="btn-card-detail" onclick="openProductDetailModal('${p.id}')">👁</button>
        </div>
      </div>
    </div>
  `).join('');
}

// CART MANAGEMENT
window.addToCart = function(id) {
  const product = ATOMY_PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  openCartDrawer();
};

function updateCartUI() {
  const cartBadge = document.getElementById('cart-count');
  const totalItems = state.cart.reduce((acc, i) => acc + i.qty, 0);
  if (cartBadge) cartBadge.textContent = totalItems;

  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const pvEl = document.getElementById('cart-pv-total');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:40px 20px; color:#888;">Your cart is empty.</div>`;
    if (subtotalEl) subtotalEl.textContent = 'Rs. 0';
    if (pvEl) pvEl.textContent = '0 PV';
    return;
  }

  let subtotal = 0;
  let pv = 0;

  container.innerHTML = state.cart.map(item => {
    subtotal += item.pricePKR * item.qty;
    pv += item.pv * item.qty;

    return `
      <div style="display:flex; gap:12px; padding:10px 0; border-bottom:1px solid #eee; align-items:center;">
        <img src="${item.image}" style="width:54px; height:54px; object-fit:cover; border-radius:4px;">
        <div style="flex:1;">
          <div style="font-weight:700; font-size:0.85rem;">${item.name}</div>
          <div style="font-size:0.75rem; color:var(--atomy-cyan); font-weight:700;">⚡ ${item.pv.toLocaleString()} PV</div>
          <div style="font-weight:800; font-size:0.85rem; margin-top:2px;">Rs. ${(item.pricePKR * item.qty).toLocaleString()}</div>
        </div>
        <div style="display:flex; align-items:center; gap:6px;">
          <button style="border:1px solid #ccc; width:22px; height:22px; border-radius:4px;" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-size:0.85rem; font-weight:700;">${item.qty}</span>
          <button style="border:1px solid #ccc; width:22px; height:22px; border-radius:4px;" onclick="updateCartQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (pvEl) pvEl.textContent = `${pv.toLocaleString()} PV`;
}

window.updateCartQty = function(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== id);
  }
  updateCartUI();
};

function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.add('open');
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('open');
}

window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
};

window.openProductDetailModal = function(productId) {
  const product = ATOMY_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const contentBox = document.getElementById('product-modal-content');
  if (!contentBox) return;

  contentBox.innerHTML = `
    <div class="modal-header-banner">
      <h2>${product.name}</h2>
      <p style="font-size:0.85rem; opacity:0.9;">Item Code: #${product.id} • Category: ${product.category}</p>
    </div>
    <div class="modal-body-padding">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
        <img src="${product.image}" style="width:100%; aspect-ratio:1; object-fit:cover; border-radius:8px; border:1px solid #eee;">
        <div>
          <div style="background:var(--atomy-cyan-light); padding:12px; border-radius:8px; margin-bottom:14px;">
            <div style="font-size:1.4rem; font-weight:800; color:#222;">Rs. ${product.pricePKR.toLocaleString()}</div>
            <div style="font-size:0.9rem; font-weight:800; color:var(--atomy-cyan); margin-top:2px;">⚡ ${product.pv.toLocaleString()} PV</div>
          </div>
          <p style="font-size:0.85rem; color:#555; line-height:1.5; margin-bottom:14px;">${product.description}</p>
          <button style="width:100%; background:var(--atomy-cyan); color:#fff; font-weight:800; padding:12px; border-radius:6px;" onclick="addToCart('${product.id}'); closeModal('product-modal');">🛒 Add to Cart</button>
        </div>
      </div>
      <div class="doc-section-card">
        <h3>Ingredients & Formulation</h3>
        <p>${product.ingredients}</p>
      </div>
      <div class="doc-section-card">
        <h3>Usage Instructions</h3>
        <p>${product.howToUse}</p>
      </div>
    </div>
  `;

  openModal('product-modal');
};

window.openCheckoutModal = function() {
  if (state.cart.length === 0) {
    alert('Your shopping cart is empty.');
    return;
  }
  closeCartDrawer();
  openModal('checkout-modal');
};

function setupEventListeners() {
  document.getElementById('open-cart-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('close-cart-btn')?.addEventListener('click', closeCartDrawer);

  document.getElementById('float-cart-btn')?.addEventListener('click', openCartDrawer);

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  });

  document.getElementById('cart-drawer-overlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('cart-drawer-overlay')) closeCartDrawer();
  });

  document.querySelectorAll('.cat-icon-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.cat-icon-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const cat = item.getAttribute('data-category');
      state.activeCategory = cat;
      renderProducts();
    });
  });

  document.querySelectorAll('.best-tab-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.best-tab-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeTab = pill.getAttribute('data-tab');
      renderProducts();
    });
  });

  document.getElementById('sort-select')?.addEventListener('change', (e) => {
    state.sortMode = e.target.value;
    renderProducts();
  });

  const searchInput = document.getElementById('hd_search');
  const searchDropdown = document.getElementById('search-dropdown-menu');
  const searchResultsBox = document.getElementById('search-results-box');

  if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchDropdown.classList.remove('show');
        return;
      }

      const matches = ATOMY_PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      if (matches.length > 0) {
        searchResultsBox.innerHTML = matches.map(p => `
          <div style="display:flex; align-items:center; gap:8px; padding:6px; cursor:pointer;" onclick="openProductDetailModal('${p.id}'); document.getElementById('search-dropdown-menu').classList.remove('show');">
            <img src="${p.image}" style="width:36px; height:36px; object-fit:cover; border-radius:4px;">
            <div>
              <div style="font-size:0.8rem; font-weight:700;">${p.name}</div>
              <div style="font-size:0.75rem; color:var(--atomy-cyan);">Rs. ${p.pricePKR.toLocaleString()}</div>
            </div>
          </div>
        `).join('');
      } else {
        searchResultsBox.innerHTML = `<div style="font-size:0.8rem; color:#888; padding:6px;">No products found matching "${q}"</div>`;
      }
      searchDropdown.classList.add('show');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-center-search')) {
        searchDropdown.classList.remove('show');
      }
    });
  }

  document.querySelectorAll('.search-drop-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const val = tag.getAttribute('data-tag');
      if (searchInput) {
        searchInput.value = val;
        searchInput.dispatchEvent(new Event('input'));
      }
    });
  });

  document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign in successful! Member PV dashboard active.');
    closeModal('login-modal');
  });

  document.getElementById('join-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registration Successful! Welcome to Atomy Pakistan.');
    closeModal('join-modal');
  });

  document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your order! Your PV points have been credited to your Atomy Pakistan account.');
    state.cart = [];
    updateCartUI();
    closeModal('checkout-modal');
  });
}
