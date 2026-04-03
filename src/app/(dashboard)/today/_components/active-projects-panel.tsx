"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Folder, ArrowRight } from "lucide-react"
import type { ProjectPhase } from "@/types"

interface ActiveProject {
  id: string
  name: string
  phase: ProjectPhase
  health: string
  tasks: number
}

export function ActiveProjectsPanel({ projects }: { projects: ActiveProject[] }) {
  return (
    <Card className="h-full flex flex-col shadow-sm">
      <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Active Projects</CardTitle>
        <button className="text-xs font-bold text-primary hover:underline">View All</button>
      </CardHeader>
      <CardContent className="p-4 grid gap-3">
        {projects.map(project => (
          <div key={project.id} className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-muted/10">
             <div className="flex w-10 h-10 items-center justify-center rounded-md bg-muted text-muted-foreground shrink-0 border">
                <Folder className="w-5 h-5" />
             </div>
             <div className="flex-1 min-w-0">
               <h4 className="font-bold text-sm truncate">{project.name}</h4>
               <p className="text-xs text-muted-foreground capitalize font-medium">{project.phase} Phase</p>
             </div>
             <div className="text-right shrink-0">
               <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${project.health === 'on-track' ? 'bg-primary/10 text-primary' : 'bg-amber-500/10 text-amber-600'}`}>
                 {project.health.replace('-', ' ')}
               </span>
             </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
