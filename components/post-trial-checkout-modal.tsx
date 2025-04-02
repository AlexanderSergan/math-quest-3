"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PostTrialCheckoutModal() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if trial is completed from localStorage
    const trialStarted = localStorage.getItem("trialStarted") === "true"
    const trialCompleted = localStorage.getItem("trialCompleted") === "true"
    const modalShown = localStorage.getItem("checkoutModalShown") === "true"

    if (trialStarted && trialCompleted && !modalShown) {
      setIsOpen(true)
      localStorage.setItem("checkoutModalShown", "true")
    }
  }, [])

  const handleSubscribe = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/payment/checkout-demo")
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
        <CardHeader className="space-y-1 relative">
          <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl text-center">Your Free Trial is Complete!</CardTitle>
          <CardDescription className="text-center">
            Continue your learning journey with a full subscription
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">With a full subscription you get:</h3>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Access to all mathematics topics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Interactive lessons and quizzes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Comprehensive progress tracking</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Printable worksheets and resources</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Parent dashboard with detailed analytics</span>
              </li>
            </ul>
          </div>
          <div className="bg-muted p-3 rounded-lg">
            <p className="font-medium text-center">Annual Subscription</p>
            <p className="text-2xl font-bold text-center">£50/year</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSubscribe} disabled={loading}>
            {loading ? "Processing..." : "Subscribe Now"}
          </Button>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Maybe Later
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

