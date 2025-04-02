"use client"

import { useState, useEffect } from "react"
import { ParentSyllabus } from "@/components/parent-syllabus"
import { ChildLoginInfo } from "@/components/child-login-info"
import { ParentProgressDashboard } from "@/components/parent-progress-dashboard"
import { ChildSelector } from "@/components/child-selector"
import { RewardSettings } from "@/components/reward-settings"
import { ParentDashboardDemoModal } from "@/components/parent-dashboard-demo-modal"

export default function ParentDashboard() {
  const [activeSubject, setActiveSubject] = useState("mathematics")
  const isSubscribed = typeof window !== "undefined" ? localStorage.getItem("isSubscribed") === "true" : false
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Sample data for the child's profile
  const childProfile = {
    name: "Alex",
    username: "alex2025",
    pin: "1234",
    age: 10,
    yearGroup: 5,
    school: "Oakwood Primary",
    learningStyle: "Visual",
    strengths: ["Problem solving", "Mental arithmetic", "Pattern recognition"],
    areasForImprovement: ["Long division", "Fractions with different denominators", "Word problems"],
  }

  // Add this after the useState declarations
  const [currentChild, setCurrentChild] = useState(childProfile)

  // Add this useEffect to listen for child changes
  useEffect(() => {
    // Listen for child change events
    const handleChildChange = (event: CustomEvent) => {
      // Ensure the child object has all required properties
      setCurrentChild({
        ...childProfile, // Default values
        ...event.detail, // Override with actual values
        // Ensure these arrays exist
        strengths: event.detail.strengths || childProfile.strengths,
        areasForImprovement: event.detail.areasForImprovement || childProfile.areasForImprovement,
      })
    }

    window.addEventListener("childChanged", handleChildChange as EventListener)

    // Check if there's a selected child in localStorage
    const selectedChild = localStorage.getItem("selectedChild")
    if (selectedChild) {
      const parsedChild = JSON.parse(selectedChild)
      // Ensure the child object has all required properties
      setCurrentChild({
        ...childProfile, // Default values
        ...parsedChild, // Override with actual values
        // Ensure these arrays exist
        strengths: parsedChild.strengths || childProfile.strengths,
        areasForImprovement: parsedChild.areasForImprovement || childProfile.areasForImprovement,
      })
    }

    return () => {
      window.removeEventListener("childChanged", handleChildChange as EventListener)
    }
  }, [])

  // Sample data for syllabus coverage
  const syllabusCoverage = {
    mathematics: {
      completed: 42,
      total: 65,
      topics: [
        { name: "Number & Place Value", progress: 100, status: "complete" },
        { name: "Addition & Subtraction", progress: 100, status: "complete" },
        { name: "Multiplication & Division", progress: 75, status: "in-progress" },
        { name: "Fractions", progress: 60, status: "in-progress" },
        { name: "Decimals & Percentages", progress: 25, status: "in-progress" },
        { name: "Measurement", progress: 30, status: "in-progress" },
        { name: "Geometry - Properties of Shapes", progress: 15, status: "not-started" },
        { name: "Geometry - Position & Direction", progress: 0, status: "not-started" },
        { name: "Statistics", progress: 0, status: "not-started" },
      ],
    },
    english: {
      completed: 18,
      total: 60,
      topics: [
        { name: "Reading - Word Reading", progress: 65, status: "in-progress" },
        { name: "Reading - Comprehension", progress: 50, status: "in-progress" },
        { name: "Writing - Transcription", progress: 40, status: "in-progress" },
        { name: "Writing - Composition", progress: 30, status: "in-progress" },
        { name: "Grammar & Punctuation", progress: 25, status: "in-progress" },
        { name: "Spelling", progress: 20, status: "in-progress" },
      ],
    },
    science: {
      completed: 27,
      total: 60,
      topics: [
        { name: "Living Things & Habitats", progress: 80, status: "in-progress" },
        { name: "Animals Including Humans", progress: 65, status: "in-progress" },
        { name: "Properties of Materials", progress: 40, status: "in-progress" },
        { name: "Earth & Space", progress: 30, status: "in-progress" },
        { name: "Forces", progress: 20, status: "in-progress" },
      ],
    },
    geography: {
      completed: 15,
      total: 45,
      topics: [
        { name: "Maps and Mapping", progress: 70, status: "in-progress" },
        { name: "Weather and Climate", progress: 40, status: "in-progress" },
        { name: "Physical Geography", progress: 20, status: "in-progress" },
        { name: "Human Geography", progress: 10, status: "in-progress" },
      ],
    },
  }

  // Sample data for recent activities
  const recentActivities = [
    {
      activity: "Completed 'Column Addition' lesson",
      time: "Today, 10:23 AM",
      score: "8/10",
      points: 25,
      subject: "Mathematics",
      subjectColor: "blue",
    },
    {
      activity: "Achieved 'Math Wizard' badge",
      time: "Yesterday, 4:15 PM",
      score: "Achievement",
      points: 50,
      subject: "Mathematics",
      subjectColor: "blue",
    },
    {
      activity: "Completed 'Mental Subtraction Strategies' quiz",
      time: "Yesterday, 3:30 PM",
      score: "7/10",
      points: 20,
      subject: "Mathematics",
      subjectColor: "blue",
    },
    {
      activity: "Started 'Living Things & Habitats' module",
      time: "2 days ago",
      score: "In Progress",
      points: 5,
      subject: "Science",
      subjectColor: "purple",
    },
  ]

  // Calculate overall progress
  const calculateOverallProgress = () => {
    const subjects = Object.values(syllabusCoverage)
    const totalCompleted = subjects.reduce((sum, subject) => sum + subject.completed, 0)
    const totalLessons = subjects.reduce((sum, subject) => sum + subject.total, 0)
    return Math.round((totalCompleted / totalLessons) * 100)
  }

  const overallProgress = calculateOverallProgress()

  // Weekly activity data
  const weeklyActivity = [
    { day: "Mon", minutes: 25 },
    { day: "Tue", minutes: 45 },
    { day: "Wed", minutes: 30 },
    { day: "Thu", minutes: 60 },
    { day: "Fri", minutes: 40 },
    { day: "Sat", minutes: 75 },
    { day: "Sun", minutes: 20 },
  ]

  // Calculate total weekly activity
  const totalWeeklyActivity = weeklyActivity.reduce((total, day) => total + day.minutes, 0)
  const hoursActivity = Math.floor(totalWeeklyActivity / 60)
  const minutesActivity = totalWeeklyActivity % 60

  const [selectedChild, setSelectedChild] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("progress")
  const [showDemoModal, setShowDemoModal] = useState(false)

  // Use useEffect to safely access localStorage only on the client side
  useEffect(() => {
    // Try to get the selected child from localStorage
    const storedChild = localStorage.getItem("selectedChild")
    if (storedChild) {
      setSelectedChild(storedChild)
    }

    // Check if this is the first visit to show the demo modal
    const hasSeenDemo = localStorage.getItem("hasSeenParentDashboardDemo")
    if (!hasSeenDemo) {
      setShowDemoModal(true)
      localStorage.setItem("hasSeenParentDashboardDemo", "true")
    }
  }, [])

  // Safe function to update localStorage
  const handleChildSelect = (childName: string) => {
    setSelectedChild(childName)
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedChild", childName)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Parent Dashboard</h1>

      <div className="mb-8">
        <ChildSelector onSelectChild={handleChildSelect} selectedChild={selectedChild} />
      </div>

      {selectedChild && (
        <>
          <div className="mb-6 bg-white rounded-lg shadow-md p-4">
            <div className="flex border-b">
              <button
                className={`px-4 py-2 ${activeTab === "progress" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
                onClick={() => setActiveTab("progress")}
              >
                Progress
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "syllabus" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
                onClick={() => setActiveTab("syllabus")}
              >
                Syllabus
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "rewards" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
                onClick={() => setActiveTab("rewards")}
              >
                Rewards
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "login" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
                onClick={() => setActiveTab("login")}
              >
                Login Info
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "progress" && <ParentProgressDashboard childName={selectedChild} />}
              {activeTab === "syllabus" && <ParentSyllabus childName={selectedChild} />}
              {activeTab === "rewards" && <RewardSettings childName={selectedChild} />}
              {activeTab === "login" && <ChildLoginInfo childName={selectedChild} />}
            </div>
          </div>
        </>
      )}

      {!selectedChild && (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-lg text-gray-600">Please select a child to view their dashboard.</p>
        </div>
      )}

      {showDemoModal && <ParentDashboardDemoModal onClose={() => setShowDemoModal(false)} />}
    </div>
  )
}

