import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import images from '../images'
import SafeImg from './SafeImg'

const lines = ["We Create", "Eye Opening", "Presentations"]

// `ready` flips once the loader starts leaving, which kicks off the reveal
function LandingPage({ ready = true }) {
  // Parallax: the hero drifts down slower than the page as you scroll past it
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <motion.section ref={ref} style={{ y }} className='landing w-full min-h-[85vh] md:min-h-screen text-[#212121] bg-[#F1F1F1] pt-28 md:pt-[12vw] flex flex-col'>
      <div className='textstructure px-5 md:px-[3.5vw]'>
        {lines.map((item, index) => (
          <div key={item} className='masker'>
            <div className='flex items-end overflow-hidden'>
              {index === 1 && (
                <div className={`${ready ? 'grow-width w-[16vw] md:w-[9vw]' : 'w-0'} mr-[1.5vw] h-[11vw] md:h-[5.7vw] rounded-md relative -top-[1.2vw] overflow-hidden shrink-0 bg-teal-ochi`}>
                  <SafeImg
                    className='w-full h-full object-cover object-[0%_90%]'
                    src={images.landing}
                    alt=""
                  />
                </div>
              )}
              <motion.h1
                initial={{ y: '100%' }}
                animate={ready ? { y: 0 } : { y: '100%' }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2, delay: 0.4 + index * 0.1 }}
                className="font-founders uppercase text-[15vw] leading-[12.5vw] md:text-[9vw] md:leading-[7.2vw] tracking-tight font-semibold pt-[2vw] md:pt-[1vw]"
              >
                {item}
              </motion.h1>
            </div>
          </div>
        ))}
      </div>

      <div className='border-t border-zinc-400 mt-16 md:mt-[6vw] flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-5 px-5 md:px-[3.5vw]'>
        {["For public and private companies", "From the first pitch to IPO"].map((item) => (
          <p key={item} className="text-base md:text-[1.1vw] font-light tracking-tight leading-none">{item}</p>
        ))}
        <a href="#" className='group start flex items-center gap-1 self-start md:self-auto'>
          <span className='border border-zinc-500 py-1.5 px-4 uppercase text-sm md:text-[1vw] rounded-full duration-300 tracking-tight group-hover:bg-zinc-900 group-hover:text-white'>
            start the project
          </span>
          <span className='w-9 h-9 flex items-center justify-center rounded-full border border-zinc-500 duration-300 group-hover:bg-zinc-900 group-hover:text-white'>
            <FiArrowUpRight className='duration-300 group-hover:rotate-45' />
          </span>
        </a>
      </div>
      <p className='flex justify-center pb-6 text-[#999] text-sm mt-auto'>Scroll down</p>
    </motion.section>
  )
}

export default LandingPage
