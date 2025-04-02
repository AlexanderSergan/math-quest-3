import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Heart, BookOpen, Shield, Calendar, Clock } from "lucide-react"

export function HomeschoolingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-2/5 bg-gradient-to-br from-teal-500 to-green-600 p-8 md:p-10 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Homeschooling Success</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
                    <p className="italic text-white/90 mb-4">
                      "MathQuest gave me the confidence to homeschool successfully. Now my daughter asks to do math
                      first thing every morning!"
                    </p>
                    <p className="font-medium">— Emma R., Homeschooling Parent</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left flex items-center">
                      <div className="mr-3 bg-white/20 p-2 rounded-full">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Daily learning</div>
                        <div className="text-xl font-bold">42 min</div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left flex items-center">
                      <div className="mr-3 bg-white/20 p-2 rounded-full">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Curriculum</div>
                        <div className="text-xl font-bold">100% aligned</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 md:p-10">
                <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
                  <Home className="mr-2 h-4 w-4" />
                  For Homeschooling Families
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Give Your Child the <span className="text-teal-600">Gift of Confidence</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  You don't need to be a math expert. MathQuest provides everything you need to nurture your child's
                  natural curiosity and build lasting confidence.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                    <h3 className="text-xl font-bold text-teal-800 mb-3 flex items-center">
                      <Shield className="mr-2 h-5 w-5" />
                      Peace of Mind for Parents
                    </h3>
                    <p className="text-gray-700">
                      "Am I doing enough?" MathQuest ensures you're giving your child an exceptional math education
                      tailored to their unique needs.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                        <Calendar className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Flexible Learning</h4>
                        <p className="mt-1 text-gray-600">Learn at your own pace and schedule</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Complete Curriculum</h4>
                        <p className="mt-1 text-gray-600">Every topic with clear progression</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/homeschooling">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-all">
                      Start Your Homeschooling Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/homeschooling/sample-schedule">
                    <Button size="lg" variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50">
                      View Sample Schedule
                    </Button>
                  </Link>
                </div>
                <div className="mt-6 bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-yellow-800">
                      Limited time: 20% off annual plans with code <span className="font-bold">HOMESCHOOL23</span>
                    </p>
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

