"use client"

import { usePathname } from "next/navigation"
import { useAuth } from "./use-auth"

export function useIsChildRoute() {
  const pathname = usePathname()
  const { isChild } = useAuth()

  // List of routes that are child-specific
  const childRoutes = ["/child-dashboard", "/games-arena", "/rewards", "/achievements", "/lessons", "/quizzes"]

  // Check if current path starts with any child route
  const isChildRoute = childRoutes.some((route) => pathname === route || pathname?.startsWith(`${route}/`))

  // Return true if either the user is a child or we're on a child route
  return isChild || isChildRoute
}

