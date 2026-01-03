import {
    content,
    wso2,
    aiMl,
    ieee,
    ml,
    asp,
    next,
    uni,
    surecore,
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
    volunteer,
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
        id: "journey",
        title: "Journey",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "AI/ML Enthusiast",
        icon: aiMl,
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
        icon: content,
    },
    {
        title: "Volunteer",
        icon: volunteer,
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

// Skill categories for new Skills section
export const skillCategories = {
    fullStack: {
        title: "Full Stack Engineer",
        technologies: [
            { name: "HTML 5", icon: html },
            { name: "CSS 3", icon: css },
            { name: "JavaScript", icon: javascript },
            { name: "TypeScript", icon: typescript },
            { name: "React JS", icon: reactjs },
            { name: "Tailwind CSS", icon: tailwind },
            { name: "Next JS", icon: next },
            { name: "Node JS", icon: nodejs },
            { name: "ASP.NET Core", icon: asp },
            { name: "MongoDB", icon: mongodb },
            { name: "Git", icon: git },
            { name: "Docker", icon: docker },
            { name: "Figma", icon: figma },
            { name: "Three JS", icon: threejs },
        ]
    },
    aiMl: {
        title: "AI & Machine Learning",
        technologies: [
            { name: "Python", icon: javascript }, // Placeholder
            { name: "TensorFlow", icon: javascript }, // Placeholder
            { name: "LangChain", icon: javascript }, // Placeholder
            { name: "Machine Learning", icon: aiMl },
            { name: "Deep Learning", icon: aiMl },
            { name: "NLP", icon: aiMl },
        ]
    }
};

const experiences = [
    {
        title: "(Final Year Project- Ongoing) Adaptive AI System for Real-Time Web Attack Detection",
        company_name: "University of Moratuwa",
        icon: uni,
        iconBg: "#FFFFFF",
        date: "2025 - Ongoing",
        points: [
            "Developed an AI system to detect and classify sophisticated web-based attacks (SQLi, XSS, OS Command Injection, SSRF) in real-time.",
            "Implemented a Continual Learning framework with replay memory buffer and synthetic data generation to prevent catastrophic forgetting.",
            "Used lightweight transformer models (DistilBERT) optimized with ONNX conversion and INT8 quantization for ultra-low latency in enterprise environments.",
            "Integrated Explainable AI (XAI) techniques to provide interpretable insights for security analysts.",
            "Built parallel inference engine with human-in-the-loop validation; ambiguous patterns are routed to an interactive dashboard to refine the model iteratively.",
            "Achieved a self-evolving, transparent, and computationally efficient security defense system.",
        ],
        link: "",
        teamPhotos: [],
    },
    {
        title: "(Ongoing) AI Multi-Agent Platform R&D – Multi-Tenant Automation System",
        company_name: "Surecore & Minthrm Collaboration",
        icon: surecore,
        iconBg: "#FFFFFF",
        date: "2025 - Ongoing",
        points: [
            "Collaborating on Phase 2 of Surely Chatbot integrating multi-agent architecture using LangGraph for automation of tasks, reports, and deliverables.",
            "Working on multi-tenant system, Keycloak integration, and connecting tools like MCP.",
            "Researching and developing advanced AI features to enhance automation and task orchestration.",
        ],
        link: "",
        teamPhotos: [],
    },
    {
        title: "Surely Personal AI Chatbot",
        company_name: "Surecore.co",
        icon: surecore,
        iconBg: "#FFFFFF",
        date: "2025",
        points: [
            "Developed a RAG-based personal AI chatbot using Python, LangChain, LLMs, TTS, STT, Vector DB (Qdrant), orchestration, and ASR.",
            "Implemented features to enhance user interaction and retrieval-augmented generation pipelines.",
        ],
        link: "",
        teamPhotos: [],
    },
    {
        title: "Serendib Micro Insurance Platform - Cambodia",
        company_name: "Surecore.co",
        icon: surecore,
        iconBg: "#FFFFFF",
        date: "2025",
        points: [
            "Worked as a Full Stack Engineer developing features for the Surecore insurance product including invoices, reports, authentication, and bug fixes.",
            "Explored the full development lifecycle and microservice architecture using Angular, Spring Boot, Java, and Kubernetes.",
            "Contributed to backend and frontend development, integrating multiple modules and ensuring smooth deployments.",
        ],
        link: "",
        teamPhotos: [],
    },
    {
        title: "WSO2 Certification portal",
        company_name: "WSO2 LLC",
        icon: wso2,
        iconBg: "#FFFFFF",
        date: "2025",
        points: [
            "Worked as a Full Stack Intern gaining hands-on experience across the entire development lifecycle.",
            "Developed a certification portal using React, Redux, Ballerina, MySQL, and GraphQL.",
            "Integrated Salesforce for managing user certification data and workflows.",
            "Designed and implemented APIs with Ballerina to support dynamic frontend interactions.",
            "Contributed to frontend development with modular UI components and state management using Redux.",
        ],
        link: "https://certification.wso2.com",
        teamPhotos: [],
    },
    {
        title: "Train Booking System (Academic)",
        company_name: "University of Moratuwa",
        icon: uni,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024",
        points: [
            "Developing a Train Booking System that allows users to search for trains, select seats, and complete bookings through a user-friendly interface.",
            "Utilizing technologies like Node.js, Express, React, and MySQL.",
        ],
        link: "https://github.com/ChalanaGayan/TrainBooking",
        teamPhotos: [],
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
        link: "",
        teamPhotos: [],
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
        link: "https://github.com/ChalanaGayan/MechaPulse",
        teamPhotos: [],
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
        link: "",
        teamPhotos: [],
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
        link: "",
        teamPhotos: [],
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
        link: "https://ieeesrilankasection.github.io/IEEE-Challenge-Sphere/",
        teamPhotos: [],
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
        link: "",
        teamPhotos: [],
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
        link: "",
        teamPhotos: [],
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
