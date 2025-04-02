import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="h-40 bg-orange-500 mb-8 rounded-lg flex items-center justify-center">
        <Skeleton className="h-8 w-64 bg-white/20" />
      </div>

      <div className="container mx-auto">
        <Skeleton className="h-10 w-32 mb-6" />

        <Skeleton className="h-64 w-full mb-8 rounded-lg" />

        <Skeleton className="h-96 w-full mb-8 rounded-lg" />

        <div className="flex justify-between">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  )
}

