export type Site = {
  title: string
  description: string
  href: string
  author: string
  locale: string
  featuredPostCount: number
  postsPerPage: number
}

export type NavLink = {
  href: string
  label: string
  badge?: boolean
  children?: NavLink[]
}

export type IconMap = {
  [key: string]: string
}