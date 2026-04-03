"use client"

import * as React from "react"
import { PageHeader } from "@/components/page-header"
import { GraduationCap } from "lucide-react"

export default function LearningPage() {
  return (
    <div className="flex flex-col h-full bg-background/50">
      <PageHeader
        title="Learning Hub"
        description="Turn real work into deliberate improvement."
      />
      <div className="p-4 md:p-8 grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg bg-card p-5">
           <h3 className="font-bold mb-3 flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary" /> Current Study Sprint</h3>
           <p className="text-sm text-foreground/80 font-medium">Advanced Firebase Security Rules</p>
           <p className="text-xs text-muted-foreground mt-1">Goal: Understand role-based query constraints.</p>
           <div className="mt-4 pt-4 border-t flex justify-end">
             <button className="text-xs font-bold bg-primary text-primary-foreground px-3 py-1.5 rounded">Review Exercises</button>
           </div>
        </div>
        <div className="border rounded-lg bg-card p-5">
           <h3 className="font-bold mb-3">Weak Spots Tracked</h3>
           <ul className="space-y-2 text-sm text-muted-foreground">
             <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-destructive" /> Auth flow edge cases</li>
             <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Complex Zod unions</li>
           </ul>
        </div>
      </div>
    </div>
  )
}
