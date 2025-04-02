import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer">MathQuest</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-blue-200 text-blue-600">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about MathQuest and how it can help your child succeed with the Year 5 UK
            curriculum
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="parents">For Parents</TabsTrigger>
              <TabsTrigger value="homeschoolers">For Homeschoolers</TabsTrigger>
              <TabsTrigger value="educators">For Educators</TabsTrigger>
            </TabsList>

            {/* General FAQs */}
            <TabsContent value="general">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About MathQuest</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is-mathquest">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What is MathQuest?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      MathQuest is an interactive online learning platform designed specifically for Year 5 students
                      following the UK National Curriculum. It combines curriculum-aligned lessons, engaging activities,
                      and a gamified reward system to make learning mathematics fun and effective. Our platform helps
                      children build confidence and skills in all key mathematics areas while providing parents and
                      educators with detailed progress tracking.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum-alignment">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Is MathQuest aligned with the UK curriculum?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        Yes! MathQuest is fully aligned with the 2025 UK National Curriculum for Year 5. Our content
                        covers all required mathematics topics, including:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Number and Place Value (numbers to 1,000,000, negative numbers, rounding)</li>
                        <li>Addition and Subtraction (formal written methods, mental strategies)</li>
                        <li>Multiplication and Division (factors, multiples, prime numbers, formal methods)</li>
                        <li>
                          Fractions, Decimals and Percentages (equivalent fractions, adding and subtracting fractions)
                        </li>
                        <li>Measurement (converting units, area, perimeter, volume)</li>
                        <li>Geometry (angles, properties of shapes, position and direction)</li>
                        <li>Statistics (solving comparison, sum and difference problems)</li>
                      </ul>
                      <p className="mt-2">
                        Our lessons follow the same progression as schools, ensuring children are learning exactly what
                        they need to succeed in their Year 5 assessments and prepare for Year 6 SATs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="how-it-works">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How does MathQuest work?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest works in three simple steps:</p>
                      <ol className="list-decimal pl-6 mt-2 space-y-2">
                        <li>
                          <span className="font-medium">Learn:</span> Children watch engaging video lessons and
                          interactive tutorials that explain mathematical concepts clearly.
                        </li>
                        <li>
                          <span className="font-medium">Practice:</span> They complete interactive exercises and
                          activities that reinforce learning and build skills.
                        </li>
                        <li>
                          <span className="font-medium">Quiz:</span> Regular quizzes assess understanding and help
                          identify areas that need more attention.
                        </li>
                      </ol>
                      <p className="mt-2">
                        Throughout this process, children earn points and rewards that keep them motivated. Parents and
                        educators can track progress through a comprehensive dashboard that shows strengths and areas
                        for improvement.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="device-compatibility">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What devices can I use MathQuest on?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      MathQuest works on any device with an internet connection and a web browser. This includes desktop
                      computers, laptops, tablets, and smartphones. Our responsive design ensures a great experience
                      regardless of screen size. For the best experience on tablets and smartphones, we recommend using
                      the device in landscape orientation for certain activities.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="internet-requirements">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What internet speed do I need?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      MathQuest requires a standard broadband connection (at least 2 Mbps). Most home internet
                      connections in the UK exceed this requirement. If you can stream videos on platforms like YouTube,
                      your connection will be more than adequate for MathQuest.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription & Pricing</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="pricing">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How much does MathQuest cost?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      MathQuest offers a simple, affordable pricing structure. Our premium subscription costs £50 per
                      year per child. This gives you full access to all Year 5 mathematics content, including lessons,
                      activities, quizzes, worksheets, and the parent dashboard. We also offer a free trial that
                      includes access to three complete lessons so you can experience the platform before subscribing.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="free-trial">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Is there a free trial?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Yes! We offer a free trial that includes access to three complete lessons. This allows you and
                      your child to experience the platform before committing to a subscription. No credit card is
                      required for the free trial, and there's no obligation to subscribe afterward.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cancel-subscription">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Can I cancel my subscription? Will I get a refund?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Yes, you can cancel your subscription at any time from your account settings. If you cancel within
                      14 days of purchase, you're eligible for a full refund. After 14 days, your subscription will
                      remain active until the end of your billing period, but no refund will be issued. Your account
                      will then revert to the free plan with limited access.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="multiple-children">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Do you offer discounts for multiple children?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Yes! We offer a 10% discount for families with multiple children. When adding a second child to
                      your account, use the code 'FAMILY10' during checkout. For three or more children, please contact
                      our support team for special family rates.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="school-discounts">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Do you offer discounts for schools?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Yes, we offer special rates for schools and educational institutions. Our school packages include
                      additional features like class management, assignment creation, and detailed analytics. For more
                      information about school subscriptions, please contact our education team at
                      schools@mathquest.edu.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Support</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="technical-issues">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What if I experience technical issues?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>If you experience any technical issues, we're here to help! You can:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Contact our support team via the WhatsApp button on this page</li>
                        <li>Email us at support@mathquest.edu</li>
                        <li>Check our troubleshooting guide in the Help section of your account</li>
                      </ul>
                      <p className="mt-2">
                        Our support team is available Monday to Friday, 9am to 6pm UK time, and typically responds
                        within 2 hours during business hours.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="data-security">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Is my child's data safe and secure?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        Yes, we take data protection very seriously. MathQuest complies with all UK data protection
                        regulations, including GDPR. We only collect essential information needed to provide our
                        services, and we never share personal data with third parties without explicit consent.
                      </p>
                      <p className="mt-2">
                        All data is encrypted and stored securely on UK-based servers. You can review our full Privacy
                        Policy for more details about how we protect your child's information.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="browser-compatibility">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Which browsers work best with MathQuest?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      MathQuest works with all modern browsers, including Google Chrome, Mozilla Firefox, Microsoft
                      Edge, and Safari. For the best experience, we recommend using the latest version of any of these
                      browsers. Internet Explorer is not supported.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="offline-access">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Can I use MathQuest offline?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        While MathQuest primarily requires an internet connection, we do offer some offline
                        capabilities:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>All worksheets can be downloaded and printed for offline use</li>
                        <li>Lesson summaries can be downloaded as PDFs</li>
                        <li>We're developing an offline mode for our mobile app (coming soon)</li>
                      </ul>
                      <p className="mt-2">
                        For full interactive features, including videos, quizzes, and progress tracking, an internet
                        connection is required.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Parents FAQs */}
            <TabsContent value="parents">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">For Parents</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="parent-dashboard">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What can I see in the parent dashboard?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>The parent dashboard provides comprehensive insights into your child's learning journey:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Detailed progress reports showing completion rates for each topic</li>
                        <li>Performance analytics highlighting strengths and areas for improvement</li>
                        <li>Time spent on different activities and overall engagement metrics</li>
                        <li>Quiz results and skill mastery levels</li>
                        <li>Reward management system where you can set and approve custom rewards</li>
                        <li>Curriculum coverage map showing alignment with Year 5 requirements</li>
                      </ul>
                      <p className="mt-2">
                        You can also access all printable resources, set learning goals, and adjust settings to
                        customize your child's learning experience.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="reward-system">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How does the reward system work?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest's reward system is designed to motivate children through meaningful incentives:</p>
                      <ol className="list-decimal pl-6 mt-2 space-y-2">
                        <li>
                          <span className="font-medium">Custom Rewards:</span> As a parent, you can set personalized
                          rewards that your child can earn by completing modules or achieving specific goals. These can
                          be anything from "Pizza night" to "30 minutes of extra screen time" or "A new book."
                        </li>
                        <li>
                          <span className="font-medium">Points System:</span> Children earn points for completing
                          lessons, quizzes, and extra practice. These points contribute to their house total (similar to
                          school houses) and personal score.
                        </li>
                        <li>
                          <span className="font-medium">Achievement Badges:</span> Special badges are awarded for
                          milestones like completing topics, maintaining streaks, or showing improvement.
                        </li>
                        <li>
                          <span className="font-medium">Leaderboards:</span> Children can see their ranking among peers
                          (if enabled), creating healthy competition.
                        </li>
                      </ol>
                      <p className="mt-2">
                        You have full control over which rewards are available and when they can be redeemed. Our data
                        shows that 87% of children show increased engagement when using our reward system.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-commitment">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How much time should my child spend on MathQuest?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        We recommend 20-30 minutes, 3-4 times per week for optimal results. This schedule provides
                        consistent practice without overwhelming your child. Each lesson is designed to be completed in
                        about 15-20 minutes, with additional time for practice activities and quizzes.
                      </p>
                      <p className="mt-2">
                        The parent dashboard allows you to monitor usage time and set time limits if desired. Many
                        parents find that regular, shorter sessions are more effective than occasional longer ones.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="alongside-school">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How does MathQuest complement school learning?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest is designed to work alongside and enhance school learning in several ways:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>It follows the same curriculum sequence as UK schools, reinforcing classroom learning</li>
                        <li>It provides additional practice and explanation for concepts taught in school</li>
                        <li>
                          The interactive format often helps children understand difficult concepts they might struggle
                          with in class
                        </li>
                        <li>
                          Progress tracking helps identify and address gaps in understanding before they become problems
                        </li>
                        <li>
                          The gamified approach makes practicing maths enjoyable, building positive associations with
                          the subject
                        </li>
                      </ul>
                      <p className="mt-2">
                        Many parents report that regular use of MathQuest makes homework easier and improves classroom
                        confidence.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="struggling-child">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What if my child is struggling with a particular topic?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest is designed to support children who are struggling with specific topics:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          Our adaptive learning system identifies areas of difficulty and provides additional practice
                        </li>
                        <li>Each concept is explained in multiple ways to accommodate different learning styles</li>
                        <li>Step-by-step tutorials break down complex problems into manageable parts</li>
                        <li>The parent dashboard highlights struggling areas so you can provide targeted support</li>
                        <li>
                          For persistent difficulties, we provide parent guides with alternative teaching approaches
                        </li>
                      </ul>
                      <p className="mt-2">
                        If your child continues to struggle, our support team can provide specific recommendations based
                        on their learning patterns.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="advanced-child">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What if my child is advanced in mathematics?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest caters to advanced learners through several features:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Challenge problems that extend beyond the standard curriculum</li>
                        <li>Accelerated learning paths that allow children to progress at their own pace</li>
                        <li>Access to selected Year 6 content for children who have mastered Year 5 topics</li>
                        <li>Problem-solving activities that develop higher-order thinking skills</li>
                        <li>Special badges and rewards for tackling advanced content</li>
                      </ul>
                      <p className="mt-2">
                        Our platform is designed to challenge and engage children at all levels, ensuring that advanced
                        learners remain stimulated and continue to develop their mathematical abilities.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="multiple-children-account">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Can I create multiple child profiles under one parent account?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        Yes! MathQuest allows you to create and manage multiple child profiles under a single parent
                        account. After logging in to your parent dashboard, click on 'Add Child' to create additional
                        profiles. Each child will have their own personalized learning journey and progress tracking.
                      </p>
                      <p className="mt-2">
                        We offer a 10% discount for families with multiple children. When adding a second child to your
                        account, use the code 'FAMILY10' during checkout.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Homeschoolers FAQs */}
            <TabsContent value="homeschoolers">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">For Homeschoolers</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="curriculum-coverage">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Does MathQuest cover the full Year 5 mathematics curriculum for homeschooling?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        Yes, MathQuest provides comprehensive coverage of the entire Year 5 UK National Curriculum for
                        mathematics. Our platform is designed to be a complete mathematics solution for homeschooling
                        families, covering:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>All required topics and objectives for Year 5</li>
                        <li>Structured progression that builds skills in a logical sequence</li>
                        <li>Regular assessments aligned with national standards</li>
                        <li>Detailed tracking of curriculum coverage for documentation purposes</li>
                      </ul>
                      <p className="mt-2">
                        Many homeschooling families use MathQuest as their primary mathematics resource, with the
                        confidence that it meets all curriculum requirements and will prepare children for any
                        assessments.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lesson-plans">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Does MathQuest provide lesson plans for homeschooling parents?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        Yes, MathQuest provides comprehensive lesson plans and teaching resources specifically designed
                        for homeschooling parents:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Detailed lesson guides with learning objectives, key vocabulary, and teaching points</li>
                        <li>Suggested teaching sequences and time allocations</li>
                        <li>Additional explanation of mathematical concepts for parents</li>
                        <li>Ideas for extending learning through practical activities</li>
                        <li>Printable resources and manipulatives</li>
                      </ul>
                      <p className="mt-2">
                        Our lesson plans are designed to be easy to follow even for parents without a teaching
                        background. They provide structure while allowing flexibility to adapt to your child's learning
                        pace and style.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="record-keeping">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How does MathQuest help with record-keeping for homeschooling?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        MathQuest provides comprehensive record-keeping tools that are invaluable for homeschooling
                        families:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Detailed progress reports that can be downloaded or printed for your records</li>
                        <li>Curriculum coverage maps showing exactly which objectives have been met</li>
                        <li>Assessment results with national curriculum references</li>
                        <li>Time logs showing engagement and activity</li>
                        <li>Sample work and achievements that can be compiled into a portfolio</li>
                      </ul>
                      <p className="mt-2">
                        These records can be particularly helpful for demonstrating educational progress to local
                        authorities or for preparing for any formal assessments. All reports are designed to align with
                        UK educational standards and terminology.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ofsted-requirements">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Does MathQuest help meet Ofsted requirements for homeschooling?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        Yes, MathQuest has been developed with input from UK qualified teachers and educational
                        consultants to ensure it meets the standards expected in Ofsted inspections. Our platform helps
                        homeschooling parents provide evidence of structured learning that:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Follows a coherent, well-sequenced curriculum aligned with national standards</li>
                        <li>Provides regular assessment and feedback on progress</li>
                        <li>Develops mathematical fluency, reasoning and problem-solving skills</li>
                        <li>Supports preparation for future learning and assessments</li>
                      </ul>
                      <p className="mt-2">
                        The detailed progress reports and curriculum coverage maps can be particularly valuable during
                        educational visits or reviews, demonstrating that your child is receiving a full and balanced
                        mathematics education.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="community-support">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Is there a community for homeschooling families using MathQuest?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>Yes, MathQuest offers a dedicated community for homeschooling families:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          Private forums where homeschooling parents can connect, share experiences, and exchange ideas
                        </li>
                        <li>Regular webinars on homeschooling topics led by education experts</li>
                        <li>Regional groups that facilitate local meetups and activities</li>
                        <li>Resource sharing platform for supplementary materials</li>
                        <li>Direct access to our homeschooling support team</li>
                      </ul>
                      <p className="mt-2">
                        Many homeschooling parents find this community invaluable for support, inspiration, and
                        practical advice. It helps address the isolation that can sometimes be experienced in
                        homeschooling and provides opportunities for collaborative learning.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="flexible-schedule">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How flexible is MathQuest for different homeschooling schedules?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        MathQuest is designed to accommodate the diverse scheduling needs of homeschooling families:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>No fixed timetable or deadlines - progress at your own pace</li>
                        <li>Content is available 24/7, allowing for morning, afternoon, or evening learning</li>
                        <li>Lessons can be spread out or concentrate or evening learning</li>
                        <li>
                          Lessons can be spread out or concentrated into intensive sessions based on your family's
                          approach
                        </li>
                        <li>Curriculum map allows you to select topics in your preferred order</li>
                        <li>Activity tracking works regardless of your schedule pattern</li>
                      </ul>
                      <p className="mt-2">
                        This flexibility makes MathQuest ideal for families who follow traditional schedules, those who
                        practice year-round learning, and those with irregular schedules due to travel or other
                        commitments.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="supplementary-materials">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What supplementary materials are available for hands-on learning?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest provides a wealth of supplementary materials for hands-on learning:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Printable worksheets and activity sheets for each topic</li>
                        <li>Manipulative templates that can be printed and assembled</li>
                        <li>Guides for practical mathematics activities using household items</li>
                        <li>Mathematics games that can be played offline</li>
                        <li>Project ideas that integrate mathematics with other subjects</li>
                      </ul>
                      <p className="mt-2">
                        These materials support a multi-sensory approach to learning mathematics, which is particularly
                        beneficial for homeschooling environments where you have the flexibility to incorporate more
                        hands-on activities.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Educators FAQs */}
            <TabsContent value="educators">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">For Educators</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="classroom-use">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How can teachers use MathQuest in their classroom?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest offers several ways for teachers to integrate the platform into their classroom:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Whole-class teaching using interactive whiteboard lessons</li>
                        <li>Small group rotations during mathematics lessons</li>
                        <li>Targeted intervention for students needing additional support</li>
                        <li>Extension activities for advanced learners</li>
                        <li>Homework assignments with automatic marking</li>
                        <li>Flipped classroom approach where students watch lessons at home</li>
                      </ul>
                      <p className="mt-2">
                        Our teacher dashboard allows you to assign specific activities to individual students or groups,
                        monitor progress in real-time, and generate detailed reports for assessment and planning.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="teacher-dashboard">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What features are available in the teacher dashboard?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        The teacher dashboard includes comprehensive tools designed specifically for classroom
                        management:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Class management with the ability to create multiple class groups</li>
                        <li>Individual student profiles with detailed progress tracking</li>
                        <li>Assignment creation and scheduling with customizable due dates</li>
                        <li>Real-time monitoring of student activity during lessons</li>
                        <li>Detailed analytics showing class and individual performance</li>
                        <li>Curriculum coverage maps aligned with UK National Curriculum objectives</li>
                        <li>Printable reports for parent meetings and school records</li>
                        <li>Resource library with additional teaching materials</li>
                      </ul>
                      <p className="mt-2">
                        The dashboard is designed to minimize administrative work while maximizing insight into student
                        learning, helping you target your teaching more effectively.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="school-subscriptions">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How do school subscriptions work?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>School subscriptions are designed to be flexible and cost-effective:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Annual subscriptions based on the number of students</li>
                        <li>Significant discounts compared to individual subscriptions</li>
                        <li>Options for single-year group or whole-school access</li>
                        <li>Centralized billing with options for purchase orders</li>
                        <li>Dedicated account manager for larger schools</li>
                        <li>Free teacher training and ongoing support</li>
                      </ul>
                      <p className="mt-2">
                        For specific pricing and to discuss the best option for your school, please contact our
                        education team at schools@mathquest.edu or call 0800 123 4567. We can provide a customized quote
                        based on your school's size and needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum-alignment-educators">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How does MathQuest align with the UK National Curriculum?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest is meticulously aligned with the UK National Curriculum for Year 5 mathematics:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Each lesson and activity is mapped to specific curriculum objectives</li>
                        <li>Content follows the same progression as recommended in the curriculum</li>
                        <li>Mathematical vocabulary is consistent with UK curriculum terminology</li>
                        <li>Assessment questions mirror the style and content of national assessments</li>
                        <li>Regular updates ensure alignment with any curriculum changes</li>
                      </ul>
                      <p className="mt-2">
                        The teacher dashboard includes a curriculum coverage map that allows you to see exactly which
                        objectives have been taught and assessed, making it easier to plan your teaching and report on
                        progress.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="differentiation">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      How does MathQuest support differentiation in the classroom?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest offers several features to support differentiation:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Ability to assign different activities to different students or groups</li>
                        <li>Multiple difficulty levels for each topic</li>
                        <li>Adaptive learning paths that adjust based on student performance</li>
                        <li>Support features for struggling learners (additional explanations, visual aids)</li>
                        <li>Challenge activities for advanced students</li>
                        <li>Detailed analytics to identify individual learning needs</li>
                      </ul>
                      <p className="mt-2">
                        These features allow you to provide personalized learning experiences within your classroom,
                        ensuring that all students are appropriately challenged and supported.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="teacher-resources">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      What additional resources are available for teachers?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>MathQuest provides a comprehensive resource library for teachers:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Detailed lesson plans with teaching notes and key questions</li>
                        <li>Printable worksheets and activity sheets</li>
                        <li>Assessment materials including end-of-topic tests</li>
                        <li>Visual aids and manipulative templates</li>
                        <li>Professional development webinars and tutorials</li>
                        <li>Subject knowledge refreshers for less confident teachers</li>
                      </ul>
                      <p className="mt-2">
                        All resources are designed by experienced UK teachers and aligned with the National Curriculum.
                        They can be used alongside the digital platform or as standalone teaching materials.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="teacher-training">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600">
                      Do you offer training for teachers?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>Yes, we offer comprehensive training options for teachers:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Free initial training session for all schools (online or in-person)</li>
                        <li>Regular webinars on platform features and effective implementation</li>
                        <li>On-demand video tutorials accessible through the teacher dashboard</li>
                        <li>Advanced training sessions for mathematics coordinators</li>
                        <li>Bespoke training packages for larger deployments</li>
                      </ul>
                      <p className="mt-2">
                        Our education team includes former teachers who understand the realities of classroom
                        implementation and can provide practical advice and support.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                We're here to help! Our friendly support team is available to answer any questions you might have about
                MathQuest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat With Us on WhatsApp
                </Button>
                <Link href="/contact">
                  <Button variant="outline" className="border-blue-200 text-blue-600">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
                <h3 className="font-bold text-gray-900 mb-2">Support Hours</h3>
                <p className="text-gray-600 mb-4">Our team is available:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9am - 6pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10am - 2pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">All times are UK time (GMT/BST)</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Child's Learning Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of families who've made learning fun and rewarding with MathQuest's Year 5 UK
            curriculum-aligned platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              id="try-sample-lesson-btn"
              className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Try Sample Lesson
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/80">No credit card required. Try 3 classes completely free.</p>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-blue-600">MathQuest</span>
              <p className="text-sm text-gray-600 mt-1">© 2025 MathQuest. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Privacy
              </a>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  )
}

