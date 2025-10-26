import Link from 'next/link'

export default function MenuNavigation() {
  return (
    <div className="menubar">

      <Link href="/"><h3>Home</h3></Link>
      <Link href="/manifesto"><h3>Manifesto</h3></Link>
      <Link href="/projects"><h3>Projects</h3> </Link>
    </div>
  )
} 