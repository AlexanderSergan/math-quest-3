"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Quote, CheckCircle } from "lucide-react"
import HomepageModalHandler from "@/components/homepage-modal-handler"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories from Real Families</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover how MathQuest has transformed learning for thousands of Year 5 children following the UK National
              Curriculum
            </p>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <p className="mt-4 text-xl font-medium">4.8/5 average rating from over 2,500 families</p>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Parent Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {/* Testimonial 1 */}
              <div className="bg-blue-50 rounded-xl p-8 relative">
                <Quote className="absolute top-4 right-4 h-10 w-10 text-blue-200" />
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-bold text-xl">SJ</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sarah Johnson</h3>
                    <p className="text-gray-600">Mother of James (10) and Emma (8)</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Before MathQuest, getting my children to practice maths was a daily battle. Now they actually ask to
                  do their lessons! The reward system has been a game-changer for our family. James improved his Year 5
                  SATs practice scores by 23% in just one term, and his teacher has noticed a huge difference in his
                  confidence with place value and fractions."
                </p>
                <div className="flex items-center">
                  <div className="flex mr-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">Parent for 6 months</span>
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg border border-blue-100">
                  <p className="font-medium text-blue-800">
                    James' favorite reward: A new Minecraft expansion pack after completing the fractions module
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-purple-50 rounded-xl p-8 relative">
                <Quote className="absolute top-4 right-4 h-10 w-10 text-purple-200" />
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-700 font-bold text-xl">RP</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Robert Patel</h3>
                    <p className="text-gray-600">Father of Aisha (9)</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Aisha used to dread maths homework. Since using MathQuest, she's not only improved her marks in her
                  Year 5 maths assessments but actually tells her friends about what she's learning! The house points
                  system reminds her of school and has sparked her competitive side. As a busy parent, I appreciate how
                  the platform follows the National Curriculum and provides detailed progress reports aligned with UK
                  attainment targets."
                </p>
                <div className="flex items-center">
                  <div className="flex mr-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">Parent for 1 year</span>
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg border border-purple-100">
                  <p className="font-medium text-purple-800">
                    Aisha's favorite reward: Family trip to the science museum after completing all Year 5 modules
                  </p>
                </div>
              </div>
            </div>

            {/* Child Testimonials */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Children Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Child 1 */}
              <div className="bg-green-50 rounded-xl p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-bold">T</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Thomas, age 10</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "I used to think maths was boring but now it's like playing a game. I love getting house points and
                  badges. My friends and I compete to see who can get the most points!"
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Child 2 */}
              <div className="bg-yellow-50 rounded-xl p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-700 font-bold">L</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Lucy, age 9</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The videos explain things better than my textbook. I got to choose a pizza night with my family after
                  I finished all my addition lessons. Now I'm working on multiplication to get a new book!"
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Child 3 */}
              <div className="bg-red-50 rounded-xl p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-700 font-bold">O</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Oliver, age 11</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "I was struggling with fractions but the MathQuest lessons made it easy to understand. I like that I
                  can go at my own pace and the quizzes are actually fun. I've earned 3 rewards so far!"
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Teacher Testimonials */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Teachers Say</h2>

            <div className="bg-blue-600 rounded-xl p-8 text-white mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">MS</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-bold text-xl mb-2">Ms. Susan Williams</h3>
                  <p className="text-white/80 mb-1">Year 5 Teacher, Oakwood Primary School</p>
                  <p className="mb-4 italic">
                    "As a Year 5 teacher with 15 years of experience in UK primary schools, I've seen many educational
                    platforms come and go. MathQuest stands out because it truly understands the UK National Curriculum
                    requirements for Year 5 mathematics. The content alignment with our maths mastery approach is
                    spot-on, covering everything from formal written methods to fractions and decimals. I've seen
                    remarkable improvements in SATs practice scores from pupils who use it regularly. The gamification
                    elements create healthy competition similar to our house system, and parents tell me their children
                    are practicing maths voluntarily at home!"
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Real Results</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
                  <p className="text-gray-700">of parents report increased enthusiasm for maths</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
                  <p className="text-gray-700">of children show improved test scores within 3 months</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">45 min</div>
                  <p className="text-gray-700">average increase in weekly study time</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Independent Study Results</h3>
                <p className="text-gray-700 mb-4">
                  In a 6-month study conducted across 12 primary schools, students using MathQuest showed:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      23% higher improvement in Year 5 SATs-style mathematics assessments compared to control group
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Significant increase in confidence and willingness to attempt challenging problems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Higher retention of key concepts when tested 3 months later</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 italic">Study conducted by Educational Research Institute, 2024</p>
              </div>
            </div>

            {/* UK Curriculum Alignment */}
            <div className="bg-blue-50 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Year 5 UK Curriculum Alignment</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl text-blue-600 mb-4">Number and Place Value</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Reading, writing, ordering and comparing numbers to 1,000,000
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Counting forwards and backwards in powers of 10</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Interpreting negative numbers in context</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Rounding numbers to nearest 10, 100, 1,000, 10,000 and 100,000
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl text-blue-600 mb-4">Addition and Subtraction</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Adding and subtracting whole numbers with more than 4 digits
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Using formal written methods (columnar addition and subtraction)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Mental calculation strategies with increasingly large numbers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Using rounding to check answers and determine accuracy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl text-blue-600 mb-4">Multiplication and Division</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Identifying multiples, factors, prime numbers, square and cube numbers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Multiplying and dividing by 10, 100 and 1,000</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Long multiplication for 4-digit by 2-digit numbers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Division with remainders and interpreting remainders appropriately
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl text-blue-600 mb-4">Fractions, Decimals and Percentages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Comparing and ordering fractions with different denominators
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Converting between mixed numbers and improper fractions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Reading and writing decimal numbers as fractions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Understanding percentages and converting between fractions, decimals and percentages
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Ofsted-Ready Learning</h3>
                <p className="text-gray-700 mb-4">
                  MathQuest has been developed with input from UK qualified teachers and educational consultants to
                  ensure it meets the standards expected in Ofsted inspections. Our platform helps parents provide
                  evidence of structured learning that:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Follows a coherent, well-sequenced curriculum aligned with national standards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Provides regular assessment and feedback on progress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Develops mathematical fluency, reasoning and problem-solving skills
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Supports preparation for Year 6 SATs and transition to secondary education
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Join Thousands of Happy Families</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Whether you're supporting school learning or homeschooling, MathQuest provides everything you need to
                help your Year 5 child succeed with the UK National Curriculum
              </p>
              <div className="bg-blue-500/30 p-4 rounded-lg mb-6 max-w-2xl mx-auto">
                <p className="text-white font-medium">
                  "As a homeschooling parent, MathQuest has been invaluable. It gives me confidence that we're covering
                  all the required Year 5 curriculum topics in the right sequence."
                  <span className="block mt-2 text-sm font-normal">— Emma T., Homeschooling parent of 2</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg font-bold">
                    Start Your Free Trial Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  id="try-sample-lesson-btn"
                  onClick={() => {
                    const modal = document.getElementById("sample-lesson-modal")
                    if (modal) modal.classList.remove("hidden")
                  }}
                  className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto text-lg font-bold"
                >
                  Try a Sample Lesson First
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>3 free lessons</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Full access to parent dashboard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Complete Year 5 curriculum</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">How does the reward system work?</h3>
                <p className="text-gray-700">
                  Parents set custom rewards in their dashboard that their children can earn by completing modules and
                  lessons. Children can see their progress toward each reward, creating motivation to continue learning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Is MathQuest aligned with the UK curriculum?</h3>
                <p className="text-gray-700">
                  Yes! All our content is carefully designed to align with the 2025 UK National Curriculum for Year 5.
                  We cover all key mathematics topics including place value, the four operations, fractions, decimals,
                  percentages, measurement, geometry, and statistics. Our lessons follow the same progression as
                  schools, ensuring children are learning exactly what they need to succeed in their Year 5 assessments
                  and prepare for Year 6 SATs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  How much time should my child spend on MathQuest?
                </h3>
                <p className="text-gray-700">
                  We recommend 20-30 minutes, 3-4 times per week for optimal results. The platform is designed to be
                  engaging but not overwhelming, and you can monitor usage through the parent dashboard.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Can I use MathQuest alongside school homework?</h3>
                <p className="text-gray-700">
                  MathQuest is designed to complement school learning. Many parents find that regular use of MathQuest
                  makes homework easier as children have a stronger grasp of key concepts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  What if my child is struggling with a particular topic?
                </h3>
                <p className="text-gray-700">
                  MathQuest adapts to your child's learning pace. If they're struggling with a concept, the system will
                  provide additional practice and alternative explanations. The parent dashboard also highlights areas
                  where your child might need extra support.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Is MathQuest suitable for homeschooling?</h3>
                <p className="text-gray-700">
                  Absolutely! MathQuest is an ideal resource for homeschooling families. Our comprehensive coverage of
                  the Year 5 UK National Curriculum ensures your child is learning all required topics. The structured
                  approach, detailed progress tracking, and ready-made lessons save homeschooling parents significant
                  planning time. Many homeschooling families use MathQuest as their primary mathematics resource, with
                  the confidence that it meets all curriculum requirements and will prepare children for any
                  assessments.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact">
                <Button variant="outline" className="border-blue-200 text-blue-600">
                  Have more questions? Contact us
                </Button>
              </Link>
            </div>
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
      <HomepageModalHandler />
    </div>
  )
}

