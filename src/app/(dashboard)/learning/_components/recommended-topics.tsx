"use client"

import * as React from "react"
import { Lightbulb, ArrowRight } from "lucide-react"

interface RecommendedTopic {
  id: string
  title: string
  reason: string
}

interface RecommendedTopicsProps {
  topics: RecommendedTopic[]
}

export function RecommendedTopics({ topics }: RecommendedTopicsProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-2.5 p-5 pb-3 border-b border-border/50">
        <div className="flex items-center justify-center size-8 rounded-lg bg-amber-500/10">
          <Lightbulb className="size-4 text-amber-500" />
        </div>
        <h3 className="text-sm font-bold tracking-tight">Recommended Next Topics</h3>
      </div>
      <div className="p-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-refined">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="flex flex-col justify-between min-w-[200px] p-4 rounded-lg border border-border bg-background hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group shrink-0"
            >
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{topic.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{topic.reason}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-primary mt-3 group-hover:translate-x-0.5 transition-transform">
                Start Learning <ArrowRight className="size-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
