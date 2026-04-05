"use client"

import * as React from "react"

interface ProgressBarProps {
  value: number // 0-100
  label?: string
  showPercentage?: boolean
  variant?: "default" | "success" | "warning" | "danger"
  size?: "sm" | "md"
  className?: string
}

const variantColors = {
  default: "bg-primary",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-destructive",
}

export function ProgressBar({
  value,
  label,
  showPercentage = true,
  variant = "default",
  size = "md",
  className,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-xs font-semibold text-muted-foreground">{label}</span>}
          {showPercentage && <span className="text-xs font-bold text-foreground tabular-nums">{clamped}%</span>}
        </div>
      )}
      <div className={`w-full rounded-full bg-muted overflow-hidden ${size === "sm" ? "h-1.5" : "h-2.5"}`}>
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${variantColors[variant]}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
