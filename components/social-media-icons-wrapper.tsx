"use client"

import { SocialMediaIcons } from "./social-media-icons"
import { useIsChildRoute } from "@/hooks/use-is-child-route"

export function SocialMediaIconsWrapper() {
  const isChildRoute = useIsChildRoute()

  if (isChildRoute) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded-full shadow-lg">
      <SocialMediaIcons />
    </div>
  )
}

