import '../styles/globals.css'
import "../styles/footer.css"
import "../styles/header.css"
import "../styles/misc.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emoji Search',
  description: 'An Emoji search site for copying emoji code snippets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
