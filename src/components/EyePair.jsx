import useEyeRotation from '../hooks/useEyeRotation'

// Two eyes whose pupils follow the pointer. `size` / `pupil` are Tailwind
// width+height classes so each section can scale them per breakpoint.
function EyePair({ size, pupil, label, className = '' }) {
  const [ref, rotate] = useEyeRotation()

  return (
    <div ref={ref} className={`flex gap-4 md:gap-10 ${className}`}>
      {[0, 1].map((i) => (
        <div key={i} className={`flex items-center justify-center bg-zinc-100 rounded-full ${size}`}>
          <div className={`relative rounded-full bg-zinc-900 flex items-center justify-center ${pupil}`}>
            {label && (
              <span className='text-zinc-100 uppercase text-[2.5vw] md:text-[1vw] tracking-tight'>{label}</span>
            )}
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className='absolute top-1/2 left-1/2 w-full h-6 md:h-10 flex items-center'
            >
              <div className='w-[22%] aspect-square max-w-4 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EyePair
