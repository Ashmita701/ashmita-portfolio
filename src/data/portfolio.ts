export interface PersonalInformation {
  name: string
  role: string
  experience: string
  location: string
  email: string
  phone: string
  githubUsername: string
}

export interface TechnicalSkillGroup {
  category: string
  skills: string[]
}

export interface NavigationItem {
  label: string
  href: string
}

export interface AboutHighlight {
  title: string
  description: string
}

export interface ExperienceEntry {
  company: string
  title: string
  date: string
  isCurrent: boolean
  location?: string
  responsibilities: string[]
}

export type ProjectVisual = 'lms' | 'health' | 'marketplace' | 'social' | 'mobile'

export interface ProjectEntry {
  name: string
  description: string
  contributions: string[]
  technologies: string[]
  visual: ProjectVisual
}

export interface CertificationEntry {
  name: string
  issuer: string
  year: string
  credentialUrl: string
}

export interface EducationEntry {
  degree: string
  institution: string
  affiliation?: string
  period: string
}

export interface ContactLinks {
  email: string
  phone: string
  githubUsername: string
  linkedinUrl: string
}

export interface PortfolioData {
  personal: PersonalInformation
  professionalSummary: string
  technicalSkills: TechnicalSkillGroup[]
  skillIconUrls: Record<string, string>
  highlightedTechnologies: string[]
  technologyShowcase: string[]
  aboutHighlights: AboutHighlight[]
  experience: ExperienceEntry[]
  projects: ProjectEntry[]
  certifications: CertificationEntry[]
  education: EducationEntry[]
  softSkills: string[]
  socialContactLinks: ContactLinks
  navigation: NavigationItem[]
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ashmita Gorkhali",
    role: "Full Stack Developer",
    experience: "6+ years",
    location: "Sanepa, Lalitpur, Nepal",
    email: "ashmi.stha11@gmail.com",
    phone: "+977-9849826008",
    githubUsername: "ashmita-gorkhali",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  highlightedTechnologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "AWS",
    "Docker",
  ],
  technologyShowcase: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "React Native",
  ],
  aboutHighlights: [
    {
      title: "Frontend development",
      description:
        "Responsive, high-performance interfaces with React, Next.js, TypeScript, and React Native.",
    },
    {
      title: "Backend & API development",
      description:
        "Secure backend services and RESTful APIs with Node.js, ExpressJS, and NestJS.",
    },
    {
      title: "Database experience",
      description:
        "Application data solutions with PostgreSQL, MongoDB, and MySQL.",
    },
    {
      title: "AWS & cloud",
      description:
        "Cloud-based application services using AWS EC2, S3, Lambda, and RDS.",
    },
    {
      title: "Performance optimization",
      description:
        "Thoughtful optimization for responsive, reliable application experiences.",
    },
    {
      title: "Architecture",
      description:
        "Scalable web applications and backend services designed around clear system boundaries.",
    },
    {
      title: "Team collaboration",
      description:
        "Cross-functional collaboration focused on delivering high-quality applications.",
    },
    {
      title: "Leadership & mentoring",
      description:
        "Knowledge sharing and mentoring that helps teams grow together.",
    },
  ],
  experience: [
    {
      company: "Fusemachines",
      title: "Software Engineer Level III",
      date: "January 2023 – Present",
      isCurrent: true,
      location: "Nepal",
      responsibilities: [
        "Developed and enhanced features for an AI-powered Learning Management System, working across frontend and backend using React, TypeScript, Node.js, and NestJS, including online examination and proctoring modules.",
        "Contributed to architectural design and development of LMS features, designing scalable application flows, backend services, and RESTful APIs.",
        "Containerized applications and development environments using Docker.",
        "Led and mentored junior engineers and interns.",
        "Collaborated with senior engineers, product managers, and designers.",
        "Used AI-assisted development tools such as GitHub Copilot and Claude to accelerate development, improve code quality, debugging, and code reviews.",
      ],
    },
    {
      company: "Asterdio Inc.",
      title: "Mid-Software Engineer",
      date: "December 2021 – January 2023",
      isCurrent: false,
      responsibilities: [
        "Built an online food delivery website and admin panel using the MERN stack.",
        "Developed responsive applications using HTML, CSS, JavaScript, React, and Next.js.",
        "Managed and trained interns in frontend development tools and frameworks.",
        "Developed mobile applications using React Native.",
      ],
    },
    {
      company: "Pro-mech Minds and Engineering Service",
      title: "Software Engineer",
      date: "January 2020 – November 2021",
      isCurrent: false,
      responsibilities: [
        "Built an e-commerce website and various web applications using HTML, CSS, JavaScript, React, and Express.js.",
        "Developed mobile applications using React Native.",
        "Researched and learned new technologies and frontend best practices.",
      ],
    },
  ],
  projects: [
    {
      name: "Fuse LMS",
      description:
        "AI-powered Learning Management System enabling institutions to create and manage courses and programs, with dedicated workflows for learners and instructors.",
      contributions: [
        "Developed and enhanced core LMS features including course/program management, learner and instructor workflows, online examinations, and proctoring.",
        "Contributed to architecture and design across frontend, backend services, APIs, and database-driven features.",
        "Collaborated with engineering and product teams.",
        "Troubleshot and optimized the application.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
      visual: "lms",
    },
    {
      name: "UpaCare Health",
      description:
        "Web-based platform that enables users to book appointments with health professionals.",
      contributions: [
        "Developed and maintained applications within a monorepo for doctors, admin, and organization admin.",
        "Integrated Zoom video calls allowing multiple users and an AI bot to participate in sessions.",
        "Contributed to architecture, performance optimization, debugging, and production-ready features.",
        "Built organization dashboards for monitoring healthcare professional activities, performance metrics, and appointment data.",
      ],
      technologies: [
        "React.js",
        "NextJS",
        "NestJS",
        "Amazon Cognito",
        "PostgreSQL",
        "SASS",
      ],
      visual: "health",
    },
    {
      name: "BuyParts24",
      description:
        "Online platform for finding spare parts for different car makes, models and versions in UAE. Multi-vendor marketplace for car parts.",
      contributions: [
        "Optimized and refactored existing codebase.",
        "Developed and enhanced features.",
        "Integrated third-party APIs.",
        "Implemented UI improvements.",
      ],
      technologies: ["React", "Node.js/Express", "MongoDB", "TypeScript"],
      visual: "marketplace",
    },
    {
      name: "Tulikaa",
      description:
        "Online platform for artists and art lovers with e-commerce functionality, feed, chat, and recommendations.",
      contributions: [
        "Developed and enhanced real-time chat functionality.",
        "Supported multiple user conversations using Socket.IO.",
        "Contributed to feed and recommendation features.",
      ],
      technologies: ["React", "MongoDB", "Express.js"],
      visual: "social",
    },
    {
      name: "Lance Camper",
      description: "Mobile application developed using React Native.",
      contributions: [
        "Designed and implemented mobile user interfaces.",
        "Integrated RESTful APIs.",
      ],
      technologies: ["React Native", "Laravel"],
      visual: "mobile",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Developer – Associate (DVA-C02)",
      issuer: "Amazon Web Services",
      year: "2026",
      credentialUrl:
        "https://www.credly.com/badges/8acb1db3-2b7b-4a1c-8971-14c5b3d54afc",
    },
  ],
  education: [
    {
      degree: "Bachelors in Computer Engineering",
      institution: "Kathmandu Engineering College",
      affiliation: "Tribhuvan University, IOE",
      period: "2015-2019",
    },
    {
      degree: "10+2 High School",
      institution: "Kathmandu Model College",
      affiliation: "HSEB Board",
      period: "2013-2015",
    },
    {
      degree: "School Leaving Certificate (SLC)",
      institution: "Little Blossoms Public School",
      period: "2013",
    },
  ],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Leadership & Mentoring",
    "Analytical Thinking",
    "Time Management",
    "Adaptability",
    "Decision Making",
  ],
  socialContactLinks: {
    email: "ashmi.stha11@gmail.com",
    phone: "+977-9849826008",
    githubUsername: "ashmita-gorkhali",
    linkedinUrl: "https://www.linkedin.com/in/ashmita-gorkhali",
  },
  professionalSummary:
    "Full Stack Developer building scalable, high-performance web applications. I specialize in React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, and AWS, with a strong focus on clean architecture, thoughtful user experiences, and reliable backend systems. I enjoy turning complex problems into simple, impactful digital solutions.",
  technicalSkills: [
    {
      category: "Languages and Frameworks",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "React Native",
        "NestJS",
        "HTML",
        "SASS",
        "CSS",
        "Express.js",
        "Tailwind",
        ".NET",
        "Redux",
        "Apollo GraphQL",
        "React Query",
        "Zustand",
      ],
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "UI Libraries",
      skills: ["Bootstrap", "Ant Design", "Material UI", "Tailwind CSS", "Antd"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "Jenkins", "Cypress", "Postman", "VS Code", "GitLab", "GitHub", "Jira"],
    },
    {
      category: "Cloud",
      skills: ["AWS (EC2, S3, Lambda, RDS)"],
    },
  ],
  skillIconUrls: {
    HTML: "https://cdn.sanity.io/images/1wtan84f/production/b07dfa7a646d244104492537459e51988c7fbf75-128x128.svg",
    CSS: "https://cdn.sanity.io/images/1wtan84f/production/033444a2285da2b05cb905d50625df49d5e2b9e0-2500x2500.svg",
    JavaScript: "https://cdn.sanity.io/images/1wtan84f/production/70a5dfff86ae9835722818147d482bb526e25f60-2500x2500.svg",
    React: "https://cdn.sanity.io/images/1wtan84f/production/a03bbb8732e2931c178b8a7342a9677f9b6c7722-24x24.svg",
    "React Native": "https://cdn.simpleicons.org/react/61DAFB",
    TypeScript: "https://cdn.sanity.io/images/1wtan84f/production/745de2edd05e2e5d8c348b2d6b2bcfd153f1dd48-128x128.svg",
    "Next.js": "https://cdn.sanity.io/images/1wtan84f/production/94dbae29df802e9fd39dde0fb7ca4721fc493847-64x64.svg",
    NestJS: "https://cdn.simpleicons.org/nestjs/E0234E",
    "Express.js": "https://cdn.simpleicons.org/express/000000",
    ".NET": "https://cdn.simpleicons.org/dotnet/512BD4",
    Redux: "https://cdn.sanity.io/images/1wtan84f/production/644b854a24d20afff930306be3a7c8cf281a44dc-256x244.svg",
    "Apollo GraphQL": "https://cdn.sanity.io/images/1wtan84f/production/80ee839dc73f02b57ab43be5583630b278483acb-2500x2430.svg",
    "React Query": "https://cdn.sanity.io/images/1wtan84f/production/7e23ef5a07118acdec80f8f435363eee3be85a4b-256x230.svg",
    SASS: "https://cdn.sanity.io/images/1wtan84f/production/ceb23d9a90731db39c0b728a74e74abc9a513cb7-2500x1875.svg",
    Zustand: "https://www.punampudasaini.com.np/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1wtan84f%2Fproduction%2F6fe8ee4d57cb1a2baac8bad27f9dd6d0cc60d912-800x467.png&w=96&q=75",
    "Tailwind CSS": "https://cdn.sanity.io/images/1wtan84f/production/4c70d56e5b98c875ee335dce4678cfe10d69c4db-24x24.svg",
    Tailwind: "https://cdn.sanity.io/images/1wtan84f/production/4c70d56e5b98c875ee335dce4678cfe10d69c4db-24x24.svg",
    Bootstrap: "https://cdn.simpleicons.org/bootstrap/7952B3",
    "Ant Design": "https://cdn.simpleicons.org/antdesign/0170FE",
    "Material UI": "https://cdn.sanity.io/images/1wtan84f/production/eaf4898372354f1d7d2acc9c5f09595dfd2c854c-2500x1985.svg",
    Antd: "https://cdn.sanity.io/images/1wtan84f/production/2666e79b6390bb37242d17ea9294ce0a3acb6790-256x256.svg",
    MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
    MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
    PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
    Docker: "https://cdn.simpleicons.org/docker/2496ED",
    Git: "https://cdn.simpleicons.org/git/F05032",
    Jenkins: "https://cdn.simpleicons.org/jenkins/D24939",
    Cypress: "https://cdn.simpleicons.org/cypress/69D3A7",
    "VS Code": "https://cdn.sanity.io/images/1wtan84f/production/167b65ed768f65634e01a1e732731ad5bd822d0e-2500x2455.svg",
    GitLab: "https://cdn.sanity.io/images/1wtan84f/production/7f4d20ee371b7ac96a290bf0a5498ca4f643db04-2500x2305.svg",
    GitHub: "https://cdn.sanity.io/images/1wtan84f/production/6345915dcf2e965035f1b5205459b4b01f755fa5-2500x2432.svg",
    Jira: "https://cdn.sanity.io/images/1wtan84f/production/0c3e79fc5cc3179fd012797085550e168469e31f-2500x2500.svg",
    Postman: "https://cdn.sanity.io/images/1wtan84f/production/7e9dd0a9b0626292f7bed2f4ff3218236e2b41c1-2500x2500.svg",
    "AWS (EC2, S3, Lambda, RDS)": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg",
  },
};
