import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"

export default function GestationPeriodsModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Gestation Periods"
        lesson="Animals Including Humans"
        subject="Science"
        subjectColor="amber"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link href="/subjects/science/animals-humans">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Animals Including Humans
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn 2 House Points</span>
          </div>
        </div>

        <Card className="mb-6 p-6">
          <h2 className="text-xl font-bold text-amber-700 mb-4">Introduction Video</h2>
          <YouTubeVideo videoId="2OjjWh-8Iv0" title="Gestation Periods in Different Animals" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about how long different mammals develop before birth before exploring the
            detailed lesson content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Gestation Periods</h2>
            <p className="mb-4">
              Gestation is the period of time that a mammal carries its developing young inside the mother's body before
              birth. This time varies greatly between different species of mammals. Let's explore these differences and
              why they exist!
            </p>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">What is Gestation?</h3>
              <p className="mb-2">
                Gestation is the time from conception (when the egg is fertilised by sperm) to birth. During this time:
              </p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>The fertilised egg develops into an embryo and then a foetus</li>
                <li>The young animal develops all its essential organs and body systems</li>
                <li>The mother provides nutrients and oxygen through the placenta</li>
                <li>The developing young is protected inside the mother's body</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Gestation Periods of Different Mammals</h3>
              <p className="mb-2">Here are the gestation periods for various mammals, from shortest to longest:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-200 p-2 text-left">Animal</th>
                      <th className="border border-amber-200 p-2 text-left">Gestation Period</th>
                      <th className="border border-amber-200 p-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-amber-200 p-2">Hamster</td>
                      <td className="border border-amber-200 p-2">16-18 days</td>
                      <td className="border border-amber-200 p-2">
                        One of the shortest gestation periods among mammals
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Mouse</td>
                      <td className="border border-amber-200 p-2">19-21 days</td>
                      <td className="border border-amber-200 p-2">Babies are born hairless and with closed eyes</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Rat</td>
                      <td className="border border-amber-200 p-2">21-23 days</td>
                      <td className="border border-amber-200 p-2">Can have multiple litters per year</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Rabbit</td>
                      <td className="border border-amber-200 p-2">30-33 days</td>
                      <td className="border border-amber-200 p-2">Can have 4-12 babies per litter</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Cat</td>
                      <td className="border border-amber-200 p-2">58-67 days</td>
                      <td className="border border-amber-200 p-2">About 2 months</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Dog</td>
                      <td className="border border-amber-200 p-2">58-68 days</td>
                      <td className="border border-amber-200 p-2">About 2 months, similar to cats</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Pig</td>
                      <td className="border border-amber-200 p-2">114 days</td>
                      <td className="border border-amber-200 p-2">About 3 months and 3 weeks</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Sheep</td>
                      <td className="border border-amber-200 p-2">145-155 days</td>
                      <td className="border border-amber-200 p-2">About 5 months</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Goat</td>
                      <td className="border border-amber-200 p-2">145-155 days</td>
                      <td className="border border-amber-200 p-2">About 5 months</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Human</td>
                      <td className="border border-amber-200 p-2">266 days</td>
                      <td className="border border-amber-200 p-2">About 9 months (40 weeks)</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Cow</td>
                      <td className="border border-amber-200 p-2">279-292 days</td>
                      <td className="border border-amber-200 p-2">About 9.5 months</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Horse</td>
                      <td className="border border-amber-200 p-2">330-345 days</td>
                      <td className="border border-amber-200 p-2">About 11 months</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Giraffe</td>
                      <td className="border border-amber-200 p-2">425-450 days</td>
                      <td className="border border-amber-200 p-2">About 15 months</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Rhino</td>
                      <td className="border border-amber-200 p-2">450-480 days</td>
                      <td className="border border-amber-200 p-2">About 16 months</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Elephant</td>
                      <td className="border border-amber-200 p-2">640-660 days</td>
                      <td className="border border-amber-200 p-2">
                        About 22 months, the longest gestation period of any land mammal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Factors Affecting Gestation Length</h3>
              <p className="mb-2">Several factors influence how long gestation lasts in different mammals:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">1. Size of the Animal</h4>
                <p className="mb-2">Generally, larger animals have longer gestation periods. This is because:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Larger animals have more complex bodies that take longer to develop</li>
                  <li>Larger babies need more time to grow to a size where they can survive outside the womb</li>
                  <li>
                    Example: Elephants (large) have a gestation of 22 months, while mice (small) have a gestation of
                    only 3 weeks
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">2. Development at Birth</h4>
                <p className="mb-2">Animals are born at different stages of development:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Altricial</span>: Born in an underdeveloped state, needing significant
                    parental care (e.g., mice, rabbits, cats, dogs)
                  </li>
                  <li>
                    <span className="font-medium">Precocial</span>: Born in a more developed state, able to move around
                    and sometimes feed themselves shortly after birth (e.g., horses, cows, sheep)
                  </li>
                  <li>
                    Precocial animals often have longer gestation periods to allow for more development before birth
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">3. Litter Size</h4>
                <p className="mb-2">The number of offspring born at once can affect gestation length:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Animals that have multiple offspring (litters) often have shorter gestation periods</li>
                  <li>Animals that typically have single births often have longer gestation periods</li>
                  <li>Example: Dogs (multiple puppies) have a shorter gestation than horses (usually one foal)</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">4. Evolutionary Strategy</h4>
                <p className="mb-2">Different reproductive strategies have evolved based on survival needs:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">r-selected species</span>: Have many offspring, short gestation, and
                    provide little parental care (e.g., mice, rabbits)
                  </li>
                  <li>
                    <span className="font-medium">K-selected species</span>: Have fewer offspring, longer gestation, and
                    provide more parental care (e.g., elephants, humans)
                  </li>
                  <li>These strategies are adaptations to different environmental pressures and survival challenges</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Human Gestation</h3>
              <p className="mb-2">
                Human pregnancy lasts about 9 months (40 weeks or 266 days) and is divided into three trimesters:
              </p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">First Trimester (Weeks 1-12)</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>All major organs and body systems begin to form</li>
                  <li>The heart begins to beat</li>
                  <li>Limbs start to develop</li>
                  <li>By the end, the embryo is called a foetus and is about 7-10 cm long</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Second Trimester (Weeks 13-27)</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>The foetus grows rapidly</li>
                  <li>Movement can be felt by the mother</li>
                  <li>Features like fingernails, eyelashes, and hair develop</li>
                  <li>The foetus can hear sounds from outside the womb</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Third Trimester (Weeks 28-40)</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>The foetus continues to gain weight</li>
                  <li>Organs mature, especially the lungs</li>
                  <li>The foetus usually moves into a head-down position in preparation for birth</li>
                  <li>At birth, a full-term baby typically weighs 2.7-4 kg (6-9 pounds)</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Multiple Births</h3>
              <p className="mb-2">Some pregnancies result in more than one baby:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Twins</span>: Two babies from the same pregnancy
                </li>
                <li>
                  <span className="font-medium">Triplets</span>: Three babies
                </li>
                <li>
                  <span className="font-medium">Quadruplets</span>: Four babies
                </li>
                <li>
                  Multiple births are common in some animals (like dogs and cats) but less common in humans and large
                  mammals that typically have single births
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Which animal has the longest gestation period?"
                options={["Human", "Elephant", "Giraffe", "Horse"]}
                correctIndex={1}
                explanation="Elephants have the longest gestation period of any land mammal, lasting about 22 months (640-660 days). This is much longer than humans (9 months), giraffes (15 months), or horses (11 months)."
              />

              <QuizQuestion
                question="What is the relationship between an animal's size and its gestation period?"
                options={[
                  "Larger animals usually have shorter gestation periods",
                  "Animal size has no effect on gestation period",
                  "Larger animals usually have longer gestation periods",
                  "All mammals have the same gestation period regardless of size",
                ]}
                correctIndex={2}
                explanation="Generally, larger animals have longer gestation periods. This is because larger animals have more complex bodies that take longer to develop, and their babies need more time to grow to a size where they can survive outside the womb."
              />

              <QuizQuestion
                question="About how long is the human gestation period?"
                options={["3 months", "6 months", "9 months", "12 months"]}
                correctIndex={2}
                explanation="The human gestation period is about 9 months (40 weeks or 266 days). This is divided into three trimesters of approximately 3 months each."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/science/animals-humans/life-expectancy">
                <Button className="bg-amber-500 hover:bg-amber-600 flex items-center gap-2">
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

