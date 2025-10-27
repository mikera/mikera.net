import { topics } from '../topics'

export function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }))
}

export default function ManifestoSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
