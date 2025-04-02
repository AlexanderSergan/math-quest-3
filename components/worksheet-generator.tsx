"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Printer, Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface WorksheetProps {
  title: string
  subject: string
  lessonTitle: string
  description: string
  exercises: Exercise[]
  difficulty: "Easy" | "Medium" | "Hard"
  gradeLevel: string
}

interface Exercise {
  type: "fill-in-blank" | "matching" | "short-answer" | "problem-solving" | "multiple-choice"
  question: string
  options?: string[]
  answer?: string
  points?: number
}

export function WorksheetGenerator({
  title,
  subject,
  lessonTitle,
  description,
  exercises,
  difficulty,
  gradeLevel,
}: WorksheetProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF using a library like jsPDF
    // For this demo, we'll just show an alert
    alert("Downloading worksheet: " + title)

    // In a real implementation, the code would look something like this:
    /*
    import { jsPDF } from "jspdf"
    
    const doc = new jsPDF()
    doc.setFontSize(18)
    doc.text(title, 20, 20)
    doc.setFontSize(12)
    doc.text(`Subject: ${subject} | Lesson: ${lessonTitle}`, 20, 30)
    doc.text(`Difficulty: ${difficulty} | Grade Level: ${gradeLevel}`, 20, 40)
    doc.text(description, 20, 50)
    
    // Add exercises
    let yPos = 70
    exercises.forEach((exercise, index) => {
      doc.setFontSize(14)
      doc.text(`${index + 1}. ${exercise.type.toUpperCase()}`, 20, yPos)
      yPos += 10
      doc.setFontSize(12)
      doc.text(exercise.question, 25, yPos)
      yPos += 20
    })
    
    doc.save(`${title.toLowerCase().replace(/\s+/g, '-')}.pdf`)
    */
  }

  const handlePrint = () => {
    // In a real implementation, this would open the print dialog
    window.print()
  }

  return (
    <Card className="p-6 border-2 border-blue-200 mb-6 print:border-none print:shadow-none">
      <div className="flex justify-between items-start mb-4 print:hidden">
        <div>
          <h3 className="text-xl font-bold text-blue-700">{title}</h3>
          <p className="text-sm text-gray-500">
            {subject} | {lessonTitle} | Difficulty: {difficulty} | Grade: {gradeLevel}
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  {subject} | {lessonTitle} | Difficulty: {difficulty} | Grade: {gradeLevel}
                </DialogDescription>
              </DialogHeader>
              <div className="p-4">
                <WorksheetContent
                  title={title}
                  subject={subject}
                  lessonTitle={lessonTitle}
                  description={description}
                  exercises={exercises}
                  difficulty={difficulty}
                  gradeLevel={gradeLevel}
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={handlePrint}>
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </Button>
                <Button onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="sm" onClick={handlePrint} className="flex items-center gap-1">
            <Printer className="h-4 w-4" />
            Print
          </Button>

          <Button size="sm" onClick={handleDownload} className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="print:block hidden">
        <WorksheetContent
          title={title}
          subject={subject}
          lessonTitle={lessonTitle}
          description={description}
          exercises={exercises}
          difficulty={difficulty}
          gradeLevel={gradeLevel}
        />
      </div>

      <div className="print:hidden">
        <p className="text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {exercises.map((exercise, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {exercise.type.replace("-", " ")}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          This worksheet contains {exercises.length} exercises to reinforce the concepts taught in the {lessonTitle}{" "}
          lesson.
        </p>
      </div>
    </Card>
  )
}

function WorksheetContent({
  title,
  subject,
  lessonTitle,
  description,
  exercises,
  difficulty,
  gradeLevel,
}: WorksheetProps) {
  return (
    <div className="worksheet-content">
      <div className="text-center mb-6 border-b-2 border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-blue-800">{title}</h1>
        <p className="text-sm">
          <span className="font-medium">Subject:</span> {subject} | <span className="font-medium">Lesson:</span>{" "}
          {lessonTitle}
        </p>
        <p className="text-sm">
          <span className="font-medium">Difficulty:</span> {difficulty} |{" "}
          <span className="font-medium">Grade Level:</span> {gradeLevel}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Instructions</h2>
        <p>{description}</p>
      </div>

      <div className="space-y-8">
        {exercises.map((exercise, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-700 mb-2">{exercise.type.replace("-", " ").toUpperCase()}</p>
                <p className="mb-4">{exercise.question}</p>

                {exercise.type === "fill-in-blank" && (
                  <div className="space-y-2">
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="border-b-2 border-gray-300 h-8"></div>
                      ))}
                  </div>
                )}

                {exercise.type === "matching" && exercise.options && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {exercise.options.slice(0, exercise.options.length / 2).map((option, i) => (
                        <div key={i} className="border border-gray-300 rounded p-2">
                          {option}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {exercise.options.slice(exercise.options.length / 2).map((option, i) => (
                        <div key={i} className="border border-gray-300 rounded p-2">
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {exercise.type === "short-answer" && (
                  <div className="border-2 border-gray-300 rounded-md h-24 p-2"></div>
                )}

                {exercise.type === "problem-solving" && (
                  <div className="border-2 border-gray-300 rounded-md h-36 p-2"></div>
                )}

                {exercise.type === "multiple-choice" && exercise.options && (
                  <div className="space-y-2">
                    {exercise.options.map((option, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full mr-2"></div>
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                )}

                {exercise.points && (
                  <div className="mt-2 text-right">
                    <span className="text-sm text-gray-500">{exercise.points} points</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t-2 border-gray-200 pt-4">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Name: _______________________</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date: _______________________</p>
          </div>
        </div>
      </div>
    </div>
  )
}

