import {
    ieee,
    ml,

    asp,
    next,

    uni,

    mobile,

    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "AI/ML Enthusiast",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: web,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "ASP.NET Core",
        icon: asp,
    },
    {
        name: "Next JS",
        icon: next,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Train Booking System (Academic)",
        company_name: "University of Moratuwa",
        icon: uni,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024 - Ongoing",
        points: [
            "Developing a Train Booking System that allows users to search for trains, select seats, and complete bookings through a user-friendly interface.",
            "Utilizing technologies like Node.js, Express, React, and MySQL.",
        ],
    },
    {
        title: "Banking System - DBMS (Academic)",
        company_name: "University of Moratuwa",
        icon: uni,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2022",
        points: [
            "Created a Database Management System for a banking system, featuring transaction handling, user lanes, and a user-friendly interface.",
            "Built with HTML/CSS/JavaScript, MySQL, and React Native.",
        ],
    },
    {
        title: "MechaPulse (Competition)",
        company_name: "IoT Competition",
        icon: ml,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2023",
        points: [
            "Developed an IoT solution leveraging machine learning to detect and identify machine faults based on sound analysis.",
            "Technologies: Python, OpenCV, JavaScript, Flask, Node.js, MQTT.",
        ],
    },
    {
        title: "Taprobanz - Ecommerce Platform",
        company_name: "Client Project",
        icon: shopify,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024 - Ongoing",
        points: [
            "Designing and developing an e-commerce website using WooCommerce and WordPress, tailored to meet the client's business needs.",
            "Technologies: WordPress, WooCommerce, PHP.",
        ],
    },
    {
        title: "Library Management System - Basic CRUD/Auth",
        company_name: "University of Moratuwa",
        icon: typescript,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024",
        points: [
            "Built a web application for managing library resources with CRUD operations and user authentication.",
            "Technologies: ASP.NET Core Web API, React (TypeScript), Tailwind CSS, Ant Design.",
        ],
    },
    {
        title: "IEEE Challenge Sphere - Website",
        company_name: "IEEE - Sri Lanka Section",
        icon: ieee,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024",
        points: [
            "Developed a website to showcase details about the IEEE Challenge competition.",
            "Technologies: ReactJS, GitHub Pages.",
        ],
    },
    {
        title: "4-bit Micro Processor (Academic)",
        company_name: "University of Moratuwa",
        icon: uni,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2022",
        points: [
            "Developed a simple processor capable of executing basic instructions using the BASYS2 micro-controller.",
            "Technologies: Xilinx ISE.",
        ],
    },
    {
        title: "RPAL Language Compiler (Academic)",
        company_name: "University of Moratuwa",
        icon: uni,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2022",
        points: [
            "Developed a C++ compiler for RPAL to parse, generate AST, compile, and execute RPAL code.",
            "Technologies: C++, Compiler Design Techniques.",
        ],
    },
];



const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };