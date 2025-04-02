import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function MentalAdditionStrategiesModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Mental Addition Strategies"
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
            <h2 className="text-xl font-bold text-blue-700 mb-4">Mental Addition Strategies</h2>
            <p className="mb-4">
              In Year 5, we learn to add numbers mentally in our head. Let's explore some strategies to make this easier
              when working with larger numbers!
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 1: Partitioning</h3>
              <p className="mb-2">Break numbers into parts that are easier to add.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 3,462 + 2,541</p>
                <p className="mb-2">Break it down:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>3,000 + 2,000 = 5,000</li>
                  <li>400 + 500 = 900</li>
                  <li>60 + 40 = 100</li>
                  <li>2 + 1 = 3</li>
                </ul>
                <p className="font-medium">Add the parts: 5,000 + 900 + 100 + 3 = 6,003</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 2: Using Number Bonds</h3>
              <p className="mb-2">Look for pairs of numbers that make 10, 100, or 1,000 to make addition easier.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 3,540 + 460</p>
                <p className="mb-2">Notice that 540 + 460 = 1,000</p>
                <p className="font-medium">So: 3,540 + 460 = 3,000 + 1,000 = 4,000</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 3: Adding Near Multiples</h3>
              <p className="mb-2">For numbers close to multiples of 10, 100, or 1,000, add the multiple and adjust.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 4,998 + 357</p>
                <p className="mb-2">Think of 4,998 as 5,000 - 2</p>
                <p className="font-medium">So: 4,998 + 357 = 5,000 + 357 - 2 = 5,357 - 2 = 5,355</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Strategy 4: Compensation</h3>
              <p className="mb-2">Round one number up and then compensate by subtracting at the end.</p>
              <div className="bg-white p-3 rounded-lg mb-3">
                <p className="font-medium mb-1">Example: 6,785 + 2,996</p>
                <p className="mb-2">Round 2,996 up to 3,000 and add:</p>
                <p className="mb-2">6,785 + 3,000 = 9,785</p>
                <p className="font-medium">Then subtract the extra 4: 9,785 - 4 = 9,781</p>
              </div>
            </div>

            <h3 className="font-bold mb-2">Tips for Success:</h3>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li>Choose the strategy that works best for each calculation</li>
              <li>Look for 'friendly' numbers that make nice round totals</li>
              <li>Practice estimation to check if your answer is reasonable</li>
              <li>Try different strategies to find which one you prefer</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Calculate 4,500 + 3,600 mentally."
                options={["7,100", "8,100", "7,900", "8,000"]}
                correctIndex={1}
                explanation="Using partitioning: 4,000 + 3,000 = 7,000, 500 + 600 = 1,100. Combine the totals: 7,000 + 1,100 = 8,100."
              />

              <QuizQuestion
                question="Calculate 2,999 + 456 using a mental strategy."
                options={["3,455", "3,445", "3,555", "3,545"]}
                correctIndex={0}
                explanation="Using compensation: Round 2,999 to 3,000 and add: 3,000 + 456 = 3,456. Then subtract the extra 1: 3,456 - 1 = 3,455."
              />

              <QuizQuestion
                question="Which strategy would be most efficient for calculating 7,250 + 750 mentally?"
                options={[
                  "Partitioning into thousands, hundreds, tens and ones",
                  "Using number bonds to make 1,000",
                  "Compensation by rounding up",
                  "Column addition",
                ]}
                correctIndex={1}
                explanation="Using number bonds is most efficient because 250 + 750 = 1,000, so 7,250 + 750 = 7,000 + 1,000 = 8,000. This is quicker than the other strategies."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/addition-subtraction/column-addition">
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

