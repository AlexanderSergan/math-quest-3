"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  Crown,
  GamepadIcon as GameController,
  Rocket,
  Star,
  Trophy,
  Users,
  ChevronRight,
  Sparkles,
  BarChart3,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function GamesArenaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <header className="bg-white border-b-4 border-rainbow-gradient shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mr-2">
                MathQuest
              </span>
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">
                Year 5 • 2025
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-blue-200 text-blue-600">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-blue-100">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                EXCLUSIVE FEATURE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
                  Games Arena
                </span>
                : Where Math Becomes an Adventure
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Exciting math games designed to make learning fun, boost confidence, and improve skills through play.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 w-full sm:w-auto shadow-md transition-all"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-200 text-purple-600 w-full sm:w-auto shadow-sm transition-all"
                  >
                    <GameController className="mr-2 h-5 w-5" />
                    Log In to Play
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-xs font-medium text-blue-800">
                    JT
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-xs font-medium text-green-800">
                    SM
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-xs font-medium text-purple-800">
                    KL
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center text-xs font-medium text-yellow-800">
                    +
                  </div>
                </div>
                <p className="ml-4 text-sm text-gray-600">
                  Joined by <span className="font-medium">1,500+</span> kids playing math games daily
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Trophy className="h-6 w-6 text-indigo-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Games</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Rocket Blast */}
            <Card className="border-0 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-600"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Rocket Blast</h3>
                <p className="mb-4 text-gray-600">
                  Race against the clock solving math problems to launch your rocket into space!
                </p>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500 text-sm">4.9 (256 ratings)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">Year 5</span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">30-sec Timer</span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">Space Theme</span>
                </div>
                <div className="mt-4">
                  <Link href="/signup">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Play Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Fortnite Crate Crack */}
            <Card className="border-0 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="h-3 bg-gradient-to-r from-green-400 to-blue-600"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-full bg-green-100 text-green-500">
                    <GameController className="h-8 w-8" />
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                    KIDS FAVORITE
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Fortnite Crate Crack</h3>
                <p className="mb-4 text-gray-600">
                  Solve equations to unlock special Fortnite-themed crates and collect rewards!
                </p>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500 text-sm">4.8 (312 ratings)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full">Year 5</span>
                  <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full">Fortnite Theme</span>
                  <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full">Collectibles</span>
                </div>
                <div className="mt-4">
                  <Link href="/signup">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                      Play Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Number Rush */}
            <Card className="border-0 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="h-3 bg-gradient-to-r from-amber-400 to-red-600"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-full bg-amber-100 text-amber-500">
                    <Brain className="h-8 w-8" />
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                    BRAIN BOOSTER
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Number Rush</h3>
                <p className="mb-4 text-gray-600">
                  Test your speed with rapid-fire number challenges and beat your high score!
                </p>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500 text-sm">4.7 (189 ratings)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full">Year 5</span>
                  <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full">Speed Challenge</span>
                  <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full">High Scores</span>
                </div>
                <div className="mt-4">
                  <Link href="/signup">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700">
                      Play Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Plus many more games, with new ones added regularly!</p>
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
              >
                Start Playing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Why Kids Love Our Games Arena</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <GameController className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fun First Approach</h3>
                <p className="text-gray-600">
                  Games designed to be genuinely fun, with learning cleverly woven into the gameplay.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Trophy className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rewards & Recognition</h3>
                <p className="text-gray-600">
                  Earn points, unlock achievements, and climb the leaderboard as you master math skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Brain className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skill Building</h3>
                <p className="text-gray-600">
                  Improves mental math, problem-solving, and critical thinking while having fun.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Learning</h3>
                <p className="text-gray-600">
                  Compete with friends, share achievements, and learn together in a supportive environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Crown className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidence Building</h3>
                <p className="text-gray-600">
                  Success in games translates to increased confidence in classroom math challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Curriculum Aligned</h3>
                <p className="text-gray-600">
                  All games are designed to reinforce key Year 5 math concepts from the UK curriculum.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Star className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">What Kids & Parents Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 rounded-xl shadow-md bg-purple-50 border border-purple-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "I used to hate math practice, but Rocket Blast makes it so fun! I've improved my times tables so much
                  and I'm now top of my class!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-sm font-medium text-purple-800 mr-3">
                    JT
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jamie, 10</p>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 rounded-xl shadow-md bg-blue-50 border border-blue-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "As a parent, I was skeptical about 'learning games,' but the Games Arena has transformed my
                  daughter's attitude toward math. She asks to practice every day!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-sm font-medium text-blue-800 mr-3">
                    SW
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah W.</p>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 rounded-xl shadow-md bg-green-50 border border-green-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The Fortnite Crate Crack game is AMAZING! I've learned so much about fractions and I don't even
                  realize I'm doing math. Can we have more games please?"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-sm font-medium text-green-800 mr-3">
                    AK
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alex, 9</p>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">How the Games Arena Works</h2>
          </div>

          <Card className="border-0 rounded-2xl shadow-md overflow-hidden">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>

                  {/* Step 1 */}
                  <div className="relative mb-12">
                    <div className="flex items-center mb-2">
                      <div className="w-1/2 pr-8 text-right">
                        <h4 className="text-xl font-bold text-purple-600">Sign Up for MathQuest</h4>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-600">
                          Create your free account to access the Games Arena and all its features
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative mb-12">
                    <div className="flex items-center mb-2">
                      <div className="w-1/2 pr-8 text-right">
                        <p className="text-gray-600">
                          Choose from our collection of math games designed for Year 5 students
                        </p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="w-1/2 pl-8">
                        <h4 className="text-xl font-bold text-purple-600">Select Your Game</h4>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative mb-12">
                    <div className="flex items-center mb-2">
                      <div className="w-1/2 pr-8 text-right">
                        <h4 className="text-xl font-bold text-purple-600">Play & Learn</h4>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-600">Have fun playing while reinforcing important math concepts</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <div className="w-1/2 pr-8 text-right">
                        <p className="text-gray-600">Earn points, unlock achievements, and climb the leaderboard</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="w-1/2 pl-8">
                        <h4 className="text-xl font-bold text-purple-600">Collect Rewards</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
                  >
                    Start Your Gaming Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Trophy className="h-6 w-6 text-indigo-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Access the Games Arena</h2>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-0 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">MathQuest Premium</h3>
                <p className="opacity-90">Complete access to all content including Games Arena</p>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">£50</span>
                  <span className="text-gray-600 ml-1">/year</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Full access to the Games Arena</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">All Year 5 mathematics topics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Interactive lessons & quizzes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Parent progress dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Printable worksheets</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                    Start Free Trial
                  </Button>
                </Link>
                <p className="text-sm text-center text-gray-500 mt-4">Try 3 games for free, no credit card required</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <Card className="border-0 rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-8">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Math Fun?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of Year 5 students who've transformed their math learning with our Games Arena.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                  <Link href="/signup">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Start Your Free Trial
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    >
                      Log In to Play
                    </Button>
                  </Link>
                </div>
                <p className="text-sm opacity-80">No credit card required. Try 3 games completely free.</p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 MathQuest • Making learning fun for kids everywhere! 🚀</p>
        </div>
      </footer>

      {/* Add a custom style for the rainbow border */}
      <style jsx global>{`
        .border-rainbow-gradient {
          border-image: linear-gradient(to right, #ff5757, #ffbd59, #4cd964, #5ac8fa, #af52de) 1;
        }
      `}</style>
    </div>
  )
}

