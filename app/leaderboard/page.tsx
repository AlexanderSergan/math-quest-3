import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Leaderboard } from "@/components/leaderboard"
import { Trophy, Crown, Star } from "lucide-react"

export default function LeaderboardPage() {
  const currentUserId = "5" // In a real app, this would come from authentication

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 mr-2">MathQuest</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Year 5</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/child-dashboard">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 ml-4">Leaderboard</h1>
        </div>

        <div className="mb-8">
          <Leaderboard currentUserId={currentUserId} initialTab="house-points" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">How to Climb the Leaderboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    1
                  </span>
                  <span>Complete lessons to earn house points</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    2
                  </span>
                  <span>Earn bonus points for perfect quiz scores</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    3
                  </span>
                  <span>Complete daily challenges</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    4
                  </span>
                  <span>Maintain a daily login streak for multipliers</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    5
                  </span>
                  <span>Practice extra problems</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    6
                  </span>
                  <span>Win in games like Rocket Blast and Number Rush</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Rewards for Top Players</h2>
            <div className="space-y-4">
              <div className="border border-amber-100 rounded-lg p-4 bg-amber-50">
                <div className="flex items-center mb-2">
                  <div className="bg-amber-500 p-2 rounded-full mr-3">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-amber-800">Top 3 Students</h3>
                </div>
                <p className="text-sm text-amber-700">
                  The top 3 students each month receive special certificates and digital badges!
                </p>
              </div>

              <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-500 p-2 rounded-full mr-3">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-800">House Cup</h3>
                </div>
                <p className="text-sm text-blue-700">
                  Points contribute to your house total. The winning house receives the House Cup at the end of term!
                </p>
              </div>

              <div className="border border-purple-100 rounded-lg p-4 bg-purple-50">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-500 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-purple-800">Digital Rewards</h3>
                </div>
                <p className="text-sm text-purple-700">
                  Unlock special avatars, backgrounds, and game powerups as you climb the leaderboard ranks!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

