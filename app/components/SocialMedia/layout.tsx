export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col space-y-5 z-50">
      {children}
    </div>
  )
}

