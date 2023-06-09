import Footer from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={inter.className}>
        <Nav/>
        <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid  gap-8 grid-cols-1 md:grid-cols-12">
        {children}
        </div>
        </div>
        </div>
        <Footer/>
      </div>
  )
}