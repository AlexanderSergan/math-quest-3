"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, Info } from "lucide-react"

export default function TeacherSignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    school: "",
    role: "",
    subjects: [],
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call to create teacher account
    setTimeout(() => {
      setLoading(false)
      router.push("/teachers/verify")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col">
      <div className="container mx-auto px-4 py-4">
        <Link href="/teachers" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Teachers
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Teacher Sign Up</CardTitle>
            <CardDescription className="text-center">
              Create your account to access curriculum-aligned resources
            </CardDescription>

            <div className="flex justify-center mt-4">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > 1 ? <CheckCircle className="h-5 w-5" /> : "1"}
                </div>
                <div className={`w-10 h-1 ${step >= 2 ? "bg-indigo-600" : "bg-gray-200"}`}></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > 2 ? <CheckCircle className="h-5 w-5" /> : "2"}
                </div>
                <div className={`w-10 h-1 ${step >= 3 ? "bg-indigo-600" : "bg-gray-200"}`}></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 3 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  3
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {step === 1 && (
              <form onSubmit={handleNextStep}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">School Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@school.edu"
                      required
                    />
                    <p className="text-xs text-gray-500">Please use your school email for verification purposes</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Continue
                  </Button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleNextStep}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="school">School Name</Label>
                    <Input
                      id="school"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      placeholder="Enter your school name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Select onValueChange={(value) => handleSelectChange("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="head_of_department">Head of Department</SelectItem>
                        <SelectItem value="deputy_head">Deputy Head</SelectItem>
                        <SelectItem value="headteacher">Headteacher</SelectItem>
                        <SelectItem value="teaching_assistant">Teaching Assistant</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Subjects You Teach</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="mathematics"
                          onCheckedChange={(checked) => {
                            const subjects = [...formData.subjects]
                            if (checked) {
                              subjects.push("mathematics")
                            } else {
                              const index = subjects.indexOf("mathematics")
                              if (index > -1) subjects.splice(index, 1)
                            }
                            setFormData({ ...formData, subjects })
                          }}
                        />
                        <label htmlFor="mathematics" className="text-sm">
                          Mathematics
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="english"
                          onCheckedChange={(checked) => {
                            const subjects = [...formData.subjects]
                            if (checked) {
                              subjects.push("english")
                            } else {
                              const index = subjects.indexOf("english")
                              if (index > -1) subjects.splice(index, 1)
                            }
                            setFormData({ ...formData, subjects })
                          }}
                        />
                        <label htmlFor="english" className="text-sm">
                          English
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="science"
                          onCheckedChange={(checked) => {
                            const subjects = [...formData.subjects]
                            if (checked) {
                              subjects.push("science")
                            } else {
                              const index = subjects.indexOf("science")
                              if (index > -1) subjects.splice(index, 1)
                            }
                            setFormData({ ...formData, subjects })
                          }}
                        />
                        <label htmlFor="science" className="text-sm">
                          Science
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="geography"
                          onCheckedChange={(checked) => {
                            const subjects = [...formData.subjects]
                            if (checked) {
                              subjects.push("geography")
                            } else {
                              const index = subjects.indexOf("geography")
                              if (index > -1) subjects.splice(index, 1)
                            }
                            setFormData({ ...formData, subjects })
                          }}
                        />
                        <label htmlFor="geography" className="text-sm">
                          Geography
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="history"
                          onCheckedChange={(checked) => {
                            const subjects = [...formData.subjects]
                            if (checked) {
                              subjects.push("history")
                            } else {
                              const index = subjects.indexOf("history")
                              if (index > -1) subjects.splice(index, 1)
                            }
                            setFormData({ ...formData, subjects })
                          }}
                        />
                        <label htmlFor="history" className="text-sm">
                          History
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="other_subject"
                          onCheckedChange={(checked) => {
                            const subjects = [...formData.subjects]
                            if (checked) {
                              subjects.push("other")
                            } else {
                              const index = subjects.indexOf("other")
                              if (index > -1) subjects.splice(index, 1)
                            }
                            setFormData({ ...formData, subjects })
                          }}
                        />
                        <label htmlFor="other_subject" className="text-sm">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Continue
                  </Button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex">
                      <Info className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-blue-800 mb-1">Email Verification Required</h3>
                        <p className="text-sm text-blue-700">
                          After submitting, you'll need to verify your email address to activate your account.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked === true })}
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-indigo-600 hover:underline">
                          Terms of Service
                        </a>
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreePrivacy}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked === true })}
                        required
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-indigo-600 hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={formData.agreeMarketing}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeMarketing: checked === true })}
                      />
                      <label htmlFor="marketing" className="text-sm text-gray-700">
                        I'd like to receive updates about new features and educational resources
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700"
                      disabled={loading || !formData.agreeTerms || !formData.agreePrivacy}
                    >
                      {loading ? "Creating Account..." : "Create Teacher Account"}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

