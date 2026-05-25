import './globals.css'

export const metadata = {
  title: 'Stainless Bending NZ | Coming Soon',
  description: 'Auckland\'s specialists in stainless steel tube bending, custom bends, and Supreme Grab Rails. Coming soon.',
  icons: { icon: '/icon.png' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
