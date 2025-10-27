import Link from 'next/link'

export default function MenuNavigation() {
  return (
    <div className="menubar">

      <h3><Link href="/">Home</Link></h3>
      <h3><Link href="/manifesto">Manifesto</Link></h3>
      <h3><Link href="/projects">Creations</Link></h3>
    </div>
  )
} 