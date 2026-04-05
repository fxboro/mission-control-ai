"use client"

import * as React from "react"
import { Package, ArrowRight } from "lucide-react"
import type { ServiceTemplate } from "@/types"

interface ServiceTemplatesGridProps {
  templates: ServiceTemplate[]
}

export function ServiceTemplatesGrid({ templates }: ServiceTemplatesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {templates.map((tmpl) => (
        <div
          key={tmpl.id}
          className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md cursor-pointer"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
              <Package className="size-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{tmpl.category}</span>
          </div>
          <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{tmpl.name}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3 flex-1">{tmpl.description}</p>
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">From</span>
              <span className="text-sm font-black text-foreground">{tmpl.basePrice}</span>
            </div>
            <span className="text-xs text-muted-foreground">{tmpl.estimatedDays}d</span>
          </div>
        </div>
      ))}
    </div>
  )
}
