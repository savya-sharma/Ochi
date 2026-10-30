import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Clients from './components/Clients'
import Cards from './components/Cards'
import Ready from './components/Ready'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  // Keep the page locked at the top while the loader is showing
  useEffect(() => {
    if (!loading) return
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = '' }
  }, [loading])

  // Start Lenis smooth scrolling once the loader is gone, tear it down on unmount
  useEffect(() => {
    if (loading) return
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
    })

    let frame = 0
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar />
        <LandingPage ready={!loading} />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Clients />
        <Cards />
        <Ready />
        <Footer />
      </div>
    </>
  )
}

export default App
