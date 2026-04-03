import type { Project, ProjectPhase, ProjectStatus, ProjectType, RiskLevel, Task, Goal, Decision, AgentRun } from "@/types";

export const mockProjects: Project[] = [
  {
    id: "p1",
    userId: "user1",
    name: "Mission Control AI",
    type: "product" as ProjectType,
    status: "active" as ProjectStatus,
    summary: "A personal AI operating system for helping the user become a top-tier AI software developer, tech founder, and freelancer.",
    phase: "build" as ProjectPhase,
    currentFocus: "Frontend Components",
    nextMilestone: "V1 Launch",
    risk: "medium" as RiskLevel,
    createdAt: Date.now() - 86400000 * 5,
    updatedAt: Date.now() - 3600000,
  },
  {
    id: "p2",
    userId: "user1",
    name: "Client Wellness Portal",
    type: "freelance" as ProjectType,
    status: "active" as ProjectStatus,
    summary: "Patient intake and progress tracking portal for Acme Wellness studio.",
    phase: "spec" as ProjectPhase,
    currentFocus: "Requirements Gathering",
    nextMilestone: "Proposal Acceptance",
    risk: "high" as RiskLevel,
    targetUser: "Wellness Clients",
    createdAt: Date.now() - 86400000 * 2,
    updatedAt: Date.now() - 86400000,
  },
  {
    id: "p3",
    userId: "user1",
    name: "Advanced Firebase Realtime",
    type: "learning" as ProjectType,
    status: "on_hold" as ProjectStatus,
    summary: "Deep dive into real-time pub/sub architecture using Firebase.",
    phase: "build" as ProjectPhase,
    nextMilestone: "Chat app clone complete",
    risk: "low" as RiskLevel,
    createdAt: Date.now() - 86400000 * 15,
    updatedAt: Date.now() - 86400000 * 10,
  }
];

export const mockProjectTasks: Task[] = [
  { id: "t1", userId: "u1", projectId: "p1", title: "Build Projects list page", type: "feature", priority: "high", status: "in_progress", createdAt: Date.now(), updatedAt: Date.now() },
  { id: "t2", userId: "u1", projectId: "p1", title: "Design database schemas", type: "chore", priority: "medium", status: "done", createdAt: Date.now(), updatedAt: Date.now() },
];

export const mockProjectGoals: Goal[] = [
  { id: "g1", userId: "u1", title: "Complete V1 Core UI", timeframe: "Week 1", status: "active", progress: 60, createdAt: Date.now(), updatedAt: Date.now() },
];

export const mockProjectDecisions: Decision[] = [
  { id: "d1", userId: "u1", projectId: "p1", title: "Adopt single user ownership model", context: "Need simple security logic", optionsConsidered: ["Single user", "Multi-user Role Based"], chosenOption: "Single user", rationale: "Keeps V1 simple and focuses on personal utility.", createdAt: Date.now(), updatedAt: Date.now() },
];

export const mockProjectAgentRuns: AgentRun[] = [
  { id: "r1", userId: "u1", projectId: "p1", agentRole: "architect", inputGoal: "Design V1 schema", contextTags: ["database", "schema"], output: { architecture: "monolith" }, status: "completed", createdAt: Date.now(), updatedAt: Date.now() }
];
