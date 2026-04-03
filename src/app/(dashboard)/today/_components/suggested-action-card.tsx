"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ArrowRight } from "lucide-react"

interface SuggestedActionProps {
  workflow: string
  context: string
  buttonLabel: string
}

export function SuggestedActionCard({ workflow, context, buttonLabel }: SuggestedActionProps) {
  return (
    <Card className="h-full bg-primary/5 border-primary/20 flex flex-col shadow-sm relative overflow-hidden">
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-primary">
          <Sparkles className="w-4 h-4" /> Suggested Next Action
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between p-6 pt-2">
        <div className="mb-6">
          <h3 className="font-extrabold text-lg leading-tight mb-2 text-foreground">{workflow}</h3>
          <p className="text-sm font-medium text-muted-foreground leading-relaxed">{context}</p>
        </div>
        <button className="flex items-center justify-center gap-2 w-full font-bold bg-primary text-primary-foreground py-2.5 rounded-md hover:opacity-90 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-primary outline-none">
          {buttonLabel}
          <ArrowRight className="w-4 h-4" />
        </button>
      </CardContent>
    </Card>
  )
}
