export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "This website built with Next.js 15, TypeScript, and Tailwind CSS. Features static export and GitHub Pages deployment.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/mikera/mikera.net",
      status: "Live"
    },
    {
      id: 2,
      title: "Open Source Contributions",
      description: "Contributing to various open source projects in the JavaScript and web development ecosystem.",
      tech: ["JavaScript", "React", "Node.js"],
      link: "https://github.com/mikera",
      status: "Active"
    },
    {
      id: 3,
      title: "Future Project",
      description: "A project I'm planning to build. More details coming soon!",
      tech: ["Planning", "Design", "Development"],
      link: "#",
      status: "Planning"
    }
  ]

  return (
    <div>
      <h1>Projects</h1>
      <p>A collection of personal projects, contributions and experiments</p>

      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            status={project.status}
          />
        ))}
      </div>

      <div>
        <a href="/">← Back to Home</a>
      </div>
    </div>
  )
} 

interface ProjectProps {
  id: number
  title: string
  description: string
  tech: string[]
  link: string
  status: string
}

function Project({ id, title, description, tech, link, status }: ProjectProps) {
  return (
    <div className="project">
      <div>
        <h3>{title}</h3>
        <span>{status}</span>
      </div>
      
      <p>{description}</p>
      
      <div>
        {tech.map((techItem) => (
          <span key={techItem}>{techItem}</span>
        ))}
      </div>
      
      <a href={link}>
        {link === '#' ? 'Coming Soon' : 'View'}
      </a>
    </div>
  )
} 