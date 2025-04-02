"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Copy, RefreshCw, Shield } from "lucide-react"
import { useState } from "react"

interface ChildLoginInfoProps {
  username: string
  pin: string
}

export function ChildLoginInfo({ username, pin }: ChildLoginInfoProps) {
  const [showPin, setShowPin] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const generateNewPin = () => {
    // In a real app, this would call an API to update the PIN
    alert("In a real app, this would generate a new PIN")
  }

  return (
    <Card className="border-indigo-100 bg-white overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 w-full"></div>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          <Shield className="h-5 w-5 mr-2 text-blue-500" />
          Child Login Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <User className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Username</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-blue-600"
                onClick={() => copyToClipboard(username, "username")}
              >
                <Copy className="h-3.5 w-3.5 mr-1" />
                {copied === "username" ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100 font-medium text-gray-900">{username}</div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">PIN</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-blue-600"
                  onClick={() => setShowPin(!showPin)}
                >
                  {showPin ? "Hide" : "Show"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-blue-600"
                  onClick={() => copyToClipboard(pin, "pin")}
                >
                  <Copy className="h-3.5 w-3.5 mr-1" />
                  {copied === "pin" ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100 font-medium text-gray-900">
              {showPin ? pin : "••••"}
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-xs text-gray-500">Last login: Today, 10:23 AM</span>
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-200" onClick={generateNewPin}>
              <RefreshCw className="h-3.5 w-3.5 mr-1" />
              Generate New PIN
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

