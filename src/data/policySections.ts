export interface PolicySection {
  slug: string
  title: string
  description: string
}

// The ordered set of policy subsections. Add, reorder or rename freely —
// pages and the sidebar are generated from this list. A policy joins a section
// via its `section:` frontmatter (matching a slug below).
export const policySections: PolicySection[] = [
  {
    slug: 'economy',
    title: 'Economy',
    description: 'Taxation, markets, money and work — the foundations of fair, efficient exchange.'
  },
  {
    slug: 'environment',
    title: 'Environment',
    description: 'Pricing externalities and protecting the commons for everyone.'
  },
  {
    slug: 'law',
    title: 'Law & Justice',
    description: 'Enforcing the golden rule, and telling unfairness apart from misfortune.'
  },
  {
    slug: 'liberty',
    title: 'Liberty & Rights',
    description: 'Speech, thought and belief — and the limits of state power over the individual.'
  },
  {
    slug: 'governance',
    title: 'Governance',
    description: 'How collective decisions are made and power is held to account.'
  },
  {
    slug: 'trade',
    title: 'Trade & Foreign Policy',
    description: 'Fair exchange between nations, without exporting costs to the world.'
  }
]

export function sectionTitle(slug: string): string {
  return policySections.find(s => s.slug === slug)?.title ?? slug
}
