import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface SubscriptionBannerProps {
  className?: string
}

export function SubscriptionBanner({ className = "" }: SubscriptionBannerProps) {
  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-4 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-800">Free Trial Active</h3>
            <p className="text-sm text-amber-700">
              You're currently on a free trial. Upgrade to continue accessing all premium features and content.
            </p>
          </div>
        </div>
        <Link href="/payment">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">Upgrade Now</Button>
        </Link>
      </div>
    </div>
  )
}

