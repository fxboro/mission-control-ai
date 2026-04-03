"use client"

import * as React from "react"
import { Search, Filter, LayoutGrid, List } from "lucide-react"

interface ProjectFiltersBarProps {
  viewMode: 'table' | 'card'
  setViewMode: (mode: 'table' | 'card') => void
}

export function ProjectFiltersBar({ viewMode, setViewMode }: ProjectFiltersBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-3 rounded-md border shadow-sm mb-6">
      <div className="flex flex-1 items-center gap-3 w-full">
         <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full bg-background border rounded-md pl-9 pr-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary"
            />
         </div>
         <div className="hidden md:flex items-center gap-2">
            <select className="bg-background border rounded-md px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary">
               <option>All Types</option>
               <option>Product</option>
               <option>Freelance</option>
               <option>Learning</option>
            </select>
            <select className="bg-background border rounded-md px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary">
               <option>All Statuses</option>
               <option>Active</option>
               <option>On Hold</option>
               <option>Completed</option>
            </select>
         </div>
         <button className="md:hidden flex items-center justify-center p-2 bg-muted/50 border rounded-md">
            <Filter className="w-4 h-4" />
         </button>
      </div>
      <div className="flex items-center gap-1 bg-muted/30 p-1 rounded-md border">
        <button 
          onClick={() => setViewMode('table')}
          className={`p-1.5 rounded-sm transition-colors ${viewMode === 'table' ? 'bg-background shadow font-bold text-primary' : 'text-muted-foreground hover:bg-muted/50'}`}
        >
          <List className="w-4 h-4" />
        </button>
        <button 
          onClick={() => setViewMode('card')}
          className={`p-1.5 rounded-sm transition-colors ${viewMode === 'card' ? 'bg-background shadow font-bold text-primary' : 'text-muted-foreground hover:bg-muted/50'}`}
        >
          <LayoutGrid className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
