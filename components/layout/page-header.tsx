import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  backLink?: string
  backLinkText?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, backLink = "/", backLinkText = "Back", children }: PageHeaderProps) {
  return (
    <div className="mb-8">
      {backLink && (
        <div className="mb-4">
          <Link href={backLink}>
            <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="h-4 w-4" />
              {backLinkText}
            </Button>
          </Link>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && <p className="text-gray-500 mt-1">{description}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}

