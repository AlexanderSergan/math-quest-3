"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Gift, Plus, Settings, Trash2 } from "lucide-react"

export default function ParentRewardsPage() {
  const [rewards, setRewards] = useState([
    {
      id: "reward1",
      title: "Pizza Night",
      description: "Enjoy a delicious pizza night with your family!",
      pointsRequired: 100,
      module: "Mathematics",
      status: "available",
    },
    {
      id: "reward2",
      title: "Fortnite Skin",
      description: "Get a new Fortnite skin of your choice!",
      pointsRequired: 150,
      module: "History",
      status: "locked",
    },
    {
      id: "reward3",
      title: "Dress to Impress",
      description: "Choose a new outfit for a special occasion!",
      pointsRequired: 200,
      module: "Science",
      status: "locked",
    },
    {
      id: "reward4",
      title: "Movie Night",
      description: "Pick any movie for a family movie night!",
      pointsRequired: 200,
      module: "All Subjects",
      status: "locked",
    },
  ])

  const [pendingRewards, setPendingRewards] = useState([
    {
      id: "pending1",
      title: "Pizza Night",
      description: "Enjoy a delicious pizza night with your family!",
      child: "Alex",
      claimedDate: "Today, 10:23 AM",
      status: "pending",
    },
  ])

  const [newReward, setNewReward] = useState({
    title: "",
    description: "",
    pointsRequired: "",
    module: "",
  })

  const handleAddReward = () => {
    const reward = {
      id: `reward${rewards.length + 1}`,
      title: newReward.title,
      description: newReward.description,
      pointsRequired: Number.parseInt(newReward.pointsRequired),
      module: newReward.module,
      status: "locked",
    }

    setRewards([...rewards, reward])
    setNewReward({
      title: "",
      description: "",
      pointsRequired: "",
      module: "",
    })
  }

  const handleDeleteReward = (id: string) => {
    setRewards(rewards.filter((reward) => reward.id !== id))
  }

  const handleFulfillReward = (id: string) => {
    setPendingRewards(pendingRewards.filter((reward) => reward.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-blue-600">MathQuest</span>
              <span className="text-gray-500 ml-2">Parent Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="text-gray-700">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  Log out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/parent-dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Reward Management</h1>
          <p className="text-gray-600">Create and manage rewards for your child</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Manage Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="active">
                  <TabsList className="mb-4">
                    <TabsTrigger value="active">Active Rewards</TabsTrigger>
                    <TabsTrigger value="pending">Pending Rewards</TabsTrigger>
                  </TabsList>

                  <TabsContent value="active">
                    <div className="space-y-4">
                      {rewards.map((reward) => (
                        <Card key={reward.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-bold text-gray-900">{reward.title}</h3>
                                <p className="text-sm text-gray-500">{reward.description}</p>
                                <div className="flex items-center mt-2 space-x-3">
                                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                    {reward.module}
                                  </span>
                                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                                    {reward.pointsRequired} points
                                  </span>
                                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                                    {reward.status === "locked" ? "Locked" : "Available"}
                                  </span>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => handleDeleteReward(reward.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Reward
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Create New Reward</DialogTitle>
                            <DialogDescription>
                              Add a new reward that your child can earn by completing modules or earning house points.
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="title">Reward Title</Label>
                              <Input
                                id="title"
                                placeholder="e.g., Pizza Night"
                                value={newReward.title}
                                onChange={(e) => setNewReward({ ...newReward, title: e.target.value })}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="description">Description</Label>
                              <Input
                                id="description"
                                placeholder="Describe the reward"
                                value={newReward.description}
                                onChange={(e) => setNewReward({ ...newReward, description: e.target.value })}
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="points">Points Required</Label>
                                <Input
                                  id="points"
                                  type="number"
                                  placeholder="e.g., 100"
                                  value={newReward.pointsRequired}
                                  onChange={(e) => setNewReward({ ...newReward, pointsRequired: e.target.value })}
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="module">Module</Label>
                                <Select
                                  onValueChange={(value) => setNewReward({ ...newReward, module: value })}
                                  value={newReward.module}
                                >
                                  <SelectTrigger id="module">
                                    <SelectValue placeholder="Select module" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Science">Science</SelectItem>
                                    <SelectItem value="History">History</SelectItem>
                                    <SelectItem value="Geography">Geography</SelectItem>
                                    <SelectItem value="All Subjects">All Subjects</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>

                          <DialogFooter>
                            <Button type="submit" onClick={handleAddReward}>
                              Add Reward
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TabsContent>

                  <TabsContent value="pending">
                    {pendingRewards.length > 0 ? (
                      <div className="space-y-4">
                        {pendingRewards.map((reward) => (
                          <Card key={reward.id}>
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center">
                                    <h3 className="font-bold text-gray-900">{reward.title}</h3>
                                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                      Claimed
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-500">{reward.description}</p>
                                  <div className="flex items-center mt-2 space-x-3">
                                    <span className="text-xs text-gray-500">
                                      Claimed by {reward.child} • {reward.claimedDate}
                                    </span>
                                  </div>
                                </div>
                                <Button size="sm" onClick={() => handleFulfillReward(reward.id)}>
                                  Mark as Fulfilled
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Gift className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                        <p>No pending rewards to fulfill</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Gamification Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Enable House Points</h3>
                      <p className="text-sm text-gray-500">Allow your child to earn and track house points</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" name="toggle" id="toggle-points" className="sr-only" defaultChecked />
                      <label
                        htmlFor="toggle-points"
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      >
                        <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition ease-in-out duration-200"></span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Enable Rewards System</h3>
                      <p className="text-sm text-gray-500">Allow your child to earn and claim rewards</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" name="toggle" id="toggle-rewards" className="sr-only" defaultChecked />
                      <label
                        htmlFor="toggle-rewards"
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      >
                        <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition ease-in-out duration-200"></span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Show Leaderboard</h3>
                      <p className="text-sm text-gray-500">Allow your child to see rankings</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" name="toggle" id="toggle-leaderboard" className="sr-only" defaultChecked />
                      <label
                        htmlFor="toggle-leaderboard"
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      >
                        <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition ease-in-out duration-200"></span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full">Save Settings</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Reward Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-medium text-blue-700">Activity-Based Rewards</h3>
                    <ul className="text-sm text-blue-600 mt-1 space-y-1">
                      <li>• Trip to the park or playground</li>
                      <li>• Movie night with popcorn</li>
                      <li>• Baking or cooking together</li>
                      <li>• Extra bedtime story</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <h3 className="font-medium text-green-700">Privilege Rewards</h3>
                    <ul className="text-sm text-green-600 mt-1 space-y-1">
                      <li>• Extra screen time</li>
                      <li>• Later bedtime on weekend</li>
                      <li>• Choose dinner for a night</li>
                      <li>• No chores for a day</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h3 className="font-medium text-purple-700">Item Rewards</h3>
                    <ul className="text-sm text-purple-600 mt-1 space-y-1">
                      <li>• Small toy or game</li>
                      <li>• Book of their choice</li>
                      <li>• Art supplies</li>
                      <li>• Digital rewards (game currency)</li>
                    </ul>
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

