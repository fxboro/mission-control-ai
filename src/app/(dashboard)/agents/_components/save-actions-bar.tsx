"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ListChecks, Scale, BookMarked, Link } from "lucide-react"
import { toast } from "sonner"

interface SaveActionsBarProps {
  visible: boolean
}

const saveActions = [
  {
    id: "create-tasks",
    label: "Create Tasks",
    icon: ListChecks,
    description: "Convert output steps into trackable tasks",
  },
  {
    id: "save-decision",
    label: "Save Decision",
    icon: Scale,
    description: "Log a decision from this output",
  },
  {
    id: "save-playbook",
    label: "Save Playbook",
    icon: BookMarked,
    description: "Save workflow as a reusable playbook",
  },
  {
    id: "attach-project",
    label: "Attach to Project",
    icon: Link,
    description: "Link this run to a project",
  },
]

export function SaveActionsBar({ visible }: SaveActionsBarProps) {
  if (!visible) return null

  function handleAction(actionId: string, label: string) {
    toast.success(`${label}`, {
      description: `This action will be available when the backend is connected.`,
    })
  }

  return (
    <div className="border-t border-border/50 bg-muted/20 rounded-b-xl p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
        Save Actions
      </p>
      <div className="flex flex-wrap gap-2">
        {saveActions.map((action) => {
          const Icon = action.icon
          return (
            <Button
              key={action.id}
              variant="outline"
              size="sm"
              className="gap-2 h-9 px-3 font-semibold text-xs border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:scale-105 active:scale-95"
              onClick={() => handleAction(action.id, action.label)}
            >
              <Icon className="size-3.5" />
              {action.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
