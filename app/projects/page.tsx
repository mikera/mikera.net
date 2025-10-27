import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: "Convex",
      description: "Platform for realtime decentralised economic systems and self-sovereign applications. Like blockchain, but ethical, elegant and efficient.",
      link: "https://convex.world",
      thumbnail: "/projects/Convex.png",
      tags: ["Lisp", "Convex", "Java"]
    },
    { 
      title: "core.matrix",
      description: "Numerical computing in Clojure - roughly equivalent to NumPy, with an emphasis on functional programming and flexibility to support different array implementations.",
      link: "https://github.com/mikera/core.matrix",
      tags: ["Clojure", "AI", "Numerics"]
    },
    {
      title: "mikera.net",
      description: "Personal website, featuring projects, experiments and occasional crazy ideas.",
      link: "https://mikera.net",
      tags: ["Web"]
    },
    
    {
      title: "blockgame",
      description: "Minecraft-like game in Convex! World's first fully on-chain 3D voxel game, build as a demonstration of the power of Lattice Technology.",
      link: "https://github.com/mikera/blockgame",
      thumbnail: "/projects/blockgame.jpg",
      tags: ["Games", "Convex", "Lattice"]
    },
    {
      title: "Tyrant",
      description: "Roguelike game in Java, notable for being my first semi-serious game project.",
      link: "https://github.com/mikera/tyrant",
      thumbnail: "/projects/tyrant.png",
      tags: ["Games", "Ancient", "Roguelike"]
    },
    {
      title: "Ironclad",
      description: "Steampunk-themed battle strategy game, written in Clojure. Notable for having a 100% immutable persistent game state model, and graphics assets rendered in POV-Ray.",
      link: "https://github.com/mikera/ironclad",
      thumbnail: "/projects/ironclad.jpg",
      tags: ["Games", "Strategy", "Steampunk"]
    },
    {
      title: "imagez",
      description: "Image processing library for Clojure. Useful for programmatic manipulation of images.",
      thumbnail: "/projects/imagez.png",
      link: "https://github.com/mikera/imagez",
      tags: ["Clojure", "Image Processing"]
    },{
      title: "Java Life",
      description: "Conway's Game of Life implemented in Java. A neat, very fast implementation with flexible rules.",
      link: "https://github.com/mikera/java-life",
      thumbnail: "/projects/life.png",
      tags: ["Simulation", "Conway"]
    },
    {
      title: "Open Source @ Github",
      description: "I've been writing open source code for ~30 years now, mostly out of interest and a philosophical commitment to free software. A lot of my stuff is here.",
      link: "https://github.com/mikera",
      tags: ["Active", "OSS"]
    }

  ]

  return (
    <div>
      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>

    </div>
  )
} 

function getTagColor(tag: string): string {
  // Simple hash function
  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  // Generate hue between 0-360
  const hue = Math.abs(hash) % 360
  
  // Pastel colors: high lightness (85-95%) and low-medium saturation (30-50%)
  const lightness = 60 + (Math.abs(hash) % 10) // 85-95%
  const saturation = 5 + (Math.abs(hash) % 5)  // 30-50%
  
  return `oklch(${lightness}% ${saturation / 100} ${hue})`
}

function Tag({ tag }: { tag: string }) {
  const backgroundColor = getTagColor(tag)
  
  return (
      <b className="tag" 
      style={{ backgroundColor }}>{tag}</b>
  )
}


interface ProjectProps {
  title: string
  description: string
  link: string
  tags: string[]
  thumbnail?: string
}

function Project({ title, description, link, tags, thumbnail }: ProjectProps) {
  const isExternal = link.startsWith('http')
  
  const linkProps = isExternal 
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' } 
    : { href: link }
  
  return (
    <div className="project" id={title}>
      <div>
      {isExternal ? (
        <a {...linkProps}>
          <h4>{title}</h4>
        </a>
      ) : (
        <Link href={link}>
          <h4>{title}</h4>
        </Link>
      )}
      </div>
      
      <div className="project-content">
        <p>{description}</p>
          {thumbnail && (
            <div>
              {isExternal ? (
                <a {...linkProps}>
                  <img src={thumbnail} alt={title} className="project-thumbnail" />
                </a>
              ) : (
                <Link href={link}>
                  <img src={thumbnail} alt={title} className="project-thumbnail" />
                </Link>
              )}
            </div>
        )}
      </div>
      
      <div className="project-tags">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  )
} 