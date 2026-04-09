"use client"

import * as React from "react"
import { Suspense } from "react"
import { PageHeader } from "@/components/page-header"
import { AgentLeftPanel } from "./_components/agent-left-panel"
import { AgentRightPanel } from "./_components/agent-right-panel"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  type AgentType,
  type WorkflowType,
  type AgentRunOutput,
  getMockOutput,
} from "./_components/mock-agent-data"
import { useSearchParams } from "next/navigation"

function AgentsPageContent() {
  const searchParams = useSearchParams()
  const [selectedAgent, setSelectedAgent] = React.useState<AgentType | null>(
    (searchParams.get("agent") as AgentType) || null
  )
  const [selectedWorkflow, setSelectedWorkflow] = React.useState<WorkflowType | null>(
    (searchParams.get("workflow") as WorkflowType) || null
  )
  const [selectedProject, setSelectedProject] = React.useState<string | null>(
    searchParams.get("projectId") || null
  )
  const [selectedLead, setSelectedLead] = React.useState<string | null>(
    searchParams.get("leadId") || null
  )
  const [contextTags, setContextTags] = React.useState<string[]>([])
  const [goal, setGoal] = React.useState("")
  const [isRunning, setIsRunning] = React.useState(false)
  const [output, setOutput] = React.useState<AgentRunOutput | null>(null)

  function handleAgentChange(agent: AgentType) {
    setSelectedAgent(agent)
    setSelectedWorkflow(null)
    setOutput(null)
  }

  function handleWorkflowChange(workflow: WorkflowType) {
    setSelectedWorkflow(workflow)
  }

  function handleRun() {
    if (!selectedAgent || !selectedWorkflow) return

    setIsRunning(true)
    setOutput(null)

    // Simulate API latency
    setTimeout(() => {
      const result = getMockOutput(selectedAgent, selectedWorkflow)
      setOutput(result)
      setIsRunning(false)
    }, 1800)
  }

  return (
    <div className="flex flex-col h-full bg-background/50">
      <PageHeader
        title="Agents Console"
        description="Run role-based AI workflows, review structured outputs, and save results into your system."
      />

      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full max-w-[1400px] mx-auto">
          {/* Left Panel — Input Controls */}
          <div className="lg:col-span-4 xl:col-span-4 border-b lg:border-b-0 lg:border-r border-border/50">
            <ScrollArea className="h-full">
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center justify-center size-7 rounded-lg bg-primary/10">
                    <span className="text-xs font-black text-primary">IN</span>
                  </div>
                  <h2 className="text-sm font-bold text-foreground tracking-tight">
                    Configure & Run
                  </h2>
                </div>
                <AgentLeftPanel
                  selectedAgent={selectedAgent}
                  selectedWorkflow={selectedWorkflow}
                  selectedProject={selectedProject}
                  selectedLead={selectedLead}
                  contextTags={contextTags}
                  goal={goal}
                  isRunning={isRunning}
                  onAgentChange={handleAgentChange}
                  onWorkflowChange={handleWorkflowChange}
                  onProjectChange={setSelectedProject}
                  onLeadChange={setSelectedLead}
                  onTagsChange={setContextTags}
                  onGoalChange={setGoal}
                  onRun={handleRun}
                />
              </div>
            </ScrollArea>
          </div>

          {/* Right Panel — Output */}
          <div className="lg:col-span-8 xl:col-span-8">
            <ScrollArea className="h-full">
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center justify-center size-7 rounded-lg bg-primary/10">
                    <span className="text-xs font-black text-primary">OUT</span>
                  </div>
                  <h2 className="text-sm font-bold text-foreground tracking-tight">
                    Structured Output
                  </h2>
                </div>
                <AgentRightPanel output={output} isLoading={isRunning} />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AgentsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-muted-foreground flex justify-center text-sm">Loading console...</div>}>
      <AgentsPageContent />
    </Suspense>
  )
}
