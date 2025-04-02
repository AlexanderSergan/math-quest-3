"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

// Mock authentication for demo purposes
// In a real app, this would connect to a proper auth system
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      try {
        // In a real app, this would verify a token with your backend
        const userString = localStorage.getItem("user")

        if (userString) {
          const userData = JSON.parse(userString)
          setUser(userData)
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        console.error("Auth check error:", error)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Redirect based on auth status and current path
  useEffect(() => {
    if (isLoading) return

    const publicPaths = ["/", "/login", "/signup", "/learn-more", "/faq", "/contact"]
    const isPublicPath = publicPaths.includes(pathname || "") || pathname?.startsWith("/teachers")

    if (!isAuthenticated && !isPublicPath) {
      router.push("/login")
    }

    // Redirect logged in users away from login/signup
    if (isAuthenticated && (pathname === "/login" || pathname === "/signup")) {
      if (user?.role === "parent") {
        router.push("/parent-dashboard")
      } else if (user?.role === "child") {
        router.push("/child-dashboard")
      } else {
        // Default fallback
        router.push("/child-dashboard")
      }
    }
  }, [isAuthenticated, isLoading, pathname, router, user])

  const login = async (email: string, password: string, role: "parent" | "child" = "parent") => {
    // In a real app, this would make an API call
    try {
      // Mock successful login
      let userData

      if (role === "parent") {
        userData = { email, role, name: email.split("@")[0] }
      } else {
        // For child accounts, use username instead of email
        userData = { username: email, role, name: email }
      }

      localStorage.setItem("user", JSON.stringify(userData))
      setUser(userData)
      setIsAuthenticated(true)
      return { success: true }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error: "Invalid credentials" }
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setIsAuthenticated(false)
    router.push("/login")
  }

  return { isAuthenticated, isLoading, user, login, logout }
}

