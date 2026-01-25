/**
 * KOHI - Menu Data Module
 * Complete menu data for Kohi Coffee Bar
 */

const menuData = {
    restaurants: {
        kohi: {
            id: 'kohi',
            name: 'Kohi',
            nameAr: 'كوهي',
            tagline: 'Coffee Bar',
            logo: 'images/kohilogo.png',
            theme: 'kohi'
        }
    },

    categories: {
        best_sellers: {
            id: 'best_sellers',
            name: 'Best Sellers',
            nameAr: 'الأكثر مبيعاً',
            restaurant: 'kohi',
            translationKey: 'best_sellers'
        },
        boba_drinks: {
            id: 'boba_drinks',
            name: 'Boba Drinks',
            nameAr: 'مشروبات البوبا',
            restaurant: 'kohi',
            translationKey: 'boba_drinks'
        },
        desserts: {
            id: 'desserts',
            name: 'Desserts',
            nameAr: 'الحلويات',
            restaurant: 'kohi',
            translationKey: 'desserts'
        },
        sandwiches: {
            id: 'sandwiches',
            name: 'Sandwiches',
            nameAr: 'السندويشات',
            restaurant: 'kohi',
            translationKey: 'sandwiches'
        },
        iced_drinks: {
            id: 'iced_drinks',
            name: 'Iced Drinks',
            nameAr: 'المشروبات المثلجة',
            restaurant: 'kohi',
            translationKey: 'iced_drinks'
        },
        hot_drinks: {
            id: 'hot_drinks',
            name: 'Hot Drinks',
            nameAr: 'المشروبات الساخنة',
            restaurant: 'kohi',
            translationKey: 'hot_drinks'
        },
        brewed_coffee: {
            id: 'brewed_coffee',
            name: 'Brewed Coffee',
            nameAr: 'القهوة المخمرة',
            restaurant: 'kohi',
            translationKey: 'brewed_coffee'
        },
        mojito_iced_tea: {
            id: 'mojito_iced_tea',
            name: 'Mojito & Iced Tea',
            nameAr: 'موهيتو وشاي مثلج',
            restaurant: 'kohi',
            translationKey: 'mojito_iced_tea'
        },
        water: {
            id: 'water',
            name: 'Water',
            nameAr: 'مياه',
            restaurant: 'kohi',
            translationKey: 'water'
        }
    },

    items: [
        // ==========================================
        // BEST SELLERS
        // ==========================================
        {
            id: 'matcha_boba_best',
            name: 'Matcha Boba',
            nameAr: 'ماتشا بوبا',
            description: 'Black Tapioca, Matcha, Sweetened Milk And Cream',
            descriptionAr: 'تابيوكا سوداء، ماتشا، حليب محلى وكريمة',
            price: 2.250,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/matcha.png'
        },
        {
            id: 'boba_japanese_pancake_best',
            name: 'Boba Japanese Pancake',
            nameAr: 'بان كيك ياباني بالبوبا',
            description: 'Japanese Soufflé Pancake with Tapioca topping',
            descriptionAr: 'بان كيك سوفليه ياباني مع تابيوكا',
            price: 2.500,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'lotus_cheesecake_best',
            name: 'Lotus Cheesecake',
            nameAr: 'تشيز كيك اللوتس',
            description: 'Velvety cream cheese filling infused with lotus biscoff cookies on a crunchy cookie crust',
            descriptionAr: 'حشوة كريمية ناعمة بنكهة بسكويت اللوتس على قاعدة مقرمشة',
            price: 2.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'strawberry_mojito_best',
            name: 'Strawberry Mojito',
            nameAr: 'موهيتو فراولة',
            description: 'Strawberry Syrup, Lemon, Mint And Sprite',
            descriptionAr: 'شراب الفراولة، ليمون، نعناع وسبرايت',
            price: 1.750,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'chocolate_japanese_pancake_best',
            name: 'Chocolate Japanese Pancake',
            nameAr: 'بان كيك ياباني بالشوكولاتة',
            description: 'Fluffy Japanese pancake topped with Belgium chocolate and mixed berries',
            descriptionAr: 'بان كيك ياباني هش مع شوكولاتة بلجيكية وتوت مشكل',
            price: 2.500,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'japanese_pancake_best',
            name: 'Japanese Pancake',
            nameAr: 'بان كيك ياباني',
            description: 'Soft Japanese souffle pancake with butter and maple syrup',
            descriptionAr: 'بان كيك سوفليه ياباني طري مع زبدة وشراب القيقب',
            price: 2.250,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },

        // ==========================================
        // BOBA DRINKS
        // ==========================================
        {
            id: 'kohi_bubble_tea',
            name: 'Kohi Bubble Tea',
            nameAr: 'كوهي بابل تي',
            description: 'Black Tapioca, Caramel, Milk Tea And Cream',
            descriptionAr: 'تابيوكا سوداء، كراميل، شاي بالحليب وكريمة',
            price: 2.000,
            category: 'boba_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'brown_sugar_boba',
            name: 'Brown Sugar Boba',
            nameAr: 'بوبا السكر البني',
            description: 'Black tapioca, brown sugar syrup and cream',
            descriptionAr: 'تابيوكا سوداء، شراب السكر البني وكريمة',
            price: 2.000,
            category: 'boba_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'espresso_boba',
            name: 'Espresso Boba',
            nameAr: 'إسبريسو بوبا',
            description: 'Black Tapioca, Espresso Shot, Brown Sugar Syrup And Cream',
            descriptionAr: 'تابيوكا سوداء، شوت إسبريسو، شراب السكر البني وكريمة',
            price: 2.250,
            category: 'boba_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },

        // ==========================================
        // DESSERTS
        // ==========================================
        {
            id: 'peanut_butter_bar',
            name: 'Peanut Butter Bar',
            nameAr: 'بار زبدة الفول السوداني',
            description: 'Peanut butter bar stuffed with Belgian milk chocolate',
            descriptionAr: 'بار زبدة الفول السوداني محشو بشوكولاتة الحليب البلجيكية',
            price: 0.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'pistachio_matcha_pancake',
            name: 'Japanese Pistachio & Matcha Pancake',
            nameAr: 'بان كيك ياباني بالفستق والماتشا',
            description: 'Japanese souffle pancakes with matcha and pistachios',
            descriptionAr: 'بان كيك سوفليه ياباني مع الماتشا والفستق',
            price: 2.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/matcha.png'
        },
        {
            id: 'kinder_cookies',
            name: 'Kinder Cookies',
            nameAr: 'كوكيز كيندر',
            description: 'Cookie infused with Kinder chocolate',
            descriptionAr: 'كوكيز بشوكولاتة كيندر',
            price: 1.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'japanese_cheesecake',
            name: 'Japanese Cheesecake',
            nameAr: 'تشيز كيك ياباني',
            description: 'Soft Japanese style cheesecake',
            descriptionAr: 'تشيز كيك ياباني طري',
            price: 2.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'brownie',
            name: 'Brownie',
            nameAr: 'براوني',
            description: 'Chocolate chip & nut brownie, good source of antioxidants',
            descriptionAr: 'براوني برقائق الشوكولاتة والمكسرات',
            price: 0.400,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'protein_balls',
            name: 'Protein Balls',
            nameAr: 'كرات البروتين',
            description: 'Healthy protein balls',
            descriptionAr: 'كرات بروتين صحية',
            price: 1.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },

        // ==========================================
        // SANDWICHES
        // ==========================================
        {
            id: 'turkey_sandwich',
            name: 'Turkey Sandwich',
            nameAr: 'سندويش ديك رومي',
            description: 'Sandwich with turkey',
            descriptionAr: 'سندويش بالديك الرومي',
            price: 2.000,
            category: 'sandwiches',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },

        // ==========================================
        // ICED DRINKS
        // ==========================================
        {
            id: 'iced_spanish_latte',
            name: 'Iced Spanish Latte',
            nameAr: 'سبانش لاتيه مثلج',
            description: 'Sweetened milk and espresso shot over ice',
            descriptionAr: 'حليب محلى وشوت إسبريسو مع الثلج',
            price: 2.000,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/spanish-latte.png'
        },
        {
            id: 'iced_kohi_latte',
            name: 'Iced Kohi Latte',
            nameAr: 'كوهي لاتيه مثلج',
            description: 'Signature Kohi latte over ice',
            descriptionAr: 'لاتيه كوهي المميز مع الثلج',
            price: 2.500,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'iced_americano',
            name: 'Iced Americano',
            nameAr: 'أمريكانو مثلج',
            description: 'Espresso Shot and Filtered Water',
            descriptionAr: 'شوت إسبريسو وماء مفلتر',
            price: 1.500,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'iced_latte',
            name: 'Iced Latte',
            nameAr: 'لاتيه مثلج',
            description: 'Espresso Shot and Milk',
            descriptionAr: 'شوت إسبريسو وحليب',
            price: 1.750,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'iced_matcha_latte',
            name: 'Iced Matcha Latte',
            nameAr: 'ماتشا لاتيه مثلج',
            description: 'Matcha and Milk',
            descriptionAr: 'ماتشا وحليب',
            price: 2.000,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/matcha.png'
        },
        {
            id: 'vanilla_ice_shaken',
            name: 'Vanilla Ice Shaken',
            nameAr: 'فانيلا آيس شيكن',
            description: 'Espresso Shot, Vanilla, Ice (all shaken)',
            descriptionAr: 'شوت إسبريسو، فانيلا، ثلج (مخفوق)',
            price: 2.000,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'caramel_ice_shaken',
            name: 'Caramel Ice Shaken',
            nameAr: 'كراميل آيس شيكن',
            description: 'Espresso Shot, Caramel, Ice (all shaken)',
            descriptionAr: 'شوت إسبريسو، كراميل، ثلج (مخفوق)',
            price: 2.000,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'iced_white_mocha',
            name: 'Iced White Mocha',
            nameAr: 'وايت موكا مثلج',
            description: 'Espresso Shot and White Mocha Syrup',
            descriptionAr: 'شوت إسبريسو وشراب الوايت موكا',
            price: 2.000,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'iced_mocha',
            name: 'Iced Mocha',
            nameAr: 'موكا مثلج',
            description: 'Espresso Shot and Mocha',
            descriptionAr: 'شوت إسبريسو وموكا',
            price: 2.000,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'iced_salted_caramel',
            name: 'Iced Salted Caramel Latte',
            nameAr: 'لاتيه كراميل مملح مثلج',
            description: 'Espresso Shot and Salted Caramel',
            descriptionAr: 'شوت إسبريسو وكراميل مملح',
            price: 2.000,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'iced_chocolate',
            name: 'Iced Chocolate',
            nameAr: 'شوكولاتة مثلجة',
            description: 'Chocolate and Milk',
            descriptionAr: 'شوكولاتة وحليب',
            price: 1.500,
            category: 'iced_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },

        // ==========================================
        // HOT DRINKS
        // ==========================================
        {
            id: 'espresso',
            name: 'Espresso',
            nameAr: 'إسبريسو',
            description: 'Perfectly extracted espresso shot',
            descriptionAr: 'شوت إسبريسو مستخلص بإتقان',
            price: 1.250,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'americano',
            name: 'Americano',
            nameAr: 'أمريكانو',
            description: 'Espresso Shot and Water',
            descriptionAr: 'شوت إسبريسو وماء',
            price: 1.500,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'spanish_latte',
            name: 'Spanish Latte',
            nameAr: 'سبانش لاتيه',
            description: 'Sweetened milk and espresso shot',
            descriptionAr: 'حليب محلى وشوت إسبريسو',
            price: 2.000,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/spanish-latte.png'
        },
        {
            id: 'matcha_latte',
            name: 'Matcha Latte',
            nameAr: 'ماتشا لاتيه',
            description: 'Matcha and Milk',
            descriptionAr: 'ماتشا وحليب',
            price: 2.000,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/matcha.png'
        },
        {
            id: 'latte',
            name: 'Latte',
            nameAr: 'لاتيه',
            description: 'Espresso Shot and Milk',
            descriptionAr: 'شوت إسبريسو وحليب',
            price: 1.750,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'flatwhite',
            name: 'Flatwhite',
            nameAr: 'فلات وايت',
            description: 'Espresso Shot and Milk',
            descriptionAr: 'شوت إسبريسو وحليب',
            price: 1.750,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'cortado',
            name: 'Cortado',
            nameAr: 'كورتادو',
            description: 'Espresso Shot and Milk',
            descriptionAr: 'شوت إسبريسو وحليب',
            price: 1.500,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'cappuccino',
            name: 'Cappuccino',
            nameAr: 'كابتشينو',
            description: 'Espresso Shot and Milk',
            descriptionAr: 'شوت إسبريسو وحليب',
            price: 1.750,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'macchiato',
            name: 'Macchiato',
            nameAr: 'ماكياتو',
            description: 'Espresso Shot and Milk',
            descriptionAr: 'شوت إسبريسو وحليب',
            price: 1.500,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'mocha',
            name: 'Mocha',
            nameAr: 'موكا',
            description: 'Espresso Shot, Mocha and Milk',
            descriptionAr: 'شوت إسبريسو، موكا وحليب',
            price: 2.000,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'white_mocha',
            name: 'White Mocha',
            nameAr: 'وايت موكا',
            description: 'Espresso Shot, White Mocha and Milk',
            descriptionAr: 'شوت إسبريسو، وايت موكا وحليب',
            price: 2.000,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'hot_chocolate',
            name: 'Hot Chocolate',
            nameAr: 'شوكولاتة ساخنة',
            description: 'Chocolate, Milk and Marshmallow',
            descriptionAr: 'شوكولاتة، حليب ومارشميلو',
            price: 1.500,
            category: 'hot_drinks',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },

        // ==========================================
        // BREWED COFFEE
        // ==========================================
        {
            id: 'cold_brew',
            name: 'Cold Brew Coffee',
            nameAr: 'كولد برو',
            description: 'Brewed for 24 hours',
            descriptionAr: 'مخمر لمدة ٢٤ ساعة',
            price: 2.000,
            category: 'brewed_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'iced_v60',
            name: 'Iced V60 Coffee',
            nameAr: 'V60 مثلج',
            description: 'Cold specialty filtered Japanese-style coffee',
            descriptionAr: 'قهوة مفلترة على الطريقة اليابانية مثلجة',
            price: 2.000,
            category: 'brewed_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'v60',
            name: 'V60 Coffee',
            nameAr: 'V60 قهوة',
            description: 'Specialty filtered Japanese-style coffee',
            descriptionAr: 'قهوة مفلترة على الطريقة اليابانية',
            price: 2.000,
            category: 'brewed_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },

        // ==========================================
        // MOJITO & ICED TEA
        // ==========================================
        {
            id: 'kohi_lagoon_mojito',
            name: 'Kohi Lagoon Mojito',
            nameAr: 'موهيتو كوهي لاجون',
            description: 'Kohi Mix, Lemon, Mint, Sprite',
            descriptionAr: 'خلطة كوهي، ليمون، نعناع، سبرايت',
            price: 1.750,
            category: 'mojito_iced_tea',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'mixed_berries_mojito',
            name: 'Mixed Berries Mojito',
            nameAr: 'موهيتو توت مشكل',
            description: 'Mixed berries syrup, lemon, mint, Sprite',
            descriptionAr: 'شراب التوت المشكل، ليمون، نعناع، سبرايت',
            price: 2.000,
            category: 'mojito_iced_tea',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'lime_mojito',
            name: 'Lime Mojito',
            nameAr: 'موهيتو ليمون',
            description: 'Lime, lemon, mint, Sprite',
            descriptionAr: 'ليمون أخضر، ليمون، نعناع، سبرايت',
            price: 1.750,
            category: 'mojito_iced_tea',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'passion_fruit_mojito',
            name: 'Passion Fruit Mojito',
            nameAr: 'موهيتو باشن فروت',
            description: 'Passion fruit syrup, lemon, mint, Sprite',
            descriptionAr: 'شراب فاكهة الباشن، ليمون، نعناع، سبرايت',
            price: 1.750,
            category: 'mojito_iced_tea',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },
        {
            id: 'peach_mojito',
            name: 'Peach Mojito',
            nameAr: 'موهيتو خوخ',
            description: 'Peach syrup, lemon, mint, Sprite',
            descriptionAr: 'شراب الخوخ، ليمون، نعناع، سبرايت',
            price: 1.750,
            category: 'mojito_iced_tea',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        },

        // ==========================================
        // WATER
        // ==========================================
        {
            id: 'water',
            name: 'Water',
            nameAr: 'مياه',
            description: 'Mineral water',
            descriptionAr: 'مياه معدنية',
            price: 0.450,
            category: 'water',
            restaurant: 'kohi',
            image: 'images/placeholder.png'
        }
    ]
};

/**
 * Get items by restaurant
 */
function getItemsByRestaurant(restaurantId) {
    return menuData.items.filter(item => item.restaurant === restaurantId);
}

/**
 * Get items by category
 */
function getItemsByCategory(categoryId) {
    return menuData.items.filter(item => item.category === categoryId);
}

/**
 * Get categories by restaurant
 */
function getCategoriesByRestaurant(restaurantId) {
    return Object.values(menuData.categories).filter(cat => cat.restaurant === restaurantId);
}

/**
 * Get item by ID
 */
function getItemById(itemId) {
    return menuData.items.find(item => item.id === itemId);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { menuData, getItemsByRestaurant, getItemsByCategory, getCategoriesByRestaurant, getItemById };
}
