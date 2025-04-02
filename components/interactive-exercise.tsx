"use client"

import type React from "react"
import { useState } from "react"

interface InteractiveExerciseProps {
  questions: string[]
  correctAnswers: string[]
}

const InteractiveExercise: React.FC<InteractiveExerciseProps> = ({ questions, correctAnswers }) => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""))
  const [checkedAnswers, setCheckedAnswers] = useState(Array(questions.length).fill(false))

  const handleAnswerChange = (index: number, value: string) => {
    const newUserAnswers = [...userAnswers]
    newUserAnswers[index] = value
    setUserAnswers(newUserAnswers)
  }

  const handleAnswerCheck = (index: number) => {
    const isCorrect = userAnswers[index].toLowerCase() === correctAnswers[index].toLowerCase()

    const newCheckedAnswers = [...checkedAnswers]
    newCheckedAnswers[index] = isCorrect
    setCheckedAnswers(newCheckedAnswers)

    // Clear incorrect answers
    if (!isCorrect) {
      const newUserAnswers = [...userAnswers]
      newUserAnswers[index] = ""
      setUserAnswers(newUserAnswers)

      // Focus the input field after clearing it
      const inputElement = document.getElementById(`exercise-answer-${index}`)
      if (inputElement) {
        setTimeout(() => {
          inputElement.focus()
        }, 100)
      }
    }
  }

  const getInputClassName = (index: number) => {
    if (checkedAnswers[index] === true) {
      return "correct-answer"
    } else if (checkedAnswers[index] === false && checkedAnswers[index] !== undefined && userAnswers[index] !== "") {
      return "incorrect-answer"
    }
    return ""
  }

  const Input = ({
    id,
    type,
    value,
    onChange,
    placeholder,
    className,
    disabled,
  }: {
    id: string
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    className: string
    disabled: boolean
  }) => (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
    />
  )

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <Input
            id={`exercise-answer-${index}`}
            type="text"
            value={userAnswers[index]}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            placeholder="Your answer"
            className={getInputClassName(index)}
            disabled={checkedAnswers[index] === true}
          />
          <button onClick={() => handleAnswerCheck(index)} disabled={checkedAnswers[index] === true}>
            Check
          </button>
          {checkedAnswers[index] === true && <span className="correct-message">Correct!</span>}
          {checkedAnswers[index] === false && checkedAnswers[index] !== undefined && userAnswers[index] !== "" && (
            <span className="incorrect-message">Incorrect. Try again.</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default InteractiveExercise

