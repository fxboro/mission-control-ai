"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Plus, Zap, Filter, Search, MoreHorizontal } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  primaryAction?: {
    label: string
    onClick?: () => void
    icon?: React.ReactNode
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
    icon?: React.ReactNode
  }
  children?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-top-4 duration-500 py-6 px-4 md:px-8 bg-background border-b border-border shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between max-w-[1240px] mx-auto w-full">
        <div className="flex flex-col gap-1.5 flex-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground transition-all duration-300 md:text-3.5xl lg:text-4xl selection:bg-primary/20">{title}</h1>
          {description && (
            <p className="text-sm font-medium text-muted-foreground/80 leading-relaxed max-w-2xl">{description}</p>
          )}
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {secondaryAction && (
             <Button variant="outline" size="sm" onClick={secondaryAction.onClick} className="h-10 hover:bg-muted border-border px-4 shadow-sm group font-semibold transition-all hover:scale-105 active:scale-95">
              {secondaryAction.icon || <MoreHorizontal className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />}
              <span className="text-sm tracking-tight">{secondaryAction.label}</span>
            </Button>
          )}
          {primaryAction && (
            <Button variant="default" size="sm" onClick={primaryAction.onClick} className="h-10 bg-primary px-5 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all font-bold hover:scale-105 active:scale-95 group">
              {primaryAction.icon || <Plus className="size-4.5 mr-1 group-hover:scale-110 transition-transform" />}
              <span className="text-sm tracking-tighter">{primaryAction.label}</span>
            </Button>
          )}
        </div>
      </div>
      {children && (
        <div className="flex flex-wrap items-center gap-4 max-w-[1240px] mx-auto w-full border-t border-border/50 pt-4 mt-2">
          {children}
        </div>
      )}
    </div>
  )
}
