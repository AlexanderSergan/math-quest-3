"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Music, Play, Pause, RotateCcw, Award, X } from "lucide-react"
import confetti from "canvas-confetti"

interface Note {
  id: number
  color: string
  sound: string
  position: number
  horizontalPosition: number
}

const COLORS = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
]

const NOTES = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]

export function MathMelodyGame({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [notes, setNotes] = useState<Note[]>([])
  const [isPaused, setIsPaused] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)
  const audioContext = useRef<AudioContext | null>(null)
  const gameLoopRef = useRef<number | null>(null)

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Create audio context
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)()

      // Load high score from localStorage
      const savedHighScore = localStorage.getItem("mathMelodyHighScore")
      if (savedHighScore) {
        setHighScore(Number.parseInt(savedHighScore))
      }

      // Add audio context resume logic for mobile
      const resumeAudioContext = () => {
        if (audioContext.current && audioContext.current.state !== "running") {
          audioContext.current.resume()
        }
      }

      // Add event listeners for user interaction to enable audio
      document.addEventListener("click", resumeAudioContext)
      document.addEventListener("touchstart", resumeAudioContext)

      return () => {
        // Clean up event listeners
        document.removeEventListener("click", resumeAudioContext)
        document.removeEventListener("touchstart", resumeAudioContext)

        if (gameLoopRef.current) {
          cancelAnimationFrame(gameLoopRef.current)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
      resetGame()
    }
  }, [isOpen])

  const playNote = (note: string) => {
    if (!audioContext.current) return

    const oscillator = audioContext.current.createOscillator()
    const gainNode = audioContext.current.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.current.destination)

    // Map note to frequency
    const frequencies: Record<string, number> = {
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392.0,
      A4: 440.0,
      B4: 493.88,
      C5: 523.25,
    }

    oscillator.frequency.value = frequencies[note]
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0, audioContext.current.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.5, audioContext.current.currentTime + 0.01)
    gainNode.gain.linearRampToValueAtTime(0, audioContext.current.currentTime + 0.5)

    oscillator.start()
    oscillator.stop(audioContext.current.currentTime + 0.5)
  }

  const startGame = () => {
    setGameStarted(true)
    setShowInstructions(false)
    setGameOver(false)
    setScore(0)
    setNotes([])
    setIsPaused(false)

    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current)
    }

    let lastNoteTime = Date.now()
    const gameLoop = () => {
      if (!isPaused) {
        const now = Date.now()

        // Add new note every 1.5 seconds
        if (now - lastNoteTime > 1500) {
          const noteIndex = Math.floor(Math.random() * NOTES.length)
          // Divide screen into segments to prevent overlap
          const segments = 5
          const position = Math.floor(Math.random() * segments)
          const horizontalPosition = position * (100 / segments) + Math.random() * (100 / segments / 2)

          const newNote: Note = {
            id: Date.now(),
            color: COLORS[noteIndex],
            sound: NOTES[noteIndex],
            position: 0,
            horizontalPosition: horizontalPosition, // Store horizontal position
          }
          setNotes((prev) => [...prev, newNote])
          lastNoteTime = now
        }

        // Move notes down
        setNotes((prev) => {
          const updatedNotes = prev.map((note) => ({
            ...note,
            position: note.position + 1,
          }))

          // Check for missed notes (position > 100)
          const missedNotes = updatedNotes.filter((note) => note.position > 100)
          if (missedNotes.length > 0) {
            setGameOver(true)

            // Update high score if needed
            if (score > highScore) {
              setHighScore(score)
              localStorage.setItem("mathMelodyHighScore", score.toString())

              // Celebrate new high score
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              })
            }
          }

          // Remove notes that are off screen
          return updatedNotes.filter((note) => note.position <= 100)
        })
      }

      if (!gameOver) {
        gameLoopRef.current = requestAnimationFrame(gameLoop)
      }
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)
  }

  const resetGame = () => {
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current)
    }
    setGameStarted(false)
    setGameOver(false)
    setScore(0)
    setNotes([])
    setIsPaused(false)
    setShowInstructions(true)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const handleNoteClick = (noteId: number, sound: string) => {
    playNote(sound)

    setNotes((prev) => prev.filter((note) => note.id !== noteId))
    setScore((prev) => prev + 1)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="relative bg-purple-600 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-purple-700 rounded-full p-1.5 bg-purple-800/50"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-3">
            <Music className="h-8 w-8 text-yellow-300" />
            <h2 className="text-2xl font-bold">Math Melody Game</h2>
          </div>
        </div>

        {/* Game area */}
        <div className="p-6 relative" style={{ height: "400px" }}>
          {showInstructions ? (
            <div className="text-center h-full flex flex-col items-center justify-center">
              <Music className="h-16 w-16 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">How to Play</h3>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                    1
                  </span>
                  <span>Colorful musical notes will fall from the top of the screen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                    2
                  </span>
                  <span>Click or tap on the notes to play them and earn points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                    3
                  </span>
                  <span>Don't let any notes reach the bottom or the game ends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                    4
                  </span>
                  <span>Try to beat your high score!</span>
                </li>
              </ul>
              <Button onClick={startGame} className="bg-purple-600 hover:bg-purple-700">
                Start Game
              </Button>
            </div>
          ) : gameOver ? (
            <div className="text-center h-full flex flex-col items-center justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
                <p className="text-gray-600 mb-4">Your score: {score}</p>

                {score >= highScore && score > 0 && (
                  <div className="bg-yellow-50 rounded-lg p-4 mb-4 flex items-center justify-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-lg font-bold text-yellow-700">New High Score!</span>
                  </div>
                )}

                <p className="text-gray-600">High score: {highScore}</p>
              </div>
              <div className="flex gap-4">
                <Button onClick={resetGame} className="bg-purple-600 hover:bg-purple-700">
                  Play Again
                </Button>
                <Button onClick={onClose} variant="outline">
                  Exit Game
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Game controls */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Score: {score}</span>
                  <span className="text-sm text-gray-500">High Score: {highScore}</span>
                </div>
                <div className="flex gap-2">
                  <Button onClick={togglePause} variant="outline" size="sm" className="h-8 w-8 p-0">
                    {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                  </Button>
                  <Button onClick={resetGame} variant="outline" size="sm" className="h-8 w-8 p-0">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Game canvas */}
              <div className="relative h-[300px] w-full border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                {notes.map((note) => (
                  <button
                    key={note.id}
                    className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-full ${note.color} shadow-md flex items-center justify-center transition-transform hover:scale-110`}
                    style={{
                      left: `${note.horizontalPosition}%`,
                      top: `${note.position}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: Math.floor(Date.now() - note.id),
                    }}
                    onClick={() => handleNoteClick(note.id, note.sound)}
                  >
                    <Music className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </button>
                ))}

                {/* Target zone at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-200"></div>
              </div>

              {isPaused && (
                <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Game Paused</h3>
                    <Button onClick={togglePause} className="bg-purple-600 hover:bg-purple-700">
                      Resume
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

