import { useState } from 'react'

// <img> that renders `fallback` instead of a broken-image icon when the file is missing.
function SafeImg({ fallback = null, ...props }) {
  const [failed, setFailed] = useState(false)
  if (failed) return fallback
  return <img {...props} onError={() => setFailed(true)} />
}

export default SafeImg
