import { motion } from 'framer-motion'

function Marquee() {
  return (
    <section className='marquee relative z-10 w-full py-20 rounded-t-3xl bg-teal-ochi overflow-hidden'>
      <div className='border-y border-zinc-300 overflow-hidden'>
        {/* Two identical halves; shifting by -50% loops seamlessly */}
        <motion.div
          className='flex w-max whitespace-nowrap'
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <h1 key={i} className='font-bebas uppercase font-semibold text-[20vw] leading-none tracking-wide pt-3 pr-[5vw]'>
              We are ochi
            </h1>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Marquee
