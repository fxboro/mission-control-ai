"use client"

import * as React from "react"
import { PageHeader } from "@/components/page-header"
import { Zap, Plus } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"

export default function FreelancePage() {
  return (
    <div className="flex flex-col h-full bg-background/50">
      <PageHeader
        title="Freelance Workspace"
        description="Move from lead to scoped, profitable work."
        primaryAction={{ label: "New Lead", icon: <Plus className="size-4" /> }}
      />
      <div className="p-4 md:p-8">
        <div className="grid gap-3 grid-cols-2 md:grid-cols-5 mb-8">
          {["New: 2", "Qualified: 1", "Proposal Sent: 1", "Won: 4", "Lost: 0"].map((stat) => (
             <div key={stat} className="bg-card border rounded-md p-3 text-center">
               <span className="text-sm font-bold text-muted-foreground">{stat}</span>
             </div>
          ))}
        </div>
        <h3 className="font-bold mb-4">Active Pipeline</h3>
        <div className="border rounded-md overflow-hidden bg-card">
           <table className="w-full text-sm text-left">
             <thead className="bg-muted text-muted-foreground text-xs uppercase font-semibold">
               <tr>
                 <th className="px-4 py-3">Business</th>
                 <th className="px-4 py-3">Niche</th>
                 <th className="px-4 py-3">Status</th>
                 <th className="px-4 py-3">Urgency</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-border">
               <tr className="hover:bg-muted/30 cursor-pointer">
                 <td className="px-4 py-3 font-medium">Acme Wellness</td>
                 <td className="px-4 py-3 text-muted-foreground">Healthcare</td>
                 <td className="px-4 py-3"><StatusBadge status="proposal_sent" /></td>
                 <td className="px-4 py-3 text-destructive font-bold text-xs uppercase">High</td>
               </tr>
             </tbody>
           </table>
         </div>
      </div>
    </div>
  )
}
