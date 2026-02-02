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
            logo: 'images/kohilogo.webp',
            theme: 'kohi'
        }
    },

    categories: [
        {
            id: 'best_sellers',
            name: 'Best Sellers',
            nameAr: 'الأكثر طلباً',
            restaurant: 'kohi'
        },
        {
            id: 'hot_coffee',
            name: 'Hot Coffee',
            nameAr: 'القهوة الحارة',
            restaurant: 'kohi'
        },
        {
            id: 'iced_coffee',
            name: 'Iced Coffee',
            nameAr: 'القهوة الباردة',
            restaurant: 'kohi'
        },
        {
            id: 'desserts',
            name: 'Desserts',
            nameAr: 'الحلويات',
            restaurant: 'kohi'
        },
        {
            id: 'mojitos_iced_tea',
            name: 'Mojitos & Iced Tea',
            nameAr: 'موهيتو وشاي مثلج',
            restaurant: 'kohi'
        },
        {
            id: 'brews',
            name: 'Brews',
            nameAr: 'القهوة المخمرة',
            restaurant: 'kohi'
        },
        {
            id: 'sandwiches',
            name: 'Sandwiches',
            nameAr: 'السندويشات',
            restaurant: 'kohi'
        }
    ],

    items: [
        // ==========================================
        // BEST SELLERS
        // ==========================================
        {
            id: 'chocolate_pancake_best',
            name: 'Chocolate Japanese Pancake',
            nameAr: 'بان كيك ياباني بالشوكولاتة',
            description: 'Fluffy Japanese pancake topped with Belgian chocolate',
            descriptionAr: 'بان كيك ياباني هش مع شوكولاتة بلجيكية',
            price: 2.500,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/chocolate_japanese_pancake.webp'
        },
        {
            id: 'classic_pancake_best',
            name: 'Classic Pancake',
            nameAr: 'بان كيك كلاسيك',
            description: 'Fluffy Japanese souffle pancake with butter and maple syrup',
            descriptionAr: 'بان كيك ياباني هش مع زبدة وشراب القيقب',
            price: 2.250,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/classic_pancake.webp'
        },
        {
            id: 'dolce_cake_best',
            name: 'Dolce Cake',
            nameAr: 'كيكة دولتشي',
            description: 'Sweet and creamy dolce cake',
            descriptionAr: 'كيكة دولتشي حلوة وكريمية',
            price: 2.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/dolce_cake.webp'
        },
        {
            id: 'madrid_cake_best',
            name: 'Madrid Cake',
            nameAr: 'كيكة مدريد',
            description: 'Spanish-inspired layered cake',
            descriptionAr: 'كيكة طبقات على الطريقة الإسبانية',
            price: 2.250,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/madrid_cake.webp'
        },
        {
            id: 'dates_pecan_cake_best',
            name: 'Dates Pecan Cake',
            nameAr: 'كيكة التمر والبيكان',
            description: 'Moist cake with dates and pecans',
            descriptionAr: 'كيكة رطبة بالتمر والبيكان',
            price: 2.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/dates_pecan_cake.webp'
        },
        {
            id: 'kohi_bubble_tea_best',
            name: 'Kohi Bubble Tea',
            nameAr: 'كوهي بابل تي',
            description: 'Black tapioca, caramel, milk tea and cream',
            descriptionAr: 'تابيوكا سوداء، كراميل، شاي بحليب وكريمة',
            price: 2.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/kohi_bubble_tea.webp'
        },
        {
            id: 'v60_best',
            name: 'V60',
            nameAr: 'V60',
            description: 'Japanese-style pour over coffee',
            descriptionAr: 'قهوة مصبوبة على الطريقة اليابانية',
            price: 2.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/v60.webp'
        },
        {
            id: 'iced_matcha_latte_best',
            name: 'Iced Matcha Latte',
            nameAr: 'ماتشا لاتيه بارد',
            description: 'Premium matcha with cold milk over ice',
            descriptionAr: 'ماتشا فاخرة مع حليب بارد وثلج',
            price: 2.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/iced_matcha_latte.webp'
        },
        {
            id: 'strawberry_matcha_best',
            name: 'Strawberry Matcha',
            nameAr: 'ستروبري ماتشا',
            description: 'Matcha with strawberry and milk',
            descriptionAr: 'ماتشا مع الفراولة والحليب',
            price: 2.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/strawberry_matcha.webp'
        },
        {
            id: 'red_velvet_cake_best',
            name: 'Red Velvet Coconut Cake',
            nameAr: 'كيكة ريد فيلفت بجوز الهند',
            description: 'Red velvet cake with coconut topping',
            descriptionAr: 'كيكة ريد فيلفت مع جوز الهند',
            price: 2.250,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/red_velvet_coconut_cake.webp'
        },

        // ==========================================
        // HOT COFFEE
        // ==========================================
        {
            id: 'espresso',
            name: 'Espresso',
            nameAr: 'إسبريسو',
            description: 'Perfectly extracted espresso shot',
            descriptionAr: 'شوت إسبريسو مثالي',
            price: 1.250,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/espresso.webp'
        },
        {
            id: 'americano',
            name: 'Americano',
            nameAr: 'أمريكانو',
            description: 'Espresso shot and hot water',
            descriptionAr: 'شوت إسبريسو وماء حار',
            price: 1.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/americano.webp'
        },
        {
            id: 'cappuccino',
            name: 'Cappuccino',
            nameAr: 'كابتشينو',
            description: 'Espresso with steamed milk foam',
            descriptionAr: 'إسبريسو مع رغوة الحليب',
            price: 1.750,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/cappuccino.webp'
        },
        {
            id: 'cortado',
            name: 'Cortado',
            nameAr: 'كورتادو',
            description: 'Espresso cut with warm milk',
            descriptionAr: 'إسبريسو مع حليب دافئ',
            price: 1.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/cortado.webp'
        },
        {
            id: 'flat_white',
            name: 'Flat White',
            nameAr: 'فلات وايت',
            description: 'Double espresso with velvety steamed milk',
            descriptionAr: 'إسبريسو مزدوج مع حليب مخملي',
            price: 1.750,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/flat_white.webp'
        },
        {
            id: 'hot_chocolate',
            name: 'Hot Chocolate',
            nameAr: 'شوكولاتة ساخنة',
            description: 'Rich chocolate with steamed milk',
            descriptionAr: 'شوكولاتة غنية مع حليب ساخن',
            price: 1.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/hot_chocolate.webp'
        },
        {
            id: 'latte',
            name: 'Latte',
            nameAr: 'لاتيه',
            description: 'Espresso with steamed milk',
            descriptionAr: 'إسبريسو مع حليب ساخن',
            price: 1.750,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/latte_hot.webp'
        },
        {
            id: 'macchiato',
            name: 'Macchiato',
            nameAr: 'ماكياتو',
            description: 'Espresso marked with milk foam',
            descriptionAr: 'إسبريسو مع لمسة رغوة حليب',
            price: 1.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/macchiato.webp'
        },
        {
            id: 'matcha_latte',
            name: 'Matcha Latte',
            nameAr: 'ماتشا لاتيه',
            description: 'Premium matcha with steamed milk',
            descriptionAr: 'ماتشا فاخرة مع حليب ساخن',
            price: 2.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/matcha_latte.webp'
        },
        {
            id: 'mocha',
            name: 'Mocha',
            nameAr: 'موكا',
            description: 'Espresso with chocolate and steamed milk',
            descriptionAr: 'إسبريسو مع شوكولاتة وحليب ساخن',
            price: 2.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/mocha.webp'
        },
        {
            id: 'spanish_latte',
            name: 'Spanish Latte',
            nameAr: 'سبانش لاتيه',
            description: 'Espresso with sweetened condensed milk',
            descriptionAr: 'إسبريسو مع حليب مكثف محلى',
            price: 2.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/spanish_latte_hot.webp'
        },
        {
            id: 'white_mocha',
            name: 'White Mocha',
            nameAr: 'وايت موكا',
            description: 'Espresso with white chocolate and steamed milk',
            descriptionAr: 'إسبريسو مع شوكولاتة بيضاء وحليب ساخن',
            price: 2.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/white_mocha.webp'
        },

        // ==========================================
        // ICED COFFEE
        // ==========================================
        {
            id: 'iced_americano',
            name: 'Iced Americano',
            nameAr: 'أمريكانو بارد',
            description: 'Espresso shot with cold water over ice',
            descriptionAr: 'شوت إسبريسو مع ماء بارد وثلج',
            price: 1.500,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/iced_americano.webp'
        },
        {
            id: 'iced_latte',
            name: 'Iced Latte',
            nameAr: 'لاتيه بارد',
            description: 'Espresso with cold milk over ice',
            descriptionAr: 'إسبريسو مع حليب بارد وثلج',
            price: 1.750,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/iced_latte.webp'
        },
        {
            id: 'iced_kohi_latte',
            name: 'Iced Kohi Latte',
            nameAr: 'كوهي لاتيه بارد',
            description: 'Signature Kohi latte over ice',
            descriptionAr: 'لاتيه كوهي المميز مع الثلج',
            price: 2.500,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/iced_kohi_latte.webp'
        },
        {
            id: 'iced_spanish_latte',
            name: 'Spanish Latte',
            nameAr: 'سبانش لاتيه بارد',
            description: 'Sweetened milk and espresso over ice',
            descriptionAr: 'حليب محلى وإسبريسو مع الثلج',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/spanish_latte_iced.webp'
        },
        {
            id: 'iced_matcha_latte',
            name: 'Iced Matcha Latte',
            nameAr: 'ماتشا لاتيه بارد',
            description: 'Premium matcha with cold milk over ice',
            descriptionAr: 'ماتشا فاخرة مع حليب بارد وثلج',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/iced_matcha_latte.webp'
        },
        {
            id: 'iced_mocha',
            name: 'Iced Mocha',
            nameAr: 'موكا بارد',
            description: 'Espresso with chocolate and cold milk over ice',
            descriptionAr: 'إسبريسو مع شوكولاتة وحليب بارد وثلج',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/iced_mocha.webp'
        },
        {
            id: 'iced_white_mocha',
            name: 'Iced White Mocha',
            nameAr: 'وايت موكا بارد',
            description: 'Espresso with white chocolate and cold milk over ice',
            descriptionAr: 'إسبريسو مع شوكولاتة بيضاء وحليب بارد وثلج',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/iced_white_mocha.webp'
        },
        {
            id: 'iced_salted_caramel_latte',
            name: 'Iced Salted Caramel Latte',
            nameAr: 'لاتيه كراميل مملح بارد',
            description: 'Espresso with salted caramel over ice',
            descriptionAr: 'إسبريسو مع كراميل مملح وثلج',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/iced_salted_caramel_latte.webp'
        },
        {
            id: 'iced_chocolate',
            name: 'Iced Chocolate',
            nameAr: 'شوكولاتة باردة',
            description: 'Rich chocolate with cold milk over ice',
            descriptionAr: 'شوكولاتة غنية مع حليب بارد وثلج',
            price: 1.500,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/iced_chocolate.webp'
        },
        {
            id: 'vanilla_ice_shaken',
            name: 'Vanilla Ice Shaken',
            nameAr: 'فانيلا آيس شيكن',
            description: 'Espresso shaken with vanilla and ice',
            descriptionAr: 'إسبريسو مخفوق مع فانيلا وثلج',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/vanilla_ice_shaken.webp'
        },
        {
            id: 'caramel_ice_shaken',
            name: 'Caramel Ice Shaken',
            nameAr: 'كراميل آيس شيكن',
            description: 'Espresso shaken with caramel and ice',
            descriptionAr: 'إسبريسو مخفوق مع كراميل وثلج',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/caramel_ice_shaken.webp'
        },
        {
            id: 'kohi_bubble_tea',
            name: 'Kohi Bubble Tea',
            nameAr: 'كوهي بابل تي',
            description: 'Black tapioca, caramel, milk tea and cream',
            descriptionAr: 'تابيوكا سوداء، كراميل، شاي بحليب وكريمة',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/kohi_bubble_tea.webp'
        },
        {
            id: 'brown_sugar_boba',
            name: 'Brown Sugar Boba',
            nameAr: 'بوبا السكر البني',
            description: 'Black tapioca with brown sugar syrup and cream',
            descriptionAr: 'تابيوكا سوداء مع شراب السكر البني وكريمة',
            price: 2.000,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/brown_sugar_boba.webp'
        },
        {
            id: 'espresso_boba',
            name: 'Espresso Boba',
            nameAr: 'إسبريسو بوبا',
            description: 'Black tapioca, espresso, brown sugar syrup and cream',
            descriptionAr: 'تابيوكا سوداء، إسبريسو، شراب السكر البني وكريمة',
            price: 2.250,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/espresso_boba.webp'
        },
        {
            id: 'matcha_boba',
            name: 'Matcha Boba',
            nameAr: 'ماتشا بوبا',
            description: 'Black tapioca, matcha, sweetened milk and cream',
            descriptionAr: 'تابيوكا سوداء، ماتشا، حليب محلى وكريمة',
            price: 2.250,
            category: 'iced_coffee',
            restaurant: 'kohi',
            image: 'images/matcha_boba.webp'
        },

        // ==========================================
        // BREWS
        // ==========================================
        {
            id: 'cold_brew',
            name: 'Cold Brew Coffee',
            nameAr: 'كولد برو',
            description: 'Slow-brewed for 24 hours, smooth and rich',
            descriptionAr: 'مخمرة ببطء لمدة 24 ساعة، ناعمة وغنية',
            price: 2.000,
            category: 'brews',
            restaurant: 'kohi',
            image: 'images/cold_brew_coffee.webp'
        },
        {
            id: 'iced_v60',
            name: 'Iced V60 Coffee',
            nameAr: 'V60 بارد',
            description: 'Japanese-style pour over coffee served cold',
            descriptionAr: 'قهوة مصبوبة على الطريقة اليابانية تقدم باردة',
            price: 2.000,
            category: 'brews',
            restaurant: 'kohi',
            image: 'images/iced_v60_coffee.webp'
        },
        {
            id: 'v60',
            name: 'V60',
            nameAr: 'V60',
            description: 'Japanese-style pour over coffee',
            descriptionAr: 'قهوة مصبوبة على الطريقة اليابانية',
            price: 2.000,
            category: 'brews',
            restaurant: 'kohi',
            image: 'images/v60.webp'
        },

        // ==========================================
        // MOJITOS & ICED TEA
        // ==========================================
        {
            id: 'strawberry_mojito',
            name: 'Strawberry Mojito',
            nameAr: 'موهيتو فراولة',
            description: 'Strawberry syrup, lemon, mint and Sprite',
            descriptionAr: 'شراب الفراولة، ليمون، نعناع وسبرايت',
            price: 1.750,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/strawberry_mojito.webp'
        },
        {
            id: 'lime_mojito',
            name: 'Lime Mojito',
            nameAr: 'موهيتو لايم',
            description: 'Fresh lime, lemon, mint and Sprite',
            descriptionAr: 'لايم طازج، ليمون، نعناع وسبرايت',
            price: 1.750,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/lime_mojito.webp'
        },
        {
            id: 'mixed_berries_mojito',
            name: 'Mixed Berries Mojito',
            nameAr: 'موهيتو توت مشكل',
            description: 'Mixed berries syrup, lemon, mint and Sprite',
            descriptionAr: 'شراب التوت المشكل، ليمون، نعناع وسبرايت',
            price: 2.000,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/mixed_berries_mojito.webp'
        },
        {
            id: 'passion_fruit_mojito',
            name: 'Passion Fruit Mojito',
            nameAr: 'موهيتو باشن فروت',
            description: 'Passion fruit syrup, lemon, mint and Sprite',
            descriptionAr: 'شراب الباشن فروت، ليمون، نعناع وسبرايت',
            price: 1.750,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/passion_fruit_mojito.webp'
        },
        {
            id: 'peach_mojito',
            name: 'Peach Mojito',
            nameAr: 'موهيتو خوخ',
            description: 'Peach syrup, lemon, mint and Sprite',
            descriptionAr: 'شراب الخوخ، ليمون، نعناع وسبرايت',
            price: 1.750,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/peach_mojito.webp'
        },
        {
            id: 'blue_lagoon',
            name: 'Blue Lagoon',
            nameAr: 'بلو لاجون',
            description: 'Blue curacao, lemon, mint and Sprite',
            descriptionAr: 'بلو كوراساو، ليمون، نعناع وسبرايت',
            price: 1.750,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/blue_lagoon.webp'
        },
        {
            id: 'strawberry_iced_tea',
            name: 'Strawberry Iced Tea',
            nameAr: 'شاي مثلج بالفراولة',
            description: 'Refreshing iced tea with strawberry',
            descriptionAr: 'شاي مثلج منعش بالفراولة',
            price: 1.750,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/strawberry_iced_tea.webp'
        },
        {
            id: 'peach_iced_tea',
            name: 'Peach Iced Tea',
            nameAr: 'شاي مثلج بالخوخ',
            description: 'Refreshing iced tea with peach',
            descriptionAr: 'شاي مثلج منعش بالخوخ',
            price: 1.750,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/peach_iced_tea.webp'
        },
        {
            id: 'mixed_berries_iced_tea',
            name: 'Mixed Berries Iced Tea',
            nameAr: 'شاي مثلج بالتوت المشكل',
            description: 'Refreshing iced tea with mixed berries',
            descriptionAr: 'شاي مثلج منعش بالتوت المشكل',
            price: 2.000,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/mixed_berries_iced_tea.webp'
        },
        {
            id: 'hibiscus_iced_tea',
            name: 'Hibiscus Iced Tea',
            nameAr: 'شاي مثلج بالكركديه',
            description: 'Refreshing iced tea with hibiscus',
            descriptionAr: 'شاي مثلج منعش بالكركديه',
            price: 1.750,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/hibiscus_iced_tea.webp'
        },
        {
            id: 'strawberry_matcha',
            name: 'Strawberry Matcha',
            nameAr: 'ستروبري ماتشا',
            description: 'Matcha with strawberry and milk',
            descriptionAr: 'ماتشا مع الفراولة والحليب',
            price: 2.000,
            category: 'mojitos_iced_tea',
            restaurant: 'kohi',
            image: 'images/strawberry_matcha.webp'
        },

        // ==========================================
        // DESSERTS
        // ==========================================
        {
            id: 'classic_pancake',
            name: 'Classic Pancake',
            nameAr: 'بان كيك كلاسيك',
            description: 'Fluffy Japanese souffle pancake with butter and maple syrup',
            descriptionAr: 'بان كيك ياباني هش مع زبدة وشراب القيقب',
            price: 2.250,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/classic_pancake.webp'
        },
        {
            id: 'chocolate_japanese_pancake',
            name: 'Chocolate Japanese Pancake',
            nameAr: 'بان كيك ياباني بالشوكولاتة',
            description: 'Fluffy Japanese pancake topped with Belgian chocolate',
            descriptionAr: 'بان كيك ياباني هش مع شوكولاتة بلجيكية',
            price: 2.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/chocolate_japanese_pancake.webp'
        },
        {
            id: 'boba_pancake',
            name: 'Boba Pancake',
            nameAr: 'بان كيك بوبا',
            description: 'Japanese souffle pancake with tapioca pearls',
            descriptionAr: 'بان كيك ياباني سوفليه مع حبات التابيوكا',
            price: 2.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/boba_pancake.webp'
        },
        {
            id: 'pistachio_pancake',
            name: 'Pistachio Pancake',
            nameAr: 'بان كيك فستق',
            description: 'Japanese souffle pancake with pistachio',
            descriptionAr: 'بان كيك ياباني سوفليه مع الفستق',
            price: 2.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/pistachio_pancake.webp'
        },
        {
            id: 'brownie_bite',
            name: 'Brownie Bite',
            nameAr: 'براوني',
            description: 'Rich chocolate brownie bite',
            descriptionAr: 'قطعة براوني شوكولاتة غنية',
            price: 0.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/brownie_bite.webp'
        },
        {
            id: 'peanut_butter',
            name: 'Peanut Butter',
            nameAr: 'زبدة الفول السوداني',
            description: 'Peanut butter bar with chocolate',
            descriptionAr: 'بار زبدة الفول السوداني مع الشوكولاتة',
            price: 0.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/peanut_butter.webp'
        },
        {
            id: 'pecan_bites',
            name: 'Pecan Bites',
            nameAr: 'قطع البيكان',
            description: 'Delicious pecan bites',
            descriptionAr: 'قطع البيكان اللذيذة',
            price: 0.750,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/pecan_bites.webp'
        },
        {
            id: 'dates_pecan_cake',
            name: 'Dates Pecan Cake',
            nameAr: 'كيكة التمر والبيكان',
            description: 'Moist cake with dates and pecans',
            descriptionAr: 'كيكة رطبة بالتمر والبيكان',
            price: 2.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/dates_pecan_cake.webp'
        },
        {
            id: 'dolce_cake',
            name: 'Dolce Cake',
            nameAr: 'كيكة دولتشي',
            description: 'Sweet and creamy dolce cake',
            descriptionAr: 'كيكة دولتشي حلوة وكريمية',
            price: 2.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/dolce_cake.webp'
        },
        {
            id: 'madrid_cake',
            name: 'Madrid Cake',
            nameAr: 'كيكة مدريد',
            description: 'Spanish-inspired layered cake',
            descriptionAr: 'كيكة طبقات على الطريقة الإسبانية',
            price: 2.250,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/madrid_cake.webp'
        },
        {
            id: 'mango_coconut_cake',
            name: 'Mango Coconut Cake',
            nameAr: 'كيكة المانجو وجوز الهند',
            description: 'Tropical cake with mango and coconut',
            descriptionAr: 'كيكة استوائية بالمانجو وجوز الهند',
            price: 2.250,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/mango_coconut_cake.webp'
        },
        {
            id: 'red_velvet_coconut_cake',
            name: 'Red Velvet Coconut Cake',
            nameAr: 'كيكة ريد فيلفت بجوز الهند',
            description: 'Red velvet cake with coconut topping',
            descriptionAr: 'كيكة ريد فيلفت مع جوز الهند',
            price: 2.250,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/red_velvet_coconut_cake.webp'
        },
        {
            id: 'kinder_cookies',
            name: 'Kinder Cookies',
            nameAr: 'كوكيز كيندر',
            description: 'Delicious Kinder chocolate cookies',
            descriptionAr: 'كوكيز كيندر بالشوكولاتة اللذيذة',
            price: 1.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/kindercookies.webp'
        },
        {
            id: 'japanese_cheesecake',
            name: 'Japanese Cheesecake',
            nameAr: 'تشيز كيك ياباني',
            description: 'Light and fluffy Japanese-style cheesecake',
            descriptionAr: 'تشيز كيك ياباني خفيف وهش',
            price: 2.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/japanese_cheesecake.webp'
        },
        {
            id: 'protein_balls',
            name: 'Protein Balls',
            nameAr: 'كرات البروتين',
            description: 'Healthy and nutritious protein balls',
            descriptionAr: 'كرات بروتين صحية ومغذية',
            price: 1.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'images/protein_balls.webp'
        },

        // ==========================================
        // SANDWICHES
        // ==========================================
        {
            id: 'halloumi_sandwich',
            name: 'Halloumi Sandwich',
            nameAr: 'سندويش حلومي',
            description: 'Grilled halloumi cheese sandwich',
            descriptionAr: 'سندويش جبنة حلومي مشوية',
            price: 2.000,
            category: 'sandwiches',
            restaurant: 'kohi',
            image: 'images/halloumi_sandwich.webp'
        },
        {
            id: 'turkey_sandwich',
            name: 'Turkey Sandwich',
            nameAr: 'سندويش ديك رومي',
            description: 'Delicious turkey sandwich',
            descriptionAr: 'سندويش ديك رومي لذيذ',
            price: 2.000,
            category: 'sandwiches',
            restaurant: 'kohi',
            image: 'images/turkey_sandwich.webp'
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
    return menuData.categories.filter(cat => cat.restaurant === restaurantId);
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
