/* ========================================
   ORGANIC STORE - COMPLETE JAVASCRIPT
   Professional E-Commerce Website
   ======================================== */

// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    category: "fruits",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500",
    rating: 5,
    reviews: 124,
    badge: "sale",
    description: "Crisp and juicy organic apples, perfect for snacking or baking. Sourced from certified organic farms.",
    inStock: true,
    weight: "1 kg",
    origin: "Himachal Pradesh"
  },
  {
    id: 2,
    name: "Organic Bananas",
    category: "fruits",
    price: 59.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500",
    rating: 4,
    reviews: 89,
    badge: "organic",
    description: "Sweet and nutritious organic bananas, rich in potassium and vitamins.",
    inStock: true,
    weight: "1 dozen",
    origin: "Kerala"
  },
  {
    id: 3,
    name: "Fresh Strawberries",
    category: "fruits",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500",
    rating: 5,
    reviews: 156,
    badge: "new",
    description: "Juicy red strawberries, freshly picked from organic farms. Perfect for desserts.",
    inStock: true,
    weight: "500 g",
    origin: "Maharashtra"
  },
  {
    id: 4,
    name: "Organic Mangoes",
    category: "fruits",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500",
    rating: 5,
    reviews: 203,
    badge: "sale",
    description: "Premium Alphonso mangoes, known for their rich flavor and aroma.",
    inStock: true,
    weight: "1 kg",
    origin: "Ratnagiri"
  },
  {
    id: 5,
    name: "Fresh Spinach",
    category: "vegetables",
    price: 39.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500",
    rating: 4,
    reviews: 67,
    badge: "organic",
    description: "Fresh organic spinach leaves, packed with iron and nutrients.",
    inStock: true,
    weight: "250 g",
    origin: "Punjab"
  },
  {
    id: 6,
    name: "Organic Carrots",
    category: "vegetables",
    price: 49.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500",
    rating: 4,
    reviews: 78,
    badge: "organic",
    description: "Crunchy organic carrots, perfect for salads and cooking.",
    inStock: true,
    weight: "500 g",
    origin: "Haryana"
  },
  {
    id: 7,
    name: "Fresh Broccoli",
    category: "vegetables",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://cdn.pixabay.com/photo/2015/10/17/15/49/broccoli-992710_1280.jpg?w=500",
    rating: 5,
    reviews: 92,
    badge: "sale",
    description: "Fresh organic broccoli, rich in vitamins and antioxidants.",
    inStock: true,
    weight: "500 g",
    origin: "Himachal Pradesh"
  },
  {
    id: 8,
    name: "Organic Tomatoes",
    category: "vegetables",
    price: 59.99,
    originalPrice: null,
    image: "https://cdn.pixabay.com/photo/2021/09/06/13/21/cherry-tomatoes-6601705_1280.jpg?w=500",
    rating: 4,
    reviews: 134,
    badge: "organic",
    description: "Ripe organic tomatoes, perfect for salads, sauces, and cooking.",
    inStock: true,
    weight: "1 kg",
    origin: "Karnataka"
  },
  {
    id: 9,
    name: "Organic Milk",
    category: "dairy",
    price: 79.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500",
    rating: 5,
    reviews: 187,
    badge: "organic",
    description: "Pure organic milk from grass-fed cows, no hormones or antibiotics.",
    inStock: true,
    weight: "1 liter",
    origin: "Gujarat"
  },
  {
    id: 10,
    name: "Greek Yogurt",
    category: "dairy",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500",
    rating: 5,
    reviews: 145,
    badge: "sale",
    description: "Creamy Greek yogurt, high in protein and probiotics.",
    inStock: true,
    weight: "400 g",
    origin: "Maharashtra"
  },
  {
    id: 11,
    name: "Organic Cheese",
    category: "dairy",
    price: 249.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500",
    rating: 4,
    reviews: 98,
    badge: "new",
    description: "Premium organic cheese made from organic milk.",
    inStock: true,
    weight: "200 g",
    origin: "Rajasthan"
  },
  {
    id: 12,
    name: "Mixed Nuts",
    category: "snacks",
    price: 499.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500",
    rating: 5,
    reviews: 234,
    badge: "sale",
    description: "Premium mixed nuts including almonds, cashews, and walnuts.",
    inStock: true,
    weight: "500 g",
    origin: "Kashmir"
  },
  {
    id: 13,
    name: "Organic Granola",
    category: "snacks",
    price: 299.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=500",
    rating: 4,
    reviews: 112,
    badge: "organic",
    description: "Crunchy organic granola with dried fruits and honey.",
    inStock: true,
    weight: "400 g",
    origin: "Tamil Nadu"
  },
  {
    id: 14,
    name: "Dried Fruits Mix",
    category: "snacks",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://cdn.pixabay.com/photo/2014/08/26/15/20/fruit-428052_1280.jpg?w=500",
    rating: 5,
    reviews: 167,
    badge: "sale",
    description: "Assorted dried fruits including dates, figs, and apricots.",
    inStock: true,
    weight: "400 g",
    origin: "Afghanistan"
  },
  {
    id: 15,
    name: "Organic Honey",
    category: "snacks",
    price: 399.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500",
    rating: 5,
    reviews: 198,
    badge: "organic",
    description: "Pure organic honey, raw and unprocessed.",
    inStock: true,
    weight: "500 g",
    origin: "Uttarakhand"
  },
  {
    id: 16,
    name: "Brown Rice",
    category: "grains",
    price: 149.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    rating: 4,
    reviews: 145,
    badge: "organic",
    description: "Organic brown rice, rich in fiber and nutrients.",
    inStock: true,
    weight: "1 kg",
    origin: "West Bengal"
  }
];

// ===== CART & WISHLIST STATE =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
  return `₹${price.toFixed(2)}`;
}

function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fas fa-star"></i>';
    } else {
      stars += '<i class="far fa-star empty"></i>';
    }
  }
  return stars;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

// ===== TOAST NOTIFICATIONS =====
function showToast(type, title, message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const icons = {
    success: 'fas fa-check',
    error: 'fas fa-times',
    warning: 'fas fa-exclamation',
    info: 'fas fa-info'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      <i class="${icons[type]}"></i>
    </div>
    <div class="toast-content">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
    <button class="toast-close">
      <i class="fas fa-times"></i>
    </button>
  `;
  
  container.appendChild(toast);
  
  // Close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 400);
  });
  
  // Auto remove
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// ===== PRELOADER =====
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1500);
  }
  
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100
    });
  }
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('nav');
  const scrollTop = document.getElementById('scrollTop');
  
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  // Scroll to top button
  if (scrollTop) {
    if (window.scrollY > 500) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  }
});

// Scroll to top
document.getElementById('scrollTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== HERO SLIDER =====
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  let slideInterval;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (dots[i]) dots[i].classList.remove('active');
    });
    
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    
    // Move slides
    const slidesContainer = document.querySelector('.slides');
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoplay() {
    clearInterval(slideInterval);
  }
  
  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });
  
  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      stopAutoplay();
      startAutoplay();
    });
  });
  
  // Start autoplay
  startAutoplay();
}

// ===== PRODUCT CARD GENERATION =====
function createProductCard(product) {
  const isInWishlist = wishlist.some(item => item.id === product.id);
  
  return `
    <div class="col-lg-3 col-md-6" data-aos="fade-up">
      <div class="product-card" data-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-badges">
            ${product.badge === 'sale' ? '<span class="product-badge sale">Sale</span>' : ''}
            ${product.badge === 'new' ? '<span class="product-badge new">New</span>' : ''}
            ${product.badge === 'organic' ? '<span class="product-badge organic">Organic</span>' : ''}
          </div>
          <div class="product-actions">
            <button class="product-action-btn wishlist-action ${isInWishlist ? 'active' : ''}" 
                    data-id="${product.id}" title="Add to Wishlist">
              <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <button class="product-action-btn quickview-action" 
                    data-id="${product.id}" title="Quick View">
              <i class="far fa-eye"></i>
            </button>
            <button class="product-action-btn addcart-action" 
                    data-id="${product.id}" title="Add to Cart">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
          <div class="product-rating">
            ${generateStars(product.rating)}
          </div>
          <div class="product-price">
            <span class="current-price">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== LOAD PRODUCTS =====
function loadTrendingProducts() {
  const container = document.getElementById('trendingProducts');
  if (!container) return;
  
  const trendingProducts = products.filter(p => p.badge === 'sale' || p.badge === 'new').slice(0, 4);
  container.innerHTML = trendingProducts.map(createProductCard).join('');
  
  attachProductEventListeners();
}

function loadBestSellers() {
  const container = document.getElementById('bestSellers');
  if (!container) return;
  
  const bestSellers = products.filter(p => p.rating === 5).slice(0, 4);
  container.innerHTML = bestSellers.map(createProductCard).join('');
  
  attachProductEventListeners();
}

function loadShopProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;
  
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  let filteredProducts = [...products];
  
  if (category && category !== 'all') {
    filteredProducts = products.filter(p => p.category === category);
  }
  
  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-badges">
          ${product.badge === 'sale' ? '<span class="product-badge sale">Sale</span>' : ''}
          ${product.badge === 'new' ? '<span class="product-badge new">New</span>' : ''}
          ${product.badge === 'organic' ? '<span class="product-badge organic">Organic</span>' : ''}
        </div>
        <div class="product-actions">
          <button class="product-action-btn wishlist-action" data-id="${product.id}">
            <i class="far fa-heart"></i>
          </button>
          <button class="product-action-btn quickview-action" data-id="${product.id}">
            <i class="far fa-eye"></i>
          </button>
          <button class="product-action-btn addcart-action" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
        <div class="product-rating">
          ${generateStars(product.rating)}
        </div>
        <div class="product-price">
          <span class="current-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  
  // Update results count
  const resultsCount = document.getElementById('resultsCount');
  if (resultsCount) {
    resultsCount.textContent = filteredProducts.length;
  }
  
  attachProductEventListeners();
}

// ===== PRODUCT DETAIL PAGE =====
function loadProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    container.innerHTML = '<div class="col-12 text-center"><h3>Product not found</h3></div>';
    return;
  }
  
  // Update breadcrumb
  const breadcrumb = document.getElementById('productBreadcrumb');
  if (breadcrumb) breadcrumb.textContent = product.name;
  
  // Update page title
  document.title = `${product.name} - Organic Store`;
  
  const isInWishlist = wishlist.some(item => item.id === product.id);
  
  container.innerHTML = `
    <div class="col-lg-6">
      <div class="product-gallery" data-aos="fade-right">
        <div class="main-image">
          <img src="${product.image}" alt="${product.name}" id="mainImage">
        </div>
        <div class="thumbnail-images">
          <div class="thumbnail active">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="thumbnail">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="thumbnail">
            <img src="${product.image}" alt="${product.name}">
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="product-details" data-aos="fade-left">
        <span class="product-category">${product.category}</span>
        <h1>${product.name}</h1>
        
        <div class="product-rating">
          ${generateStars(product.rating)}
          <span>(${product.reviews} reviews)</span>
        </div>
        
        <div class="product-price">
          <span class="current-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        
        <p class="product-description">${product.description}</p>
        
        <div class="product-meta">
          <div class="meta-item">
            <span>Availability:</span>
            <span class="${product.inStock ? 'text-success' : 'text-danger'}">
              ${product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <div class="meta-item">
            <span>Weight:</span>
            <span>${product.weight}</span>
          </div>
          <div class="meta-item">
            <span>Origin:</span>
            <span>${product.origin}</span>
          </div>
        </div>
        
        <div class="quantity-selector">
          <label>Quantity:</label>
          <div class="quantity-input">
            <button type="button" id="decreaseQty">-</button>
            <input type="number" id="productQty" value="1" min="1" max="10">
            <button type="button" id="increaseQty">+</button>
          </div>
        </div>
        
        <div class="product-buttons">
          <button class="add-to-cart-btn" id="addToCartBtn" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" id="wishlistBtn" data-id="${product.id}">
            <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
        
        <div class="product-share">
          <span>Share:</span>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
          <a href="#"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  `;
  
  // Update description tab
  const descTab = document.getElementById('productDescription');
  if (descTab) descTab.textContent = product.description;
  
  const weightTab = document.getElementById('productWeight');
  if (weightTab) weightTab.textContent = product.weight;
  
  const originTab = document.getElementById('productOrigin');
  if (originTab) originTab.textContent = product.origin;
  
  // Quantity controls
  const qtyInput = document.getElementById('productQty');
  const decreaseBtn = document.getElementById('decreaseQty');
  const increaseBtn = document.getElementById('increaseQty');
  
  decreaseBtn?.addEventListener('click', () => {
    if (qtyInput.value > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
  });
  
  increaseBtn?.addEventListener('click', () => {
    if (qtyInput.value < 10) qtyInput.value = parseInt(qtyInput.value) + 1;
  });
  
  // Add to cart
  document.getElementById('addToCartBtn')?.addEventListener('click', () => {
    const qty = parseInt(qtyInput.value);
    addToCart(product.id, qty);
  });
  
  // Wishlist
  document.getElementById('wishlistBtn')?.addEventListener('click', function() {
    toggleWishlist(product.id);
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
  });
  
  // Thumbnails
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function() {
      document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('mainImage').src = this.querySelector('img').src;
    });
  });
  
  // Load related products
  loadRelatedProducts(product.category, product.id);
}

function loadRelatedProducts(category, currentId) {
  const container = document.getElementById('relatedProducts');
  if (!container) return;
  
  const related = products.filter(p => p.category === category && p.id !== currentId).slice(0, 4);
  container.innerHTML = related.map(createProductCard).join('');
  
  attachProductEventListeners();
}

// ===== PRODUCT TABS =====
function initProductTabs() {
  const tabs = document.querySelectorAll('.product-tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}

// ===== CART FUNCTIONS =====
function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  
  saveCart();
  showToast('success', 'Added to Cart', `${product.name} has been added to your cart.`);
  
  // Open cart sidebar
  openCartSidebar();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('info', 'Removed', 'Item removed from cart.');
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, Math.min(10, quantity));
    saveCart();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  showToast('info', 'Cart Cleared', 'All items have been removed.');
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
  // Update cart count
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
  
  // Update cart sidebar
  updateCartSidebar();
  
  // Update cart page if on cart page
  updateCartPage();
  
  // Update checkout page if on checkout
  updateCheckoutPage();
}

function updateCartSidebar() {
  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  const cartSubtotal = document.getElementById('cartSubtotal');
  
  if (!cartItems) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = '';
    if (cartEmpty) cartEmpty.classList.add('active');
    if (cartFooter) cartFooter.classList.remove('active');
  } else {
    if (cartEmpty) cartEmpty.classList.remove('active');
    if (cartFooter) cartFooter.classList.add('active');
    
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <span class="price">${formatPrice(item.price)}</span>
          <div class="cart-item-qty">
            <button class="decrease-qty" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="increase-qty" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `).join('');
    
    if (cartSubtotal) {
      cartSubtotal.textContent = formatPrice(getCartTotal());
    }
    
    // Attach event listeners
    cartItems.querySelectorAll('.decrease-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const item = cart.find(i => i.id === id);
        if (item && item.quantity > 1) {
          updateCartQuantity(id, item.quantity - 1);
        }
      });
    });
    
    cartItems.querySelectorAll('.increase-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const item = cart.find(i => i.id === id);
        if (item) {
          updateCartQuantity(id, item.quantity + 1);
        }
      });
    });
    
    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(parseInt(btn.dataset.id));
      });
    });
  }
}

function openCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  
  if (sidebar) sidebar.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  
  if (sidebar) sidebar.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== CART PAGE =====
function updateCartPage() {
  const tableBody = document.getElementById('cartTableBody');
  const cartEmpty = document.getElementById('cartEmptyPage');
  const cartActions = document.getElementById('cartActions');
  const cartSummary = document.getElementById('cartSummary');
  
  if (!tableBody) return;
  
  if (cart.length === 0) {
    tableBody.parentElement.parentElement.style.display = 'none';
    if (cartActions) cartActions.style.display = 'none';
    if (cartEmpty) cartEmpty.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'none';
  } else {
    tableBody.parentElement.parentElement.style.display = 'block';
    if (cartActions) cartActions.style.display = 'flex';
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';
    
    tableBody.innerHTML = cart.map(item => `
      <tr>
        <td>
          <div class="cart-product">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-product-info">
              <h5>${item.name}</h5>
            </div>
          </div>
        </td>
        <td>${formatPrice(item.price)}</td>
        <td>
          <div class="cart-quantity">
            <button class="decrease-qty" data-id="${item.id}">-</button>
            <input type="number" value="${item.quantity}" min="1" max="10" data-id="${item.id}">
            <button class="increase-qty" data-id="${item.id}">+</button>
          </div>
        </td>
        <td><strong>${formatPrice(item.price * item.quantity)}</strong></td>
        <td>
          <button class="remove-item" data-id="${item.id}">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `).join('');
    
    // Update summary
    const subtotal = getCartTotal();
    const shipping = subtotal > 500 ? 0 : 50;
    const tax = subtotal * 0.18;
    const total = subtotal + shipping + tax;
    
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryShipping = document.getElementById('summaryShipping');
    const summaryTax = document.getElementById('summaryTax');
    const summaryTotal = document.getElementById('summaryTotal');
    
    if (summarySubtotal) summarySubtotal.textContent = formatPrice(subtotal);
    if (summaryShipping) summaryShipping.textContent = shipping === 0 ? 'Free' : formatPrice(shipping);
    if (summaryTax) summaryTax.textContent = formatPrice(tax);
    if (summaryTotal) summaryTotal.textContent = formatPrice(total);
    
    // Attach event listeners
    tableBody.querySelectorAll('.decrease-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const item = cart.find(i => i.id === id);
        if (item && item.quantity > 1) {
          updateCartQuantity(id, item.quantity - 1);
        }
      });
    });
    
    tableBody.querySelectorAll('.increase-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const item = cart.find(i => i.id === id);
        if (item) {
          updateCartQuantity(id, item.quantity + 1);
        }
      });
    });
    
    tableBody.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(parseInt(btn.dataset.id));
      });
    });
  }
}

// ===== CHECKOUT PAGE =====
function updateCheckoutPage() {
  const orderItems = document.getElementById('orderItems');
  if (!orderItems) return;
  
  orderItems.innerHTML = cart.map(item => `
    <div class="order-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="order-item-info">
        <h5>${item.name}</h5>
        <span>Qty: ${item.quantity}</span>
      </div>
      <span class="order-item-price">${formatPrice(item.price * item.quantity)}</span>
    </div>
  `).join('');
  
  // Update totals
  const subtotal = getCartTotal();
  const shippingOption = document.querySelector('input[name="shipping"]:checked');
  let shipping = 50;
  
  if (shippingOption) {
    switch (shippingOption.value) {
      case 'standard': shipping = 50; break;
      case 'express': shipping = 100; break;
      case 'same-day': shipping = 200; break;
    }
  }
  
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;
  
  const checkoutSubtotal = document.getElementById('checkoutSubtotal');
  const checkoutShipping = document.getElementById('checkoutShipping');
  const checkoutTax = document.getElementById('checkoutTax');
  const checkoutTotal = document.getElementById('checkoutTotal');
  
  if (checkoutSubtotal) checkoutSubtotal.textContent = formatPrice(subtotal);
  if (checkoutShipping) checkoutShipping.textContent = formatPrice(shipping);
  if (checkoutTax) checkoutTax.textContent = formatPrice(tax);
  if (checkoutTotal) checkoutTotal.textContent = formatPrice(total);
}

function initCheckout() {
  // Shipping option change
  document.querySelectorAll('input[name="shipping"]').forEach(input => {
    input.addEventListener('change', updateCheckoutPage);
  });
  
  // Payment method change
  document.querySelectorAll('input[name="payment"]').forEach(input => {
    input.addEventListener('change', function() {
      const cardDetails = document.getElementById('cardDetails');
      const upiDetails = document.getElementById('upiDetails');
      
      if (cardDetails) cardDetails.style.display = this.value === 'card' ? 'block' : 'none';
      if (upiDetails) upiDetails.style.display = this.value === 'upi' ? 'block' : 'none';
    });
  });
  
  // Form submission
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate order processing
      const placeOrderBtn = document.getElementById('placeOrderBtn');
      if (placeOrderBtn) {
        placeOrderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        placeOrderBtn.disabled = true;
      }
      
      setTimeout(() => {
        // Generate order ID
        const orderId = 'ORG' + Date.now().toString().slice(-8);
        document.getElementById('orderId').textContent = '#' + orderId;
        
        // Clear cart
        cart = [];
        saveCart();
        
        // Show success modal
        const modal = document.getElementById('orderSuccessModal');
        if (modal) modal.classList.add('active');
      }, 2000);
    });
  }
}

// ===== WISHLIST FUNCTIONS =====
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const index = wishlist.findIndex(item => item.id === productId);
  
  if (index === -1) {
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    showToast('success', 'Added to Wishlist', `${product.name} added to wishlist.`);
  } else {
    wishlist.splice(index, 1);
    showToast('info', 'Removed from Wishlist', `${product.name} removed from wishlist.`);
  }
  
  saveWishlist();
}

function updateWishlistUI() {
  const wishlistCount = document.getElementById('wishlistCount');
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }
}

// ===== QUICK VIEW =====
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('quickviewModal');
  const overlay = document.getElementById('quickviewOverlay');
  const content = document.getElementById('quickviewContent');
  
  if (!modal || !content) return;
  
  content.innerHTML = `
    <div class="quickview-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="quickview-info">
      <span class="product-category">${product.category}</span>
      <h2>${product.name}</h2>
      <div class="product-rating">
        ${generateStars(product.rating)}
        <span style="margin-left: 10px; color: var(--text-light);">(${product.reviews} reviews)</span>
      </div>
      <div class="product-price">
        <span class="current-price">${formatPrice(product.price)}</span>
        ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
      </div>
      <p class="product-description">${product.description}</p>
      <div class="quantity-selector">
        <label>Quantity:</label>
        <div class="quantity-input">
          <button type="button" class="qv-decrease">-</button>
          <input type="number" class="qv-qty" value="1" min="1" max="10">
          <button type="button" class="qv-increase">+</button>
        </div>
      </div>
      <div class="product-buttons">
        <button class="add-to-cart-btn qv-add-cart" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
      <a href="product.html?id=${product.id}" class="btn-outline" style="margin-top: 15px; display: inline-block;">
        View Full Details
      </a>
    </div>
  `;
  
  // Quantity controls
  const qtyInput = content.querySelector('.qv-qty');
  content.querySelector('.qv-decrease')?.addEventListener('click', () => {
    if (qtyInput.value > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
  });
  content.querySelector('.qv-increase')?.addEventListener('click', () => {
    if (qtyInput.value < 10) qtyInput.value = parseInt(qtyInput.value) + 1;
  });
  
  // Add to cart
  content.querySelector('.qv-add-cart')?.addEventListener('click', () => {
    addToCart(product.id, parseInt(qtyInput.value));
    closeQuickView();
  });
  
  modal.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.getElementById('quickviewModal');
  const overlay = document.getElementById('quickviewOverlay');
  
  if (modal) modal.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== PRODUCT EVENT LISTENERS =====
function attachProductEventListeners() {
  // Add to cart buttons
  document.querySelectorAll('.addcart-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });
  
  // Wishlist buttons
  document.querySelectorAll('.wishlist-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
      btn.classList.toggle('active');
      const icon = btn.querySelector('i');
      icon.classList.toggle('far');
      icon.classList.toggle('fas');
    });
  });
  
  // Quick view buttons
  document.querySelectorAll('.quickview-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openQuickView(parseInt(btn.dataset.id));
    });
  });
}

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (!searchInput || !searchResults) return;
  
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    
    if (query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }
    
    const results = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    ).slice(0, 5);
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
    } else {
      searchResults.innerHTML = results.map(product => `
        <a href="product.html?id=${product.id}" class="search-result-item">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h6>${product.name}</h6>
            <span>${formatPrice(product.price)}</span>
          </div>
        </a>
      `).join('');
    }
    
    searchResults.classList.add('active');
  });
  
  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      searchResults.classList.remove('active');
    }
  });
}

// ===== LOGIN MODAL =====
function initLoginModal() {
  const modal = document.getElementById('loginModal');
  const closeBtn = document.getElementById('closeLoginModal');
  const userBtn = document.getElementById('userBtn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const authForms = document.querySelectorAll('.auth-form');
  
  // Open modal
  userBtn?.addEventListener('click', () => {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
  
  // Close modal
  closeBtn?.addEventListener('click', () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Close on overlay click
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      
      tabBtns.forEach(b => b.classList.remove('active'));
      authForms.forEach(f => f.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(tab + 'Form')?.classList.add('active');
    });
  });
  
  // Toggle password visibility
  document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function() {
      const input = this.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
      }
    });
  });
  
  // Form submissions
  document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('success', 'Welcome Back!', 'You have successfully logged in.');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('success', 'Account Created!', 'Welcome to Organic Store.');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
}

// ===== SHOP PAGE FILTERS =====
function initShopFilters() {
  // View options
  const viewBtns = document.querySelectorAll('.view-btn');
  const productsGrid = document.getElementById('productsGrid');
  
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if (productsGrid) {
        if (btn.dataset.view === 'list') {
          productsGrid.classList.add('list-view');
        } else {
          productsGrid.classList.remove('list-view');
        }
      }
    });
  });
  
  // Price range
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  
  priceRange?.addEventListener('input', function() {
    if (priceValue) priceValue.textContent = formatPrice(parseInt(this.value));
  });
  
  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  sortSelect?.addEventListener('change', function() {
    let sortedProducts = [...products];
    
    switch (this.value) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-az':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-za':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
    }
    
    // Re-render products
    if (productsGrid) {
      productsGrid.innerHTML = sortedProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-badges">
              ${product.badge === 'sale' ? '<span class="product-badge sale">Sale</span>' : ''}
              ${product.badge === 'new' ? '<span class="product-badge new">New</span>' : ''}
              ${product.badge === 'organic' ? '<span class="product-badge organic">Organic</span>' : ''}
            </div>
            <div class="product-actions">
              <button class="product-action-btn wishlist-action" data-id="${product.id}">
                <i class="far fa-heart"></i>
              </button>
              <button class="product-action-btn quickview-action" data-id="${product.id}">
                <i class="far fa-eye"></i>
              </button>
              <button class="product-action-btn addcart-action" data-id="${product.id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div class="product-info">
            <span class="product-category">${product.category}</span>
            <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
            <div class="product-rating">
              ${generateStars(product.rating)}
            </div>
            <div class="product-price">
              <span class="current-price">${formatPrice(product.price)}</span>
              ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
          </div>
        </div>
      `).join('');
      
      attachProductEventListeners();
    }
  });
  
  // Reset filters
  document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.querySelectorAll('input[name="category"]').forEach(input => {
      input.checked = input.value === 'all';
    });
    if (priceRange) priceRange.value = 1000;
    if (priceValue) priceValue.textContent = '₹1000';
    if (sortSelect) sortSelect.value = 'default';
    loadShopProducts();
  });
}

// ===== COUPON CODE =====
function initCoupon() {
  const couponInput = document.getElementById('couponInput');
  const applyCoupon = document.getElementById('applyCoupon');
  const couponMessage = document.getElementById('couponMessage');
  
  const validCoupons = {
    'ORGANIC30': 30,
    'FRESH20': 20,
    'SAVE10': 10
  };
  
  applyCoupon?.addEventListener('click', () => {
    const code = couponInput.value.toUpperCase().trim();
    
    if (validCoupons[code]) {
      const discount = validCoupons[code];
      if (couponMessage) {
        couponMessage.textContent = `Coupon applied! ${discount}% off`;
        couponMessage.className = 'coupon-message success';
      }
      
      // Update totals with discount
      const subtotal = getCartTotal();
      const discountAmount = subtotal * (discount / 100);
      
      const discountRow = document.getElementById('discountRow');
      const checkoutDiscount = document.getElementById('checkoutDiscount');
      
      if (discountRow) discountRow.style.display = 'flex';
      if (checkoutDiscount) checkoutDiscount.textContent = `-${formatPrice(discountAmount)}`;
      
      showToast('success', 'Coupon Applied!', `You saved ${formatPrice(discountAmount)}`);
    } else {
      if (couponMessage) {
        couponMessage.textContent = 'Invalid coupon code';
        couponMessage.className = 'coupon-message error';
      }
      showToast('error', 'Invalid Code', 'This coupon code is not valid.');
    }
  });
}

// ===== NEWSLETTER =====
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    
    showToast('success', 'Subscribed!', 'Thank you for subscribing to our newsletter.');
    form.reset();
  });
}

// ===== STAR RATING =====
function initStarRating() {
  const stars = document.querySelectorAll('.star-rating i');
  
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.remove('far');
          s.classList.add('fas', 'active');
        } else {
          s.classList.remove('fas', 'active');
          s.classList.add('far');
        }
      });
    });
    
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('hover');
        }
      });
    });
    
    star.addEventListener('mouseleave', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });
  });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initSlider();
  initSearch();
  initLoginModal();
  initShopFilters();
  initProductTabs();
  initCheckout();
  initCoupon();
  initNewsletter();
  initStarRating();
  
  // Load products based on page
  loadTrendingProducts();
  loadBestSellers();
  loadShopProducts();
  loadProductDetail();
  
  // Update UI
  updateCartUI();
  updateWishlistUI();
  
  // Cart sidebar events
  document.getElementById('cartBtn')?.addEventListener('click', openCartSidebar);
  document.getElementById('closeCart')?.addEventListener('click', closeCartSidebar);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCartSidebar);
  
  // Quick view events
  document.getElementById('closeQuickview')?.addEventListener('click', closeQuickView);
  document.getElementById('quickviewOverlay')?.addEventListener('click', closeQuickView);
  
  // Clear cart button
  document.getElementById('clearCartBtn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  });
  
  // Escape key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartSidebar();
      closeQuickView();
      document.getElementById('loginModal')?.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Export for use in other files if needed
window.OrganicStore = {
  products,
  cart,
  wishlist,
  addToCart,
  removeFromCart,
  toggleWishlist,
  showToast
};