"use client"

import * as React from "react"
import { PageHeader } from "@/components/page-header"
import { EmptyState } from "@/components/empty-state"
import { Bot, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AgentsPage() {
  const agents = [
    { name: "Founder Agent", role: "Strategy & Spec", tag: "Product" },
    { name: "Architect Agent", role: "System Design", tag: "Technical" },
    { name: "Builder Agent", role: "Implementation", tag: "Technical" },
  ]
  return (
    <div className="flex flex-col h-full bg-background/50">
      <PageHeader
        title="Agents Console"
        description="Run specialized workflows tailored for coding, business, and learning."
      />
      <div className="p-4 md:p-8 grid gap-4 grid-cols-1 md:grid-cols-3">
         <div className="col-span-1 border-r pr-6 space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Available Agents</h3>
            {agents.map((agent, i) => (
              <div key={i} className="p-3 border rounded-md cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm">{agent.name}</span>
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground">{agent.role}</div>
              </div>
            ))}
         </div>
         <div className="col-span-2 pl-4">
            <EmptyState 
              icon={Play}
              title="Select an Agent"
              description="Choose an agent from the sidebar and provide a goal to run a structured workflow."
            />
         </div>
      </div>
    </div>
  )
}
