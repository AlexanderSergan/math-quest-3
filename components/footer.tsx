import Link from "next/link"
import { SocialMediaIcons } from "./social-media-icons"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">MathQuest</h3>
            <p className="text-gray-600 text-sm">Making math fun and engaging for Year 5 students across the UK.</p>
            <SocialMediaIcons iconSize={24} className="mt-4" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/games-arena" className="text-gray-600 hover:text-blue-600 text-sm">
                  Games Arena
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">For Parents</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/parent-dashboard" className="text-gray-600 hover:text-blue-600 text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-gray-600 hover:text-blue-600 text-sm">
                  Rewards System
                </Link>
              </li>
              <li>
                <Link href="/progress-tracking" className="text-gray-600 hover:text-blue-600 text-sm">
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link href="/homeschooling" className="text-gray-600 hover:text-blue-600 text-sm">
                  Homeschooling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">For Teachers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/teachers" className="text-gray-600 hover:text-blue-600 text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/teachers/worksheets" className="text-gray-600 hover:text-blue-600 text-sm">
                  Worksheets
                </Link>
              </li>
              <li>
                <Link href="/teachers/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Teacher Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} MathQuest. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-blue-600">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-500 hover:text-blue-600">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

