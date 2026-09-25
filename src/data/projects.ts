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
            "Taking today’s modernization into consideration, the residential lifestyle has shifted more towards comfort and luxury blended together.",
            "The **Prestige Sector 92 Gurgaon Sector 104 Gurgaon** is one such property that ticks the list of the potential buyers and investors.",
            "The property is situated in an upscale neighborhood that brings convenience and lifestyle within reach for the residents.",
            "The apartments within the project have 3 BHK and 4 BHK options with special layouts and are packed with natural light flowing through every corner of the house.",
            "Also, the greenery around the township opens the doorway to freshness and connectivity to nature.",
            "The apartments at **Prestige Sector 92 Gurgaon Sector 104 Gurgaon** are embedded with smart home features accompanied by prime fittings and fixtures from reputed brands within bedrooms, living room, kitchen, and bathrooms.",
            "The **Prestige Sector 92 Gurgaon Sector Price** is now available for potential buyers and investors to enquire about.",
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
                title: "Prestige Sector 92 Gurgaon Amenities",
                description:
                    "Coming to the facilities, the **Prestige Sector 92 Gurgaon Amenities** are curated in a way that they not only offer a luxurious lifestyle, but also ensure that its residents are offered all conveniences at their doorstep. The residents are offered luxurious swimming pools situated both indoors and outdoors. On the other hand, there are wellness facilities like a spa and sauna to let residents relax. The **Prestige Sector 92 Gurgaon Amenities** also offer an amusement park for kids and also, and adults and elders can access a multi-sports arena with the availability of tennis, badminton, pickleball, and more. The fitness centre is developed with a fully equipped gymnasium and has a dedicated space for yoga and meditation.",
            },
            {
                title: "Prestige Sector 92 Gurgaon Brochure",
                description:
                    "The **Prestige Sector 92 Gurgaon Brochure** justifies the serenity surrounding this township. It also comprise the overview of walking trails, landscaped gardens, and sitting spaces, specifically for the elderly residents. Beyond the facilities, this township is highly secure, with an advanced security system, a gated community, trained professionals, and round-the-clock concierge services. Additionally, there is parking space and uninterrupted water and power supply. The potential buyers can explore more about the essentials on the brochure available.",
            },
            {
                title: "Prestige Sector 92 Gurgaon Sector 104 positioning",
                description: `Positioned right in the heart of the Dwarka Expressway, **Prestige Sector 92 Gurgaon Sector 104 Gurgaon** fosters enhanced connectivity and conveniences for residents. Its proximity to the reputed schools and hospitals makes it stand out within the community. Furthermore, professionals benefit the most as this township is close to Cyber City, Aerocity, and similar employment corridors. The families also get direct access to the city’s hotspots like prime shopping centres, Dwarka Golf Course, Yashobhoomi, and more. Lastly, the IGI Airport is also 15 minutes’ drive away from the **Prestige Sector 92 Gurgaon, Sector 104 Gurgaon**. Indeed, this property is definitely worth investing in and offers long-term appreciation rate.`,
            },
        ],

        faqs: [
            {
                question: "Where is Prestige Sector 92 Gurgaon located?",
                answer: "This township is located at Sector 104, Dwarka Expressway, Gurugram.",
            },
            {
                question: "What are the amenities available at the property?",
                answer: "The Prestige Sector 92 Gurgaon amenities include sports, indoor and outdoor pools, cafe, fitness centre, and spa facilities.",
            },
            {
                question:
                    " What configurations are available at Prestige Sector 92 Gurgaon to choose from?",
                answer: "This project offers spacious 3 BHK and 4 BHK apartments.",
            },
            {
                question:
                    "How is the project connected with other parts of the city?",
                answer: "The Prestige Sector 92 Gurgaon is connected via major highways and Dwarka Expressway.",
            },
            {
                question: "Is Prestige Sector 92 Gurgaon worth investment?",
                answer: "Yes, it is. This project is close to IGI Airport and is well-connected with the employment corridors of the city.",
            },
            {
                question:
                    "What makes Prestige Sector 92 Gurgaon Sector 104 Gurgaon different from other projects?",
                answer: "This township is covered with large green spaces and has a vast clubhouse, along with resort-style facilities.",
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
            "Prestige Real Estate is one of the renowned developers and is now ready with its new residential project, which is located in the prime location of **Sector 104, Gurugram**.",
            " To begin the Prestige Sector 109 Gurgaon Overview, this property comes with an elegant design and the finest infrastructure in the area.",
            "This residential property comprises comfortable and luxurious **2 BHK and 3 BHK apartments**, which have their private balconies and modern interiors.",
            "Furthermore, this property has a lifestyle-focused environment, wherein the residents can enjoy top-class facilities and seamless connectivity.",
            "The apartments, too, are spacious and hold a strong space to accommodate any size of family.",
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
                title: "Everything About Prestige Sector 109 Gurgaon Sector 104",
                description:
                    "From well-constructed architecture to the finest interiors, this property offers a premium range of apartments. The homes in the property come in 2 BHK and 3 BHK configurations. Each apartment has spacious bedrooms and living areas, accompanied by a modular kitchen. Likewise, the bathrooms have fittings and fixtures from reputed brands. The development of the project has been done with Vastu compliance. Similarly, this residential project is earthquake-resistant, wherein the walls stand strong on the RCC structure. The interiors of the property have been curated, keeping the needs of the lifestyle in consideration. The **Prestige Sector 109 Gurgaon Sector 104 Gurgaon**, thus, is a perfect combination of luxury, comfort, and modern life amenities.",
            },
            {
                title: "The Pricing and More",
                description:
                    "When it comes to understanding the **Prestige Sector 109 Gurgaon price** for the apartments, potential buyers and investors will make their selection based on multiple factors. The current rates of the Prestige Sector 109 Gurgaon vary depending on the apartment size, floor, and configurations. As the property prices keep on fluctuating over time, the prices for these apartments too come along with flexible rates. However, buyers are eligible to avail the prime benefits of early investment, flexible payment plans, ease of choosing the preferred floors and configurations, and making the most of final pricing. Since the demand for property is already at a peak, investing early will result in a beneficial deal.",
            },
            {
                title: "Understanding the Brochure",
                description:
                    "In order to get the best of the details, the **Prestige Sector 109 Gurgaon brochure** offers a detailed overview of the project. The brochure of this residential property consists of details surrounding floor plans, amenities, overall development, and specifications. The official website of Prestige Sector 109 Gurgaon offers the option for potential buyers and investors to download the brochure. Also, buyers can compare configurations and lifestyle facilities. The brochure also offers details on the location and its seamless connectivity with the city’s hotspots, reputed schools, top hospitals, and employment corridors at Sector 104.",
            },
            {
                title: "Exploring Amenities of the Project",
                description:
                    "When it comes to the **Prestige Sector 109 Gurgaon amenities**, this property is packed with lifestyle facilities that make the residential experience for residents worthwhile. This property offers a range of facilities that include wellness, leisure, and recreation. The residents are offered a swimming pool, on-site restaurant, and gymnasium, while the kids get access to a multi-sports arena equipped with basketball, a play area, cricket, and tennis, etc. The property also has green spaces that enrich the lifestyle with fresh air and peace of mind. Similarly, the security standards are top-notch with a 5-tier security system. The water and power supply are uninterrupted, and car parking is also available.",
            },
        ],

        faqs: [
            {
                question: "Where is Prestige Sector 109 Gurgaon Located?",
                answer: "Prestige Sector 109 Gurgaon is situated at Sector 104, Dwarka Expressway, Gurugram.",
            },
            {
                question: "Is Prestige Sector 109 Gurgaon RERA Registered?",
                answer: "Yes, the project is registered under the RERA number: RC/REP/HARERA/GGM/160(A) of 2017/7(3)/89/2025/31.",
            },
            {
                question:
                    "What kind of apartments are available in Prestige Sector 109 Gurgaon?",
                answer: "The buyers can choose from 2 BHK and 3 BHK apartments; however, the floor plan varies depending on the floor and other specifications.",
            },
            {
                question:
                    "What are the facilities available at Prestige Sector 109 Gurgaon?",
                answer: "The amenities available include a swimming pool, gymnasium, spa, on-site restaurant, sports, and gardens.",
            },
            {
                question: "Is investment in Sector 104 worth it?",
                answer: "Yes, the area is booming with rapid urbanisation, development of social infrastructure, and enhanced connectivity.",
            },
            {
                question: "When is possession expected?",
                answer: "The details are yet to be confirmed from the property's end. However, it is expected somewhere around October 2030.",
            },
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
