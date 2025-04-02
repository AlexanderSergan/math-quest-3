"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Lightbulb, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { FocusTrap } from "@/components/accessibility-helpers"

interface GameSuggestionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GameSuggestionModal({ isOpen, onClose }: GameSuggestionModalProps) {
  const [username, setUsername] = useState("")
  const [gameTitle, setGameTitle] = useState("")
  const [gameDescription, setGameDescription] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)

      // Store in localStorage to remember this user submitted a suggestion
      if (typeof window !== "undefined") {
        localStorage.setItem("gameSuggestionSubmitted", "true")
        localStorage.setItem("gameSuggestionUsername", username)
      }

      toast({
        title: "Game suggestion received!",
        description: "Thank you for your creative idea. We'll review it soon!",
        duration: 5000,
      })

      // Reset form after 3 seconds and close
      setTimeout(() => {
        resetForm()
      }, 3000)
    }, 1500)
  }

  const resetForm = () => {
    setUsername("")
    setGameTitle("")
    setGameDescription("")
    setSubmitted(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && !submitting && onClose()}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-xl">
        <FocusTrap active={isOpen}>
          <DialogHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
            <DialogTitle className="text-xl flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Suggest a New Math Game
            </DialogTitle>
          </DialogHeader>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Your Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                  disabled={submitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gameTitle">Game Title</Label>
                <Input
                  id="gameTitle"
                  value={gameTitle}
                  onChange={(e) => setGameTitle(e.target.value)}
                  placeholder="What would you call your game?"
                  required
                  disabled={submitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gameDescription">Game Concept</Label>
                <Textarea
                  id="gameDescription"
                  value={gameDescription}
                  onChange={(e) => setGameDescription(e.target.value)}
                  placeholder="Describe how your game would work and what math skills it would teach..."
                  className="min-h-[120px]"
                  required
                  disabled={submitting}
                />
              </div>

              <DialogFooter className="pt-4">
                <Button type="button" variant="outline" onClick={resetForm} disabled={submitting}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Suggestion"
                  )}
                </Button>
              </DialogFooter>
            </form>
          ) : (
            <div className="p-8 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700">Thank You!</h3>
              <p className="text-gray-600">
                Your game suggestion has been received. If we select your idea, we'll credit you as the inspiration!
              </p>
              <p className="text-sm text-gray-500">The modal will close automatically in a few seconds...</p>
            </div>
          )}
        </FocusTrap>
      </DialogContent>
    </Dialog>
  )
}

