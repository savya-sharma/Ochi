import { useEffect, useRef, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Logo from './Logo'

const links = ["Services", "Our Work", "About Us", "Insights", "Contact us"]

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNavbar(!(currentScrollY > lastScrollY.current && currentScrollY > 50))
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu when switching to desktop width
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = () => mq.matches && setMenuOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  const visible = showNavbar || menuOpen

  return (
    <nav className={`fixed top-0 left-0 z-[999] w-full text-zinc-900 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='w-full px-5 md:px-[4vw] py-4 md:py-6 bg-[#F1F1F1]/60 backdrop-blur-xl flex justify-between items-center'>
        <a href="#" aria-label="Home"><Logo className='w-16 md:w-[72px] h-auto' /></a>

        <div className='hidden md:flex gap-6 lg:gap-10 items-center'>
          {links.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`relative text-base lg:text-lg tracking-tight after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:duration-300 hover:after:w-full ${index === 4 ? 'md:ml-8 lg:ml-32' : ''}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className='md:hidden text-2xl p-1'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden bg-[#F1F1F1] transition-[max-height] duration-500 ${menuOpen ? 'max-h-96 border-b border-zinc-300' : 'max-h-0'}`}>
        <div className='flex flex-col px-5 pb-6 pt-2 gap-4'>
          {links.map((item) => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)} className='text-3xl font-founders uppercase tracking-tight'>
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
