"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"
import { useEffect } from "react"

export default function LengthModule() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader title="Length and Perimeter" lesson="Measurement" subject="Mathematics" subjectColor="blue" />

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
          <YouTubeVideo videoId="DZYSl2vAUt0" title="Understanding Length and Perimeter" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about units of length and how to calculate perimeter before diving into the lesson
            content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Length and Perimeter</h2>
            <p className="mb-4">
              Length is a measure of distance. We use different units to measure length depending on what we're
              measuring. Perimeter is the total distance around the outside of a shape.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Metric Units of Length</h3>
              <p className="mb-2">
                In the UK and most countries around the world, we use the metric system for measuring length:
              </p>

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
                      <td className="border border-blue-200 p-2">Millimetre</td>
                      <td className="border border-blue-200 p-2">mm</td>
                      <td className="border border-blue-200 p-2">1/1000 of a metre</td>
                      <td className="border border-blue-200 p-2">Thickness of a coin, small insects</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Centimetre</td>
                      <td className="border border-blue-200 p-2">cm</td>
                      <td className="border border-blue-200 p-2">1/100 of a metre</td>
                      <td className="border border-blue-200 p-2">Width of a finger, small objects</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Metre</td>
                      <td className="border border-blue-200 p-2">m</td>
                      <td className="border border-blue-200 p-2">Basic unit</td>
                      <td className="border border-blue-200 p-2">Height of a door, length of a bed</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Kilometre</td>
                      <td className="border border-blue-200 p-2">km</td>
                      <td className="border border-blue-200 p-2">1000 metres</td>
                      <td className="border border-blue-200 p-2">Distance between towns, length of a road</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Converting Between Metric Units</h3>
              <p className="mb-2">To convert between metric units, we multiply or divide by 10, 100, or 1000:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Converting to a smaller unit (going down)</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Multiply by 10, 100, or 1000</li>
                  <li>Example: 5 m = 5 × 100 = 500 cm</li>
                  <li>Example: 3.5 km = 3.5 × 1000 = 3500 m</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Converting to a larger unit (going up)</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Divide by 10, 100, or 1000</li>
                  <li>Example: 250 cm = 250 ÷ 100 = 2.5 m</li>
                  <li>Example: 4500 m = 4500 ÷ 1000 = 4.5 km</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Conversion Chart</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-200 p-2 text-center">km</th>
                        <th className="border border-blue-200 p-2 text-center">m</th>
                        <th className="border border-blue-200 p-2 text-center">cm</th>
                        <th className="border border-blue-200 p-2 text-center">mm</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="border border-blue-200 p-2">1</td>
                        <td className="border border-blue-200 p-2">1000</td>
                        <td className="border border-blue-200 p-2">100,000</td>
                        <td className="border border-blue-200 p-2">1,000,000</td>
                      </tr>
                      <tr className="text-center">
                        <td className="border border-blue-200 p-2">0.001</td>
                        <td className="border border-blue-200 p-2">1</td>
                        <td className="border border-blue-200 p-2">100</td>
                        <td className="border border-blue-200 p-2">1000</td>
                      </tr>
                      <tr className="text-center">
                        <td className="border border-blue-200 p-2">0.00001</td>
                        <td className="border border-blue-200 p-2">0.01</td>
                        <td className="border border-blue-200 p-2">1</td>
                        <td className="border border-blue-200 p-2">10</td>
                      </tr>
                      <tr className="text-center">
                        <td className="border border-blue-200 p-2">0.000001</td>
                        <td className="border border-blue-200 p-2">0.001</td>
                        <td className="border border-blue-200 p-2">0.1</td>
                        <td className="border border-blue-200 p-2">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Imperial Units of Length</h3>
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
                      <td className="border border-blue-200 p-2">Inch (in)</td>
                      <td className="border border-blue-200 p-2">2.54 cm</td>
                      <td className="border border-blue-200 p-2">TV screens, tablet sizes</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Foot (ft)</td>
                      <td className="border border-blue-200 p-2">12 inches (30.48 cm)</td>
                      <td className="border border-blue-200 p-2">Height of people, ceiling height</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Yard (yd)</td>
                      <td className="border border-blue-200 p-2">3 feet (91.44 cm)</td>
                      <td className="border border-blue-200 p-2">Fabric, short distances</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Mile (mi)</td>
                      <td className="border border-blue-200 p-2">1760 yards (1.6 km)</td>
                      <td className="border border-blue-200 p-2">Road distances, running races</td>
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
                  <li>1 inch ≈ 2.5 cm</li>
                  <li>1 foot ≈ 30 cm</li>
                  <li>1 yard ≈ 90 cm</li>
                  <li>1 mile ≈ 1.6 km</li>
                  <li>5 miles ≈ 8 km</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>10 cm ≈ 4 inches</li>
                  <li>1 m ≈ 3 feet 3 inches</li>
                  <li>1 km ≈ 0.6 miles</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-4">Perimeter</h3>
              <p className="mb-4">
                Perimeter is the total distance around the outside of a shape. To find the perimeter, add up the lengths
                of all the sides.
              </p>

              <div className="space-y-6">
                {/* Rectangle */}
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Rectangle</h4>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-64 h-40">
                      <div className="absolute inset-0 border-4 border-blue-500 rounded-md"></div>
                      {/* Top measurement */}
                      <div className="absolute -top-8 left-0 right-0 flex justify-center">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">5 cm</span>
                      </div>
                      {/* Bottom measurement */}
                      <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">5 cm</span>
                      </div>
                      {/* Left measurement */}
                      <div className="absolute -left-8 top-0 bottom-0 flex items-center">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">3 cm</span>
                      </div>
                      {/* Right measurement */}
                      <div className="absolute -right-8 top-0 bottom-0 flex items-center">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">3 cm</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium">Method 1:</span> Add all sides
                      </p>
                      <p>Perimeter = 5 cm + 3 cm + 5 cm + 3 cm = 16 cm</p>
                      <p className="mt-3">
                        <span className="font-medium">Method 2:</span> Use the formula
                      </p>
                      <p>Perimeter = 2 × (length + width)</p>
                      <p>Perimeter = 2 × (5 cm + 3 cm) = 2 × 8 cm = 16 cm</p>
                    </div>
                  </div>
                </div>

                {/* Square */}
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Square</h4>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 border-4 border-blue-500 rounded-md"></div>
                      {/* Top measurement */}
                      <div className="absolute -top-8 left-0 right-0 flex justify-center">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">4 cm</span>
                      </div>
                      {/* Bottom measurement */}
                      <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">4 cm</span>
                      </div>
                      {/* Left measurement */}
                      <div className="absolute -left-8 top-0 bottom-0 flex items-center">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">4 cm</span>
                      </div>
                      {/* Right measurement */}
                      <div className="absolute -right-8 top-0 bottom-0 flex items-center">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">4 cm</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium">Method 1:</span> Add all sides
                      </p>
                      <p>Perimeter = 4 cm + 4 cm + 4 cm + 4 cm = 16 cm</p>
                      <p className="mt-3">
                        <span className="font-medium">Method 2:</span> Use the formula
                      </p>
                      <p>Perimeter = 4 × side length</p>
                      <p>Perimeter = 4 × 4 cm = 16 cm</p>
                    </div>
                  </div>
                </div>

                {/* Triangle */}
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Triangle</h4>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-64 h-48">
                      <div
                        className="absolute w-full h-full"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                          backgroundColor: "rgba(219, 234, 254, 0.3)", // Light blue background
                          border: "4px solid #3b82f6", // Blue border
                        }}
                      ></div>
                      {/* Bottom measurement */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center -mb-8">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">6 cm</span>
                      </div>
                      {/* Left side measurement */}
                      <div className="absolute bottom-1/4 left-1/4 -ml-16 -mb-4 transform -rotate-45">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">7 cm</span>
                      </div>
                      {/* Right side measurement */}
                      <div className="absolute bottom-1/4 right-1/4 -mr-16 -mb-4 transform rotate-45">
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">7 cm</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium">Finding the perimeter:</span>
                      </p>
                      <p>Perimeter = 6 cm + 7 cm + 7 cm = 20 cm</p>
                      <p className="mt-3 text-gray-600 italic">
                        For any triangle, simply add the lengths of all three sides to find the perimeter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Real-World Applications</h3>
              <p className="mb-2">Understanding length and perimeter is important for many real-world situations:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Examples:</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Measuring the perimeter of a garden to install fencing</li>
                  <li>Calculating how much skirting board is needed for a room</li>
                  <li>Finding the distance around a running track</li>
                  <li>Measuring the length of ribbon needed to wrap a present</li>
                  <li>Determining how far you've walked or run using a pedometer or fitness app</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Tips for Measuring Length</h3>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>
                  Choose the appropriate unit for what you're measuring (mm for very small objects, km for long
                  distances)
                </li>
                <li>Make sure your measuring tool (ruler, tape measure) starts at zero</li>
                <li>For curved shapes, use a piece of string to follow the curve, then measure the string</li>
                <li>When measuring perimeter, double-check that you've included all sides</li>
                <li>
                  Be consistent with units - convert all measurements to the same unit before adding them together
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Convert 3.5 metres to centimetres."
                options={["35 cm", "350 cm", "3500 cm", "0.35 cm"]}
                correctIndex={1}
                explanation="To convert from metres to centimetres, multiply by 100. So 3.5 m × 100 = 350 cm."
              />

              <QuizQuestion
                question="What is the perimeter of a rectangle with length 8 cm and width 5 cm?"
                options={["13 cm", "26 cm", "40 cm", "20 cm"]}
                correctIndex={1}
                explanation="The perimeter of a rectangle = 2 × (length + width) = 2 × (8 cm + 5 cm) = 2 × 13 cm = 26 cm."
              />

              <QuizQuestion
                question="Which of these is the best approximation for 5 miles?"
                options={["5 km", "8 km", "3 km", "10 km"]}
                correctIndex={1}
                explanation="5 miles is approximately equal to 8 kilometres. We use the conversion 1 mile ≈ 1.6 km, so 5 miles ≈ 5 × 1.6 km = 8 km."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/measurement/mass">
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

