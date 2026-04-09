// ─────────────────────────────────────────────────────────────
// Domain Entity Types — Mission Control AI
// All core data models. Every entity extends BaseEntity for
// consistent id / userId / timestamps across the system.
// ─────────────────────────────────────────────────────────────

import type {
  ProjectPhase,
  ProjectType,
  ProjectStatus,
  RiskLevel,
  Severity,
  TaskType,
  TaskStatus,
  Priority,
  GoalType,
  GoalStatus,
  AgentRole,
  WorkflowType,
  AgentRunStatus,
  AgentVerbosity,
  LeadStatus,
  LeadSource,
  ProposalStatus,
  BudgetSignal,
  SkillLevel,
  LearningStatus,
  SprintStatus,
  MemoryType,
  UserMode,
  IntegrationType,
} from "./enums";

// ── Base ─────────────────────────────────────────────────────

/** Shared fields on every Firestore document. */
export interface BaseEntity {
  id: string;
  userId: string;
  createdAt: number; // epoch ms
  updatedAt: number; // epoch ms
  sourceRunId?: string; // Links this entity to the agent run that created it
}

// ── User ─────────────────────────────────────────────────────

export interface User {
  uid: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: number;
  missionStatement?: string;
  preferredStack?: string[];
  weeklyCapacity?: number; // hours per week
  businessFocus?: string[];
  growthFocus?: string[];
  primaryMode?: UserMode;
}

// ── Goal ─────────────────────────────────────────────────────

export interface Goal extends BaseEntity {
  title: string;
  description?: string;
  type?: GoalType;
  timeframe: string; // e.g. "2026-W14", "2026-Q2"
  status: GoalStatus;
  progress?: number; // 0-100
  linkedProjectIds?: string[];
}

// ── Project ──────────────────────────────────────────────────

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
  goalId?: string;
}

// ── Task ─────────────────────────────────────────────────────

export interface Task extends BaseEntity {
  title: string;
  description?: string;
  projectId?: string;
  type: TaskType;
  workflowId?: string;
  priority: Priority;
  dueDate?: number;
  status: TaskStatus;
  assignee?: string;
  tags?: string[];
  estimateHours?: number;
}

// ── Decision ─────────────────────────────────────────────────

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
  tags?: string[];
}

// ── Playbook ─────────────────────────────────────────────────

export interface PlaybookStep {
  label: string;
  description?: string;
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
  runCount?: number;
}

// ── Lead ─────────────────────────────────────────────────────

export interface Lead extends BaseEntity {
  businessName: string;
  contactName?: string;
  contactEmail?: string;
  niche?: string;
  source?: string;
  painPoint?: string;
  urgency?: Severity;
  budgetSignal?: BudgetSignal;
  status: LeadStatus;
  notes?: string;
  nextFollowUp?: number;
}

// ── Proposal ─────────────────────────────────────────────────

export interface ProposalLineItem {
  description: string;
  amount?: number;
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
  lineItems?: ProposalLineItem[];
  assumptions?: string;
  risks?: string;
  validUntil?: number;
}

// ── Agent ────────────────────────────────────────────────────

export interface AgentRun extends BaseEntity {
  agentRole: AgentRole;
  workflowId?: string;
  workflowType?: WorkflowType;
  projectId?: string;
  leadId?: string;
  inputGoal: string;
  contextTags: string[];
  output: Record<string, unknown>;
  nextBestAction?: string;
  status: AgentRunStatus;
  durationMs?: number;
}

export interface AgentPreference {
  agentRole: AgentRole;
  enabled: boolean;
  autoRun: boolean;
  verbosity: AgentVerbosity;
}

// ── Memory ───────────────────────────────────────────────────

export interface Memory extends BaseEntity {
  type: MemoryType;
  content: string;
  confidence: number; // 0-100
  tags: string[];
  source?: string; // which agent/workflow created this
  expiresAt?: number;
}

// ── Learning ─────────────────────────────────────────────────

export interface LearningItem extends BaseEntity {
  title: string;
  category: string;
  skillLevel: SkillLevel;
  status: LearningStatus;
  progress: number; // 0-100
  notes?: string;
  tags: string[];
  resourceUrl?: string;
}

export interface WeakSpot extends BaseEntity {
  topic: string;
  severity: Severity;
  lastEncountered: number;
  notes?: string;
  linkedLearningIds?: string[];
}

export interface StudySprint extends BaseEntity {
  title: string;
  goal: string;
  topic: string;
  durationDays: number;
  progress: number; // 0-100
  status: SprintStatus;
  learningItemIds?: string[];
}

// ── Freelance Extended ───────────────────────────────────────

export interface ServiceTemplate extends BaseEntity {
  name: string;
  description: string;
  basePrice: string;
  deliverables: string[];
  estimatedDays: number;
  category: string;
}

// ── Settings / Integration ───────────────────────────────────

export interface Integration {
  id: string;
  name: string;
  type: IntegrationType | string;
  connected: boolean;
  description?: string;
  configUrl?: string;
}
