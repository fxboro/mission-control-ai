"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale } from "lucide-react"

interface DecisionItem {
  id: string
  title: string
  date: string
}

export function RecentDecisionsPanel({ decisions }: { decisions: DecisionItem[] }) {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="pb-3 border-b border-border/50">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <Scale className="w-4 h-4" /> Recent Decisions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border/50">
          {decisions.map(decision => (
            <div key={decision.id} className="flex justify-between items-start gap-4 p-4 hover:bg-muted/10 transition-colors cursor-pointer">
              <p className="text-sm font-semibold">{decision.title}</p>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider shrink-0 mt-0.5">{decision.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
