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
        // Kohi Categories
        best_sellers: {
            id: 'best_sellers',
            name: 'Best Sellers',
            nameAr: 'الأكثر مبيعاً',
            restaurant: 'kohi',
            translationKey: 'best_sellers'
        },
        hot_coffee: {
            id: 'hot_coffee',
            name: 'Hot Coffee',
            nameAr: 'القهوة الساخنة',
            restaurant: 'kohi',
            translationKey: 'hot_coffee'
        },
        cold_coffee: {
            id: 'cold_coffee',
            name: 'Cold Coffee',
            nameAr: 'القهوة الباردة',
            restaurant: 'kohi',
            translationKey: 'cold_coffee'
        },
        iced_teas: {
            id: 'iced_teas',
            name: 'Iced Teas & Refreshers',
            nameAr: 'الشاي المثلج والمنعشات',
            restaurant: 'kohi',
            translationKey: 'iced_teas'
        },
        breakfast: {
            id: 'breakfast',
            name: 'Breakfast & Light Bites',
            nameAr: 'الإفطار والوجبات الخفيفة',
            restaurant: 'kohi',
            translationKey: 'breakfast'
        },
        desserts: {
            id: 'desserts',
            name: 'Desserts & Sweets',
            nameAr: 'الحلويات',
            restaurant: 'kohi',
            translationKey: 'desserts'
        }
    },

    items: [
        // ==========================================
        // KOHI - Best Sellers
        // ==========================================
        {
            id: 'spanish_latte',
            name: 'Spanish Latte',
            nameAr: 'سبانش لاتيه',
            description: 'Rich espresso with sweetened condensed milk, steamed milk, and a hint of vanilla',
            descriptionAr: 'إسبريسو غني مع حليب مكثف محلى وحليب مبخر ولمسة من الفانيليا',
            price: 4.500,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/spanish-latte.png'
        },
        {
            id: 'cappuccino',
            name: 'Cappuccino',
            nameAr: 'كابتشينو',
            description: 'Classic Italian coffee with equal parts espresso, steamed milk, and milk foam',
            descriptionAr: 'قهوة إيطالية كلاسيكية بأجزاء متساوية من الإسبريسو والحليب المبخر ورغوة الحليب',
            price: 4.500,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'iced_spanish_latte',
            name: 'Iced Spanish Latte',
            nameAr: 'آيس سبانش لاتيه',
            description: 'Chilled version of our signature Spanish latte over ice',
            descriptionAr: 'نسخة مثلجة من السبانش لاتيه المميز لدينا',
            price: 5.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/spanish-latte.png'
        },
        {
            id: 'matcha_latte',
            name: 'Matcha Latte',
            nameAr: 'ماتشا لاتيه',
            description: 'Premium Japanese matcha whisked with steamed milk',
            descriptionAr: 'ماتشا يابانية فاخرة مخفوقة مع الحليب المبخر',
            price: 5.500,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'images/matcha.png'
        },
        {
            id: 'avocado_toast',
            name: 'Avocado Toast',
            nameAr: 'توست الأفوكادو',
            description: 'Smashed avocado on sourdough with cherry tomatoes and microgreens',
            descriptionAr: 'أفوكادو مهروس على خبز العجين المخمر مع طماطم كرزية وخضار صغيرة',
            price: 8.500,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop'
        },
        {
            id: 'tiramisu',
            name: 'Tiramisu',
            nameAr: 'تيراميسو',
            description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone',
            descriptionAr: 'حلوى إيطالية كلاسيكية مع طبقات من البسكويت المنقوع بالقهوة والماسكاربوني',
            price: 8.000,
            category: 'best_sellers',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop'
        },

        // ==========================================
        // KOHI - Hot Coffee
        // ==========================================
        {
            id: 'espresso',
            name: 'Espresso',
            nameAr: 'إسبريسو',
            description: 'Single shot of our signature espresso blend',
            descriptionAr: 'جرعة واحدة من خلطة الإسبريسو المميزة لدينا',
            price: 3.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'double_espresso',
            name: 'Double Espresso',
            nameAr: 'دبل إسبريسو',
            description: 'Double shot of our signature espresso blend',
            descriptionAr: 'جرعة مزدوجة من خلطة الإسبريسو المميزة لدينا',
            price: 4.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'americano',
            name: 'Americano',
            nameAr: 'أمريكانو',
            description: 'Espresso diluted with hot water for a smooth, rich flavor',
            descriptionAr: 'إسبريسو ممدد بالماء الساخن لنكهة ناعمة وغنية',
            price: 3.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'latte',
            name: 'Latte',
            nameAr: 'لاتيه',
            description: 'Espresso with steamed milk and a light layer of foam',
            descriptionAr: 'إسبريسو مع حليب مبخر وطبقة خفيفة من الرغوة',
            price: 4.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'flat_white',
            name: 'Flat White',
            nameAr: 'فلات وايت',
            description: 'Double espresso with velvety microfoam milk',
            descriptionAr: 'إسبريسو مزدوج مع حليب مخملي ناعم',
            price: 4.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'cortado',
            name: 'Cortado',
            nameAr: 'كورتادو',
            description: 'Equal parts espresso and steamed milk',
            descriptionAr: 'أجزاء متساوية من الإسبريسو والحليب المبخر',
            price: 4.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'mocha',
            name: 'Mocha',
            nameAr: 'موكا',
            description: 'Espresso with chocolate, steamed milk, and whipped cream',
            descriptionAr: 'إسبريسو مع الشوكولاتة والحليب المبخر والكريمة المخفوقة',
            price: 5.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'caramel_latte',
            name: 'Caramel Latte',
            nameAr: 'كراميل لاتيه',
            description: 'Latte with rich caramel syrup and caramel drizzle',
            descriptionAr: 'لاتيه مع شراب الكراميل الغني ورذاذ الكراميل',
            price: 5.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'vanilla_latte',
            name: 'Vanilla Latte',
            nameAr: 'فانيلا لاتيه',
            description: 'Latte with smooth vanilla syrup',
            descriptionAr: 'لاتيه مع شراب الفانيليا الناعم',
            price: 5.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'hazelnut_latte',
            name: 'Hazelnut Latte',
            nameAr: 'هازلنت لاتيه',
            description: 'Latte with aromatic hazelnut syrup',
            descriptionAr: 'لاتيه مع شراب البندق العطري',
            price: 5.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'hot_chocolate',
            name: 'Hot Chocolate',
            nameAr: 'هوت شوكوليت',
            description: 'Rich Belgian chocolate with steamed milk and cream',
            descriptionAr: 'شوكولاتة بلجيكية غنية مع الحليب المبخر والكريمة',
            price: 4.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'chai_latte',
            name: 'Chai Latte',
            nameAr: 'تشاي لاتيه',
            description: 'Spiced chai tea with steamed milk',
            descriptionAr: 'شاي تشاي متبل مع الحليب المبخر',
            price: 4.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'turkish_coffee',
            name: 'Turkish Coffee',
            nameAr: 'قهوة تركية',
            description: 'Traditional Turkish coffee with cardamom',
            descriptionAr: 'قهوة تركية تقليدية مع الهال',
            price: 3.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'arabic_coffee',
            name: 'Arabic Coffee',
            nameAr: 'قهوة عربية',
            description: 'Traditional Arabic coffee with saffron and cardamom',
            descriptionAr: 'قهوة عربية تقليدية مع الزعفران والهال',
            price: 3.000,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'karak_tea',
            name: 'Karak Tea',
            nameAr: 'شاي كرك',
            description: 'Traditional spiced milk tea',
            descriptionAr: 'شاي حليب متبل تقليدي',
            price: 2.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'hot_matcha',
            name: 'Hot Matcha',
            nameAr: 'ماتشا ساخنة',
            description: 'Premium matcha whisked with steamed milk',
            descriptionAr: 'ماتشا فاخرة مخفوقة مع الحليب المبخر',
            price: 5.500,
            category: 'hot_coffee',
            restaurant: 'kohi',
            image: 'images/matcha.png'
        },

        // ==========================================
        // KOHI - Cold Coffee
        // ==========================================
        {
            id: 'iced_americano',
            name: 'Iced Americano',
            nameAr: 'آيس أمريكانو',
            description: 'Espresso with cold water over ice',
            descriptionAr: 'إسبريسو مع ماء بارد على الثلج',
            price: 4.000,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'iced_latte',
            name: 'Iced Latte',
            nameAr: 'آيس لاتيه',
            description: 'Espresso with cold milk over ice',
            descriptionAr: 'إسبريسو مع حليب بارد على الثلج',
            price: 5.000,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'iced_mocha',
            name: 'Iced Mocha',
            nameAr: 'آيس موكا',
            description: 'Chilled espresso with chocolate and milk over ice',
            descriptionAr: 'إسبريسو مثلج مع الشوكولاتة والحليب على الثلج',
            price: 5.500,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'cold_brew',
            name: 'Cold Brew',
            nameAr: 'كولد برو',
            description: 'Slow-steeped cold brew coffee',
            descriptionAr: 'قهوة كولد برو منقوعة ببطء',
            price: 5.000,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'iced_caramel_latte',
            name: 'Iced Caramel Latte',
            nameAr: 'آيس كراميل لاتيه',
            description: 'Iced latte with caramel syrup and drizzle',
            descriptionAr: 'لاتيه مثلج مع شراب ورذاذ الكراميل',
            price: 5.500,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'iced_vanilla_latte',
            name: 'Iced Vanilla Latte',
            nameAr: 'آيس فانيلا لاتيه',
            description: 'Iced latte with vanilla syrup',
            descriptionAr: 'لاتيه مثلج مع شراب الفانيليا',
            price: 5.500,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/latte.png'
        },
        {
            id: 'iced_matcha',
            name: 'Iced Matcha',
            nameAr: 'آيس ماتشا',
            description: 'Premium matcha shaken with milk and ice',
            descriptionAr: 'ماتشا فاخرة مخفوقة مع الحليب والثلج',
            price: 6.000,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/matcha.png'
        },
        {
            id: 'frappe',
            name: 'Frappe',
            nameAr: 'فرابيه',
            description: 'Blended iced coffee with milk and cream',
            descriptionAr: 'قهوة مثلجة مخفوقة مع الحليب والكريمة',
            price: 5.500,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'mocha_frappe',
            name: 'Mocha Frappe',
            nameAr: 'موكا فرابيه',
            description: 'Blended iced coffee with chocolate, milk and cream',
            descriptionAr: 'قهوة مثلجة مخفوقة مع الشوكولاتة والحليب والكريمة',
            price: 6.000,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },
        {
            id: 'caramel_frappe',
            name: 'Caramel Frappe',
            nameAr: 'كراميل فرابيه',
            description: 'Blended iced coffee with caramel, milk and cream',
            descriptionAr: 'قهوة مثلجة مخفوقة مع الكراميل والحليب والكريمة',
            price: 6.000,
            category: 'cold_coffee',
            restaurant: 'kohi',
            image: 'images/Cortado.png'
        },

        // ==========================================
        // KOHI - Iced Teas & Refreshers
        // ==========================================
        {
            id: 'iced_tea',
            name: 'Iced Tea',
            nameAr: 'شاي مثلج',
            description: 'Fresh brewed iced tea with lemon',
            descriptionAr: 'شاي مثلج طازج مع الليمون',
            price: 3.500,
            category: 'iced_teas',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop'
        },
        {
            id: 'peach_iced_tea',
            name: 'Peach Iced Tea',
            nameAr: 'شاي خوخ مثلج',
            description: 'Iced tea with sweet peach flavor',
            descriptionAr: 'شاي مثلج بنكهة الخوخ الحلو',
            price: 4.000,
            category: 'iced_teas',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop'
        },
        {
            id: 'passion_fruit_refresher',
            name: 'Passion Fruit Refresher',
            nameAr: 'منعش فاكهة العاطفة',
            description: 'Tropical passion fruit with sparkling water',
            descriptionAr: 'فاكهة العاطفة الاستوائية مع ماء فوار',
            price: 4.500,
            category: 'iced_teas',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop'
        },
        {
            id: 'berry_refresher',
            name: 'Berry Refresher',
            nameAr: 'منعش التوت',
            description: 'Mixed berries with sparkling water and mint',
            descriptionAr: 'توت مشكل مع ماء فوار ونعناع',
            price: 4.500,
            category: 'iced_teas',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop'
        },
        {
            id: 'lemonade',
            name: 'Fresh Lemonade',
            nameAr: 'ليمونادة طازجة',
            description: 'Freshly squeezed lemonade with mint',
            descriptionAr: 'ليمونادة معصورة طازجة مع النعناع',
            price: 3.500,
            category: 'iced_teas',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop'
        },

        // ==========================================
        // KOHI - Breakfast & Light Bites
        // ==========================================
        {
            id: 'eggs_benedict',
            name: 'Eggs Benedict',
            nameAr: 'إيجز بينيديكت',
            description: 'Poached eggs on English muffin with hollandaise sauce',
            descriptionAr: 'بيض مسلوق على خبز إنجليزي مع صلصة هولنديز',
            price: 12.000,
            category: 'breakfast',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1608039829572-f56f0e59be96?w=400&h=400&fit=crop'
        },
        {
            id: 'pancakes',
            name: 'Fluffy Pancakes',
            nameAr: 'بانكيك هشة',
            description: 'Stack of fluffy pancakes with maple syrup and berries',
            descriptionAr: 'رصة من البانكيك الهشة مع شراب القيقب والتوت',
            price: 9.500,
            category: 'breakfast',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop'
        },
        {
            id: 'french_toast',
            name: 'French Toast',
            nameAr: 'فرنش توست',
            description: 'Classic French toast with cinnamon and powdered sugar',
            descriptionAr: 'فرنش توست كلاسيكي مع القرفة والسكر البودرة',
            price: 8.500,
            category: 'breakfast',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop'
        },
        {
            id: 'halloumi_plate',
            name: 'Grilled Halloumi Plate',
            nameAr: 'طبق حلومي مشوي',
            description: 'Grilled halloumi with tomatoes, cucumber, and zaatar bread',
            descriptionAr: 'حلومي مشوي مع طماطم وخيار وخبز زعتر',
            price: 10.000,
            category: 'breakfast',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop'
        },
        {
            id: 'croissant',
            name: 'Butter Croissant',
            nameAr: 'كرواسان بالزبدة',
            description: 'Freshly baked French butter croissant',
            descriptionAr: 'كرواسان فرنسي بالزبدة طازج',
            price: 3.500,
            category: 'breakfast',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop'
        },
        {
            id: 'chocolate_croissant',
            name: 'Chocolate Croissant',
            nameAr: 'كرواسان بالشوكولاتة',
            description: 'Flaky croissant filled with rich chocolate',
            descriptionAr: 'كرواسان مقرمش محشو بالشوكولاتة الغنية',
            price: 4.000,
            category: 'breakfast',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop'
        },

        // ==========================================
        // KOHI - Desserts & Sweets
        // ==========================================
        {
            id: 'cheesecake',
            name: 'New York Cheesecake',
            nameAr: 'تشيز كيك نيويورك',
            description: 'Creamy New York style cheesecake with berry compote',
            descriptionAr: 'تشيز كيك كريمي على طريقة نيويورك مع كومبوت التوت',
            price: 8.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=400&fit=crop'
        },
        {
            id: 'chocolate_cake',
            name: 'Chocolate Lava Cake',
            nameAr: 'كيكة الشوكولاتة السائلة',
            description: 'Warm chocolate cake with molten center and vanilla ice cream',
            descriptionAr: 'كيكة شوكولاتة دافئة بقلب سائل مع آيس كريم فانيليا',
            price: 9.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop'
        },
        {
            id: 'baklava',
            name: 'Baklava',
            nameAr: 'بقلاوة',
            description: 'Traditional Middle Eastern pastry with pistachios and honey',
            descriptionAr: 'حلوى شرق أوسطية تقليدية مع الفستق والعسل',
            price: 6.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=400&fit=crop'
        },
        {
            id: 'cookies',
            name: 'Chocolate Chip Cookies',
            nameAr: 'كوكيز رقائق الشوكولاتة',
            description: 'Fresh baked chocolate chip cookies (3 pieces)',
            descriptionAr: 'كوكيز رقائق الشوكولاتة الطازجة (3 قطع)',
            price: 4.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop'
        },
        {
            id: 'brownie',
            name: 'Fudge Brownie',
            nameAr: 'براوني فدج',
            description: 'Rich chocolate brownie with walnuts',
            descriptionAr: 'براوني شوكولاتة غنية مع الجوز',
            price: 5.500,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop'
        },
        {
            id: 'kunafa',
            name: 'Kunafa',
            nameAr: 'كنافة',
            description: 'Traditional cheese kunafa with sugar syrup',
            descriptionAr: 'كنافة جبن تقليدية مع شربات السكر',
            price: 7.000,
            category: 'desserts',
            restaurant: 'kohi',
            image: 'https://images.unsplash.com/photo-1579888944880-d98341245702?w=400&h=400&fit=crop'
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
