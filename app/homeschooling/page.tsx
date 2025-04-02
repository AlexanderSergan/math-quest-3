"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, CheckCircle, Clock, FileText, HelpCircle, Home, Star, Users } from "lucide-react"
import { SampleLessonModal } from "@/components/sample-lesson-modal"
import { Badge } from "@/components/ui/badge"

export default function HomeschoolingPage() {
  const [sampleLessonOpen, setSampleLessonOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer">MathQuest</span>
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

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
                <Home className="mr-2 h-4 w-4" />
                Homeschooling for Year 5 (2025 UK Curriculum)
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Year 5 Homeschooling Resources (2025 UK Curriculum)
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get a complete, easy-to-follow learning plan that makes homeschooling effective and fun for your Year 5
                child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup?role=homeschool">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                    Start Your Homeschooling Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  onClick={() => setSampleLessonOpen(true)}
                  className="bg-amber-500 hover:bg-amber-600 text-white w-full sm:w-auto"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Try Sample Lessons
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
              Solving the Challenges of Homeschooling
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We understand the unique challenges faced by homeschooling parents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {/* Pain Point 1 */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Curriculum Uncertainty</h3>
                <p className="text-gray-600 mb-4">
                  "Am I teaching the right content? Will my child fall behind their peers in school?"
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Our solution:</span> Complete Year 5 curriculum coverage, perfectly
                      aligned with the 2025 UK National Curriculum standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Point 2 */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Time Pressure</h3>
                <p className="text-gray-600 mb-4">
                  "I don't have time to plan lessons, create materials, and research teaching methods."
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Our solution:</span> Ready-to-use lesson plans, interactive
                      activities, and printable worksheets that require zero preparation time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Point 3 */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment Challenges</h3>
                <p className="text-gray-600 mb-4">
                  "How do I know if my child is making progress? How do I identify areas where they need help?"
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Our solution:</span> Built-in assessments, progress tracking, and
                      detailed reports that highlight strengths and areas for improvement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Point 4 */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Isolation</h3>
                <p className="text-gray-600 mb-4">
                  "We feel isolated from other learners. My child misses the social aspect of school."
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Our solution:</span> Community forums, virtual study groups, and
                      optional collaborative projects that connect homeschooling families.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Point 5 */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Engagement Struggles</h3>
                <p className="text-gray-600 mb-4">
                  "It's hard to keep my child motivated and excited about learning every day."
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Our solution:</span> Gamified learning with rewards, interactive
                      lessons, and personalized learning paths that keep children engaged.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Point 6 */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teaching Confidence</h3>
                <p className="text-gray-600 mb-4">
                  "I'm not a trained teacher. How can I effectively explain complex concepts?"
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Our solution:</span> Clear teaching guides, video explanations, and
                      parent resources that build your confidence as a home educator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Coverage */}
        <section className="py-10 md:py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
              Complete Year 5 Curriculum Coverage
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive coverage of the entire Year 5 UK curriculum.
            </p>

            <div className="text-center mb-8">
              <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200 text-sm py-1 px-3">
                Currently Available: Mathematics | Other Subjects Coming Soon
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-blue-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-600">Mathematics</h3>
                  <Badge className="bg-green-500">Available Now</Badge>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-700">Number and Place Value</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-700">Addition and Subtraction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-700">Multiplication and Division</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-700">Fractions and Decimals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-700">Measurement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-700">Geometry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-700">Statistics</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button onClick={() => setSampleLessonOpen(true)} className="w-full bg-blue-600 hover:bg-blue-700">
                    Try Sample Lesson
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 opacity-80">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-purple-600">English</h3>
                  <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">
                    Coming Soon
                  </Badge>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Reading Comprehension</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Writing Composition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Vocabulary, Grammar & Punctuation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Spelling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Handwriting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Speaking & Listening</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                    Coming Q3 2025
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 opacity-80">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-green-600">Science</h3>
                  <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">
                    Coming Soon
                  </Badge>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Living Things and Habitats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Animals Including Humans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Properties and Changes of Materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Earth and Space</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Forces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                    <span className="text-gray-500">Working Scientifically</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                    Coming Q2 2025
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Additional subjects including History, Geography, Art & Design, Computing, Design & Technology, Music,
                and Physical Education are in development and will be released throughout 2025.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View Full Curriculum Details
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
              Hear From Homeschooling Families
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of parents who have successfully homeschooled with MathQuest.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">EM</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Emma Mitchell</h4>
                    <p className="text-gray-600 text-sm">Homeschooling mother of two</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "After struggling to find the right resources, MathQuest was a game-changer for our homeschooling
                  journey. The structured curriculum and progress tracking gave me confidence that my son was meeting
                  all the Year 5 requirements."
                </p>
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">JT</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">James Thompson</h4>
                    <p className="text-gray-600 text-sm">Father homeschooling Year 5 daughter</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The interactive lessons and gamification elements keep my daughter engaged for hours. She's actually
                  excited about math now! The detailed reports help me understand exactly where she needs more support."
                </p>
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">SL</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah Lewis</h4>
                    <p className="text-gray-600 text-sm">Homeschooling parent of three</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "As someone with no teaching background, I was nervous about homeschooling. MathQuest provides
                  everything I need - lesson plans, teaching guides, and assessments. The community support from other
                  homeschooling parents is invaluable."
                </p>
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features for Homeschoolers */}
        <section className="py-10 md:py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
              Designed for Homeschooling Families
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Unique features that address the specific needs of home educators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Learning Schedule</h3>
                  <p className="text-gray-600 mb-4">
                    Set your own pace and schedule. Our curriculum adapts to your family's unique rhythm, allowing you
                    to speed up or slow down based on your child's needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Customizable daily and weekly schedules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Progress tracking that accommodates your pace</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Ability to focus more time on challenging concepts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Parent Resources</h3>
                  <p className="text-gray-600 mb-4">
                    Everything you need to teach with confidence, even without a teaching background.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Detailed teaching guides for each lesson</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Video tutorials on teaching complex concepts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Answer keys and assessment rubrics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Printable Resources</h3>
                  <p className="text-gray-600 mb-4">
                    Extensive library of printable worksheets, activities, and materials for offline learning.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Worksheets for every lesson and concept</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Hands-on activity guides and materials lists</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Printable assessments and progress trackers</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Homeschooling Community</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with other homeschooling families for support, advice, and socialization opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Private forums for homeschooling parents</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Virtual study groups for children</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                      <span className="text-gray-700">Regional meetup coordination for local families</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">Getting Started is Easy</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Begin your homeschooling journey in just three simple steps.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

                {/* Step 1 */}
                <div className="relative mb-12">
                  <div className="flex items-center mb-2">
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="text-xl font-bold text-green-600">Sign Up for Your Free Trial</h4>
                      <p className="text-gray-600 mt-2">
                        Try MathQuest free for 14 days with full access to all features and curriculum materials.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="w-1/2 pl-8">
                      <img
                        src="/placeholder.svg?height=120&width=200"
                        alt="Sign up process"
                        className="rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative mb-12">
                  <div className="flex items-center mb-2">
                    <div className="w-1/2 pr-8 text-right">
                      <img
                        src="/placeholder.svg?height=120&width=200"
                        alt="Assessment process"
                        className="rounded-lg shadow-sm ml-auto"
                      />
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="w-1/2 pl-8">
                      <h4 className="text-xl font-bold text-green-600">Complete the Initial Assessment</h4>
                      <p className="text-gray-600 mt-2">
                        A simple assessment helps us understand your child's current level and customize their learning
                        path.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="text-xl font-bold text-green-600">Start Your Homeschooling Journey</h4>
                      <p className="text-gray-600 mt-2">
                        Access your personalized curriculum, lesson plans, and resources to begin teaching with
                        confidence.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="w-1/2 pl-8">
                      <img
                        src="/placeholder.svg?height=120&width=200"
                        alt="Learning dashboard"
                        className="rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/signup?role=homeschool">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start Your Free 14-Day Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="mt-4 text-gray-600">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Get answers to common questions about homeschooling with MathQuest.
            </p>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Is MathQuest aligned with UK homeschooling requirements?
                </h3>
                <p className="text-gray-700">
                  Yes, MathQuest is fully aligned with the 2025 UK National Curriculum for Year 5. Our curriculum meets
                  all legal requirements for homeschooling in the UK and provides comprehensive coverage of all required
                  subjects.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How much time will I need to spend teaching each day?
                </h3>
                <p className="text-gray-700">
                  MathQuest is designed to be flexible. Most families spend 3-4 hours per day on structured learning
                  activities. Our lesson plans are clearly timed, and you can adjust the schedule to fit your family's
                  needs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Do I need teaching experience to use MathQuest?
                </h3>
                <p className="text-gray-700">
                  Not at all! MathQuest is designed for parents without teaching backgrounds. Our detailed lesson
                  guides, video tutorials, and step-by-step instructions make it easy to teach any subject with
                  confidence.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How will I know if my child is making progress?
                </h3>
                <p className="text-gray-700">
                  MathQuest includes regular assessments and detailed progress tracking. You'll receive reports showing
                  your child's strengths, areas for improvement, and overall progress compared to national standards.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Can I use MathQuest alongside other homeschooling resources?
                </h3>
                <p className="text-gray-700">
                  While MathQuest provides a complete curriculum, many families use it alongside other resources. Our
                  flexible structure makes it easy to integrate with other homeschooling materials and approaches.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/homeschooling/faq">
                <Button variant="outline" className="border-green-200 text-green-600">
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 md:py-16 bg-gradient-to-r from-green-500 to-blue-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Transform Your Homeschooling Experience?</h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto opacity-90">
              Join thousands of families providing a world-class education at home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup?role=homeschool">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                onClick={() => setSampleLessonOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white w-full sm:w-auto"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Try Sample Lessons
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-80">No credit card required. 14-day free trial. Cancel anytime.</p>
          </div>
        </section>
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
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sample Lesson Modal */}
      <SampleLessonModal open={sampleLessonOpen} onOpenChange={setSampleLessonOpen} />
    </div>
  )
}

