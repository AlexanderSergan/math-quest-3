import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"

export default function LifeCyclesMammalsModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Life Cycles of Mammals"
        lesson="Living Things and Habitats"
        subject="Science"
        subjectColor="amber"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link href="/subjects/science/living-things">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Living Things and Habitats
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn 2 House Points</span>
          </div>
        </div>

        <Card className="mb-6 p-6">
          <h2 className="text-xl font-bold text-amber-700 mb-4">Introduction Video</h2>
          <YouTubeVideo videoId="aMDhM_xEvo8" title="Life Cycles of Mammals" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about how mammals grow, develop, and reproduce before diving into the lesson
            content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Life Cycles of Mammals</h2>
            <p className="mb-4">
              Mammals are a group of animals that have some special characteristics. They are warm-blooded, have hair or
              fur, and female mammals produce milk to feed their young. Humans are mammals too!
            </p>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">What Makes a Mammal?</h3>
              <p className="mb-2">All mammals share these key features:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>They are warm-blooded (maintain a constant body temperature)</li>
                <li>They have hair or fur at some point in their lives</li>
                <li>Female mammals produce milk to feed their babies</li>
                <li>Most mammals give birth to live young (except for platypuses and echidnas, which lay eggs)</li>
                <li>They breathe air through lungs</li>
                <li>They have a four-chambered heart</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">The Mammal Life Cycle</h3>
              <p className="mb-2">Most mammals follow this life cycle:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">1. Fertilisation</h4>
                <p className="mb-2">
                  The male sperm cell joins with the female egg cell inside the female's body. This creates a fertilised
                  egg called a zygote.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">2. Pregnancy (Gestation)</h4>
                <p className="mb-2">
                  The fertilised egg develops inside the mother's womb (uterus). The developing baby is called an
                  embryo, and later a foetus. It gets nutrients and oxygen from the mother through the placenta.
                </p>
                <p className="mb-2">The length of pregnancy varies between different mammals:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Mice: about 20 days</li>
                  <li>Cats: about 65 days</li>
                  <li>Dogs: about 63 days</li>
                  <li>Humans: about 280 days (9 months)</li>
                  <li>Elephants: about 640 days (22 months)</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">3. Birth</h4>
                <p className="mb-2">
                  When the baby is fully developed, it is born. The mother's muscles push the baby out through the birth
                  canal. This is called 'live birth'.
                </p>
                <p className="mb-2">Baby mammals are born in different states of development:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Altricial</span>: Born helpless, blind, and hairless (like mice,
                    rabbits, and cats)
                  </li>
                  <li>
                    <span className="font-medium">Precocial</span>: Born more developed, with hair, open eyes, and able
                    to move around soon after birth (like horses, cows, and deer)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">4. Growth and Development</h4>
                <p className="mb-2">
                  The baby mammal drinks milk from its mother. This special food helps it grow and develop. This period
                  is called lactation.
                </p>
                <p className="mb-2">
                  As the young mammal grows, it gradually becomes independent. It learns important skills from its
                  parents and eventually becomes an adult.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">5. Adulthood and Reproduction</h4>
                <p className="mb-2">
                  When the mammal is fully grown, it can reproduce and have its own babies, starting the cycle again.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Special Cases: Marsupials and Monotremes</h3>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Marsupials</h4>
                <p className="mb-2">Marsupials like kangaroos, koalas, and wombats have a different life cycle:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>They have a very short pregnancy</li>
                  <li>Babies are born extremely underdeveloped</li>
                  <li>The tiny baby (called a joey) crawls into the mother's pouch</li>
                  <li>It continues to develop in the pouch while drinking milk</li>
                  <li>Later, it leaves the pouch but returns for feeding and protection</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Monotremes</h4>
                <p className="mb-2">Monotremes like platypuses and echidnas are even more unusual:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>They are the only mammals that lay eggs!</li>
                  <li>After hatching, the babies lick milk that seeps from patches on the mother's skin</li>
                  <li>They don't have nipples like other mammals</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold mb-2">Why Different Life Cycles?</h3>
            <p className="mb-4">
              Different mammals have evolved different life cycles to suit their environments and lifestyles. These
              adaptations help them survive and reproduce successfully in their habitats.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Which of these is NOT a characteristic of mammals?"
                options={[
                  "They have hair or fur",
                  "They lay eggs to reproduce",
                  "They produce milk for their young",
                  "They are warm-blooded",
                ]}
                correctIndex={1}
                explanation="Most mammals do not lay eggs to reproduce. They give birth to live young. Only monotremes (platypuses and echidnas) are mammals that lay eggs, but they are the exception."
              />

              <QuizQuestion
                question="What is the correct order of stages in a typical mammal life cycle?"
                options={[
                  "Birth → Fertilisation → Pregnancy → Growth → Adulthood",
                  "Fertilisation → Pregnancy → Birth → Growth → Adulthood",
                  "Fertilisation → Birth → Pregnancy → Growth → Adulthood",
                  "Pregnancy → Fertilisation → Birth → Growth → Adulthood",
                ]}
                correctIndex={1}
                explanation="The correct order is: Fertilisation (sperm and egg join), Pregnancy (development in the womb), Birth (baby is born), Growth (baby develops into adult), and Adulthood (can reproduce)."
              />

              <QuizQuestion
                question="Which group of mammals has babies that continue developing in a pouch after birth?"
                options={["Monotremes", "Marsupials", "Placental mammals", "Amphibians"]}
                correctIndex={1}
                explanation="Marsupials (like kangaroos, koalas, and wombats) have babies that are born very underdeveloped and continue to grow in the mother's pouch while drinking milk."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/science/living-things/life-cycles-birds">
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

