/**
 * KOHI - Main Application Module
 * Web-based menu viewing application
 */

// ==========================================
// STATE MANAGEMENT
// ==========================================

const state = {
    currentLang: 'en',
    currentRestaurant: null,
    currentCategory: 'all',
    cart: [],
    selectedItem: null
};

// ==========================================
// DOM ELEMENTS
// ==========================================

const elements = {
    // Screens
    welcomeScreen: document.getElementById('welcome-screen'),
    menuScreen: document.getElementById('menu-screen'),
    cartScreen: document.getElementById('cart-screen'),

    // Welcome
    langBtn: document.getElementById('lang-btn'),

    // Menu
    backBtn: document.getElementById('back-btn'),
    menuTitle: document.getElementById('menu-title'),
    categoryTabs: document.getElementById('category-tabs'),
    menuGrid: document.getElementById('menu-grid'),
    cartHeaderBtn: document.getElementById('cart-header-btn'),
    cartBadge: document.getElementById('cart-badge'),
    floatingCart: document.getElementById('floating-cart'),
    cartCount: document.getElementById('cart-count'),
    cartTotal: document.getElementById('cart-total'),

    // Cart Screen
    cartBackBtn: document.getElementById('cart-back-btn'),
    clearCartBtn: document.getElementById('clear-cart-btn'),
    cartItems: document.getElementById('cart-items'),
    cartEmpty: document.getElementById('cart-empty'),
    cartFooter: document.getElementById('cart-footer'),
    totalAmount: document.getElementById('total-amount'),
    checkoutBtn: document.getElementById('checkout-btn'),

    // Modals
    itemModal: document.getElementById('item-modal'),
    modalClose: document.getElementById('modal-close'),
    modalImage: document.getElementById('modal-image'),
    modalPrice: document.getElementById('modal-price'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalAddBtn: document.getElementById('modal-add-btn'),

    thankyouModal: document.getElementById('thankyou-modal'),
    thankyouCloseBtn: document.getElementById('thankyou-close-btn'),

    // Toast
    toast: document.getElementById('toast')
};

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    // Load saved state
    loadState();

    // Apply language
    applyLanguage();

    // Setup event listeners
    setupEventListeners();

    // Update translations
    updateTranslations();
}

function loadState() {
    // Load language preference
    const savedLang = localStorage.getItem('kohi_language');
    if (savedLang) {
        state.currentLang = savedLang;
    }

    // Load cart
    const savedCart = localStorage.getItem('kohi_cart');
    if (savedCart) {
        try {
            state.cart = JSON.parse(savedCart);
        } catch (e) {
            state.cart = [];
        }
    }
}

function saveState() {
    localStorage.setItem('kohi_language', state.currentLang);
    localStorage.setItem('kohi_cart', JSON.stringify(state.cart));
}

// ==========================================
// LANGUAGE MANAGEMENT
// ==========================================

function applyLanguage() {
    const isArabic = state.currentLang === 'ar';
    document.documentElement.lang = state.currentLang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    // Update language switch state
    const langSwitch = document.querySelector('.lang-switch');
    if (langSwitch) {
        if (isArabic) {
            langSwitch.classList.add('arabic');
        } else {
            langSwitch.classList.remove('arabic');
        }
    }
}

function toggleLanguage() {
    const langSwitch = document.querySelector('.lang-switch');
    const newLang = state.currentLang === 'en' ? 'ar' : 'en';

    // Add arabic class for animation
    if (langSwitch) {
        if (newLang === 'ar') {
            langSwitch.classList.add('arabic');
        } else {
            langSwitch.classList.remove('arabic');
        }
    }

    // Small delay to show animation before applying changes
    setTimeout(() => {
        state.currentLang = newLang;
        applyLanguage();
        updateTranslations();
        saveState();

        // Re-render current screen content
        if (state.currentRestaurant) {
            renderCategories();
            renderMenuItems();
        }
        if (elements.cartScreen.classList.contains('active')) {
            renderCartItems();
        }
    }, 150);
}

function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = t(key, state.currentLang);
    });
}

// ==========================================
// SCREEN NAVIGATION
// ==========================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function selectRestaurant(restaurantId) {
    state.currentRestaurant = restaurantId;
    state.currentCategory = 'all';

    // Apply theme
    document.body.classList.remove('theme-kohi');
    document.body.classList.add(`theme-${restaurantId}`);

    // Update menu title
    const restaurant = menuData.restaurants[restaurantId];
    elements.menuTitle.textContent = state.currentLang === 'ar'
        ? restaurant.nameAr
        : restaurant.name;

    // Render menu content
    renderCategories();
    renderMenuItems();
    updateCartUI();

    // Show menu screen
    showScreen('menu-screen');
}

function goBack() {
    state.currentRestaurant = null;
    showScreen('welcome-screen');
}

function showCart() {
    renderCartItems();
    showScreen('cart-screen');
}

function hideCart() {
    showScreen('menu-screen');
}

// ==========================================
// CATEGORY RENDERING
// ==========================================

function renderCategories() {
    const categories = getCategoriesByRestaurant(state.currentRestaurant);

    let html = `
        <button class="category-tab ${state.currentCategory === 'all' ? 'active' : ''}"
                data-category="all">
            ${t('all', state.currentLang)}
        </button>
    `;

    categories.forEach(category => {
        const name = state.currentLang === 'ar' ? category.nameAr : category.name;
        html += `
            <button class="category-tab ${state.currentCategory === category.id ? 'active' : ''}"
                    data-category="${category.id}">
                ${name}
            </button>
        `;
    });

    elements.categoryTabs.innerHTML = html;

    // Add click listeners
    elements.categoryTabs.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            state.currentCategory = tab.dataset.category;
            renderCategories();
            renderMenuItems();
        });
    });
}

// ==========================================
// MENU ITEMS RENDERING
// ==========================================

function renderMenuItems() {
    let items = getItemsByRestaurant(state.currentRestaurant);

    if (state.currentCategory !== 'all') {
        items = items.filter(item => item.category === state.currentCategory);
    }

    const html = items.map(item => createMenuItemHTML(item)).join('');
    elements.menuGrid.innerHTML = html;

    // Add event listeners
    elements.menuGrid.querySelectorAll('.menu-item').forEach(el => {
        const itemId = el.dataset.itemId;
        const item = getItemById(itemId);

        // Image click opens modal
        el.querySelector('.item-image-container').addEventListener('click', () => {
            openItemModal(item);
        });

        // Add button
        const addBtn = el.querySelector('.add-btn');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(item);
            });
        }

        // Quantity controls
        const qtyMinus = el.querySelector('.qty-minus');
        const qtyPlus = el.querySelector('.qty-plus');

        if (qtyMinus) {
            qtyMinus.addEventListener('click', (e) => {
                e.stopPropagation();
                updateCartQuantity(itemId, -1);
            });
        }

        if (qtyPlus) {
            qtyPlus.addEventListener('click', (e) => {
                e.stopPropagation();
                updateCartQuantity(itemId, 1);
            });
        }
    });
}

function createMenuItemHTML(item) {
    const name = state.currentLang === 'ar' ? item.nameAr : item.name;
    const price = formatPrice(item.price, state.currentLang);
    const cartItem = state.cart.find(ci => ci.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    // Determine image source
    const imageSrc = item.image.startsWith('http')
        ? item.image
        : item.image;

    return `
        <div class="menu-item" data-item-id="${item.id}">
            <div class="item-image-container">
                <img src="${imageSrc}" alt="${name}" class="item-image"
                     onerror="this.src='images/Cortado.png'">
                <div class="item-price-badge">${price}</div>
            </div>
            <div class="item-details">
                <h3 class="item-name">${name}</h3>
                <div class="item-actions">
                    <div class="quantity-controls ${quantity > 0 ? 'visible' : ''}">
                        <button class="qty-btn qty-minus">−</button>
                        <span class="qty-value">${formatNumber(quantity, state.currentLang)}</span>
                        <button class="qty-btn qty-plus">+</button>
                    </div>
                    <button class="add-btn" ${quantity > 0 ? 'style="display:none"' : ''}>
                        ${t('add_to_order', state.currentLang)}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// ITEM MODAL
// ==========================================

function openItemModal(item) {
    state.selectedItem = item;

    const name = state.currentLang === 'ar' ? item.nameAr : item.name;
    const description = state.currentLang === 'ar' ? item.descriptionAr : item.description;
    const price = formatPrice(item.price, state.currentLang);

    const imageSrc = item.image.startsWith('http')
        ? item.image
        : item.image;

    elements.modalImage.src = imageSrc;
    elements.modalImage.alt = name;
    elements.modalImage.onerror = function() { this.src = 'images/Cortado.png'; };
    elements.modalPrice.textContent = price;
    elements.modalTitle.textContent = name;
    elements.modalDescription.textContent = description;

    elements.itemModal.classList.add('active');
}

function closeItemModal() {
    elements.itemModal.classList.remove('active');
    state.selectedItem = null;
}

// ==========================================
// CART MANAGEMENT
// ==========================================

function addToCart(item) {
    const existingItem = state.cart.find(ci => ci.id === item.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            id: item.id,
            quantity: 1
        });
    }

    saveState();
    updateCartUI();
    renderMenuItems();
    showToast();
}

function updateCartQuantity(itemId, delta) {
    const cartItem = state.cart.find(ci => ci.id === itemId);

    if (cartItem) {
        cartItem.quantity += delta;

        if (cartItem.quantity <= 0) {
            state.cart = state.cart.filter(ci => ci.id !== itemId);
        }

        saveState();
        updateCartUI();
        renderMenuItems();

        if (elements.cartScreen.classList.contains('active')) {
            renderCartItems();
        }
    }
}

function removeFromCart(itemId) {
    state.cart = state.cart.filter(ci => ci.id !== itemId);
    saveState();
    updateCartUI();
    renderMenuItems();
    renderCartItems();
}

function clearCart() {
    if (confirm(t('clear_cart', state.currentLang) + '?')) {
        state.cart = [];
        saveState();
        updateCartUI();
        renderMenuItems();
        renderCartItems();
    }
}

function getCartTotal() {
    return state.cart.reduce((total, cartItem) => {
        const item = getItemById(cartItem.id);
        return total + (item ? item.price * cartItem.quantity : 0);
    }, 0);
}

function getCartItemCount() {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartUI() {
    const count = getCartItemCount();
    const total = getCartTotal();

    // Update cart badge
    elements.cartBadge.textContent = formatNumber(count, state.currentLang);
    elements.cartBadge.classList.toggle('visible', count > 0);

    // Update floating cart
    elements.cartCount.textContent = formatNumber(count, state.currentLang);
    elements.cartTotal.textContent = formatPrice(total, state.currentLang);
    elements.floatingCart.classList.toggle('visible', count > 0);

    // Update checkout button state
    elements.checkoutBtn.disabled = count === 0;
}

// ==========================================
// CART SCREEN RENDERING
// ==========================================

function renderCartItems() {
    if (state.cart.length === 0) {
        elements.cartItems.innerHTML = '';
        elements.cartEmpty.classList.add('visible');
        elements.cartFooter.style.display = 'none';
        return;
    }

    elements.cartEmpty.classList.remove('visible');
    elements.cartFooter.style.display = 'block';

    const html = state.cart.map(cartItem => {
        const item = getItemById(cartItem.id);
        if (!item) return '';

        const name = state.currentLang === 'ar' ? item.nameAr : item.name;
        const restaurant = menuData.restaurants[item.restaurant];
        const restaurantName = state.currentLang === 'ar' ? restaurant.nameAr : restaurant.name;
        const itemTotal = item.price * cartItem.quantity;

        const imageSrc = item.image.startsWith('http')
            ? item.image
            : item.image;

        return `
            <div class="cart-item" data-item-id="${item.id}">
                <img src="${imageSrc}" alt="${name}" class="cart-item-image"
                     onerror="this.src='images/Cortado.png'">
                <div class="cart-item-info">
                    <div>
                        <h3 class="cart-item-name">${name}</h3>
                        <span class="cart-item-restaurant">${restaurantName}</span>
                    </div>
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">${formatPrice(itemTotal, state.currentLang)}</span>
                        <div class="cart-item-qty">
                            <button class="qty-btn qty-minus">−</button>
                            <span class="qty-value">${formatNumber(cartItem.quantity, state.currentLang)}</span>
                            <button class="qty-btn qty-plus">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    elements.cartItems.innerHTML = html;

    // Update total
    elements.totalAmount.textContent = formatPrice(getCartTotal(), state.currentLang);

    // Add event listeners
    elements.cartItems.querySelectorAll('.cart-item').forEach(el => {
        const itemId = el.dataset.itemId;

        el.querySelector('.qty-minus').addEventListener('click', () => {
            updateCartQuantity(itemId, -1);
        });

        el.querySelector('.qty-plus').addEventListener('click', () => {
            updateCartQuantity(itemId, 1);
        });
    });
}

// ==========================================
// CHECKOUT
// ==========================================

function checkout() {
    if (state.cart.length === 0) return;

    // Show thank you modal
    elements.thankyouModal.classList.add('active');
}

function closeThankYouModal() {
    elements.thankyouModal.classList.remove('active');

    // Clear cart after checkout
    state.cart = [];
    saveState();
    updateCartUI();

    // Go back to menu
    hideCart();
    renderMenuItems();
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================

function showToast() {
    elements.toast.classList.add('visible');

    setTimeout(() => {
        elements.toast.classList.remove('visible');
    }, 2000);
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEventListeners() {
    // Language toggle
    elements.langBtn.addEventListener('click', toggleLanguage);

    // View menu button
    const viewMenuBtn = document.getElementById('view-menu-btn');
    if (viewMenuBtn) {
        viewMenuBtn.addEventListener('click', () => {
            selectRestaurant(viewMenuBtn.dataset.restaurant);
        });
    }

    // Menu navigation
    elements.backBtn.addEventListener('click', goBack);
    elements.cartHeaderBtn.addEventListener('click', showCart);
    elements.floatingCart.addEventListener('click', showCart);

    // Cart screen
    elements.cartBackBtn.addEventListener('click', hideCart);
    elements.clearCartBtn.addEventListener('click', clearCart);
    elements.checkoutBtn.addEventListener('click', checkout);

    // Item modal
    elements.modalClose.addEventListener('click', closeItemModal);
    elements.itemModal.querySelector('.modal-backdrop').addEventListener('click', closeItemModal);
    elements.modalAddBtn.addEventListener('click', () => {
        if (state.selectedItem) {
            addToCart(state.selectedItem);
            closeItemModal();
        }
    });

    // Thank you modal
    elements.thankyouCloseBtn.addEventListener('click', closeThankYouModal);
    elements.thankyouModal.querySelector('.modal-backdrop').addEventListener('click', closeThankYouModal);

    // Handle back button / swipe
    window.addEventListener('popstate', () => {
        if (elements.cartScreen.classList.contains('active')) {
            hideCart();
        } else if (elements.menuScreen.classList.contains('active')) {
            goBack();
        }
    });

    // Touch swipe for back navigation
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 100;
        const isRTL = state.currentLang === 'ar';
        const diff = touchEndX - touchStartX;

        // Swipe right (or left in RTL) from edge to go back
        if (isRTL) {
            if (diff < -swipeThreshold && touchStartX > window.innerWidth - 50) {
                if (elements.cartScreen.classList.contains('active')) {
                    hideCart();
                } else if (elements.menuScreen.classList.contains('active')) {
                    goBack();
                }
            }
        } else {
            if (diff > swipeThreshold && touchStartX < 50) {
                if (elements.cartScreen.classList.contains('active')) {
                    hideCart();
                } else if (elements.menuScreen.classList.contains('active')) {
                    goBack();
                }
            }
        }
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (elements.itemModal.classList.contains('active')) {
                closeItemModal();
            } else if (elements.thankyouModal.classList.contains('active')) {
                closeThankYouModal();
            } else if (elements.cartScreen.classList.contains('active')) {
                hideCart();
            } else if (elements.menuScreen.classList.contains('active')) {
                goBack();
            }
        }
    });
}

// ==========================================
// START APPLICATION
// ==========================================

document.addEventListener('DOMContentLoaded', init);
