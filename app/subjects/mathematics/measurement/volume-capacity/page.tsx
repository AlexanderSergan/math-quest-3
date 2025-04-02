"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"
import { useEffect } from "react"

export default function VolumeCapacityModule() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader title="Volume and Capacity" lesson="Measurement" subject="Mathematics" subjectColor="blue" />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link href="/subjects/mathematics/measurement">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Measurement
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn 2 House Points</span>
          </div>
        </div>

        <Card className="mb-6 p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Introduction Video</h2>
          <YouTubeVideo videoId="qJwecTgce6c" title="Understanding Volume and Capacity" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about volume, capacity, and how to measure them before diving into the lesson
            content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Volume and Capacity</h2>
            <p className="mb-4">
              Volume is the amount of space that an object or substance occupies in three dimensions. Capacity is the
              amount a container can hold. For liquids, we often use the term capacity instead of volume.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Volume vs. Capacity</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">Volume</th>
                      <th className="border border-blue-200 p-2 text-left">Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2">The amount of space occupied by a 3D object</td>
                      <td className="border border-blue-200 p-2">The maximum amount a container can hold</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Applies to solids, liquids, and gases</td>
                      <td className="border border-blue-200 p-2">Usually refers to liquids or gases</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Measured in cubic units (e.g., cm³, m³)</td>
                      <td className="border border-blue-200 p-2">Measured in litres (L) or millilitres (ml)</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Example: The volume of a brick</td>
                      <td className="border border-blue-200 p-2">Example: The capacity of a water bottle</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Units for Measuring Volume</h3>
              <p className="mb-2">For solid objects, we use cubic units:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">Unit</th>
                      <th className="border border-blue-200 p-2 text-left">Symbol</th>
                      <th className="border border-blue-200 p-2 text-left">Size</th>
                      <th className="border border-blue-200 p-2 text-left">Example Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2">Cubic millimetre</td>
                      <td className="border border-blue-200 p-2">mm³</td>
                      <td className="border border-blue-200 p-2">Very small volume</td>
                      <td className="border border-blue-200 p-2">Volume of a grain of sand</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Cubic centimetre</td>
                      <td className="border border-blue-200 p-2">cm³</td>
                      <td className="border border-blue-200 p-2">1 cm × 1 cm × 1 cm</td>
                      <td className="border border-blue-200 p-2">Small objects, dice</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Cubic metre</td>
                      <td className="border border-blue-200 p-2">m³</td>
                      <td className="border border-blue-200 p-2">1 m × 1 m × 1 m</td>
                      <td className="border border-blue-200 p-2">Rooms, large containers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Units for Measuring Capacity</h3>
              <p className="mb-2">For liquids and gases, we use these units:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">Unit</th>
                      <th className="border border-blue-200 p-2 text-left">Symbol</th>
                      <th className="border border-blue-200 p-2 text-left">Size</th>
                      <th className="border border-blue-200 p-2 text-left">Example Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2">Millilitre</td>
                      <td className="border border-blue-200 p-2">ml or mL</td>
                      <td className="border border-blue-200 p-2">1/1000 of a litre</td>
                      <td className="border border-blue-200 p-2">Medicine, cooking ingredients</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Centilitre</td>
                      <td className="border border-blue-200 p-2">cl or cL</td>
                      <td className="border border-blue-200 p-2">1/100 of a litre</td>
                      <td className="border border-blue-200 p-2">Small drinks</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Litre</td>
                      <td className="border border-blue-200 p-2">l or L</td>
                      <td className="border border-blue-200 p-2">Basic unit</td>
                      <td className="border border-blue-200 p-2">Drinks, petrol, milk</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Kilolitre</td>
                      <td className="border border-blue-200 p-2">kl or kL</td>
                      <td className="border border-blue-200 p-2">1000 litres</td>
                      <td className="border border-blue-200 p-2">Swimming pools, water tanks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Converting Between Units</h3>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Converting Between Volume Units</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>1 cm³ = 1000 mm³</li>
                  <li>1 m³ = 1,000,000 cm³</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Converting Between Capacity Units</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>1 L = 1000 mL</li>
                  <li>1 L = 100 cL</li>
                  <li>1 kL = 1000 L</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Relationship Between Volume and Capacity</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>1 cm³ = 1 mL</li>
                  <li>1000 cm³ = 1 L</li>
                  <li>1 m³ = 1000 L</li>
                </ul>
                <p className="mt-2">
                  This relationship is very useful! It means that a container with a volume of 1 cubic centimetre can
                  hold exactly 1 millilitre of liquid.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Calculating Volume of 3D Shapes</h3>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Cuboid (Rectangular Prism)</h4>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-32 h-32 relative">
                    <div className="absolute top-0 left-0 w-24 h-24 border-2 border-blue-500 bg-blue-100 bg-opacity-50"></div>
                    <div className="absolute top-8 left-8 w-24 h-24 border-2 border-blue-500 bg-blue-100 bg-opacity-50"></div>
                    <div className="absolute top-0 left-0 w-24 h-24 border-2 border-blue-500"></div>
                    <div className="absolute top-0 left-0 h-8 border-l-2 border-blue-500"></div>
                    <div className="absolute top-0 right-8 h-8 border-l-2 border-blue-500"></div>
                    <div className="absolute bottom-8 left-0 h-8 border-l-2 border-blue-500"></div>
                    <div className="absolute bottom-8 right-8 h-8 border-l-2 border-blue-500"></div>
                  </div>
                  <div>
                    <p className="font-medium">Volume = length × width × height</p>
                    <p>Example: A cuboid with length 5 cm, width 3 cm, and height 2 cm</p>
                    <p>Volume = 5 cm × 3 cm × 2 cm = 30 cm³</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Cube</h4>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-32 h-32 relative">
                    <div className="absolute top-0 left-0 w-24 h-24 border-2 border-blue-500 bg-blue-100 bg-opacity-50"></div>
                    <div className="absolute top-8 left-8 w-24 h-24 border-2 border-blue-500 bg-blue-100 bg-opacity-50"></div>
                    <div className="absolute top-0 left-0 w-24 h-24 border-2 border-blue-500"></div>
                    <div className="absolute top-0 left-0 h-8 border-l-2 border-blue-500"></div>
                    <div className="absolute top-0 right-8 h-8 border-l-2 border-blue-500"></div>
                    <div className="absolute bottom-8 left-0 h-8 border-l-2 border-blue-500"></div>
                    <div className="absolute bottom-8 right-8 h-8 border-l-2 border-blue-500"></div>
                  </div>
                  <div>
                    <p className="font-medium">Volume = side length × side length × side length = (side length)³</p>
                    <p>Example: A cube with side length 4 cm</p>
                    <p>Volume = 4 cm × 4 cm × 4 cm = 64 cm³</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Prism</h4>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-32 h-32 relative">
                    <div
                      className="absolute top-4 left-4 w-24 h-16 border-2 border-blue-500 bg-blue-100 bg-opacity-50"
                      style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }}
                    ></div>
                    <div
                      className="absolute top-12 left-8 w-24 h-16 border-2 border-blue-500 bg-blue-100 bg-opacity-50"
                      style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }}
                    ></div>
                    <div
                      className="absolute top-4 left-4 w-24 h-16 border-2 border-blue-500"
                      style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }}
                    ></div>
                    <div className="absolute top-4 left-4 h-8 border-l-2 border-blue-500"></div>
                    <div className="absolute top-4 right-4 h-8 border-l-2 border-blue-500"></div>
                    <div className="absolute top-4 left-16 h-8 border-l-2 border-blue-500"></div>
                  </div>
                  <div>
                    <p className="font-medium">Volume = area of cross-section × length</p>
                    <p>Example: A triangular prism with cross-section area 12 cm² and length 7 cm</p>
                    <p>Volume = 12 cm² × 7 cm = 84 cm³</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Imperial Units of Capacity</h3>
              <p className="mb-2">In the UK, we sometimes still use imperial units for measuring liquids:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">Unit</th>
                      <th className="border border-blue-200 p-2 text-left">Size</th>
                      <th className="border border-blue-200 p-2 text-left">Example Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2">Fluid ounce (fl oz)</td>
                      <td className="border border-blue-200 p-2">28.4 ml</td>
                      <td className="border border-blue-200 p-2">Small amounts of liquid</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Pint (pt)</td>
                      <td className="border border-blue-200 p-2">568 ml</td>
                      <td className="border border-blue-200 p-2">Milk, beer</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Quart (qt)</td>
                      <td className="border border-blue-200 p-2">2 pints (1.14 L)</td>
                      <td className="border border-blue-200 p-2">Larger amounts of liquid</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Gallon (gal)</td>
                      <td className="border border-blue-200 p-2">8 pints (4.55 L)</td>
                      <td className="border border-blue-200 p-2">Petrol, large containers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Metric and Imperial Equivalents</h3>
              <p className="mb-2">
                It's useful to know some approximate equivalents between metric and imperial units:
              </p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>1 litre ≈ 1.75 pints</li>
                  <li>1 pint ≈ 568 ml</li>
                  <li>1 gallon ≈ 4.55 litres</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Real-World Applications</h3>
              <p className="mb-2">Understanding volume and capacity is important for many real-world situations:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Examples:</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Cooking and baking (measuring liquid ingredients)</li>
                  <li>Filling a swimming pool or fish tank</li>
                  <li>Calculating how much paint is needed to paint a room</li>
                  <li>Determining how much soil is needed for a garden</li>
                  <li>Measuring medicine dosages</li>
                  <li>Buying petrol for a car</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Tips for Measuring Volume and Capacity</h3>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  Choose the appropriate unit for what you're measuring (ml for small amounts, L for larger amounts)
                </li>
                <li>Use the correct measuring tool (measuring jug for liquids, ruler for dimensions of solids)</li>
                <li>
                  For irregular shapes, you can use water displacement (put the object in water and measure how much
                  water is displaced)
                </li>
                <li>Remember that 1 cm³ = 1 ml, which is a useful conversion</li>
                <li>Be consistent with units - convert all measurements to the same unit before calculating</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="What is the volume of a cuboid with length 5 cm, width 3 cm, and height 4 cm?"
                options={["12 cm³", "60 cm³", "15 cm³", "20 cm³"]}
                correctIndex={1}
                explanation="The volume of a cuboid = length × width × height = 5 cm × 3 cm × 4 cm = 60 cm³."
              />

              <QuizQuestion
                question="Convert 2.5 litres to millilitres."
                options={["25 ml", "250 ml", "2,500 ml", "25,000 ml"]}
                correctIndex={2}
                explanation="To convert from litres to millilitres, multiply by 1000. So 2.5 L × 1000 = 2,500 ml."
              />

              <QuizQuestion
                question="Which is the correct relationship between cubic centimetres and millilitres?"
                options={["1 cm³ = 10 ml", "1 cm³ = 1 ml", "1 cm³ = 100 ml", "1 cm³ = 0.1 ml"]}
                correctIndex={1}
                explanation="1 cubic centimetre (cm³) is exactly equal to 1 millilitre (ml). This is a fundamental relationship between volume and capacity units."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/measurement/time">
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

