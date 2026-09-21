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
        name: "Indiabulls Estate and Club",
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
        metaTitle:
            "Indiabulls Estate & Club Sector 104 Gurgaon | Price, Brochure, Floor Plans & Amenities",
        metaDescription:
            "Explore Indiabulls Estate & Club in Sector 104, Gurgaon. Get the latest price list, brochure, floor plans, world-class amenities, specifications, location advantages, and booking details for premium residences.",
        metaKeywords: [
            "Indiabulls Estate and Club",
            "Indiabulls Estate and Club Sector 104 Gurgaon",
            "Indiabulls Estate and Club Gurgaon",
            "Indiabulls Estate and Club brochure",
            "Indiabulls Estate and Club price",
            "Indiabulls Estate and Club floor plan",
            "Indiabulls Estate and Club amenities",
            "Indiabulls Estate and Club price list",
            "luxury apartments Sector 104 Gurgaon",
            "premium apartments Gurgaon",
            "residential project Sector 104 Gurgaon",
            "Indiabulls homes Gurgaon",
            "Dwarka Expressway apartments",
            "new launch Gurgaon",
            "luxury flats Gurgaon",
        ],
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
            "Taking today’s modernization into consideration, the residential lifestyle has shifted more towards comfort and luxury blended together.",
            "The Indiabulls Estate and Club Sector 104 Gurgaon is one such property that ticks the list of the potential buyers and investors.",
            "The property is situated in an upscale neighborhood that brings convenience and lifestyle within reach for the residents.",
            "The apartments within the project have 3 BHK and 4 BHK options with special layouts and are packed with natural light flowing through every corner of the house.",
            "Also, the greenery around the township opens the doorway to freshness and connectivity to nature.",
            "The apartments at Indiabulls Estate and Club Sector 104 Gurgaon are embedded with smart home features accompanied by prime fittings and fixtures from reputed brands within bedrooms, living room, kitchen, and bathrooms.",
            "The Indiabulls Estate and Club Sector Price is now available for potential buyers and investors to enquire about.",
        ],
        highlights: [
            {
                title: "Low-density planning",
                description:
                    "A limited number of units per acre, prioritising open space, light and privacy over density.",
                image: "/highlights/e6.png",
            },
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
                title: "Indiabulls Estate and Club Amenities",
                description:
                    "Coming to the facilities, the Indiabulls Estate and Club Amenities are curated in a way that they not only offer a luxurious lifestyle, but also ensure that its residents are offered all conveniences at their doorstep. The residents are offered luxurious swimming pools situated both indoors and outdoors. On the other hand, there are wellness facilities like a spa and sauna to let residents relax. The Indiabulls Estate and Club Amenities also offer an amusement park for kids and also, and adults and elders can access a multi-sports arena with the availability of tennis, badminton, pickleball, and more. The fitness centre is developed with a fully equipped gymnasium and has a dedicated space for yoga and meditation.",
            },
            {
                title: "Indiabulls Estate and Club Brochure",
                description:
                    "The Indiabulls Estate and Club Brochure justifies the serenity surrounding this township. It also comprise the overview of walking trails, landscaped gardens, and sitting spaces, specifically for the elderly residents. Beyond the facilities, this township is highly secure, with an advanced security system, a gated community, trained professionals, and round-the-clock concierge services. Additionally, there is parking space and uninterrupted water and power supply. The potential buyers can explore more about the essentials on the brochure available.",
            },
            {
                title: "Indiabulls Estate and Club Sector 104 positioning",
                description: `Positioned right in the heart of the Dwarka Expressway, Indiabulls Estate and Club Sector 104 Gurgaon fosters enhanced connectivity and conveniences for residents. Its proximity to the reputed schools and hospitals makes it stand out within the community. Furthermore, professionals benefit the most as this township is close to Cyber City, Aerocity, and similar employment corridors. The families also get direct access to the city’s hotspots like prime shopping centres, Dwarka Golf Course, Yashobhoomi, and more. Lastly, the IGI Airport is also 15 minutes’ drive away from the Indiabulls Estate and Club, Sector 104 Gurgaon. Indeed, this property is definitely worth investing in and offers long-term appreciation rate.`,
            },
        ],
        faqs: [
            {
                question: "Where is Indiabulls Estate and Club located?",
                answer: "This township is located at Sector 104, Dwarka Expressway, Gurugram.",
            },
            {
                question: "What are the amenities available at the property?",
                answer: "The Indiabulls Estate and Club amenities include sports, indoor and outdoor pools, cafe, fitness centre, and spa facilities.",
            },
            {
                question:
                    " What configurations are available at Indiabulls Estate and Club to choose from?",
                answer: "This project offers spacious 3 BHK and 4 BHK apartments.",
            },
            {
                question:
                    "How is the project connected with other parts of the city?",
                answer: "The Indiabulls Estate and Club is connected via major highways and Dwarka Expressway.",
            },
            {
                question: "Is Indiabulls Estate and Club worth investment?",
                answer: "Yes, it is. This project is close to IGI Airport and is well-connected with the employment corridors of the city.",
            },
            {
                question:
                    "What makes Indiabulls Estate and Club Sector 104 Gurgaon different from other projects?",
                answer: "This township is covered with large green spaces and has a vast clubhouse, along with resort-style facilities.",
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
        startingPrice: "₹1.95 Cr*",
        bookingAmount: "20%",
        shortDescription:
            "A high-rise residential development planned around efficient layouts, open amenity decks and skyline views.",
        heroImage: "/heroImage/height.png",
        cardImage: "/heroImage/height.png",
        openGraphImage: "/heightOgimage.webp",
        metaTitle:
            "Indiabulls Heights Sector 104 Dwarka Expressway | Price, Floor Plan & Brochure",
        metaDescription:
            "Discover Indiabulls Heights in Sector 104, Dwarka Expressway, Gurgaon. Check the latest price, floor plans, brochure, location map, amenities, specifications, and book your premium home today.",
        metaKeywords: [
            "Indiabulls Heights",
            "Indiabulls Heights Sector 104 Dwarka Expressway",
            "Indiabulls Heights Dwarka Expressway",
            "Indiabulls Heights Price",
            "Indiabulls Heights Location",
            "Indiabulls Heights Floor Plan",
            "Indiabulls Heights Brochure",
            "Indiabulls Heights Gurgaon",
            "Indiabulls Heights Price List",
            "luxury apartments Sector 104 Gurgaon",
            "premium apartments Dwarka Expressway",
            "residential projects Gurgaon",
            "new launch Gurgaon, luxury flats Gurgaon",
            "Indiabulls residential project",
        ],
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
            "IIndiabulls Real Estate is one of the renowned developers and is now ready with its new residential project, which is located in the prime location of Sector 104, Gurugram.",
            " To begin the Indiabulls Heights Overview, this property comes with an elegant design and the finest infrastructure in the area.",
            "This residential property comprises comfortable and luxurious 2 BHK and 3 BHK apartments, which have their private balconies and modern interiors.",
            "Furthermore, this property has a lifestyle-focused environment, wherein the residents can enjoy top-class facilities and seamless connectivity.",
            "The apartments, too, are spacious and hold a strong space to accommodate any size of family.",
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
                name: "2 BHK + Study",
                size: "1,500 – 2,000 sq. ft.*",
                priceLabel: "Get Latest Price",
            },
            {
                name: "3 BHK + Utility",
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
                title: "Everything About Indiabulls Heights Sector 104",
                description:
                    "From well-constructed architecture to the finest interiors, this property offers a premium range of apartments. The homes in the property come in 2 BHK and 3 BHK configurations. Each apartment has spacious bedrooms and living areas, accompanied by a modular kitchen. Likewise, the bathrooms have fittings and fixtures from reputed brands. The development of the project has been done with Vastu compliance. Similarly, this residential project is earthquake-resistant, wherein the walls stand strong on the RCC structure. The interiors of the property have been curated, keeping the needs of the lifestyle in consideration. The Indiabulls Heights Sector 104 Gurgaon, thus, is a perfect combination of luxury, comfort, and modern life amenities.",
            },
            {
                title: "The Pricing and More",
                description:
                    "When it comes to understanding the Indiabulls Heights price for the apartments, potential buyers and investors will make their selection based on multiple factors. The current rates of the Indiabulls Heights vary depending on the apartment size, floor, and configurations. As the property prices keep on fluctuating over time, the prices for these apartments too come along with flexible rates. However, buyers are eligible to avail the prime benefits of early investment, flexible payment plans, ease of choosing the preferred floors and configurations, and making the most of final pricing. Since the demand for property is already at a peak, investing early will result in a beneficial deal.",
            },
            {
                title: "Understanding the Brochure",
                description:
                    "In order to get the best of the details, the Indiabulls Heights brochure offers a detailed overview of the project. The brochure of this residential property consists of details surrounding floor plans, amenities, overall development, and specifications. The official website of Indiabulls Heights offers the option for potential buyers and investors to download the brochure. Also, buyers can compare configurations and lifestyle facilities. The brochure also offers details on the location and its seamless connectivity with the city’s hotspots, reputed schools, top hospitals, and employment corridors at Sector 104.",
            },
            {
                title: "Exploring Amenities of the Project",
                description:
                    "When it comes to the Indiabulls Heights amenities, this property is packed with lifestyle facilities that make the residential experience for residents worthwhile. This property offers a range of facilities that include wellness, leisure, and recreation. The residents are offered a swimming pool, on-site restaurant, and gymnasium, while the kids get access to a multi-sports arena equipped with basketball, a play area, cricket, and tennis, etc. The property also has green spaces that enrich the lifestyle with fresh air and peace of mind. Similarly, the security standards are top-notch with a 5-tier security system. The water and power supply are uninterrupted, and car parking is also available.",
            },
        ],
        faqs: [
            {
                question: "Where is Indiabulls Heights Located?",
                answer: "Indiabulls Heights is situated at Sector 104, Dwarka Expressway, Gurugram.",
            },
            {
                question: "Is Indiabulls Heights RERA Registered?",
                answer: "Yes, the project is registered under the RERA number: RC/REP/HARERA/GGM/160(A) of 2017/7(3)/89/2025/31.",
            },
            {
                question:
                    "What kind of apartments are available in Indiabulls Heights?",
                answer: "The buyers can choose from 2 BHK and 3 BHK apartments; however, the floor plan varies depending on the floor and other specifications.",
            },
            {
                question:
                    "What are the facilities available at Indiabulls Heights?",
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
