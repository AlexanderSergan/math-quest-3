import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"

export default function LifeCyclesBirdsModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Life Cycles of Birds"
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
          <YouTubeVideo videoId="PJxFzaXNpLs" title="Life Cycles of Birds" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about how birds develop from eggs to adults before exploring the detailed lesson
            content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Life Cycles of Birds</h2>
            <p className="mb-4">
              Birds are fascinating creatures that can be found all over the world. They are warm-blooded vertebrates
              (animals with backbones) that have feathers, wings, and lay eggs. Let's explore their unique life cycle!
            </p>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">What Makes a Bird?</h3>
              <p className="mb-2">Birds have several special characteristics:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>They have feathers (the only animals that do!)</li>
                <li>They have wings (though not all birds can fly)</li>
                <li>They have a beak or bill with no teeth</li>
                <li>They lay eggs with hard shells</li>
                <li>They are warm-blooded</li>
                <li>They have a four-chambered heart</li>
                <li>Most birds can fly, but some (like penguins and ostriches) cannot</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">The Bird Life Cycle</h3>
              <p className="mb-2">Birds follow this life cycle:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">1. Courtship and Mating</h4>
                <p className="mb-2">
                  Male birds often perform special displays to attract females. This might include:
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Singing special songs</li>
                  <li>Showing off colourful feathers</li>
                  <li>Performing special dances or flights</li>
                  <li>Building impressive nests</li>
                </ul>
                <p className="mb-2">
                  Once a female chooses a mate, they will breed. The male's sperm fertilises the female's eggs inside
                  her body.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">2. Nest Building</h4>
                <p className="mb-2">
                  Most birds build nests to keep their eggs and chicks safe. Nests can be made from:
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Twigs, grass, and leaves</li>
                  <li>Mud</li>
                  <li>Feathers and animal fur</li>
                  <li>Spider webs (to hold things together)</li>
                </ul>
                <p className="mb-2">Different birds build different types of nests:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Cup nests (like robins)</li>
                  <li>Platform nests (like eagles)</li>
                  <li>Burrow nests (like kingfishers)</li>
                  <li>Cavity nests in trees (like woodpeckers)</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">3. Egg Laying</h4>
                <p className="mb-2">
                  The female lays eggs in the nest. The number of eggs (called a clutch) varies by species:
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Hummingbirds: 2 eggs</li>
                  <li>Robins: 3-5 eggs</li>
                  <li>Ducks: 8-12 eggs</li>
                </ul>
                <p className="mb-2">
                  Bird eggs have a hard shell made of calcium carbonate. Inside the egg is the yolk (food for the
                  developing chick) and the embryo (the developing baby bird).
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">4. Incubation</h4>
                <p className="mb-2">The eggs need to be kept warm to develop. This is called incubation.</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>One or both parents sit on the eggs to keep them warm</li>
                  <li>
                    The parent's body has a special bare patch of skin called a 'brood patch' that transfers heat to the
                    eggs
                  </li>
                  <li>
                    Incubation time varies: small birds like finches take about 2 weeks, while large birds like swans
                    can take 5-6 weeks
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">5. Hatching</h4>
                <p className="mb-2">
                  When the chick is fully developed inside the egg, it's ready to hatch. The chick:
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Uses an 'egg tooth' (a small bump on its beak) to crack the shell</li>
                  <li>Pushes and turns inside the egg to break out</li>
                  <li>This process can take from a few hours to a day</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">6. Growth and Development</h4>
                <p className="mb-2">Baby birds (chicks) develop in two main ways:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Altricial chicks</span>: Born naked, blind, and helpless (like robins,
                    sparrows, and eagles). Parents must feed and care for them in the nest for weeks.
                  </li>
                  <li>
                    <span className="font-medium">Precocial chicks</span>: Born covered in down feathers, with open
                    eyes, and able to walk soon after hatching (like chickens, ducks, and geese). They can leave the
                    nest quickly but still follow their parents to learn what to eat.
                  </li>
                </ul>
                <p className="mb-2">As chicks grow:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>They develop feathers</li>
                  <li>They learn to fly (fledging)</li>
                  <li>They learn to find food</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">7. Adulthood and Reproduction</h4>
                <p className="mb-2">
                  When birds are fully grown, they can reproduce and start the cycle again. Different birds reach
                  adulthood at different ages:
                </p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Small birds like sparrows: a few months</li>
                  <li>Medium birds like pigeons: about 1 year</li>
                  <li>Large birds like eagles: 4-5 years</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Migration: A Special Part of Many Birds' Lives</h3>
              <p className="mb-2">Many birds migrate (travel long distances) each year:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>They often breed in one location and spend the winter in another</li>
                <li>This helps them find food and suitable weather year-round</li>
                <li>
                  Some birds travel incredible distances - Arctic Terns fly from the Arctic to Antarctica and back each
                  year (about 70,000 km)!
                </li>
                <li>Birds use the sun, stars, Earth's magnetic field, and landmarks to navigate</li>
              </ul>
            </div>

            <h3 className="font-bold mb-2">Bird Adaptations</h3>
            <p className="mb-4">
              Birds have many adaptations that help them survive in their environments. Their beaks, feet, wings, and
              feathers are all specially adapted for their lifestyle and habitat. These adaptations help them find food,
              build nests, and raise their young successfully.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Which of these is a unique feature that only birds have?"
                options={["Laying eggs", "Being warm-blooded", "Having feathers", "Having a backbone"]}
                correctIndex={2}
                explanation="Feathers are unique to birds - no other animals have them. Many animals lay eggs (like reptiles and fish), many are warm-blooded (like mammals), and many have backbones (like mammals, reptiles, amphibians, and fish)."
              />

              <QuizQuestion
                question="What is the correct order of stages in a bird's life cycle?"
                options={[
                  "Mating → Egg laying → Incubation → Hatching → Growth → Adulthood",
                  "Egg laying → Mating → Incubation → Hatching → Growth → Adulthood",
                  "Incubation → Egg laying → Mating → Hatching → Growth → Adulthood",
                  "Mating → Incubation → Egg laying → Hatching → Growth → Adulthood",
                ]}
                correctIndex={0}
                explanation="The correct order is: Mating (fertilisation), Egg laying, Incubation (keeping eggs warm), Hatching (chick breaks out of egg), Growth (chick develops), and Adulthood (bird can reproduce)."
              />

              <QuizQuestion
                question="Which type of baby bird is born blind, naked, and helpless, needing lots of parental care in the nest?"
                options={["Precocial chicks", "Altricial chicks", "Fledglings", "Nestlings"]}
                correctIndex={1}
                explanation="Altricial chicks (like robins and sparrows) are born blind, naked, and helpless. They need to stay in the nest and be cared for by their parents for weeks. Precocial chicks (like ducks and chickens) are born with down feathers and can walk soon after hatching."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/science/living-things/life-cycles-plants">
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

