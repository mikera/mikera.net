
export default function Projects() {
  const projects = [
    {
      title: "Convex",
      description: "Platform for realtime decentralised economic systems and self-sovereign applications. Like blockchain, but more ethical, elegant and efficient.",
      link: "https://convex.world",
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
      description: "Personal website, featuring projects, experiments and occasional crazy ideas. Also my attempt to get back into web development after a long hiatus.",
      link: "https://mikera.net",
      tags: ["Web"]
    },
    {
      title: "Open Source @ Github",
      description: "I've been writing open source code for ~30 years now, mostly out of interest and a philosophical commitment to free software. A lot of my stuff is here.",
      link: "https://github.com/mikera",
      tags: ["Active", "OSS"]
    },
    {
      title: "Tyrant",
      description: "Roguelike game in Java, notable for being my first semi-serious game project.",
      link: "https://github.com/mikera/tyrant",
      tags: ["Games", "Ancient", "Roguelike"]
    },
    {
      title: "Ironclad",
      description: "Steampunk-themed battle strategy game, written in Clojure. Notable for having a 100% immutable persistent game state model.",
      link: "https://github.com/mikera/ironclad",
      tags: ["Games", "Strategy", "Steampunk"]
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
}

function Project({ title, description, link, tags }: ProjectProps) {
  return (
    <div className="project" id={title}>
      <div>
      <a href={link}>
        <h4>{title}</h4> 
      </a>
      </div>
      
      <p>{description}</p>
      
      <div className="project-tags">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  )
} 