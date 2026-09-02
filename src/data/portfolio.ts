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
}

export interface PortfolioData {
  personal: PersonalInformation
  professionalSummary: string
  technicalSkills: TechnicalSkillGroup[]
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
    name: 'Ashmita Gorkhali',
    role: 'Full Stack Developer',
    experience: '6+ years',
    location: 'Sanepa, Lalitpur, Nepal',
    email: 'ashmi.stha11@gmail.com',
    phone: '+977-9849826008',
    githubUsername: 'ashmita-gorkhali',
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  highlightedTechnologies: [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'AWS',
  ],
  technologyShowcase: [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git',
    'React Native',
  ],
  aboutHighlights: [
    {
      title: 'Frontend development',
      description: 'Responsive, high-performance interfaces with React, Next.js, TypeScript, and React Native.',
    },
    {
      title: 'Backend & API development',
      description: 'Secure backend services and RESTful APIs with Node.js, ExpressJS, and NestJS.',
    },
    {
      title: 'Database experience',
      description: 'Application data solutions with PostgreSQL, MongoDB, and MySQL.',
    },
    {
      title: 'AWS & cloud',
      description: 'Cloud-based application services using AWS EC2, S3, Lambda, and RDS.',
    },
    {
      title: 'Performance optimization',
      description: 'Thoughtful optimization for responsive, reliable application experiences.',
    },
    {
      title: 'Architecture',
      description: 'Scalable web applications and backend services designed around clear system boundaries.',
    },
    {
      title: 'Team collaboration',
      description: 'Cross-functional collaboration focused on delivering high-quality applications.',
    },
    {
      title: 'Leadership & mentoring',
      description: 'Knowledge sharing and mentoring that helps teams grow together.',
    },
  ],
  experience: [
    {
      company: 'Fusemachines',
      title: 'Software Engineer Level III',
      date: 'January 2023 – Present',
      isCurrent: true,
      location: 'Nepal',
      responsibilities: [
        'Developed and enhanced features for an AI-powered Learning Management System, working across frontend and backend using React, TypeScript, Node.js, and NestJS, including online examination and proctoring modules.',
        'Contributed to architectural design and development of LMS features, designing scalable application flows, backend services, and RESTful APIs.',
        'Containerized applications and development environments using Docker.',
        'Led and mentored junior engineers and interns.',
        'Collaborated with senior engineers, product managers, and designers.',
        'Used AI-assisted development tools such as GitHub Copilot and Claude to accelerate development, improve code quality, debugging, and code reviews.',
      ],
    },
    {
      company: 'Asterdio Inc.',
      title: 'Mid-Software Engineer',
      date: 'December 2021 – January 2023',
      isCurrent: false,
      responsibilities: [
        'Built an online food delivery website and admin panel using the MERN stack.',
        'Developed responsive applications using HTML, CSS, JavaScript, React, and Next.js.',
        'Managed and trained interns in frontend development tools and frameworks.',
        'Developed mobile applications using React Native.',
      ],
    },
    {
      company: 'Pro-mech Minds and Engineering Service',
      title: 'Software Engineer',
      date: 'January 2020 – November 2021',
      isCurrent: false,
      responsibilities: [
        'Built an e-commerce website and various web applications using HTML, CSS, JavaScript, React, and Express.js.',
        'Developed mobile applications using React Native.',
        'Researched and learned new technologies and frontend best practices.',
      ],
    },
  ],
  projects: [
    {
      name: 'Fuse LMS',
      description: 'AI-powered Learning Management System enabling institutions to create and manage courses and programs, with dedicated workflows for learners and instructors.',
      contributions: [
        'Developed and enhanced core LMS features including course/program management, learner and instructor workflows, online examinations, and proctoring.',
        'Contributed to architecture and design across frontend, backend services, APIs, and database-driven features.',
        'Collaborated with engineering and product teams.',
        'Troubleshot and optimized the application.',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      visual: 'lms',
    },
    {
      name: 'UpaCare Health',
      description: 'Web-based platform that enables users to book appointments with health professionals.',
      contributions: [
        'Developed and maintained applications within a monorepo for doctors, admin, and organization admin.',
        'Integrated Zoom video calls allowing multiple users and an AI bot to participate in sessions.',
        'Contributed to architecture, performance optimization, debugging, and production-ready features.',
        'Built organization dashboards for monitoring healthcare professional activities, performance metrics, and appointment data.',
      ],
      technologies: ['React.js', 'NextJS', 'NestJS', 'Amazon Cognito', 'PostgreSQL', 'SASS'],
      visual: 'health',
    },
    {
      name: 'BuyParts24',
      description: 'Online platform for finding spare parts for different car makes, models and versions in UAE. Multi-vendor marketplace for car parts.',
      contributions: [
        'Optimized and refactored existing codebase.',
        'Developed and enhanced features.',
        'Integrated third-party APIs.',
        'Implemented UI improvements.',
      ],
      technologies: ['React', 'Node.js/Express', 'MongoDB', 'TypeScript'],
      visual: 'marketplace',
    },
    {
      name: 'Tulikaa',
      description: 'Online platform for artists and art lovers with e-commerce functionality, feed, chat, and recommendations.',
      contributions: [
        'Developed and enhanced real-time chat functionality.',
        'Supported multiple user conversations using Socket.IO.',
        'Contributed to feed and recommendation features.',
      ],
      technologies: ['React', 'MongoDB', 'Express.js'],
      visual: 'social',
    },
    {
      name: 'Lance Camper',
      description: 'Mobile application developed using React Native.',
      contributions: ['Designed and implemented mobile user interfaces.', 'Integrated RESTful APIs.'],
      technologies: ['React Native', 'Laravel'],
      visual: 'mobile',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer – Associate (DVA-C02)',
      issuer: 'Amazon Web Services',
      year: '2026',
    },
  ],
  education: [
    {
      degree: 'Bachelors in Computer Engineering',
      institution: 'Kathmandu Engineering College',
      affiliation: 'Tribhuvan University, IOE',
      period: '2015-2019',
    },
    {
      degree: '10+2 High School',
      institution: 'Kathmandu Model College',
      affiliation: 'HSEB Board',
      period: '2013-2015',
    },
    {
      degree: 'School Leaving Certificate (SLC)',
      institution: 'Little Blossoms Public School',
      period: '2013',
    },
  ],
  softSkills: [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Leadership & Mentoring',
    'Analytical Thinking',
    'Time Management',
    'Adaptability',
    'Decision Making',
  ],
  socialContactLinks: {
    email: 'ashmi.stha11@gmail.com',
    phone: '+977-9849826008',
    githubUsername: 'ashmita-gorkhali',
  },
  professionalSummary:
    'Full Stack Developer with 6+ years of experience building scalable web applications and RESTful APIs using React, Next.js, TypeScript, Node.js, ExpressJS and NestJS. Experienced in designing responsive, high-performance applications, developing secure backend services, and optimizing application performance. Strong expertise in JavaScript, React, PostgreSQL, and AWS Cloud. Passionate about building user-focused solutions and collaborating with cross-functional teams to deliver high-quality applications.',
  technicalSkills: [
    {
      category: 'Languages and Frameworks',
      skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native', 'NestJS', 'HTML5', 'SASS', 'CSS3', 'Express.js', 'Tailwind', '.NET'],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      category: 'UI Libraries',
      skills: ['Bootstrap', 'Ant Design', 'Material UI', 'Tailwind CSS'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'Jenkins', 'Cypress', 'Postman'],
    },
    {
      category: 'Cloud',
      skills: ['AWS (EC2, S3, Lambda, RDS)'],
    },
  ],
}
