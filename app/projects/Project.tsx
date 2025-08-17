interface ProjectProps {
  id: number
  title: string
  description: string
  tech: string[]
  link: string
  status: string
}

export default function Project({ id, title, description, tech, link, status }: ProjectProps) {
  return (
    <div>
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
        {link === '#' ? 'Coming Soon' : 'View Project →'}
      </a>
    </div>
  )
} 