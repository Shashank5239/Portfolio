export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

