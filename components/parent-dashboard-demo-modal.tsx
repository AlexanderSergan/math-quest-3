"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ParentDashboardDemoModalProps {
  onClose: () => void
}

export function ParentDashboardDemoModal({ onClose }: ParentDashboardDemoModalProps) {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to the Parent Dashboard</DialogTitle>
          <DialogDescription>
            This is where you can monitor your child's learning progress, customize rewards, and manage their account.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="rounded-md bg-blue-50 p-4">
            <h3 className="font-medium text-blue-800 mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 text-blue-700 space-y-1">
              <li>Track progress across all subjects</li>
              <li>View detailed learning analytics</li>
              <li>Set custom rewards and goals</li>
              <li>Manage login credentials</li>
              <li>Access curriculum information</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleClose}>Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ParentDashboardDemoModal

