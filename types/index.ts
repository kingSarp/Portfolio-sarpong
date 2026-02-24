export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface Brand {
  name: string
  icon: string
}

export interface Service {
  id: string
  title: string
  description: string
  tags: readonly string[]
}

export interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  tags: readonly string[]
  color: string
  featured: boolean
}

export interface Stat {
  value: string
  label: string
}
