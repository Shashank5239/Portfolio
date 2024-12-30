export default function FooterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <footer className="bg-black/40 backdrop-blur-md py-8">
      <div className="container mx-auto px-6 text-center">
        {children}
      </div>
    </footer>
  )
}

