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
  { name: 'Stanbic Bank',           logo: '/images/stanbic.png',       accent: '#0033a0', wide: false },
  { name: 'Meridian Port Services', logo: '/images/mps.png',            accent: '#1a9edb', wide: true  },
  { name: 'HanyPay',                logo: '/images/hanypay.png',        accent: '#e52222', wide: true  },
  { name: 'GS Foundation',          logo: null,                         accent: '#2d9a6e', wide: false },
  { name: 'CodeNova360',            logo: '/images/codenova360.png',    accent: '#38b0e0', wide: false },
  { name: 'Tradernickson',          logo: '/images/tradernickson.png',  accent: '#6c2fa0', wide: false },
] as const

// ─── Services ───────────────────────────────────────────────────
export const SERVICES = [
  {
    id: '01',
    title: 'Frontend Development',
    description:
      'Building production-grade web and mobile applications across banking, fintech, and NGO sectors using Angular, React, Next.js, and React Native — with a focus on performance, reliability, and clean UX.',
    tags: ['Angular', 'React', 'Next.js', 'React Native', 'TypeScript'],
  },
  {
    id: '02',
    title: 'Full-Stack Development',
    description:
      'End-to-end system design and delivery — from REST API architecture and CMS integration to payment gateway setup (Paystack, Hubtel) and scalable backend data layers with Supabase and Node.js.',
    tags: ['Node.js', 'Supabase', 'REST APIs', 'Paystack', 'Contentful'],
  },
  {
    id: '03',
    title: 'IT Support & Systems Engineering',
    description:
      'Hands-on IT support and systems operations across port management, live events, and enterprise environments — covering deployment, network troubleshooting, hardware setup, and incident response.',
    tags: ['Linux', 'Deployment', 'Networking', 'Monitoring', 'Troubleshooting'],
  },
  {
    id: '04',
    title: 'Cloud, Monitoring & Observability',
    description:
      'AWS-certified cloud deployments with production observability — integrating PostHog for product analytics and Sentry for real-time error monitoring, enabling data-driven decisions and rapid incident response.',
    tags: ['AWS', 'PostHog', 'Sentry', 'Supabase', 'Git'],
  },
] as const

// ─── Portfolio Projects ─────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'Forex Trading Course Platform',
    category: 'Full-Stack Dev',
    year: '2026',
    description:
      'End-to-end forex trading course platform with student self-registration, course access management, Paystack & Hubtel payment integration, Supabase backend, PostHog analytics, and Sentry monitoring.',
    tags: ['Next.js', 'Supabase', 'Paystack', 'Hubtel'],
    color: '#e6a817',
    featured: true,
    href: 'https://tradernickson.com',
  },
  {
    id: 2,
    title: 'NGO Management System',
    category: 'Full-Stack Dev',
    year: '2025',
    description:
      'Full-stack NGO management system built with Angular, TypeScript, and Contentful headless CMS, enabling non-technical staff to manage operational content.',
    tags: ['Angular', 'TypeScript', 'Contentful'],
    color: '#2d9a6e',
    featured: true,
    href: 'https://ngo-app-rho.vercel.app/',
  },
  {
    id: 3,
    title: 'Multi-Vendor E-Commerce',
    category: 'Frontend Dev',
    year: '2025',
    description:
      'Multi-vendor e-commerce platform with role-based access control for customers, vendors, and admins, powered by TanStack Query for optimized data sync.',
    tags: ['React', 'TypeScript', 'TanStack Query'],
    color: '#7c5cbf',
    featured: true,
    href: 'https://shop.hanypay.co/',
  },
  {
    id: 4,
    title: 'Feedback & Survey System',
    category: 'Full-Stack Dev',
    year: '2024',
    description:
      'Feedback and survey system with an Angular frontend and Node.js REST APIs, built at Meridian Port Services to support operational decision-making.',
    tags: ['Angular', 'Node.js', 'REST APIs'],
    color: '#e06c4a',
    featured: false,
    href: null,
  },
  {
    id: 5,
    title: 'Trash Pickup Mobile App',
    category: 'Mobile Dev',
    year: '2025',
    description:
      'React Native mobile app for scheduling and managing operational waste pickups with user authentication and real-time updates.',
    tags: ['React Native', 'Mobile', 'Real-time'],
    color: '#4a90d9',
    featured: false,
    href: null,
  },
  {
    id: 6,
    title: 'USSD Voting System',
    category: 'Full-Stack Dev',
    year: '2023',
    description:
      'USSD-based voting system used for university elections, built to handle high concurrency and deliver reliable real-time vote tallying.',
    tags: ['USSD', 'Node.js', 'High Concurrency'],
    color: '#c0392b',
    featured: false,
    href: null,
  },
] as const

// ─── Stats ──────────────────────────────────────────────────────
export const STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '8+', label: 'Companies Served' },
  { value: '1', label: 'AWS Certification' },
] as const

// ─── Skills ─────────────────────────────────────────────────────
export const SKILLS = {
  languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bash', 'Shell Scripting'],
  frontend: ['Angular', 'Next.js', 'React Native', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'MySQL', 'SQL Server', 'SQLite', 'REST APIs'],
  tools: ['Git', 'Postman', 'AWS', 'Supabase', 'PostHog', 'Sentry', 'WordPress', 'Linux'],
  ai: ['GitHub Copilot', 'Claude (Anthropic)', 'OpenAI Codex'],
} as const
