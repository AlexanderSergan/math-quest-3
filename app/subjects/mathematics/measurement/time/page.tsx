"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"
import { useEffect } from "react"

export default function TimeModule() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader title="Time" lesson="Measurement" subject="Mathematics" subjectColor="blue" />

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
          <YouTubeVideo videoId="IBBQXBhSNUs" title="Understanding Time" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about telling time, calculating time intervals, and solving time problems before
            diving into the lesson content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Time</h2>
            <p className="mb-4">
              Time is a measure of duration - how long something takes or when events occur. Understanding time and
              being able to calculate with it is an important life skill.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Units of Time</h3>
              <p className="mb-2">We use different units to measure time:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">Unit</th>
                      <th className="border border-blue-200 p-2 text-left">Symbol</th>
                      <th className="border border-blue-200 p-2 text-left">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2">Second</td>
                      <td className="border border-blue-200 p-2">s or sec</td>
                      <td className="border border-blue-200 p-2">Basic unit of time</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Minute</td>
                      <td className="border border-blue-200 p-2">min</td>
                      <td className="border border-blue-200 p-2">60 seconds</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Hour</td>
                      <td className="border border-blue-200 p-2">h or hr</td>
                      <td className="border border-blue-200 p-2">60 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Day</td>
                      <td className="border border-blue-200 p-2">d</td>
                      <td className="border border-blue-200 p-2">24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Week</td>
                      <td className="border border-blue-200 p-2">wk</td>
                      <td className="border border-blue-200 p-2">7 days</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Month</td>
                      <td className="border border-blue-200 p-2">mo</td>
                      <td className="border border-blue-200 p-2">28-31 days (varies)</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">Year</td>
                      <td className="border border-blue-200 p-2">yr</td>
                      <td className="border border-blue-200 p-2">12 months (365 or 366 days)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Converting Between Units of Time</h3>
              <p className="mb-2">
                Unlike other measurements, time units don't follow a decimal system. Here are the conversions:
              </p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>60 seconds = 1 minute</li>
                  <li>60 minutes = 1 hour</li>
                  <li>24 hours = 1 day</li>
                  <li>7 days = 1 week</li>
                  <li>4 weeks ≈ 1 month (approximately)</li>
                  <li>12 months = 1 year</li>
                  <li>52 weeks = 1 year (approximately)</li>
                  <li>365 days = 1 year (366 in a leap year)</li>
                  <li>10 years = 1 decade</li>
                  <li>100 years = 1 century</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Examples of Conversions:</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>3 hours = 3 × 60 = 180 minutes</li>
                  <li>90 minutes = 90 ÷ 60 = 1 hour and 30 minutes</li>
                  <li>2 days = 2 × 24 = 48 hours</li>
                  <li>2.5 hours = 2 hours and 30 minutes = 150 minutes</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Reading Clocks</h3>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Analogue Clocks</h4>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-40 h-40 relative rounded-full border-2 border-blue-500 bg-white">
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-1 bg-blue-700 origin-bottom"
                      style={{ transform: "translateX(-50%) rotate(30deg)" }}
                    ></div>
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 h-2/5 w-1.5 bg-blue-500 origin-bottom"
                      style={{ transform: "translateX(-50%) rotate(210deg)" }}
                    ></div>
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-blue-500 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700 font-bold">
                      12
                    </div>
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-blue-700 font-bold">
                      3
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-blue-700 font-bold">
                      6
                    </div>
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-blue-700 font-bold">
                      9
                    </div>
                  </div>
                  <div>
                    <p>On an analogue clock:</p>
                    <ul className="space-y-1 pl-6 list-disc mb-2">
                      <li>The short hand shows the hour</li>
                      <li>The long hand shows the minutes</li>
                      <li>Sometimes there's a thin hand for seconds</li>
                      <li>The clock face is divided into 12 hours</li>
                      <li>Each hour is divided into 60 minutes</li>
                    </ul>
                    <p className="font-medium mt-2">This clock shows 4:30 (half past 4)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Digital Clocks</h4>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-40 h-20 relative rounded border-2 border-blue-500 bg-black flex items-center justify-center">
                    <div className="text-2xl text-red-500 font-mono">04:30</div>
                  </div>
                  <div>
                    <p>On a digital clock:</p>
                    <ul className="space-y-1 pl-6 list-disc mb-2">
                      <li>Time is displayed in numbers</li>
                      <li>Hours and minutes are separated by a colon (:)</li>
                      <li>Some digital clocks use the 24-hour system</li>
                    </ul>
                    <p className="font-medium mt-2">
                      This clock shows 04:30 (4:30 AM) or 16:30 (4:30 PM) in 24-hour time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">12-Hour and 24-Hour Clock</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">12-Hour Clock</th>
                      <th className="border border-blue-200 p-2 text-left">24-Hour Clock</th>
                      <th className="border border-blue-200 p-2 text-left">Spoken Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2">12:00 AM</td>
                      <td className="border border-blue-200 p-2">00:00</td>
                      <td className="border border-blue-200 p-2">Midnight</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">7:30 AM</td>
                      <td className="border border-blue-200 p-2">07:30</td>
                      <td className="border border-blue-200 p-2">Half past seven in the morning</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">12:00 PM</td>
                      <td className="border border-blue-200 p-2">12:00</td>
                      <td className="border border-blue-200 p-2">Noon / Midday</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">2:45 PM</td>
                      <td className="border border-blue-200 p-2">14:45</td>
                      <td className="border border-blue-200 p-2">Quarter to three in the afternoon</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">6:15 PM</td>
                      <td className="border border-blue-200 p-2">18:15</td>
                      <td className="border border-blue-200 p-2">Quarter past six in the evening</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2">11:50 PM</td>
                      <td className="border border-blue-200 p-2">23:50</td>
                      <td className="border border-blue-200 p-2">Ten to midnight</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-2">To convert from 12-hour to 24-hour time:</p>
              <ul className="space-y-1 pl-6 list-disc mb-2">
                <li>For AM times: 12 AM becomes 00:00, other AM times stay the same</li>
                <li>For PM times: Add 12 to the hour (except 12 PM, which stays as 12:00)</li>
              </ul>

              <p className="mt-2">To convert from 24-hour to 12-hour time:</p>
              <ul className="space-y-1 pl-6 list-disc mb-2">
                <li>For hours 0-11: 00:00 becomes 12 AM, other times use AM</li>
                <li>For hours 12-23: 12:00 stays as 12 PM, for others subtract 12 and use PM</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Calculating Time Intervals</h3>
              <p className="mb-2">To find how much time has passed between two times:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Method 1: Counting On</h4>
                <p className="mb-2">Example: Find the time between 9:45 AM and 2:30 PM</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>From 9:45 AM to 10:00 AM = 15 minutes</li>
                  <li>From 10:00 AM to 2:00 PM = 4 hours</li>
                  <li>From 2:00 PM to 2:30 PM = 30 minutes</li>
                  <li>Total: 4 hours and 45 minutes</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Method 2: Converting to Minutes</h4>
                <p className="mb-2">Example: Find the time between 3:20 PM and 5:45 PM</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>3:20 PM = 3 hours and 20 minutes = (3 × 60) + 20 = 200 minutes</li>
                  <li>5:45 PM = 5 hours and 45 minutes = (5 × 60) + 45 = 345 minutes</li>
                  <li>Difference: 345 - 200 = 145 minutes</li>
                  <li>Convert back: 145 minutes = 2 hours and 25 minutes</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Crossing Midnight</h4>
                <p className="mb-2">Example: Find the time between 10:30 PM and 1:15 AM</p>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>From 10:30 PM to midnight = 1 hour and 30 minutes</li>
                  <li>From midnight to 1:15 AM = 1 hour and 15 minutes</li>
                  <li>Total: 2 hours and 45 minutes</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Time Zones</h3>
              <p className="mb-2">The world is divided into different time zones:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>The UK uses Greenwich Mean Time (GMT) in winter and British Summer Time (BST) in summer</li>
                  <li>BST is 1 hour ahead of GMT (GMT+1)</li>
                  <li>
                    When it's 12:00 noon in London (GMT), it's 7:00 AM in New York (GMT-5) and 8:00 PM in Tokyo (GMT+9)
                  </li>
                  <li>
                    Time zones help ensure that daytime and nighttime roughly align with the hours people are awake and
                    asleep
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Real-World Applications</h3>
              <p className="mb-2">Understanding time is important for many real-world situations:</p>

              <div className="bg-white p-3 rounded-lg mb-3">
                <h4 className="font-medium mb-1">Examples:</h4>
                <ul className="space-y-1 pl-6 list-disc mb-2">
                  <li>Reading timetables for buses, trains, and planes</li>
                  <li>Planning a schedule or itinerary</li>
                  <li>Cooking (timing how long to cook something)</li>
                  <li>Sports and fitness (timing races, workouts)</li>
                  <li>Working out how long a journey will take</li>
                  <li>Setting alarms and reminders</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Tips for Working with Time</h3>
              <ul className="space-y-1 pl-6 list-disc mb-4">
                <li>Remember that there are 60 minutes in an hour, not 100</li>
                <li>Be careful when crossing from AM to PM or when crossing midnight</li>
                <li>When adding or subtracting time, deal with hours and minutes separately</li>
                <li>For complex calculations, convert everything to minutes (or seconds) first</li>
                <li>Be aware of time zones when planning international communications or travel</li>
                <li>Remember that digital clocks often use the 24-hour system, especially for transport timetables</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="How many minutes are there in 3.5 hours?"
                options={["180 minutes", "210 minutes", "350 minutes", "35 minutes"]}
                correctIndex={1}
                explanation="3.5 hours = 3 hours and 30 minutes = (3 × 60) + 30 = 180 + 30 = 210 minutes."
              />

              <QuizQuestion
                question="What time is 17:45 in the 12-hour clock system?"
                options={["5:45 AM", "5:45 PM", "7:45 AM", "7:45 PM"]}
                correctIndex={1}
                explanation="To convert from 24-hour to 12-hour time when the hour is greater than 12, subtract 12 from the hour and use PM. 17:45 - 12 = 5:45 PM."
              />

              <QuizQuestion
                question="How much time passes between 10:15 AM and 2:45 PM?"
                options={["3 hours and 30 minutes", "4 hours and 30 minutes", "4 hours and 15 minutes", "5 hours"]}
                correctIndex={1}
                explanation="From 10:15 AM to 2:45 PM: From 10:15 to 2:15 is 4 hours, and from 2:15 to 2:45 is 30 minutes. So the total time is 4 hours and 30 minutes."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/mathematics/measurement/quiz">
                <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
                  Take Lesson Quiz
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

