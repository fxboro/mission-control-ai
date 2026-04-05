"use client"

import * as React from "react"
import { SearchInput } from "@/components/search-input"
import { TagFilter } from "@/components/tag-filter"
import { playbookCategories, playbookTags } from "./mock-playbooks"

interface PlaybookFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  selectedCategories: string[]
  onCategoriesChange: (categories: string[]) => void
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
}

export function PlaybookFilters({
  search,
  onSearchChange,
  selectedCategories,
  onCategoriesChange,
  selectedTags,
  onTagsChange,
}: PlaybookFiltersProps) {
  return (
    <div className="flex flex-col gap-4">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search playbooks..."
        className="max-w-sm"
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground shrink-0">Category</span>
          <TagFilter tags={playbookCategories} selected={selectedCategories} onChange={onCategoriesChange} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground shrink-0">Tags</span>
          <TagFilter tags={playbookTags} selected={selectedTags} onChange={onTagsChange} />
        </div>
      </div>
    </div>
  )
}
