const products = [
    new Products({
        id: 1,
        image: 'product-image/antifungispray.png',
        name: 'Anti Fungi Spray',
        price: '$11.33',
        prevPrice: '$13.95',
        category: 'pest-control',
        rating: 4.1,
        description: `
            <p>
                <strong>Anti-Fungi Spray</strong> is a fast-acting cleaning solution designed to remove and prevent 
                mold on multiple surfaces around the home. It works effectively on painted walls, tiles, grout, 
                kitchen areas, plastic, stainless steel, and coated wood. The water-based formula penetrates quickly, 
                lifts mold stains, neutralizes musty odors, and leaves a thin protective layer to help slow down 
                regrowth.
            </p>
            <ul>
                <li><strong>Quick results:</strong> Cleans mold spots and dark stains efficiently.</li>
                <li><strong>Mild formula:</strong> Gentle scent, low irritation, no harsh chlorine smell.</li>
                <li><strong>Multi-purpose:</strong> Suitable for most sealed household surfaces.</li>
                <li><strong>Long-lasting:</strong> Provides light protection against mold recurrence.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySprout</td>
                </tr>
                <tr>
                    <th>Volume</th>
                    <td>500 ml spray bottle</td>
                </tr>
                <tr>
                    <th>Formula</th>
                    <td>Water-based solution with anti-fungal agents</td>
                </tr>
                <tr>
                    <th>Suitable Surfaces</th>
                    <td>Painted walls, tiles, grout, stainless steel, plastic, coated wood</td>
                </tr>
                <tr>
                    <th>Not Recommended</th>
                    <td>Raw wood, fabrics, natural leather</td>
                </tr>
                <tr>
                    <th>Scent</th>
                    <td>Mild and fresh, fades quickly</td>
                </tr>
                <tr>
                    <th>SKU</th>
                    <td>AFS-500</td>
                </tr>
                <tr>
                    <th>Shelf Life</th>
                    <td>36 months from manufacturing date</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 2,
        image: 'product-image/balconyrailingplanters.png',
        name: 'Balcony-railing Planter',
        price: '$20.99',
        category: 'pot-planter',
        readyToShip: true,
        rating: 3.6,
        description: `
            <p>
                The <strong>Balcony-railing Planter</strong> is a space-saving solution designed for urban living. 
                Perfect for apartments and small outdoor areas, this planter hangs securely over balcony railings 
                and provides a stylish way to grow flowers, herbs, or small vegetables. Its durable design allows 
                you to maximize greenery even when floor space is limited.
            </p>
            <ul>
                <li><strong>Space-efficient:</strong> Makes use of vertical railing space instead of floor area.</li>
                <li><strong>Durable build:</strong> Weather-resistant material suitable for outdoor use.</li>
                <li><strong>Easy installation:</strong> Fits most standard railings, no tools required.</li>
                <li><strong>Versatile use:</strong> Ideal for herbs, flowers, and decorative plants.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySprout</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>High-quality plastic / powder-coated metal (weather-resistant)</td>
                </tr>
                <tr>
                    <th>Dimensions</th>
                    <td>40 × 18 × 16 cm (standard size)</td>
                </tr>
                <tr>
                    <th>Capacity</th>
                    <td>Holds up to 6 liters of soil</td>
                </tr>
                <tr>
                    <th>Suitable For</th>
                    <td>Balcony railings 3–6 cm wide (fits most standard railings)</td>
                </tr>
                <tr>
                    <th>Colors</th>
                    <td>Black, White, Terracotta</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>Approx. 1.2 kg</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Built-in drainage holes to prevent overwatering</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 3,
        image: 'product-image/basil.png',
        name: 'Basil Seed',
        price: '$3',
        category: 'seed', 
        rating: 2.4,
        description: `
            <p>
                <strong>Basil Seeds</strong> are perfect for anyone looking to grow fresh and aromatic basil 
                right at home. Easy to cultivate both indoors and outdoors, basil grows quickly and provides 
                flavorful leaves that can be used in cooking, garnishing, or herbal drinks. Whether planted 
                in pots, balcony planters, or garden beds, basil is a rewarding herb that thrives with 
                minimal care.
            </p>
            <ul>
                <li><strong>Fast germination:</strong> Seeds sprout within 5–10 days under the right conditions.</li>
                <li><strong>Easy to grow:</strong> Suitable for beginners and home gardeners.</li>
                <li><strong>Versatile use:</strong> Fresh leaves for cooking, teas, or smoothies.</li>
                <li><strong>Indoor & outdoor:</strong> Can be grown in small pots or garden soil.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySprout</td>
                </tr>
                <tr>
                    <th>Seed Type</th>
                    <td>Basil (Ocimum basilicum)</td>
                </tr>
                <tr>
                    <th>Package Size</th>
                    <td>Approx. 5 grams (about 2,000 seeds)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>80–90% under proper conditions</td>
                </tr>
                <tr>
                    <th>Growing Season</th>
                    <td>Spring to early autumn (warm climates year-round)</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Well-drained soil, rich in organic matter</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>6–8 hours of sunlight per day</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>40–60 days after germination</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 4,
        image: 'product-image/bioorganicfertilizer.png',
        name: 'Bio-organic Fertilizer',
        price: '$24.99',
        category: 'soil-fertilizer',
        rating: 2.6,
        description: `
            <p>
                <strong>Bio-organic Fertilizer</strong> is an eco-friendly plant nutrition solution made from 
                natural and organic materials. It improves soil structure, enhances nutrient availability, 
                and supports healthy root growth. Suitable for vegetables, herbs, flowers, and fruit plants, 
                this fertilizer boosts plant vitality without the harmful effects of chemical additives.
            </p>
            <ul>
                <li><strong>Eco-friendly:</strong> 100% natural and biodegradable.</li>
                <li><strong>Soil improvement:</strong> Enriches soil fertility and microbial activity.</li>
                <li><strong>Safe for food crops:</strong> Ideal for vegetables and herbs.</li>
                <li><strong>Sustainable:</strong> Promotes long-term soil health and plant resilience.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySprout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Bio-organic granular/pellet fertilizer</td>
                </tr>
                <tr>
                    <th>Composition</th>
                    <td>Organic matter, beneficial microbes, natural minerals</td>
                </tr>
                <tr>
                    <th>Package Size</th>
                    <td>2 kg / 5 kg / 10 kg bags</td>
                </tr>
                <tr>
                    <th>Application</th>
                    <td>Vegetables, herbs, flowers, fruit trees, indoor and outdoor plants</td>
                </tr>
                <tr>
                    <th>Usage Rate</th>
                    <td>100–200 g per plant (depending on size and soil condition)</td>
                </tr>
                <tr>
                    <th>Benefits</th>
                    <td>Boosts root growth, improves soil texture, increases yield</td>
                </tr>
                <tr>
                    <th>Shelf Life</th>
                    <td>24 months when stored in a cool, dry place</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 5,
        image: 'product-image/blueberry.png',
        name: 'Blueberry Seed',
        price: '$5',
        category: 'seed',
        rating: 4.7,
        sold: true,
        description: `
            <p>
                <strong>Blueberry Seeds</strong> allow you to grow your own delicious and nutrient-rich 
                blueberries right at home. Blueberries are well known for their high antioxidant content, 
                sweet-tart flavor, and versatility in desserts, smoothies, or healthy snacks. 
                While they require a bit more patience and care compared to fast-growing herbs, 
                cultivating blueberries from seeds can be a rewarding gardening experience.
            </p>
            <ul>
                <li><strong>Nutrient-rich fruit:</strong> Packed with vitamins, fiber, and antioxidants.</li>
                <li><strong>Homegrown quality:</strong> Enjoy fresh, chemical-free blueberries.</li>
                <li><strong>Long-term plant:</strong> With proper care, plants can produce fruit for years.</li>
                <li><strong>Indoor & outdoor:</strong> Can be started indoors and later transferred outdoors.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySprout</td>
                </tr>
                <tr>
                    <th>Seed Type</th>
                    <td>Blueberry (Vaccinium spp.)</td>
                </tr>
                <tr>
                    <th>Package Size</th>
                    <td>Approx. 0.5–1 gram (about 300–500 seeds)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>70–80% under proper conditions</td>
                </tr>
                <tr>
                    <th>Growing Season</th>
                    <td>Spring or early autumn</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Acidic soil (pH 4.5–5.5), well-drained and rich in organic matter</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>6–8 hours of full sun per day</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>2–3 years after germination (fruit-bearing stage)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 6,
        image: 'product-image/butterflypea.png',
        name: 'Butterfly Pea Seed',
        price: '$2.42',
        category: 'seed',
        readyToShip: true,
        rating: 5,
        description: `
            <p>
                <strong>Butterfly Pea Seeds</strong> are perfect for growing beautiful blue-purple flowers 
                that are both ornamental and edible. Known for their vibrant color and health benefits, 
                butterfly pea flowers are often used in teas, desserts, and natural food coloring. 
                The plant is hardy, fast-growing, and can thrive in warm climates with minimal care, 
                making it ideal for home gardens, balconies, and fences.
            </p>
            <ul>
                <li><strong>Fast-growing:</strong> Seeds sprout quickly and plants establish easily.</li>
                <li><strong>Dual-purpose:</strong> Attractive blooms and edible flowers for drinks or cooking.</li>
                <li><strong>Climbing vine:</strong> Perfect for trellises, fences, or balcony decoration.</li>
                <li><strong>Low maintenance:</strong> Thrives in full sun with minimal care.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySprout</td>
                </tr>
                <tr>
                    <th>Seed Type</th>
                    <td>Butterfly Pea (Clitoria ternatea)</td>
                </tr>
                <tr>
                    <th>Package Size</th>
                    <td>Approx. 10 grams (about 40–50 seeds)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>85–90% under proper conditions</td>
                </tr>
                <tr>
                    <th>Growing Season</th>
                    <td>Spring to late summer</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Well-drained soil, moderately fertile</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6–8 hours daily)</td>
                </tr>
                <tr>
                    <th>Blooming Time</th>
                    <td>8–12 weeks after sowing</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Edible flowers rich in antioxidants and anthocyanins</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 7,
        image: 'product-image/cabbage.png',
        name: 'Cabbage Seed',
        price: '$1.99',
        prevPrice: '$2.69',
        category: 'seed',
        sold: true,
        rating: 1.2,
        description: `
            <p>
                <strong>Cabbage Seeds</strong> are a reliable choice for home gardeners who want to grow 
                fresh, crisp, and nutritious cabbage heads right in their backyard or balcony. 
                Known for their dense leaves and mild flavor, cabbages are versatile vegetables 
                used in salads, soups, stir-fries, and pickling. With proper care, cabbage plants 
                produce firm, compact heads that store well and provide excellent nutrition.
            </p>
            <ul>
                <li><strong>Nutrient-rich:</strong> High in vitamins C, K, and fiber.</li>
                <li><strong>Cool-season crop:</strong> Grows best in mild to cool weather.</li>
                <li><strong>Compact growth:</strong> Suitable for garden beds or large pots.</li>
                <li><strong>Versatile use:</strong> Ideal for cooking, salads, and fermentation.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySprout</td>
                </tr>
                <tr>
                    <th>Seed Type</th>
                    <td>Cabbage (Brassica oleracea var. capitata)</td>
                </tr>
                <tr>
                    <th>Package Size</th>
                    <td>Approx. 5 grams (about 1,000–1,200 seeds)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>80–90% under proper conditions</td>
                </tr>
                <tr>
                    <th>Growing Season</th>
                    <td>Spring and Autumn</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Rich, well-drained soil with good moisture retention</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6+ hours daily)</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>70–90 days after sowing</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Firm heads, long shelf life, and high nutritional value</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 8,
        image: 'product-image/carrot.png',
        name: 'Carrot Seed',
        price: '$1.49',
        category: 'seed', 
        readyToShip: true,
        rating: 3.4,
        description: `
            <p>
                <strong>Carrot Seeds</strong> are perfect for gardeners who want to grow fresh, 
                crunchy, and sweet carrots at home. Carrots are highly versatile vegetables that 
                can be eaten raw, cooked, or juiced, and are known for their bright orange color 
                and rich supply of beta-carotene, vitamin A, and dietary fiber. They are easy to 
                grow with minimal care and thrive in well-drained, loose soil. With proper planting, 
                you’ll enjoy healthy roots that are full of flavor and nutrition.
            </p>
            <ul>
                <li><strong>Nutrient-rich:</strong> Packed with vitamins A, C, and antioxidants.</li>
                <li><strong>Easy to grow:</strong> Suitable for beginner gardeners.</li>
                <li><strong>Space-efficient:</strong> Can be grown in garden beds or deep containers.</li>
                <li><strong>Versatile use:</strong> Great for salads, soups, stir-fries, and juices.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySprout</td>
                </tr>
                <tr>
                    <th>Seed Type</th>
                    <td>Carrot (Daucus carota subsp. sativus)</td>
                </tr>
                <tr>
                    <th>Package Size</th>
                    <td>Approx. 5 grams (about 3,000–3,500 seeds)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>75–85% under proper conditions</td>
                </tr>
                <tr>
                    <th>Growing Season</th>
                    <td>Spring and Autumn</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Loose, sandy, well-drained soil without stones</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6–8 hours daily)</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>70–80 days after sowing</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Bright color, sweet taste, and high nutritional value</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 9,
        image: 'product-image/cedarplanterbox.png',
        name: 'Cedar Planter Box',
        price: '$17.49',
        prevPrice: '$19.99',
        category: 'pot-planter', 
        readyToShip: false,
        rating: 4.5,
        description: `
            <p>
                The <strong>Cedar Planter Box</strong> is a durable and stylish choice for growing 
                herbs, flowers, and vegetables right at home. Made from natural cedar wood, this 
                planter is resistant to rot, insects, and outdoor weather conditions, making it 
                a long-lasting addition to any balcony, patio, or garden. Its natural wood finish 
                blends seamlessly with both modern and rustic outdoor décor, while providing 
                excellent drainage and aeration for healthy plant growth.
            </p>
            <ul>
                <li><strong>Durable design:</strong> Cedar wood is naturally resistant to decay and pests.</li>
                <li><strong>Eco-friendly:</strong> Made from sustainable and untreated wood.</li>
                <li><strong>Versatile use:</strong> Ideal for herbs, flowers, vegetables, or decorative plants.</li>
                <li><strong>Stylish look:</strong> Natural wood grain enhances any outdoor space.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Natural Cedar Wood</td>
                </tr>
                <tr>
                    <th>Dimensions</th>
                    <td>60cm x 30cm x 25cm (L x W x H)</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>Approx. 4.5 kg</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>Natural Wood Finish</td>
                </tr>
                <tr>
                    <th>Drainage</th>
                    <td>Pre-drilled holes for proper water flow</td>
                </tr>
                <tr>
                    <th>Assembly</th>
                    <td>Easy to assemble, hardware included</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Outdoor & Indoor gardening</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Weather-resistant, eco-friendly, and reusable season after season</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 10,
        image: 'product-image/cilantro.png',
        name: 'Cilantro Seed',
        price: '$1.29',
        category: 'seed', 
        readyToShip: true,
        rating: 4.6,
        description: `
            <p>
                Grow your own fresh and aromatic <strong>Cilantro (Coriander) leaves</strong> at home with these 
                premium-quality seeds. Cilantro is a popular herb used in a wide variety of cuisines, 
                from Asian to Mexican, bringing a fresh, citrusy flavor to dishes. Easy to grow both 
                indoors and outdoors, cilantro thrives in pots, garden beds, or balcony planters. 
                With just a little care, you can enjoy continuous harvests of fresh leaves and seeds 
                for cooking, garnishing, or seasoning.
            </p>
            <ul>
                <li><strong>Fresh flavor:</strong> Adds a zesty, citrusy taste to many dishes.</li>
                <li><strong>Easy to grow:</strong> Suitable for pots, garden beds, and balcony planters.</li>
                <li><strong>Dual purpose:</strong> Harvest leaves as cilantro and seeds as coriander spice.</li>
                <li><strong>Fast-growing:</strong> Germinates quickly and produces abundant leaves.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Cilantro / Coriander Seed</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>Approx. 5g (200+ seeds)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>85%+</td>
                </tr>
                <tr>
                    <th>Growth Habit</th>
                    <td>Annual herb</td>
                </tr>
                <tr>
                    <th>Ideal Climate</th>
                    <td>Cool to mild temperatures</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Well-drained, fertile soil</td>
                </tr>
                <tr>
                    <th>Sowing Season</th>
                    <td>Spring or Autumn</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>25–30 days for leaves, 90 days for seeds</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Edible leaves & seeds, easy to grow, aromatic flavor</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 11,
        image: 'product-image/cocopeat.png',
        name: 'Cocopeat',
        price: '$6.39',
        prevPrice: '$7.59',
        category: 'soil-fertilizer', 
        readyToShip: true,
        rating: 4.3,
        description: `
            <p>
                <strong>Cocopeat</strong>, also known as coir pith or coconut fiber soil, is a natural growing medium 
                made from coconut husk fibers. It is an eco-friendly alternative to traditional soil and 
                peat moss, offering excellent water retention, aeration, and root support. Cocopeat is 
                ideal for seed starting, potting mixes, hydroponics, and soil conditioning. Lightweight, 
                biodegradable, and sustainable, cocopeat helps improve soil structure while promoting 
                healthy plant growth.
            </p>
            <ul>
                <li><strong>Eco-friendly:</strong> 100% natural and biodegradable product.</li>
                <li><strong>Water retention:</strong> Holds moisture effectively, reducing frequent watering needs.</li>
                <li><strong>Soil improvement:</strong> Enhances aeration and nutrient absorption.</li>
                <li><strong>Multi-purpose:</strong> Suitable for seed germination, potting, and hydroponics.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Cocopeat Block / Loose Cocopeat</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>650g block (expands up to 8–10 liters)</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Natural coconut husk fiber</td>
                </tr>
                <tr>
                    <th>pH Level</th>
                    <td>5.5 – 6.5 (ideal for most plants)</td>
                </tr>
                <tr>
                    <th>Electrical Conductivity (EC)</th>
                    <td>&lt; 0.5 mS/cm (low salt content)</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Seed starting, potting soil mix, hydroponics, gardening</td>
                </tr>
                <tr>
                    <th>Expansion Ratio</th>
                    <td>Up to 8–10 times its volume when hydrated</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Eco-friendly, reusable, lightweight, sustainable</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 12,
        image: 'product-image/compositeraisedbed.png',
        name: 'Composite Raised Bed',
        price: '$19.99',
        category: 'pot-planter', 
        readyToShip: false,
        rating: 3.9,
        description: `
            <p>
                <strong>Composite Raised Bed</strong> is a modern and durable solution for home gardening. 
                Made from a blend of recycled wood and plastic, it combines the natural look of wood with 
                the weather resistance of composite materials. Unlike traditional wooden beds, it will 
                not rot, crack, or warp, making it a long-lasting option for growing vegetables, herbs, 
                and flowers. With its clean design and sturdy structure, the composite raised bed 
                provides excellent soil depth and drainage, ensuring healthy plant growth.
            </p>
            <ul>
                <li><strong>Durable:</strong> Resistant to rot, pests, and weather conditions.</li>
                <li><strong>Eco-friendly:</strong> Made from recycled wood and plastic materials.</li>
                <li><strong>Low maintenance:</strong> No need for painting or sealing like traditional wood.</li>
                <li><strong>Easy setup:</strong> Quick to assemble and suitable for all garden sizes.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Composite Raised Garden Bed</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Recycled wood fiber + recycled plastic composite</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>120 × 80 × 30 cm (custom sizes available)</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>Natural wood tone / Dark brown / Grey</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>Varies by size (lightweight yet sturdy)</td>
                </tr>
                <tr>
                    <th>Weather Resistance</th>
                    <td>UV-resistant, rot-proof, termite-proof</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Vegetables, herbs, flowers, and decorative plants</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Long-lasting, eco-friendly, easy to assemble</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 13,
        image: 'product-image/cucumber.png',
        name: 'Cucumber',
        price: '$2',
        category: 'seed', 
        readyToShip: true,
        rating: 4.1,
        description: `
            <p>
                <strong>Cucumber Seed</strong> is perfect for home gardeners who want a steady supply 
                of fresh, crunchy cucumbers. Easy to grow in both pots and garden beds, cucumbers thrive 
                in warm conditions with plenty of sunlight. The seeds germinate quickly and produce 
                strong vines that bear high yields of refreshing cucumbers. Known for their crisp texture 
                and mild flavor, cucumbers are ideal for salads, pickling, juicing, or enjoying fresh. 
                With proper care, cucumber plants can provide continuous harvests throughout the season.
            </p>
            <ul>
                <li><strong>Fast growth:</strong> Germinates within 5–10 days under warm conditions.</li>
                <li><strong>High yield:</strong> Produces multiple fruits per vine.</li>
                <li><strong>Versatile use:</strong> Perfect for salads, pickles, and refreshing drinks.</li>
                <li><strong>Container-friendly:</strong> Can be grown in pots, trellises, or raised beds.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Cucumber Seed</td>
                </tr>
                <tr>
                    <th>Variety</th>
                    <td>Slicing / Pickling (depending on choice)</td>
                </tr>
                <tr>
                    <th>Seed Germination Rate</th>
                    <td>Above 80%</td>
                </tr>
                <tr>
                    <th>Growth Duration</th>
                    <td>55–70 days from sowing to harvest</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring and Summer</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>6–8 hours of direct sunlight daily</td>
                </tr>
                <tr>
                    <th>Soil</th>
                    <td>Well-drained, fertile soil with organic matter</td>
                </tr>
                <tr>
                    <th>Harvest</th>
                    <td>Continuous harvests throughout growing season</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 14,
        image: 'product-image/culantro.png',
        name: 'Culantro',
        price: '$1',
        category: 'seed', 
        readyToShip: true,
        rating: 4.4,
        description: `
            <p>
                <strong>Culantro Seed</strong> is a great choice for anyone who enjoys cooking with 
                aromatic herbs. Known for its strong, distinctive flavor, culantro is commonly used 
                in Asian, Latin American, and Caribbean cuisines. Unlike cilantro, culantro leaves 
                are longer and tougher, but they add a richer, more intense taste to soups, stews, 
                stir-fries, and marinades. 
            </p>
            <p>
                Culantro is easy to grow in warm, partially shaded areas. The seeds may take a little 
                longer to germinate, but once established, the plants are hardy and low-maintenance. 
                Perfect for kitchen gardens, balconies, or small herb planters, culantro provides 
                fresh leaves for harvest all year round.
            </p>
            <ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Culantro Seed</td>
                </tr>
                <tr>
                    <th>Seed Germination Rate</th>
                    <td>70–80%</td>
                </tr>
                <tr>
                    <th>Growth Duration</th>
                    <td>90–120 days to mature</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring to Autumn</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Partial shade, avoids strong direct sun</td>
                </tr>
                <tr>
                    <th>Soil</th>
                    <td>Moist, fertile soil with good drainage</td>
                </tr>
                <tr>
                    <th>Harvest</th>
                    <td>Continuous harvest of fresh leaves year-round</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 15,
        image: 'product-image/flowerpottingmix.png',
        name: 'Flower Potting Mix',
        price: '$12.99',
        category: 'soil-fertilizer', 
        readyToShip: false,
        rating: 4.5,
        description: `
            <p>
                <strong>Flower Potting Mix</strong> is a premium blend of soil components specially 
                formulated to support healthy and vibrant flowering plants. This mix is light, airy, 
                and well-draining, ensuring roots receive enough oxygen while holding sufficient 
                moisture for growth. It is enriched with organic matter and nutrients that boost 
                root development, encourage strong stems, and promote long-lasting blooms.
            </p>
            <p>
                Suitable for a wide variety of flowering plants such as roses, daisies, petunias, 
                marigolds, and more, this potting mix is perfect for indoor pots, balcony gardens, 
                or outdoor containers. With Flower Potting Mix, your flowers will thrive with 
                brighter colors and stronger resilience against stress.
            </p>
            <ul>
                <li><strong>Enriched formula:</strong> Provides essential nutrients for flowers.</li>
                <li><strong>Excellent aeration:</strong> Promotes healthy root growth.</li>
                <li><strong>Moisture balance:</strong> Retains enough water without causing soggy soil.</li>
                <li><strong>Versatile use:</strong> Suitable for indoor and outdoor flowering plants.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Flower Potting Mix</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>5 kg / 10 kg / 20 kg bags</td>
                </tr>
                <tr>
                    <th>Composition</th>
                    <td>Peat moss, cocopeat, perlite, compost, and organic nutrients</td>
                </tr>
                <tr>
                    <th>pH Level</th>
                    <td>5.8 – 6.5 (ideal for most flowers)</td>
                </tr>
                <tr>
                    <th>Application</th>
                    <td>Ready-to-use, no extra mixing required</td>
                </tr>
                <tr>
                    <th>Suitable Plants</th>
                    <td>All flowering plants (indoor & outdoor)</td>
                </tr>
                <tr>
                    <th>Storage</th>
                    <td>Keep in a cool, dry place, away from direct sunlight</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 16,
        image: 'product-image/gardenhose.png',
        name: 'Garden Hose',
        price: '$8.69',
        prevPrice: '$9.19',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 4.3,
        description: `
            <p>
                The <strong>Garden Hose</strong> is a durable and flexible watering solution 
                designed for home gardens, lawns, and outdoor cleaning tasks. Made from 
                high-quality, weather-resistant materials, this hose is built to withstand 
                sun exposure, water pressure, and bending without kinking.
            </p>
            <p>
                With its lightweight design and easy-to-use fittings, the garden hose 
                ensures smooth water flow and hassle-free handling. Perfect for watering 
                plants, washing cars, cleaning patios, or filling outdoor containers, it is 
                a must-have tool for any household or gardener.
            </p>
            <ul>
                <li><strong>Durable construction:</strong> Resistant to cracks, leaks, and UV damage.</li>
                <li><strong>Flexible & kink-free:</strong> Easy to maneuver around the garden.</li>
                <li><strong>Universal fittings:</strong> Compatible with most standard faucets and nozzles.</li>
                <li><strong>Multi-purpose use:</strong> Ideal for watering, washing, and cleaning.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Garden Hose</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>10 m / 20 m / 30 m</td>
                </tr>
                <tr>
                    <th>Diameter</th>
                    <td>1/2 inch or 3/4 inch</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>PVC, reinforced rubber, or expandable fabric</td>
                </tr>
                <tr>
                    <th>Pressure Rating</th>
                    <td>Up to 400 PSI (varies by model)</td>
                </tr>
                <tr>
                    <th>Features</th>
                    <td>Anti-kink, lightweight, UV resistant</td>
                </tr>
                <tr>
                    <th>Included Accessories</th>
                    <td>Hose connector, spray nozzle (optional)</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Gardening, car washing, patio cleaning</td>
                </tr>
                <tr>
                    <th>Storage</th>
                    <td>Store in a shaded, dry area when not in use</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 17,
        image: 'product-image/gardeninggloves.png',
        name: 'Gardening Gloves',
        price: '$5.99',
        prevPrice: '$6.99',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 3.5,
        description: `
            <p>
                The <strong>Gardening Gloves</strong> are designed to protect your hands 
                while providing comfort and flexibility during gardening tasks. Made from 
                durable, breathable, and skin-friendly materials, these gloves keep your 
                hands safe from thorns, dirt, and chemicals while ensuring ease of movement.
            </p>
            <p>
                Whether you're planting, pruning, digging, or handling tools, gardening 
                gloves are an essential accessory for both beginners and experienced 
                gardeners. They reduce hand fatigue and improve grip, allowing you to work 
                more efficiently and safely.
            </p>
            <ul>
                <li><strong>Hand protection:</strong> Shields against cuts, thorns, and blisters.</li>
                <li><strong>Comfortable design:</strong> Breathable fabric prevents sweating.</li>
                <li><strong>Non-slip grip:</strong> Ensures secure handling of tools.</li>
                <li><strong>Versatile use:</strong> Suitable for planting, pruning, and yard work.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Gardening Gloves</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Cotton, polyester, rubber coating, or leather</td>
                </tr>
                <tr>
                    <th>Sizes</th>
                    <td>Small / Medium / Large</td>
                </tr>
                <tr>
                    <th>Color Options</th>
                    <td>Green, brown, black, floral patterns</td>
                </tr>
                <tr>
                    <th>Features</th>
                    <td>Breathable, anti-slip, thorn-resistant, washable</td>
                </tr>
                <tr>
                    <th>Use</th>
                    <td>Planting, weeding, pruning, soil handling</td>
                </tr>
                <tr>
                    <th>Care</th>
                    <td>Hand wash or machine wash depending on material</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pair of gardening gloves</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 18,
        image: 'product-image/gardenknife.png',
        name: 'Garden Knife',
        price: '$4.59',
        category: 'gardening-tool',
        sold: true, 
        readyToShip: true,
        rating: 3.8,
        description: `
            <p>
                The <strong>Garden Knife</strong> is a versatile hand tool designed for 
                multiple gardening tasks, including cutting, digging, pruning, and transplanting. 
                With its sharp, durable blade and ergonomic handle, it provides both precision 
                and strength for everyday garden work.
            </p>
            <p>
                Often called a “Hori Hori knife,” this tool is essential for gardeners who want 
                a single multipurpose tool for weeding, slicing roots, planting bulbs, or even 
                harvesting vegetables. Its sturdy design ensures long-lasting use while reducing 
                effort and hand fatigue.
            </p>
            <ul>
                <li><strong>Multi-functional:</strong> Perfect for digging, cutting, and weeding.</li>
                <li><strong>Durable blade:</strong> Made from stainless steel for rust resistance.</li>
                <li><strong>Comfortable grip:</strong> Ergonomic handle provides control and safety.</li>
                <li><strong>Portable:</strong> Lightweight and often comes with a sheath.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Garden Knife / Hori Hori Knife</td>
                </tr>
                <tr>
                    <th>Blade Material</th>
                    <td>Stainless steel / Carbon steel</td>
                </tr>
                <tr>
                    <th>Blade Length</th>
                    <td>15 – 18 cm (6 – 7 inches)</td>
                </tr>
                <tr>
                    <th>Handle Material</th>
                    <td>Wood / Plastic / Rubber grip</td>
                </tr>
                <tr>
                    <th>Features</th>
                    <td>Sharp edge, serrated edge, measuring scale on blade</td>
                </tr>
                <tr>
                    <th>Use</th>
                    <td>Digging, cutting, pruning, transplanting, harvesting</td>
                </tr>
                <tr>
                    <th>Care</th>
                    <td>Clean and dry after use; store in sheath to prevent rust</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 garden knife + optional protective sheath</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 19,
        image: 'product-image/gardensprayer.png',
        name: 'Garden Sprayer',
        price: '$10.35',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 4.0,
        description: `
            <p>
                The <strong>Garden Sprayer</strong> is a convenient tool designed for applying 
                water, fertilizers, pesticides, or herbicides directly to plants. With its 
                adjustable nozzle and easy-to-use pump system, it ensures precise spraying and 
                even coverage, helping gardeners maintain healthy and pest-free plants.
            </p>
            <p>
                Suitable for both indoor and outdoor use, the sprayer is available in handheld 
                and backpack models, making it versatile for small balcony gardens or large 
                backyard spaces. Its durable design and user-friendly mechanism save time and 
                effort in daily gardening tasks.
            </p>
            <ul>
                <li><strong>Multi-purpose:</strong> For watering, fertilizing, and pest control.</li>
                <li><strong>Adjustable nozzle:</strong> Allows mist, spray, or jet functions.</li>
                <li><strong>Durable build:</strong> Made from high-quality plastic or stainless steel.</li>
                <li><strong>Portable:</strong> Lightweight and easy to carry for home gardeners.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Handheld / Backpack Garden Sprayer</td>
                </tr>
                <tr>
                    <th>Capacity</th>
                    <td>1L – 16L (varies by model)</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>High-quality plastic / Stainless steel</td>
                </tr>
                <tr>
                    <th>Nozzle</th>
                    <td>Adjustable (mist, spray, jet)</td>
                </tr>
                <tr>
                    <th>Pump System</th>
                    <td>Manual pump / Pressure pump</td>
                </tr>
                <tr>
                    <th>Use</th>
                    <td>Watering plants, applying fertilizers, pesticides, herbicides</td>
                </tr>
                <tr>
                    <th>Care</th>
                    <td>Rinse after each use, avoid storing chemicals inside</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 Garden Sprayer (with nozzle & pump)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 20,
        image: 'product-image/gerbera.png',
        name: 'Gerbera Seed',
        price: '$2.19',
        category: 'seed', 
        readyToShip: true,
        rating: 4.6,
        description: `
            <p>
                The <strong>Gerbera Seed</strong> produces one of the most popular ornamental flowers, 
                known for its large, vibrant blooms and long vase life. Gerbera daisies come in a wide 
                range of colors such as red, yellow, pink, orange, and white, making them a favorite 
                for gardens, floral arrangements, and decorative landscaping.
            </p>
            <p>
                Easy to grow in pots, garden beds, or containers, Gerbera seeds thrive in sunny 
                conditions with well-drained soil. With proper care, these cheerful flowers bloom 
                throughout the growing season, adding bright, eye-catching beauty to any space.
            </p>
            <ul>
                <li><strong>Vibrant colors:</strong> Produces flowers in red, yellow, pink, orange, and white.</li>
                <li><strong>Ornamental use:</strong> Ideal for gardens, pots, and floral arrangements.</li>
                <li><strong>Easy care:</strong> Thrives in sunlight and well-drained soil.</li>
                <li><strong>Long-lasting:</strong> Known for extended vase life as cut flowers.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Gerbera Flower Seed</td>
                </tr>
                <tr>
                    <th>Variety</th>
                    <td>Mixed colors (Red, Yellow, Pink, Orange, White)</td>
                </tr>
                <tr>
                    <th>Plant Height</th>
                    <td>25 – 45 cm</td>
                </tr>
                <tr>
                    <th>Growing Season</th>
                    <td>Spring to Autumn</td>
                </tr>
                <tr>
                    <th>Light Requirement</th>
                    <td>Full sun to partial shade</td>
                </tr>
                <tr>
                    <th>Soil</th>
                    <td>Well-drained, fertile soil</td>
                </tr>
                <tr>
                    <th>Germination Time</th>
                    <td>10 – 14 days</td>
                </tr>
                <tr>
                    <th>Blooming</th>
                    <td>60 – 80 days after sowing</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 packet of Gerbera Seeds</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 21,
        image: 'product-image/handhoe.png',
        name: 'Hand Hoe',
        price: '$14.69',
        prevPrice: '$17.55',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 4.4,
        description: `
            <p>
                The <strong>Hand Hoe</strong> is an essential gardening tool designed for loosening soil, 
                removing weeds, and cultivating around plants with ease. Its compact and sturdy design 
                makes it perfect for both small garden beds and container gardening.
            </p>
            <p>
                Made with a strong metal blade and a comfortable handle, the hand hoe provides excellent 
                control for precision tasks. It is lightweight, easy to use, and highly durable, making 
                it a must-have for any gardener.
            </p>
            <ul>
                <li><strong>Multi-purpose tool:</strong> Ideal for digging, weeding, and soil aeration.</li>
                <li><strong>Durable design:</strong> Rust-resistant steel blade ensures long-term use.</li>
                <li><strong>Ergonomic handle:</strong> Provides comfort and reduces hand fatigue.</li>
                <li><strong>Compact size:</strong> Perfect for raised beds, pots, and small spaces.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Hand Hoe (Gardening Tool)</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Steel blade with wooden/plastic handle</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>25 – 35 cm</td>
                </tr>
                <tr>
                    <th>Blade Width</th>
                    <td>6 – 10 cm</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>300 – 500 g</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Weeding, digging, soil cultivation</td>
                </tr>
                <tr>
                    <th>Handle Type</th>
                    <td>Ergonomic, non-slip grip</td>
                </tr>
                <tr>
                    <th>Durability</th>
                    <td>Rust-resistant, long-lasting</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 Hand Hoe</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 22,
        image: 'product-image/handdrake.png',
        name: 'Hand Drake',
        price: '$9.69',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 3.6,
        description: `
            <p>
                The <strong>Hand Rake</strong> is a versatile gardening tool designed for loosening soil, 
                removing debris, and aerating the top layer of garden beds or pots. With its lightweight 
                and compact design, it is especially useful for small-scale gardening, raised beds, and 
                container plants.
            </p>
            <p>
                Crafted with durable metal prongs and an ergonomic handle, this tool provides excellent 
                control while minimizing hand strain. Whether you are cleaning up leaves, preparing soil, 
                or maintaining flower beds, the hand rake is a must-have for everyday gardening.
            </p>
            <ul>
                <li><strong>Multi-use tool:</strong> Perfect for loosening soil, removing weeds, and collecting debris.</li>
                <li><strong>Durable prongs:</strong> Strong steel tines resist bending and ensure long life.</li>
                <li><strong>Comfort grip:</strong> Ergonomic handle reduces fatigue during extended use.</li>
                <li><strong>Compact size:</strong> Great for pots, raised beds, and small garden spaces.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Hand Rake (Mini Garden Tool)</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Steel prongs with wooden/plastic handle</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>25 – 35 cm</td>
                </tr>
                <tr>
                    <th>Prong Width</th>
                    <td>8 – 12 cm</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>250 – 400 g</td>
                </tr>
                <tr>
                    <th>Prongs</th>
                    <td>3 – 5 tines</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Soil loosening, aeration, debris collection</td>
                </tr>
                <tr>
                    <th>Handle Type</th>
                    <td>Ergonomic, non-slip grip</td>
                </tr>
                <tr>
                    <th>Durability</th>
                    <td>Rust-resistant, heavy-duty steel</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 Hand Rake</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 23,
        image: 'product-image/handtrowel.png',
        name: 'Hand Trowel',
        price: '$8.79',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 4.7,
        description: `
            <p>
                The <strong>Hand Trowel</strong> is an essential gardening tool designed for digging, 
                transplanting, and mixing soil in small areas such as pots, raised beds, and garden beds. 
                Its sturdy blade and ergonomic handle make it ideal for both beginners and experienced gardeners. 
            </p>
            <p>
                Made from durable steel or stainless steel with a comfortable grip, the hand trowel ensures 
                long-lasting performance and ease of use. Whether you are planting seedlings, transferring soil, 
                or dividing plants, this versatile tool makes gardening tasks effortless.
            </p>
            <ul>
                <li><strong>Multi-purpose:</strong> Perfect for digging, planting, transplanting, and soil mixing.</li>
                <li><strong>Durable blade:</strong> Rust-resistant steel blade for long-term use.</li>
                <li><strong>Ergonomic design:</strong> Comfortable handle for reduced hand fatigue.</li>
                <li><strong>Compact and lightweight:</strong> Easy to carry and use in tight spaces.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Hand Trowel (Mini Garden Shovel)</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Stainless steel / Carbon steel with wooden or plastic handle</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>25 – 30 cm</td>
                </tr>
                <tr>
                    <th>Blade Width</th>
                    <td>6 – 8 cm</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>200 – 400 g</td>
                </tr>
                <tr>
                    <th>Handle Type</th>
                    <td>Ergonomic, non-slip grip</td>
                </tr>
                <tr>
                    <th>Durability</th>
                    <td>Rust-resistant, heavy-duty blade</td>
                </tr>
                <tr>
                    <th>Best For</th>
                    <td>Transplanting, soil loosening, potting</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 Hand Trowel</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 24,
        image: 'product-image/hedgeshears.png',
        name: 'Hedge Shears',
        price: '$8.99',
        prevPrice: '$10.45',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 4.7,
        description: `
            <p>
                The <strong>Hedge Shears</strong> are designed for shaping and trimming hedges, shrubs, 
                and bushes with precision. With long, sharp blades and sturdy handles, they allow gardeners 
                to make clean cuts and maintain neat, attractive landscapes.  
            </p>
            <p>
                Featuring ergonomic grips and a balanced design, these shears reduce hand fatigue even 
                during extended use. The durable construction ensures long-lasting performance in both 
                residential and professional gardening.  
            </p>
            <ul>
                <li><strong>Sharp blades:</strong> Delivers clean, precise cuts for shrubs and hedges.</li>
                <li><strong>Comfortable handles:</strong> Ergonomic grips minimize strain on hands.</li>
                <li><strong>Durable build:</strong> Made from high-quality steel for long-term use.</li>
                <li><strong>Versatile use:</strong> Suitable for shaping, trimming, and maintaining hedges and bushes.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>CitySpout</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Hedge Shears</td>
                </tr>
                <tr>
                    <th>Blade Material</th>
                    <td>High-carbon steel / Stainless steel</td>
                </tr>
                <tr>
                    <th>Blade Length</th>
                    <td>20 – 25 cm</td>
                </tr>
                <tr>
                    <th>Total Length</th>
                    <td>50 – 65 cm</td>
                </tr>
                <tr>
                    <th>Handle Material</th>
                    <td>Wood / Fiberglass / Rubber grip</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>700 g – 1.2 kg</td>
                </tr>
                <tr>
                    <th>Cutting Capacity</th>
                    <td>Up to 1 cm branch thickness</td>
                </tr>
                <tr>
                    <th>Best For</th>
                    <td>Shaping hedges, trimming bushes, landscape maintenance</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 Hedge Shears</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 25,
        image: 'product-image/lettuce.png',
        name: 'Lettuce Seed',
        price: '$2.99',
        category: 'seed', 
        readyToShip: true,
        rating: 4.4,
        description: `
            <p>
                <strong>Lettuce Seed</strong> is perfect for home gardeners who want to grow their own fresh, 
                crisp, and healthy greens. Lettuce is one of the easiest vegetables to cultivate, 
                making it ideal for beginners and experienced growers alike.  
            </p>
            <p>
                With fast growth and a wide range of varieties, lettuce can be harvested in as little as 
                30 days. It is rich in vitamins A, C, and K, as well as fiber, making it a staple in salads, 
                sandwiches, and healthy meals. Lettuce grows well in containers, garden beds, or even 
                small balcony planters.  
            </p>
            <ul>
                <li><strong>Quick harvest:</strong> Ready to pick within 30–60 days.</li>
                <li><strong>Nutritious:</strong> High in vitamins and fiber for healthy diets.</li>
                <li><strong>Easy to grow:</strong> Suitable for both soil and containers.</li>
                <li><strong>Cool-season crop:</strong> Thrives in mild weather.</li>
                <li><strong>Variety options:</strong> Romaine, Butterhead, Iceberg, and Leaf lettuce.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Type</th>
                    <td>Lettuce Seed (Hạt giống xà lách)</td>
                </tr>
                <tr>
                    <th>Variety</th>
                    <td>Romaine, Iceberg, Butterhead, Leaf</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td>Lactuca sativa</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>80 – 90%</td>
                </tr>
                <tr>
                    <th>Days to Germination</th>
                    <td>7 – 14 days</td>
                </tr>
                <tr>
                    <th>Days to Harvest</th>
                    <td>30 – 60 days</td>
                </tr>
                <tr>
                    <th>Optimal Temperature</th>
                    <td>15 – 22°C</td>
                </tr>
                <tr>
                    <th>Planting Depth</th>
                    <td>0.5 – 1 cm</td>
                </tr>
                <tr>
                    <th>Spacing</th>
                    <td>20 – 30 cm between plants</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring and Fall (cool season crop)</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack Lettuce Seeds (~200–500 seeds depending on variety)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 26,
        image: 'product-image/mango.png',
        name: 'Mango Seed',
        price: '$3.59',
        category: 'seed', 
        sold: true,
        readyToShip: true,
        rating: 4.2,
        description: `
            <p>
                <strong>Mango Seed</strong> allows you to grow one of the most popular tropical fruits in the world. 
                Mango trees are known for their sweet, juicy fruits, evergreen foliage, and long lifespan, 
                making them a valuable addition to any garden or orchard.  
            </p>
            <p>
                Mangoes are rich in vitamins A and C, fiber, and antioxidants, making them both delicious 
                and highly nutritious. While mango trees require warm climates, they can also be grown 
                in containers when young, then transplanted outdoors in tropical or subtropical regions.  
            </p>
            <ul>
                <li><strong>Delicious fruit:</strong> Sweet, aromatic, and juicy mangoes.</li>
                <li><strong>Long-living tree:</strong> Can live and fruit for decades.</li>
                <li><strong>Nutritious:</strong> High in vitamin A, C, and antioxidants.</li>
                <li><strong>Shade provider:</strong> Large tree with dense canopy.</li>
                <li><strong>Symbolic:</strong> Mango is a cultural and spiritual fruit in many countries.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Type</th>
                    <td>Mango Seed (Hạt giống xoài)</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td>Mangifera indica</td>
                </tr>
                <tr>
                    <th>Fruit Type</th>
                    <td>Tropical stone fruit (drupe)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>70 – 85%</td>
                </tr>
                <tr>
                    <th>Days to Germination</th>
                    <td>7 – 21 days</td>
                </tr>
                <tr>
                    <th>Days to Harvest</th>
                    <td>3 – 6 years (depending on care and variety)</td>
                </tr>
                <tr>
                    <th>Optimal Temperature</th>
                    <td>24 – 32°C (tropical/subtropical climate)</td>
                </tr>
                <tr>
                    <th>Planting Depth</th>
                    <td>3 – 5 cm</td>
                </tr>
                <tr>
                    <th>Spacing</th>
                    <td>8 – 10 m between trees</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring and early Summer</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 fresh Mango Seed (can be polyembryonic or monoembryonic)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 27,
        image: 'product-image/mosquitonflytrap.png',
        name: 'Mosquito and Fly Trap',
        price: '$29.99',
        category: 'pest-control', 
        readyToShip: false,
        rating: 4.8,
        description: `
            <p>
                <strong>Mosquito and Fly Trap</strong> is an effective, eco-friendly solution for reducing 
                mosquito and fly populations around your home and garden. Designed to attract insects 
                using light, scent, or bait, the trap captures them without harmful chemicals, making it 
                safe for families, pets, and the environment.  
            </p>
            <p>
                Ideal for both indoor and outdoor use, this trap helps create a more comfortable, 
                hygienic, and pest-free environment, especially in warm and humid climates.  
            </p>
            <ul>
                <li><strong>Chemical-free:</strong> Safe for kids, pets, and plants.</li>
                <li><strong>Effective:</strong> Captures mosquitoes, flies, and other small flying insects.</li>
                <li><strong>Reusable:</strong> Easy to clean and refill.</li>
                <li><strong>Multi-purpose:</strong> Suitable for kitchens, gardens, patios, and farms.</li>
                <li><strong>Eco-friendly:</strong> Reduces pesticide use and supports green living.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Type</th>
                    <td>Mosquito and Fly Trap (Bẫy muỗi & ruồi)</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Durable plastic / ABS / stainless steel (depending on model)</td>
                </tr>
                <tr>
                    <th>Power Source</th>
                    <td>Electric (USB/plug-in) or Non-electric (bait-based)</td>
                </tr>
                <tr>
                    <th>Coverage Area</th>
                    <td>20 – 50 m² (indoor) / up to 100 m² (outdoor models)</td>
                </tr>
                <tr>
                    <th>Method</th>
                    <td>Light attraction, fan suction, sticky pad, or bait lure</td>
                </tr>
                <tr>
                    <th>Safety</th>
                    <td>Non-toxic, pet-safe, no smoke or odor</td>
                </tr>
                <tr>
                    <th>Reusable</th>
                    <td>Yes (clean and replace trap container)</td>
                </tr>
                <tr>
                    <th>Best Use</th>
                    <td>Homes, gardens, patios, farms, outdoor events</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 Mosquito & Fly Trap + User Manual</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 28,
        image: 'product-image/moss-rosepurslane.png',
        name: 'Moss-rose Purslane Seed',
        price: '$5.39',
        category: 'seed', 
        readyToShip: true,
        rating: 4.1,
        description: `
            <p>
                <strong>Moss-Rose Purslane Seed</strong> brings you one of the most popular and vibrant 
                flowering plants, also known as <em>Portulaca grandiflora</em> or "hoa mười giờ Mỹ". 
                Known for its brilliant, rose-like blooms and hardy growth, Moss Rose thrives in sunny, 
                dry conditions with minimal care.  
            </p>
            <p>
                This ornamental plant is a favorite for gardens, balconies, and pots due to its 
                fast-growing nature, drought tolerance, and wide range of flower colors.  
            </p>
            <ul>
                <li><strong>Bright & colorful:</strong> Produces vibrant blooms in red, pink, yellow, white, and orange.</li>
                <li><strong>Low-maintenance:</strong> Thrives with little water and care.</li>
                <li><strong>Ground cover:</strong> Spreads quickly, ideal for borders and flower beds.</li>
                <li><strong>Drought-tolerant:</strong> Perfect for hot, dry climates.</li>
                <li><strong>Long blooming:</strong> Flowers open daily, especially in sunlight.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Seed Type</th>
                    <td>Moss-Rose Purslane (Portulaca grandiflora)</td>
                </tr>
                <tr>
                    <th>Plant Type</th>
                    <td>Annual flowering plant</td>
                </tr>
                <tr>
                    <th>Flower Colors</th>
                    <td>Red, pink, yellow, white, orange, mixed</td>
                </tr>
                <tr>
                    <th>Height</th>
                    <td>10 – 20 cm</td>
                </tr>
                <tr>
                    <th>Growing Season</th>
                    <td>Spring to early summer</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6 – 8 hours daily)</td>
                </tr>
                <tr>
                    <th>Soil</th>
                    <td>Well-drained, sandy or loamy soil</td>
                </tr>
                <tr>
                    <th>Watering</th>
                    <td>Low to moderate (drought-tolerant)</td>
                </tr>
                <tr>
                    <th>Blooming Time</th>
                    <td>Late spring to autumn (blooms daily in sun)</td>
                </tr>
                <tr>
                    <th>Best Use</th>
                    <td>Garden beds, hanging baskets, borders, pots</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 packet of Moss-Rose Purslane Seeds</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 29,
        image: 'product-image/npkfertilizer.png',
        name: 'NPK Fertilizer',
        price: '$18.99',
        category: 'soil-fertilizer', 
        readyToShip: true,
        rating: 4.5,
        description: `
            <p>
                <strong>NPK Fertilizer</strong> is a balanced and essential plant nutrient solution 
                containing <em>Nitrogen (N)</em>, <em>Phosphorus (P)</em>, and <em>Potassium (K)</em>.  
                These three primary nutrients play a vital role in plant growth, development, and productivity.  
            </p>
            <p>
                Ideal for vegetables, fruits, flowers, and ornamental plants, NPK fertilizer ensures 
                stronger root systems, greener leaves, more vibrant flowers, and higher crop yields.  
            </p>
            <ul>
                <li><strong>Nitrogen (N):</strong> Promotes leafy growth and healthy green foliage.</li>
                <li><strong>Phosphorus (P):</strong> Supports strong root development and flowering.</li>
                <li><strong>Potassium (K):</strong> Enhances fruit formation, disease resistance, and overall plant health.</li>
                <li><strong>Balanced nutrition:</strong> Provides complete care for plants at different growth stages.</li>
                <li><strong>Versatile:</strong> Suitable for soil application, foliar spray, and hydroponics (depending on type).</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>NPK Fertilizer (Granular / Water-soluble)</td>
                </tr>
                <tr>
                    <th>Formula Options</th>
                    <td>16-16-8, 20-20-20, 15-15-15, or specialized ratios</td>
                </tr>
                <tr>
                    <th>Key Nutrients</th>
                    <td>Nitrogen (N), Phosphorus (P), Potassium (K)</td>
                </tr>
                <tr>
                    <th>Application Method</th>
                    <td>Soil application, foliar spray, fertigation</td>
                </tr>
                <tr>
                    <th>Suitable For</th>
                    <td>Vegetables, fruits, flowers, ornamental plants, lawns</td>
                </tr>
                <tr>
                    <th>Benefits</th>
                    <td>Boosts growth, flowering, fruiting, and plant resilience</td>
                </tr>
                <tr>
                    <th>Storage</th>
                    <td>Keep in a cool, dry place away from moisture</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 bag of NPK Fertilizer (weight varies by selection)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 30,
        image: 'product-image/organicinsecticide.png',
        name: 'Organic Insecticide',
        price: '$13.29',
        category: 'pest-control', 
        readyToShip: true,
        rating: 3.8,
        description: `
            <p>
                <strong>Organic Insecticide</strong> is a safe, eco-friendly solution designed to 
                control harmful garden pests without harming the environment, pets, or beneficial insects.  
                Made from natural plant extracts and essential oils, this insecticide is suitable for 
                organic gardening and sustainable farming.  
            </p>
            <p>
                It effectively protects vegetables, fruits, herbs, and flowers from common pests like 
                aphids, whiteflies, mealybugs, caterpillars, and spider mites while maintaining soil health 
                and ecosystem balance.  
            </p>
            <ul>
                <li><strong>Eco-safe:</strong> Free from synthetic chemicals and safe for organic farming.</li>
                <li><strong>Multi-purpose:</strong> Controls a wide range of chewing and sucking insects.</li>
                <li><strong>Non-toxic:</strong> Safe for humans, pets, and pollinators like bees.</li>
                <li><strong>Easy application:</strong> Can be used as a foliar spray or soil drench.</li>
                <li><strong>Residue-free:</strong> Leaves no harmful chemical traces on edible plants.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Organic Insecticide (liquid concentrate / ready-to-use spray)</td>
                </tr>
                <tr>
                    <th>Main Ingredients</th>
                    <td>Neem oil, garlic extract, chili extract, soap base, essential oils</td>
                </tr>
                <tr>
                    <th>Target Pests</th>
                    <td>Aphids, mealybugs, whiteflies, caterpillars, spider mites, leaf miners</td>
                </tr>
                <tr>
                    <th>Application Method</th>
                    <td>Foliar spray or soil application (dilute with water as directed)</td>
                </tr>
                <tr>
                    <th>Suitable For</th>
                    <td>Vegetables, fruits, herbs, flowers, and ornamental plants</td>
                </tr>
                <tr>
                    <th>Benefits</th>
                    <td>Protects plants naturally, eco-friendly, promotes healthier growth</td>
                </tr>
                <tr>
                    <th>Safety</th>
                    <td>Non-toxic to humans, animals, and pollinators when used as directed</td>
                </tr>
                <tr>
                    <th>Storage</th>
                    <td>Keep in a cool, dry place away from direct sunlight</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 bottle of Organic Insecticide (volume varies by selection)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 31,
        image: 'product-image/organicvegetablesoil.png',
        name: 'Organic Vegetable Soil',
        price: '$17,59',
        category: 'soil-fertilizer', 
        readyToShip: true,
        rating: 3.8,
        description: `
            <p>
                <strong>Organic Vegetable Soil</strong> is a nutrient-rich, eco-friendly soil mix specially 
                formulated for growing healthy and chemical-free vegetables.  
                It is made from natural ingredients such as compost, coco peat, worm castings, and 
                organic matter to ensure optimal soil aeration, drainage, and fertility.  
            </p>
            <p>
                This soil mix provides essential nutrients and beneficial microbes, helping plants develop 
                strong roots, vigorous growth, and high yields while maintaining sustainability and 
                environmental balance.  
            </p>
            <ul>
                <li><strong>100% Organic:</strong> Free from synthetic fertilizers and harmful chemicals.</li>
                <li><strong>Nutrient-rich:</strong> Contains essential minerals and organic matter.</li>
                <li><strong>Improves aeration:</strong> Keeps soil loose and breathable for root health.</li>
                <li><strong>Water retention:</strong> Retains moisture while preventing waterlogging.</li>
                <li><strong>Eco-friendly:</strong> Safe for organic gardening and sustainable farming.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Organic Soil Mix for Vegetables</td>
                </tr>
                <tr>
                    <th>Main Ingredients</th>
                    <td>Compost, coco peat, worm castings, perlite, rice husk ash</td>
                </tr>
                <tr>
                    <th>Suitable For</th>
                    <td>Leafy greens, root vegetables, fruiting plants, herbs</td>
                </tr>
                <tr>
                    <th>Benefits</th>
                    <td>Boosts plant growth, enhances soil fertility, improves yield</td>
                </tr>
                <tr>
                    <th>Soil Properties</th>
                    <td>Loose texture, high aeration, balanced pH (6–7), excellent drainage</td>
                </tr>
                <tr>
                    <th>Application Method</th>
                    <td>Use directly in pots, containers, or raised beds without mixing</td>
                </tr>
                <tr>
                    <th>Safety</th>
                    <td>100% natural, safe for organic farming and home gardening</td>
                </tr>
                <tr>
                    <th>Storage</th>
                    <td>Keep sealed in a cool, dry place to prevent contamination</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 bag of Organic Vegetable Soil (size varies by selection)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 32,
        image: 'product-image/peppermint.png',
        name: 'Peppermint Seed',
        price: '$0.79',
        category: 'seed', 
        readyToShip: true,
        rating: 4.7,
        description: `
            <p>
                <strong>Peppermint Seed</strong> is a popular culinary and medicinal herb known 
                for its refreshing aroma, cooling flavor, and multiple health benefits.  
                It is widely used in teas, beverages, desserts, and herbal remedies.  
            </p>
            <p>
                Easy to grow both indoors and outdoors, peppermint thrives in pots, 
                containers, or garden beds. With the right care, it provides a continuous 
                supply of fresh leaves that can be harvested year-round.  
            </p>
            <ul>
                <li><strong>Fragrant & Flavorful:</strong> Refreshing aroma and cooling taste.</li>
                <li><strong>Easy to Grow:</strong> Suitable for pots, containers, and gardens.</li>
                <li><strong>Fast Germination:</strong> Seeds sprout quickly with proper care.</li>
                <li><strong>Medicinal Uses:</strong> Helps digestion, relieves headaches, 
                and soothes stress.</li>
                <li><strong>Multi-purpose:</strong> Perfect for cooking, herbal tea, and DIY remedies.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Peppermint Herb Seed</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td>Mentha × piperita</td>
                </tr>
                <tr>
                    <th>Growth Habit</th>
                    <td>Perennial herb, fast-growing, spreading</td>
                </tr>
                <tr>
                    <th>Light Requirements</th>
                    <td>Partial shade to full sun</td>
                </tr>
                <tr>
                    <th>Soil Type</th>
                    <td>Moist, well-drained, rich in organic matter</td>
                </tr>
                <tr>
                    <th>Watering</th>
                    <td>Keep soil consistently moist, avoid waterlogging</td>
                </tr>
                <tr>
                    <th>Germination Time</th>
                    <td>10–15 days under optimal conditions</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>Leaves can be harvested after 2–3 months of growth</td>
                </tr>
                <tr>
                    <th>Uses</th>
                    <td>Tea, beverages, desserts, garnishes, herbal medicine</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack of Peppermint Seeds (quantity varies by selection)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 33,
        image: 'product-image/perilla.png',
        name: 'Perilla Seed',
        price: '$2.19',
        category: 'seed', 
        readyToShip: true,
        rating: 4.3,
        description: `
            <p>
                <strong>Perilla Seed</strong> is a versatile herb seed widely grown in Asian 
                cuisine and herbal medicine. Known for its aromatic leaves with a unique 
                flavor combining basil and mint, perilla is a favorite in soups, salads, 
                wraps, and pickled dishes.
            </p>
            <p>
                Perilla is also valued for its health benefits — rich in omega-3 fatty acids, 
                vitamins, and antioxidants that support digestion, immunity, and overall wellness.  
                Easy to cultivate, perilla thrives in pots, containers, or garden beds.  
            </p>
            <ul>
                <li><strong>Unique Aroma:</strong> Distinctive flavor with minty-basil notes.</li>
                <li><strong>Fast-Growing:</strong> Quick germination and vigorous growth.</li>
                <li><strong>Nutrient-Rich:</strong> Packed with omega-3, iron, and vitamins.</li>
                <li><strong>Easy to Grow:</strong> Suitable for both beginners and experienced gardeners.</li>
                <li><strong>Culinary Uses:</strong> Popular in Vietnamese, Korean, and Japanese dishes.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Perilla Herb Seed</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td>Perilla frutescens</td>
                </tr>
                <tr>
                    <th>Growth Habit</th>
                    <td>Annual herb, upright bushy plant</td>
                </tr>
                <tr>
                    <th>Light Requirements</th>
                    <td>Full sun to partial shade</td>
                </tr>
                <tr>
                    <th>Soil Type</th>
                    <td>Well-drained, fertile, slightly moist soil</td>
                </tr>
                <tr>
                    <th>Watering</th>
                    <td>Moderate watering, keep soil evenly moist</td>
                </tr>
                <tr>
                    <th>Germination Time</th>
                    <td>7–14 days</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>Leaves can be harvested 30–40 days after sowing</td>
                </tr>
                <tr>
                    <th>Uses</th>
                    <td>Cooking, garnishing, pickling, herbal remedies</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack of Perilla Seeds (quantity varies by selection)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 34,
        image: 'product-image/plantprotectiontent.png',
        name: 'Plant Protection Tent',
        price: '$25.49',
        category: 'pest-control', 
        readyToShip: true,
        rating: 4.3,
        description: `
            <p>
                <strong>Plant Protection Tent</strong> is a practical solution to shield your 
                plants from pests, harsh weather, and excessive sunlight. Designed with a 
                lightweight yet durable frame, the tent creates a safe micro-environment 
                that encourages healthy plant growth while reducing the need for chemical 
                pesticides.
            </p>
            <p>
                Ideal for vegetable gardens, herbs, flowers, or young seedlings, this tent 
                helps ensure consistent growth by protecting against insects, birds, and 
                strong winds. Its breathable mesh or transparent cover allows for air 
                circulation and sunlight penetration, keeping plants healthy and thriving.
            </p>
            <ul>
                <li><strong>Pest Control:</strong> Keeps insects, snails, and birds away.</li>
                <li><strong>Weather Protection:</strong> Shields plants from heavy rain, strong sun, and wind.</li>
                <li><strong>Durable Design:</strong> Lightweight frame with high-quality cover material.</li>
                <li><strong>Easy Setup:</strong> Quick to assemble, fold, and move around the garden.</li>
                <li><strong>Eco-Friendly:</strong> Reduces reliance on pesticides and chemicals.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Plant Protection Tent</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Steel/plastic frame with mesh or transparent cover</td>
                </tr>
                <tr>
                    <th>Available Sizes</th>
                    <td>Small (50x50x50cm), Medium (100x100x100cm), Large (150x150x150cm)</td>
                </tr>
                <tr>
                    <th>Light Transmission</th>
                    <td>70–90% (depends on cover type)</td>
                </tr>
                <tr>
                    <th>Air Circulation</th>
                    <td>Breathable design to prevent mold and overheating</td>
                </tr>
                <tr>
                    <th>Assembly</th>
                    <td>Tool-free, easy to fold and store</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Vegetables, herbs, seedlings, flowers, and fruit plants</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 Plant Protection Tent (size chosen by customer)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 35,
        image: 'product-image/plasticpots.png',
        name: 'Plastic Pots',
        price: '$35.89',
        category: 'pot-planter', 
        readyToShip: false,
        rating: 4.3,
        description: `
            <p>
                <strong>Plastic Pots</strong> are lightweight, durable, and versatile containers 
                for growing a wide range of plants including vegetables, herbs, flowers, and 
                small trees. Designed with drainage holes, these pots promote healthy root 
                development by preventing waterlogging and allowing excess water to escape.
            </p>
            <p>
                Their simple yet functional design makes them suitable for balconies, gardens, 
                rooftops, or indoor decoration. Available in multiple sizes and colors, plastic 
                pots are an affordable and long-lasting option for every gardening enthusiast.
            </p>
            <ul>
                <li><strong>Durable Material:</strong> Made from high-quality, weather-resistant plastic.</li>
                <li><strong>Lightweight:</strong> Easy to move and rearrange in your garden or home.</li>
                <li><strong>Drainage System:</strong> Built-in holes to maintain optimal soil moisture.</li>
                <li><strong>Variety:</strong> Available in multiple shapes, sizes, and colors.</li>
                <li><strong>Reusable:</strong> Eco-friendly and designed for long-term use.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Plastic Pots for Gardening</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>High-quality PP (polypropylene) plastic</td>
                </tr>
                <tr>
                    <th>Available Sizes</th>
                    <td>Small (10–15 cm), Medium (16–25 cm), Large (26–40 cm), Extra Large (41+ cm)</td>
                </tr>
                <tr>
                    <th>Colors</th>
                    <td>Black, Brown, White, Terracotta, Green (custom options available)</td>
                </tr>
                <tr>
                    <th>Drainage</th>
                    <td>Bottom drainage holes included</td>
                </tr>
                <tr>
                    <th>Suitable Plants</th>
                    <td>Vegetables, herbs, flowers, ornamentals, and small fruit trees</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Indoor & outdoor gardening, balcony, rooftop, or greenhouse</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>Set of Plastic Pots (quantity and size chosen by customer)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 36,
        image: 'product-image/pruningshears.png',
        name: 'Prunning Shears',
        price: '$15.99',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 4.3,
        description: `
            <p>
                <strong>Pruning Shears</strong> are essential gardening tools designed for trimming, 
                cutting, and shaping plants with precision. They allow gardeners to remove dead 
                or overgrown branches, promote healthy growth, and maintain the desired shape 
                of shrubs, flowers, and small trees.
            </p>
            <p>
                Made with sharp, durable blades and ergonomic handles, pruning shears provide 
                comfort and efficiency even during extended use. A built-in safety lock ensures 
                secure storage when not in use.
            </p>
            <ul>
                <li><strong>Sharp Blades:</strong> Made of high-carbon steel or stainless steel for clean cuts.</li>
                <li><strong>Ergonomic Design:</strong> Non-slip handles reduce hand strain.</li>
                <li><strong>Safety Lock:</strong> Keeps blades closed when stored.</li>
                <li><strong>Versatile Use:</strong> Suitable for flowers, vegetables, bonsai, and small fruit trees.</li>
                <li><strong>Durable Build:</strong> Designed for long-term, repeated use.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Pruning Shears / Garden Scissors</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>High-carbon steel blades, reinforced plastic or rubber handles</td>
                </tr>
                <tr>
                    <th>Blade Length</th>
                    <td>5 – 8 cm (depending on model)</td>
                </tr>
                <tr>
                    <th>Total Length</th>
                    <td>18 – 22 cm</td>
                </tr>
                <tr>
                    <th>Handle</th>
                    <td>Ergonomic, non-slip grip</td>
                </tr>
                <tr>
                    <th>Safety Feature</th>
                    <td>Blade locking mechanism</td>
                </tr>
                <tr>
                    <th>Suitable Plants</th>
                    <td>Flowers, vegetables, bonsai, shrubs, and small branches up to 2 cm thick</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 x Pruning Shears</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 37,
        image: 'product-image/puddle-prooftote.png',
        name: 'Puddle-proof Tote',
        price: '$23.99',
        prevPrice: '$25.69',
        category: 'gardening-tool', 
        readyToShip: false,
        rating: 4.2,
        description: `
            <p>
                The <strong>Puddle-Proof Tote</strong> is designed to keep your essentials dry and protected 
                in any weather. Made with water-resistant materials and a reinforced base, this tote ensures 
                your items stay safe from rain, puddles, or accidental spills.  
            </p>
            <p>
                With its stylish design and spacious interior, it is perfect for everyday use, whether 
                you're commuting, shopping, or heading to the garden. The comfortable straps make it easy 
                to carry, while the durable build guarantees long-lasting use.  
            </p>
            <ul>
                <li><strong>Waterproof protection:</strong> Keeps contents dry in rain or splashes.</li>
                <li><strong>Spacious interior:</strong> Large enough to carry daily essentials or tools.</li>
                <li><strong>Reinforced base:</strong> Prevents sagging and protects from puddles.</li>
                <li><strong>Comfortable straps:</strong> Easy to carry even when fully loaded.</li>
                <li><strong>Stylish & versatile:</strong> Suitable for shopping, gardening, or commuting.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>YourBrand</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Puddle-Proof Tote</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Water-resistant polyester / Nylon / PVC-coated fabric</td>
                </tr>
                <tr>
                    <th>Dimensions</th>
                    <td>40 cm (H) × 35 cm (W) × 15 cm (D)</td>
                </tr>
                <tr>
                    <th>Capacity</th>
                    <td>15 – 20 L</td>
                </tr>
                <tr>
                    <th>Closure</th>
                    <td>Zipper / Snap button</td>
                </tr>
                <tr>
                    <th>Handle Type</th>
                    <td>Dual carry straps (shoulder + hand)</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>400 – 600 g</td>
                </tr>
                <tr>
                    <th>Water Resistance</th>
                    <td>Rain-proof, splash-proof, puddle-proof base</td>
                </tr>
                <tr>
                    <th>Best For</th>
                    <td>Daily commuting, shopping, gardening, travel</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 Puddle-Proof Tote</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 38,
        image: 'product-image/redamaranth.png',
        name: 'Red Amaranth Seed',
        price: '$1.79',
        category: 'seed', 
        readyToShip: true,
        rating: 4.6,
        description: `
            <p>
                <strong>Red Amaranth Seeds</strong> produce vibrant red leafy greens that are highly nutritious 
                and easy to grow. Known for their tender leaves and mild earthy flavor, red amaranth is a 
                popular choice in Asian cuisine and can be enjoyed in stir-fries, soups, or fresh salads.  
            </p>
            <p>
                These fast-growing plants thrive in warm climates and require minimal care, making them 
                an excellent option for home gardeners, whether grown in pots, raised beds, or traditional gardens.  
            </p>
            <ul>
                <li><strong>Rich in nutrients:</strong> Packed with vitamins A, C, calcium, and iron.</li>
                <li><strong>Fast-growing:</strong> Harvestable within 25–35 days.</li>
                <li><strong>Bright red leaves:</strong> Adds color and nutrition to meals.</li>
                <li><strong>Easy to grow:</strong> Suitable for containers or garden beds.</li>
                <li><strong>Heat-tolerant:</strong> Thrives in warm weather conditions.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>YourBrand / Local Seed Supplier</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Red Amaranth Seed (Hạt giống rau dền đỏ)</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td>Amaranthus tricolor</td>
                </tr>
                <tr>
                    <th>Seed Quantity</th>
                    <td>5 – 10 grams (approx. 2,000 – 3,000 seeds)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>80 – 90%</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Well-draining, fertile soil, pH 6.0 – 7.5</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6–8 hours daily)</td>
                </tr>
                <tr>
                    <th>Sowing Depth</th>
                    <td>0.5 – 1 cm</td>
                </tr>
                <tr>
                    <th>Spacing</th>
                    <td>10 – 15 cm between plants</td>
                </tr>
                <tr>
                    <th>Days to Germination</th>
                    <td>5 – 7 days</td>
                </tr>
                <tr>
                    <th>Days to Harvest</th>
                    <td>25 – 35 days</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring to Summer</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack Red Amaranth Seeds</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 39,
        image: 'product-image/rose.png',
        name: 'Rose Seed',
        price: '$4.29',
        prevPrice: '$5.19',
        category: 'seed', 
        sold: true,
        readyToShip: true,
        rating: 4.0,
        description: `
            <p>
                <strong>Rose Seeds</strong> allow you to grow one of the most beloved and timeless flowers in your 
                own garden. Roses symbolize love, beauty, and elegance, making them a perfect choice for home 
                decoration, gifts, or landscaping.  
            </p>
            <p>
                While roses are traditionally grown from cuttings, growing them from seeds provides a unique 
                gardening experience and offers the possibility of cultivating new varieties with different colors 
                and fragrances. With proper care, patience, and attention, rose plants from seeds can flourish 
                beautifully.  
            </p>
            <ul>
                <li><strong>Symbolic plant:</strong> Represents love, passion, and beauty.</li>
                <li><strong>Variety of colors:</strong> Depending on the seed type, blooms can range from red, pink, 
                yellow, to white.</li>
                <li><strong>Fragrant flowers:</strong> Adds charm to your garden or indoor space.</li>
                <li><strong>Decorative use:</strong> Ideal for gardens, balconies, or as ornamental potted plants.</li>
                <li><strong>Unique experience:</strong> Grow roses from seed for variety and novelty.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>YourBrand / Local Seed Supplier</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Rose Seed (Hạt giống hoa hồng)</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td>Rosa spp.</td>
                </tr>
                <tr>
                    <th>Seed Quantity</th>
                    <td>30 – 50 seeds per pack</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>60 – 70% (with stratification)</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Well-draining, loamy soil rich in organic matter</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6–8 hours daily)</td>
                </tr>
                <tr>
                    <th>Sowing Depth</th>
                    <td>0.5 – 1 cm</td>
                </tr>
                <tr>
                    <th>Spacing</th>
                    <td>30 – 60 cm between plants</td>
                </tr>
                <tr>
                    <th>Days to Germination</th>
                    <td>20 – 40 days (after cold stratification 6–8 weeks)</td>
                </tr>
                <tr>
                    <th>Days to Bloom</th>
                    <td>6 – 12 months</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring or early Autumn</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack Rose Seeds</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 40,
        image: 'product-image/snailnslugrepellment.png',
        name: 'Snail & Slurge Repellment',
        price: '$17.49',
        category: 'pest-control', 
        readyToShip: true,
        rating: 3.3,
        description: `
            <p>
                <strong>Snail & Slug Repellent</strong> is designed to protect your plants from damage caused by 
                snails and slugs. These pests are known for feeding on tender leaves, seedlings, and flowers, often 
                leaving behind holes and slime trails that weaken plant growth.  
            </p>
            <p>
                The repellent creates a protective barrier around your plants, either through natural ingredients 
                or specially formulated compounds that deter snails and slugs without harming the soil, beneficial 
                insects, or pets (depending on the product type).  
            </p>
            <ul>
                <li><strong>Effective protection:</strong> Prevents snails and slugs from reaching your plants.</li>
                <li><strong>Safe options:</strong> Available in both chemical and organic formulations.</li>
                <li><strong>Easy to use:</strong> Can be applied as granules, liquid spray, or powder.</li>
                <li><strong>Long-lasting:</strong> Works even after light rain (for water-resistant types).</li>
                <li><strong>Garden-friendly:</strong> Does not affect plant growth when used as directed.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Brand</th>
                    <td>YourBrand / Local Garden Care</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Snail & Slug Repellent (Thuốc xua ốc sên & sên trần)</td>
                </tr>
                <tr>
                    <th>Form</th>
                    <td>Granules / Liquid Spray / Powder (varies by product)</td>
                </tr>
                <tr>
                    <th>Active Ingredients</th>
                    <td>Iron phosphate / Metaldehyde / Natural essential oils (depending on variant)</td>
                </tr>
                <tr>
                    <th>Coverage Area</th>
                    <td>Up to 10–15 m² per pack</td>
                </tr>
                <tr>
                    <th>Application Method</th>
                    <td>Spread around soil, pots, or spray directly on soil surface</td>
                </tr>
                <tr>
                    <th>Effect Duration</th>
                    <td>2 – 4 weeks (depending on weather and watering)</td>
                </tr>
                <tr>
                    <th>Safe For</th>
                    <td>Plants, soil, and (organic type) pets and beneficial insects</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring – Autumn (snail & slug active periods)</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack Snail & Slug Repellent</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 41,
        image: 'product-image/spinach.png',
        name: 'Spinach Seed',
        price: '$0.89',
        category: 'seed', 
        readyToShip: true,
        rating: 3.9,
        description: `
            <p>
                <strong>Spinach Seed</strong> is the starting point for growing fresh, nutritious spinach 
                in your home garden. Spinach is a fast-growing leafy green packed with vitamins A, C, K, iron, 
                and antioxidants, making it a favorite for salads, smoothies, soups, and stir-fries.  
            </p>
            <p>
                Easy to grow and highly productive, spinach thrives in cool weather and can be harvested 
                multiple times through cut-and-come-again methods. Whether planted in pots, garden beds, 
                or hydroponic systems, spinach seeds offer gardeners a reliable way to enjoy a continuous 
                supply of healthy greens.  
            </p>
            <ul>
                <li><strong>Nutrient-rich:</strong> Loaded with vitamins, minerals, and fiber.</li>
                <li><strong>Quick growth:</strong> Harvest in as little as 30–45 days.</li>
                <li><strong>Versatile planting:</strong> Suitable for pots, beds, or containers.</li>
                <li><strong>Cut-and-come-again:</strong> Provides multiple harvests per planting.</li>
                <li><strong>Cool-season crop:</strong> Grows best in spring and autumn.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Type</th>
                    <td>Spinach Seed (Hạt giống rau chân vịt)</td>
                </tr>
                <tr>
                    <th>Variety</th>
                    <td>Common Spinach / Baby Leaf Spinach</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td>Spinacia oleracea</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>80 – 90%</td>
                </tr>
                <tr>
                    <th>Days to Germination</th>
                    <td>5 – 10 days</td>
                </tr>
                <tr>
                    <th>Days to Harvest</th>
                    <td>30 – 45 days</td>
                </tr>
                <tr>
                    <th>Optimal Temperature</th>
                    <td>15 – 22°C</td>
                </tr>
                <tr>
                    <th>Planting Depth</th>
                    <td>1 – 1.5 cm</td>
                </tr>
                <tr>
                    <th>Spacing</th>
                    <td>15 – 20 cm between plants</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring and Autumn (cool weather)</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack Spinach Seeds (~200–500 seeds, depending on weight)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 42,
        image: 'product-image/starfruit.png',
        name: 'Starfruit Seed',
        price: '$4.89',
        category: 'seed', 
        sold: true,
        readyToShip: true,
        rating: 4.5,
        description: `
            <p>
                <strong>Starfruit Seed</strong> is the key to growing your very own starfruit tree, 
                also known as <em>carambola</em>. This tropical fruit is well-loved for its unique star-shaped slices, 
                refreshing taste, and high nutritional value. Rich in vitamin C, fiber, and antioxidants, 
                starfruit is both delicious and healthy.  
            </p>
            <p>
                The starfruit tree is small to medium-sized, making it suitable for home gardens, 
                orchards, or even large containers. It produces glossy green leaves, delicate flowers, 
                and abundant golden-yellow fruits that are not only tasty but also ornamental.  
            </p>
            <ul>
                <li><strong>Unique appearance:</strong> Star-shaped slices make it a standout fruit.</li>
                <li><strong>Nutritious:</strong> Packed with vitamin C, antioxidants, and fiber.</li>
                <li><strong>Compact growth:</strong> Suitable for small gardens or large pots.</li>
                <li><strong>Tropical beauty:</strong> Provides both fruit and ornamental value.</li>
                <li><strong>Long-lasting tree:</strong> Can bear fruit for many years with proper care.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Type</th>
                    <td>Starfruit Seed (Hạt giống khế)</td>
                </tr>
                <tr>
                    <th>Variety</th>
                    <td>Sweet Starfruit / Sour Starfruit</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td>Averrhoa carambola</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>60 – 80%</td>
                </tr>
                <tr>
                    <th>Days to Germination</th>
                    <td>14 – 21 days</td>
                </tr>
                <tr>
                    <th>Days to Harvest</th>
                    <td>3 – 5 years (tree maturity for fruiting)</td>
                </tr>
                <tr>
                    <th>Optimal Temperature</th>
                    <td>22 – 32°C (tropical/subtropical climate)</td>
                </tr>
                <tr>
                    <th>Planting Depth</th>
                    <td>2 – 3 cm</td>
                </tr>
                <tr>
                    <th>Spacing</th>
                    <td>3 – 5 m between trees</td>
                </tr>
                <tr>
                    <th>Best Season</th>
                    <td>Spring and Summer</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack Starfruit Seeds (~10–20 seeds)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 43,
        image: 'product-image/strawberry.png',
        name: 'Strawberry Seed',
        price: '$1.99',
        category: 'seed', 
        readyToShip: true,
        rating: 4.1,
        description: `
            <p>
                <strong>Strawberry Seeds</strong> allow you to grow your own fresh, sweet, and 
                juicy strawberries right at home. Perfect for gardens, balconies, or pots, 
                these seeds give you the chance to enjoy organic fruit free from chemicals.
            </p>
            <p>
                With proper care, strawberry plants produce bright red berries packed with 
                vitamins, antioxidants, and natural sweetness. They are ideal for fresh 
                eating, smoothies, baking, or making jams.
            </p>
            <ul>
                <li><strong>Easy to Grow:</strong> Suitable for pots, containers, or garden beds.</li>
                <li><strong>Nutritious Fruit:</strong> Rich in vitamin C, fiber, and antioxidants.</li>
                <li><strong>Compact Growth:</strong> Perfect for small spaces or balcony gardening.</li>
                <li><strong>Decorative Plant:</strong> Beautiful green foliage with white flowers and red fruit.</li>
                <li><strong>Multiple Harvests:</strong> Can yield fruits several times a year under the right conditions.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Strawberry Seeds</td>
                </tr>
                <tr>
                    <th>Variety</th>
                    <td>Garden Strawberry (Fragaria × ananassa)</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>75 – 85%</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Well-drained, fertile soil with organic matter</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>6 – 8 hours of full sun daily</td>
                </tr>
                <tr>
                    <th>Sowing Depth</th>
                    <td>0.5 – 1 cm</td>
                </tr>
                <tr>
                    <th>Plant Spacing</th>
                    <td>20 – 30 cm apart</td>
                </tr>
                <tr>
                    <th>Days to Germinate</th>
                    <td>14 – 28 days</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>3 – 4 months after planting</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack of Strawberry Seeds (approx. 50 – 100 seeds)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 44,
        image: 'product-image/sugarbeet.png',
        name: 'Sugarbeet Seed',
        price: '$0.99',
        category: 'seed', 
        readyToShip: true,
        rating: 4.0,
        description: `
            <p>
                <strong>Sugar Beet Seeds</strong> produce nutrient-rich root vegetables widely 
                cultivated for their high natural sugar content. Besides being an industrial 
                source of sugar, sugar beets can also be grown in home gardens for fresh use 
                in salads, soups, or natural sweetening.
            </p>
            <p>
                The plant forms large, white, conical roots with green leafy tops. Easy to grow 
                and adaptable to different climates, sugar beets thrive in well-drained soils and 
                sunny spots, making them a rewarding crop for gardeners and small-scale farmers.
            </p>
            <ul>
                <li><strong>High Sugar Content:</strong> Roots contain up to 16–20% natural sugar.</li>
                <li><strong>Multiple Uses:</strong> Can be eaten fresh, cooked, juiced, or processed.</li>
                <li><strong>Fast Growing:</strong> Matures in about 3–4 months.</li>
                <li><strong>Nutritious:</strong> Good source of dietary fiber, vitamins, and minerals.</li>
                <li><strong>Easy to Cultivate:</strong> Suitable for both garden beds and large pots.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Sugar Beet Seeds</td>
                </tr>
                <tr>
                    <th>Variety</th>
                    <td>Beta vulgaris var. altissima</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>75 – 85%</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Loose, fertile, well-drained soil with organic matter</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6 – 8 hours daily)</td>
                </tr>
                <tr>
                    <th>Sowing Depth</th>
                    <td>1 – 2 cm</td>
                </tr>
                <tr>
                    <th>Plant Spacing</th>
                    <td>20 – 25 cm apart</td>
                </tr>
                <tr>
                    <th>Days to Germinate</th>
                    <td>7 – 14 days</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>90 – 120 days after planting</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack of Sugar Beet Seeds (approx. 100 – 200 seeds)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 45,
        image: 'product-image/sunflower.png',
        name: 'Sunflower Seed',
        price: '$3.19',
        category: 'seed', 
        readyToShip: true,
        rating: 4.1,
        description: `
            <p>
                <strong>Sunflower Seeds</strong> are popular for growing tall, bright, and 
                cheerful sunflowers that symbolize positivity and warmth. These plants are 
                known for their large golden-yellow flower heads, which naturally turn toward 
                the sun throughout the day.
            </p>
            <p>
                Besides their ornamental beauty, sunflower seeds are also valued for producing 
                edible seeds and oil. Easy to grow, they are suitable for gardens, balconies, 
                and even pots, making them a favorite for both beginners and experienced 
                gardeners.
            </p>
            <ul>
                <li><strong>Vibrant Blooms:</strong> Large, bright yellow flowers up to 30 cm wide.</li>
                <li><strong>Multi-purpose:</strong> Seeds can be harvested for snacking or oil pressing.</li>
                <li><strong>Pollinator Friendly:</strong> Attracts bees, butterflies, and birds.</li>
                <li><strong>Easy to Grow:</strong> Low maintenance with high germination rate.</li>
                <li><strong>Fast Growing:</strong> Blooms within 2–3 months.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Sunflower Seeds</td>
                </tr>
                <tr>
                    <th>Variety</th>
                    <td>Helianthus annuus</td>
                </tr>
                <tr>
                    <th>Germination Rate</th>
                    <td>80 – 90%</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Well-drained, moderately fertile soil</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6 – 8 hours daily)</td>
                </tr>
                <tr>
                    <th>Sowing Depth</th>
                    <td>2 – 3 cm</td>
                </tr>
                <tr>
                    <th>Plant Spacing</th>
                    <td>30 – 45 cm apart</td>
                </tr>
                <tr>
                    <th>Days to Germinate</th>
                    <td>7 – 10 days</td>
                </tr>
                <tr>
                    <th>Blooming Time</th>
                    <td>60 – 80 days after sowing</td>
                </tr>
                <tr>
                    <th>Plant Height</th>
                    <td>150 – 300 cm (depending on variety)</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 pack of Sunflower Seeds (approx. 50 – 100 seeds)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 46,
        image: 'product-image/tallrimplanters.png',
        name: 'Tall Rim Planters',
        price: '$39.49',
        category: 'pot-planter', 
        readyToShip: false,
        rating: 4.1,
        description: `
            <p>
                <strong>Tall Rim Planters</strong> are stylish and durable plant containers 
                designed to elevate your indoor or outdoor garden. With their tall structure 
                and elegant rimmed design, these planters are perfect for showcasing decorative 
                plants, flowers, or even small trees. 
            </p>
            <p>
                Made from high-quality plastic, ceramic, or fiber materials, they are lightweight 
                yet sturdy, making them easy to move around while ensuring stability for taller plants. 
                Their sleek design complements modern, minimalistic, and traditional décor styles alike.
            </p>
            <ul>
                <li><strong>Elegant Design:</strong> Tall cylindrical shape with a defined rim.</li>
                <li><strong>Durable Material:</strong> Weather-resistant and long-lasting.</li>
                <li><strong>Versatile Use:</strong> Suitable for flowers, herbs, and small trees.</li>
                <li><strong>Indoor & Outdoor:</strong> Perfect for patios, balconies, or living rooms.</li>
                <li><strong>Drainage Friendly:</strong> Built-in drainage hole option to prevent waterlogging.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Tall Rim Planter</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Plastic / Ceramic / Fiber (depending on model)</td>
                </tr>
                <tr>
                    <th>Shape</th>
                    <td>Tall cylindrical with rim</td>
                </tr>
                <tr>
                    <th>Available Sizes</th>
                    <td>Height: 30 cm – 80 cm; Diameter: 20 cm – 50 cm</td>
                </tr>
                <tr>
                    <th>Colors</th>
                    <td>White, Black, Terracotta, Grey</td>
                </tr>
                <tr>
                    <th>Drainage Hole</th>
                    <td>Yes (optional)</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>Lightweight (varies by size & material)</td>
                </tr>
                <tr>
                    <th>Ideal For</th>
                    <td>Indoor plants, balconies, patios, decorative landscaping</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 x Tall Rim Planter</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 47,
        image: 'product-image/terracottapots.png',
        name: 'Terracotta Pots',
        price: '$39.49',
        category: 'pot-planter', 
        readyToShip: true,
        rating: 4.7,
        description: `
            <p>
                <strong>Terracotta Pots</strong> are classic plant containers made from natural 
                clay, offering excellent breathability and drainage for healthy plant growth. 
                Their warm earthy tones bring a rustic and natural charm to any garden, patio, 
                or indoor space. 
            </p>
            <p>
                These pots are highly porous, allowing air and moisture to circulate through 
                the walls, which helps prevent root rot and promotes strong root development. 
                Perfect for herbs, flowers, succulents, or ornamental plants.
            </p>
            <ul>
                <li><strong>Natural Material:</strong> 100% clay, eco-friendly and biodegradable.</li>
                <li><strong>Good Drainage:</strong> Porous walls allow water evaporation and root aeration.</li>
                <li><strong>Temperature Regulation:</strong> Keeps soil cooler in summer and warmer in winter.</li>
                <li><strong>Rustic Charm:</strong> Warm terracotta color enhances plant beauty.</li>
                <li><strong>Versatile Use:</strong> Ideal for indoor plants, patios, balconies, and gardens.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Terracotta Pot</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Natural Clay (Terracotta)</td>
                </tr>
                <tr>
                    <th>Shape</th>
                    <td>Round / Cylindrical / Bowl</td>
                </tr>
                <tr>
                    <th>Available Sizes</th>
                    <td>Diameter: 8 cm – 40 cm; Height: 8 cm – 35 cm</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>Classic Terracotta (reddish-brown)</td>
                </tr>
                <tr>
                    <th>Drainage Hole</th>
                    <td>Yes (standard)</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>Medium to heavy (depends on size)</td>
                </tr>
                <tr>
                    <th>Ideal For</th>
                    <td>Herbs, succulents, flowers, ornamental plants</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 x Terracotta Pot</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 48,
        image: 'product-image/tomato.png',
        name: 'Tomato Seed',
        price: '$1.29',
        category: 'seed', 
        readyToShip: true,
        rating: 4.3,
        description: `
            <p>
                <strong>Tomato Seeds</strong> are high-quality vegetable seeds that allow you 
                to grow fresh, juicy, and flavorful tomatoes right in your garden, balcony, or farm. 
                Tomatoes are one of the most versatile vegetables, widely used in salads, sauces, 
                soups, and cooking recipes around the world.
            </p>
            <p>
                With proper care, tomato plants produce high yields and thrive in both containers 
                and open soil. They are rich in vitamins A, C, K, potassium, and antioxidants like 
                lycopene, which support a healthy lifestyle.
            </p>
            <ul>
                <li><strong>High Germination Rate:</strong> Ensures quick and healthy sprouting.</li>
                <li><strong>Rich Nutrition:</strong> Source of vitamins and antioxidants.</li>
                <li><strong>Easy to Grow:</strong> Suitable for beginners and home gardeners.</li>
                <li><strong>Versatile Variety:</strong> Can be grown in pots, raised beds, or fields.</li>
                <li><strong>Productive Harvest:</strong> Yields clusters of bright red, juicy fruits.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Vegetable Seed</td>
                </tr>
                <tr>
                    <th>Plant Name</th>
                    <td>Tomato (Solanum lycopersicum)</td>
                </tr>
                <tr>
                    <th>Seed Type</th>
                    <td>Open-pollinated / Hybrid (varies by pack)</td>
                </tr>
                <tr>
                    <th>Growth Habit</th>
                    <td>Determinate / Indeterminate (variety-specific)</td>
                </tr>
                <tr>
                    <th>Days to Germination</th>
                    <td>7 – 14 days</td>
                </tr>
                <tr>
                    <th>Days to Harvest</th>
                    <td>65 – 85 days</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6 – 8 hours daily)</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Well-drained, nutrient-rich soil with pH 6.0 – 6.8</td>
                </tr>
                <tr>
                    <th>Watering</th>
                    <td>Moderate, keep soil consistently moist but not soggy</td>
                </tr>
                <tr>
                    <th>Ideal For</th>
                    <td>Balcony gardens, home gardens, farms</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 x Pack of Tomato Seeds</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 49,
        image: 'product-image/tubtrug.png',
        name: 'Tubtrug',
        price: '$23.49',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 4.3,
        description: `
            <p>
                <strong>Tubtrugs</strong> are flexible, durable, and multi-purpose containers 
                made from high-quality plastic. Known for their versatility, they are widely 
                used in gardening, farming, home storage, and even pet care. 
            </p>
            <p>
                Thanks to their lightweight yet strong design, tubtrugs are perfect for carrying 
                soil, compost, harvested crops, or even water. Their flexibility makes them 
                easy to handle, pour, and clean, making them a must-have for gardeners and 
                homeowners.
            </p>
            <ul>
                <li><strong>Durable Material:</strong> Made from tough, UV-resistant plastic.</li>
                <li><strong>Flexible & Lightweight:</strong> Easy to carry and pour.</li>
                <li><strong>Multi-Use:</strong> Ideal for gardening, farming, laundry, or pet care.</li>
                <li><strong>Easy to Clean:</strong> Washable and reusable.</li>
                <li><strong>Safe for Food:</strong> Can be used for storing or handling produce.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Multi-purpose Garden Container</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Flexible, UV-resistant plastic</td>
                </tr>
                <tr>
                    <th>Shape</th>
                    <td>Round with handles</td>
                </tr>
                <tr>
                    <th>Capacity</th>
                    <td>Varies (14L, 26L, 38L, 42L, 75L, etc.)</td>
                </tr>
                <tr>
                    <th>Handles</th>
                    <td>Two strong integrated side handles</td>
                </tr>
                <tr>
                    <th>Colors Available</th>
                    <td>Black, green, blue, yellow, pink, and more</td>
                </tr>
                <tr>
                    <th>Uses</th>
                    <td>Carrying soil, water, compost, harvests, storage, pet feeding</td>
                </tr>
                <tr>
                    <th>Weather Resistance</th>
                    <td>UV stable, frost-resistant</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 x Tubtrug (capacity chosen)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 50,
        image: 'product-image/wateringcan.png',
        name: 'Watering Can',
        price: '$15.99',
        category: 'gardening-tool', 
        readyToShip: true,
        rating: 4.6,
        description: `
            <p>
                A <strong>Watering Can</strong> is an essential gardening tool designed to 
                provide controlled and gentle watering for plants. It usually comes with a 
                detachable rose (sprinkler head) that allows water to be distributed evenly 
                without damaging delicate seedlings or flowers.
            </p>
            <p>
                Watering cans are available in plastic, metal, or galvanized steel, each with 
                its own benefits. They are ideal for indoor plants, balcony gardens, and 
                outdoor gardens where precise watering is needed.
            </p>
            <ul>
                <li><strong>Gentle Watering:</strong> Even flow protects delicate plants.</li>
                <li><strong>Portable Design:</strong> Easy to carry with top or side handle.</li>
                <li><strong>Detachable Spout:</strong> Option to switch between shower spray and direct flow.</li>
                <li><strong>Durable:</strong> Made from rust-resistant or UV-stable materials.</li>
                <li><strong>Multi-Purpose:</strong> Suitable for both indoor and outdoor use.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Watering Can / Garden Water Dispenser</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Plastic, galvanized steel, or stainless steel</td>
                </tr>
                <tr>
                    <th>Capacity</th>
                    <td>1L – 10L (depending on model)</td>
                </tr>
                <tr>
                    <th>Spout Type</th>
                    <td>Long spout with detachable rose head</td>
                </tr>
                <tr>
                    <th>Handle Design</th>
                    <td>Ergonomic top or side handle for easy pouring</td>
                </tr>
                <tr>
                    <th>Color Options</th>
                    <td>Green, black, silver, cream, decorative colors</td>
                </tr>
                <tr>
                    <th>Uses</th>
                    <td>Watering indoor plants, balcony gardens, outdoor flowers, vegetables</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Rust-proof, lightweight, detachable spout, precision watering</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 x Watering Can (with or without sprinkler head)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 51,
        image: 'product-image/watermelon.png',
        name: 'Watermelon Seed',
        price: '$1.49',
        category: 'seed', 
        readyToShip: true,
        rating: 4.2,
        description: `
            <p>
                <strong>Watermelon Seeds</strong> are high-quality seeds used to grow 
                watermelon plants, known for their sweet, juicy, and refreshing fruits. 
                Depending on the variety, watermelons can be round, oval, or elongated, with 
                red, pink, yellow, or even orange flesh.
            </p>
            <p>
                Watermelon plants thrive in warm climates with plenty of sunlight and well-drained 
                soil. They are typically grown in home gardens, farms, and greenhouses, producing 
                large vines that spread widely across the soil surface.
            </p>
            <ul>
                <li><strong>Varieties:</strong> Seedless, mini, crimson sweet, sugar baby, yellow flesh.</li>
                <li><strong>Growth Habit:</strong> Fast-growing, sprawling vines.</li>
                <li><strong>Climate:</strong> Best suited for hot, sunny regions.</li>
                <li><strong>Fruit Size:</strong> 2kg – 15kg depending on variety.</li>
                <li><strong>Harvest:</strong> 70–90 days after planting.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Watermelon Seeds (Fruit Seed)</td>
                </tr>
                <tr>
                    <th>Plant Type</th>
                    <td>Warm-season annual climbing vine</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Loamy, sandy, well-drained soil, pH 6.0 – 7.5</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun (6–8 hours daily)</td>
                </tr>
                <tr>
                    <th>Watering</th>
                    <td>Regular, especially during flowering and fruit development</td>
                </tr>
                <tr>
                    <th>Germination</th>
                    <td>7–10 days at 22–28°C</td>
                </tr>
                <tr>
                    <th>Spacing</th>
                    <td>90–120 cm apart between plants</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>70–90 days after sowing</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Rich in vitamins A, C, antioxidants, and hydration</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 packet of watermelon seeds (variety-specific)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 52,
        image: 'product-image/waterspinach.png',
        name: 'Water Spinach Seed',
        price: '$0.49',
        category: 'seed', 
        readyToShip: true,
        rating: 4.2,
        description: `
            <p>
                <strong>Water Spinach Seeds</strong> are used to grow water spinach 
                (<em>Ipomoea aquatica</em>), also known as "rau muống." This leafy green 
                vegetable is popular in Asian cuisine for its tender shoots and leaves, 
                often stir-fried, boiled, or used in soups and hotpots.
            </p>
            <p>
                Water spinach is a fast-growing, warm-season vegetable that thrives in 
                moist soils or even shallow water, making it suitable for both garden beds 
                and containers. It is highly nutritious, providing vitamins A, C, iron, 
                and fiber.
            </p>
            <ul>
                <li><strong>Varieties:</strong> Upright (dryland type) and trailing (aquatic type).</li>
                <li><strong>Growth Habit:</strong> Climbing or trailing stems with hollow internodes.</li>
                <li><strong>Climate:</strong> Grows best in tropical and subtropical regions.</li>
                <li><strong>Harvest:</strong> First harvest within 30–40 days after sowing.</li>
                <li><strong>Uses:</strong> Stir-fries, soups, salads, and hotpots.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Water Spinach Seeds (Leafy Vegetable)</td>
                </tr>
                <tr>
                    <th>Plant Type</th>
                    <td>Fast-growing annual leafy green</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Moist, fertile loamy soil, pH 6.0 – 7.5</td>
                </tr>
                <tr>
                    <th>Sunlight</th>
                    <td>Full sun to partial shade</td>
                </tr>
                <tr>
                    <th>Watering</th>
                    <td>Regular watering; prefers consistently moist soil</td>
                </tr>
                <tr>
                    <th>Germination</th>
                    <td>5–7 days at 22–30°C</td>
                </tr>
                <tr>
                    <th>Spacing</th>
                    <td>20–25 cm apart between plants</td>
                </tr>
                <tr>
                    <th>Harvest Time</th>
                    <td>30–40 days after sowing, repeat harvests every 10–15 days</td>
                </tr>
                <tr>
                    <th>Special Features</th>
                    <td>Highly nutritious, fast-growing, suitable for containers and gardens</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>1 packet of water spinach seeds (variety-specific)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 53,
        image: 'product-image/wormcastings.png',
        name: 'Worm Casting',
        price: '$18.49',
        category: 'soil-fertilizer', 
        readyToShip: false,
        rating: 5.0,
        description: `
            <p>
                <strong>Worm Castings</strong>, also known as vermicompost, are the natural 
                byproduct of earthworms digesting organic matter. They are a rich, dark, 
                soil-like material that provides essential nutrients and beneficial microbes 
                to plants.
            </p>
            <p>
                Worm castings improve soil structure, enhance moisture retention, and promote 
                root development. They are completely natural, odorless, and safe for use on 
                all types of plants — from vegetables and herbs to flowers and trees.
            </p>
            <ul>
                <li><strong>Nutrient Rich:</strong> Contains nitrogen, phosphorus, potassium, and trace minerals.</li>
                <li><strong>Soil Enhancer:</strong> Improves aeration, drainage, and water retention.</li>
                <li><strong>Beneficial Microbes:</strong> Boosts soil fertility and plant immunity.</li>
                <li><strong>Organic:</strong> 100% natural, chemical-free, and eco-friendly.</li>
                <li><strong>Application:</strong> Suitable for seed starting, top-dressing, or soil mixing.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Worm Castings (Vermicompost)</td>
                </tr>
                <tr>
                    <th>Form</th>
                    <td>Fine, crumbly organic compost</td>
                </tr>
                <tr>
                    <th>Soil Requirement</th>
                    <td>Can be mixed into all soil types</td>
                </tr>
                <tr>
                    <th>Application</th>
                    <td>Mix with soil (10–20%), use as top-dress, or brew as compost tea</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Vegetables, herbs, flowers, shrubs, trees, and houseplants</td>
                </tr>
                <tr>
                    <th>Benefits</th>
                    <td>Improves soil health, enhances nutrient uptake, increases yield</td>
                </tr>
                <tr>
                    <th>Safety</th>
                    <td>100% natural, non-toxic, child- and pet-safe</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>Bag of worm castings (weight varies by package size)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
    new Products({
        id: 54,
        image: 'product-image/yellowstickytrap.png',
        name: 'Yellow Sticky Trap',
        price: '$4.99',
        category: 'pest-control', 
        readyToShip: true,
        rating: 3.9,
        description: `
            <p>
                <strong>Yellow Sticky Traps</strong> are a safe and effective way to control 
                flying insect pests in your garden, greenhouse, or indoor plants. The bright 
                yellow color attracts pests like whiteflies, aphids, leaf miners, and fungus 
                gnats, while the strong adhesive ensures they stick to the surface.
            </p>
            <p>
                These traps reduce pest populations without the use of harmful chemicals, making 
                them an excellent choice for organic gardening and eco-friendly plant protection. 
                Easy to install and long-lasting, they help keep plants healthy and thriving.
            </p>
            <ul>
                <li><strong>Effective Pest Control:</strong> Attracts and traps a wide range of flying insects.</li>
                <li><strong>Non-Toxic:</strong> Chemical-free and safe for vegetables, herbs, and flowers.</li>
                <li><strong>Durable Adhesive:</strong> Weather-resistant and long-lasting stickiness.</li>
                <li><strong>Easy to Use:</strong> Simply hang or insert near plants.</li>
                <li><strong>Indoor & Outdoor:</strong> Perfect for gardens, balconies, and greenhouses.</li>
            </ul>
        `,
        productDetail: `
            <table>
                <tbody>
                <tr>
                    <th>Product Type</th>
                    <td>Yellow Sticky Trap</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>Plastic/Paper coated with non-drying adhesive</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>Bright Yellow (pest-attracting color)</td>
                </tr>
                <tr>
                    <th>Target Pests</th>
                    <td>Whiteflies, aphids, thrips, leaf miners, fungus gnats, flying pests</td>
                </tr>
                <tr>
                    <th>Application</th>
                    <td>Hang, insert in soil, or place near infested plants</td>
                </tr>
                <tr>
                    <th>Usage</th>
                    <td>Vegetable gardens, houseplants, greenhouses, orchards</td>
                </tr>
                <tr>
                    <th>Safety</th>
                    <td>Non-toxic, eco-friendly, safe for pets and children</td>
                </tr>
                <tr>
                    <th>Package Includes</th>
                    <td>Set of sticky traps (varies by pack size)</td>
                </tr>
                </tbody>
            </table>
        `,
    }),
]

const product = new Products();