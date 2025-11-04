import type { IconMap, NavLink, Site } from '@/types';

export const SITE = {
  title: 'Miyu\'s Cyberspace',
  description:
    'This is my personal website and blog, based on astro-erudite but rewritten with starwind/ui, Svelte and bits-ui.',
  href: 'https://miyuushi.space',
  author: 'miyuushi',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Authors",
    href: "/authors",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Other",
    href: "#",
    children: [
      { label: "Action", href: "/" },
      { label: "Another action", href: "#" },
      { label: "Dropdown Submenu", href: "#" },
      { label: "404 Page", href: "/404" },
    ],
  },
];

export const SOCIAL_LINKS: NavLink[] = [
  {
    href: 'https://github.com/miyuushi',
    label: 'GitHub',
  },
  {
    href: 'mailto:miyu@miyuushi.space',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
};