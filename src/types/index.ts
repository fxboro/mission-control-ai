export type ProjectPhase = "spec" | "build" | "launch" | "maintenance" | "completed";
export type ProjectType = "product" | "freelance" | "learning";
export type ProjectStatus = "active" | "on_hold" | "completed" | "archived";
export type Priority = "low" | "medium" | "high" | "urgent";
export type TaskType = "feature" | "bug" | "chore" | "research";
export type TaskStatus = "todo" | "in_progress" | "blocked" | "done";
export type RiskLevel = "low" | "medium" | "high";
export type LeadStatus = "new" | "qualified" | "proposal_sent" | "won" | "lost";
export type ProposalStatus = "draft" | "sent" | "accepted" | "rejected";
export type AgentRole = "execution" | "architect" | "builder" | "reviewer" | "founder" | "freelance" | "learning";
export type AgentRunStatus = "pending" | "completed" | "failed";

export interface BaseEntity {
  id: string;
  userId: string;
  createdAt: number;
  updatedAt: number;
}

export interface User {
  uid: string;
  email: string;
  name: string;
  createdAt: number;
  missionStatement?: string;
  preferredStack?: string[];
  weeklyCapacity?: number;
  businessFocus?: string[];
  growthFocus?: string[];
  primaryMode?: "builder" | "founder" | "freelance" | "hybrid";
}

export interface Goal extends BaseEntity {
  title: string;
  description?: string;
  timeframe: string; // e.g. "2026-W14"
  status: ProjectStatus;
  progress?: number; // 0-100
}

export interface Project extends BaseEntity {
  name: string;
  type: ProjectType;
  status: ProjectStatus;
  summary: string;
  targetUser?: string;
  problem?: string;
  phase: ProjectPhase;
  stack?: string[];
  currentFocus?: string;
  nextMilestone?: string;
  risk: RiskLevel;
}

export interface Task extends BaseEntity {
  title: string;
  projectId?: string;
  type: TaskType;
  workflowId?: string;
  priority: Priority;
  dueDate?: number;
  status: TaskStatus;
  assignee?: string;
}

export interface Decision extends BaseEntity {
  title: string;
  projectId?: string;
  context: string;
  optionsConsidered: string[];
  chosenOption: string;
  rationale: string;
  tradeoffs?: string;
  risks?: string;
  reviewDate?: number;
}

export interface Playbook extends BaseEntity {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  steps: string[];
  checklist: string[];
  promptTemplate: string;
  lastUsed?: number;
}

export interface Lead extends BaseEntity {
  businessName: string;
  contactName?: string;
  niche?: string;
  source?: string;
  painPoint?: string;
  urgency?: "low" | "medium" | "high";
  budgetSignal?: "low" | "medium" | "high";
  status: LeadStatus;
  notes?: string;
}

export interface Proposal extends BaseEntity {
  leadId: string;
  title: string;
  status: ProposalStatus;
  problemSummary: string;
  scope: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  assumptions?: string;
}

export interface AgentRun extends BaseEntity {
  agentRole: AgentRole;
  workflowId?: string;
  projectId?: string;
  leadId?: string;
  inputGoal: string;
  contextTags: string[];
  output: Record<string, any>;
  nextBestAction?: string;
  status: AgentRunStatus;
}

export interface Memory extends BaseEntity {
  type: "preference" | "fact" | "learning" | "rule";
  content: string;
  confidence: number; // 0-100
  tags: string[];
}
