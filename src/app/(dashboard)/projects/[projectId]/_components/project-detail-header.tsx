"use client"

import * as React from "react"
import { StatusBadge } from "@/components/status-badge"
import { Button } from "@/components/ui/button"
import { Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/types"

export function ProjectDetailHeader({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <Link href="/projects" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-fit font-medium">
         <ArrowLeft className="w-4 h-4" /> Back to projects
      </Link>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
           <div className="flex flex-wrap items-center gap-3 mb-2">
             <h1 className="text-2xl font-extrabold tracking-tight">{project.name}</h1>
             <span className="text-[10px] font-bold uppercase tracking-wider bg-muted text-muted-foreground px-2 py-0.5 rounded">{project.type}</span>
             <StatusBadge status={project.status} />
           </div>
           <p className="text-sm font-medium text-foreground/80 max-w-2xl">{project.summary}</p>
        </div>
        <Button className="font-bold gap-2 shadow-sm shrink-0">
           <Zap className="w-4 h-4 fill-primary-foreground" />
           Run Agent
        </Button>
      </div>
    </div>
  )
}
