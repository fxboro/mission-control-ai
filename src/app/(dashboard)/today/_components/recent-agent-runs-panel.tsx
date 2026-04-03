"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, CheckCircle2 } from "lucide-react"

interface AgentRun {
  id: string
  agent: string
  workflow: string
  time: string
  status: string
}

export function RecentAgentRunsPanel({ runs }: { runs: AgentRun[] }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3 border-b border-border/50 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <Bot className="w-4 h-4" /> Recent Agent Runs
        </CardTitle>
        <button className="text-xs font-bold text-primary hover:underline">View Console</button>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-muted/30 text-[10px] uppercase font-bold text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Agent</th>
              <th className="px-4 py-3">Workflow</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {runs.map(run => (
              <tr key={run.id} className="hover:bg-muted/10 transition-colors">
                <td className="px-4 py-3 font-bold text-foreground">{run.agent} Agent</td>
                <td className="px-4 py-3 font-medium text-muted-foreground">{run.workflow}</td>
                <td className="px-4 py-3 text-xs font-medium text-muted-foreground">{run.time}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-500/10 w-fit px-2 py-0.5 rounded uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3" /> {run.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
