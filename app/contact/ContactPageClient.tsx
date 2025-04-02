"use client"

import Link from "next/link"
import ContactForm from "@/components/contact-form"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function ContactPageClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a specific question or feedback? We'd love to hear from you! Fill out the form below and our team
              will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">support@mathquest.edu</p>
                  <p className="text-sm text-gray-500 mt-1">We aim to respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+44 (0) 20 1234 5678</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm GMT</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Education Lane</p>
                  <p className="text-gray-600">London, UK EC1A 1BB</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">Chat with our support team</p>
                  <p className="text-sm text-gray-500 mt-1">Quick responses during business hours</p>
                  <Button
                    className="mt-2 bg-green-500 hover:bg-green-600"
                    onClick={() => {
                      const phoneNumber = "447123456789" // Replace with actual number
                      const message = "Hello! I have a question about MathQuest."
                      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
                    }}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is available to assist you with any questions or concerns you may have about MathQuest.
            We're committed to providing the best learning experience for your child.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faq">
              <Button className="bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Visit Our FAQ Page
              </Button>
            </Link>
            <Link href="/teachers">
              <Button
                variant="outline"
                className="bg-white text-primary font-medium rounded-lg border border-primary hover:bg-primary/5 transition-colors"
              >
                Teacher Resources
              </Button>
            </Link>
            <Link href="/learn-more">
              <Button
                variant="outline"
                className="bg-white text-primary font-medium rounded-lg border border-primary hover:bg-primary/5 transition-colors"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <WhatsAppWidget />
    </main>
  )
}

