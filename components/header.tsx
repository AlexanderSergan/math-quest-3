import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SocialMediaIcons } from "./social-media-icons"

export function Header() {
  return (
    <header className="bg-white py-4 px-6 md:px-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600">
          MathQuest
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/subjects" className="text-gray-700 hover:text-blue-600">
                  Subjects
                </Link>
              </li>
              <li>
                <Link href="/games-arena" className="text-gray-700 hover:text-blue-600">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-gray-700 hover:text-blue-600">
                  Teachers
                </Link>
              </li>
              <li>
                <Link href="/homeschooling" className="text-gray-700 hover:text-blue-600">
                  Homeschooling
                </Link>
              </li>
            </ul>
          </nav>

          <SocialMediaIcons iconSize={18} />

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="border-gray-200 text-blue-600 rounded-md px-6 py-2 h-auto">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-md px-6 py-2 h-auto">Sign Up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button would go here */}
      </div>
    </header>
  )
}

