"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate signup and redirect to choose-plan page
    setTimeout(() => {
      setLoading(false)
      router.push("/choose-plan")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl -ml-48 -mb-48"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-10 blur-xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-purple-300 rounded-full opacity-10 blur-xl animate-float"></div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <Card className="w-full max-w-md border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 rounded-lg"></div>

          <CardHeader className="space-y-1 relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-48 h-16 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
                    <span className="text-blue-600 mr-1">Math</span>
                    <span className="text-purple-600">Quest</span>
                    <svg className="h-6 w-6 ml-1 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Create an account
            </CardTitle>
            <CardDescription className="text-center">Start your child's learning journey today</CardDescription>

            <div className="flex justify-center mt-4">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1 ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > 1 ? <CheckCircle className="h-5 w-5" /> : "1"}
                </div>
                <div className={`w-10 h-1 ${step >= 2 ? "bg-blue-500" : "bg-gray-200"}`}></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2 ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > 2 ? <CheckCircle className="h-5 w-5" /> : "2"}
                </div>
                <div className={`w-10 h-1 ${step >= 3 ? "bg-blue-500" : "bg-gray-200"}`}></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 3 ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  3
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10">
            {step === 1 && (
              <form onSubmit={handleNextStep}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="parent-name">Your Name</Label>
                    <Input
                      id="parent-name"
                      placeholder="Full name"
                      required
                      className="border-blue-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parent-email">Email</Label>
                    <Input
                      id="parent-email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="border-blue-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parent-password">Password</Label>
                    <Input
                      id="parent-password"
                      type="password"
                      placeholder="Create a password"
                      required
                      className="border-blue-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleNextStep}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="child-name">Child's Name</Label>
                    <Input
                      id="child-name"
                      placeholder="Child's name"
                      required
                      className="border-blue-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="child-username">Child's Username</Label>
                    <Input
                      id="child-username"
                      placeholder="Create a username"
                      required
                      className="border-blue-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="child-password">Child's Password</Label>
                    <Input
                      id="child-password"
                      type="password"
                      placeholder="Create a password"
                      required
                      className="border-blue-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="child-year">School Year</Label>
                    <select
                      id="child-year"
                      className="flex h-10 w-full rounded-md border border-blue-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select year</option>
                      <option value="year1">Year 1</option>
                      <option value="year2">Year 2</option>
                      <option value="year3">Year 3</option>
                      <option value="year4">Year 4</option>
                      <option value="year5">Year 5</option>
                      <option value="year6">Year 6</option>
                    </select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={handleSignup}>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4 border border-blue-100">
                    <h3 className="font-medium text-blue-800 mb-2">Almost Done!</h3>
                    <p className="text-sm text-blue-700">
                      After creating your account, you'll be able to choose between a free trial or an annual
                      subscription.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
                    disabled={loading}
                  >
                    {loading ? "Creating account..." : "Create Account"}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 relative z-10">
            <div className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Add animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

