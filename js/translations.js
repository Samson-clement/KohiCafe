/**
 * KOHI - Translations Module
 * Supports English and Arabic with RTL
 */

const translations = {
    en: {
        // Welcome Screen
        welcome: "Welcome",
        tap_to_view: "Tap to view menu",
        kohi: "Kohi",

        // Menu Screen
        menu: "Menu",
        all: "All",
        categories: "Categories",

        // Categories - Kohi
        best_sellers: "Best Sellers",
        boba_drinks: "Boba Drinks",
        desserts: "Desserts",
        sandwiches: "Sandwiches",
        iced_drinks: "Iced Drinks",
        hot_drinks: "Hot Drinks",
        brewed_coffee: "Brewed Coffee",
        mojito_iced_tea: "Mojito & Iced Tea",
        water: "Water",

        // Cart & Order
        cart: "Cart",
        add_to_order: "Add to Order",
        added_to_order: "Added to order",
        quantity: "Quantity",
        total: "Total",
        checkout: "Checkout",
        back: "Back",
        view_order: "View Order",
        your_order: "Your Order",
        clear: "Clear",
        item: "item",
        items: "items",
        confirm_order: "Confirm Order",
        clear_cart: "Clear Cart",
        empty_cart: "Your cart is empty",
        order_total: "Order Total",

        // Checkout
        thank_you: "Thank You!",
        order_confirmed: "Order Confirmed",
        checkout_message: "Your order has been received",
        checkout_instruction: "Please inform your waiter",
        show_barista: "Please call the barista and show them this order",
        no_payment_note: "No payment required - just confirms your order",

        // Clear order
        clear_order_title: "Clear Order?",
        clear_order_message: "Are you sure you want to clear all items from your order?",
        cancel: "Cancel",
        yes_clear: "Yes, Clear"
    },

    ar: {
        // Welcome Screen
        welcome: "هلا وغلا",
        tap_to_view: "اضغط عشان تشوف القائمة",
        kohi: "كوهي",

        // Menu Screen
        menu: "القائمة",
        all: "الكل",
        categories: "الأقسام",

        // Categories - Kohi
        best_sellers: "الأكثر طلباً",
        boba_drinks: "مشروبات البوبا",
        desserts: "الحلويات",
        sandwiches: "السندويشات",
        iced_drinks: "المشروبات الباردة",
        hot_drinks: "المشروبات الحارة",
        brewed_coffee: "القهوة المخمرة",
        mojito_iced_tea: "موهيتو وشاي بارد",
        water: "ماي",

        // Cart & Order
        cart: "السلة",
        add_to_order: "ضيفه للطلب",
        added_to_order: "انضاف للطلب",
        quantity: "الكمية",
        total: "المجموع",
        checkout: "إكمال الطلب",
        back: "رجوع",
        view_order: "شوف الطلب",
        your_order: "طلبك",
        clear: "امسح",
        item: "صنف",
        items: "أصناف",
        confirm_order: "أكد الطلب",
        clear_cart: "امسح السلة",
        empty_cart: "السلة فاضية",
        order_total: "المجموع الكلي",

        // Checkout
        thank_you: "يعطيك العافية!",
        order_confirmed: "تم تأكيد طلبك",
        checkout_message: "استلمنا طلبك",
        checkout_instruction: "خبّر الباريستا",
        show_barista: "نادي الباريستا وعرض عليه الطلب",
        no_payment_note: "بدون دفع - بس لتأكيد طلبك",

        // Clear order
        clear_order_title: "تمسح الطلب؟",
        clear_order_message: "متأكد تبي تمسح كل الأصناف من طلبك؟",
        cancel: "لا",
        yes_clear: "إي، امسح"
    }
};

// Arabic numerals mapping
const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

/**
 * Convert number to Arabic numerals
 */
function toArabicNumerals(num) {
    return String(num).split('').map(digit => {
        if (digit === '.') return '٫';
        if (digit === ',') return '،';
        const n = parseInt(digit);
        return isNaN(n) ? digit : arabicNumerals[n];
    }).join('');
}

/**
 * Format price with currency
 */
function formatPrice(price, lang = 'en') {
    const formattedPrice = price.toFixed(3);

    if (lang === 'ar') {
        return `${toArabicNumerals(formattedPrice)} د.ك`;
    }
    return `KWD ${formattedPrice}`;
}

/**
 * Format number based on language
 */
function formatNumber(num, lang = 'en') {
    if (lang === 'ar') {
        return toArabicNumerals(num);
    }
    return String(num);
}

/**
 * Get translation by key
 */
function t(key, lang = 'en') {
    return translations[lang]?.[key] || translations.en[key] || key;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, t, formatPrice, formatNumber, toArabicNumerals };
}
