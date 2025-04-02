import Link from "next/link"
import { Home, Users, BookOpen, FileText, BarChart, Award, Settings, LogOut } from "lucide-react"

type TeacherSidebarProps = {
  activePage: "dashboard" | "classes" | "resources" | "assignments" | "reports" | "rewards" | "settings"
}

export function TeacherSidebar({ activePage }: TeacherSidebarProps) {
  return (
    <div className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <span className="text-xl font-bold text-indigo-600">MathQuest</span>
        <span className="text-gray-500 ml-2">Teacher</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          <Link
            href="/teachers/dashboard"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activePage === "dashboard"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/teachers/classes"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activePage === "classes"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Users className="mr-3 h-5 w-5" />
            Classes
          </Link>
          <Link
            href="/teachers/resources"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activePage === "resources"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <BookOpen className="mr-3 h-5 w-5" />
            Resources
          </Link>
          <Link
            href="/teachers/assignments"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activePage === "assignments"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <FileText className="mr-3 h-5 w-5" />
            Assignments
          </Link>
          <Link
            href="/teachers/reports"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activePage === "reports"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <BarChart className="mr-3 h-5 w-5" />
            Reports
          </Link>
          <Link
            href="/teachers/rewards"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activePage === "rewards"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Award className="mr-3 h-5 w-5" />
            House Points
          </Link>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-200">
        <Link
          href="/teachers/settings"
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePage === "settings"
              ? "bg-indigo-50 text-indigo-600"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </Link>
        <Link
          href="/login"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Log out
        </Link>
      </div>
    </div>
  )
}

