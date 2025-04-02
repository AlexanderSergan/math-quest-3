import { WorksheetGenerator } from "@/components/worksheet-generator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function LivingThingsWorksheets() {
  const worksheets = [
    {
      title: "Life Cycles of Mammals Worksheet",
      subject: "Science",
      lessonTitle: "Living Things and Habitats",
      description:
        "Practice your knowledge of mammal life cycles. Complete the exercises to reinforce your understanding of how mammals grow, develop, and reproduce.",
      difficulty: "Medium" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Fill in the blanks with the correct terms about mammal characteristics:",
          points: 5,
        },
        {
          type: "matching" as const,
          question: "Match each mammal with its gestation period:",
          options: ["Human", "Elephant", "Mouse", "Cat", "9 months", "22 months", "20 days", "65 days"],
          points: 4,
        },
        {
          type: "multiple-choice" as const,
          question: "Which of these is NOT a characteristic of mammals?",
          options: [
            "They have hair or fur",
            "They lay eggs to reproduce",
            "They produce milk for their young",
            "They are warm-blooded",
          ],
          answer: "They lay eggs to reproduce",
          points: 1,
        },
        {
          type: "short-answer" as const,
          question: "Explain the difference between altricial and precocial mammal babies. Give an example of each.",
          points: 3,
        },
        {
          type: "problem-solving" as const,
          question:
            "Compare the life cycle of a typical placental mammal (like a dog) with that of a marsupial (like a kangaroo). Describe the key differences in how their babies develop.",
          points: 5,
        },
      ],
    },
    {
      title: "Life Cycles of Birds Worksheet",
      subject: "Science",
      lessonTitle: "Living Things and Habitats",
      description:
        "Practice your knowledge of bird life cycles. Complete the exercises to reinforce your understanding of how birds develop from eggs to adults.",
      difficulty: "Medium" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Fill in the blanks with the correct terms about bird characteristics and life cycles:",
          points: 5,
        },
        {
          type: "matching" as const,
          question: "Match each bird feature with its function:",
          options: [
            "Feathers",
            "Beak",
            "Egg tooth",
            "Brood patch",
            "Insulation and flight",
            "Gathering food",
            "Breaking out of egg shell",
            "Transferring heat to eggs",
          ],
          points: 4,
        },
        {
          type: "multiple-choice" as const,
          question: "Which of these is a unique feature that only birds have?",
          options: ["Laying eggs", "Being warm-blooded", "Having feathers", "Having a backbone"],
          answer: "Having feathers",
          points: 1,
        },
        {
          type: "short-answer" as const,
          question: "Explain the difference between altricial and precocial chicks. Give an example of each.",
          points: 3,
        },
        {
          type: "problem-solving" as const,
          question:
            "Describe the complete life cycle of a bird from egg to adult, including all the major stages. Include a diagram if possible.",
          points: 5,
        },
      ],
    },
    {
      title: "Life Cycles of Plants Worksheet",
      subject: "Science",
      lessonTitle: "Living Things and Habitats",
      description:
        "Practice your knowledge of plant life cycles. Complete the exercises to reinforce your understanding of how plants grow, develop, and reproduce.",
      difficulty: "Medium" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Fill in the blanks with the correct terms about plant life cycles:",
          points: 5,
        },
        {
          type: "matching" as const,
          question: "Match each plant part with its function:",
          options: [
            "Roots",
            "Stem",
            "Leaves",
            "Flowers",
            "Absorb water and nutrients",
            "Support the plant and transport materials",
            "Capture sunlight for photosynthesis",
            "Reproduction",
          ],
          points: 4,
        },
        {
          type: "multiple-choice" as const,
          question: "What is the correct order of stages in a flowering plant's life cycle?",
          options: [
            "Seed → Germination → Growth → Flowering → Pollination → Fertilisation → Seed Formation",
            "Germination → Seed → Growth → Flowering → Fertilisation → Pollination → Seed Formation",
            "Seed → Growth → Germination → Flowering → Pollination → Fertilisation → Seed Formation",
            "Flowering → Pollination → Fertilisation → Seed Formation → Seed → Germination → Growth",
          ],
          answer: "Seed → Germination → Growth → Flowering → Pollination → Fertilisation → Seed Formation",
          points: 1,
        },
        {
          type: "short-answer" as const,
          question: "Explain the difference between annual, biennial, and perennial plants. Give an example of each.",
          points: 3,
        },
        {
          type: "problem-solving" as const,
          question:
            "Draw and label the parts of a flower. Explain how each part contributes to the plant's reproduction.",
          points: 5,
        },
      ],
    },
    {
      title: "Reproduction in Plants Worksheet",
      subject: "Science",
      lessonTitle: "Living Things and Habitats",
      description:
        "Practice your knowledge of plant reproduction. Complete the exercises to reinforce your understanding of pollination, fertilisation, and seed dispersal.",
      difficulty: "Hard" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Fill in the blanks with the correct terms about plant reproduction:",
          points: 5,
        },
        {
          type: "matching" as const,
          question: "Match each method of seed dispersal with an example plant:",
          options: [
            "Wind dispersal",
            "Animal dispersal (hooks)",
            "Animal dispersal (eaten)",
            "Explosion",
            "Dandelion",
            "Burdock",
            "Apple",
            "Pea pod",
          ],
          points: 4,
        },
        {
          type: "multiple-choice" as const,
          question: "Which of these is NOT a method of asexual reproduction in plants?",
          options: ["Runners", "Pollination", "Tubers", "Cuttings"],
          answer: "Pollination",
          points: 1,
        },
        {
          type: "short-answer" as const,
          question:
            "Explain the difference between self-pollination and cross-pollination. What are the advantages and disadvantages of each?",
          points: 3,
        },
        {
          type: "problem-solving" as const,
          question:
            "Compare and contrast sexual and asexual reproduction in plants. Include at least three advantages and disadvantages of each method.",
          points: 5,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/subjects/science/living-things">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Living Things and Habitats Lesson
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-800 mb-2">Living Things and Habitats Worksheets</h1>
          <p className="text-gray-600">
            Printable worksheets to reinforce the concepts taught in the Living Things and Habitats lesson. Download or
            print these worksheets for additional practice.
          </p>
        </div>

        <div className="space-y-6">
          {worksheets.map((worksheet, index) => (
            <WorksheetGenerator
              key={index}
              title={worksheet.title}
              subject={worksheet.subject}
              lessonTitle={worksheet.lessonTitle}
              description={worksheet.description}
              exercises={worksheet.exercises}
              difficulty={worksheet.difficulty}
              gradeLevel={worksheet.gradeLevel}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

