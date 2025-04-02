import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"

export default function ReproductionPlantsModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Reproduction in Plants"
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
          <YouTubeVideo videoId="CyvFaRPlQpE" title="Reproduction in Plants" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about pollination, fertilisation, and seed dispersal before exploring the detailed
            lesson content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Reproduction in Plants</h2>
            <p className="mb-4">
              Plants can reproduce in two main ways: sexual reproduction (involving male and female parts) and asexual
              reproduction (where a single plant produces offspring identical to itself). Let's explore these
              fascinating processes in detail!
            </p>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Sexual Reproduction in Flowering Plants</h3>
              <p className="mb-2">
                Sexual reproduction in plants involves the joining of male and female gametes (sex cells). This process
                creates offspring that are genetically different from their parents.
              </p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">The Flower: Plant Reproductive Organ</h4>
                <p className="mb-2">Flowers contain the reproductive parts of the plant:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Male parts (Stamens)</span>: Each stamen has an anther (produces
                    pollen) and a filament (supports the anther)
                  </li>
                  <li>
                    <span className="font-medium">Female parts (Carpel/Pistil)</span>: Consists of stigma (receives
                    pollen), style (connects stigma to ovary), and ovary (contains ovules with egg cells)
                  </li>
                </ul>
                <p className="mb-2">Some plants have:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Complete flowers</span>: Contain both male and female parts (e.g.,
                    roses, lilies)
                  </li>
                  <li>
                    <span className="font-medium">Incomplete flowers</span>: Contain either male or female parts, but
                    not both (e.g., holly, willow)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Pollination: The First Step</h4>
                <p className="mb-2">Pollination is the transfer of pollen from the anther to the stigma.</p>
                <p className="mb-2">
                  <span className="font-medium">Types of pollination:</span>
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Self-pollination</span>: Pollen transfers from the anther to the
                    stigma of the same flower or another flower on the same plant
                  </li>
                  <li>
                    <span className="font-medium">Cross-pollination</span>: Pollen transfers from the anther of one
                    plant to the stigma of another plant of the same species
                  </li>
                </ul>
                <p className="mb-2">
                  <span className="font-medium">Pollination agents:</span>
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Insects</span>: Bees, butterflies, moths, beetles (attracted by bright
                    colours, scent, and nectar)
                  </li>
                  <li>
                    <span className="font-medium">Wind</span>: Lightweight pollen carried by air currents (common in
                    grasses and many trees)
                  </li>
                  <li>
                    <span className="font-medium">Water</span>: Pollen floats on water to reach other flowers (rare,
                    found in aquatic plants)
                  </li>
                  <li>
                    <span className="font-medium">Birds</span>: Hummingbirds and sunbirds (attracted by bright red or
                    orange tubular flowers)
                  </li>
                  <li>
                    <span className="font-medium">Bats</span>: Some tropical plants are pollinated by bats at night
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Fertilisation: Joining of Gametes</h4>
                <p className="mb-2">After pollination, fertilisation occurs:</p>
                <ol className="space-y-1 pl-6 list-decimal mb-2">
                  <li>Pollen grain lands on the stigma</li>
                  <li>If compatible, the pollen grain grows a pollen tube down through the style</li>
                  <li>Male gametes (sperm cells) travel down the pollen tube to the ovary</li>
                  <li>One male gamete fuses with the egg cell in an ovule to form a zygote (fertilised egg)</li>
                  <li>The other male gamete fuses with other cells to form endosperm (food supply)</li>
                  <li>This double fertilisation is unique to flowering plants</li>
                </ol>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Seed and Fruit Development</h4>
                <p className="mb-2">After fertilisation:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>The zygote develops into an embryo (baby plant)</li>
                  <li>The ovule develops into a seed, containing the embryo and food supply</li>
                  <li>The ovary develops into a fruit that protects the seeds</li>
                  <li>Other parts of the flower usually wither and fall off</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Seed Dispersal: Spreading New Life</h3>
              <p className="mb-2">Seeds need to be dispersed away from the parent plant to:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>Reduce competition for resources (light, water, nutrients)</li>
                <li>Colonise new areas</li>
                <li>Increase chances of survival</li>
              </ul>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Methods of Seed Dispersal</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Wind dispersal</span>:
                    <ul className="space-y-1 pl-6 list-disc mb-2">
                      <li>Seeds with wings (maple, ash)</li>
                      <li>Seeds with parachutes/hairs (dandelion, thistle)</li>
                      <li>Very small, light seeds (orchids)</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium">Animal dispersal</span>:
                    <ul className="space-y-1 pl-6 list-disc mb-2">
                      <li>Hooks/barbs that stick to fur or feathers (burdock, goosegrass)</li>
                      <li>Tasty fruits eaten by animals, seeds pass through digestive system (berries, apples)</li>
                      <li>Seeds collected and stored by animals, some forgotten (acorns by squirrels)</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium">Water dispersal</span>:
                    <ul className="space-y-1 pl-6 list-disc mb-2">
                      <li>Waterproof seeds that float (coconuts)</li>
                      <li>Seeds carried by streams and rivers</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium">Explosive dispersal</span>:
                    <ul className="space-y-1 pl-6 list-disc mb-2">
                      <li>Seed pods that burst open when ripe, shooting out seeds (peas, gorse)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Asexual Reproduction in Plants</h3>
              <p className="mb-2">
                Asexual reproduction involves only one parent plant and produces offspring identical to the parent
                (clones). No gametes or fertilisation are involved.
              </p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Natural Methods of Asexual Reproduction</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Runners/Stolons</span>: Horizontal stems that grow along the ground
                    and produce new plants at nodes (e.g., strawberries, spider plants)
                  </li>
                  <li>
                    <span className="font-medium">Bulbs</span>: Underground food storage structures that can produce new
                    plants (e.g., onions, daffodils)
                  </li>
                  <li>
                    <span className="font-medium">Tubers</span>: Swollen underground stems that store food and can grow
                    into new plants (e.g., potatoes)
                  </li>
                  <li>
                    <span className="font-medium">Rhizomes</span>: Horizontal underground stems that produce new shoots
                    and roots (e.g., ginger, iris)
                  </li>
                  <li>
                    <span className="font-medium">Suckers</span>: New shoots that grow from the roots or base of a plant
                    (e.g., raspberries, mint)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Artificial Methods of Asexual Reproduction</h4>
                <p className="mb-2">Humans use several methods to reproduce plants asexually:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Taking cuttings</span>: A piece of stem, root, or leaf is cut from a
                    parent plant and encouraged to grow roots
                  </li>
                  <li>
                    <span className="font-medium">Grafting</span>: A shoot or bud from one plant is attached to the stem
                    or root of another plant
                  </li>
                  <li>
                    <span className="font-medium">Layering</span>: A stem is bent to touch the ground and covered with
                    soil, where it forms roots before being separated from the parent
                  </li>
                  <li>
                    <span className="font-medium">Tissue culture</span>: Small pieces of plant tissue are grown in a
                    laboratory to produce many identical plants
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Advantages and Disadvantages of Different Reproduction Methods</h3>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Sexual Reproduction</h4>
                <p className="mb-2">
                  <span className="font-medium">Advantages:</span>
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Creates genetic variation (offspring are different from parents)</li>
                  <li>Increases adaptation to changing environments</li>
                  <li>Can lead to evolution of new traits</li>
                </ul>
                <p className="mb-2">
                  <span className="font-medium">Disadvantages:</span>
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Requires two compatible plants (or parts)</li>
                  <li>Depends on pollination agents</li>
                  <li>Uses more energy and resources</li>
                  <li>Takes longer than asexual reproduction</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Asexual Reproduction</h4>
                <p className="mb-2">
                  <span className="font-medium">Advantages:</span>
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Only needs one parent plant</li>
                  <li>Faster and uses less energy</li>
                  <li>Preserves beneficial traits</li>
                  <li>Can reproduce when conditions aren't suitable for flowering</li>
                </ul>
                <p className="mb-2">
                  <span className="font-medium">Disadvantages:</span>
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>No genetic variation (all offspring are identical)</li>
                  <li>Less adaptable to environmental changes</li>
                  <li>If a disease affects one plant, it can affect all the clones</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Which of these is NOT a method of asexual reproduction in plants?"
                options={["Runners", "Pollination", "Tubers", "Cuttings"]}
                correctIndex={1}
                explanation="Pollination is part of sexual reproduction in plants, not asexual reproduction. Runners (like in strawberry plants), tubers (like potatoes), and taking cuttings are all methods of asexual reproduction that produce plants identical to the parent."
              />

              <QuizQuestion
                question="What is the main advantage of sexual reproduction in plants?"
                options={[
                  "It's faster than asexual reproduction",
                  "It requires less energy",
                  "It creates genetic variation in offspring",
                  "It only needs one parent plant",
                ]}
                correctIndex={2}
                explanation="The main advantage of sexual reproduction is that it creates genetic variation in offspring, making them different from their parents. This helps plants adapt to changing environments and evolve new traits. Sexual reproduction is actually slower and requires more energy than asexual reproduction."
              />

              <QuizQuestion
                question="Which part of the flower receives pollen during pollination?"
                options={["Anther", "Filament", "Stigma", "Ovary"]}
                correctIndex={2}
                explanation="The stigma is the part of the flower that receives pollen during pollination. The anther produces pollen, the filament supports the anther, and the ovary contains the ovules with egg cells."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/science/living-things">
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

