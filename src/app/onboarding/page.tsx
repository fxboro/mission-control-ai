"use client"

import * as React from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background p-4 md:p-8 items-center py-16">
        <div className="max-w-xl w-full flex flex-col gap-6">
            <PageHeader 
                title="Welcome to Mission Control" 
                description="Let's set up your operating profile. This helps your AI agents generate more accurate outputs."
            />
            <div className="p-6 md:p-8 border rounded-2xl bg-card shadow-sm flex flex-col gap-5">
                <div>
                   <label className="text-sm font-bold mb-1 block">Your Name</label>
                   <input className="w-full bg-background border rounded-md p-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. Alex" />
                </div>
                <div>
                   <label className="text-sm font-bold mb-1 block">Mission Statement</label>
                   <textarea className="w-full h-24 bg-background border rounded-md p-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="What are you trying to achieve?" />
                </div>
                <div>
                   <label className="text-sm font-bold mb-1 block">Current Primary Mode</label>
                   <select className="w-full bg-background border rounded-md p-2 text-sm focus:ring-1 focus:ring-primary outline-none">
                     <option>Builder</option>
                     <option>Founder</option>
                     <option>Freelancer</option>
                     <option>Hybrid</option>
                   </select>
                </div>
                
                <div className="pt-4 flex justify-between items-center border-t mt-2">
                   <Link href="/today" className="text-sm text-muted-foreground font-medium hover:text-foreground">Skip for now</Link>
                   <Button asChild className="font-bold">
                       <Link href="/today">Save & Enter Dashboard</Link>
                   </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
