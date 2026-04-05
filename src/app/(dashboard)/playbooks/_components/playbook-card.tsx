"use client"

import * as React from "react"
import { BookOpen, Play, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Playbook } from "@/types"
import Link from "next/link"

interface PlaybookCardProps {
  playbook: Playbook
}

export function PlaybookCard({ playbook }: PlaybookCardProps) {
  const lastUsedLabel = playbook.lastUsed
    ? `${Math.floor((Date.now() - playbook.lastUsed) / 86400000)}d ago`
    : "Never"

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      {/* Gradient accent top */}
      <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
            <BookOpen className="size-4.5 text-primary" />
          </div>
          <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider">
            {playbook.category}
          </Badge>
        </div>

        {/* Title & Summary */}
        <h3 className="text-base font-bold tracking-tight text-foreground mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
          {playbook.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4 flex-1">
          {playbook.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {playbook.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-bold text-muted-foreground border border-border px-2 py-0.5 rounded-md bg-muted/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="text-[10px] text-muted-foreground font-medium flex items-center gap-3 mb-4">
          <span>{playbook.steps.length} steps</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Last used {lastUsedLabel}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-border/50">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-bold transition-all hover:shadow-md hover:shadow-primary/20 hover:scale-105 active:scale-95">
            <Play className="size-3" />
            Run
          </button>
          <Link
            href={`/playbooks/${playbook.id}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-muted transition-all group/link"
          >
            Open
            <ArrowRight className="size-3 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
