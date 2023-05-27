import '../styles/globals.css'
import "../styles/footer.css"
import "../styles/header.css"
import "../styles/misc.css"
import "../styles/categories.css"
import "../styles/search.css"
import "../styles/auth.css"
import { Inter } from 'next/font/google'
import ProviderForTheme from '@/components/theme/themeProvider'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import RecentViewedEmojisProvider from '@/contexts/recent'
import IsAUserLoggedInProvider from '@/contexts/authContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  charSet: 'utf-8',
  robots:'index,follow',
  viewport:'width=device-width',
  title: {
    default:"EmojiSearch",
    template:" %s | EmojiSearch"
  },
  description:"An emoji search and copy code snippets site",
  keywords:["emoji","emoji search"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ProviderForTheme>
          <RecentViewedEmojisProvider>
           <IsAUserLoggedInProvider>
                  <Header/>
                {children}
                <Footer/>
       
         
           </IsAUserLoggedInProvider>
          </RecentViewedEmojisProvider>
        </ProviderForTheme>
       </body>
    </html>
  )
}
