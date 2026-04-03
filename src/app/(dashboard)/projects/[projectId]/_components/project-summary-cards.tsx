"use client"

import * as React from "react"
import type { Project } from "@/types"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectSummaryCards({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card className="shadow-none border-border/50 bg-muted/10">
        <CardContent className="p-4 flex flex-col justify-center gap-1">
           <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Current Phase</span>
           <span className="font-bold capitalize">{project.phase}</span>
        </CardContent>
      </Card>
      <Card className="shadow-none border-border/50 bg-muted/10">
        <CardContent className="p-4 flex flex-col justify-center gap-1">
           <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Current Focus</span>
           <span className="font-bold truncate">{project.currentFocus || "-"}</span>
        </CardContent>
      </Card>
      <Card className="shadow-none border-border/50 bg-muted/10">
        <CardContent className="p-4 flex flex-col justify-center gap-1">
           <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Next Milestone</span>
           <span className="font-bold truncate">{project.nextMilestone || "-"}</span>
        </CardContent>
      </Card>
      <Card className="shadow-none border-border/50 bg-muted/10">
        <CardContent className="p-4 flex flex-col justify-center gap-1">
           <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Risk Level</span>
           <span className={`font-bold uppercase text-sm ${project.risk === 'high' ? 'text-destructive' : project.risk === 'medium' ? 'text-amber-500' : 'text-emerald-500'}`}>
             {project.risk}
           </span>
        </CardContent>
      </Card>
    </div>
  )
}
