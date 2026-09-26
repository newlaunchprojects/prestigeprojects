/**
 * Reusable project data model.
 *
 * IMPORTANT — SAMPLE DATA: every value below is placeholder content used to
 * exercise the UI. Nothing here is verified project fact. Replace every
 * field with approved information before launch (see Pre-Launch Content
 * Checklist). Do not present this data as fact in production.
 */

export type Project = {
    slug: string;
    name: string;
    shortName: string;
    location: string;
    locationlink: string;
    positioning: string;
    startingPrice: string;
    bookingAmount: string;
    shortDescription: string;
    heroImage: string;
    cardImage: string;
    openGraphImage?: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
    logo?: string;
    status?: string;
    propertyType?: string;
    reraNumber?: string;
    facts: { label: string; value: string }[];
    overview: string[];
    highlights: {
        title: string;
        description: string;
        image?: string;
    }[];
    configurations: {
        name: string;
        size?: string;
        priceLabel: string;
    }[];

    /**
     * Amenities now use Lucide React icon names instead of image paths.
     *
     * Example:
     * {
     *     title: "Gymnasium",
     *     icon: "Dumbbell"
     * }
     */
    amenities: {
        category: string;
        items: {
            title: string;
            icon: string;
        }[];
    }[];

    floorPlans: { name: string; image: string }[];
    masterPlan?: { image: string };
    gallery: { src: string; alt: string }[];
    locationAdvantages: {
        name: string;
        description?: string;
    }[];
    whyThisProject: {
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
};

export const projects: Project[] = [
    {
        slug: "prestige-sector-92",
        name: "Prestige Sector 92 Gurgaon",
        shortName: "Sector 92",
        location: "Sector 92, Gurgaon",
        locationlink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.291959166314!2d76.90446007549268!3d28.410445975786647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d150072a99103%3A0xbd47d1165fa20bcf!2sPrestige%20Sector%2092!5e0!3m2!1sen!2sin!4v1790068421035!5m2!1sen!2sin",
        positioning:
            "Refined residences with a lifestyle-led community experience.",
        startingPrice: "On Request*",
        bookingAmount: "20%",
        shortDescription:
            "A low-density residential address built around a private clubhouse, layered landscaping and generously proportioned homes.",
        heroImage: "/heroImage/hero92.avif",
        cardImage: "/heroImage/hero92.avif",
        openGraphImage: "/sector92Ogimage.webp",
        metaTitle:
            "Prestige Sector 92 Gurgaon | Price, Brochure, Floor Plans & Amenities",
        metaDescription:
            "Explore Prestige Sector 92 Gurgaon. Get the latest price list, brochure, floor plans, world-class amenities, specifications, location advantages, and booking details for premium residences.",
        metaKeywords: [
            "Prestige Sector 92 Gurgaon",
            "Prestige Sector 92 Gurgaon brochure",
            "Prestige Sector 92 Gurgaon price",
            "Prestige Sector 92 Gurgaon floor plan",
            "Prestige Sector 92 Gurgaon amenities",
            "Prestige Sector 92 Gurgaon price list",
            "luxury apartments Sector 104 Gurgaon",
            "premium apartments Gurgaon",
            "residential project Sector 104 Gurgaon",
            "Prestige homes Gurgaon",
            "Dwarka Expressway apartments",
            "new launch Gurgaon",
            "luxury flats Gurgaon",
        ],
        status: "Pre-launch",
        propertyType: "Premium Residential Apartments",
        reraNumber: "RERA registration is pending",

        facts: [
            {
                label: "Location",
                value: "Sector 92, Gurgaon",
            },
            {
                label: "Project Type",
                value: "Premium Residential",
            },
            {
                label: "Configurations",
                value: "2, 3 & 4 BHK",
            },
            {
                label: "Apartment Sizes",
                value: "1,100 – 3,346 sq. ft.*",
            },
            {
                label: "Project Status",
                value: "Pre-launch",
            },
            {
                label: "Total Units",
                value: "Pre-launch",
            },
        ],

        overview: [
            "One of the most renowned real estate developers, Prestige Group, has finally landed in Gurgaon with its upcoming luxurious residential project, **Prestige Sector 92**.",
            "This is one of the most anticipated developments that has grabbed the attention of both homebuyers and investors.",
            "Coming along with classy infrastructure and elegant apartments, this residential property is set to transform the area with a luxurious presence.",
            "Furthermore, these residences are crafted with lifestyle amenities, open spaces, and timeless connectivity that embrace the lifestyle of residents.",
            "This article will take you through the essentials of **Prestige Sector 92**, along with its floor plan, pricing, amenities, and more.",
        ],

        highlights: [
            {
                title: "Low-density planning",
                description:
                    "A limited number of units per acre, prioritising open space, light and privacy over density.",
                image: "/highlights/s1.avif",
            },
            {
                title: "Layered landscaping",
                description:
                    "Multiple green pockets and walking paths are woven between towers, reducing the visual scale of the built form.",
                image: "/highlights/s2.avif",
            },
            {
                title: "Generous private balconies",
                description:
                    "Deep private balconies extend the living space outward and frame views across the landscaped grounds.",
                image: "/highlights/s3.avif",
            },
        ],

        configurations: [
            {
                name: "2 BHK",
                size: "1,100 – 1,200 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
            {
                name: "3 BHK",
                size: "1,400 – 2,268 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
            {
                name: "4 BHK",
                size: "2,200 – 3,346 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
        ],

        // ------------------------------------------------------------
        // AMENITIES — LUCIDE ICONS
        // ------------------------------------------------------------

        amenities: [
            {
                category: "Fitness & Wellness",
                items: [
                    {
                        title: "Gymnasium",
                        icon: "Dumbbell",
                    },
                    {
                        title: "Yoga & Meditation",
                        icon: "Yoga & Meditation",
                    },
                    {
                        title: "Swimming Pool",
                        icon: "Swimming Pool",
                    },
                    {
                        title: "Spa",
                        icon: "Spa",
                    },
                    {
                        title: "Indoor Games",
                        icon: "Indoor Games",
                    },
                    {
                        title: "Steam & Sauna",
                        icon: "Steam & Sauna",
                    },
                    {
                        title: "Boxing Ring",
                        icon: "Boxing Ring",
                    },
                    {
                        title: "Clubhouse Reception",
                        icon: "Clubhouse Reception",
                    },
                ],
            },
            {
                category: "Recreation & Sports",
                items: [
                    {
                        title: "Sports Arena",
                        icon: "Sports Arena",
                    },
                    {
                        title: "Tennis Court",
                        icon: "Tennis Court",
                    },
                    {
                        title: "Volleyball Court",
                        icon: "Volleyball Court",
                    },
                    {
                        title: "Cricket Ground",
                        icon: "Cricket Ground",
                    },
                    {
                        title: "Squash Court",
                        icon: "Squash Court",
                    },
                    {
                        title: "Kids Play Area",
                        icon: "Kids Play Area",
                    },
                    {
                        title: "Rooftop Lounge",
                        icon: "Rooftop Lounge",
                    },
                    {
                        title: "Football Ground",
                        icon: "Football Ground",
                    },
                ],
            },
        ],

        floorPlans: [
            {
                name: "3 BHK",
                image: "/floorplan/floor.avif",
            },
            {
                name: "4 BHK",
                image: "/floorplan/floor.avif",
            },
        ],

        masterPlan: {
            image: "/masterplan/ms1.avif",
        },

        gallery: [
            {
                src: "/heroImage/hero92.avif",
                alt: "Prestige Sector 92 Gurgaon — exterior view",
            },
            {
                src: "/highlights/s2.avif",
                alt: "Prestige Sector 92 Gurgaon — landscaped garden",
            },
            {
                src: "/gallery/sector92/bedroom.avif",
                alt: "Prestige Sector 92 Gurgaon — bedroom interior",
            },
            {
                src: "/gallery/sector92/swimmingpool.avif",
                alt: "Prestige Sector 92 Gurgaon — swimming pool",
            },
            {
                src: "/gallery/sector92/fitnesscenter.avif",
                alt: "Prestige Sector 92 Gurgaon — fitness center",
            },
        ],

        locationAdvantages: [
            {
                name: "Dwarka Expressway",
                description:
                    "Located in the high-growth corridor of New Gurgaon, offering effortless connectivity to the newly operational Dwarka Expressway for an easy commute to Delhi.",
            },
            {
                name: "NH-48 & Pataudi Road",
                description:
                    "Positioned within approximately 12 to 15 minutes (around 8 km) from NH-48, ensuring swift road access to IMT Manesar, Cyber City, and major commercial hubs.",
            },
            {
                name: "IGI Airport",
                description:
                    "Accessible within 30 to 45 minutes (approximately 25-32 km) via the high-speed connectivity network of the Dwarka Expressway and NH-48.",
            },
            {
                name: "Schools & Hospitals",
                description:
                    "Surrounded by premium healthcare and education infrastructure, with established institutions like Pranavananda International School, Arcis Hospital, and Genesis Hospital located nearby.",
            },
        ],

        whyThisProject: [
            {
                title: "About Prestige Sector 92 Gurgaon:",
                description:
                    "Sector 92 is a fast-growing area of Gurgaon, and this upcoming residential project in the same area marks its way to the growth of real estate. Surrounded by outstanding social infrastructure and fosters connectivity with Dwarka Expressway and other major roads of the city. **Prestige Sector 92 Gurgaon** serves as the ultimate future destination for homebuyers seeking luxury. Likewise, the property guarantees a pure blend of comfort with premium homes. This project, in turn, introduces planned residential apartments, ideal for homebuyers looking for property in a well-connected Gurgaon.",
            },
            {
                title: "Prestige Sector 92 Pricing and Payment Plan",
                description:
                    "For the seasoned investors and homebuyers, the **Prestige Sector 92 price** will be available on demand. However, as the project falls under the luxurious category, the prices are expected to begin on the higher side. The prices will differ on the basis of configurations, floor-rise, maintenance costs, and taxes. Also, the buyers should verify other hidden charges from the builders before making the final call. As this residential property is currently under construction, the buyers and investors can avail pre-launch offers to enjoy a flexible payment plan and the opportunity to choose the best floors at a reasonably lower rate, compared to the ones announced post-launch.",
            },
            {
                title: "Configurations and Floor Plan:",
                description: `The **Prestige Sector 92 floor plan** is expected to introduce apartments in three configurations, including 2 BHK, 3 BHK, and 4 BHK. This residential project is being built on a large site and is expected to offer premium apartments that have ample space and well-crafted facilities to fit families of different sizes. Likewise, the bedrooms, living rooms, bathrooms, and kitchen will be equipped with modern interiors and fittings and fixtures. The balconies, on the other hand, will come with ample space and foster ventilation via windows. Each home will be Vastu-compliant and secured from natural disasters with an earthquake-resistant structure.`,
            },
            {
                title: "Lifestyle, Leisure, Wellness - Facilities at Prestige",
                description: `When it comes to exploring the facilities, the **Prestige Sector 92 Amenities** certainly elevate the residential lifestyle. The property will offer premium lifestyle amenities including indoor and outdoor sports, a swimming pool, and a wellness and fitness centre. Accompanied by on-site cafes, there are a spa and sauna too, for residents to relish their experience. Other major utilities include power and water supply, lifts, and a rainwater harvesting system. Also, the security of the property is monitored under a multi-tier security system.`,
            },
        ],

        faqs: [
            {
                question: "Where is Prestige Sector 92 Gurgaon Located?",
                answer: "The address of the property is Prestige, IMT Manesar, 125 A, Sector 92, Gurgaon, Haryana (122505)",
            },
            {
                question:
                    "What are the configurations offered by Prestige Sector 92 Gurgaon?",
                answer: "This property will offer 2 BHK, 3 BHK, and 4 BHK apartments.",
            },
            {
                question:
                    "What are the facilities expected at Prestige Sector 92?",
                answer: "The residents will be offered amenities like a swimming pool, sports arena, fitness centre, gardens, and clubhouse, etc.",
            },
            {
                question: "Is Prestige Sector 92 Gurgaon worth investment?",
                answer: "Yes, definitely. Sector 92 is a top-growing area of the city, which offers a higher rental yield and appreciation rates for homebuyers and investors.",
            },
            {
                question:
                    "What are the prices of apartments at Prestige Sector 92?",
                answer: "The prices can be obtained by contacting the developer’s desk.",
            },
            {
                question: "Are schools and hospitals near Prestige Sector 92?",
                answer: "Yes, city’s reputed schools and healthcare facilities are in a close proximity to the property.",
            },
        ],
    },

    // ========================================================================
    // PRESTIGE Sector 109 Gurgaon
    // ========================================================================

    {
        slug: "prestige-sector-109",
        name: "Prestige Sector 109 Gurgaon",
        shortName: "Sector 109",
        location: "Sector 109, Gurgaon",
        locationlink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28047.530520602533!2d76.96166347431641!3d28.51141330000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d110064960189%3A0xd353a28693a2880d!2sPrestige%20109!5e0!3m2!1sen!2sin!4v1790074200271!5m2!1sen!2sin",
        positioning:
            "Contemporary residences designed around comfort and modern living.",
        startingPrice: "On Request*",
        bookingAmount: "20%",
        shortDescription:
            "A high-rise residential development planned around efficient layouts, open amenity decks and skyline views.",
        heroImage: "/heroImage/sector109.avif",
        cardImage: "/heroImage/sector109.avif",
        openGraphImage: "/sector109Ogimage.webp",
        metaTitle:
            "Prestige Sector 109 Gurgaon Dwarka Expressway | Price, Floor Plan & Brochure",
        metaDescription:
            "Discover Prestige Sector 109 Gurgaon, Dwarka Expressway. Check the latest price, floor plans, brochure, location map, amenities, specifications, and book your premium home today.",
        metaKeywords: [
            "Prestige Sector 109 Gurgaon",
            "Prestige Sector 109 Gurgaon Dwarka Expressway",
            "Prestige Sector 109 Gurgaon Price",
            "Prestige Sector 109 Gurgaon Location",
            "Prestige Sector 109 Gurgaon Floor Plan",
            "Prestige Sector 109 Gurgaon Brochure",
            "Prestige Sector 109 Gurgaon Gurgaon",
            "Prestige Sector 109 Gurgaon Price List",
            "luxury apartments Sector 104 Gurgaon",
            "premium apartments Dwarka Expressway",
            "residential projects Gurgaon",
            "new launch Gurgaon, luxury flats Gurgaon",
            "Prestige residential project",
        ],
        status: "Pre-launch",
        propertyType: "Premium Residential Apartments",
        reraNumber: "RERA registration is pending",

        facts: [
            {
                label: "Location",
                value: "Gurgaon",
            },
            {
                label: "Project Type",
                value: "Premium Residential",
            },
            {
                label: "Configurations",
                value: "3 & 4 BHK",
            },
            {
                label: "Apartment Sizes",
                value: "1,800 – 3,000 sq. ft.*",
            },
            {
                label: "Project Status",
                value: "Pre-launch",
            },
            {
                label: "Total Units",
                value: "Pre-launch",
            },
        ],

        overview: [
            "Gurgaon has been booming with residential developments, and when it comes to finding a luxury property in the newly developed areas like Sector 109, the hunt for homebuyers and investors has definitely come to an end.",
            "Indeed, the new **Prestige Sector 109 Gurgaon** is an upcoming property that is set to become the face of the area. Built on a wide area, with a posh neighborhood, this residential project will certainly set the standards high.",
            "This guide will take you through the key details surfacing around its amenities, the property, prices, floor plan, and more.",
        ],

        highlights: [
            {
                title: "Elevated amenity deck",
                description:
                    "A dedicated amenity level above ground opens up views while keeping ground-level landscaping generous.",
                image: "/highlights/se1.avif",
            },
            {
                title: "Efficient tower layouts",
                description:
                    "Fewer units per core and optimised layouts reduce wasted circulation space within each home.",
                image: "/highlights/se2.avif",
            },
            {
                title: "Modern material palette",
                description:
                    "A restrained, contemporary facade material palette is used across the towers.",
                image: "/highlights/se3.avif",
            },
        ],

        configurations: [
            {
                name: "3 BHK",
                size: "1,800 – 2,200 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
            {
                name: "4 BHK",
                size: "2,300 – 3,000 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
        ],

        // ------------------------------------------------------------
        // AMENITIES — LUCIDE ICONS
        // ------------------------------------------------------------

        amenities: [
            {
                category: "Fitness & Wellness",
                items: [
                    {
                        title: "Gymnasium",
                        icon: "Dumbbell",
                    },
                    {
                        title: "Yoga & Meditation",
                        icon: "Yoga & Meditation",
                    },
                    {
                        title: "Swimming Pool",
                        icon: "Swimming Pool",
                    },
                    {
                        title: "Spa",
                        icon: "Spa",
                    },
                    {
                        title: "Indoor Games",
                        icon: "Indoor Games",
                    },
                    {
                        title: "Steam & Sauna",
                        icon: "Steam & Sauna",
                    },
                    {
                        title: "Boxing Ring",
                        icon: "Boxing Ring",
                    },
                    {
                        title: "Clubhouse Reception",
                        icon: "Clubhouse Reception",
                    },
                ],
            },
            {
                category: "Recreation & Sports",
                items: [
                    {
                        title: "Sports Arena",
                        icon: "Sports Arena",
                    },
                    {
                        title: "Tennis Court",
                        icon: "Tennis Court",
                    },
                    {
                        title: "Volleyball Court",
                        icon: "Volleyball Court",
                    },
                    {
                        title: "Cricket Ground",
                        icon: "Cricket Ground",
                    },
                    {
                        title: "Squash Court",
                        icon: "Squash Court",
                    },
                    {
                        title: "Kids Play Area",
                        icon: "Kids Play Area",
                    },
                    {
                        title: "Rooftop Lounge",
                        icon: "Rooftop Lounge",
                    },
                    {
                        title: "Football Ground",
                        icon: "Football Ground",
                    },
                ],
            },
        ],

        floorPlans: [
            {
                name: "2 BHK",
                image: "/floorplan/floor.avif",
            },
            {
                name: "3 BHK",
                image: "/floorplan/floor.avif",
            },
        ],

        masterPlan: {
            image: "/masterplan/ms1.avif",
        },

        gallery: [
            {
                src: "/heroImage/sector109.avif",
                alt: "Prestige Sector 109 Gurgaon — tower exterior",
            },
            {
                src: "/highlights/se1.avif",
                alt: "Prestige Sector 109 Gurgaon — swimming pool",
            },
            {
                src: "/gallery/sector109/livingroom.avif",
                alt: "Prestige Sector 109 Gurgaon — living room interior",
            },
            {
                src: "/gallery/sector109/bedroominterior.avif",
                alt: "Prestige Sector 109 Gurgaon — bedroom interior",
            },
            {
                src: "/gallery/sector109/nightsky.avif",
                alt: "Prestige Sector 109 Gurgaon — night skyline",
            },
        ],

        locationAdvantages: [
            {
                name: "NH-48 & Expressway Access",
                description:
                    "Situated directly along the Dwarka Expressway corridor, offering efficient access to the Delhi-Jaipur Highway (NH-48) for smooth transits across Gurugram and Delhi-NCR.",
            },
            {
                name: "Metro Connectivity",
                description:
                    "Positioned roughly 6 to 8 km from the Yashobhoomi Dwarka Sector 25 and Dwarka Sector 21 metro stations, providing seamless transit into Delhi's core via the Airport Express and Blue lines.",
            },
            {
                name: "IGI Airport",
                description:
                    "Located approximately 15 to 20 minutes away from Indira Gandhi International Airport via the signal-free high-speed Dwarka Expressway network.",
            },
            {
                name: "Business & Lifestyle Hubs",
                description:
                    "Enjoy easy proximity to premium social spaces including Conscient One Mall right in the vicinity, alongside rapid access to Aerocity, the Diplomatic Enclave, and the Yashobhoomi IICC.",
            },
        ],

        whyThisProject: [
            {
                title: "Prestige: Blending Comfort with Connectivity",
                description:
                    "One of the prime advantages of investing in **Prestige Sector 109 Gurgaon** is its location. Indeed, positioned near the Dwarka Expressway, this residential township serves as a doorway to Delhi and other nearby regions of NCR. Similarly, the employment corridors like IMT Manesar, Cyber City, and others are easily reachable and offer immense benefits to professionals. On the other hand, the property is close to the city’s top educational and healthcare facilities, where families can make the most of the conveniences. This project, in turn, is a perfect combination of contemporary lifestyle and exceptional city connectivity, meeting the needs of today's residents. ",
            },
            {
                title: "Exploring the Price and Benefits",
                description:
                    "When it comes to **Prestige Sector 109 Price**, the developer has yet to announce official apartment rates because the project is still under development. However, it is strongly suggested that investing in a pre-launch project always comes with outstanding benefits like pre-launch discounts, offers, flexibility in rates, and of course, the choice of your apartment. In terms of pricing, the cost of each apartment varies depending on its floor plan, configuration, unit location, and similar. But before investing, a homebuyer must make himself aware of the charges and additional costs that might arise as an issue during the payment process.",
            },
            {
                title: "Floor Plan: Know About These Apartments for Modern Families",
                description:
                    "According to the current updates from the developer, the **Prestige Sector 109 Floor Plan** will comprise multiple configurations, including 2 BHK, 3 BHK, and 4 BHK apartments. These high-rise homes will be developed with exclusive modern interiors and ensure that ventilation passes through each corner of the house. Furthermore, the fittings and fixtures will be from reputed brands, accompanied by a modular kitchen. Also, the balconies are super vast and have ample space to fit diverse family sizes. Built with a strong RCC structure, this residential project is also earthquake-resistant and safe from other natural disasters.",
            },
            {
                title: "Lifestyle Amenities Not to Miss On",
                description:
                    "The **Prestige Sector 109 Amenities** are planned in accordance with the modern needs of the residents, wherein there will be wellness, leisure, recreation, and ultimate peace. The property is equipped with a fitness centre, sports facilities, and a spa and sauna. Also, the freshness is fostered by the green surroundings and serene landscaped gardens, wherein there are walking trails and gazebos. From the clubhouse to multi-purpose halls and other social zones, the residents’ collectiveness is also fostered within the township. Other than this, the security is managed by a multi-tier system. Also, the residents are offered access to water and power supply, lifts, and car parking.",
            },
        ],

        faqs: [
            {
                question:
                    "Where is this new Prestige property located in Gurgaon?",
                answer: "This property is positioned near Dwarka Expressway, in Sector 109, Gurgaon.",
            },
            {
                question:
                    "Who is the developer of this upcoming residential project?",
                answer: "The Prestige Sector 109 Gurgaon is being developed by the renowned developer, Prestige Group.",
            },
            {
                question:
                    "What are the floor plans available in Prestige Sector 109?",
                answer: "This property will offer multiple apartments ranging from 2 BHK to 3 BHK and 4 BHK.",
            },
            {
                question: "Are there any payment plans available?",
                answer: "The developer has yet to announce the prices of the apartments officially. However, the pre-launch offers can be queried on their support desk.",
            },
            {
                question:
                    "What are the facilities offered at Prestige Sector 109?",
                answer: "The project offers amenities like a fitness centre, kids’ zone, clubhouse, gardens, swimming pool, and yoga.",
            },
            {
                question: "When is the project being launched?",
                answer: "The launch date of Prestige Sector 109 is yet to be announced.",
            },
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
