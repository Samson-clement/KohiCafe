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
        no_payment_note: "No payment required - just confirms your order",

        // Clear order
        clear_order_title: "Clear Order?",
        clear_order_message: "Are you sure you want to clear all items from your order?",
        cancel: "Cancel",
        yes_clear: "Yes, Clear"
    },

    ar: {
        // Welcome Screen
        welcome: "أهلاً وسهلاً",
        tap_to_view: "انقر لعرض القائمة",
        kohi: "كوهي",

        // Menu Screen
        menu: "القائمة",
        all: "الكل",
        categories: "الفئات",

        // Categories - Kohi
        best_sellers: "الأكثر مبيعاً",
        boba_drinks: "مشروبات البوبا",
        desserts: "الحلويات",
        sandwiches: "السندويشات",
        iced_drinks: "المشروبات المثلجة",
        hot_drinks: "المشروبات الساخنة",
        brewed_coffee: "القهوة المخمرة",
        mojito_iced_tea: "موهيتو وشاي مثلج",
        water: "مياه",

        // Cart & Order
        cart: "السلة",
        add_to_order: "أضف للطلب",
        added_to_order: "تمت الإضافة للطلب",
        quantity: "الكمية",
        total: "المجموع",
        checkout: "إتمام الطلب",
        back: "رجوع",
        view_order: "عرض الطلب",
        your_order: "طلبك",
        clear: "مسح",
        item: "عنصر",
        items: "عناصر",
        confirm_order: "تأكيد الطلب",
        clear_cart: "مسح السلة",
        empty_cart: "سلتك فارغة",
        order_total: "إجمالي الطلب",

        // Checkout
        thank_you: "شكراً لك!",
        order_confirmed: "تم تأكيد الطلب",
        checkout_message: "تم استلام طلبك",
        checkout_instruction: "يرجى إبلاغ النادل",
        no_payment_note: "لا يلزم الدفع - فقط لتأكيد طلبك",

        // Clear order
        clear_order_title: "مسح الطلب؟",
        clear_order_message: "هل أنت متأكد من مسح جميع العناصر من طلبك؟",
        cancel: "إلغاء",
        yes_clear: "نعم، مسح"
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
