"use client"

import * as React from "react"
import { PageHeader } from "@/components/page-header"
import { BookOpen, Plus } from "lucide-react"

export default function PlaybooksPage() {
  const playbooks = [
    { title: "MVP Scoping", category: "Product", tags: ["founder", "mvp"] },
    { title: "Firebase Setup", category: "Technical", tags: ["backend", "setup"] },
    { title: "Discovery Call", category: "Freelance", tags: ["sales", "client"] },
  ]
  return (
    <div className="flex flex-col h-full bg-background/50">
      <PageHeader
        title="Playbooks"
        description="Store and rerun your best repeatable workflows."
        primaryAction={{ label: "New Playbook", icon: <Plus className="size-4" /> }}
      />
      <div className="p-4 md:p-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {playbooks.map((p, i) => (
          <div key={i} className="p-5 border rounded-lg bg-card hover:bg-muted/10 cursor-pointer">
             <div className="flex justify-between items-start mb-3">
               <BookOpen className="w-5 h-5 text-primary/70" />
               <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{p.category}</span>
             </div>
             <h3 className="font-bold">{p.title}</h3>
             <div className="flex gap-2 mt-4">
               {p.tags.map(tag => (
                 <span key={tag} className="text-[10px] uppercase font-bold text-muted-foreground border px-1.5 py-0.5 rounded">
                   {tag}
                 </span>
               ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}
