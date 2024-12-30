export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section id="achievements" className="py-28">
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

