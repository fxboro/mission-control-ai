"use client"

import * as React from "react"
import { PageHeader } from "@/components/page-header"
import { EmptyState } from "@/components/empty-state"
import { Scale } from "lucide-react"

export default function DecisionsPage() {
  return (
    <div className="flex flex-col h-full bg-background/50">
      <PageHeader
        title="Decisions Log"
        description="Store important technical and business choices to preserve context."
        primaryAction={{ label: "Log Decision", icon: <Scale className="size-4" /> }}
      />
      <div className="p-4 md:p-8">
         <div className="border rounded-md overflow-hidden bg-card">
           <table className="w-full text-sm text-left">
             <thead className="bg-muted text-muted-foreground text-xs uppercase font-semibold">
               <tr>
                 <th className="px-4 py-3">Date</th>
                 <th className="px-4 py-3">Title</th>
                 <th className="px-4 py-3">Project</th>
                 <th className="px-4 py-3 text-right">Review Due</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-border">
               <tr className="hover:bg-muted/30">
                 <td className="px-4 py-3 font-medium">May 15</td>
                 <td className="px-4 py-3 font-medium">Use Firebase Auth over Supabase</td>
                 <td className="px-4 py-3 text-muted-foreground">Mission Control AI</td>
                 <td className="px-4 py-3 text-right text-muted-foreground">Jun 15</td>
               </tr>
             </tbody>
           </table>
         </div>
      </div>
    </div>
  )
}
