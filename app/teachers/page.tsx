import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, CheckCircle, ClipboardCheck, Clock, FileText, LineChart, Users } from "lucide-react"

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MathQuest
            </Link>
            <span className="ml-2 text-gray-500">for Teachers</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-blue-200 text-blue-600">
                Log In
              </Button>
            </Link>
            <Link href="/teachers/signup">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-indigo-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Classroom with MathQuest</h1>
              <p className="text-xl mb-8">
                Curriculum-aligned digital resources that save time, engage students, and improve learning outcomes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/teachers/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Sign Up for Free
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Watch Demo Video
                </Button>
              </div>
              <p className="mt-4 text-sm text-white/80">No credit card required. Full access to 3 lessons.</p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How MathQuest Helps Teachers</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Time</h3>
                <p className="text-gray-600">
                  Ready-made lessons, automatic grading, and progress tracking free you to focus on what matters most:
                  teaching.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Engage Students</h3>
                <p className="text-gray-600">
                  Interactive lessons, gamification, and personalized learning paths keep students motivated and excited
                  to learn.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
                <p className="text-gray-600">
                  Detailed analytics and insights help you identify struggling students and adapt your teaching
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Alignment */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfectly Aligned with UK Curriculum</h2>
              <p className="text-xl text-gray-600">
                Every lesson, quiz, and resource follows the latest UK National Curriculum standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Coverage</h3>
                    <p className="text-gray-600">
                      Complete resources for Mathematics, English, Science, and Geography for Years 1-6.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Regular Updates</h3>
                    <p className="text-gray-600">
                      Content is regularly reviewed and updated to reflect curriculum changes and best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Differentiated Learning</h3>
                    <p className="text-gray-600">
                      Resources for all ability levels, with support for SEN and extension activities for advanced
                      learners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment Tools</h3>
                    <p className="text-gray-600">
                      Formative and summative assessments aligned with national standards and testing frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Powerful Features for Teachers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">Classroom Management</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-indigo-100 rounded-full mr-3 mt-1">
                      <Users className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Class Setup</h4>
                      <p className="text-gray-600">Create and manage multiple classes with easy student enrollment.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-indigo-100 rounded-full mr-3 mt-1">
                      <FileText className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Assignment Distribution</h4>
                      <p className="text-gray-600">
                        Assign lessons and quizzes to individuals, groups, or entire classes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-indigo-100 rounded-full mr-3 mt-1">
                      <ClipboardCheck className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Automatic Grading</h4>
                      <p className="text-gray-600">Save time with instant grading and detailed performance reports.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Classroom management dashboard"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 bg-indigo-50 p-6 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Analytics dashboard"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">Insights & Analytics</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-indigo-100 rounded-full mr-3 mt-1">
                      <LineChart className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Performance Tracking</h4>
                      <p className="text-gray-600">Monitor individual and class progress with visual dashboards.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-indigo-100 rounded-full mr-3 mt-1">
                      <Award className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Skill Mastery</h4>
                      <p className="text-gray-600">
                        See which concepts students have mastered and where they need help.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-indigo-100 rounded-full mr-3 mt-1">
                      <BookOpen className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Curriculum Coverage</h4>
                      <p className="text-gray-600">Track progress against curriculum objectives and learning goals.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Teachers Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">JW</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Jane Wilson</h3>
                    <p className="text-sm text-gray-600">Year 5 Teacher, London</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "MathQuest has transformed my classroom. The students are engaged, and I can easily track their
                  progress. The time I save on planning and marking means I can focus on supporting individual
                  students."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">MT</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Mark Thompson</h3>
                    <p className="text-sm text-gray-600">Head of Maths, Manchester</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As a department head, I've seen a significant improvement in test scores since implementing
                  MathQuest. The curriculum alignment is perfect, and the analytics help us identify areas where we need
                  to focus."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">SB</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Sarah Brown</h3>
                    <p className="text-sm text-gray-600">SEN Coordinator, Edinburgh</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The differentiated resources have been a game-changer for our SEN students. They can work at their
                  own pace, and the visual learning tools help them grasp concepts they previously struggled with."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">Affordable options for individual teachers and schools.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Teacher</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-gray-900">£9.99</span>
                    <span className="text-gray-600 ml-2">/ month</span>
                  </div>
                  <p className="text-gray-600">Perfect for individual teachers</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">1 teacher account</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Up to 3 classes</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Full curriculum access</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Basic analytics</span>
                    </li>
                  </ul>
                  <Link href="/teachers/signup" className="block mt-6">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Start Free Trial</Button>
                  </Link>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg shadow-md overflow-hidden transform scale-105">
                <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
                <div className="p-6 border-b border-indigo-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Department</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-gray-900">£29.99</span>
                    <span className="text-gray-600 ml-2">/ month</span>
                  </div>
                  <p className="text-gray-600">Ideal for subject departments</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Up to 5 teacher accounts</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Unlimited classes</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Department reports</span>
                    </li>
                  </ul>
                  <Link href="/teachers/signup" className="block mt-6">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Start Free Trial</Button>
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">School</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-gray-900">Custom</span>
                  </div>
                  <p className="text-gray-600">For whole-school implementation</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Unlimited teacher accounts</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">School-wide analytics</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Admin dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Dedicated support</span>
                    </li>
                  </ul>
                  <Link href="/teachers/contact" className="block mt-6">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Contact Sales</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Teaching?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of teachers using MathQuest to engage students and improve learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/teachers/signup">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Sign Up for Free
                </Button>
              </Link>
              <Link href="/teachers/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/80">No credit card required. Full access to 3 lessons.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

