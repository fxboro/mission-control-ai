import type { User, Integration, AgentPreference, AgentRole } from "@/types";

export const mockUserSettings: User = {
  uid: "user1",
  email: "chima@missioncontrol.ai",
  name: "Chima",
  createdAt: Date.now() - 86400000 * 60,
  missionStatement: "Build a portfolio of micro-SaaS and high-value freelance workflows. Become a world-class AI-augmented software developer.",
  preferredStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Zod", "shadcn/ui"],
  weeklyCapacity: 40,
  businessFocus: ["Web Applications", "SaaS Products", "Client Portals"],
  growthFocus: ["AI/ML Integration", "System Design", "Technical Writing"],
  primaryMode: "hybrid",
};

export const mockIntegrations: Integration[] = [
  { id: "int1", name: "GitHub", type: "version_control", connected: true, description: "Source code and repository management" },
  { id: "int2", name: "Firebase", type: "backend", connected: true, description: "Authentication, database, and hosting" },
  { id: "int3", name: "Vercel", type: "deployment", connected: true, description: "Frontend deployment and preview URLs" },
  { id: "int4", name: "Linear", type: "project_management", connected: false, description: "Issue tracking and project management" },
  { id: "int5", name: "Notion", type: "documentation", connected: false, description: "Notes, docs, and knowledge base" },
  { id: "int6", name: "Slack", type: "communication", connected: false, description: "Team messaging and notifications" },
];

export const mockAgentPreferences: AgentPreference[] = [
  { agentRole: "execution" as AgentRole, enabled: true, autoRun: false, verbosity: "detailed" },
  { agentRole: "architect" as AgentRole, enabled: true, autoRun: false, verbosity: "detailed" },
  { agentRole: "builder" as AgentRole, enabled: true, autoRun: true, verbosity: "concise" },
  { agentRole: "reviewer" as AgentRole, enabled: true, autoRun: false, verbosity: "detailed" },
  { agentRole: "founder" as AgentRole, enabled: true, autoRun: false, verbosity: "detailed" },
  { agentRole: "freelance" as AgentRole, enabled: true, autoRun: false, verbosity: "concise" },
  { agentRole: "learning" as AgentRole, enabled: false, autoRun: false, verbosity: "concise" },
];
