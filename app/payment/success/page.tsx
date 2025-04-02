"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import confetti from "canvas-confetti"

export default function PaymentSuccessPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    // Trigger confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    // Auto-redirect countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/parent-dashboard")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription>Thank you for subscribing to MathQuest</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-4">
            <p>Your annual subscription is now active. You have full access to all content and features.</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800">Subscription Details</p>
              <p className="text-sm text-blue-700">Annual Plan: £50/year</p>
              <p className="text-sm text-blue-700">Next billing date: March 24, 2026</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => router.push("/parent-dashboard")} className="bg-blue-600 hover:bg-blue-700">
            Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
        <div className="text-center pb-4 text-sm text-gray-500">Redirecting in {countdown} seconds...</div>
      </Card>
    </div>
  )
}

