import BlobBackground from '@/components/ui/BlobBackground'
import Navbar from '@/components/layout/Navbar'
import SocialSidebar from '@/components/layout/SocialSidebar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* Fixed decorative backgrounds */}
      <BlobBackground />

      {/* Fixed layout chrome */}
      <Navbar />
      <SocialSidebar />

      {/* Main content */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
