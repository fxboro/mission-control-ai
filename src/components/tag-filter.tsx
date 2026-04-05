"use client"

import * as React from "react"

interface TagFilterProps {
  tags: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  className?: string
}

export function TagFilter({ tags, selected, onChange, className }: TagFilterProps) {
  const isAllSelected = selected.length === 0

  function toggle(tag: string) {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag))
    } else {
      onChange([...selected, tag])
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <button
        onClick={() => onChange([])}
        className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all border ${
          isAllSelected
            ? "bg-primary text-primary-foreground border-primary shadow-sm"
            : "bg-transparent text-muted-foreground border-border hover:bg-muted hover:text-foreground"
        }`}
      >
        All
      </button>
      {tags.map((tag) => {
        const isActive = selected.includes(tag)
        return (
          <button
            key={tag}
            onClick={() => toggle(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all border capitalize ${
              isActive
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-transparent text-muted-foreground border-border hover:bg-muted hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}
