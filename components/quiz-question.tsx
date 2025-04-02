"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export interface QuizQuestionProps {
  question: string
  options?: string[]
  correctAnswer: string
  type: "multiple-choice" | "text"
  explanation?: string
  onCorrectAnswer?: () => void
  questionNumber?: number
  totalQuestions?: number
}

export function QuizQuestion({
  question,
  options = [],
  correctAnswer,
  type,
  explanation,
  onCorrectAnswer,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [textAnswer, setTextAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingError, setLoadingError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  // Simulate loading the question and assets
  useEffect(() => {
    const loadQuestion = async () => {
      try {
        setIsLoading(true)
        // Simulate loading time
        await new Promise((resolve) => setTimeout(resolve, 500))
        setIsLoading(false)
      } catch (error) {
        setLoadingError("Failed to load question. Please try again.")
        setIsLoading(false)
      }
    }

    loadQuestion()
  }, [question]) // Reload when question changes

  const checkAnswer = () => {
    if (type === "multiple-choice") {
      const correct = selectedOption.toLowerCase() === correctAnswer.toLowerCase()
      setIsCorrect(correct)
      setShowExplanation(true)

      if (correct && onCorrectAnswer) {
        onCorrectAnswer()
      }
    } else if (type === "text") {
      // For text answers, do a case-insensitive comparison
      // Also trim whitespace from both answers
      const userAnswerCleaned = textAnswer.trim().toLowerCase()
      const correctAnswerCleaned = correctAnswer.trim().toLowerCase()

      const correct = userAnswerCleaned === correctAnswerCleaned
      setIsCorrect(correct)
      setShowExplanation(true)

      if (correct && onCorrectAnswer) {
        onCorrectAnswer()
      } else if (!correct) {
        // Clear the text input immediately for incorrect answers
        setTextAnswer("")
        // Focus the input after a short delay
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }, 10)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && textAnswer.trim()) {
      checkAnswer()
    }
  }

  const resetQuestion = () => {
    setSelectedOption("")
    setTextAnswer("")
    setIsCorrect(null)
    setShowExplanation(false)

    // Focus the input field for text questions
    if (type === "text" && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 10)
    }
  }

  // Focus input when component mounts for text questions
  useEffect(() => {
    if (type === "text" && inputRef.current && !isLoading) {
      inputRef.current.focus()
    }
  }, [type, isLoading])

  // Focus input when answer is incorrect for text questions
  useEffect(() => {
    if (type === "text" && isCorrect === false && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 10)
    }
  }, [isCorrect, type])

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Loading Question...</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center p-6">
          <div className="animate-pulse h-40 w-full bg-gray-200 rounded-md"></div>
        </CardContent>
      </Card>
    )
  }

  if (loadingError) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertDescription>{loadingError}</AlertDescription>
          </Alert>
          <Button className="w-full mt-4" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {questionNumber && totalQuestions ? (
            <span className="flex items-center justify-between">
              <span>{question}</span>
              <span className="text-sm font-normal text-muted-foreground">
                Question {questionNumber} of {totalQuestions}
              </span>
            </span>
          ) : (
            question
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {type === "multiple-choice" ? (
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value={option} id={`option-${index}`} disabled={isCorrect !== null} />
                <Label
                  htmlFor={`option-${index}`}
                  className={`flex-grow p-2 rounded-md ${
                    isCorrect !== null && option.toLowerCase() === correctAnswer.toLowerCase()
                      ? "bg-green-100 dark:bg-green-900/20"
                      : ""
                  }`}
                >
                  {option}
                  {isCorrect !== null && option.toLowerCase() === correctAnswer.toLowerCase() && (
                    <CheckCircle2 className="inline ml-2 h-4 w-4 text-green-600 dark:text-green-400" />
                  )}
                  {isCorrect === false && option === selectedOption && (
                    <XCircle className="inline ml-2 h-4 w-4 text-red-600 dark:text-red-400" />
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="space-y-4">
            <Input
              ref={inputRef}
              type="text"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your answer here"
              disabled={isCorrect === true}
              autoFocus
            />
          </div>
        )}

        {isCorrect !== null && (
          <div
            className={`mt-4 p-3 rounded-md ${
              isCorrect ? "bg-green-100 dark:bg-green-900/20" : "bg-red-100 dark:bg-red-900/20"
            }`}
          >
            <div className="flex items-start">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" />
              )}
              <div>
                <p className="font-medium">{isCorrect ? "Correct!" : "Incorrect"}</p>
                {!isCorrect && (
                  <p className="text-sm mt-1">
                    The correct answer is: <span className="font-medium">{correctAnswer}</span>
                  </p>
                )}
                {showExplanation && explanation && <p className="text-sm mt-2">{explanation}</p>}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {isCorrect !== null ? (
          <Button onClick={resetQuestion}>Try Another Question</Button>
        ) : (
          <Button
            onClick={checkAnswer}
            disabled={(type === "multiple-choice" && !selectedOption) || (type === "text" && !textAnswer.trim())}
          >
            Check Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

