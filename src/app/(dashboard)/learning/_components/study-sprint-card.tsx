"use client"

import * as React from "react"
import { Target, Pause, Play } from "lucide-react"
import { ProgressBar } from "@/components/progress-bar"
import type { StudySprint } from "@/types"

interface StudySprintCardProps {
  sprint: StudySprint
}

export function StudySprintCard({ sprint }: StudySprintCardProps) {
  const daysRemaining = Math.max(0, sprint.durationDays - Math.floor((Date.now() - sprint.createdAt) / 86400000))
  const statusLabel = sprint.status === "active" ? "Active" : sprint.status === "paused" ? "Paused" : "Completed"

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between p-5 pb-3 border-b border-border/50">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10">
            <Target className="size-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight">Study Sprint</h3>
            <p className="text-xs text-muted-foreground">{daysRemaining} days remaining</p>
          </div>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${
          sprint.status === "active" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
          sprint.status === "paused" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
          "bg-muted text-muted-foreground border-border"
        }`}>
          {statusLabel}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <h4 className="text-base font-bold text-foreground mb-1">{sprint.title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{sprint.goal}</p>
        </div>
        <ProgressBar value={sprint.progress} label="Sprint Progress" variant="success" />
        <div className="flex items-center gap-2 pt-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-bold transition-all hover:scale-105 active:scale-95">
            {sprint.status === "active" ? <Pause className="size-3" /> : <Play className="size-3" />}
            {sprint.status === "active" ? "Pause Sprint" : "Resume Sprint"}
          </button>
          <button className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5">
            Review Exercises
          </button>
        </div>
      </div>
    </div>
  )
}
