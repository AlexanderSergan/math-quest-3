"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleStartFreeTrial = () => {
    setLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      router.push("/parent-dashboard")
    }, 1500)
  }

  // Update the handleSubscribe function to include additional children
  const handleSubscribe = () => {
    setLoading(true)
    // Get additional children count
    const additionalChildren = Number.parseInt(localStorage.getItem("additionalChildren") || "0")
    const totalPrice = 50 + additionalChildren * 25

    // Store the number of children for the parent dashboard
    localStorage.setItem("totalChildren", (additionalChildren + 1).toString())

    // Redirect to Stripe checkout demo
    setTimeout(() => {
      setLoading(false)
      router.push("/payment/checkout-demo")
    }, 500)
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Choose Your Plan</h1>
            <p className="text-gray-600 mt-2">Start with 3 free classes, then continue with our annual subscription</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free Trial Card */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Free Trial</CardTitle>
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
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleStartFreeTrial}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Start Free Trial"}
                </Button>
              </CardFooter>
            </Card>

            {/* Annual Subscription Card */}
            <Card className="border-2 border-blue-600 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Best Value
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Annual Subscription</CardTitle>
                <CardDescription>Full access to all content</CardDescription>
                <div className="mt-2">
                  <span className="text-3xl font-bold">£50</span>
                  <span className="text-gray-500 ml-1">/year</span>
                  <span className="text-sm text-gray-500 block mt-1">First child included</span>
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

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Additional Children</h4>
                  <p className="text-sm text-gray-600 mb-3">Add access for more children at £25 per child</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => {
                          const additionalChildren = Number.parseInt(localStorage.getItem("additionalChildren") || "0")
                          if (additionalChildren > 0) {
                            localStorage.setItem("additionalChildren", (additionalChildren - 1).toString())
                            // Force re-render
                            setLoading((l) => !l)
                            setLoading((l) => !l)
                          }
                        }}
                      >
                        -
                      </Button>
                      <span className="mx-4 font-medium">
                        {typeof window !== "undefined"
                          ? Number.parseInt(localStorage.getItem("additionalChildren") || "0")
                          : 0}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => {
                          const additionalChildren = Number.parseInt(localStorage.getItem("additionalChildren") || "0")
                          localStorage.setItem("additionalChildren", (additionalChildren + 1).toString())
                          // Force re-render
                          setLoading((l) => !l)
                          setLoading((l) => !l)
                        }}
                      >
                        +
                      </Button>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Additional cost:</span>
                      <span className="block font-medium">
                        £
                        {typeof window !== "undefined"
                          ? Number.parseInt(localStorage.getItem("additionalChildren") || "0") * 25
                          : 0}
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm text-blue-700">
                    <span className="font-medium">
                      Total: £
                      {50 +
                        (typeof window !== "undefined"
                          ? Number.parseInt(localStorage.getItem("additionalChildren") || "0") * 25
                          : 0)}
                    </span>
                    <span className="block mt-1 text-xs text-blue-600">
                      Includes base subscription (£50) + additional children
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSubscribe} disabled={loading}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  {loading ? "Processing..." : "Subscribe Now"}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8 bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">
              All payments are processed securely through Stripe. Your payment information is never stored on our
              servers.
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
    </div>
  )
}

