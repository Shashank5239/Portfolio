export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-gradient-to-b from-[#2D1B40] via-[#4C3957] to-[#220a3a] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="relative">
        {children}
      </div>
    </section>
  )
}

