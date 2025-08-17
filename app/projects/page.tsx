export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "This website built with Next.js 15, TypeScript, and Tailwind CSS. Features static export and GitHub Pages deployment.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/yourusername/mikera.net",
      status: "Live"
    },
    {
      id: 2,
      title: "Open Source Contributions",
      description: "Contributing to various open source projects in the JavaScript and web development ecosystem.",
      tech: ["JavaScript", "React", "Node.js"],
      link: "https://github.com/yourusername",
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
      <h1>My Projects</h1>
      <p>A collection of things I've built and worked on</p>

      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <div>
              <h3>{project.title}</h3>
              <span>{project.status}</span>
            </div>
            
            <p>{project.description}</p>
            
            <div>
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            
            <a href={project.link}>
              {project.link === '#' ? 'Coming Soon' : 'View Project →'}
            </a>
          </div>
        ))}
      </div>

      <div>
        <a href="/">← Back to Home</a>
      </div>
    </div>
  )
} 