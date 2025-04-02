import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { HomepageModalHandler } from "@/app/homepage-modal-handler"
import { SiteFooter } from "@/components/site-footer"
import { FreeTrialTracker } from "@/components/free-trial-tracker"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SocialMediaIconsWrapper } from "@/components/social-media-icons-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MathQuest - Interactive Learning Platform",
  description: "Make learning fun and effective with MathQuest's interactive lessons and activities.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <HomepageModalHandler />
          <FreeTrialTracker />
          <SocialMediaIconsWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'