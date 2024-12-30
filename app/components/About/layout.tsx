export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  )
}

