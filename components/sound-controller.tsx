"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the context type
type SoundContextType = {
  muted: boolean
  toggleMute: () => void
  playSound: (soundUrl: string, volume?: number) => void
}

// Create the context with default values
const SoundContext = createContext<SoundContextType>({
  muted: false,
  toggleMute: () => {},
  playSound: () => {},
})

// Hook to use the sound context
export const useSound = () => useContext(SoundContext)

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(false)

  // Check localStorage on mount
  useEffect(() => {
    const savedMuted = localStorage.getItem("gameSoundMuted")
    if (savedMuted) {
      setMuted(savedMuted === "true")
    }
  }, [])

  // Toggle mute function
  const toggleMute = () => {
    const newMuted = !muted
    setMuted(newMuted)
    localStorage.setItem("gameSoundMuted", newMuted.toString())
  }

  // Function to play sounds
  const playSound = (soundUrl: string, volume = 0.5) => {
    if (!muted) {
      const audio = new Audio(soundUrl)
      audio.volume = volume
      audio.play().catch((e) => console.error("Error playing sound:", e))
    }
  }

  return <SoundContext.Provider value={{ muted, toggleMute, playSound }}>{children}</SoundContext.Provider>
}

// Sound control button component
export function SoundControl() {
  const { muted, toggleMute } = useSound()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleMute}
      className="w-8 h-8 rounded-full p-0"
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
    >
      {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
    </Button>
  )
}

