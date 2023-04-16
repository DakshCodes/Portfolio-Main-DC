import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

const monserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${monserrat.variable} font-mont bg-white w-full min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
