"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"

type StatusType = "active" | "completed" | "on_hold" | "archived" | "todo" | "in_progress" | "blocked" | "done" | "draft" | "sent" | "accepted" | "rejected" | "new" | "qualified" | "proposal_sent" | "won" | "lost" | "pending" | "failed" | string;

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const normalized = status.toLowerCase().replace(/_/g, " ")
  
  let variant: "default" | "secondary" | "destructive" | "outline" = "secondary"
  
  // Basic mapping for colors based on typical status meanings
  const activeOrDone = ["active", "completed", "done", "accepted", "won"]
  const warningOrIssue = ["on_hold", "blocked", "failed", "rejected", "lost"]
  const pendingOrProgress = ["todo", "in_progress", "draft", "sent", "new", "qualified", "proposal_sent", "pending"]
  
  if (activeOrDone.includes(status)) variant = "default"
  if (warningOrIssue.includes(status)) variant = "destructive"
  if (pendingOrProgress.includes(status)) variant = "outline"

  return (
    <Badge variant={variant} className={`capitalize font-medium ${className}`}>
      {normalized}
    </Badge>
  )
}
