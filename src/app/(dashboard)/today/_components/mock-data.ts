import type { Priority, ProjectPhase, TaskStatus, LeadStatus } from "@/types";

export const mockUser = {
  name: "Chima",
  mission: "Build a portfolio of micro-SaaS and high-value freelance workflows.",
  weeklyFocus: "Launch V1 of Mission Control AI and secure 1 new retaining client."
};

export const mockPriorities = [
  { id: "p1", title: "Implement today dashboard", project: "Mission Control V1", priority: "urgent" as Priority },
  { id: "p2", title: "Review proposal for Acme Wellness", project: "Freelance Client", priority: "high" as Priority },
  { id: "p3", title: "Complete Advanced Firebase rules exercise", project: "Skill Growth", priority: "medium" as Priority },
];

export const mockSuggestedAction = {
  workflow: "Architect Agent — Database Design",
  context: "You're starting the Backend module for Mission Control.",
  buttonLabel: "Run Architect Workflow"
};

export const mockActiveProjects = [
  { id: "1", name: "Mission Control AI", phase: "Build" as ProjectPhase, health: "on-track", tasks: 8 },
  { id: "2", name: "Acme Waitlist", phase: "Spec" as ProjectPhase, health: "at-risk", tasks: 3 },
];

export const mockBlockers = [
  { id: "b1", title: "Missing Firebase Service Account", project: "Mission Control", status: "blocked" as TaskStatus },
  { id: "b2", title: "Client hasn't sent branding assets", project: "Acme Waitlist", status: "blocked" as TaskStatus }
];

export const mockGoals = [
  { id: "g1", title: "Ship Mission Control UI", progress: 85 },
  { id: "g2", title: "Send 3 Proposals", progress: 33 },
];

export const mockDecisions = [
  { id: "d1", title: "Use single-user ownership in V1", date: "Today" },
  { id: "d2", title: "Tailwind inside standard CSS over CSS-in-JS", date: "Yesterday" },
  { id: "d3", title: "Skip complex vector auth initially", date: "Mar 25" },
];

export const mockLearning = {
  topic: "Security Rules Mastery",
  description: "Understanding field-level rules and role assumptions.",
  progress: 40
};

export const mockFreelance = {
  newLeads: 2,
  activeProposals: 1,
  followUps: 3
};

export const mockAgentRuns = [
  { id: "r1", agent: "Founder", workflow: "MVP Validation", time: "2 hours ago", status: "completed" },
  { id: "r2", agent: "Reviewer", workflow: "Code Quality Pass", time: "Yesterday", status: "completed" },
];
