"use client"

import * as React from "react"
import { PageHeader } from "@/components/page-header"

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full bg-background/50">
      <PageHeader
        title="Settings"
        description="Configure identity memory, preferences, and operating rules."
      />
      <div className="p-4 md:p-8 max-w-2xl">
        <div className="border rounded-lg bg-card overflow-hidden">
          <div className="p-5 border-b">
             <h3 className="font-bold">Profile Mission</h3>
             <p className="text-sm text-muted-foreground mt-1 mb-3">Define the objective the agent will hold as context.</p>
             <textarea className="w-full min-h-[100px] bg-background border rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="I am building..." defaultValue="Build a portfolio of micro-SaaS and high-value freelance workflows." />
          </div>
          <div className="p-5 border-b">
             <h3 className="font-bold">Preferred Stack</h3>
             <p className="text-sm text-muted-foreground mt-1 mb-3">Which technologies should the Agents bias towards?</p>
             <input className="w-full bg-background border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" defaultValue="Next.js, Tailwind, TypeScript, Firebase" />
          </div>
          <div className="p-5 border-b bg-muted/20">
             <button className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-md text-sm">Save Preferences</button>
          </div>
        </div>
      </div>
    </div>
  )
}
