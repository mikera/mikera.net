import { topics } from '../topics'
import ManifestoPage from '../components/ManifestoPage'

export const dynamicParams = false

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ManifestoPage initialSlug={slug} />
}
