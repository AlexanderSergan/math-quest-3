"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MathChallengeGame } from "@/components/math-challenge-game"
import { DadsPlasteringGame } from "@/components/dads-plastering-game"
import { QuizQuestion } from "@/components/quiz-question"
import { MathInputGame } from "@/components/math-input-game"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function TestInputClearingPage() {
  const [showMathChallenge, setShowMathChallenge] = useState(true)
  const [showDadsPlastering, setShowDadsPlastering] = useState(true)
  const [showQuizQuestion, setShowQuizQuestion] = useState(true)
  const [showMathInputGame, setShowMathInputGame] = useState(true)

  // Sample math problems for the MathInputGame
  const mathProblems = [
    {
      question: "What is 5 + 3?",
      answer: 8,
      difficulty: "easy" as const,
    },
    {
      question: "What is 12 - 7?",
      answer: 5,
      difficulty: "easy" as const,
    },
    {
      question: "What is 4 × 6?",
      answer: 24,
      difficulty: "medium" as const,
    },
  ]

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Input Clearing Test Page</CardTitle>
          <CardDescription>
            This page allows you to test the input clearing functionality in various educational games
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Testing Instructions</AlertTitle>
            <AlertDescription>
              <p className="mb-2">For each game, try entering an incorrect answer to verify that:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>The input field clears automatically</li>
                <li>The input field remains focused so you can immediately type again</li>
                <li>Feedback is shown appropriately</li>
              </ol>
              <p className="mt-2">You can toggle games on/off to test component mounting/unmounting.</p>
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button
              variant={showMathChallenge ? "default" : "outline"}
              onClick={() => setShowMathChallenge(!showMathChallenge)}
            >
              {showMathChallenge ? "Hide" : "Show"} Math Challenge
            </Button>
            <Button
              variant={showDadsPlastering ? "default" : "outline"}
              onClick={() => setShowDadsPlastering(!showDadsPlastering)}
            >
              {showDadsPlastering ? "Hide" : "Show"} Dad's Plastering
            </Button>
            <Button
              variant={showQuizQuestion ? "default" : "outline"}
              onClick={() => setShowQuizQuestion(!showQuizQuestion)}
            >
              {showQuizQuestion ? "Hide" : "Show"} Quiz Question
            </Button>
            <Button
              variant={showMathInputGame ? "default" : "outline"}
              onClick={() => setShowMathInputGame(!showMathInputGame)}
            >
              {showMathInputGame ? "Hide" : "Show"} Math Input Game
            </Button>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <h3 className="font-medium text-yellow-800 mb-2">Correct Answers for Testing:</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700">
              <li>Math Challenge: Depends on the problem generated</li>
              <li>Dad's Plastering: Width × Height (shown on the wall)</li>
              <li>Quiz Question: "10" (for the millimeters question)</li>
              <li>Math Input Game: 8 for "5 + 3", 5 for "12 - 7", 24 for "4 × 6"</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="math-challenge">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="math-challenge">Math Challenge</TabsTrigger>
          <TabsTrigger value="dads-plastering">Dad's Plastering</TabsTrigger>
          <TabsTrigger value="quiz-question">Quiz Question</TabsTrigger>
          <TabsTrigger value="math-input">Math Input Game</TabsTrigger>
        </TabsList>

        <TabsContent value="math-challenge" className="mt-6">
          {showMathChallenge && <MathChallengeGame />}
        </TabsContent>

        <TabsContent value="dads-plastering" className="mt-6">
          {showDadsPlastering && <DadsPlasteringGame />}
        </TabsContent>

        <TabsContent value="quiz-question" className="mt-6">
          {showQuizQuestion && (
            <QuizQuestion
              question="How many millimeters are in 1 centimeter?"
              type="text"
              correctAnswer="10"
              explanation="There are 10 millimeters (mm) in 1 centimeter (cm)."
            />
          )}
        </TabsContent>

        <TabsContent value="math-input" className="mt-6">
          {showMathInputGame && (
            <MathInputGame
              title="Math Input Game Test"
              description="Test the input clearing functionality"
              problems={mathProblems}
              timeLimit={120}
              showDifficulty={true}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

