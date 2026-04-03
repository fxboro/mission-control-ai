"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PriorityBadge } from "@/components/priority-badge"
import { Circle } from "lucide-react"
import type { Priority } from "@/types"

interface PriorityItem {
  id: string
  title: string
  project: string
  priority: Priority
}

export function TopPrioritiesCard({ items }: { items: PriorityItem[] }) {
  return (
    <Card className="h-full flex flex-col shadow-sm">
      <CardHeader className="pb-3 border-b border-border/50">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Top 3 Priorities</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center p-4 gap-3">
        {items.map((item, i) => (
          <div key={item.id} className="flex items-center gap-3 p-3 rounded-lg border bg-background hover:border-primary/50 transition-colors">
            <span className="font-bold text-muted-foreground/50 text-xs w-3 text-center">{i + 1}.</span>
            <Circle className="w-4 h-4 text-muted-foreground/30 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">{item.title}</p>
              <p className="text-xs text-muted-foreground truncate">{item.project}</p>
            </div>
            <PriorityBadge priority={item.priority} className="flex-shrink-0 text-[10px] h-5" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
