import DadsPlasteringGame from "@/components/dads-plastering-game"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dad's Plastering Challenge | Learning Adventure",
  description: "Help Dad with his plastering calculations in this fun math challenge!",
}

export default function DadsPlasteringPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dad's Plastering Challenge</h1>
      <DadsPlasteringGame />

      <div className="mt-12 max-w-2xl mx-auto bg-orange-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Learning Objectives:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Practice real-world math calculations related to construction</li>
          <li>Learn about area calculations and measurements</li>
          <li>Understand ratios and proportions in practical contexts</li>
          <li>Develop problem-solving skills in a trade context</li>
        </ul>
      </div>
    </div>
  )
}

