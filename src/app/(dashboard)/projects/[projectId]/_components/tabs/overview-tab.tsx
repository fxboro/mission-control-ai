"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project, Task, Goal, Decision, AgentRun } from "@/types"
import { PriorityBadge } from "@/components/priority-badge"
import { CheckCircle2, AlertCircle, Sparkles, Scale, AlertTriangle, MessageSquare } from "lucide-react"

interface OverviewTabProps {
  project: Project
  tasks: Task[]
  goals: Goal[]
  decisions: Decision[]
  agentRuns: AgentRun[]
}

export function OverviewTab({ project, tasks, goals, decisions, agentRuns }: OverviewTabProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Execution */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        
        {/* Project Health & Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <Card className="shadow-sm">
             <CardHeader className="pb-3 border-b">
               <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                 <CheckCircle2 className="w-4 h-4" /> Linked Goals
               </CardTitle>
             </CardHeader>
             <CardContent className="p-4 flex flex-col gap-4">
                {goals.map(goal => (
                   <div key={goal.id}>
                      <div className="flex justify-between items-end mb-2">
                         <span className="text-sm font-bold">{goal.title}</span>
                         <span className="text-xs font-bold text-muted-foreground">{goal.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                         <div className="h-full bg-primary" style={{ width: `${goal.progress}%` }} />
                      </div>
                   </div>
                ))}
             </CardContent>
           </Card>

           <Card className="shadow-sm border-destructive/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-destructive" />
             <CardHeader className="pb-3 border-b">
               <CardTitle className="text-sm font-bold uppercase tracking-wider text-destructive flex items-center gap-2">
                 <AlertCircle className="w-4 h-4" /> Current Blockers
               </CardTitle>
             </CardHeader>
             <CardContent className="p-4">
                <p className="text-sm font-bold text-muted-foreground">No active blockers reported.</p>
             </CardContent>
           </Card>
        </div>

        {/* Tasks */}
        <Card className="shadow-sm">
           <CardHeader className="pb-3 border-b flex flex-row justify-between items-center">
             <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Recent Tasks</CardTitle>
             <button className="text-xs font-bold text-primary hover:underline">View Kanban</button>
           </CardHeader>
           <CardContent className="p-0">
              <div className="divide-y">
                {tasks.map(task => (
                  <div key={task.id} className="flex items-center justify-between p-4 hover:bg-muted/5 transition-colors">
                     <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${task.status === 'done' ? 'bg-primary border-primary' : 'border-muted-foreground/30'}`} />
                        <div>
                          <p className={`text-sm font-bold ${task.status === 'done' ? 'line-through text-muted-foreground' : 'text-foreground'}`}>{task.title}</p>
                          <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">{task.type}</p>
                        </div>
                     </div>
                     <PriorityBadge priority={task.priority} />
                  </div>
                ))}
              </div>
           </CardContent>
        </Card>

      </div>

      {/* Right Column - Intelligence */}
      <div className="flex flex-col gap-6">
         
         <Card className="shadow-sm bg-primary/5 border-primary/20">
           <CardHeader className="pb-3 border-b border-primary/10">
             <CardTitle className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
               <Sparkles className="w-4 h-4" /> Last Agent Output
             </CardTitle>
           </CardHeader>
           <CardContent className="p-4">
              {agentRuns[0] ? (
                 <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary/70">{agentRuns[0].agentRole} Agent</p>
                    <p className="text-sm font-medium">"{agentRuns[0].inputGoal}"</p>
                    <button className="w-full text-xs font-bold bg-primary text-primary-foreground py-2 rounded mt-2">View Output Detail</button>
                 </div>
              ) : (
                <p className="text-sm font-medium text-muted-foreground">No agents have been run for this project recently.</p>
              )}
           </CardContent>
         </Card>

         <Card className="shadow-sm">
           <CardHeader className="pb-3 border-b flex flex-row justify-between items-center">
             <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
               <Scale className="w-4 h-4" /> Recent Decisions
             </CardTitle>
           </CardHeader>
           <CardContent className="p-0">
             <div className="divide-y">
               {decisions.map(d => (
                 <div key={d.id} className="p-4 hover:bg-muted/5 transition-colors cursor-pointer">
                   <p className="text-sm font-bold line-clamp-1">{d.title}</p>
                   <p className="text-xs text-muted-foreground mt-1 line-clamp-1">Option: {d.chosenOption}</p>
                 </div>
               ))}
             </div>
           </CardContent>
         </Card>

      </div>
    </div>
  )
}
