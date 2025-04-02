import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function ColumnSubtractionModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Column Subtraction"
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
            <h2 className="text-xl font-bold text-blue-700 mb-4">Column Subtraction Method</h2>
            <p className="mb-4">
              Column subtraction is a formal written method that helps us subtract large numbers accurately. In Year 5,
              we focus on subtracting numbers with more than 4 digits.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Step-by-Step Column Subtraction</h3>
              <p className="mb-2">Let's work through an example: 76,435 - 28,967</p>

              <div className="bg-white p-3 rounded-lg mb-3 font-mono">
                <pre className="text-center">
                  <span className="text-blue-500 font-bold">{"  6 13 2 15"}</span>
                  {"\n"}
                  {"  7 6 4 3 5"}
                  {"\n"}
                  {"- 2 8 9 6 7"}
                  {"\n"}
                  {"―――――――――"}
                  {"\n"}
                  {"4 7 4 6 8"}
                </pre>
              </div>

              <ol className="space-y-2 pl-6 list-decimal mb-4">
                <li>
                  <span className="font-medium">Line up the digits</span>: Write the numbers with digits aligned by
                  place value
                </li>
                <li>
                  <span className="font-medium">Start with the ones column</span>: 5 - 7 is not possible, so we need to
                  exchange
                </li>
                <li>
                  <span className="font-medium">Exchange from the tens</span>: Take 1 ten from 3 tens, making it 2 tens,
                  and add 10 ones to the 5 ones, making 15 ones
                </li>
                <li>
                  <span className="font-medium">Subtract the ones</span>: 15 - 7 = 8
                </li>
                <li>
                  <span className="font-medium">Move to the tens column</span>: 2 - 6 is not possible, so we need to
                  exchange
                </li>
                <li>
                  <span className="font-medium">Exchange from the hundreds</span>: Take 1 hundred from 4 hundreds,
                  making it a 3, and add 10 tens to the 2 tens, making 12 tens
                </li>
                <li>
                  <span className="font-medium">Subtract the tens</span>: 12 - 6 = 6
                </li>
                <li>
                  <span className="font-medium">Continue with the hundreds</span>: 3 - 9 is not possible, so exchange
                </li>
                <li>
                  <span className="font-medium">Exchange from the thousands</span>: Take 1 thousand from 6 thousands,
                  making it 5, and add 10 hundreds to the 3 hundreds, making 13 hundreds
                </li>
                <li>
                  <span className="font-medium">Subtract the hundreds</span>: 13 - 9 = 4
                </li>
                <li>
                  <span className="font-medium">Move to the thousands</span>: 5 - 8 is not possible, so exchange
                </li>
                <li>
                  <span className="font-medium">Exchange from the ten thousands</span>: Take 1 ten thousand from 7 ten
                  thousands, making it 6, and add 10 thousands to the 5 thousands, making 15 thousands
                </li>
                <li>
                  <span className="font-medium">Subtract the thousands</span>: 15 - 8 = 7
                </li>
                <li>
                  <span className="font-medium">Subtract the ten thousands</span>: 6 - 2 = 4
                </li>
                <li>
                  <span className="font-medium">The answer is</span>: 47,468
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Column Subtraction with Decimals</h3>
              <p className="mb-2">We can also use column subtraction with decimal numbers. Let's try 235.45 - 128.97</p>

              <div className="bg-white p-3 rounded-lg mb-3 font-mono">
                <pre className="text-center">
                  <span className="text-blue-500 font-bold">{"  2 14 14"}</span>
                  {"\n"}
                  {"  2 3 5 . 4 5"}
                  {"\n"}
                  {"- 1 2 8 . 9 7"}
                  {"\n"}
                  {"―――――――――"}
                  {"\n"}
                  {"1 0 6 . 4 8"}
                </pre>
              </div>

              <p className="font-medium mb-2">Key points for decimal subtraction:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>Line up the decimal points</li>
                <li>Add zeros as place holders if needed</li>
                <li>Exchange across the decimal point if necessary</li>
                <li>Include the decimal point in the answer</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Checking Your Answer</h3>
              <p className="mb-2">Always check your answer using one of these methods:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Estimation</span>: Round the numbers and see if your answer is
                  reasonable. For example, 76,435 - 28,967 is about 76,000 - 29,000 = 47,000, which is close to our
                  answer of 47,468.
                </li>
                <li>
                  <span className="font-medium">Inverse operation</span>: Add your answer to the number you subtracted.
                  For example, 47,468 + 28,967 should equal 76,435.
                </li>
                <li>
                  <span className="font-medium">Alternative method</span>: Try using a mental strategy or calculator to
                  verify.
                </li>
              </ul>
            </div>

            <h3 className="font-bold mb-2">Common Mistakes to Avoid:</h3>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li>Forgetting to exchange when needed</li>
              <li>Taking from the wrong column during exchanges</li>
              <li>Subtracting the larger digit from the smaller digit (the wrong way around)</li>
              <li>Misaligning digits or decimal points</li>
              <li>Forgetting that when you exchange, you add 10 to the column you're working with</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Calculate 52,347 - 26,859 using column subtraction."
                options={["25,488", "25,588", "26,488", "26,588"]}
                correctIndex={0}
                explanation="Using column subtraction with exchange: 52,347 - 26,859 = 25,488. Multiple exchanges are needed: from the ones to the tens, tens to hundreds, and hundreds to thousands."
              />

              <QuizQuestion
                question="Calculate 6,053 - 2,875 using column subtraction."
                options={["3,178", "3,278", "3,188", "3,078"]}
                correctIndex={0}
                explanation="Using column subtraction: 6,053 - 2,875 = 3,178. You need to exchange from the thousands to the hundreds, and from the hundreds to the tens."
              />

              <QuizQuestion
                question="When subtracting 8,045 - 3,678 using column subtraction, what happens in the tens column?"
                options={[
                  "4 - 7 is not possible, so we exchange from the hundreds",
                  "4 - 7 = -3, so we write down 3 and borrow 1 from the next column",
                  "4 is greater than 7, so we subtract 4 - 7 = 3",
                  "We add 0 to make it 40 - 7 = 33",
                ]}
                correctIndex={0}
                explanation="In the tens column, 4 - 7 is not possible. We need to exchange 1 hundred for 10 tens, making it 14 tens. Then we can calculate 14 - 7 = 7."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/addition-subtraction">
                <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
                  Complete Lesson
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

