"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type UserType = "child" | "parent" | "teacher" | "guest"

interface AuthContextType {
  userType: UserType
  isChild: boolean
}

const AuthContext = createContext<AuthContextType>({
  userType: "guest",
  isChild: false,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // In a real app, this would come from your auth system
  // For now, we'll simulate it based on localStorage or route
  const [userType, setUserType] = useState<UserType>("guest")

  useEffect(() => {
    // This is a placeholder - in a real app, you'd get this from your auth system
    const storedUserType = localStorage.getItem("userType") as UserType | null
    if (storedUserType) {
      setUserType(storedUserType)
    }
  }, [])

  const isChild = userType === "child"

  return <AuthContext.Provider value={{ userType, isChild }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

