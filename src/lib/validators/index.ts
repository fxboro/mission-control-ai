import { z } from "zod";

export const projectPhaseSchema = z.enum(["spec", "build", "launch", "maintenance", "completed"]);
export const projectTypeSchema = z.enum(["product", "freelance", "learning"]);
export const projectStatusSchema = z.enum(["active", "on_hold", "completed", "archived"]);
export const prioritySchema = z.enum(["low", "medium", "high", "urgent"]);
export const taskTypeSchema = z.enum(["feature", "bug", "chore", "research"]);
export const taskStatusSchema = z.enum(["todo", "in_progress", "blocked", "done"]);
export const riskLevelSchema = z.enum(["low", "medium", "high"]);
export const leadStatusSchema = z.enum(["new", "qualified", "proposal_sent", "won", "lost"]);
export const proposalStatusSchema = z.enum(["draft", "sent", "accepted", "rejected"]);
export const agentRoleSchema = z.enum(["execution", "architect", "builder", "reviewer", "founder", "freelance", "learning"]);
export const agentRunStatusSchema = z.enum(["pending", "completed", "failed"]);

export const baseEntitySchema = z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export const userSchema = z.object({
  uid: z.string(),
  email: z.string().email(),
  name: z.string(),
  createdAt: z.number(),
  missionStatement: z.string().optional(),
  preferredStack: z.array(z.string()).optional(),
  weeklyCapacity: z.number().optional(),
  businessFocus: z.array(z.string()).optional(),
  growthFocus: z.array(z.string()).optional(),
  primaryMode: z.enum(["builder", "founder", "freelance", "hybrid"]).optional(),
});

export const goalSchema = baseEntitySchema.extend({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  timeframe: z.string(),
  status: projectStatusSchema,
  progress: z.number().min(0).max(100).optional(),
});

export const projectSchema = baseEntitySchema.extend({
  name: z.string().min(1, "Name is required"),
  type: projectTypeSchema,
  status: projectStatusSchema,
  summary: z.string(),
  targetUser: z.string().optional(),
  problem: z.string().optional(),
  phase: projectPhaseSchema,
  stack: z.array(z.string()).optional(),
  currentFocus: z.string().optional(),
  nextMilestone: z.string().optional(),
  risk: riskLevelSchema,
});

export const taskSchema = baseEntitySchema.extend({
  title: z.string().min(1, "Title is required"),
  projectId: z.string().optional(),
  type: taskTypeSchema,
  workflowId: z.string().optional(),
  priority: prioritySchema,
  dueDate: z.number().optional(),
  status: taskStatusSchema,
  assignee: z.string().optional(),
});

export const decisionSchema = baseEntitySchema.extend({
  title: z.string().min(1, "Title is required"),
  projectId: z.string().optional(),
  context: z.string(),
  optionsConsidered: z.array(z.string()),
  chosenOption: z.string(),
  rationale: z.string(),
  tradeoffs: z.string().optional(),
  risks: z.string().optional(),
  reviewDate: z.number().optional(),
});

export const playbookSchema = baseEntitySchema.extend({
  title: z.string().min(1, "Title is required"),
  category: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  steps: z.array(z.string()),
  checklist: z.array(z.string()),
  promptTemplate: z.string(),
  lastUsed: z.number().optional(),
});

export const leadSchema = baseEntitySchema.extend({
  businessName: z.string().min(1, "Business name is required"),
  contactName: z.string().optional(),
  niche: z.string().optional(),
  source: z.string().optional(),
  painPoint: z.string().optional(),
  urgency: z.enum(["low", "medium", "high"]).optional(),
  budgetSignal: z.enum(["low", "medium", "high"]).optional(),
  status: leadStatusSchema,
  notes: z.string().optional(),
});

export const proposalSchema = baseEntitySchema.extend({
  leadId: z.string(),
  title: z.string().min(1, "Title is required"),
  status: proposalStatusSchema,
  problemSummary: z.string(),
  scope: z.string(),
  deliverables: z.array(z.string()),
  timeline: z.string(),
  pricing: z.string(),
  assumptions: z.string().optional(),
});

export const agentRunSchema = baseEntitySchema.extend({
  agentRole: agentRoleSchema,
  workflowId: z.string().optional(),
  projectId: z.string().optional(),
  leadId: z.string().optional(),
  inputGoal: z.string(),
  contextTags: z.array(z.string()),
  output: z.record(z.string(), z.any()),
  nextBestAction: z.string().optional(),
  status: agentRunStatusSchema,
});

export const memorySchema = baseEntitySchema.extend({
  type: z.enum(["preference", "fact", "learning", "rule"]),
  content: z.string(),
  confidence: z.number().min(0).max(100),
  tags: z.array(z.string()),
});

// API Request schemas built on top
export const createProjectRequestSchema = projectSchema.omit({ id: true, userId: true, createdAt: true, updatedAt: true });
export const runAgentRequestSchema = agentRunSchema.omit({ id: true, userId: true, createdAt: true, updatedAt: true, output: true, status: true });
