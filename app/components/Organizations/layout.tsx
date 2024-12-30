export default function OrganizationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section id="organizations" className="py-20">
      <div className="container mx-auto flex flex-wrap px-6">
        {children}
      </div>
    </section>
  )
}

