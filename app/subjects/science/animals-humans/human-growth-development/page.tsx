import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"

export default function HumanGrowthDevelopmentModule() {
  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader
        title="Human Growth and Development"
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
          <YouTubeVideo videoId="fpH9JbWZ1uM" title="Human Growth and Development Stages" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about the different stages of human growth and development before diving into the
            lesson content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Human Growth and Development</h2>
            <p className="mb-4">
              Humans go through many changes as they grow from babies to adults. Let's explore the different stages of
              human growth and development and the changes that happen at each stage.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">The Stages of Human Growth</h3>
              <p className="mb-2">Humans go through several distinct stages as they grow:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">1. Infancy (0-2 years)</h4>
                <p className="mb-2">This is the period from birth to about 2 years of age. During this time:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Babies grow very quickly, often tripling their birth weight in the first year</li>
                  <li>They learn to control their head, roll over, sit up, crawl, and eventually walk</li>
                  <li>They develop hand-eye coordination and can grasp objects</li>
                  <li>They begin to communicate, first with crying and babbling, then with simple words</li>
                  <li>Their first teeth (milk teeth) begin to appear</li>
                  <li>Their brain develops rapidly, forming connections as they learn about the world</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">2. Early Childhood (2-6 years)</h4>
                <p className="mb-2">During early childhood:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Children continue to grow, but more slowly than during infancy</li>
                  <li>They develop better coordination and can run, jump, climb, and balance</li>
                  <li>They learn to use the toilet independently</li>
                  <li>Their vocabulary expands rapidly, and they begin to form sentences</li>
                  <li>They develop social skills and begin to play with other children</li>
                  <li>They become more independent and curious about the world</li>
                  <li>They develop imagination and engage in pretend play</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">3. Middle Childhood (6-11 years)</h4>
                <p className="mb-2">This is the primary school age. During this time:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Children grow steadily in height and weight</li>
                  <li>They lose their milk teeth, which are replaced by permanent teeth</li>
                  <li>They develop stronger muscles and better coordination</li>
                  <li>They learn to read, write, and do mathematics</li>
                  <li>They develop more complex thinking and problem-solving skills</li>
                  <li>They form friendships and develop a sense of belonging</li>
                  <li>They begin to understand rules and fairness</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">4. Adolescence (11-18 years)</h4>
                <p className="mb-2">Adolescence is the teenage years, a time of significant change:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Puberty begins, triggered by hormonal changes</li>
                  <li>There is a growth spurt, with significant increases in height and weight</li>
                  <li>Boys develop deeper voices, facial hair, and broader shoulders</li>
                  <li>Girls develop breasts and begin menstruation</li>
                  <li>Both boys and girls develop body hair and may experience acne</li>
                  <li>The brain continues to develop, especially areas involved in decision-making</li>
                  <li>Teenagers develop their identity and independence</li>
                  <li>They experience more complex emotions and social relationships</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">5. Early Adulthood (18-40 years)</h4>
                <p className="mb-2">During early adulthood:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Physical growth is complete, but the body is at its peak fitness</li>
                  <li>The brain is fully developed by the mid-20s</li>
                  <li>Many people establish careers and relationships</li>
                  <li>Some people have children and start families</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">6. Middle Adulthood (40-65 years)</h4>
                <p className="mb-2">During middle adulthood:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Physical changes begin to appear, such as greying hair and wrinkles</li>
                  <li>Women go through menopause, when menstruation stops</li>
                  <li>Vision and hearing may begin to decline</li>
                  <li>Muscle mass may decrease and fat may increase</li>
                  <li>People often reach the peak of their careers</li>
                  <li>They may become grandparents</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">7. Late Adulthood (65+ years)</h4>
                <p className="mb-2">In late adulthood:</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Hair may become thinner and whiter</li>
                  <li>Skin becomes thinner and less elastic, causing more wrinkles</li>
                  <li>Height may decrease slightly as bones lose density</li>
                  <li>Reaction times and physical strength decrease</li>
                  <li>Memory and cognitive processing may slow down</li>
                  <li>People often retire from work</li>
                  <li>They may have more time for hobbies and interests</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Factors That Affect Growth and Development</h3>
              <p className="mb-2">Many factors can influence how humans grow and develop:</p>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  <span className="font-medium">Genetics</span>: Inherited traits from parents affect height, body
                  shape, and many other characteristics
                </li>
                <li>
                  <span className="font-medium">Nutrition</span>: A balanced diet is essential for healthy growth and
                  development
                </li>
                <li>
                  <span className="font-medium">Exercise</span>: Physical activity helps build strong muscles and bones
                </li>
                <li>
                  <span className="font-medium">Sleep</span>: The body grows and repairs itself during sleep
                </li>
                <li>
                  <span className="font-medium">Environment</span>: Living conditions, pollution, and stress can affect
                  development
                </li>
                <li>
                  <span className="font-medium">Healthcare</span>: Access to medical care helps prevent and treat
                  illnesses that could affect growth
                </li>
                <li>
                  <span className="font-medium">Education</span>: Learning opportunities support cognitive and social
                  development
                </li>
              </ul>
            </div>

            <h3 className="font-bold mb-2">Measuring Growth</h3>
            <p className="mb-4">Doctors and scientists measure human growth in several ways:</p>
            <ul className="space-y-1 pl-6 list-disc mb-4">
              <li>
                <span className="font-medium">Height</span>: Measured in centimetres or metres
              </li>
              <li>
                <span className="font-medium">Weight</span>: Measured in kilograms
              </li>
              <li>
                <span className="font-medium">Head circumference</span>: Important in babies as it indicates brain
                growth
              </li>
              <li>
                <span className="font-medium">Body Mass Index (BMI)</span>: A calculation based on height and weight
              </li>
              <li>
                <span className="font-medium">Growth charts</span>: Used to compare a child's growth with others of the
                same age
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Which stage of human development is characterised by puberty and significant growth spurts?"
                options={["Infancy", "Early Childhood", "Middle Childhood", "Adolescence"]}
                correctIndex={3}
                explanation="Adolescence (11-18 years) is the stage when puberty occurs, triggered by hormonal changes. This stage is characterised by growth spurts, development of secondary sexual characteristics, and significant physical and emotional changes."
              />

              <QuizQuestion
                question="Which of these is NOT a factor that affects human growth and development?"
                options={["Nutrition", "Genetics", "Television watching", "Exercise"]}
                correctIndex={2}
                explanation="While excessive television watching might have some impacts on development, it is not a primary factor affecting physical growth like nutrition, genetics, and exercise are. The amount of TV watched doesn't directly impact how tall someone grows or how their body develops."
              />

              <QuizQuestion
                question="During which stage do humans typically lose their milk teeth and grow permanent teeth?"
                options={[
                  "Infancy (0-2 years)",
                  "Early Childhood (2-6 years)",
                  "Middle Childhood (6-11 years)",
                  "Adolescence (11-18 years)",
                ]}
                correctIndex={2}
                explanation="During Middle Childhood (6-11 years), children typically lose their milk teeth (primary teeth), which are replaced by permanent teeth. This process usually begins around age 6 and continues throughout the primary school years."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/science/animals-humans/changes-old-age">
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

