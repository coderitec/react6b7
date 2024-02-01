import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React fundamentals',
  description: 'Learn to create a react app using a Next framework',
  keywords: 'HTML,CSS,JavaScript, React,Git',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='min-h-[90vh]'>

        
        {children}
        </div>

        <Footer />
        </body>
    </html>
  )
}
