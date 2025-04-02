"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ChoosePlanPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedOption, setSelectedOption] = useState<"trial" | "subscription" | null>(null)

  const handleContinue = () => {
    if (!selectedOption) return

    setLoading(true)

    if (selectedOption === "trial") {
      // Set trial started in localStorage
      localStorage.setItem("trialStarted", "true")
      localStorage.setItem("lessonCount", "0")

      // Redirect to parent dashboard
      setTimeout(() => {
        router.push("/parent-dashboard")
      }, 800)
    } else {
      // Redirect to Stripe checkout
      setTimeout(() => {
        router.push("/payment/checkout-demo")
      }, 800)
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Choose Your Plan</h1>
          <p className="text-gray-600 mt-2">
            Your account has been created successfully! Now select how you'd like to proceed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Trial Card */}
          <Card
            className={`border-2 cursor-pointer transition-all ${
              selectedOption === "trial" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => setSelectedOption("trial")}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Start with Free Trial</CardTitle>
              <CardDescription>Try before you subscribe</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold">£0</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Access to 3 mathematics classes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Interactive lessons and quizzes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Basic progress tracking</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {selectedOption === "trial" && (
                <div className="w-full bg-blue-100 text-blue-800 py-2 px-3 rounded-md text-center font-medium">
                  Selected
                </div>
              )}
            </CardFooter>
          </Card>

          {/* Annual Subscription Card */}
          <Card
            className={`border-2 cursor-pointer transition-all relative ${
              selectedOption === "subscription" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => setSelectedOption("subscription")}
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
              Best Value
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Annual Subscription</CardTitle>
              <CardDescription>Full access to all content</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold">£50</span>
                <span className="text-gray-500 ml-1">/year</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Access to all mathematics topics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Interactive lessons and quizzes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Comprehensive progress tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Printable worksheets and resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Parent dashboard with detailed analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {selectedOption === "subscription" && (
                <div className="w-full bg-blue-100 text-blue-800 py-2 px-3 rounded-md text-center font-medium">
                  Selected
                </div>
              )}
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8"
            disabled={!selectedOption || loading}
            onClick={handleContinue}
          >
            {loading ? "Processing..." : "Continue"}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>

        <div className="mt-8 bg-white p-4 rounded-lg border border-gray-200 max-w-lg mx-auto">
          <h3 className="font-medium text-gray-900 mb-2">Secure Payment</h3>
          <p className="text-sm text-gray-600">
            All payments are processed securely through Stripe. Your payment information is never stored on our servers.
          </p>
          <div className="mt-3 flex items-center justify-center space-x-4">
            <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="American Express" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

