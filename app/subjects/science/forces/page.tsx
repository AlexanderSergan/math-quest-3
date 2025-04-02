import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SubjectHeader } from "@/components/subject-header"
import { ModuleCard } from "@/components/module-card"

export default function ForcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <ScrollToTop />
      <SubjectHeader title="Forces" subject="Science" bgColor="bg-blue-500" textColor="text-white" />

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/subjects/science"
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Science
        </Link>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">About Forces</h2>
          <p className="text-gray-700 mb-4">
            Forces are pushes or pulls that act upon an object. They can make objects start moving, stop moving, speed
            up, slow down, or change direction. In this module, we'll explore different types of forces, how they work,
            and their effects on objects around us.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding forces helps us explain how things move in our world, from a simple game of football to how
            rockets launch into space!
          </p>
        </div>

        <h3 className="text-xl font-bold text-blue-700 mb-6">Lessons</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ModuleCard
            title="Types of Forces"
            description="Learn about different types of forces including push, pull, gravity, friction, and more."
            href="/subjects/science/forces/types-of-forces"
            bgColor="bg-blue-100"
            borderColor="border-blue-300"
            iconColor="text-blue-500"
          />

          <ModuleCard
            title="Gravity and Weight"
            description="Explore gravity, how it affects objects on Earth, and the difference between mass and weight."
            href="/subjects/science/forces/gravity-and-weight"
            bgColor="bg-blue-100"
            borderColor="border-blue-300"
            iconColor="text-blue-500"
          />

          <ModuleCard
            title="Friction"
            description="Discover how friction works, when it's helpful, when it's not, and how we can increase or decrease it."
            href="/subjects/science/forces/friction"
            bgColor="bg-blue-100"
            borderColor="border-blue-300"
            iconColor="text-blue-500"
          />

          <ModuleCard
            title="Air and Water Resistance"
            description="Learn about resistance forces in air and water and how they affect moving objects."
            href="/subjects/science/forces/air-water-resistance"
            bgColor="bg-blue-100"
            borderColor="border-blue-300"
            iconColor="text-blue-500"
          />

          <ModuleCard
            title="Mechanisms"
            description="Explore levers, pulleys, gears and how they help us use forces more effectively."
            href="/subjects/science/forces/mechanisms"
            bgColor="bg-blue-100"
            borderColor="border-blue-300"
            iconColor="text-blue-500"
          />

          <ModuleCard
            title="Forces Quiz"
            description="Test your knowledge of forces with this interactive quiz."
            href="/subjects/science/forces/quiz"
            bgColor="bg-blue-200"
            borderColor="border-blue-400"
            iconColor="text-blue-600"
          />
        </div>
      </div>
    </div>
  )
}

