"use client"

import * as React from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  subtitle?: string
  footer?: React.ReactNode
  children: React.ReactNode
}

export function DetailDrawer({ open, onOpenChange, title, subtitle, footer, children }: DetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg border-l border-border bg-background p-0 flex flex-col">
        <SheetHeader className="px-6 py-5 border-b border-border bg-card/50 shrink-0">
          <SheetTitle className="text-lg font-bold tracking-tight">{title}</SheetTitle>
          {subtitle && (
            <SheetDescription className="text-sm text-muted-foreground">{subtitle}</SheetDescription>
          )}
        </SheetHeader>
        <ScrollArea className="flex-1 px-6 py-5">
          <div className="space-y-6">{children}</div>
        </ScrollArea>
        {footer && (
          <SheetFooter className="px-6 py-4 border-t border-border bg-card/50 shrink-0">
            {footer}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
