"use client"

import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"

export function Confetti() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [pieces, setPieces] = useState(200)

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window
    setDimensions({ width, height })

    const timer = setTimeout(() => {
      setPieces(0)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ReactConfetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={pieces}
      recycle={false}
      colors={["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]}
    />
  )
}

