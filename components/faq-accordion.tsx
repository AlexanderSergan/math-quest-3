"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type FaqCategory = "account" | "features" | "troubleshooting" | "billing" | "general"

interface FaqItem {
  id: string
  question: string
  answer: string
  category: FaqCategory
}

const faqs: FaqItem[] = [
  // Account Management
  {
    id: "account-1",
    question: "How do I create an account for my child?",
    answer:
      "To create an account for your child, click on the 'Sign Up' button on the homepage. You'll need to provide your email address, create a password, and enter your child's details. You can then set up their profile and customize their learning experience.",
    category: "account",
  },
  {
    id: "account-2",
    question: "Can I create multiple child profiles under one parent account?",
    answer:
      "Yes! MathQuest allows you to create and manage multiple child profiles under a single parent account. After logging in to your parent dashboard, click on 'Add Child' to create additional profiles. Each child will have their own personalized learning journey and progress tracking.",
    category: "account",
  },
  {
    id: "account-3",
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login page. Enter the email address associated with your account, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
    category: "account",
  },
  {
    id: "account-4",
    question: "How can I update my child's grade level or learning preferences?",
    answer:
      "You can update your child's grade level and learning preferences from the parent dashboard. Navigate to your child's profile settings and select 'Edit Profile'. From there, you can adjust their grade level, learning preferences, and other profile information.",
    category: "account",
  },

  // Platform Features
  {
    id: "features-1",
    question: "What subjects does MathQuest cover?",
    answer:
      "MathQuest currently focuses on mathematics with comprehensive coverage of key topics including Number & Place Value, Addition & Subtraction, Multiplication & Division, Fractions, Decimals & Percentages, Measurement, Geometry, and Statistics. We're continuously expanding our content to include more subjects aligned with the UK curriculum.",
    category: "features",
  },
  {
    id: "features-2",
    question: "How does the house points system work?",
    answer:
      "The house points system is designed to motivate and reward students for their achievements. Children earn points by completing lessons, quizzes, and practice exercises. These points contribute to their house total (similar to school houses), creating friendly competition. Points can also be redeemed for virtual rewards in the rewards store.",
    category: "features",
  },
  {
    id: "features-3",
    question: "Are the worksheets printable?",
    answer:
      "Yes! All our worksheets are designed to be printer-friendly. You can access worksheets for any lesson by clicking on the 'Worksheets' button on the lesson page. From there, you can preview, print, or download the worksheets as PDFs for offline use.",
    category: "features",
  },
  {
    id: "features-4",
    question: "How do the different learning modes (Learn, Practice, Quiz) work?",
    answer:
      "MathQuest offers three learning modes for each topic: Learn mode provides instructional content with explanations and examples; Practice mode offers interactive exercises with immediate feedback; and Quiz mode tests knowledge with scored assessments. This three-step approach ensures comprehensive understanding and retention of concepts.",
    category: "features",
  },

  // Troubleshooting
  {
    id: "troubleshooting-1",
    question: "The videos aren't playing. What should I do?",
    answer:
      "If videos aren't playing, first check your internet connection. Then, ensure your browser is up to date and has JavaScript enabled. Try refreshing the page or using a different browser. If the issue persists, clear your browser cache and cookies. If you're still experiencing problems, please contact our support team.",
    category: "troubleshooting",
  },
  {
    id: "troubleshooting-2",
    question: "Why can't I access certain lessons or features?",
    answer:
      "Some lessons and features may be restricted based on your subscription plan. Free accounts have access to the first three lessons in each subject, while premium subscribers have full access to all content. Check your subscription status in your account settings. If you believe you should have access to content that's restricted, please contact our support team.",
    category: "troubleshooting",
  },
  {
    id: "troubleshooting-3",
    question: "My progress isn't being saved. How can I fix this?",
    answer:
      "If your progress isn't being saved, ensure you're logged into your account and have a stable internet connection. Try refreshing the page or logging out and back in. If the issue continues, clear your browser cache and cookies. For persistent problems, please contact our support team with details about the specific lessons or activities affected.",
    category: "troubleshooting",
  },
  {
    id: "troubleshooting-4",
    question: "The website is running slowly. What can I do?",
    answer:
      "If the website is running slowly, try refreshing the page or closing and reopening your browser. Ensure you have a stable internet connection and close any unnecessary tabs or applications. Clearing your browser cache and cookies may also help. If the issue persists, try using a different browser or device.",
    category: "troubleshooting",
  },

  // Billing & Subscription
  {
    id: "billing-1",
    question: "What subscription plans do you offer?",
    answer:
      "MathQuest offers a free plan that includes access to the first three lessons in each subject. Our premium plan costs £50 per year and provides full access to all subjects, lessons, worksheets, and features. We also offer special rates for schools and educational institutions. Visit our pricing page for more details.",
    category: "billing",
  },
  {
    id: "billing-2",
    question: "How do I upgrade to a premium subscription?",
    answer:
      "To upgrade to a premium subscription, log in to your account and navigate to 'Subscription' in your account settings. Click on 'Upgrade to Premium' and follow the instructions to complete the payment process. You'll have immediate access to all premium features once the payment is processed.",
    category: "billing",
  },
  {
    id: "billing-3",
    question: "Can I cancel my subscription? Will I get a refund?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. If you cancel within 14 days of purchase, you're eligible for a full refund. After 14 days, your subscription will remain active until the end of your billing period, but no refund will be issued. Your account will then revert to the free plan.",
    category: "billing",
  },
  {
    id: "billing-4",
    question: "Do you offer discounts for schools or multiple children?",
    answer:
      "Yes! We offer special rates for schools and educational institutions. We also provide a 10% discount for families with multiple children. For school subscriptions, please contact our sales team at schools@mathquest.edu. For family discounts, use the code 'FAMILY10' during checkout when adding a second child to your account.",
    category: "billing",
  },

  // General Information
  {
    id: "general-1",
    question: "Is MathQuest aligned with the UK curriculum?",
    answer:
      "Yes, MathQuest is fully aligned with the UK National Curriculum. Our content is designed by experienced UK teachers and education specialists to ensure it meets all curriculum requirements. Each lesson and activity is mapped to specific curriculum objectives, making it easy to track progress against national standards.",
    category: "general",
  },
  {
    id: "general-2",
    question: "How can teachers use MathQuest in their classroom?",
    answer:
      "Teachers can use MathQuest as a supplementary teaching tool in the classroom. Our teacher accounts provide additional features such as class management, assignment creation, and student progress tracking. Teachers can assign specific lessons or quizzes to students, view detailed analytics on class performance, and access teacher resources including lesson plans and worksheets.",
    category: "general",
  },
  {
    id: "general-3",
    question: "Is my child's data safe and secure?",
    answer:
      "Yes, we take data protection very seriously. MathQuest complies with all UK data protection regulations, including GDPR. We only collect essential information needed to provide our services, and we never share personal data with third parties without explicit consent. All data is encrypted and stored securely. You can review our full Privacy Policy for more details.",
    category: "general",
  },
  {
    id: "general-4",
    question: "Do you have an app version of MathQuest?",
    answer:
      "Currently, MathQuest is available as a web application optimized for both desktop and mobile browsers. We're developing native mobile apps for iOS and Android, which we expect to release later this year. The web version is fully responsive and works well on tablets and smartphones in the meantime.",
    category: "general",
  },
]

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("account")

  const filteredFaqs = activeCategory === "all" ? faqs : faqs.filter((faq) => faq.category === activeCategory)

  return (
    <div>
      <Tabs defaultValue="account" className="mb-8" onValueChange={(value) => setActiveCategory(value as FaqCategory)}>
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>

        {["account", "features", "troubleshooting", "billing", "general"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center mt-8 pt-6 border-t border-gray-200">
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for? Contact our support team for assistance.
        </p>
        <a
          href="#contact-form"
          className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}

