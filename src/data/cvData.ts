import type { SkillCategory, Project, Education, ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  name: "Nguyen Hoang Sang",
  email: "h.sangg.r@gmail.com",
  phone: "0559496637",
  github: "https://github.com/piin-nhs",
  linkedin: "https://www.linkedin.com/in/piin-nhs/",
  location: "Ho Chi Minh City, Vietnam",
  cvDownloadUrl: "/NguyenHoangSang_FullstackDeveloperIntern_CV.pdf" // Static public asset
};

export const educationInfo: Education = {
  school: "Industrial University of Ho Chi Minh City",
  degree: "Bachelor of Software Engineering",
  major: "Faculty of Information Technology",
  gpa: "3.12 / 4.0",
  duration: "2022 – Present",
  expectedGraduation: "2027",
  coursework: [
    "Object-Oriented Programming",
    "Emerging Technologies",
    "Application UI Development",
    "Web Application Development"
  ],
  awards: [
    "Academic Encouragement Scholarship 2023–2024 - Excellent Academic Performance"
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "HTML5" },
      { name: "CSS3" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "React Router" },
      { name: "Framer Motion" },
      { name: "Chart.js" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Java Spring Boot" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Spring Security" },
      { name: "Spring Data JPA" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MariaDB" },
      { name: "MongoDB" },
      { name: "MSSQL" },
      { name: "Database Design" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "Redis (Caching/Session)" },
      { name: "RabbitMQ (Message Broker)" },
      { name: "AWS (EC2, S3, ECR, SSM)" },
      { name: "Docker" }
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git & GitHub" },
      { name: "GitHub Actions (CI/CD)" },
      { name: "RESTful APIs" },
      { name: "Socket.IO" },
      { name: "LiveKit SDK (WebRTC)" },
      { name: "JWT & OAuth2" }
    ]
  }
];

export const projectsInfo: Project[] = [
  {
    title: "Riff — Realtime OTT Chat Platform",
    role: "Full-stack Developer (Chat Module Core)",
    domain: "Real-time Communication, Distributed Systems, Media Streaming",
    duration: "May 2026 – June 2026",
    description: "Co-engineered a production-grade, microservices-based OTT messaging application composed of 7 decoupled infrastructure blocks (API Gateway, Auth, User, Notification, Media, Chat, Analytic). Personally built the full-stack chat service mesh to replace basic monolithic polling with a fluid low-latency WebSocket communication layers.",
    technologies: [
      "React", "TypeScript", "Vite", "Tailwind CSS", "Socket.IO", "LiveKit SDK", "Node.js",
      "Express", "MongoDB", "Redis", "RabbitMQ", "Docker", "AWS (EC2, S3, ECR, SSM)", "GitHub Actions"
    ],
    responsibilities: [
      "Developed a highly responsive client workspace with interactive views for nested conversation trees, dynamic message reaction bubbles, user typing indicators, and real-time active session overlays.",
      "Engineered the real-time Chat microservice utilizing Node.js, Express, and Socket.IO, building schemas for granular query routing over historical chat data.",
      "Designed and integrated an abstract object storage layer using AWS S3 to securely store and serve heavy multi-format user attachments, files, and media links within chat channels.",
      "Orchestrated asynchronous messaging pipelines using RabbitMQ exchanges and queues, decoupling computationally intensive notification tasks from the core network request cycle.",
      "Leveraged Redis alongside the Socket.IO Redis Adapter to maintain cross-server WebSocket session synchronization and cluster high availability.",
      "Integrated LiveKit WebRTC SDK webhooks and Client SDK to manage call session modals, token mappings, media stream renegotiations, and error-tolerant reconnect protocols."
    ],
    achievements: [
      "Decoupled a complex real-time messaging pipeline into independent microservices, achieving strict fault isolation and cluster high availability across backend instances.",
      "Optimized component re-render overhead across deep, nested messaging lists, maintaining 60 FPS scrolling capabilities even during heavy, concurrent real-time socket events.",
      "Delivered an error-tolerant WebRTC reconnection state modal that gracefully catches media network interruptions, slashing sudden active user call drops.",
      "Eliminated server SSH vulnerabilities by orchestrating deployment through AWS SSM webhooks, cutting delivery operations to a completely automated 3-minute cycle."
    ],
    githubFront: "https://github.com/piin-nhs",
    githubBack: "https://github.com/piin-nhs",
    demo: "https://github.com/piin-nhs" // Replace with live demo link if active
  },
  {
    title: "Shop Perfume — Full-stack E-commerce Platform",
    role: "Full-stack Developer",
    domain: "Enterprise RESTful APIs, Secure Transaction Ledger, Financial Webhooks",
    duration: "December 2025 – May 2026",
    description: "Engineered a full-featured e-commerce enterprise infrastructure containing a public customer storefront, an embedded interactive financial reporting office dashboard, and asynchronous payment ledger verifications.",
    technologies: [
      "React 19", "TypeScript", "Vite", "Tailwind CSS", "Chart.js", "Java 17", "Spring Boot 3",
      "Spring Security", "Spring Data JPA", "MariaDB", "Redis", "Cloudinary", "SePay Gateway"
    ],
    responsibilities: [
      "Built modular backend micro-architectures using Java 17 and Spring Boot 3, mapping business domains for dynamic catalogs, secure shopping checkouts, and conditional coupon engines via Spring Data JPA.",
      "Enforced a zero-trust stateless security topology by configuring Spring Security filters to validate custom JSON Web Tokens (JWT) side-by-side with Google OAuth2 single sign-on.",
      "Implemented automated instant order confirmations by coding an API webhook controller that processes real-time transaction payloads pushed from the SePay gateway.",
      "Designed a responsive administrative workspace using React 19 and Chart.js to translate complex relational metrics into visual turnover analytics, packing custom rendering tools for Excel and PDF exports.",
      "Leveraged Redis distributed caching layers over expensive relational read calculations, preventing memory bottlenecks on the primary MariaDB node.",
      "Injected fluid motion transitions and micro-animations via Framer Motion to maximize user engagement across persistent carts, sliding menu docks, and order status tracking sheets."
    ],
    achievements: [
      "Achieved 100% transaction processing automation via SePay webhook listeners, completely eliminating manual ledger balancing chores.",
      "Significantly decreased page render latency by caching heavy product queries on memory stores, preserving database integrity during simulation bursts.",
      "Significantly reduced initial page bundle latency by establishing clean routing code-splitting boundaries and asset lazy-loading paths, preserving client-side load performance.",
      "Achieved a 100% pixel-perfect mobile-responsive deployment, enforcing strict user experience consistency across diverse Android, iOS, and desktop viewports."
    ],
    github: "https://github.com/piin-nhs",
    demo: "https://github.com/piin-nhs"
  }
];
