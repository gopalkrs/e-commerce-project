const productsData = [
    {
        name: "Fresho Grapes- Green Seedless, Sonaka",
        description: "Juicy and snappy, with a beautiful balance of sweet and tarty flavour, these grape bunches have a lingering taste.Do not tire yourselves searching for unspoiled fruit, we have handpicked and finely packed fresho green seedless grapes which are just a few clicks away",
        image: "https://www.bigbasket.com/media/uploads/p/l/40218332_1-fresho-grapes-green.jpg",
        price: 4300,
        category:"fruits-vegetables",
        quantity: "500g"
    },
    {
        name: "Fresho Apple - Shimla",
        description: "Considered as most commonly grown apples in India, Shimla apples have a light red skin, juicy and crunchy flesh.We source the best apples with residue and wax free peel from the trusted growers.",
        image: "https://www.bigbasket.com/media/uploads/p/l/40033819_27-fresho-apple-shimla.jpg",
        price: 15900,
        category:"fruits-vegetables",
        quantity: "1Kg"
    },
    {
        name: "Fresho Watermelon - Medium",
        description: "With greenish black to smooth dark green surface, Fresho watermelons are globular in shape and are freshly picked for you directly from our farmersThe juicy, sweet and grainy textured flesh is filled with 12-14% of sugar content, making it a healthy alternative to sugary carbonated drinks. Flesh colour of these watermelons are pink to red with dark brown/black seeds.",
        image: "https://www.bigbasket.com/media/uploads/p/l/40103540_4-fresho-watermelon-medium.jpg",
        price: 6450,
        category:"fruits-vegetables",
        quantity: "2.8-4Kg"
    },
    {
        name: "Fresho Broccoli",
        description: "With a shape resembling that of a cauliflower, Brocollis have clusters of small, tight flower heads. These heads turn bright green on cooking and tastes slightly bitter, Broccoli prevents cancer and reduces cholesterol.Maintains bone and heart health.",
        image: "https://www.bigbasket.com/media/uploads/p/l/10000063_20-fresho-broccoli.jpg",
        price: 2850,
        category:"fruits-vegetables",
        quantity: "250g-500g"
    },
    {
        name: "Fresho Green Peas",
        description: "Green peas are small, spherical and greenish in colour with a crunchy texture and sweet flavour. Green peas are a rich source of fiber and essential nutrients like vitamins C, K and B complex.They provide antioxidant and anti inflammatory benefits and are an extremely low fat food.",
        image: "https://www.bigbasket.com/media/uploads/p/l/10000283_11-fresho-green-peas.jpg",
        price: 6250,
        category:"fruits-vegetables",
        quantity: "500g"
    },
    {
        name: "Aashirvaad Atta/Godihittu - Whole Wheat",
        description: "Launched on 27th May 2002, Aashirvaad Whole Wheat Atta has now become number one in branded packaged atta across the country. Behind every Aashirvaad pack are the Indian farmers and Aashirvaad experts who’ve made the atta with extra care. Aashirvaad prides itself in making 100% pure whole wheat atta with all its natural dietary fibres intact which ensures that you and your family receive optimum nutrition for a healthy life. Directly sourced from a wide network of Indian rural farmers, Aashirvaad Superior MP Atta is Made in India.",
        image: "https://www.bigbasket.com/media/uploads/p/l/30006887_6-aashirvaad-atta-whole-wheat.jpg",
        price: 10500,
        category:"foodgrains-spices",
        quantity: "2Kg"
    },
    {
        name: "Royal Sooji Ordinary/Bombay Rava",
        description: "Sooji Ravva is a staple in the Indian diet. Its nutritious and can be easily digested. It has a rich flavour and aroma and provides essential amino acids for complete protein. It comes to use as the key ingredient in different dishes as it is used in a variety of soups, salads, sweets and savouries, Sooji Ravva is essential in every household. It is rich in fiber and very wholesome. It makes you stronger and is ideal for people who are managing their weight. ",
        image: "https://www.bigbasket.com/media/uploads/p/l/10000423_12-bb-royal-sooji-ordinarybombay-rava.jpg",
        price: 4000,
        category:"foodgrains-spices",
        quantity: "1Kg"
    },
    {
        name: "Royal Organic - Toor Dal/Togari Bele",
        description: "Toor Dal is not only delicious but also has nutritional value. It contains a good amount of fiber. Toor dal is an excellent source of nutrients and plant protein, and it also contains dietary fiber. In essence, legumes are nutritional though they represent a low-fat and low-cholesterol alternative. Legumes such as toor dal provide essential nutrients, fiber and protein for vegetarians. Toor dal rich in protein, vitamins and iron is often served with rich spices over rice and Rotis.",
        image: "https://www.bigbasket.com/media/uploads/p/l/40075469_9-bb-royal-organic-turtoor-dal.jpg",
        price: 27500,
        category:"foodgrains-spices",
        quantity: "2Kg"
    },
    {
        name: "Saffola Tasty Refined Cooking oil, Pro Fitness Conscious",
        description: "We understand the staying fit is important for you and your family. So when it comes to food, it important that you make the right choices to ensure your efforts are fruitful. Oil is an essential ingredient in your meals. Most often, the first step will be to reduce the amount of oil used. But that might not be enough.",
        image: "https://www.bigbasket.com/media/uploads/p/l/100554_7-saffola-tasty-refined-cooking-oil-blended-rice-bran-corn-oil-pro-fitness-conscious.jpg",
        price: 20580,
        category:"foodgrains-spices",
        quantity: "1Litre"
    },
    {
        name: "Everest Garam Masala, 100 g Carton",
        description: "Everest Garam Masala has been an evergreen taste enhancer for several years in India. It is a combine of 13 spices, with chilli powder as the support zest. The masala known for adding the savor to dishes also gives thick red colour to the ever unusual Indian dishes.",
        image: "https://www.bigbasket.com/media/uploads/p/l/268943_3-everest-garam-masala.jpg",
        price: 8000,
        category:"foodgrains-spices",
        quantity: "100g"
    },
    {
        name: "Tata Salt Iodised Crystal Salt",
        description: "Salt Contains requisite amount of Iodine it is generally accepted that Iodine helps in proper mental development of children and prevents Iodine deficiency disorders, I-Shakti Crystal Salt contains the requisite amount Iodine is generally known to be Important for optional and Mental development of Children and also known prevent Iodine Deficiency Disorders.",
        image: "https://www.bigbasket.com/media/uploads/p/l/40017970_3-tata-salt-iodised-crystal-salt.jpg",
        price: 2000,
        category:"foodgrains-spices",
        quantity: "1Kg"
    },
    {
        name: "MAGGI 2-Minute Instant Noodles - Masala",
        description: "Indias favourite Masala Noodles, Maggi 2-minute Noodles, now comes with the goodness of Iron. Each portion (70g) of Maggi Masala Noodles provides you with 15% of your daily Iron requirement (*as per the Daily Dietary Allowances for an Adult Sedentary Male (ICMR 2010). Containing your favourite masala taste, Maggi noodles are made with the choicest quality spices. Make your bowl of Maggi even better by chopping up some vegetables, dropping in an egg or throwing in your favourite ingredients.",
        image: "https://www.bigbasket.com/media/uploads/p/l/266162_16-maggi-2-minute-instant-noodles-masala.jpg",
        price: 4625,
        category:"snacks-bakery",
        quantity: "280g"
    },
    {
        name: "Lays Potato Chips - American Style Cream & Onion Flavour, Best-Quality & Crunchy",
        description:"Relish the delectable combination of sour and cream perfectly blended with herb and onion flavour. From the everyday snack to the impromptu get-togethers, LAYS chips are the perfect addition to any occasion. Whether its party time or family time, everyone loves gathering around the chip bowl.About the brand: Lays, the world's largest and favourite snack food brand, has steadily established itself as an indispensable part of India's snacking culture since its launch in 1995. With its irresistible taste, international and Indian flavours, Lays has established itself as a youth brand and continues to grow in the hearts and mind of its consumers.",
        image: "https://www.bigbasket.com/media/uploads/p/l/40202281_6-lays-potato-chips-american-style-cream-onion-flavour-best-quality-crunchy.jpg",
        price: 4225,
        category:"snacks-bakery",
        quantity: "115Kg"
    },
    {
        name: "Haldirams Namkeen - Aloo Bhujia",
        description:"Haldirams Aloo Bhujia is prepared from potatoes and special spice, this snack has a nice highly spiced flavour. The tastes enormous with any food you have. Carry a small suitable pack to your office and have something to munch on when hungry.",
        image: "https://www.bigbasket.com/media/uploads/p/l/263128_1-haldirams-namkeen-aloo-bhujia.jpg",
        price: 3850,
        category:"snacks-bakery",
        quantity: "150g"
    },
    {
        name: "Kissan Mixed Fruit Jam",
        description:"All your favorite fruits come together in Kissan Mixed Fruit Jam. A medley of flavours from 8 fruits such as Banana, Papaya, Apple, Pear, Pineapple, Mango, Grape and Orange blended in to one lip smacking jam. Kissan jam is the best jam with the goodness of your favorite 8 fruits. Kissan Mixed Fruit Jam is best partnered with bread to provide yummy on the go breakfast for your kid every morning.",
        image: "https://www.bigbasket.com/media/uploads/p/l/266577_10-kissan-mixed-fruit-jam.jpg",
        price: 15300,
        category:"snacks-bakery",
        quantity: "500g"
    },
    {
        name: "Gatorade Orange Flavour Sports Drink",
        description:"Gatorade is a scientifically formulated sports drink with fluids, electrolytes (mineral salts), carbohydrates and flavour, that helps you to Rehydrate, Replenish and Refuel. It helps to restore fluids, Electrolytes and energy-that you lose in sweat during exercise.",
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/3032a.jpg",
        price: 5000,
        category:"snacks-bakery",
        quantity: "500ml"
    },
    {
        name: "Britannia Gobbles Choco Chill Cake",
        description:"Britannia Chocolate Cake has soft and delicious cake slices with the goodness of chocolate, milk and eggs. With each bite feel the richness and smoothness of chocolate which gives mouth-watering flavour. Britannia Cakes have soft spongy and fluffy slices that deliciously melts in your mouth. Believing in delivering fresh and healthy products, Britannia India manufactures some of India's favourite cakes.",
        image: "https://www.bigbasket.com/media/uploads/p/l/259992_15-britannia-gobbles-choco-chill-cake.jpg",
        price: 2000,
        category:"snacks-bakery",
        quantity: "50g"
    },
    {
        name: "TRESemme Keratin Smooth Shampoo",
        description:"TRESemmé Keratin Smooth Shampoo helps your hair restore its keratin leaving them visibly straight and smoother. Infused with light-weight Argan Oil, this professional shampoo nourishes each strand of your hair making them silky smooth and easier to manage. This unique combination of Keratin and Argan Oil conditions and strengthens your hair and provides them hydration and elasticity.",
        image: "https://www.bigbasket.com/media/uploads/p/l/40002097_13-tresemme-keratin-smooth-shampoo.jpg",
        price: 42700,
        category:"beauty-healthcare",
        quantity: "580ml"
    },
    {
        name: "Vaseline Intensive Care Cocoa Glow Body Lotion - With Shea Butter",
        description:"With daily exposure to environmental triggers, the skins natural moisture barrier can break down, allowing water to escape the skin. Vaseline Intensive Care Cocoa Glow Lotion contains Micro-droplets of Vaseline Jelly that locks in moisture within the skin to allow the skins natural barrier to recover. Get Healthy, glowing skin with our Vaseline Intensive Care Cocoa Glow Body Lotion.",
        image: "https://www.bigbasket.com/media/uploads/p/l/286741_23-vaseline-intensive-care-cocoa-glow-body-lotion-with-shea-butter-non-greasy-formula.jpg",
        price: 21900,
        category:"beauty-healthcare",
        quantity: "400ml"
    },
    {
        name: "Colgate MaxFresh Toothpaste Gel - Anticavity, Spicy Fresh",
        description:"Colgate MaxFresh Spicy Fresh Gel Toothpaste comes with cooling crystals that help in keeping you refreshed for a long time. Experience intense cooling and a refreshing blast of Flavour to transform your day and fight cavities at the same time. It keeps germ build-up at bay and maintains a healthy and refreshing oral hygiene. The clear red gel toothpaste also whitens your teeth with every brush, so you can smile with a never before confidence!",
        image: "https://www.bigbasket.com/media/uploads/p/l/268464_18-colgate-maxfresh-toothpaste-gel-anticavity-spicy-fresh-saver-pack.jpg",
        price: 12400,
        category:"beauty-healthcare",
        quantity: "300g"
    },
    {
        name: "Gillette Foam Shave - Lathers Quickly & Hydrates",
        description:"Gillette Classic Regular Pre Shave Foam, 418g with 33% extra free fatty foam by Procter and gamble comfort glide formula. The lather spreads easily and rinses clean for that Foam shave men have enjoyed for generations. Gillette foam-based shave can clean well and provide a smooth finish and is also easy to use.",
        image: "https://www.bigbasket.com/media/uploads/p/l/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
        price: 15750,
        category:"beauty-healthcare",
        quantity: "418g"
    },
    {
        name: "Axe Gold Temptation - Long Lasting Deodorant, Bodyspray, For Men",
        description:"Introducing Gold Temptation Deodorant by AXE. It offers a wide range of long-lasting fragrances, no-gas perfumes and male grooming products. The Axe is your wingman for all your daily grooming needs. These deodorants for men are formulated with 48HR Dual Action Technology that keeps you smelling great, feeling fresh and having lasting odour protection.",
        image: "https://www.bigbasket.com/media/uploads/p/l/40019483_13-axe-gold-temptation-long-lasting-deodorant-bodyspray-for-men.jpg",
        price: 14700,
        category:"beauty-healthcare",
        quantity: "150ml"
    },
    {
        name: "Garnier Men Acno Fight Anti-Pimple Face Wash",
        description:"In 1904, Garnier was founded by Alfred Amour Garnier in Blois, Paris. Starting from hair care products with natural ingredients, Garnier continues to grow and begin to wrestle the world of skin care. Garnier believes that nature has provided the best self-care solutions, so that Garnier products always use natural ingredients. Deeply cleanse your face while fighting the 6 signs of acne and 99.9% pimple causing germs with the Garnier Men Acno Fight Anti Pimple Face Wash.",
        image: "https://www.bigbasket.com/media/uploads/p/l/40022551_10-garnier-men-acno-fight-anti-pimple-face-wash.jpg",
        price: 18000,
        category:"beauty-healthcare",
        quantity: "100gm"
    },
    {
        name: "Eno Regular Digestive Antacid",
        description:"ENO gets to work in 6 seconds to neutralize acid in your stomach, on contact. ENO Powder gets to work faster than liquid and tablet antacids, so that you get fast relief when you need it most. India's No 1 Antacid brand.",
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/10839a.jpg",
        price: 11000,
        category:"beauty-healthcare",
        quantity: "100g"
    },
    {
        name: "Surf Excel Easy Wash Detergent Powder",
        description:"Surf excel Easy Wash has the power of 10 hands that removes tough stains easily.It's a superfine powder that dissolves easily and removes tough stains fast. It's superior technology fights various tough stains such oil, ketchup, chocolate, curry stains.",
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/67393b.jpg",
        price: 6400,
        category:"cleaning-household",
        quantity: "500g"
    },
    {
        name: "Colin Glass Cleaner",
        description:"Colin Glass Cleaner contains the power of shine boosters, It removes dirt and dust and also gives 2 times more shine than regular cleaners, Can be used across glass and shiny surfaces, such as tabletops, mirrors, glass windows, fridge, oven, kitchen cabinets, furniture, car windows etc",
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/233781a.jpg",
        price: 9200,
        category:"cleaning-household",
        quantity: "500ml"
    },
    {
        name: "Comfort After Wash Fabric Conditioner (Lily Fresh)",
        description:"",
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/45750a.jpg",
        price: 11000,
        category:"cleaning-household",
        quantity: "420ml"
    },
    {
        name: "Ambi Pur Lavender Bouquet Air Freshener",
        description:"Ambi Pur air freshener truly eliminates odours instead of masking them, Its patented odourclear technology traps malodorous particles in the air and leave behind a delightful and refreshing scent, Create an uplifting, relaxing ambience in every corner of your home with the mildly powered fragrance.",
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/260211a.jpg",
        price: 22400,
        category:"cleaning-household",
        quantity: "275g"
    },
    {
        name: "Dettol Antiseptic Disinfectant Liquid",
        description:"Dettol Antiseptic Liquid protects you and your family from 100 illness-causing germs. It comes in a fresh pine fragrance. The topical antiseptic liquid sanitizes your home and helps maintain your personal hygiene. The Dettol first aid antiseptic liquid can be used to protect against infection from cuts and scratches, disinfect toys, and sanitize baby wear leaving everything clean and fresh.",
        image: "https://www.bigbasket.com/media/uploads/p/l/253539_9-dettol-antiseptic-disinfectant-liquid.jpg",
        price: 11000,
        category:"cleaning-household",
        quantity: "250ml"
    },
];

module.exports = productsData;