export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

