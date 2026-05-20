import './globals.css'

export const metadata = {
  title: 'Stainless Bending NZ | Precision Tube Bending & Fabrication Auckland',
  description: 'Auckland\'s specialists in stainless steel tube bending, custom bends, and Supreme Grab Rails. Over 20 years experience. Penrose, Auckland.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
