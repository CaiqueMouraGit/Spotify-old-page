import './globals.css'

export const metadata = {
  title: 'Spotify - APP',
  description: 'Spotify interface study',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50 overflow-hidden">{children}</body>
    </html>
  )
}
