"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CreditCard, Lock } from "lucide-react"
import Link from "next/link"

export default function CheckoutDemoPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      // Set subscription status in localStorage
      localStorage.setItem("subscriptionActive", "true")
      localStorage.setItem("trialStarted", "false")
      localStorage.setItem("trialCompleted", "false")

      // Redirect to success page
      router.push("/payment/success")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 py-4">
        <Link href="/choose-plan" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to plans
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Complete Your Purchase</CardTitle>
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <CardDescription>Annual Subscription - £50/year</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <div className="relative">
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="pl-10"
                        defaultValue="4242 4242 4242 4242"
                      />
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500">For demo purposes, you can use 4242 4242 4242 4242</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required defaultValue="12/25" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required defaultValue="123" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Name on Card</Label>
                    <Input id="name" placeholder="J. Smith" required defaultValue="John Smith" />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                      {loading ? "Processing Payment..." : "Pay £50.00"}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col space-y-2">
              <div className="w-full flex items-center justify-center space-x-4">
                <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="American Express" className="h-8" />
              </div>
              <p className="text-xs text-center text-gray-500">
                Your payment is secured with SSL encryption. We do not store your card details.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

