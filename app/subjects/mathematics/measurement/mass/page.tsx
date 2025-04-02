"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"
import { useEffect } from "react"

export default function MassModule() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader title="Mass and Weight" lesson="Measurement" subject="Mathematics" subjectColor="blue" />

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
          <YouTubeVideo videoId="1eGKx2-AxlU" title="Understanding Mass and Weight" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about mass, weight, and how to measure them before diving into the lesson content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Mass and Weight</h2>
            <p className="mb-4">
              Mass is the amount of matter in an object. Weight is the force of gravity acting on an object. On Earth,
              we often use these terms interchangeably, but they are different concepts.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Mass vs. Weight</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">Mass</th>
                      <th className="border border-blue-200 p-2 text-left">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2">The amount of matter in an object</td>
                      <td className="border border-blue-200 p-2">The force of gravity acting on an object</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Measured in kilograms (kg) or grams (g)</td>
                      <td className="border border-blue-200 p-2">Measured in newtons (N)</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Stays the same no matter where you are</td>
                      <td className="border border-blue-200 p-2">
                        Changes depending on gravity (e.g., less on the Moon)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Measured with a balance scale</td>
                      <td className="border border-blue-200 p-2">Measured with a spring scale</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-2">
                In everyday life on Earth, we often use mass and weight interchangeably. When we say something "weighs 5
                kg," we're actually referring to its mass.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Metric Units of Mass</h3>
              <p className="mb-2">In the metric system, we use these units to measure mass:</p>

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
                      <td className="border border-blue-200 p-2">Milligram</td>
                      <td className="border border-blue-200 p-2">mg</td>
                      <td className="border border-blue-200 p-2">1/1000 of a gram</td>
                      <td className="border border-blue-200 p-2">Medicine dosages, very light objects</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Gram</td>
                      <td className="border border-blue-200 p-2">g</td>
                      <td className="border border-blue-200 p-2">Basic unit</td>
                      <td className="border border-blue-200 p-2">Food ingredients, letters</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Kilogram</td>
                      <td className="border border-blue-200 p-2">kg</td>
                      <td className="border border-blue-200 p-2">1000 grams</td>
                      <td className="border border-blue-200 p-2">Body weight, bags of flour</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Tonne</td>
                      <td className="border border-blue-200 p-2">t</td>
                      <td className="border border-blue-200 p-2">1000 kilograms</td>
                      <td className="border border-blue-200 p-2">Cars, large animals, shipping containers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Converting Between Metric Units of Mass</h3>
              <p className="mb-2">To convert between metric units of mass, we multiply or divide by powers of 10:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Converting to a smaller unit (going down)</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Multiply by 1000</li>
                  <li>Example: 5 kg = 5 × 1000 = 5000 g</li>
                  <li>Example: 2.3 g = 2.3 × 1000 = 2300 mg</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Converting to a larger unit (going up)</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Divide by 1000</li>
                  <li>Example: 3500 g = 3500 ÷ 1000 = 3.5 kg</li>
                  <li>Example: 4500 kg = 4500 ÷ 1000 = 4.5 t (tonnes)</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Conversion Chart</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-200 p-2 text-center">t (tonne)</th>
                        <th className="border border-blue-200 p-2 text-center">kg</th>
                        <th className="border border-blue-200 p-2 text-center">g</th>
                        <th className="border border-blue-200 p-2 text-center">mg</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="border border-blue-200 p-2">1</td>
                        <td className="border border-blue-200 p-2">1000</td>
                        <td className="border border-blue-200 p-2">1,000,000</td>
                        <td className="border border-blue-200 p-2">1,000,000,000</td>
                      </tr>
                      <tr className="text-center">
                        <td className="border border-blue-200 p-2">0.001</td>
                        <td className="border border-blue-200 p-2">1</td>
                        <td className="border border-blue-200 p-2">1000</td>
                        <td className="border border-blue-200 p-2">1,000,000</td>
                      </tr>
                      <tr className="text-center">
                        <td className="border border-blue-200 p-2">0.000001</td>
                        <td className="border border-blue-200 p-2">0.001</td>
                        <td className="border border-blue-200 p-2">1</td>
                        <td className="border border-blue-200 p-2">1000</td>
                      </tr>
                      <tr className="text-center">
                        <td className="border border-blue-200 p-2">0.000000001</td>
                        <td className="border border-blue-200 p-2">0.000001</td>
                        <td className="border border-blue-200 p-2">0.001</td>
                        <td className="border border-blue-200 p-2">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Imperial Units of Mass</h3>
              <p className="mb-2">In the UK, we sometimes still use imperial units for certain measurements:</p>

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
                      <td className="border border-blue-200 p-2">Ounce (oz)</td>
                      <td className="border border-blue-200 p-2">28.35 g</td>
                      <td className="border border-blue-200 p-2">Food portions, small packages</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Pound (lb)</td>
                      <td className="border border-blue-200 p-2">16 ounces (453.6 g)</td>
                      <td className="border border-blue-200 p-2">Body weight, food shopping</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Stone (st)</td>
                      <td className="border border-blue-200 p-2">14 pounds (6.35 kg)</td>
                      <td className="border border-blue-200 p-2">Body weight in the UK</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Ton</td>
                      <td className="border border-blue-200 p-2">2240 pounds (1016 kg)</td>
                      <td className="border border-blue-200 p-2">
                        Very heavy items (slightly different from a metric tonne)
                      </td>
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
                  <li>1 ounce ≈ 28 g</li>
                  <li>1 pound ≈ 450 g</li>
                  <li>1 kilogram ≈ 2.2 pounds</li>
                  <li>1 stone ≈ 6.35 kg</li>
                  <li>1 tonne ≈ 0.98 tons (almost the same)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Measuring Mass</h3>
              <p className="mb-2">We use different tools to measure mass:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Types of Scales:</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>
                    <span className="font-medium">Balance scales</span>: Compare the mass of an object to known masses
                  </li>
                  <li>
                    <span className="font-medium">Digital scales</span>: Give a precise reading in grams or kilograms
                  </li>
                  <li>
                    <span className="font-medium">Kitchen scales</span>: Used for measuring ingredients when cooking
                  </li>
                  <li>
                    <span className="font-medium">Bathroom scales</span>: Used for measuring body weight
                  </li>
                  <li>
                    <span className="font-medium">Industrial scales</span>: Used for measuring very heavy items
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Real-World Applications</h3>
              <p className="mb-2">Understanding mass is important for many real-world situations:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Examples:</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Cooking and baking (measuring ingredients)</li>
                  <li>Postage (determining shipping costs)</li>
                  <li>Medicine (calculating correct dosages)</li>
                  <li>Shopping (buying fruits, vegetables, meat by weight)</li>
                  <li>Science experiments (measuring reactants and products)</li>
                  <li>Health monitoring (tracking body weight)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Tips for Measuring Mass</h3>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  Choose the appropriate unit for what you're measuring (mg for medicine, kg for people, tonnes for
                  cars)
                </li>
                <li>Make sure scales are on a flat, level surface</li>
                <li>Check that digital scales are set to zero before measuring</li>
                <li>
                  Be consistent with units - convert all measurements to the same unit before comparing or adding them
                </li>
                <li>
                  Remember that the mass of an object remains the same regardless of location, but weight can change
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Convert 4.5 kilograms to grams."
                options={["45 g", "450 g", "4,500 g", "45,000 g"]}
                correctIndex={2}
                explanation="To convert from kilograms to grams, multiply by 1000. So 4.5 kg × 1000 = 4,500 g."
              />

              <QuizQuestion
                question="Which is heavier: 500 g or 0.6 kg?"
                options={["500 g", "0.6 kg", "They weigh the same", "It depends on where you measure them"]}
                correctIndex={1}
                explanation="To compare, we need to convert to the same unit. 0.6 kg = 600 g. Since 600 g is more than 500 g, 0.6 kg is heavier."
              />

              <QuizQuestion
                question="What is the approximate weight in kilograms of a person who weighs 11 stone?"
                options={["11 kg", "70 kg", "110 kg", "154 kg"]}
                correctIndex={1}
                explanation="1 stone ≈ 6.35 kg, so 11 stone ≈ 11 × 6.35 kg ≈ 70 kg."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/measurement/volume-capacity">
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

