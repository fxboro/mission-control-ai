"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

interface LearningData {
  topic: string
  description: string
  progress: number
}

export function LearningFocusPanel({ learning }: { learning: LearningData }) {
  return (
    <Card className="h-full shadow-sm bg-primary/5 border-primary/20">
      <CardHeader className="pb-3 border-b border-primary/10">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
          <GraduationCap className="w-4 h-4" /> Learning Focus
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-base mb-1">{learning.topic}</h3>
          <p className="text-sm text-primary/80 font-medium mb-4">{learning.description}</p>
        </div>
        <div>
           <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Sprint Progress</span>
              <span className="text-xs font-bold text-primary">{learning.progress}%</span>
           </div>
           <div className="w-full h-1.5 bg-primary/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out" 
                style={{ width: `${learning.progress}%` }} 
              />
           </div>
        </div>
      </CardContent>
    </Card>
  )
}
