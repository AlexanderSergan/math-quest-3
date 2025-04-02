"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleParentLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login
    setTimeout(() => {
      setLoading(false)
      router.push("/parent-dashboard")
    }, 1000)
  }

  const handleChildLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Get form values
    const formData = new FormData(e.target as HTMLFormElement)
    const username = formData.get("child-username") as string
    const password = formData.get("child-password") as string

    // Simulate login with proper user data
    setTimeout(() => {
      // Create child user object with role
      const userData = {
        username,
        role: "child",
        name: username,
      }

      // Store in localStorage for auth system to detect
      localStorage.setItem("user", JSON.stringify(userData))

      setLoading(false)
      router.push("/child-dashboard")
    }, 1000)
  }

  const handleTeacherLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login
    setTimeout(() => {
      // Create teacher user object with role
      const userData = {
        role: "teacher",
        name: "Ms. Johnson",
      }

      // Store in localStorage for auth system to detect
      localStorage.setItem("user", JSON.stringify(userData))

      setLoading(false)
      router.push("/teachers/dashboard")
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
              Welcome back!
            </CardTitle>
            <CardDescription className="text-center">Log in to continue your learning journey</CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <Tabs defaultValue="child" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-blue-50">
                <TabsTrigger
                  value="child"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  Child
                </TabsTrigger>
                <TabsTrigger
                  value="parent"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  Parent
                </TabsTrigger>
                <TabsTrigger
                  value="teacher"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  Teacher
                </TabsTrigger>
              </TabsList>

              <TabsContent value="child">
                <form onSubmit={handleChildLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="child-username">Username</Label>
                      <Input
                        id="child-username"
                        placeholder="Enter your username"
                        required
                        defaultValue="alex2025"
                        className="border-blue-200 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="child-password">Password</Label>
                      <Input
                        id="child-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        defaultValue="password123"
                        className="border-blue-200 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Log in"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="parent">
                <form onSubmit={handleParentLogin}>
                  <div className="space-y-4">
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
                        placeholder="••••••••"
                        required
                        className="border-blue-200 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Log in"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="teacher">
                <form onSubmit={handleTeacherLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacher-email">School Email</Label>
                      <Input
                        id="teacher-email"
                        type="email"
                        placeholder="teacher@school.edu"
                        required
                        className="border-blue-200 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacher-password">Password</Label>
                      <Input
                        id="teacher-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="border-blue-200 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Log in"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 relative z-10">
            <div className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up
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

