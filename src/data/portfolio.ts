// ============================================================
// DATA FILE — Edit this to update all portfolio content
// ============================================================

export const siteConfig = {
  name: 'Muhammad Maaz Rehan',
  title: 'Django Backend Developer',
  location: 'Karachi, Pakistan',
  email: 'maaz.rehan2020@gmail.com',
  github: 'https://github.com/Maaz-Bin-Haider',
  linkedin: 'https://www.linkedin.com/in/maazrehan',
  cvPath: 'https://drive.google.com/uc?export=download&id=19j2IqgB3eoq_S82zjcLoxWjA8jxmrCD9',
  seo: {
    description:
      'Muhammad Maaz Rehan — Django Backend Developer & Software Engineer based in Karachi. Building scalable APIs, PostgreSQL systems, and AWS-deployed production applications.',
    keywords:
      'Django developer, backend engineer, Python, PostgreSQL, AWS, REST API, Karachi, Pakistan',
  },
};

export const skills = [
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'cyan',
    items: [
      { name: 'Python', level: 92 },
      { name: 'Django', level: 90 },
      { name: 'Django REST Framework', level: 88 },
      { name: 'FastAPI', level: 72 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'blue',
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Django ORM', level: 90 },
      { name: 'Firebase Firestore', level: 70 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    color: 'violet',
    items: [
      { name: 'AWS EC2 (Ubuntu)', level: 78 },
      { name: 'Nginx', level: 75 },
      { name: 'Gunicorn', level: 75 },
      { name: 'Git / GitHub', level: 88 },
    ],
  },
  {
    category: 'Automation & Scraping',
    icon: '🤖',
    color: 'emerald',
    items: [
      { name: 'Selenium', level: 82 },
      { name: 'BeautifulSoup', level: 85 },
      { name: 'Requests', level: 90 },
    ],
  },
  {
    category: 'Frontend (Supporting)',
    icon: '🎨',
    color: 'orange',
    items: [
      { name: 'HTML / CSS', level: 78 },
      { name: 'JavaScript', level: 70 },
      { name: 'AJAX', level: 68 },
    ],
  },
];

export const experience = [
  {
    company: 'Swiss Tech Global',
    role: 'Software Developer',
    period: 'Jan 2025 – Present',
    location: 'Remote / Karachi',
    type: 'Full-time',
    highlights: [
      'Designed and developed a full-featured Accounting & Inventory Management System using Django and PostgreSQL, handling real financial workflows end-to-end.',
      'Built RESTful APIs consumed by frontend clients, implementing secure authentication, role-based access control, and data validation layers.',
      'Deployed production applications on AWS EC2 (Ubuntu) using Nginx as a reverse proxy and Gunicorn as WSGI server — achieving 99.9% uptime.',
      'Engineered dynamic financial reporting modules generating profit/loss statements, inventory valuations, and audit logs.',
      'Maintained strict data integrity constraints across relational schemas with complex multi-table transactions and rollback strategies.',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'AWS EC2', 'Nginx', 'Gunicorn', 'REST API'],
  },
];

export const education = [
  {
    institution: 'University',
    degree: 'BS Software Engineering',
    period: '2023 – 2027 (Expected)',
    location: 'Karachi, Pakistan',
    status: 'In Progress',
  },
];

export const projects = [
  {
    id: 'accounting-system',
    title: 'Accounting & Inventory Management System',
    description:
      'A production-grade ERP-style system built for real accounting workflows. Features double-entry bookkeeping, inventory tracking, automated financial report generation, and multi-user role management.',
    longDescription:
      'Built with Django and PostgreSQL, this system handles complete accounting workflows including ledgers, journals, trial balance, P&L statements, and inventory valuation. Deployed on AWS EC2 with Nginx + Gunicorn, serving real business data with strict data integrity.',
    thumbnail: null,
    tags: ['Python', 'Django', 'PostgreSQL', 'AWS EC2', 'Nginx', 'REST API', 'JavaScript'],
    github: 'https://github.com/Maaz-Bin-Haider',
    demo: null,
    video: null,
    featured: true,
    highlights: [
      'Double-entry bookkeeping engine',
      'Automated P&L and balance sheet generation',
      'Role-based access control (Admin / Accountant / Viewer)',
      'AWS EC2 production deployment',
      'Inventory valuation with FIFO costing',
    ],
  },
  {
    id: 'price-tracker',
    title: 'Web Scraping & Price Tracking System',
    description:
      'Automated price tracking system that monitors e-commerce products across multiple platforms, stores historical data in PostgreSQL, and sends alerts when price thresholds are crossed.',
    longDescription:
      'Built with Selenium and BeautifulSoup for dynamic & static page scraping. Runs on scheduled intervals using Python\'s task scheduling. All data is persisted in PostgreSQL with trend analysis and delta reporting.',
    thumbnail: null,
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Requests', 'Automation'],
    github: 'https://github.com/Maaz-Bin-Haider',
    demo: null,
    video: null,
    featured: true,
    highlights: [
      'Multi-platform scraping (static + dynamic pages)',
      'Scheduled automation with configurable intervals',
      'Price history charts and trend analysis',
      'Email / threshold alert system',
      'Anti-bot evasion with proxy rotation support',
    ],
  },
];
