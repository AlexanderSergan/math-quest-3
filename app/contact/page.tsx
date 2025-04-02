import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | MathQuest",
  description: "Get in touch with the MathQuest team or find answers to frequently asked questions.",
}

export default function ContactPage() {
  return (
    <div>
      <ContactPageClient />
      <div className="mt-6 p-4 bg-muted rounded-lg">
        <h3 className="font-medium mb-2">Are you a teacher?</h3>
        <p className="text-sm text-muted-foreground mb-3">
          We offer specialized support for educators implementing Math Quest in their classrooms.
        </p>
        <Button asChild variant="outline" size="sm">
          <Link href="/teachers/contact">Visit Teacher Support</Link>
        </Button>
      </div>
    </div>
  )
}

