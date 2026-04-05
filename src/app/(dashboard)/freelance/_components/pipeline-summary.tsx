"use client"

import * as React from "react"
import { StatCard } from "@/components/stat-card"
import { UserPlus, CheckCircle, Send, Trophy, XCircle } from "lucide-react"

interface PipelineSummaryProps {
  summary: {
    new: number
    qualified: number
    proposalSent: number
    won: number
    lost: number
  }
}

export function PipelineSummary({ summary }: PipelineSummaryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <StatCard label="New" value={summary.new} icon={UserPlus} />
      <StatCard label="Qualified" value={summary.qualified} icon={CheckCircle} />
      <StatCard label="Proposal Sent" value={summary.proposalSent} icon={Send} />
      <StatCard label="Won" value={summary.won} icon={Trophy} trend="up" trendLabel="+2 this month" />
      <StatCard label="Lost" value={summary.lost} icon={XCircle} />
    </div>
  )
}
