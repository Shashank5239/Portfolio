export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 mt-2">
      {children}
    </header>
  )
}

