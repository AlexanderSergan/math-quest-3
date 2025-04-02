import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function MentalSubtractionStrategiesModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Mental Subtraction Strategies"
        lesson="Addition and Subtraction"
        subject="Mathematics"
        subjectColor="blue"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link href="/subjects/mathematics/addition-subtraction">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Addition and Subtraction
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn 2 House Points</span>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Mental Subtraction Strategies</h2>
            <p className="mb-4">
              Being able to subtract numbers mentally is an important skill. Let's explore some strategies to help us
              subtract large numbers in our heads.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 1: Counting Back</h3>
              <p className="mb-2">For subtracting small numbers from larger ones, we can count back.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 9,000 - 50</p>
                <p className="mb-2">Count back in 10s: 9,000 → 8,990 → 8,980 → 8,970 → 8,960 → 8,950</p>
                <p className="font-medium">So: 9,000 - 50 = 8,950</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 2: Using Number Bonds</h3>
              <p className="mb-2">Use knowledge of number bonds to 10, 100, or 1,000 to make subtraction easier.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 5,000 - 1,750</p>
                <p className="mb-2">We know 1,750 + 250 = 2,000</p>
                <p className="mb-2">So: 5,000 - 1,750 = 5,000 - 2,000 + 250 = 3,000 + 250 = 3,250</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 3: Partitioning</h3>
              <p className="mb-2">Break numbers down into place value parts to subtract them.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 8,456 - 3,241</p>
                <p className="mb-2">Break it down:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>8,000 - 3,000 = 5,000</li>
                  <li>400 - 200 = 200</li>
                  <li>50 - 40 = 10</li>
                  <li>6 - 1 = 5</li>
                </ul>
                <p className="font-medium">Combine the results: 5,000 + 200 + 10 + 5 = 5,215</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 4: Compensation</h3>
              <p className="mb-2">Round to a friendly number, subtract, then adjust your answer.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 5,000 - 1,997</p>
                <p className="mb-2">Round 1,997 to 2,000 (adding 3)</p>
                <p className="mb-2">5,000 - 2,000 = 3,000</p>
                <p className="font-medium">But we've subtracted 3 too many, so add 3 back: 3,000 + 3 = 3,003</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 5: Equal Addition</h3>
              <p className="mb-2">Add the same amount to both numbers to make the subtraction easier.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 8,000 - 5,995</p>
                <p className="mb-2">Add 5 to both numbers: (8,000 + 5) - (5,995 + 5)</p>
                <p className="font-medium">8,005 - 6,000 = 2,005</p>
              </div>
            </div>

            <h3 className="font-bold mb-2">Tips for Success:</h3>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li>Choose the strategy that works best for each calculation</li>
              <li>Look for 'friendly' numbers like multiples of 10, 100, or 1,000</li>
              <li>Use estimation to check if your answer is reasonable</li>
              <li>Practice with numbers you use in everyday life (money, measurements, etc.)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Calculate 7,000 - 2,999 mentally."
                options={["4,001", "4,101", "4,011", "3,001"]}
                correctIndex={0}
                explanation="Using compensation: Round 2,999 to 3,000 (adding 1), then 7,000 - 3,000 = 4,000. Since we subtracted 1 extra, add it back: 4,000 + 1 = 4,001."
              />

              <QuizQuestion
                question="Calculate 6,420 - 4,380 using a mental strategy."
                options={["2,040", "2,140", "1,940", "2,240"]}
                correctIndex={0}
                explanation="Using partitioning: 6,000 - 4,000 = 2,000, 400 - 300 = 100, 20 - 80 = -60. Combine the results: 2,000 + 100 - 60 = 2,040."
              />

              <QuizQuestion
                question="Which strategy would be most efficient for calculating 8,000 - 1,995 mentally?"
                options={["Counting back", "Partitioning", "Compensation", "Equal addition"]}
                correctIndex={2}
                explanation="Compensation is most efficient because 1,995 is close to 2,000. You can calculate 8,000 - 2,000 = 6,000, then add 5 because you subtracted 5 too many: 6,000 + 5 = 6,005."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/addition-subtraction/column-subtraction">
                <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
                  Next Module
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

