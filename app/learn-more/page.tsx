import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, CheckCircle, Trophy } from "lucide-react"

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MathQuest
            </Link>
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
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">How MathQuest Works</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Curriculum-aligned learning made fun through interactive lessons, engaging quizzes, and a rewarding point
          system.
        </p>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Lessons</h3>
            <p className="text-gray-600">
              Engaging, visual lessons following the current UK National Curriculum. Each topic includes videos,
              animations, and interactive examples.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Adaptive Quizzes</h3>
            <p className="text-gray-600">
              Knowledge-checking quizzes that adapt to your child's level. Instant feedback helps reinforce learning and
              identify areas for improvement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Trophy className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Reward System</h3>
            <p className="text-gray-600">
              Motivate learning with house points and parent-set rewards. Children earn points for completing lessons
              and quizzes that can be exchanged for real rewards.
            </p>
          </div>
        </div>

        {/* For Parents Section with CTA */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">For Parents</h2>
              <p className="text-gray-600 mb-6">
                Help your child excel with curriculum-aligned learning that's actually fun. MathQuest gives you:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">
                    <strong>Complete visibility</strong> of your child's progress
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">
                    <strong>Custom rewards</strong> you define (like "Pizza Night" or game time)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">
                    <strong>Current UK curriculum</strong> aligned with what they learn at school
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">
                    <strong>Full control</strong> over gamification features and screen time
                  </span>
                </li>
              </ul>

              <Link href="/signup">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Your Free Trial
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-2 text-center">First 3 lessons free. No credit card required.</p>
            </div>
            <div className="md:w-1/2 bg-blue-50 p-8 md:p-12 flex items-center">
              <div className="bg-white rounded-lg shadow-md p-6 w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900">Parent Dashboard</h3>
                  <span className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded-full">Live Updates</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Mathematics</span>
                      <span className="text-sm text-blue-600">75% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Achievements</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Completed Addition & Subtraction Module</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Custom Rewards</h4>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-gray-600">Pizza Night</span>
                      </div>
                      <span className="text-green-600">Unlocked!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Highlight */}
        <div className="bg-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Current UK Curriculum</h2>
          <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            All content is aligned with the latest UK National Curriculum standards, ensuring what your child learns
            with us complements their school education.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-gray-900">Mathematics</h3>
              <p className="text-sm text-gray-600 mt-1">Year 1-6</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-gray-900">English</h3>
              <p className="text-sm text-gray-600 mt-1">Year 1-6</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-gray-900">Science</h3>
              <p className="text-sm text-gray-600 mt-1">Year 1-6</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-gray-900">Geography</h3>
              <p className="text-sm text-gray-600 mt-1">Year 1-6</p>
            </div>
          </div>
        </div>

        {/* For Teachers Section with CTA */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden mb-16 text-white">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">For Teachers</h2>
              <p className="mb-6 text-white/90">
                Enhance your classroom teaching with curriculum-perfect digital resources. MathQuest offers:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-300 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-white/90">
                    <strong>Class progress tracking</strong> with detailed analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-300 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-white/90">
                    <strong>Ready-made lessons</strong> aligned with UK curriculum
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-300 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-white/90">
                    <strong>Homework assignment</strong> and automatic grading
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-300 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-white/90">
                    <strong>School-wide accounts</strong> with special pricing
                  </span>
                </li>
              </ul>

              <Link href="/teachers">
                <Button size="lg" variant="secondary" className="w-full">
                  Request School Demo
                </Button>
              </Link>
              <p className="text-sm text-white/80 mt-2 text-center">
                Special pricing available for schools and districts.
              </p>
            </div>
            <div className="md:w-1/2 bg-indigo-900/20 p-8 md:p-12 flex items-center">
              <div className="bg-white rounded-lg shadow-md p-6 w-full text-gray-900">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Teacher Dashboard</h3>
                  <span className="text-sm bg-purple-100 text-purple-800 py-1 px-2 rounded-full">Class View</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Class 5B Progress</h4>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div>
                        <div className="bg-green-100 text-green-800 rounded-md p-2 mb-1">85%</div>
                        <span className="text-gray-600">On Track</span>
                      </div>
                      <div>
                        <div className="bg-yellow-100 text-yellow-800 rounded-md p-2 mb-1">10%</div>
                        <span className="text-gray-600">Need Help</span>
                      </div>
                      <div>
                        <div className="bg-blue-100 text-blue-800 rounded-md p-2 mb-1">5%</div>
                        <span className="text-gray-600">Advanced</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Activity</h4>
                    <div className="text-sm text-gray-600">
                      <p>• 23 assignments completed</p>
                      <p>• 5 students need intervention</p>
                      <p>• 3 students exceeding expectations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of families making learning fun and effective with MathQuest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required. Cancel anytime.</p>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-blue-600">MathQuest</span>
              <p className="text-sm text-gray-600 mt-1">© 2025 MathQuest. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

