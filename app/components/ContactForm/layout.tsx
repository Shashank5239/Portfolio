export default function ContactFormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section id="contact" className="py-20 ">
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

