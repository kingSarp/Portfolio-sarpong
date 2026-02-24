// ─── Navigation ────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact Me', href: '#contact' },
] as const

// ─── Social Links ───────────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yaw-sarpong54',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: 'github',
  },
  {
    name: 'Twitter',
    href: 'https://x.com',
    icon: 'twitter',
  },
] as const

// ─── Brand Logos ────────────────────────────────────────────────
export const BRANDS = [
  { name: 'Stanbic Bank', icon: 'stanbic' },
  { name: 'Meridian Port Services', icon: 'mps' },
  { name: 'HanyPay', icon: 'hanypay' },
  { name: 'GS Foundation', icon: 'gsf' },
  { name: 'AfroFuture', icon: 'afrofuture' },
] as const

// ─── Services ───────────────────────────────────────────────────
export const SERVICES = [
  {
    id: '01',
    title: 'Frontend Development',
    description:
      'Building fast, accessible, and maintainable web applications with modern frameworks like Angular, React, and Next.js.',
    tags: ['Angular', 'React', 'Next.js', 'TypeScript'],
  },
  {
    id: '02',
    title: 'Full-Stack Development',
    description:
      'End-to-end application development with Node.js backends, REST APIs, database integration, and CMS solutions.',
    tags: ['Node.js', 'Express.js', 'MySQL', 'REST APIs'],
  },
  {
    id: '03',
    title: 'Technical Support & Systems',
    description:
      'Deployment, troubleshooting, system configuration, monitoring, and ensuring reliability in production environments.',
    tags: ['Linux', 'Windows Server', 'Deployment', 'Monitoring'],
  },
  {
    id: '04',
    title: 'Cloud & Deployment',
    description:
      'AWS fundamentals, cloud-hosted deployments, performance optimization, backup and restoration strategies.',
    tags: ['AWS', 'Git', 'CI/CD', 'WordPress'],
  },
] as const

// ─── Portfolio Projects ─────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'NGO Management System',
    category: 'Full-Stack Dev',
    year: '2024',
    description:
      'Full-stack NGO management system built with Angular, TypeScript, and Contentful headless CMS for non-technical content management.',
    tags: ['Angular', 'TypeScript', 'Contentful'],
    color: '#2d9a6e',
    featured: true,
  },
  {
    id: 2,
    title: 'Multi-Vendor E-Commerce',
    category: 'Frontend Dev',
    year: '2024',
    description:
      'Multi-vendor e-commerce platform with role-based access control for customers, vendors, and admins, powered by TanStack Query.',
    tags: ['React', 'TypeScript', 'TanStack Query'],
    color: '#7c5cbf',
    featured: true,
  },
  {
    id: 3,
    title: 'Feedback & Survey System',
    category: 'Full-Stack Dev',
    year: '2023',
    description:
      'Feedback and survey system with an Angular frontend and Node.js REST APIs, built at Meridian Port Services for operational insights.',
    tags: ['Angular', 'Node.js', 'REST APIs'],
    color: '#e06c4a',
    featured: false,
  },
  {
    id: 4,
    title: 'Trash Pickup Mobile App',
    category: 'Mobile Dev',
    year: '2023',
    description:
      'React Native mobile app for scheduling and managing waste pickups with user authentication and real-time updates.',
    tags: ['React Native', 'Mobile', 'Real-time'],
    color: '#4a90d9',
    featured: false,
  },
] as const

// ─── Stats ──────────────────────────────────────────────────────
export const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '5+', label: 'Companies Served' },
  { value: '1', label: 'AWS Certification' },
] as const

// ─── Skills ─────────────────────────────────────────────────────
export const SKILLS = {
  languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bash', 'Shell Scripting'],
  frontend: ['Angular', 'Next.js', 'React Native', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'MySQL', 'SQL Server', 'SQLite', 'REST APIs'],
  tools: ['Git', 'Postman', 'WordPress', 'AWS', 'Linux', 'Windows Server'],
} as const
