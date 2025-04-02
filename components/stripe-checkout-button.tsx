"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface StripeCheckoutButtonProps {
  className?: string
  children?: React.ReactNode
}

export function StripeCheckoutButton({ className, children = "Subscribe Now" }: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)

    // Redirect to a mock Stripe checkout page for demonstration
    // In a real implementation, you would redirect to your actual Stripe checkout page
    setTimeout(() => {
      window.location.href = "/payment/checkout-demo"
    }, 1000)
  }

  return (
    <Button onClick={handleCheckout} disabled={isLoading} className={className}>
      {isLoading ? "Loading..." : children}
    </Button>
  )
}

