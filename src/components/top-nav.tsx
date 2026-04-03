"use client"

import * as React from "react"
import { Search, Plus, Zap, Bell, User, Settings } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopNav() {
  const { open, setOpen, openMobile, setOpenMobile } = useSidebar()
  
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full shrink-0 items-center gap-4 border-b border-border bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="flex items-center gap-2">
           <SidebarTrigger className="ring-1 ring-border shadow-sm border-border hover:bg-muted" />
        </div>
        
        <div className="relative hidden max-w-sm flex-1 md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search everything..."
            className="h-9 w-64 rounded-md border border-input bg-muted/50 pl-9 pr-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all duration-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="hidden border-border bg-sidebar h-9 gap-2 px-3 shadow-sm md:flex transition-all hover:bg-muted group">
          <Plus className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium tracking-tight">Quick Add</span>
        </Button>
        
        <Button variant="default" size="sm" className="hidden h-9 bg-primary text-primary-foreground gap-2 px-4 shadow-md md:flex hover:shadow-lg transition-all active:scale-95">
          <Zap className="size-4 fill-primary-foreground" />
          <span className="text-sm font-bold tracking-tight">Run Agent</span>
        </Button>

        <div className="flex items-center gap-2 border-l border-border pl-3">
           <Button variant="ghost" size="icon" className="size-9 rounded-full relative hover:bg-muted">
            <Bell className="size-4.5 text-muted-foreground" />
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-destructive border-2 border-background" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-9 rounded-full ring-1 ring-border p-0 hover:bg-muted overflow-hidden">
                <Avatar className="size-full">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">CH</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 border-border p-1 shadow-xl">
              <DropdownMenuLabel className="px-2 py-1.5 flex flex-col gap-0.5">
                <span className="text-sm font-bold">Chima Operating</span>
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Builder Tier</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2 focus:bg-primary/5 cursor-pointer">
                <User className="size-4" />
                <span className="font-medium">Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 focus:bg-primary/5 cursor-pointer">
                <Settings className="size-4" />
                <span className="font-medium">Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:bg-destructive/5 font-medium cursor-pointer">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
