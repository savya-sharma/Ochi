import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import EyePair from './EyePair'
import images from '../images'

function Eyes() {
  // Parallax: the background moves inside its frame while the section scrolls by
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className='eyes relative w-full h-[70vh] md:h-screen overflow-hidden'>
      <motion.div
        className='absolute inset-x-0 -top-[15%] h-[130%] bg-cover bg-center'
        // Gradient shows underneath if the photo is missing
        style={{ y, backgroundImage: `url("${images.eyesBg}"), radial-gradient(circle at 30% 30%, #CDEA68 0%, #004D43 55%, #18181b 100%)` }}
      />
      <EyePair
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        size='w-[38vw] h-[38vw] md:w-[15vw] md:h-[15vw]'
        pupil='w-[24vw] h-[24vw] md:w-[9.5vw] md:h-[9.5vw]'
        label='Play'
      />
    </section>
  )
}

export default Eyes
