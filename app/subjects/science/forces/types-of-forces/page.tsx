import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { YoutubeVideo } from "@/components/youtube-video"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function TypesOfForcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <ScrollToTop />
      <LessonHeader
        title="Types of Forces"
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
            <li>Identify and describe different types of forces</li>
            <li>Understand that forces can make objects start or stop moving</li>
            <li>Recognize that forces can change the speed or direction of moving objects</li>
            <li>Explain how forces work in pairs</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Introduction to Forces</h2>
          <div className="mb-6">
            <YoutubeVideo videoId="JvSClZ3vHOI" title="What is Force? | Forces and Motion | Physics | FuseSchool" />
          </div>
          <p className="text-gray-700 mb-4">
            A force is a push or pull that acts upon an object. Forces can make things move, stop moving, speed up, slow
            down, or change direction. Forces are measured in units called Newtons (N).
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Types of Forces</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Contact Forces</h3>
            <p className="text-gray-700 mb-3">Contact forces happen when objects physically touch each other.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Push and Pull Forces</h4>
                <p className="text-gray-700">
                  When you push a door open or pull a drawer out, you're applying a force.
                </p>
                <div className="mt-2 flex justify-center">
                  <img
                    src="/placeholder.svg?height=150&width=250"
                    alt="Push and pull forces illustration"
                    className="rounded-md border border-blue-200"
                  />
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Friction</h4>
                <p className="text-gray-700">A force that opposes motion when two surfaces rub against each other.</p>
                <div className="mt-2 flex justify-center">
                  <img
                    src="/placeholder.svg?height=150&width=250"
                    alt="Friction illustration"
                    className="rounded-md border border-blue-200"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Air Resistance</h4>
                <p className="text-gray-700">The force of air pushing against moving objects, slowing them down.</p>
                <div className="mt-2 flex justify-center">
                  <img
                    src="/placeholder.svg?height=150&width=250"
                    alt="Air resistance illustration"
                    className="rounded-md border border-blue-200"
                  />
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Water Resistance</h4>
                <p className="text-gray-700">
                  Similar to air resistance but in water, making it harder to move through water.
                </p>
                <div className="mt-2 flex justify-center">
                  <img
                    src="/placeholder.svg?height=150&width=250"
                    alt="Water resistance illustration"
                    className="rounded-md border border-blue-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Non-Contact Forces</h3>
            <p className="text-gray-700 mb-3">Non-contact forces can act on objects without touching them.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Gravity</h4>
                <p className="text-gray-700">
                  A force that pulls objects toward each other. Earth's gravity pulls everything toward the center of
                  the Earth.
                </p>
                <div className="mt-2 flex justify-center">
                  <img
                    src="/placeholder.svg?height=150&width=250"
                    alt="Gravity illustration"
                    className="rounded-md border border-blue-200"
                  />
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Magnetism</h4>
                <p className="text-gray-700">
                  A force that can attract or repel certain materials like iron without touching them.
                </p>
                <div className="mt-2 flex justify-center">
                  <img
                    src="/placeholder.svg?height=150&width=250"
                    alt="Magnetism illustration"
                    className="rounded-md border border-blue-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Balanced and Unbalanced Forces</h2>

          <div className="mb-6">
            <YoutubeVideo videoId="YEXUFklwc3g" title="Balanced and Unbalanced Forces | Physics | Don't Memorise" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Balanced Forces</h3>
              <p className="text-gray-700 mb-2">
                When forces acting on an object are equal in size but opposite in direction, they are balanced.
              </p>
              <p className="text-gray-700 mb-2">
                Result: The object stays still or continues moving at the same speed in the same direction.
              </p>
              <div className="mt-2 flex justify-center">
                <img
                  src="/placeholder.svg?height=150&width=250"
                  alt="Balanced forces illustration"
                  className="rounded-md border border-blue-200"
                />
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Unbalanced Forces</h3>
              <p className="text-gray-700 mb-2">When forces acting on an object are not equal, they are unbalanced.</p>
              <p className="text-gray-700 mb-2">
                Result: The object will start moving, speed up, slow down, or change direction.
              </p>
              <div className="mt-2 flex justify-center">
                <img
                  src="/placeholder.svg?height=150&width=250"
                  alt="Unbalanced forces illustration"
                  className="rounded-md border border-blue-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Newton's Laws of Motion</h2>

          <p className="text-gray-700 mb-4">
            Sir Isaac Newton developed three important laws that explain how forces work:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Newton's First Law</h3>
              <p className="text-gray-700">
                An object at rest stays at rest, and an object in motion stays in motion with the same speed and
                direction, unless acted upon by an unbalanced force.
              </p>
              <p className="text-gray-700 mt-2 italic">
                Example: A ball sitting on the ground will stay there until someone kicks it.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Newton's Second Law</h3>
              <p className="text-gray-700">
                The acceleration of an object depends on the force applied and the mass of the object. Force = Mass ×
                Acceleration
              </p>
              <p className="text-gray-700 mt-2 italic">
                Example: It's easier to push an empty shopping cart than a full one.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Newton's Third Law</h3>
              <p className="text-gray-700">For every action, there is an equal and opposite reaction.</p>
              <p className="text-gray-700 mt-2 italic">
                Example: When you jump, you push down on the ground, and the ground pushes up on you.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Practice Questions</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Question 1</h3>
              <p className="text-gray-700 mb-3">Which of these is NOT a type of force?</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="q1a" name="q1" className="mr-2" />
                  <label htmlFor="q1a" className="text-gray-700">
                    Gravity
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1b" name="q1" className="mr-2" />
                  <label htmlFor="q1b" className="text-gray-700">
                    Friction
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1c" name="q1" className="mr-2" />
                  <label htmlFor="q1c" className="text-gray-700">
                    Electricity
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q1d" name="q1" className="mr-2" />
                  <label htmlFor="q1d" className="text-gray-700">
                    Magnetism
                  </label>
                </div>
              </div>
              <div className="mt-3 p-3 bg-green-100 rounded-lg hidden">
                <p className="text-green-800 font-semibold">Correct answer: Electricity</p>
                <p className="text-green-800">
                  Electricity is a form of energy, not a force. Gravity, friction, and magnetism are all types of
                  forces.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Question 2</h3>
              <p className="text-gray-700 mb-3">What happens to an object when balanced forces act on it?</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="q2a" name="q2" className="mr-2" />
                  <label htmlFor="q2a" className="text-gray-700">
                    It speeds up
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2b" name="q2" className="mr-2" />
                  <label htmlFor="q2b" className="text-gray-700">
                    It slows down
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2c" name="q2" className="mr-2" />
                  <label htmlFor="q2c" className="text-gray-700">
                    It stays still or continues moving at the same speed
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="q2d" name="q2" className="mr-2" />
                  <label htmlFor="q2d" className="text-gray-700">
                    It changes direction
                  </label>
                </div>
              </div>
              <div className="mt-3 p-3 bg-green-100 rounded-lg hidden">
                <p className="text-green-800 font-semibold">
                  Correct answer: It stays still or continues moving at the same speed
                </p>
                <p className="text-green-800">
                  When forces are balanced, there is no change in the object's motion. It either remains stationary or
                  continues moving at a constant speed in the same direction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Activity: Force Hunt</h2>

          <p className="text-gray-700 mb-4">
            Look around your home or classroom and identify at least 5 examples of different forces in action. For each
            example:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li>Name the force (e.g., gravity, friction, push, pull)</li>
            <li>Describe what is happening</li>
            <li>Draw a simple diagram showing the direction of the force with arrows</li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <span className="font-bold">Example:</span> A book sitting on a table
            </p>
            <p className="text-yellow-800">
              <span className="font-bold">Forces:</span> Gravity pulling the book down, and the table pushing up on the
              book (these forces are balanced)
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Summary</h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Forces are pushes or pulls that can make objects move, stop, speed up, slow down, or change direction
            </li>
            <li>Contact forces require objects to touch (push, pull, friction)</li>
            <li>Non-contact forces work without touching (gravity, magnetism)</li>
            <li>Balanced forces result in no change in motion</li>
            <li>Unbalanced forces cause changes in motion</li>
            <li>Newton's three laws explain how forces and motion are related</li>
          </ul>
        </div>

        <div className="flex justify-between mt-8">
          <Link
            href="/subjects/science/forces"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Back to Forces
          </Link>
          <Link
            href="/subjects/science/forces/gravity-and-weight"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Next Lesson: Gravity and Weight
          </Link>
        </div>
      </div>
    </div>
  )
}

