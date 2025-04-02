"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Gift, Trophy, Star, Plus, Save, Trash2 } from "lucide-react"

interface RewardSettingsProps {
  childName: string
}

export function RewardSettings({ childName }: RewardSettingsProps) {
  const [rewards, setRewards] = useState([
    {
      id: 1,
      title: "Extra Screen Time",
      description: "30 minutes of additional screen time",
      points: 100,
      isActive: true,
      type: "parent",
    },
    {
      id: 2,
      title: "Choose Dinner",
      description: "Choose what's for dinner one night",
      points: 150,
      isActive: true,
      type: "parent",
    },
    {
      id: 3,
      title: "Special Outing",
      description: "Trip to favorite place",
      points: 300,
      isActive: true,
      type: "parent",
    },
    {
      id: 4,
      title: "Math Wizard Badge",
      description: "Complete 10 math lessons",
      points: 0,
      isActive: true,
      type: "system",
      requirement: "10 math lessons",
    },
    {
      id: 5,
      title: "Science Explorer Badge",
      description: "Complete 5 science experiments",
      points: 0,
      isActive: true,
      type: "system",
      requirement: "5 science lessons",
    },
  ])

  const [newReward, setNewReward] = useState({
    title: "",
    description: "",
    points: 100,
  })

  const toggleRewardStatus = (id: number) => {
    setRewards(rewards.map((reward) => (reward.id === id ? { ...reward, isActive: !reward.isActive } : reward)))
  }

  const addReward = () => {
    if (newReward.title.trim() === "") return

    setRewards([
      ...rewards,
      {
        id: Date.now(),
        title: newReward.title,
        description: newReward.description,
        points: newReward.points,
        isActive: true,
        type: "parent",
      },
    ])

    setNewReward({
      title: "",
      description: "",
      points: 100,
    })
  }

  return (
    <div className="space-y-6">
      <Card className="border-indigo-100 bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 w-full"></div>
        <CardHeader>
          <CardTitle>Reward Settings</CardTitle>
          <CardDescription>Customize rewards for {childName}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="parent-rewards">
            <TabsList className="mb-6 bg-white border border-gray-200">
              <TabsTrigger
                value="parent-rewards"
                className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-700"
              >
                Parent Rewards
              </TabsTrigger>
              <TabsTrigger
                value="system-rewards"
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
              >
                System Rewards
              </TabsTrigger>
              <TabsTrigger
                value="module-rewards"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
              >
                Module Rewards
              </TabsTrigger>
            </TabsList>

            <TabsContent value="parent-rewards">
              <div className="space-y-4">
                {rewards
                  .filter((reward) => reward.type === "parent")
                  .map((reward) => (
                    <div key={reward.id} className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="bg-white p-2 rounded-full">
                            <Gift className="h-5 w-5 text-amber-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{reward.title}</h4>
                            <p className="text-sm text-gray-600">{reward.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                            {reward.points} points
                          </div>
                          <div className="flex items-center">
                            <Switch
                              id={`reward-${reward.id}`}
                              checked={reward.isActive}
                              onCheckedChange={() => toggleRewardStatus(reward.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                <div className="p-4 border border-dashed border-gray-300 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Add New Reward</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="reward-title">Reward Title</Label>
                      <Input
                        id="reward-title"
                        placeholder="e.g., Ice Cream Trip"
                        value={newReward.title}
                        onChange={(e) => setNewReward({ ...newReward, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="reward-description">Description</Label>
                      <Input
                        id="reward-description"
                        placeholder="e.g., Trip to the ice cream shop"
                        value={newReward.description}
                        onChange={(e) => setNewReward({ ...newReward, description: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="reward-points">Points Required</Label>
                      <Input
                        id="reward-points"
                        type="number"
                        min="1"
                        value={newReward.points}
                        onChange={(e) => setNewReward({ ...newReward, points: Number.parseInt(e.target.value) || 0 })}
                      />
                    </div>
                    <Button onClick={addReward} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Reward
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="system-rewards">
              <div className="space-y-4">
                {rewards
                  .filter((reward) => reward.type === "system")
                  .map((reward) => (
                    <div key={reward.id} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="bg-white p-2 rounded-full">
                            <Trophy className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{reward.title}</h4>
                            <p className="text-sm text-gray-600">{reward.description}</p>
                            <p className="text-xs text-gray-500 mt-1">Requirement: {reward.requirement}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            System Badge
                          </div>
                          <div className="flex items-center">
                            <Switch
                              id={`reward-${reward.id}`}
                              checked={reward.isActive}
                              onCheckedChange={() => toggleRewardStatus(reward.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-600">
                    System rewards are automatically assigned based on achievements in the platform. You can enable or
                    disable them, but cannot modify their requirements.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="module-rewards">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-full">
                        <Star className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Mathematics Module Completion</h4>
                        <p className="text-sm text-gray-600">Reward for completing a mathematics module</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        50 points
                      </div>
                      <div className="flex items-center">
                        <Switch id="math-module-reward" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-full">
                        <Star className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">English Module Completion</h4>
                        <p className="text-sm text-gray-600">Reward for completing an English module</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        50 points
                      </div>
                      <div className="flex items-center">
                        <Switch id="english-module-reward" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-full">
                        <Star className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Science Module Completion</h4>
                        <p className="text-sm text-gray-600">Reward for completing a science module</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        50 points
                      </div>
                      <div className="flex items-center">
                        <Switch id="science-module-reward" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-full">
                        <Star className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Geography Module Completion</h4>
                        <p className="text-sm text-gray-600">Reward for completing a geography module</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        50 points
                      </div>
                      <div className="flex items-center">
                        <Switch id="geography-module-reward" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Trash2 className="h-4 w-4 mr-2" />
            Reset to Default
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

