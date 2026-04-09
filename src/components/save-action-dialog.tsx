"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import type { SaveAction } from "@/lib/agents/types"

interface SaveActionDialogProps {
  action: SaveAction | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: (actionKey: string, payload: any) => void
}

export function SaveActionDialog({
  action,
  open,
  onOpenChange,
  onSave,
}: SaveActionDialogProps) {
  const [editedPayload, setEditedPayload] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  
  React.useEffect(() => {
    if (action) {
      setEditedPayload(JSON.stringify(action.payload, null, 2))
      setError(null)
    }
  }, [action])

  if (!action) return null

  function handleSave() {
    try {
      const parsed = JSON.parse(editedPayload)
      if (onSave) {
        onSave(action!.key, parsed)
      } else {
        toast.success(`${action!.label} saved successfully!`)
      }
      onOpenChange(false)
    } catch (e) {
      setError("Invalid JSON format. Please check your syntax.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{action.label}</DialogTitle>
          <DialogDescription>
            Review and edit the {action.collection} record before saving.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <textarea
              className="min-h-[300px] w-full rounded-md border border-input bg-muted/50 p-3 text-sm font-mono text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring scrollbar-refined"
              value={editedPayload}
              onChange={(e) => {
                setEditedPayload(e.target.value)
                setError(null)
              }}
              spellCheck={false}
            />
            {error && (
              <p className="text-[13px] font-medium text-destructive">{error}</p>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Record</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
