"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

interface FreelanceData {
  newLeads: number
  activeProposals: number
  followUps: number
}

export function FreelanceSnapshotPanel({ freelance }: { freelance: FreelanceData }) {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="pb-3 border-b border-border/50">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <Briefcase className="w-4 h-4" /> Freelance Snapshot
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex flex-col justify-center h-[calc(100%-3rem)]">
         <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center justify-center p-3 bg-muted/30 border rounded-lg text-center">
               <span className="text-xl font-black">{freelance.newLeads}</span>
               <span className="text-[10px] font-bold text-muted-foreground uppercase mt-1">New Leads</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 bg-primary/10 border border-primary/20 rounded-lg text-center">
               <span className="text-xl font-black text-primary">{freelance.activeProposals}</span>
               <span className="text-[10px] font-bold text-primary uppercase mt-1">Proposals</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 bg-muted/30 border rounded-lg text-center">
               <span className="text-xl font-black">{freelance.followUps}</span>
               <span className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Follow Ups</span>
            </div>
         </div>
      </CardContent>
    </Card>
  )
}
