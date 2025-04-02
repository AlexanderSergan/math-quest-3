import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"

export default function LifeCyclesPlantsModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Life Cycles of Plants"
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
          <YouTubeVideo videoId="zPqnYYI2Uq8" title="Life Cycles of Plants" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about how plants grow, develop, and reproduce before diving into the lesson
            content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Life Cycles of Plants</h2>
            <p className="mb-4">
              Plants are living organisms that can be found almost everywhere on Earth. Unlike animals, plants make
              their own food through a process called photosynthesis. Let's explore the fascinating life cycle of
              plants!
            </p>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">What Makes a Plant?</h3>
              <p className="mb-2">Plants have several key characteristics:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>They are made of many cells (multicellular)</li>
                <li>They have cell walls made of cellulose</li>
                <li>Most plants are green because they contain chlorophyll</li>
                <li>They make their own food through photosynthesis</li>
                <li>They cannot move from place to place</li>
                <li>They grow throughout their lives</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Types of Plants</h3>
              <p className="mb-2">There are many different types of plants:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Flowering Plants (Angiosperms)</h4>
                <p className="mb-2">
                  These plants produce flowers and fruits with seeds inside. Examples include roses, apple trees, and
                  grasses.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Conifers (Gymnosperms)</h4>
                <p className="mb-2">
                  These plants produce seeds in cones, not flowers. Examples include pine trees, fir trees, and spruce
                  trees.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Ferns and Mosses</h4>
                <p className="mb-2">These plants don't produce seeds at all. Instead, they reproduce using spores.</p>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">The Life Cycle of Flowering Plants</h3>
              <p className="mb-2">Let's focus on the life cycle of flowering plants, which is the most common type:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">1. Seed</h4>
                <p className="mb-2">The life cycle begins with a seed. A seed contains:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>An embryo (baby plant)</li>
                  <li>Food supply (stored in cotyledons or endosperm)</li>
                  <li>Seed coat (protective outer covering)</li>
                </ul>
                <p className="mb-2">
                  Seeds can remain dormant (inactive) for a long time until conditions are right for germination.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">2. Germination</h4>
                <p className="mb-2">
                  When conditions are right (enough water, oxygen, and suitable temperature), the seed begins to grow.
                  This is called germination.
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>The seed absorbs water and swells</li>
                  <li>The seed coat splits open</li>
                  <li>The radicle (embryonic root) grows downward into the soil</li>
                  <li>The plumule (embryonic shoot) grows upward towards light</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">3. Growth</h4>
                <p className="mb-2">The seedling continues to grow and develop:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>The roots grow deeper and branch out to absorb water and minerals</li>
                  <li>The stem grows taller to support the plant and transport materials</li>
                  <li>Leaves develop to capture sunlight for photosynthesis</li>
                  <li>The plant uses photosynthesis to make its own food</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">4. Flowering</h4>
                <p className="mb-2">
                  When the plant is mature, it produces flowers. Flowers are the reproductive organs of the plant.
                </p>
                <p className="mb-2">Parts of a flower:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Petals</span>: Colourful parts that attract pollinators
                  </li>
                  <li>
                    <span className="font-medium">Sepals</span>: Green leaf-like parts that protect the flower bud
                  </li>
                  <li>
                    <span className="font-medium">Stamens</span>: Male parts that produce pollen (contains male gametes)
                  </li>
                  <li>
                    <span className="font-medium">Pistil/Carpel</span>: Female part with ovary (contains female gametes
                    or eggs)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">5. Pollination</h4>
                <p className="mb-2">Pollination is the transfer of pollen from the stamen to the pistil.</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Insect pollination</span>: Bees, butterflies, and other insects carry
                    pollen from flower to flower
                  </li>
                  <li>
                    <span className="font-medium">Wind pollination</span>: Wind blows pollen from one flower to another
                  </li>
                  <li>
                    <span className="font-medium">Water pollination</span>: Water carries pollen to other flowers (rare)
                  </li>
                  <li>
                    <span className="font-medium">Self-pollination</span>: Pollen from a flower fertilises the same
                    flower
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">6. Fertilisation</h4>
                <p className="mb-2">After pollination, fertilisation occurs:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Pollen grain grows a tube down to the ovary</li>
                  <li>Male gamete travels down the tube and joins with the female gamete (egg)</li>
                  <li>This creates a fertilised egg called a zygote</li>
                  <li>The zygote develops into an embryo</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">7. Seed and Fruit Formation</h4>
                <p className="mb-2">After fertilisation:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>The ovule develops into a seed containing the embryo</li>
                  <li>The ovary develops into a fruit that surrounds the seeds</li>
                  <li>Other parts of the flower usually wither and fall off</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">8. Seed Dispersal</h4>
                <p className="mb-2">
                  Seeds need to be dispersed (spread away from the parent plant) to find new places to grow. Seeds can
                  be dispersed by:
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Wind</span>: Seeds with wings or parachutes (like dandelions)
                  </li>
                  <li>
                    <span className="font-medium">Animals</span>: Seeds that are eaten and passed through digestive
                    systems or that stick to fur
                  </li>
                  <li>
                    <span className="font-medium">Water</span>: Seeds that float on water
                  </li>
                  <li>
                    <span className="font-medium">Explosion</span>: Pods that burst open and shoot out seeds
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">9. New Plant</h4>
                <p className="mb-2">
                  When a seed lands in a suitable place, it can germinate and grow into a new plant, starting the cycle
                  again.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Annual, Biennial, and Perennial Plants</h3>
              <p className="mb-2">Plants have different life spans:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Annual plants</span>: Complete their life cycle in one year (e.g.,
                  sunflowers, peas)
                </li>
                <li>
                  <span className="font-medium">Biennial plants</span>: Take two years to complete their life cycle
                  (e.g., carrots, foxgloves)
                </li>
                <li>
                  <span className="font-medium">Perennial plants</span>: Live for many years, flowering and producing
                  seeds each year (e.g., roses, oak trees)
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="What is the correct order of stages in a flowering plant's life cycle?"
                options={[
                  "Seed → Germination → Growth → Flowering → Pollination → Fertilisation → Seed Formation",
                  "Germination → Seed → Growth → Flowering → Fertilisation → Pollination → Seed Formation",
                  "Seed → Growth → Germination → Flowering → Pollination → Fertilisation → Seed Formation",
                  "Flowering → Pollination → Fertilisation → Seed Formation → Seed → Germination → Growth",
                ]}
                correctIndex={0}
                explanation="The correct order is: Seed → Germination (seed starts growing) → Growth (seedling develops) → Flowering (flowers form) → Pollination (pollen transfer) → Fertilisation (male and female gametes join) → Seed Formation (new seeds develop)."
              />

              <QuizQuestion
                question="Which part of a flower produces pollen?"
                options={["Petals", "Sepals", "Stamens", "Pistil/Carpel"]}
                correctIndex={2}
                explanation="Stamens are the male parts of the flower that produce pollen. Petals attract pollinators, sepals protect the flower bud, and the pistil/carpel is the female part containing the ovary."
              />

              <QuizQuestion
                question="Which of these is NOT a method of seed dispersal?"
                options={["Wind dispersal", "Animal dispersal", "Photosynthesis dispersal", "Explosion dispersal"]}
                correctIndex={2}
                explanation="Photosynthesis dispersal is not a method of seed dispersal. Photosynthesis is the process by which plants make their own food using sunlight. Seeds are dispersed by wind, animals, water, and explosion (when seed pods burst open)."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/science/living-things/reproduction-plants">
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

