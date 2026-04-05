"use client"

import * as React from "react"
import { DetailDrawer } from "@/components/detail-drawer"
import { StatusBadge } from "@/components/status-badge"
import { Button } from "@/components/ui/button"
import { FileText, Mail, Calendar, Building2 } from "lucide-react"
import type { Lead } from "@/types"
import Link from "next/link"
import { mockProposals } from "./mock-freelance"

interface LeadDetailDrawerProps {
  lead: Lead | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LeadDetailDrawer({ lead, open, onOpenChange }: LeadDetailDrawerProps) {
  if (!lead) return null

  const proposal = mockProposals.find((p) => p.leadId === lead.id)

  return (
    <DetailDrawer
      open={open}
      onOpenChange={onOpenChange}
      title={lead.businessName}
      subtitle={`${lead.niche || "Unknown niche"} • via ${lead.source || "Unknown source"}`}
      footer={
        <div className="flex items-center gap-2 w-full">
          {proposal ? (
            <Button asChild className="flex-1 font-bold">
              <Link href={`/freelance/proposals/${proposal.id}`}>
                <FileText className="size-4 mr-1.5" /> View Proposal
              </Link>
            </Button>
          ) : (
            <Button className="flex-1 font-bold">
              <FileText className="size-4 mr-1.5" /> Create Proposal
            </Button>
          )}
          <Button variant="outline" className="font-bold">
            <Mail className="size-4 mr-1.5" /> Follow Up
          </Button>
        </div>
      }
    >
      {/* Status & Urgency */}
      <div className="flex items-center gap-3 flex-wrap">
        <StatusBadge status={lead.status} />
        {lead.urgency && (
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
            lead.urgency === "high" ? "bg-destructive/10 text-destructive" :
            lead.urgency === "medium" ? "bg-amber-500/10 text-amber-500" :
            "bg-muted text-muted-foreground"
          }`}>
            {lead.urgency} urgency
          </span>
        )}
        {lead.budgetSignal && (
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
            lead.budgetSignal === "high" ? "bg-emerald-500/10 text-emerald-500" :
            lead.budgetSignal === "medium" ? "bg-amber-500/10 text-amber-500" :
            "bg-muted text-muted-foreground"
          }`}>
            {lead.budgetSignal} budget
          </span>
        )}
      </div>

      {/* Contact Info */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Contact</h4>
        <div className="flex items-center gap-2">
          <Building2 className="size-4 text-muted-foreground" />
          <span className="text-sm font-medium">{lead.businessName}</span>
        </div>
        {lead.contactName && (
          <div className="flex items-center gap-2">
            <Mail className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium">{lead.contactName}</span>
          </div>
        )}
      </div>

      {/* Pain Point */}
      {lead.painPoint && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pain Point</h4>
          <p className="text-sm text-foreground/80 leading-relaxed bg-muted/30 p-3 rounded-lg border border-border/50">{lead.painPoint}</p>
        </div>
      )}

      {/* Notes */}
      {lead.notes && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Notes</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">{lead.notes}</p>
        </div>
      )}

      {/* Timeline */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Timeline</h4>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="size-3.5" />
          <span>Created {new Date(lead.createdAt).toLocaleDateString()}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Updated {new Date(lead.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </DetailDrawer>
  )
}
