"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

interface BlockerItem {
  id: string
  title: string
  project: string
}

export function BlockersPanel({ blockers }: { blockers: BlockerItem[] }) {
  if (blockers.length === 0) {
     return (
       <Card className="h-full shadow-sm bg-muted/5 border-dashed">
         <CardContent className="h-full flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
            <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center mb-3">
              <AlertCircle className="w-5 h-5 opacity-50" />
            </div>
            <p className="text-sm font-bold">No Blockers</p>
            <p className="text-xs">You have clear space to execute.</p>
         </CardContent>
       </Card>
     )
  }

  return (
    <Card className="h-full shadow-sm border-destructive/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-destructive" />
      <CardHeader className="pb-3 border-b border-border/50">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-destructive flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> Current Blockers
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 grid gap-3">
        {blockers.map(blocker => (
          <div key={blocker.id} className="flex flex-col gap-1 p-3 rounded-lg border bg-destructive/5 border-destructive/10">
             <p className="font-bold text-sm text-foreground">{blocker.title}</p>
             <p className="text-xs font-semibold text-destructive/80">{blocker.project}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
