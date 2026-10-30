import { useEffect, useRef, useState } from 'react'

// Returns a ref to attach to the eyes wrapper and the angle (deg) the pupils
// should point at, so they follow the mouse / finger relative to the eyes.
export default function useEyeRotation() {
  const ref = useRef(null)
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    let frame = 0

    const handleMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const deltaX = e.clientX - (rect.left + rect.width / 2)
        const deltaY = e.clientY - (rect.top + rect.height / 2)
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
        setRotate(angle - 180)
      })
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return [ref, rotate]
}
