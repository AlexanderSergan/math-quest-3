import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function ReadingWritingNumbersModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Reading and Writing Large Numbers"
        lesson="Place Value"
        subject="Mathematics"
        subjectColor="blue"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link href="/subjects/mathematics/place-value">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Place Value
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn 1 House Point</span>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Understanding Large Numbers</h2>
            <p className="mb-4">
              In Year 5, we work with numbers up to 1,000,000 (one million). Let's learn how to read and write these
              large numbers!
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Place Value Chart</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2">Hundred Thousands</th>
                      <th className="border border-blue-200 p-2">Ten Thousands</th>
                      <th className="border border-blue-200 p-2">Thousands</th>
                      <th className="border border-blue-200 p-2">Hundreds</th>
                      <th className="border border-blue-200 p-2">Tens</th>
                      <th className="border border-blue-200 p-2">Ones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="border border-blue-200 p-2">100,000</td>
                      <td className="border border-blue-200 p-2">10,000</td>
                      <td className="border border-blue-200 p-2">1,000</td>
                      <td className="border border-blue-200 p-2">100</td>
                      <td className="border border-blue-200 p-2">10</td>
                      <td className="border border-blue-200 p-2">1</td>
                    </tr>
                    <tr className="text-center font-bold text-blue-700">
                      <td className="border border-blue-200 p-2">3</td>
                      <td className="border border-blue-200 p-2">4</td>
                      <td className="border border-blue-200 p-2">5</td>
                      <td className="border border-blue-200 p-2">6</td>
                      <td className="border border-blue-200 p-2">7</td>
                      <td className="border border-blue-200 p-2">8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-blue-700 font-medium">The number shown is 345,678</p>
            </div>

            <h3 className="font-bold mb-2">How to Read Large Numbers</h3>
            <p className="mb-4">When reading large numbers, we group the digits in threes from the right:</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="bg-blue-100 px-3 py-1 rounded-lg font-medium mr-3">345,678</div>
                <span>Three hundred and forty-five thousand, six hundred and seventy-eight</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 px-3 py-1 rounded-lg font-medium mr-3">902,154</div>
                <span>Nine hundred and two thousand, one hundred and fifty-four</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 px-3 py-1 rounded-lg font-medium mr-3">1,000,000</div>
                <span>One million</span>
              </div>
            </div>

            <h3 className="font-bold mb-2">Writing Numbers in Words and Figures</h3>
            <p className="mb-4">Practice converting between words and figures:</p>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-medium mb-2">In figures: 725,391</p>
                <p>In words: Seven hundred and twenty-five thousand, three hundred and ninety-one</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-medium mb-2">In words: Four hundred and sixty thousand, eight hundred and five</p>
                <p>In figures: 460,805</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Write 583,921 in words."
                options={[
                  "Five hundred and eighty-three thousand, nine hundred and twenty-one",
                  "Five hundred and eighty-three thousand, nine hundred and twelve",
                  "Five hundred and thirty-eight thousand, nine hundred and twenty-one",
                  "Five hundred thousand, eight hundred and thirty-nine, twenty-one",
                ]}
                correctIndex={0}
                explanation="583,921 is written as five hundred and eighty-three thousand, nine hundred and twenty-one."
              />

              <QuizQuestion
                question="Write 'Three hundred and forty-two thousand, six hundred and seven' in figures."
                options={["342,607", "342,670", "324,607", "340,267"]}
                correctIndex={0}
                explanation="Three hundred and forty-two thousand, six hundred and seven is written as 342,607."
              />

              <QuizQuestion
                question="What is the value of the digit 7 in the number 274,836?"
                options={["7", "70", "700", "70,000"]}
                correctIndex={3}
                explanation="In 274,836, the 7 is in the ten thousands place, so its value is 70,000."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/place-value/place-value-charts">
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

