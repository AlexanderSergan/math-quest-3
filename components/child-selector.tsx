"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, User, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ChildProfile {
  id: string
  name: string
  username: string
  pin: string
  age: number
  yearGroup: number
  avatar?: string
  strengths: string[]
  areasForImprovement: string[]
}

interface ChildSelectorProps {
  onSelectChild: (childName: string) => void
  selectedChildName: string | null
}

export function ChildSelector({ onSelectChild, selectedChildName }: ChildSelectorProps) {
  const [children, setChildren] = useState<ChildProfile[]>([])
  const [selectedChild, setSelectedChild] = useState<ChildProfile | null>(null)
  const [isAddingChild, setIsAddingChild] = useState(false)
  const [newChild, setNewChild] = useState({
    name: "",
    username: "",
    pin: "",
    age: 8,
    yearGroup: 3,
  })

  // Load children from localStorage on component mount
  useEffect(() => {
    const storedChildren = localStorage.getItem("children")
    if (storedChildren) {
      const parsedChildren = JSON.parse(storedChildren)

      // Ensure each child has the required properties
      const validatedChildren = parsedChildren.map((child: ChildProfile) => ({
        ...child,
        strengths: child.strengths || ["Problem solving", "Mental arithmetic", "Pattern recognition"],
        areasForImprovement: child.areasForImprovement || [
          "Long division",
          "Fractions with different denominators",
          "Word problems",
        ],
      }))

      setChildren(validatedChildren)

      // Set the first child as selected by default
      if (validatedChildren.length > 0 && !selectedChild) {
        setSelectedChild(validatedChildren[0])
        // Store the selected child in localStorage
        localStorage.setItem("selectedChild", JSON.stringify(validatedChildren[0]))
      }
    } else {
      // Create default child if none exist
      const defaultChild = {
        id: "1",
        name: "Alex",
        username: "alex2025",
        pin: "1234",
        age: 10,
        yearGroup: 5,
        strengths: ["Problem solving", "Mental arithmetic", "Pattern recognition"],
        areasForImprovement: ["Long division", "Fractions with different denominators", "Word problems"],
      }
      setChildren([defaultChild])
      setSelectedChild(defaultChild)
      localStorage.setItem("children", JSON.stringify([defaultChild]))
      localStorage.setItem("selectedChild", JSON.stringify(defaultChild))
    }
  }, [])

  // Handle child selection
  const handleSelectChild = (child: ChildProfile) => {
    setSelectedChild(child)
    // Store the selected child in localStorage
    localStorage.setItem("selectedChild", JSON.stringify(child))
    // Trigger an event that the parent dashboard can listen to
    window.dispatchEvent(new CustomEvent("childChanged", { detail: child }))
    onSelectChild(child.name)
  }

  // Handle adding a new child
  const handleAddChild = () => {
    if (!newChild.name || !newChild.username || !newChild.pin) return

    const newChildWithId = {
      ...newChild,
      id: Date.now().toString(),
      // Add default strengths and areas for improvement
      strengths: ["Problem solving", "Mental arithmetic", "Pattern recognition"],
      areasForImprovement: ["Long division", "Fractions with different denominators", "Word problems"],
    }

    const updatedChildren = [...children, newChildWithId]
    setChildren(updatedChildren)
    setSelectedChild(newChildWithId)

    // Store updated children in localStorage
    localStorage.setItem("children", JSON.stringify(updatedChildren))
    localStorage.setItem("selectedChild", JSON.stringify(newChildWithId))

    // Reset form and close dialog
    setNewChild({
      name: "",
      username: "",
      pin: "",
      age: 8,
      yearGroup: 3,
    })
    setIsAddingChild(false)
  }

  return (
    <div>
      <Card className="border-indigo-100 bg-white mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-lg font-bold mr-3">
                {selectedChild?.name.charAt(0) || "?"}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{selectedChild?.name || "Select Child"}</h3>
                <p className="text-sm text-gray-500">Year {selectedChild?.yearGroup || "-"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Switch Child</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {children.map((child) => (
                    <DropdownMenuItem
                      key={child.id}
                      onClick={() => handleSelectChild(child)}
                      className={selectedChild?.id === child.id ? "bg-indigo-50" : ""}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xs font-bold">
                          {child.name.charAt(0)}
                        </div>
                        <span>{child.name}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}

                  <Dialog open={isAddingChild} onOpenChange={setIsAddingChild}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-start mt-2">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add Child
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add a New Child</DialogTitle>
                        <DialogDescription>Enter your child's details to add them to your account.</DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="child-name">Child's Name</Label>
                          <Input
                            id="child-name"
                            value={newChild.name}
                            onChange={(e) => setNewChild({ ...newChild, name: e.target.value })}
                            placeholder="Enter name"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="child-username">Username</Label>
                          <Input
                            id="child-username"
                            value={newChild.username}
                            onChange={(e) => setNewChild({ ...newChild, username: e.target.value })}
                            placeholder="Create a username"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="child-pin">PIN</Label>
                          <Input
                            id="child-pin"
                            value={newChild.pin}
                            onChange={(e) => setNewChild({ ...newChild, pin: e.target.value })}
                            placeholder="Create a 4-digit PIN"
                            maxLength={4}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="child-age">Age</Label>
                            <Input
                              id="child-age"
                              type="number"
                              value={newChild.age}
                              onChange={(e) => setNewChild({ ...newChild, age: Number.parseInt(e.target.value) || 0 })}
                              min={5}
                              max={16}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="child-year">Year Group</Label>
                            <select
                              id="child-year"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={newChild.yearGroup}
                              onChange={(e) => setNewChild({ ...newChild, yearGroup: Number.parseInt(e.target.value) })}
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((year) => (
                                <option key={year} value={year}>
                                  Year {year}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddingChild(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleAddChild}>Add Child</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex items-center space-x-2">
        <label htmlFor="child-select" className="font-medium text-gray-700">
          Select Child:
        </label>
        <Select value={selectedChildName || ""} onValueChange={onSelectChild}>
          <SelectTrigger className="w-[200px]" id="child-select">
            <SelectValue placeholder="Select a child" />
          </SelectTrigger>
          <SelectContent>
            {children.map((child) => (
              <SelectItem key={child.id} value={child.name}>
                {child.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default ChildSelector

