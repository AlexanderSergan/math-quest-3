import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function ColumnAdditionModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Column Addition"
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
            <h2 className="text-xl font-bold text-blue-700 mb-4">Column Addition Method</h2>
            <p className="mb-4">
              Column addition is a formal written method that helps us add numbers with many digits. In Year 5, we focus
              on adding numbers with more than 4 digits using this method.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Step-by-Step Column Addition</h3>
              <p className="mb-2">Let's work through an example: 24,568 + 7,849</p>

              <div className="bg-white p-3 rounded-lg mb-3 font-mono">
                <pre className="text-center">
                  <span className="text-blue-500 font-bold">{"  1 1 1"}</span>
                  {"\n"}
                  {"  2 4 5 6 8"}
                  {"\n"}
                  {"+ 7 8 4 9"}
                  {"\n"}
                  {"―――――――――"}
                  {"\n"}
                  {"3 2 4 1 7"}
                </pre>
              </div>

              <ol className="space-y-2 pl-6 list-decimal mb-4">
                <li>
                  <span className="font-medium">Line up the digits</span>: Write the numbers with digits aligned by
                  place value (ones under ones, tens under tens, etc.)
                </li>
                <li>
                  <span className="font-medium">Add the ones column</span>: 8 + 9 = 17. Write 7 and carry 1 to the tens
                  column.
                </li>
                <li>
                  <span className="font-medium">Add the tens column</span>: 1 (carried) + 6 + 4 = 11. Write 1 and carry
                  1 to the hundreds column.
                </li>
                <li>
                  <span className="font-medium">Add the hundreds column</span>: 1 (carried) + 5 + 8 = 14. Write 4 and
                  carry 1 to the thousands column.
                </li>
                <li>
                  <span className="font-medium">Add the thousands column</span>: 1 (carried) + 4 + 7 = 12. Write 2 and
                  carry 1 to the ten thousands column.
                </li>
                <li>
                  <span className="font-medium">Add the ten thousands column</span>: 1 (carried) + 2 + 0 = 3. Write 3.
                </li>
                <li>
                  <span className="font-medium">The answer is</span>: 32,417
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Column Addition with Decimals</h3>
              <p className="mb-2">We can also use column addition with decimal numbers. Let's try 245.68 + 78.49</p>

              <div className="bg-white p-3 rounded-lg mb-3 font-mono">
                <pre className="text-center">
                  <span className="text-blue-500 font-bold">{"  1 1 1"}</span>
                  {"\n"}
                  {"  2 4 5 . 6 8"}
                  {"\n"}
                  {"+ 7 8 . 4 9"}
                  {"\n"}
                  {"―――――――――"}
                  {"\n"}
                  {"3 2 4 . 1 7"}
                </pre>
              </div>

              <p className="font-medium mb-2">Key points for decimal addition:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>Line up the decimal points</li>
                <li>Add zeros as place holders if needed</li>
                <li>Carry digits as normal across the decimal point</li>
                <li>Include the decimal point in the answer</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Checking Your Answer</h3>
              <p className="mb-2">Always check your answer using one of these methods:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Estimation</span>: Round the numbers and see if your answer is
                  reasonable. For example, 24,568 + 7,849 is about 25,000 + 8,000 = 33,000, which is close to our answer
                  of 32,417.
                </li>
                <li>
                  <span className="font-medium">Inverse operation</span>: Subtract one of the numbers from your answer.
                  For example, 32,417 - 24,568 should give 7,849.
                </li>
                <li>
                  <span className="font-medium">Add in a different order</span>: Try adding from top to bottom instead
                  of bottom to top.
                </li>
              </ul>
            </div>

            <h3 className="font-bold mb-2">Common Mistakes to Avoid:</h3>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li>Forgetting to carry digits</li>
              <li>Misaligning digits or decimal points</li>
              <li>Adding incorrectly (practice your number facts!)</li>
              <li>Writing digits in the wrong columns</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Calculate 45,328 + 27,465 using column addition."
                options={["72,493", "72,793", "71,493", "71,793"]}
                correctIndex={1}
                explanation="Using column addition: Align the digits by place value, add each column starting from the ones, and carry where needed. 45,328 + 27,465 = 72,793."
              />

              <QuizQuestion
                question="Calculate 5,678.45 + 324.92 using column addition."
                options={["6,003.37", "6,002.37", "6,003.27", "6,002.47"]}
                correctIndex={0}
                explanation="Using column addition with decimals: Align the decimal points, add each column starting from the hundredths, and carry where needed. 5,678.45 + 324.92 = 6,003.37."
              />

              <QuizQuestion
                question="When adding 23,456 + 9,876, which of these steps is NOT correct?"
                options={[
                  "Line up the digits by place value",
                  "Start adding from the rightmost column (ones)",
                  "Carry tens when a column sum exceeds 9",
                  "Add an extra zero in front of 9,876 to make it 09,876",
                ]}
                correctIndex={3}
                explanation="You don't need to add an extra zero in front of 9,876. Simply align the digits correctly by place value, with the rightmost digits (ones) in the same column."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/addition-subtraction/mental-subtraction-strategies">
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

