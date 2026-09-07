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
    logo?: string;
    status?: string;
    propertyType?: string;
    reraNumber?: string;
    facts: { label: string; value: string }[];
    overview: string[];
    highlights: { title: string; description: string; image?: string }[];
    configurations: {
        name: string;
        size?: string;
        priceLabel: string;
    }[];
    amenities: {
        category: string;
        items: { image: string }[];
    }[];
    floorPlans: { name: string; image: string }[];
    masterPlan?: { image: string };
    gallery: { src: string; alt: string }[];
    locationAdvantages: { name: string; description?: string }[];
    whyThisProject: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
};

export const projects: Project[] = [
    {
        slug: "indiabulls-estate-and-club",
        name: "Indiabulls Estate & Club",
        shortName: "Estate & Club",
        location: "Sector 104, Gurgaon",
        locationlink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.834416873323!2d76.99431127570482!3d28.484532890785722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17f6db078333%3A0xc1ad1b6cef1fde3a!2sIndiabulls%20Estate%20Sector%20104!5e0!3m2!1sen!2sin!4v1788760843684!5m2!1sen!2sin",
        positioning:
            "Refined residences with a lifestyle-led community experience.",
        startingPrice: "4.25 Cr*",
        bookingAmount: "20%",
        shortDescription:
            "A low-density residential address built around a private clubhouse, layered landscaping and generously proportioned homes.",
        heroImage: "/highlights/e3.png",
        cardImage: "/highlights/e3.png",
        openGraphImage: "/estate&clubOgimage.webp",
        status: "Under Construction",
        propertyType: "Premium Residential Apartments",
        reraNumber: "RC/REP/HARERA/GGM/897/629/2024/124",
        facts: [
            { label: "Location", value: "Sector 104, Gurgaon" },
            { label: "Project Type", value: "Premium Residential" },
            { label: "Configurations", value: "3 & 4 BHK" },
            { label: "Apartment Sizes", value: "2,400 – 3,700 sq. ft.*" },
            { label: "Project Status", value: "Under Construction" },
            { label: "Total Units", value: "38" },
        ],
        overview: [
            "Indiabulls Estate & Club is planned as a low-rise, low-density residential community set around a central clubhouse and landscaped gardens, prioritising light, air and privacy over density.",
            "The architectural language favours long horizontal lines, deep balconies and generous glazing, with the clubhouse positioned as the social heart of the development rather than an afterthought.",
            "Homes are planned with clearly zoned living and private areas, wide frontages and cross-ventilation across most units.",
            "Indiabulls Estate & Club is planned as a low-rise, low-density residential community set around a central clubhouse and landscaped gardens, prioritising light, air and privacy over density.",
            "The architectural language favours long horizontal lines, deep balconies and generous glazing, with the clubhouse positioned as the social heart of the development rather than an afterthought.",
            "Homes are planned with clearly zoned living and private areas, wide frontages and cross-ventilation across most units.",
        ],
        highlights: [
            {
                title: "Low-density planning",
                description:
                    "A limited number of units per acre, prioritising open space, light and privacy over density.",
                image: "/highlights/e6.png",
            },
            // {
            //     title: "Clubhouse-led lifestyle",
            //     description:
            //         "A full-scale private clubhouse anchors the community, planned as the everyday social centre rather than an amenity checklist.",
            //     image: "/highlights/e2.png",
            // },
            {
                title: "Layered landscaping",
                description:
                    "Multiple green pockets and walking paths are woven between towers, reducing the visual scale of the built form.",
                image: "/gallery/Estate&Club/garden.png",
            },
            {
                title: "Generous private balconies",
                description:
                    "Deep private balconies extend the living space outward and frame views across the landscaped grounds.",
                image: "/highlights/e2.png",
            },
        ],
        configurations: [
            {
                name: "3 BHK",
                size: "2,400 – 2,600 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
            {
                name: "4 BHK",
                size: "3,400 – 3,700 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
        ],
        amenities: [
            {
                category: "Fitness & Wellness",
                items: [
                    {
                        image: "/amenities/Estate&Club/gym.png",
                    },
                    {
                        image: "/amenities/Estate&Club/yoga.png",
                    },
                    {
                        image: "/amenities/Estate&Club/swimmingpool.png",
                    },
                    {
                        image: "/amenities/Estate&Club/spa.png",
                    },
                    {
                        image: "/amenities/Estate&Club/room.png",
                    },
                    {
                        image: "/amenities/Estate&Club/men.png",
                    },
                    {
                        image: "/amenities/Estate&Club/ring.png",
                    },
                    {
                        image: "/amenities/Estate&Club/reception.png",
                    },
                ],
            },
            {
                category: "Recreation & Sports",
                items: [
                    {
                        image: "/amenities/Estate&Club/sport.png",
                    },
                    {
                        image: "/amenities/Estate&Club/tenis.png",
                    },
                    {
                        image: "/amenities/Estate&Club/vooly.png",
                    },
                    {
                        image: "/amenities/Estate&Club/cricket.png",
                    },
                    { image: "/amenities/Estate&Club/squites.png" },
                    { image: "/amenities/Estate&Club/11.png" },
                    { image: "/amenities/Estate&Club/roop.png" },
                    { image: "/amenities/Estate&Club/footbal.png" },
                ],
            },
        ],
        floorPlans: [
            { name: "3 BHK", image: "/floorplan/e3bhk.png" },
            { name: "4 BHK", image: "/floorplan/e4bhk.png" },
        ],
        masterPlan: { image: "/masterplan/estate.png" },
        gallery: [
            {
                src: "/highlights/e3.png",
                alt: "Indiabulls Estate & Club — exterior view",
            },
            {
                src: "/gallery/Estate&Club/garden.png",
                alt: "Indiabulls Estate & Club — landscaped garden",
            },
            {
                src: "/gallery/Estate&Club/inter.png",
                alt: "Indiabulls Estate & Club — living room interior",
            },
            {
                src: "/highlights/e6.png",
                alt: "Indiabulls Estate & Club — swimming pool",
            },
            {
                src: "/highlights/e2.png",
                alt: "Indiabulls Estate & Club — balcony view",
            },
        ],
        locationAdvantages: [
            {
                name: "Dwarka Expressway",
                description:
                    "A prime Sector 104 address positioned directly on Dwarka Expressway, connecting residents seamlessly to Delhi and Gurugram.",
            },
            {
                name: "NH-48",
                description:
                    "Easy access toward NH-48 provides connectivity to major business districts, commercial hubs and key destinations across Gurugram.",
            },
            {
                name: "IGI Airport",
                description:
                    "Reach Indira Gandhi International Airport in approximately 15 minutes, making domestic and international travel more convenient.",
            },
            {
                name: "Schools & Hospitals",
                description:
                    "DPS and HSV International School are approximately 1 minute away, with Max Hospital, Park Hospital and Manipal Hospital around 15 minutes from the project.",
            },
        ],
        whyThisProject: [
            {
                title: "A quieter address",
                description:
                    "Low-density planning and generous open space set it apart from denser high-rise clusters nearby. Low-density planning and generous open space set it apart from denser high-rise clusters nearby. Low-density planning and generous open space set it apart from denser high-rise clusters nearby. Low-density planning and generous open space set it apart from denser high-rise clusters nearby. Low-density planning and generous open space set it apart from denser high-rise clusters nearby. Low-density planning and generous open space set it apart from denser high-rise clusters nearby.",
            },
            {
                title: "Clubhouse as everyday amenity",
                description:
                    "The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events. The clubhouse is planned for daily use, not just occasional events.",
            },
            {
                title: "Configuration depth",
                description:
                    "3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families. 3 and 4 BHK layouts suit both growing and established families.",
            },
            {
                title: "Sector 104 positioning",
                description:
                    "Located within Gurgaon's western growth corridor (verify current infrastructure status before launch). Located within Gurgaon's western growth corridor (verify current infrastructure status before launch). Located within Gurgaon's western growth corridor (verify current infrastructure status before launch). Located within Gurgaon's western growth corridor (verify current infrastructure status before launch). Located within Gurgaon's western growth corridor (verify current infrastructure status before launch). Located within Gurgaon's western growth corridor (verify current infrastructure status before launch). Located within Gurgaon's western growth corridor (verify current infrastructure status before launch).",
            },
        ],
        faqs: [
            {
                question: "Where is Indiabulls Estate & Club located?",
                answer: "The project is located in Sector 104, Gurgaon. Exact address and access points will be confirmed before launch.",
            },
            {
                question:
                    "What configurations are available at Indiabulls Estate & Club?",
                answer: "The project offers 3 BHK and 4 BHK residences. Final configuration details will be confirmed before launch.",
            },
            {
                question: "What are the approximate apartment sizes?",
                answer: "Sample sizes range from approximately 2,400 to 3,700 sq. ft. across configurations; final sizes will be confirmed before launch.",
            },
            {
                question:
                    "How can I get the latest price for Indiabulls Estate & Club?",
                answer: "Use the Get Latest Price button on this page to share your details, and the team will share current pricing.",
            },
            {
                question:
                    "What amenities are available at Indiabulls Estate & Club?",
                answer: "Planned amenities span fitness, recreation, club & social spaces, children's areas, landscaping and security — see the Amenities section above.",
            },
            {
                question: "Is Indiabulls Estate & Club RERA registered?",
                answer: "The RERA registration number will be published here once confirmed and verified.",
            },
        ],
    },
    {
        slug: "indiabulls-heights",
        name: "Indiabulls Heights",
        shortName: "Heights",
        location: "Sector 104, Gurgaon",
        locationlink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8309394062608!2d76.99427899999999!3d28.4846376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17b94520cdc3%3A0xcb07424a9845f4c7!2sOne%20Indiabulls!5e0!3m2!1sen!2sin!4v1788760942995!5m2!1sen!2sin",
        positioning:
            "Contemporary residences designed around comfort and modern living.",
        startingPrice: "4.25 Cr*",
        bookingAmount: "20%",
        shortDescription:
            "A high-rise residential development planned around efficient layouts, open amenity decks and skyline views.",
        heroImage: "/heroImage/height.png",
        cardImage: "/heroImage/height.png",
        openGraphImage: "/heightOgimage.webp",
        status: "Under Construction",
        propertyType: "Premium Residential Apartments",
        reraNumber: "RC/REP/HARERA/GGM/160(A) of 2017/7(3)/89/2025/31",
        facts: [
            { label: "Location", value: "Gurgaon" },
            { label: "Project Type", value: "Premium Residential" },
            { label: "Configurations", value: "2 & 3 BHK" },
            { label: "Apartment Sizes", value: "1,500 – 2,500 sq. ft.*" },
            { label: "Project Status", value: "Under Construction" },
            { label: "Total Units", value: "48" },
        ],
        overview: [
            "Indiabulls Heights is planned as a vertical residential community, using tower height to open up amenity decks, wider setbacks and long-range views at upper levels.",
            "Layouts are planned for efficient, functional living — clearly zoned bedrooms, uninterrupted living spaces and service areas kept separate from the main circulation.",
            "The amenity program is distributed across ground-level and elevated decks, giving residents multiple distinct outdoor experiences within the same address.",
        ],
        highlights: [
            {
                title: "Elevated amenity deck",
                description:
                    "A dedicated amenity level above ground opens up views while keeping ground-level landscaping generous.",
                image: "/highlights/h1.webp",
            },
            {
                title: "Efficient tower layouts",
                description:
                    "Fewer units per core and optimised layouts reduce wasted circulation space within each home.",
                image: "/highlights/h2.png",
            },
            {
                title: "Modern material palette",
                description:
                    "A restrained, contemporary facade material palette is used across the towers.",
                image: "/highlights/h3.png",
            },
        ],
        configurations: [
            {
                name: "2 BHK",
                size: "1,500 – 2,000 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
            {
                name: "3 BHK",
                size: "2,300 – 2,500 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
        ],
        amenities: [
            {
                category: "Fitness & Wellness",
                items: [
                    {
                        image: "/amenities/Estate&Club/gym.png",
                    },
                    {
                        image: "/amenities/Estate&Club/yoga.png",
                    },
                    {
                        image: "/amenities/Estate&Club/swimmingpool.png",
                    },
                    {
                        image: "/amenities/Estate&Club/spa.png",
                    },
                    {
                        image: "/amenities/Estate&Club/room.png",
                    },
                    {
                        image: "/amenities/Estate&Club/men.png",
                    },
                    {
                        image: "/amenities/Estate&Club/ring.png",
                    },
                    {
                        image: "/amenities/Estate&Club/reception.png",
                    },
                ],
            },
            {
                category: "Recreation & Sports",
                items: [
                    {
                        image: "/amenities/Estate&Club/sport.png",
                    },
                    {
                        image: "/amenities/Estate&Club/tenis.png",
                    },
                    {
                        image: "/amenities/Estate&Club/vooly.png",
                    },
                    {
                        image: "/amenities/Estate&Club/cricket.png",
                    },
                    { image: "/amenities/Estate&Club/squites.png" },
                    { image: "/amenities/Estate&Club/11.png" },
                    { image: "/amenities/Estate&Club/roop.png" },
                    { image: "/amenities/Estate&Club/footbal.png" },
                ],
            },
        ],
        floorPlans: [
            { name: "2 BHK", image: "/floorplan/h2bhk.webp" },
            { name: "3 BHK", image: "/floorplan/h3bhk.webp" },
        ],
        masterPlan: { image: "/masterplan/heights.webp" },
        gallery: [
            {
                src: "/heroImage/height.png",
                alt: "Indiabulls Heights — tower exterior",
            },
            {
                src: "/highlights/h1.webp",
                alt: "Indiabulls Heights — sky lounge",
            },
            {
                src: "/gallery/height/livingroom.webp",
                alt: "Indiabulls Heights — living room interior",
            },
            {
                src: "/gallery/height/bedroom.webp",
                alt: "Indiabulls Heights — bedroom interior",
            },
            {
                src: "/highlights/h3.png",
                alt: "Indiabulls Heights — night skyline",
            },
        ],
        locationAdvantages: [
            {
                name: "NH-48",
                description:
                    "Convenient connectivity toward NH-48 provides access to major destinations across Gurugram and Delhi-NCR.",
            },
            {
                name: "Metro Connectivity",
                description:
                    "Yashobhoomi and Dwarka Sector 21 metro connectivity provides access to Delhi and the wider NCR region.",
            },
            {
                name: "IGI Airport",
                description:
                    "Indira Gandhi International Airport is approximately 15 minutes away, offering convenient connectivity for domestic and international travel.",
            },
            {
                name: "Business & Lifestyle Hubs",
                description:
                    "The project offers convenient access to Conscient One, Aerocity, Diplomatic Enclave, Yashobhoomi and other major business and lifestyle destinations.",
            },
        ],
        whyThisProject: [
            {
                title: "Height as an amenity",
                description:
                    "Elevated decks and upper-floor units are planned to make the most of view corridors.",
            },
            {
                title: "Efficient, modern layouts",
                description:
                    "Layouts are designed to minimise wasted space across configurations.",
            },
            {
                title: "Distributed amenity program",
                description:
                    "Separate ground and elevated amenity zones give residents variety within one address.",
            },
            {
                title: "Central Gurgaon access",
                description:
                    "Positioned for access to Gurgaon's key employment and business corridors (verify before launch).",
            },
        ],
        faqs: [
            {
                question: "Where is Indiabulls Heights located?",
                answer: "Indiabulls Heights is located in Gurgaon. Exact address and access points will be confirmed before launch.",
            },
            {
                question:
                    "What configurations are available at Indiabulls Heights?",
                answer: "The project offers 3 BHK and 4 BHK residences. Final configuration details will be confirmed before launch.",
            },
            {
                question: "What are the approximate apartment sizes?",
                answer: "Sample sizes range from approximately 2,300 to 3,600 sq. ft. across configurations; final sizes will be confirmed before launch.",
            },
            {
                question:
                    "How can I get the latest price for Indiabulls Heights?",
                answer: "Use the Get Latest Price button on this page to share your details, and the team will share current pricing.",
            },
            {
                question: "What amenities are available at Indiabulls Heights?",
                answer: "Planned amenities span fitness, recreation, club & social spaces, children's areas, landscaping and security — see the Amenities section above.",
            },
            {
                question: "Is Indiabulls Heights RERA registered?",
                answer: "The RERA registration number will be published here once confirmed and verified.",
            },
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
