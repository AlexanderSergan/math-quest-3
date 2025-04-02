"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Home, Trophy, Star, Gift, Check } from "lucide-react"
import { HomepageModalHandler } from "@/components/homepage-modal-handler"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("parents")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-blue-600">
            MathQuest
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="border-gray-200 text-blue-600 rounded-md px-6 py-2 h-auto">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-md px-6 py-2 h-auto">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 py-8 md:py-16 relative overflow-hidden">
          {/* Dynamic background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700"></div>

          {/* Large shape bottom right */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/40 rounded-full -mr-64 mb-[-400px] animate-pulse-slow"></div>

          {/* Additional dynamic shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/30 rounded-full blur-lg animate-float-slow"></div>

          {/* Subtle wave pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path
                fill="rgba(255, 255, 255, 0.3)"
                fillOpacity="1"
                d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,213.3C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1 bg-white text-blue-700 rounded-full text-sm font-medium mb-5">
                UK Year 5 Curriculum • 2025 Aligned
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Maths They'll <span className="text-yellow-300">Love</span> to Learn
              </h1>

              <p className="text-lg text-white mb-8">
                Fun, adaptive lessons and games to kickstart your child's learning!
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
                <Link href="/signup">
                  <Button className="bg-white hover:bg-gray-100 text-blue-600 rounded-md px-6 py-2 h-auto text-base font-medium w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  id="try-sample-lesson-btn"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md px-6 py-2 h-auto text-base font-medium w-full sm:w-auto"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Try Sample Lesson
                </Button>
                <Link href="/homeschooling">
                  <Button
                    variant="outline"
                    className="bg-teal-500 hover:bg-teal-600 text-white border-none rounded-md px-6 py-2 h-auto text-base font-medium w-full sm:w-auto"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Homeschooling
                  </Button>
                </Link>
              </div>

              <div className="inline-flex items-center bg-blue-500/40 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-xs font-medium text-blue-800 border-2 border-blue-500">
                    JT
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-xs font-medium text-green-800 border-2 border-blue-500">
                    SM
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-xs font-medium text-purple-800 border-2 border-blue-500">
                    KL
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center text-xs font-medium text-yellow-800 border-2 border-blue-500">
                    +
                  </div>
                </div>
                <p className="text-white text-sm font-medium">
                  <span className="font-bold">2,500+</span> families across the UK
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-12 bg-white relative overflow-hidden" id="benefits">
          {/* Dynamic background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full opacity-50 blur-3xl"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                WHY MATHQUEST
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning That Clicks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Curriculum-aligned lessons with fun games to spark a love for learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Benefit 1 */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 -mr-16 -mt-16"></div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Motivating Rewards</h3>
                <p className="text-gray-600 text-center">
                  Set custom rewards that inspire your child to learn, from pizza nights to game time.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full opacity-20 -mr-16 -mt-16"></div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Curriculum Aligned</h3>
                <p className="text-gray-600 text-center">
                  Every lesson follows the UK Year 5 curriculum, ensuring mastery of essential skills.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full opacity-20 -mr-16 -mt-16"></div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                  <Gift className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Progress Tracking</h3>
                <p className="text-gray-600 text-center">
                  Monitor your child's learning journey with detailed reports highlighting strengths.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Moved up for visibility */}
        <section className="py-12 bg-blue-50 relative overflow-hidden">
          {/* Dynamic background elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                PRICING
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Affordable Fun</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kick off with 3 free classes, then unlock all of MathQuest for just £50/year.
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 -mr-20 -mt-20"></div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    viewBox="0 0 1440 320"
                    className="absolute top-0 left-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="rgba(255, 255, 255, 0.1)"
                      d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,96C480,96,549,128,617,154.7C685.7,181,754,203,823,197.3C891.4,192,960,160,1029,154.7C1097.1,149,1166,171,1234,176C1302.9,181,1371,171,1406,165.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 relative">Full Access</h3>
                <p className="opacity-90 relative">Complete access to all mathematics content</p>
              </div>
              <div className="p-6 relative">
                <div className="flex justify-center items-baseline mb-6">
                  <span className="text-5xl font-bold text-gray-900">£50</span>
                  <span className="text-gray-600 ml-2">/year</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-600">All Year 5 mathematics topics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-600">Interactive lessons & quizzes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-600">Parent progress dashboard</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-md transition-all relative overflow-hidden group">
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </Link>
                <p className="text-sm text-center text-gray-500 mt-4">No card needed—try 3 classes free!</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white relative overflow-hidden" id="how-it-works">
          {/* Dynamic background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute bottom-40 left-20 w-60 h-60 bg-purple-50 rounded-full opacity-70 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                HOW IT WORKS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning That Fits Everyone</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                MathQuest creates a seamless experience for the whole family.
              </p>
            </div>

            {/* Tabs for Parents and Children */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white p-2 rounded-xl shadow-md mb-8 mx-auto flex justify-center w-fit relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
                <button
                  onClick={() => setActiveTab("parents")}
                  className={`px-8 py-3 rounded-lg font-medium transition-all relative z-10 ${
                    activeTab === "parents" ? "bg-blue-600 text-white shadow-md" : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  For Parents
                </button>
                <button
                  onClick={() => setActiveTab("children")}
                  className={`px-8 py-3 rounded-lg font-medium transition-all relative z-10 ${
                    activeTab === "children" ? "bg-blue-600 text-white shadow-md" : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  For Children
                </button>
              </div>

              {/* Parents Tab Content */}
              {activeTab === "parents" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-blue-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-10 -mr-20 -mt-20"></div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 relative">
                      <Gift className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 mb-3">Custom Rewards That Work</h3>
                    <p className="text-gray-600 mb-4">
                      Set rewards that motivate <em>your</em> child. From pizza nights to game time, you decide what
                      works best.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600">Personalized to your child's interests</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600">Celebration animations when earned</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600">Control access to the Games Arena</span>
                      </li>
                    </ul>
                    <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50 rounded-r-md mb-4">
                      <p className="text-gray-600 italic">
                        "My son now asks to practice math so he can earn his Fortnite reward!"
                      </p>
                      <p className="text-sm text-blue-600 font-medium">— Sarah, parent of 10-year-old</p>
                    </div>
                    <Link href="/signup?role=parent">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-md transition-all relative overflow-hidden group">
                        <span className="relative z-10">Create Your Child's Rewards</span>
                        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-blue-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-purple-100 rounded-full opacity-10 -mr-20 -mt-20"></div>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 relative">
                      <Star className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-600 mb-3">Insights & Progress Tracking</h3>
                    <p className="text-gray-600 mb-4">
                      See exactly what your child is learning and where they need support with detailed insights.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600">Visual progress dashboards</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600">Skill mastery tracking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600">Weekly email reports</span>
                      </li>
                    </ul>
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <p className="text-purple-800 font-medium text-center">
                        87% of parents report increased math confidence
                      </p>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md transition-all relative overflow-hidden group"
                      id="parent-dashboard-demo-btn"
                    >
                      <span className="relative z-10">See Dashboard Demo</span>
                      <div className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Button>
                  </div>
                </div>
              )}

              {/* Children Tab Content */}
              {activeTab === "children" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-blue-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full opacity-10 -mr-20 -mt-20"></div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 relative">
                      <Trophy className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 mb-3">Fun Learning Adventures</h3>
                    <p className="text-gray-600 mb-4">
                      Games and activities that make learning feel like playing, not studying.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-gray-600">Interactive games with favorite themes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-gray-600">Animated lessons with fun characters</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-gray-600">Exciting challenges and quests</span>
                      </li>
                    </ul>
                    <div className="border-l-4 border-green-400 pl-4 py-2 bg-green-50 rounded-r-md mb-4">
                      <p className="text-gray-600 italic">
                        "I love playing the math games! It's way more fun than homework!"
                      </p>
                      <p className="text-sm text-green-600 font-medium">— Jamie, 10 years old</p>
                    </div>
                    <Link href="/games-arena">
                      <Button className="w-full bg-green-600 hover:bg-green-700 shadow-md transition-all relative overflow-hidden group">
                        <span className="relative z-10">Explore Fun Games</span>
                        <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-blue-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-full opacity-10 -mr-20 -mt-20"></div>
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 relative">
                      <Gift className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-600 mb-3">Earn Amazing Rewards</h3>
                    <p className="text-gray-600 mb-4">
                      Complete lessons and challenges to earn rewards that you actually want.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-gray-600">Digital badges and trophies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-gray-600">Unlock special game levels</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-gray-600">Real rewards set by your parents</span>
                      </li>
                    </ul>
                    <div className="bg-amber-50 p-4 rounded-lg mb-4">
                      <p className="text-amber-800 font-medium text-center">
                        Compete with friends and top the leaderboard!
                      </p>
                    </div>
                    <Button
                      className="w-full border-amber-200 text-amber-600 hover:bg-amber-50 transition-all"
                      id="leaderboard-demo-btn"
                    >
                      See Leaderboard Demo
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Reward System Section */}
        <section className="py-10 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 relative overflow-hidden">
          {/* Dynamic background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-40 left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-40 blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-3 shadow-sm">
                REWARD SYSTEM
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Turn Learning into a Quest
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transform learning from a chore into an exciting journey of achievement.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden border border-blue-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-10 -ml-32 -mb-32"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {/* Step 1 */}
                <div className="bg-blue-50 p-4 rounded-xl transition-all group hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-blue-700">Parents Set Rewards</h3>
                  </div>
                  <p className="text-gray-600">
                    Choose motivating rewards for module completion that work best for your child.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-blue-50 p-4 rounded-xl transition-all group hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-blue-700">Children Learn & Earn</h3>
                  </div>
                  <p className="text-gray-600">
                    Complete lessons to earn points and unlock achievements on the path to rewards.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-blue-50 p-4 rounded-xl transition-all group hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-blue-700">Track Progress</h3>
                  </div>
                  <p className="text-gray-600">
                    Visual indicators and celebrations keep motivation high throughout learning.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-blue-50 p-4 rounded-xl transition-all group hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm">
                      4
                    </div>
                    <h3 className="text-lg font-bold text-blue-700">Claim Rewards</h3>
                  </div>
                  <p className="text-gray-600">
                    When goals are met, claim rewards with celebratory animations and achievements.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md transition-all px-6 py-2 h-auto rounded-full">
                  <span className="relative z-10">Start Setting Rewards</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Games Arena Section */}
        <section className="py-12 bg-white relative overflow-hidden">
          {/* Dynamic background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-40 left-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-48 h-48 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-bold mb-4 animate-bounce">
                  SUPER COOL NEW FEATURE!
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    EPIC GAMES ARENA!
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Collect points and become the ultimate math champion
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-8 border-2 border-purple-100 transform hover:scale-[1.01] transition-all relative">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200 rounded-full opacity-20 -mr-20 -mt-20 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 -ml-20 -mb-20 blur-xl"></div>
                </div>

                <div className="flex flex-col lg:flex-row relative">
                  <div className="w-full p-6 md:p-8 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      <span className="text-purple-600">🎮</span> Math Games That Are Actually FUN!
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      These aren't boring old math problems - they're epic adventures where YOU are the hero! Solve
                      puzzles, defeat challenges, and level up your math powers!
                    </p>
                    <div className="space-y-6 mb-8">
                      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full opacity-20 -mr-10 -mt-10"></div>
                        <div className="flex items-start relative">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <Trophy className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-purple-700">🚀 Rocket Blast</h4>
                            <p className="mt-1 text-gray-600">
                              Blast off into space! Solve math problems at warp speed to fuel your rocket and zoom past
                              your friends on the leaderboard!
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full opacity-20 -mr-10 -mt-10"></div>
                        <div className="flex items-start relative">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <Star className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-blue-700">🎮 Fortnite Crate Crack</h4>
                            <p className="mt-1 text-gray-600">
                              Use your math skills to unlock epic Fortnite-themed treasure crates filled with virtual
                              rewards and cool surprises!
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full opacity-20 -mr-10 -mt-10"></div>
                        <div className="flex items-start relative">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <Gift className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-green-700">⚡ Number Rush</h4>
                            <p className="mt-1 text-gray-600">
                              How fast can YOU go? Race against the clock in this super-charged number challenge that
                              will test your speed and skills!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Link href="/games-arena">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transition-all text-lg px-8 py-3 h-auto rounded-full animate-pulse relative overflow-hidden group"
                        >
                          <span className="relative z-10">Enter the Games Arena Now!</span>
                          <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Button>
                      </Link>
                      <p className="mt-4 text-purple-600 font-medium">
                        Unlock special powers and climb the leaderboard! 🏆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="hidden md:block py-12 bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl animate-float-slow"></div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Learning into an Adventure?
              </h2>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of families who've made learning fun with MathQuest.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 shadow-lg transition-all w-full sm:w-auto h-12 px-8 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Start Your Free Trial</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </Link>
                <Link href="/testimonials">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50 w-full sm:w-auto h-12 px-8 transition-all"
                  >
                    Read Success Stories
                  </Button>
                </Link>
              </div>
              <p className="mt-3 text-sm text-gray-500">No credit card required. Try 3 classes completely free.</p>
            </div>
          </div>
        </section>

        {/* Teachers Section - Streamlined */}
        <section className="py-12 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-50 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute bottom-40 left-20 w-60 h-60 bg-purple-50 rounded-full opacity-70 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-200 rounded-full opacity-20 -mr-20 -mt-20 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200 rounded-full opacity-20 -ml-20 -mb-20 blur-xl"></div>

              <div className="flex flex-col lg:flex-row relative">
                <div className="w-full p-6 md:p-8 relative z-10">
                  <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                    FOR TEACHERS
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Transform Math from <span className="text-indigo-600">Dreaded</span> to{" "}
                    <span className="text-purple-600">Loved</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Engage your students with interactive lessons, customizable worksheets, and progress tracking tools.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600">Curriculum-aligned lesson plans and resources</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600">Customizable worksheets and assessments</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600">Detailed student progress tracking</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-indigo-400 pl-4 py-2 bg-indigo-50 rounded-r-md mb-6">
                    <p className="text-gray-600 italic">
                      "MathQuest has transformed my classroom. Students who used to dread math now look forward to it!"
                    </p>
                    <p className="text-sm text-indigo-600 font-medium">— Ms. Johnson, Year 5 Teacher</p>
                  </div>

                  <Link href="/teachers">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all relative overflow-hidden group">
                      <span className="relative z-10">Explore Teacher Resources</span>
                      <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Homeschooling Section - Streamlined */}
        <section className="py-12 bg-blue-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-72 h-72 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-40 left-20 w-60 h-60 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
              <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                <path
                  fill="rgba(20, 184, 166, 0.2)"
                  fillOpacity="1"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-200 rounded-full opacity-20 -mr-20 -mt-20 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 -ml-20 -mb-20 blur-xl"></div>

              <div className="flex flex-col lg:flex-row relative">
                <div className="w-full p-6 md:p-8 relative z-10">
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                    HOMESCHOOLING
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Give Your Child the Gift of <span className="text-teal-600">Confidence</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Everything you need to teach math effectively at home, even if you're not a math expert.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600">Complete Year 5 curriculum with step-by-step lessons</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600">Parent guides with teaching tips and explanations</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600">Printable worksheets and hands-on activities</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-teal-400 pl-4 py-2 bg-teal-50 rounded-r-md mb-6">
                    <p className="text-gray-600 italic">
                      "As a homeschooling parent, MathQuest has been a lifesaver. The structured curriculum gives me
                      confidence that I'm covering everything."
                    </p>
                    <p className="text-sm text-teal-600 font-medium">— Rachel, homeschooling parent</p>
                  </div>

                  <Link href="/homeschooling">
                    <Button className="bg-teal-600 hover:bg-teal-700 shadow-md transition-all relative overflow-hidden group">
                      <span className="relative z-10">Explore Homeschool Resources</span>
                      <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomepageModalHandler />

      {/* Add animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          50% { opacity: 0.4; }
          100% { opacity: 0.3; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

