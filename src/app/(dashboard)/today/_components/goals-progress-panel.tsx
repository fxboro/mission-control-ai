"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target } from "lucide-react"

interface GoalItem {
  id: string
  title: string
  progress: number
}

export function GoalsProgressPanel({ goals }: { goals: GoalItem[] }) {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="pb-3 border-b border-border/50">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <Target className="w-4 h-4" /> Weekly Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        {goals.map(goal => (
           <div key={goal.id} className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                 <span className="text-sm font-bold">{goal.title}</span>
                 <span className="text-xs font-bold text-muted-foreground">{goal.progress}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-primary transition-all duration-500 ease-out" 
                   style={{ width: `${goal.progress}%` }} 
                 />
              </div>
           </div>
        ))}
      </CardContent>
    </Card>
  )
}
