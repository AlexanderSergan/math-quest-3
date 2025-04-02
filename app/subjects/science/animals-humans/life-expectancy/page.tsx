import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"

export default function LifeExpectancyModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader title="Life Expectancy" lesson="Animals Including Humans" subject="Science" subjectColor="amber" />

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
          <YouTubeVideo videoId="qUUOXCaQ-HU" title="Animal Lifespans: How Long Do Animals Live?" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about the different lifespans of animals before exploring the detailed lesson
            content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Life Expectancy</h2>
            <p className="mb-4">
              Life expectancy is the average length of time an organism is expected to live. Different animals have
              vastly different lifespans, from just a few days to several centuries! Let's explore these differences and
              what causes them.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">What is Life Expectancy?</h3>
              <p className="mb-2">Life expectancy can be defined in different ways:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Average lifespan</span>: The average age that members of a species live
                  to
                </li>
                <li>
                  <span className="font-medium">Maximum lifespan</span>: The oldest age recorded for a species
                </li>
                <li>
                  <span className="font-medium">Life expectancy at birth</span>: How long a newborn can expect to live
                  on average
                </li>
              </ul>
              <p className="mb-2">
                It's important to note that many animals in the wild don't reach their potential maximum lifespan due to
                predators, disease, accidents, and other factors.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Life Expectancy of Different Animals</h3>
              <p className="mb-2">Here are the lifespans of various animals, from shortest to longest:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-200 p-2 text-left">Animal</th>
                      <th className="border border-amber-200 p-2 text-left">Average Lifespan</th>
                      <th className="border border-amber-200 p-2 text-left">Maximum Recorded</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-amber-200 p-2">Mayfly</td>
                      <td className="border border-amber-200 p-2">24 hours</td>
                      <td className="border border-amber-200 p-2">A few days</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Housefly</td>
                      <td className="border border-amber-200 p-2">28 days</td>
                      <td className="border border-amber-200 p-2">2 months</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Mouse</td>
                      <td className="border border-amber-200 p-2">1-2 years</td>
                      <td className="border border-amber-200 p-2">4 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Hamster</td>
                      <td className="border border-amber-200 p-2">2-3 years</td>
                      <td className="border border-amber-200 p-2">4 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Rabbit</td>
                      <td className="border border-amber-200 p-2">8-12 years</td>
                      <td className="border border-amber-200 p-2">18 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Dog</td>
                      <td className="border border-amber-200 p-2">10-13 years</td>
                      <td className="border border-amber-200 p-2">29 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Cat</td>
                      <td className="border border-amber-200 p-2">12-15 years</td>
                      <td className="border border-amber-200 p-2">38 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Horse</td>
                      <td className="border border-amber-200 p-2">25-30 years</td>
                      <td className="border border-amber-200 p-2">62 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Elephant</td>
                      <td className="border border-amber-200 p-2">60-70 years</td>
                      <td className="border border-amber-200 p-2">86 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Human</td>
                      <td className="border border-amber-200 p-2">70-80 years</td>
                      <td className="border border-amber-200 p-2">122 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Giant Tortoise</td>
                      <td className="border border-amber-200 p-2">100+ years</td>
                      <td className="border border-amber-200 p-2">188 years</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-2">Greenland Shark</td>
                      <td className="border border-amber-200 p-2">300-500 years</td>
                      <td className="border border-amber-200 p-2">~400 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Factors Affecting Life Expectancy</h3>
              <p className="mb-2">Several factors influence how long animals live:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">1. Size and Metabolism</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Larger animals often live longer than smaller ones</li>
                  <li>Animals with slower metabolic rates (how quickly they use energy) tend to live longer</li>
                  <li>Example: Elephants live much longer than mice</li>
                </ul>
                <p className="mb-2">
                  However, there are exceptions to this rule, such as birds and bats, which live longer than mammals of
                  similar size.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">2. Reproductive Strategy</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">r-selected species</span>: Have many offspring, reproduce quickly, and
                    have shorter lifespans (e.g., mice, insects)
                  </li>
                  <li>
                    <span className="font-medium">K-selected species</span>: Have fewer offspring, reproduce more
                    slowly, and have longer lifespans (e.g., elephants, humans)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">3. Environment and Predation</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Animals with few natural predators often live longer</li>
                  <li>
                    Animals that can avoid harsh environmental conditions (by migrating or hibernating) may live longer
                  </li>
                  <li>Example: Tortoises have protective shells and few predators, contributing to their long lives</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">4. Genetics</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Some species have genetic adaptations that slow ageing</li>
                  <li>These may include better DNA repair mechanisms or resistance to cellular damage</li>
                  <li>
                    Example: Naked mole rats have extraordinary longevity for their size and can live up to 30 years,
                    much longer than similar-sized rodents
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">5. Diet and Lifestyle</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Diet can significantly impact lifespan</li>
                  <li>Some animals benefit from calorie restriction, which may extend lifespan</li>
                  <li>Activity levels and stress can also affect how long animals live</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Human Life Expectancy</h3>
              <p className="mb-2">Human life expectancy has changed dramatically throughout history:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Historical Changes</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Stone Age: 20-30 years</li>
                  <li>Ancient Rome: 25-35 years</li>
                  <li>Medieval England: 30-40 years</li>
                  <li>Early 20th century: 45-50 years</li>
                  <li>Today (global average): 72 years</li>
                  <li>Today (developed countries): 80+ years</li>
                </ul>
                <p className="mb-2">
                  These historical figures are heavily influenced by high infant mortality rates. Many people who
                  survived childhood in earlier times lived to 60 or 70 years of age.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Factors That Have Increased Human Life Expectancy</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Better medical care and treatments</li>
                  <li>Vaccines and antibiotics</li>
                  <li>Improved sanitation and clean water</li>
                  <li>Better nutrition</li>
                  <li>Safer working conditions</li>
                  <li>Reduced infant and maternal mortality</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Factors That Affect Individual Human Lifespan</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Genetics</span>: Family history can influence lifespan
                  </li>
                  <li>
                    <span className="font-medium">Lifestyle</span>: Diet, exercise, smoking, and alcohol consumption
                  </li>
                  <li>
                    <span className="font-medium">Healthcare access</span>: Regular check-ups and medical treatment
                  </li>
                  <li>
                    <span className="font-medium">Environment</span>: Pollution, climate, and living conditions
                  </li>
                  <li>
                    <span className="font-medium">Socioeconomic factors</span>: Income, education, and occupation
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Studying Longevity</h3>
              <p className="mb-2">
                Scientists study long-lived animals to understand ageing and potentially extend human life:
              </p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Naked mole rats</span>: Live up to 30 years and rarely get cancer
                </li>
                <li>
                  <span className="font-medium">Bowhead whales</span>: Can live over 200 years with little evidence of
                  ageing
                </li>
                <li>
                  <span className="font-medium">Giant tortoises</span>: Live over 100 years with slow metabolisms
                </li>
                <li>
                  <span className="font-medium">Certain jellyfish</span>: Can potentially live forever by reverting to
                  an earlier life stage
                </li>
              </ul>
              <p className="mb-2">
                By understanding how these animals resist ageing, scientists hope to develop treatments for age-related
                diseases in humans.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Which of these animals has the longest lifespan?"
                options={["Elephant", "Human", "Giant Tortoise", "Horse"]}
                correctIndex={2}
                explanation="Giant tortoises have the longest lifespan among these animals, with an average lifespan of over 100 years and a maximum recorded lifespan of 188 years. Elephants live 60-70 years, humans 70-80 years, and horses 25-30 years on average."
              />

              <QuizQuestion
                question="Which factor has contributed MOST to the increase in human life expectancy over the past 200 years?"
                options={[
                  "Genetic changes in humans",
                  "Improved medical care and sanitation",
                  "Humans growing taller",
                  "More sunlight exposure",
                ]}
                correctIndex={1}
                explanation="Improved medical care and sanitation have contributed most to the increase in human life expectancy. This includes vaccines, antibiotics, clean water, better nutrition, and safer living conditions. Genetic changes occur too slowly to account for such rapid changes in lifespan."
              />

              <QuizQuestion
                question="What is the relationship between an animal's size and its lifespan?"
                options={[
                  "Smaller animals usually live longer than larger ones",
                  "Animal size has no effect on lifespan",
                  "Larger animals usually live longer than smaller ones",
                  "All mammals have the same lifespan regardless of size",
                ]}
                correctIndex={2}
                explanation="Generally, larger animals live longer than smaller ones. This is related to their slower metabolic rates and different reproductive strategies. For example, elephants live much longer than mice. However, there are exceptions to this rule, such as birds and bats, which live longer than mammals of similar size."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/science/animals-humans">
                <Button className="bg-amber-500 hover:bg-amber-600 flex items-center gap-2">
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

