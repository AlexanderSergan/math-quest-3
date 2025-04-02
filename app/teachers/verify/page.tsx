"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, CheckCircle, Mail, RefreshCw } from "lucide-react"

export default function TeacherVerifyPage() {
  const router = useRouter()
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const [loading, setLoading] = useState(false)
  const [resendDisabled, setResendDisabled] = useState(true)
  const [countdown, setCountdown] = useState(60)
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "error">("idle")

  useEffect(() => {
    if (countdown > 0 && resendDisabled) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false)
    }
  }, [countdown, resendDisabled])

  const handleCodeChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d*$/.test(value)) return

    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      if (prevInput) prevInput.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").trim()

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split("")
      setVerificationCode(newCode)

      // Focus the last input
      const lastInput = document.getElementById("code-5")
      if (lastInput) lastInput.focus()
    }
  }

  const handleResendCode = () => {
    setResendDisabled(true)
    setCountdown(60)

    // Simulate sending a new code
    setTimeout(() => {
      // Code resent logic would go here
    }, 1000)
  }

  const handleVerify = () => {
    const code = verificationCode.join("")

    // Check if code is complete
    if (code.length !== 6) return

    setVerificationStatus("verifying")
    setLoading(true)

    // Simulate verification
    setTimeout(() => {
      setLoading(false)
      setVerificationStatus("success")

      // Redirect to confirmation page after successful verification
      setTimeout(() => {
        router.push("/teachers/confirmation")
      }, 1500)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col">
      <div className="container mx-auto px-4 py-4">
        <Link href="/teachers/signup" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Sign Up
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-indigo-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Verify Your Email</CardTitle>
            <CardDescription className="text-center">
              We've sent a 6-digit verification code to your email address. Please enter it below to verify your
              account.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-center mb-6">
                  {verificationCode.map((digit, index) => (
                    <Input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      className="w-12 h-12 text-center text-lg mx-1 p-0"
                    />
                  ))}
                </div>

                {verificationStatus === "error" && (
                  <p className="text-red-500 text-sm text-center">Invalid verification code. Please try again.</p>
                )}

                {verificationStatus === "success" && (
                  <div className="flex items-center justify-center text-green-500 space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Verification successful!</span>
                  </div>
                )}
              </div>

              <Button
                onClick={handleVerify}
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                disabled={verificationCode.join("").length !== 6 || loading || verificationStatus === "success"}
              >
                {loading ? "Verifying..." : "Verify Email"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Didn't receive the code?</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleResendCode}
                  disabled={resendDisabled}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  {resendDisabled ? (
                    <span className="flex items-center">
                      <RefreshCw className="h-3 w-3 mr-2 animate-spin" />
                      Resend in {countdown}s
                    </span>
                  ) : (
                    "Resend Code"
                  )}
                </Button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-500">
              Need help?{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Contact Support
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

