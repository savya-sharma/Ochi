import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import images from '../images'

const EASE = [0.76, 0, 0.24, 1]

const REDUCED = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// The counter eases between these numbers and holds briefly on each one
const STOPS = [0, 24, 48, 73, 91, 100]
// How long each climb to the next stop takes, and how long it rests there
const TRAVEL_MS = REDUCED ? 120 : 420
const PAUSE_MS = REDUCED ? 0 : 380
// Give up waiting on slow assets after this long
const MAX_WAIT = 8000

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

// Resolves once an image has either loaded or failed
function waitForImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = img.onerror = resolve
    img.src = src
  })
}

// Counts 0 → 100 in paced steps gated by real asset loading, then calls onComplete.
function Loader({ onComplete }) {
  const [count, setCount] = useState(0)
  const doneRef = useRef(onComplete)
  doneRef.current = onComplete

  useEffect(() => {
    // Everything the first view depends on: page images, the CSS background, fonts
    const tasks = [
      ...[...document.images].map((img) =>
        img.complete ? Promise.resolve() : new Promise((r) => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }) })
      ),
      waitForImage(images.eyesBg),
      document.fonts?.ready ?? Promise.resolve(),
    ]

    let loaded = 0
    let realProgress = 0
    tasks.forEach((t) => t.then(() => { loaded += 1; realProgress = loaded / tasks.length }))

    const start = performance.now()
    let stop = 0 // index of the stop we're resting on
    let phaseStart = start
    let phase = 'pause' // 'travel' toward STOPS[stop + 1], or 'pause' on STOPS[stop]
    let frame = 0
    let doneTimer = 0

    const tick = (now) => {
      const sincePhase = now - phaseStart

      if (phase === 'pause') {
        const next = STOPS[stop + 1]
        // Move on once we've rested long enough and real loading has reached the next stop
        const assetsReady = realProgress * 100 >= next || now - start > MAX_WAIT
        if (sincePhase >= PAUSE_MS && assetsReady) {
          phase = 'travel'
          phaseStart = now
        }
      } else {
        const from = STOPS[stop]
        const to = STOPS[stop + 1]
        const t = Math.min(sincePhase / TRAVEL_MS, 1)
        setCount(Math.round(from + (to - from) * easeInOut(t)))

        if (t === 1) {
          stop += 1
          phase = 'pause'
          phaseStart = now
          if (stop === STOPS.length - 1) {
            doneTimer = setTimeout(() => doneRef.current(), PAUSE_MS + 150)
            return
          }
        }
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(doneTimer)
    }
  }, [])

  return (
    <motion.div
      className='fixed inset-0 z-[1000] bg-teal-ochi text-[#F1F1F1] flex flex-col justify-between px-5 md:px-[3.5vw] py-5 md:py-8 overflow-hidden'
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 1, ease: EASE } }}
      role='progressbar'
      aria-label='Loading Ochi'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={count}
    >
      <motion.div
        className='flex justify-between items-center'
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Logo className='w-16 md:w-[72px] h-auto text-lime-ochi' />
        <span className='uppercase text-xs md:text-sm tracking-wide opacity-70'>Loading</span>
      </motion.div>

      <motion.div exit={{ y: -60, opacity: 0, transition: { duration: 0.5, ease: EASE } }}>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
          <div className='font-neue text-2xl md:text-[2.2vw] leading-tight tracking-tight overflow-hidden'>
            {["We create", "eye-opening", "presentations"].map((line, i) => (
              <motion.p
                key={line}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.08 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <h1 className='font-bebas text-lime-ochi text-[42vw] md:text-[24vw] leading-[0.8] tracking-wide tabular-nums text-right -mb-[1vw]'>
            {count}
            <span className='text-[10vw] md:text-[5vw] align-top text-[#F1F1F1]'>%</span>
          </h1>
        </div>

        <div className='mt-4 md:mt-6 h-px w-full bg-[#F1F1F1]/20'>
          <div
            className='h-full bg-lime-ochi origin-left'
            style={{ transform: `scaleX(${count / 100})` }}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Loader
