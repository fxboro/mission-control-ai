"use client"

import * as React from "react"
import { DetailDrawer } from "@/components/detail-drawer"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, CheckCircle2, XCircle, ArrowRight, AlertTriangle, Shield } from "lucide-react"
import type { Decision } from "@/types"

interface DecisionDetailDrawerProps {
  decision: Decision | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DecisionDetailDrawer({ decision, open, onOpenChange }: DecisionDetailDrawerProps) {
  if (!decision) return null

  return (
    <DetailDrawer
      open={open}
      onOpenChange={onOpenChange}
      title={decision.title}
      subtitle={`Logged ${new Date(decision.createdAt).toLocaleDateString()}`}
      footer={
        <div className="flex items-center gap-2 w-full">
          <Button variant="outline" className="flex-1 font-bold gap-1.5">
            <FileText className="size-3.5" /> Edit Decision
          </Button>
        </div>
      }
    >
      {/* Context */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Context</h4>
        <p className="text-sm text-foreground/80 leading-relaxed">{decision.context}</p>
      </div>

      {/* Options Considered */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Options Considered</h4>
        <ul className="space-y-2">
          {decision.optionsConsidered.map((opt, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm">
              {opt === decision.chosenOption ? (
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
              ) : (
                <XCircle className="size-4 text-muted-foreground/40 shrink-0" />
              )}
              <span className={opt === decision.chosenOption ? "font-bold text-foreground" : "text-muted-foreground"}>
                {opt}
              </span>
              {opt === decision.chosenOption && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  Chosen
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Rationale */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Rationale</h4>
        <p className="text-sm text-foreground/80 leading-relaxed bg-primary/5 p-3 rounded-lg border border-primary/10">{decision.rationale}</p>
      </div>

      {/* Tradeoffs */}
      {decision.tradeoffs && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <AlertTriangle className="size-3 text-amber-500" /> Tradeoffs
          </h4>
          <p className="text-sm text-foreground/80 leading-relaxed">{decision.tradeoffs}</p>
        </div>
      )}

      {/* Risks */}
      {decision.risks && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Shield className="size-3 text-destructive" /> Risks
          </h4>
          <p className="text-sm text-foreground/80 leading-relaxed">{decision.risks}</p>
        </div>
      )}

      {/* Review Date */}
      {decision.reviewDate && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border/50">
          <Calendar className="size-3.5" />
          <span>Review due {new Date(decision.reviewDate).toLocaleDateString()}</span>
        </div>
      )}
    </DetailDrawer>
  )
}
