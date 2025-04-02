import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Star, Award, Clock } from "lucide-react"

export function TeacherCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 p-8 md:p-10">
                <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="mr-2 h-4 w-4" />
                  For Teachers & Schools
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Transform Math from <span className="text-indigo-600">Dreaded</span> to{" "}
                  <span className="text-indigo-600">Loved</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Watch your students' eyes light up as math becomes their favorite subject. Our teacher dashboard gives
                  you powerful tools with minimal prep time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Star className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Boost Engagement</h3>
                      <p className="mt-1 text-gray-600">Turn reluctant learners into enthusiastic participants</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Award className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Track Progress</h3>
                      <p className="mt-1 text-gray-600">Monitor achievements with detailed insights</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Personalized Learning</h3>
                      <p className="mt-1 text-gray-600">Support every student at their own pace</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Save Time</h3>
                      <p className="mt-1 text-gray-600">Reclaim hours spent on planning and marking</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/teachers">
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all">
                      Transform Your Classroom
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/teachers/demo">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                    >
                      Watch 2-Min Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-2/5 bg-gradient-to-br from-indigo-500 to-blue-600 p-8 md:p-10 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Teacher Success Stories</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                      ))}
                    </div>
                    <p className="italic text-white/90 mb-4">
                      "After three weeks with MathQuest, my most reluctant student is now the first to volunteer
                      answers. The transformation has been incredible."
                    </p>
                    <p className="font-medium">— Sarah Wilson, Year 5 Teacher</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-2xl font-bold">94%</div>
                      <div className="text-xs">increased engagement</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-2xl font-bold">5.2h</div>
                      <div className="text-xs">saved per week</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-2xl font-bold">89%</div>
                      <div className="text-xs">improved results</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

