import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"

export default function ChangesOldAgeModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Changes in Old Age"
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
          <YouTubeVideo videoId="GbxaOkC7J-A" title="Changes in Old Age" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about how our bodies change as we get older before exploring the detailed lesson
            content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Changes in Old Age</h2>
            <p className="mb-4">
              As humans enter old age (typically considered to be 65 years and older), they experience various physical
              and mental changes. These changes are a natural part of the ageing process, though they can vary greatly
              from person to person.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Physical Changes in Old Age</h3>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Changes to Appearance</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Hair</span>: Hair often becomes thinner and turns grey or white due to
                    a decrease in melanin production
                  </li>
                  <li>
                    <span className="font-medium">Skin</span>: Skin becomes thinner, less elastic, and more wrinkled as
                    collagen production decreases
                  </li>
                  <li>
                    <span className="font-medium">Height</span>: People may become slightly shorter as the discs between
                    vertebrae compress and bone density decreases
                  </li>
                  <li>
                    <span className="font-medium">Posture</span>: Changes in bone structure and muscle strength can lead
                    to a more stooped posture
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Changes to the Senses</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Vision</span>: Eyes may produce fewer tears, making them drier. The
                    lens becomes less flexible, making it harder to focus on close objects (presbyopia). Many older
                    people need reading glasses
                  </li>
                  <li>
                    <span className="font-medium">Hearing</span>: High-frequency sounds become harder to hear
                    (presbycusis), and it may be more difficult to distinguish speech in noisy environments
                  </li>
                  <li>
                    <span className="font-medium">Taste and smell</span>: The number of taste buds decreases, and the
                    sense of smell may diminish, affecting the enjoyment of food
                  </li>
                  <li>
                    <span className="font-medium">Touch</span>: Sensitivity to touch, temperature, and pain may decrease
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Changes to Body Systems</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Cardiovascular system</span>: The heart muscle becomes less efficient,
                    and blood vessels become stiffer, which can lead to increased blood pressure
                  </li>
                  <li>
                    <span className="font-medium">Respiratory system</span>: Lung capacity decreases, and the
                    respiratory muscles may weaken, making breathing more effortful
                  </li>
                  <li>
                    <span className="font-medium">Digestive system</span>: Digestion slows down, and the body may
                    produce fewer digestive enzymes
                  </li>
                  <li>
                    <span className="font-medium">Urinary system</span>: Kidneys filter blood more slowly, and bladder
                    capacity may decrease, leading to more frequent urination
                  </li>
                  <li>
                    <span className="font-medium">Immune system</span>: The immune response becomes less efficient,
                    making older people more susceptible to infections
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Changes to Bones, Joints, and Muscles</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Bones</span>: Bone density decreases (osteopenia or osteoporosis),
                    making bones more fragile and susceptible to fractures
                  </li>
                  <li>
                    <span className="font-medium">Joints</span>: Cartilage in joints wears down over time, which can
                    lead to stiffness and arthritis
                  </li>
                  <li>
                    <span className="font-medium">Muscles</span>: Muscle mass and strength decrease (sarcopenia),
                    affecting balance, mobility, and overall strength
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Cognitive and Mental Changes</h3>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Normal Cognitive Ageing</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Processing speed</span>: It may take longer to process information and
                    react to stimuli
                  </li>
                  <li>
                    <span className="font-medium">Memory</span>: Short-term memory and the ability to learn new
                    information may decline somewhat
                  </li>
                  <li>
                    <span className="font-medium">Attention</span>: It may become harder to ignore distractions and
                    focus on multiple tasks at once
                  </li>
                  <li>
                    <span className="font-medium">Problem-solving</span>: Complex problem-solving may take more time,
                    though wisdom and experience often compensate
                  </li>
                </ul>
                <p className="mt-2">
                  It's important to note that significant memory loss or confusion is not a normal part of ageing and
                  could indicate other health issues.
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Psychological Changes</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Retirement</span>: Adjusting to retirement can be a significant life
                    change, affecting identity and daily routine
                  </li>
                  <li>
                    <span className="font-medium">Social connections</span>: Social circles may change as friends and
                    family members move away or pass away
                  </li>
                  <li>
                    <span className="font-medium">Life perspective</span>: Many older adults develop a different
                    perspective on life, often focusing more on meaningful relationships and experiences
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Healthy Ageing</h3>
              <p className="mb-2">
                While many changes in old age are inevitable, there are ways to stay healthy and active:
              </p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Regular exercise</span>: Physical activity helps maintain muscle mass,
                  bone density, and cardiovascular health
                </li>
                <li>
                  <span className="font-medium">Balanced diet</span>: Proper nutrition supports overall health and can
                  prevent or manage certain conditions
                </li>
                <li>
                  <span className="font-medium">Mental stimulation</span>: Engaging in mentally challenging activities
                  helps maintain cognitive function
                </li>
                <li>
                  <span className="font-medium">Social connections</span>: Maintaining relationships and social
                  activities contributes to mental well-being
                </li>
                <li>
                  <span className="font-medium">Regular health check-ups</span>: Preventive healthcare can detect and
                  address issues early
                </li>
                <li>
                  <span className="font-medium">Avoiding harmful habits</span>: Not smoking and limiting alcohol
                  consumption can prevent many health problems
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Contributions of Older Adults</h3>
              <p className="mb-2">Older adults make valuable contributions to society:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Wisdom and experience</span>: Older adults have accumulated knowledge
                  and skills throughout their lives
                </li>
                <li>
                  <span className="font-medium">Mentorship</span>: They can guide and teach younger generations
                </li>
                <li>
                  <span className="font-medium">Volunteering</span>: Many older adults contribute to their communities
                  through volunteer work
                </li>
                <li>
                  <span className="font-medium">Family support</span>: Grandparents often help with childcare and
                  provide emotional support to families
                </li>
                <li>
                  <span className="font-medium">Historical perspective</span>: They provide connections to history and
                  cultural traditions
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Which of these is NOT a normal change associated with ageing?"
                options={["Greying hair", "Severe memory loss", "Decreased muscle mass", "Reduced lung capacity"]}
                correctIndex={1}
                explanation="Severe memory loss is NOT a normal part of ageing. While some mild forgetfulness might occur, significant memory loss could be a sign of conditions like dementia or Alzheimer's disease. Greying hair, decreased muscle mass (sarcopenia), and reduced lung capacity are all normal age-related changes."
              />

              <QuizQuestion
                question="Which body system changes in old age, causing many older adults to need reading glasses?"
                options={["Digestive system", "Respiratory system", "Visual system", "Immune system"]}
                correctIndex={2}
                explanation="The visual system changes with age. The lens of the eye becomes less flexible, making it harder to focus on close objects. This condition is called presbyopia and is why many older adults need reading glasses."
              />

              <QuizQuestion
                question="Which of these activities would be MOST beneficial for healthy ageing?"
                options={[
                  "Watching television all day",
                  "Regular physical exercise",
                  "Avoiding all social interactions",
                  "Eating only one type of food",
                ]}
                correctIndex={1}
                explanation="Regular physical exercise is most beneficial for healthy ageing. It helps maintain muscle mass, bone density, cardiovascular health, and can improve mental well-being. The other options would likely have negative effects on physical and mental health in older adults."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/science/animals-humans/gestation-periods">
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

