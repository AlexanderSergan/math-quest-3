import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { YoutubeVideo } from "@/components/youtube-video"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function GravityAndWeightPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <ScrollToTop />
      <LessonHeader
        title="Gravity and Weight"
        subject="Science"
        module="Forces"
        bgColor="bg-blue-500"
        textColor="text-white"
      />

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/subjects/science/forces"
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Forces
        </Link>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Learning Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Understand what gravity is and how it works</li>
            <li>Explain the difference between mass and weight</li>
            <li>Discover how gravity varies on different planets</li>
            <li>Learn about the concept of gravitational field strength</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">What is Gravity?</h2>
          <div className="mb-6">
            <YoutubeVideo videoId="EwY6p-r_hyU" title="Introduction to Gravity | Physics | Don't Memorise" />
          </div>
          <p className="text-gray-700 mb-4">
            Gravity is a force that pulls objects toward each other. It's what keeps us on the ground and makes things
            fall when we drop them. Every object in the universe with mass has gravity – the more mass, the stronger the
            gravity.
          </p>
          <p className="text-gray-700 mb-4">
            Earth's gravity pulls everything toward the center of the Earth. This is why when you jump up, you come back
            down!
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-blue-700 mb-2">Did You Know?</h3>
            <p className="text-gray-700">
              Gravity was discovered by Sir Isaac Newton in the 1600s. According to the story, he was inspired when he
              saw an apple fall from a tree!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Mass vs. Weight</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Mass</h3>
              <p className="text-gray-700 mb-2">Mass is the amount of matter in an object.</p>
              <p className="text-gray-700 mb-2">It is measured in kilograms (kg) or grams (g).</p>
              <p className="text-gray-700 mb-2">Mass stays the same no matter where you are in the universe.</p>
              <div className="mt-2 flex justify-center">
                <img
                  src="/placeholder.svg?height=150&width=250"
                  alt="Scale showing mass"
                  className="rounded-md border border-blue-200"
                />
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Weight</h3>
              <p className="text-gray-700 mb-2">Weight is the force of gravity acting on an object.</p>
              <p className="text-gray-700 mb-2">It is measured in newtons (N).</p>
              <p className="text-gray-700 mb-2">Weight changes depending on the gravity where you are.</p>
              <div className="mt-2 flex justify-center">
                <img
                  src="/placeholder.svg?height=150&width=250"
                  alt="Scale showing weight"
                  className="rounded-md border border-blue-200"
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-800">
              <span className="font-bold">Important:</span> Your mass is the same on Earth and on the Moon, but your
              weight is different because the Moon has less gravity than Earth.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-blue-600 mb-3">Calculating Weight</h3>
          <p className="text-gray-700 mb-3">We can calculate weight using this formula:</p>
          <div className="bg-blue-100 p-4 rounded-lg mb-4 text-center">
            <p className="text-blue-800 font-bold text-lg">
              Weight (N) = Mass (kg) × Gravitational Field Strength (N/kg)
            </p>
          </div>
          <p className="text-gray-700 mb-3">On Earth, the gravitational field strength is approximately 9.8 N/kg.</p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Example</h4>
            <p className="text-gray-700 mb-2">If a child has a mass of 30 kg, what is their weight on Earth?</p>
            <p className="text-gray-700 mb-2">Weight = 30 kg × 9.8 N/kg = 294 N</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Gravity on Different Planets</h2>

          <p className="text-gray-700 mb-4">
            The gravitational field strength is different on each planet because they have different masses and sizes.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-blue-200">
              <thead>
                <tr className="bg-blue-100">
                  <th className="py-2 px-4 border-b border-blue-200 text-left">Planet</th>
                  <th className="py-2 px-4 border-b border-blue-200 text-left">Gravitational Field Strength (N/kg)</th>
                  <th className="py-2 px-4 border-b border-blue-200 text-left">Your weight if your mass is 40 kg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-blue-200">Mercury</td>
                  <td className="py-2 px-4 border-b border-blue-200">3.7</td>
                  <td className="py-2 px-4 border-b border-blue-200">148 N</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-blue-200">Venus</td>
                  <td className="py-2 px-4 border-b border-blue-200">8.9</td>
                  <td className="py-2 px-4 border-b border-blue-200">356 N</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-blue-200">Earth</td>
                  <td className="py-2 px-4 border-b border-blue-200">9.8</td>
                  <td className="py-2 px-4 border-b border-blue-200">392 N</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-blue-200">Moon</td>
                  <td className="py-2 px-4 border-b border-blue-200">1.6</td>
                  <td className="py-2 px-4 border-b border-blue-200">64 N</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-blue-200">Mars</td>
                  <td className="py-2 px-4 border-b border-blue-200">3.7</td>
                  <td className="py-2 px-4 border-b border-blue-200">148 N</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-blue-200">Jupiter</td>
                  <td className="py-2 px-4 border-b border-blue-200">24.8</td>
                  <td className="py-2 px-4 border-b border-blue-200">992 N</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">Fun Fact</h3>
            <p className="text-gray-700">
              On Jupiter, you would weigh about 2.5 times more than you do on Earth! On the Moon, you would weigh only
              about 1/6 of your Earth weight, which is why astronauts can jump so high on the Moon.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Gravity in Space</h2>

          <div className="mb-6">
            <YoutubeVideo
              videoId="ng9Qqj0ufQ8"
              title="Why Do Astronauts Float In Space? | Gravity and Orbits | Physics | FuseSchool"
            />
          </div>

          <p className="text-gray-700 mb-4">
            You might wonder why astronauts float in space if gravity exists everywhere. Astronauts in the International
            Space Station (ISS) are actually in a state of "free fall" around the Earth. They are falling toward Earth,
            but they're also moving forward so quickly that they keep missing it!
          </p>

          <p className="text-gray-700 mb-4">
            This creates what we call "weightlessness" or "microgravity." The astronauts still have mass, but they don't
            feel their weight because everything around them is falling at the same rate.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Practice Questions</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Question 1</h3>
              <p className="text-gray-700 mb-3">What is the difference between mass and weight?</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="q1a" name="q1" className="mr-2" />
                  <label htmlFor="q1a" className="text-gray-700">
                    Mass is measured in newtons, weight is measured in kilograms
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1b" name="q1" className="mr-2" />
                  <label htmlFor="q1b" className="text-gray-700">
                    Mass is the amount of matter in an object, weight is the force of gravity on an object
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1c" name="q1" className="mr-2" />
                  <label htmlFor="q1c" className="text-gray-700">
                    Mass changes on different planets, weight stays the same
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1d" name="q1" className="mr-2" />
                  <label htmlFor="q1d" className="text-gray-700">
                    Mass and weight are the same thing
                  </label>
                </div>
              </div>
              <div className="mt-3 p-3 bg-green-100 rounded-lg hidden">
                <p className="text-green-800 font-semibold">
                  Correct answer: Mass is the amount of matter in an object, weight is the force of gravity on an object
                </p>
                <p className="text-green-800">
                  Mass is measured in kilograms (kg) and stays the same everywhere. Weight is measured in newtons (N)
                  and changes depending on gravity.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Question 2</h3>
              <p className="text-gray-700 mb-3">
                If a person has a mass of 50 kg on Earth, what would their mass be on the Moon?
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="q2a" name="q2" className="mr-2" />
                  <label htmlFor="q2a" className="text-gray-700">
                    8.3 kg
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2b" name="q2" className="mr-2" />
                  <label htmlFor="q2b" className="text-gray-700">
                    50 kg
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2c" name="q2" className="mr-2" />
                  <label htmlFor="q2c" className="text-gray-700">
                    300 kg
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2d" name="q2" className="mr-2" />
                  <label htmlFor="q2d" className="text-gray-700">
                    80 N
                  </label>
                </div>
              </div>
              <div className="mt-3 p-3 bg-green-100 rounded-lg hidden">
                <p className="text-green-800 font-semibold">Correct answer: 50 kg</p>
                <p className="text-green-800">
                  Mass stays the same no matter where you are in the universe. Only weight changes with different
                  gravitational fields.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Activity: Calculate Your Weight on Different Planets
          </h2>

          <p className="text-gray-700 mb-4">Follow these steps to calculate your weight on different planets:</p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li>Find your mass in kilograms (if you know your weight in pounds, divide by 2.2 to get kilograms)</li>
            <li>Use the formula: Weight = Mass × Gravitational Field Strength</li>
            <li>Calculate your weight on each planet using the gravitational field strengths from the table above</li>
            <li>Create a bar chart showing your weight on different planets</li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <span className="font-bold">Example:</span> If your mass is 45 kg, your weight on Earth would be:
            </p>
            <p className="text-yellow-800">Weight = 45 kg × 9.8 N/kg = 441 N</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Summary</h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Gravity is a force that pulls objects toward each other</li>
            <li>Mass is the amount of matter in an object (measured in kg) and stays the same everywhere</li>
            <li>Weight is the force of gravity on an object (measured in N) and changes with gravity</li>
            <li>Weight = Mass × Gravitational Field Strength</li>
            <li>Different planets have different gravitational field strengths</li>
            <li>Astronauts appear weightless because they are in a constant state of free fall</li>
          </ul>
        </div>

        <div className="flex justify-between mt-8">
          <Link
            href="/subjects/science/forces/types-of-forces"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Previous Lesson: Types of Forces
          </Link>
          <Link
            href="/subjects/science/forces/friction"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Next Lesson: Friction
          </Link>
        </div>
      </div>
    </div>
  )
}

