"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import { Folder } from "lucide-react"
import type { Project } from "@/types"

export function ProjectCardGrid({ projects }: { projects: Project[] }) {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <Card 
          key={p.id} 
          onClick={() => router.push(`/projects/${p.id}`)}
          className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all h-full flex flex-col group"
        >
          <CardHeader className="pb-3 border-b border-border/50">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-muted/30 border rounded-md group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                <Folder className="w-5 h-5" />
              </div>
              <StatusBadge status={p.status} />
            </div>
            <CardTitle className="text-xl font-bold truncate group-hover:text-primary transition-colors">{p.name}</CardTitle>
            <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{p.type} • Phase: {p.phase}</p>
          </CardHeader>
          <CardContent className="p-4 flex-1 flex flex-col gap-3">
             <p className="text-sm text-foreground/80 line-clamp-3 leading-relaxed">{p.summary}</p>
             <div className="mt-auto space-y-2 pt-2">
                <div>
                   <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-0.5">Current Focus</p>
                   <p className="text-sm font-semibold truncate">{p.currentFocus || "-"}</p>
                </div>
                <div>
                   <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-0.5">Next Milestone</p>
                   <p className="text-sm font-semibold truncate">{p.nextMilestone || "-"}</p>
                </div>
             </div>
          </CardContent>
          <CardFooter className="p-4 border-t bg-muted/5 flex justify-between items-center text-xs">
            <span className="text-muted-foreground font-medium">Risk: <strong className={`uppercase tracking-wider ${p.risk === 'high' ? 'text-destructive' : p.risk === 'medium' ? 'text-amber-500' : 'text-emerald-500'}`}>{p.risk}</strong></span>
            <span className="font-bold text-primary group-hover:translate-x-1 transition-transform">View Project &rarr;</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
