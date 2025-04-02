"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HousePointsDisplay } from "@/components/house-points-display"
import { RewardCard } from "@/components/reward-card"
import { ArrowLeft, Gift, Trophy } from "lucide-react"

export default function RewardsPage() {
  const totalPoints = 125

  // Sample rewards data
  const moduleRewards = [
    {
      id: 1,
      title: "Pizza Night",
      description: "Enjoy a delicious pizza night with your family!",
      requirement: "Complete Mathematics module",
      isUnlocked: true,
      isClaimed: false,
      type: "module" as const,
    },
    {
      id: 2,
      title: "Fortnite Skin",
      description: "Get a new Fortnite skin of your choice!",
      requirement: "Complete History module",
      isUnlocked: false,
      isClaimed: false,
      type: "module" as const,
    },
    {
      id: 3,
      title: "Dress to Impress",
      description: "Choose a new outfit for a special occasion!",
      requirement: "Complete Science module",
      isUnlocked: false,
      isClaimed: false,
      type: "module" as const,
    },
  ]

  const pointRewards = [
    {
      id: 4,
      title: "Movie Night",
      description: "Watch any movie of your choice with the family!",
      requirement: "Earn 200 house points",
      points: 200,
      isUnlocked: false,
      isClaimed: false,
      type: "points" as const,
    },
    {
      id: 5,
      title: "Game Time",
      description: "Get an extra hour of game time this weekend!",
      requirement: "Earn 150 house points",
      points: 150,
      isUnlocked: false,
      isClaimed: false,
      type: "points" as const,
    },
    {
      id: 6,
      title: "Sweet Treat",
      description: "Enjoy your favorite dessert or sweet treat!",
      requirement: "Earn 100 house points",
      points: 100,
      isUnlocked: true,
      isClaimed: true,
      type: "points" as const,
    },
  ]

  const achievementRewards = [
    {
      id: 7,
      title: "Top of the Class",
      description: "Special reward for reaching the top of the leaderboard!",
      requirement: "Reach #1 on the leaderboard",
      isUnlocked: false,
      isClaimed: false,
      type: "achievement" as const,
    },
    {
      id: 8,
      title: "Perfect Score",
      description: "Reward for getting a perfect score on any quiz!",
      requirement: "Get 100% on any quiz",
      isUnlocked: true,
      isClaimed: true,
      type: "achievement" as const,
    },
  ]

  const handleClaimReward = (rewardId: number) => {
    console.log(`Claiming reward ${rewardId}`)
    // Implement reward claiming logic here
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 mr-2">MathQuest</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Year 5</span>
            </div>
            <div className="flex items-center space-x-4">
              <HousePointsDisplay points={totalPoints} size="sm" />
              <Link href="/child-dashboard">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/child-dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Rewards</h1>
          <p className="text-gray-600">Complete modules and earn points to unlock exciting rewards!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-amber-500" />
                Module Completion Rewards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {moduleRewards.map((reward) => (
                  <RewardCard
                    key={reward.id}
                    title={reward.title}
                    description={reward.description}
                    requirement={reward.requirement}
                    isUnlocked={reward.isUnlocked}
                    isClaimed={reward.isClaimed}
                    type={reward.type}
                    onClaim={() => handleClaimReward(reward.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Gift className="h-5 w-5 mr-2 text-purple-500" />
                House Points Rewards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pointRewards.map((reward) => (
                  <RewardCard
                    key={reward.id}
                    title={reward.title}
                    description={reward.description}
                    requirement={reward.requirement}
                    points={reward.points}
                    isUnlocked={reward.isUnlocked}
                    isClaimed={reward.isClaimed}
                    type={reward.type}
                    onClaim={() => handleClaimReward(reward.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Gift className="h-5 w-5 mr-2 text-blue-500" />
                Achievement Rewards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievementRewards.map((reward) => (
                  <RewardCard
                    key={reward.id}
                    title={reward.title}
                    description={reward.description}
                    requirement={reward.requirement}
                    isUnlocked={reward.isUnlocked}
                    isClaimed={reward.isClaimed}
                    type={reward.type}
                    onClaim={() => handleClaimReward(reward.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <HousePointsDisplay points={totalPoints} showDetails={true} />

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Gift className="h-5 w-5 mr-2 text-purple-500" />
                  Reward Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Total Rewards</span>
                      <span className="text-sm font-medium text-purple-600">2/8 Claimed</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Points Progress</span>
                      <span className="text-sm font-medium text-amber-600">125/200</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: "62.5%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">75 more points until "Movie Night"</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Module Progress</span>
                      <span className="text-sm font-medium text-blue-600">1/3</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "33.3%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Complete 2 more modules for all rewards</p>
                  </div>

                  <div className="pt-2">
                    <Link href="/house-points">
                      <Button variant="outline" className="w-full">
                        View House Points
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

