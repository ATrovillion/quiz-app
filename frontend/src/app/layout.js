import Nav from '@/components/nav/Nav'
import './globals.css'
import Footer from '@/components/footer/Footer'


export const metadata = {
  title: 'Quiz App',
  description: 'Helps you pass your next exam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
