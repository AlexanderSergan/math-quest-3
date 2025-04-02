import { TeacherSidebar } from "@/components/teacher-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Plus, Star, Trophy } from "lucide-react"

export default function TeacherRewards() {
  return (
    <div className="flex h-screen bg-gray-50">
      <TeacherSidebar activePage="rewards" />

      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">House Points & Rewards</h1>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="mr-2 h-4 w-4" />
              Award Points
            </Button>
          </div>
        </header>

        <main className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* House Points Summary */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-red-700">Red House</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="h-8 w-8 text-red-500 mr-2" />
                    <span className="text-2xl font-bold text-red-700">345</span>
                  </div>
                  <Button size="sm" className="bg-red-500 hover:bg-red-600">
                    <Plus className="mr-1 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-700">Blue House</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="h-8 w-8 text-blue-500 mr-2" />
                    <span className="text-2xl font-bold text-blue-700">412</span>
                  </div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    <Plus className="mr-1 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-700">Yellow House</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="h-8 w-8 text-yellow-500 mr-2" />
                    <span className="text-2xl font-bold text-yellow-700">287</span>
                  </div>
                  <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600">
                    <Plus className="mr-1 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-700">Green House</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="h-8 w-8 text-green-500 mr-2" />
                    <span className="text-2xl font-bold text-green-700">329</span>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Plus className="mr-1 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Top Performers</h2>
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Student</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">House</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Points</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm text-gray-900">Emma Smith</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                          Blue
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">78</td>
                      <td className="px-4 py-3 text-sm">
                        <Button size="sm" variant="outline" className="mr-2">
                          <Award className="h-4 w-4 mr-1" />
                          Award
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm text-gray-900">Jacob Turner</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">Red</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">72</td>
                      <td className="px-4 py-3 text-sm">
                        <Button size="sm" variant="outline" className="mr-2">
                          <Award className="h-4 w-4 mr-1" />
                          Award
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm text-gray-900">Olivia Parker</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
                          Yellow
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">65</td>
                      <td className="px-4 py-3 text-sm">
                        <Button size="sm" variant="outline" className="mr-2">
                          <Award className="h-4 w-4 mr-1" />
                          Award
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 text-sm text-gray-900">Noah Wilson</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                          Green
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">61</td>
                      <td className="px-4 py-3 text-sm">
                        <Button size="sm" variant="outline" className="mr-2">
                          <Award className="h-4 w-4 mr-1" />
                          Award
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Sophia Lee</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                          Blue
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">58</td>
                      <td className="px-4 py-3 text-sm">
                        <Button size="sm" variant="outline" className="mr-2">
                          <Award className="h-4 w-4 mr-1" />
                          Award
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Awards</h2>
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        You awarded 5 points to Emma Smith (Blue House)
                      </p>
                      <p className="text-xs text-gray-500">Today at 10:23 AM - For excellent work in mathematics</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">You awarded 10 points to Red House</p>
                      <p className="text-xs text-gray-500">Yesterday at 2:15 PM - For winning the weekly quiz</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        You awarded 3 points to Jacob Turner (Red House)
                      </p>
                      <p className="text-xs text-gray-500">2 days ago - For helping a classmate</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        You awarded 5 points to Olivia Parker (Yellow House)
                      </p>
                      <p className="text-xs text-gray-500">3 days ago - For excellent presentation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

