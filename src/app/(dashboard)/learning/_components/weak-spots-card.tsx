"use client"

import * as React from "react"
import { AlertTriangle, AlertCircle, ArrowDown } from "lucide-react"
import type { WeakSpot } from "@/types"

interface WeakSpotsCardProps {
  weakSpots: WeakSpot[]
}

const severityConfig = {
  high: { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10", dot: "bg-destructive" },
  medium: { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/10", dot: "bg-amber-500" },
  low: { icon: ArrowDown, color: "text-muted-foreground", bg: "bg-muted", dot: "bg-muted-foreground" },
}

export function WeakSpotsCard({ weakSpots }: WeakSpotsCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-2.5 p-5 pb-3 border-b border-border/50">
        <div className="flex items-center justify-center size-8 rounded-lg bg-destructive/10">
          <AlertCircle className="size-4 text-destructive" />
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-tight">Weak Spots</h3>
          <p className="text-xs text-muted-foreground">{weakSpots.length} areas tracked</p>
        </div>
      </div>
      <div className="p-5">
        <ul className="space-y-3">
          {weakSpots.map((spot) => {
            const cfg = severityConfig[spot.severity]
            return (
              <li key={spot.id} className="flex items-start gap-3 group cursor-pointer hover:bg-muted/10 -mx-2 px-2 py-2 rounded-lg transition-colors">
                <span className={`w-2 h-2 rounded-full ${cfg.dot} mt-1.5 shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-foreground truncate">{spot.topic}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${cfg.bg} ${cfg.color}`}>
                      {spot.severity}
                    </span>
                  </div>
                  {spot.notes && (
                    <p className="text-xs text-muted-foreground line-clamp-1">{spot.notes}</p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
