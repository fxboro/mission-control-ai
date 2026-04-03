"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, X, Loader2 } from "lucide-react"
import {
  agentOptions,
  mockProjectOptions,
  mockLeadOptions,
  type AgentType,
  type WorkflowType,
  type WorkflowOption,
} from "./mock-agent-data"

interface AgentLeftPanelProps {
  selectedAgent: AgentType | null
  selectedWorkflow: WorkflowType | null
  selectedProject: string | null
  selectedLead: string | null
  contextTags: string[]
  goal: string
  isRunning: boolean
  onAgentChange: (agent: AgentType) => void
  onWorkflowChange: (workflow: WorkflowType) => void
  onProjectChange: (project: string) => void
  onLeadChange: (lead: string) => void
  onTagsChange: (tags: string[]) => void
  onGoalChange: (goal: string) => void
  onRun: () => void
}

export function AgentLeftPanel({
  selectedAgent,
  selectedWorkflow,
  selectedProject,
  selectedLead,
  contextTags,
  goal,
  isRunning,
  onAgentChange,
  onWorkflowChange,
  onProjectChange,
  onLeadChange,
  onTagsChange,
  onGoalChange,
  onRun,
}: AgentLeftPanelProps) {
  const [tagInput, setTagInput] = React.useState("")

  const currentAgent = agentOptions.find((a) => a.id === selectedAgent)
  const availableWorkflows: WorkflowOption[] = currentAgent?.workflows ?? []

  const canRun = selectedAgent !== null && selectedWorkflow !== null && goal.trim().length > 0

  function handleTagKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault()
      const tag = tagInput.trim().toLowerCase()
      if (!contextTags.includes(tag)) {
        onTagsChange([...contextTags, tag])
      }
      setTagInput("")
    }
  }

  function handleRemoveTag(tag: string) {
    onTagsChange(contextTags.filter((t) => t !== tag))
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Agent Selector */}
      <div className="space-y-2">
        <Label htmlFor="agent-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Agent
        </Label>
        <Select
          value={selectedAgent ?? ""}
          onValueChange={(val) => onAgentChange(val as AgentType)}
        >
          <SelectTrigger id="agent-select" className="w-full h-11 bg-background/80 border-border hover:border-foreground/20 transition-colors">
            <SelectValue placeholder="Choose an agent..." />
          </SelectTrigger>
          <SelectContent>
            {agentOptions.map((agent) => (
              <SelectItem key={agent.id} value={agent.id}>
                <span className="flex items-center gap-2">
                  <span className="text-base">{agent.icon}</span>
                  <span className="font-semibold">{agent.name}</span>
                  <span className="text-xs text-muted-foreground ml-1">— {agent.description}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Agent info card */}
        {currentAgent && (
          <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <span className="text-2xl">{currentAgent.icon}</span>
            <div>
              <p className="text-sm font-bold text-foreground">{currentAgent.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{currentAgent.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Workflow Selector */}
      <div className="space-y-2">
        <Label htmlFor="workflow-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Workflow
        </Label>
        <Select
          value={selectedWorkflow ?? ""}
          onValueChange={(val) => onWorkflowChange(val as WorkflowType)}
          disabled={!selectedAgent}
        >
          <SelectTrigger id="workflow-select" className="w-full h-11 bg-background/80 border-border hover:border-foreground/20 transition-colors disabled:opacity-40">
            <SelectValue placeholder={selectedAgent ? "Choose a workflow..." : "Select an agent first"} />
          </SelectTrigger>
          <SelectContent>
            {availableWorkflows.map((wf) => (
              <SelectItem key={wf.id} value={wf.id}>
                <span className="flex flex-col">
                  <span className="font-semibold">{wf.name}</span>
                  <span className="text-xs text-muted-foreground">{wf.description}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Linked Project */}
      <div className="space-y-2">
        <Label htmlFor="project-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Linked Project
        </Label>
        <Select
          value={selectedProject ?? ""}
          onValueChange={onProjectChange}
        >
          <SelectTrigger id="project-select" className="w-full h-11 bg-background/80 border-border hover:border-foreground/20 transition-colors">
            <SelectValue placeholder="Link to a project (optional)" />
          </SelectTrigger>
          <SelectContent>
            {mockProjectOptions.map((p) => (
              <SelectItem key={p.id} value={p.id}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Optional Lead */}
      <div className="space-y-2">
        <Label htmlFor="lead-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Lead <span className="text-muted-foreground/60 font-normal normal-case">(optional)</span>
        </Label>
        <Select
          value={selectedLead ?? ""}
          onValueChange={onLeadChange}
        >
          <SelectTrigger id="lead-select" className="w-full h-11 bg-background/80 border-border hover:border-foreground/20 transition-colors">
            <SelectValue placeholder="Attach a lead (optional)" />
          </SelectTrigger>
          <SelectContent>
            {mockLeadOptions.map((l) => (
              <SelectItem key={l.id} value={l.id}>
                {l.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Context Tags */}
      <div className="space-y-2">
        <Label htmlFor="context-tags" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Context Tags
        </Label>
        <Input
          id="context-tags"
          placeholder="Add tag and press Enter"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
          className="h-11 bg-background/80 border-border hover:border-foreground/20 transition-colors"
        />
        {contextTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1 animate-in fade-in duration-200">
            {contextTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="gap-1 pl-2.5 pr-1.5 py-0.5 text-xs font-medium cursor-default group"
              >
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-0.5 rounded-full p-0.5 hover:bg-foreground/10 transition-colors"
                  aria-label={`Remove tag ${tag}`}
                >
                  <X className="size-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Goal / Prompt Textarea */}
      <div className="space-y-2">
        <Label htmlFor="agent-goal" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Goal / Prompt
        </Label>
        <Textarea
          id="agent-goal"
          placeholder="Describe what you want the agent to help with..."
          value={goal}
          onChange={(e) => onGoalChange(e.target.value)}
          rows={5}
          className="resize-none bg-background/80 border-border hover:border-foreground/20 transition-colors text-sm leading-relaxed"
        />
        <p className="text-[11px] text-muted-foreground/60">
          Be specific. Include context about the project, constraints, and desired format.
        </p>
      </div>

      {/* Run Button */}
      <Button
        onClick={onRun}
        disabled={!canRun || isRunning}
        className="w-full h-12 text-sm font-bold tracking-tight shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:shadow-none disabled:scale-100"
      >
        {isRunning ? (
          <>
            <Loader2 className="size-4 animate-spin mr-2" />
            Running Agent...
          </>
        ) : (
          <>
            <Play className="size-4 mr-2" />
            Run Agent
          </>
        )}
      </Button>
    </div>
  )
}
