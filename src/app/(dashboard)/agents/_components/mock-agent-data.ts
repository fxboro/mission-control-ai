import type { AgentRole } from "@/types";

// ─── Agent Type & Workflow Type ─────────────────────────────────────────────

export type AgentType = "founder" | "architect" | "builder";

export type WorkflowType =
  | "idea_to_mvp"
  | "competitive_analysis"
  | "pivot_evaluation"
  | "mvp_to_technical_plan"
  | "system_design"
  | "database_schema"
  | "implementation_plan"
  | "code_review_prep"
  | "sprint_breakdown";

export interface AgentOption {
  id: AgentType;
  name: string;
  role: AgentRole;
  description: string;
  icon: string; // emoji for quick identification
  workflows: WorkflowOption[];
}

export interface WorkflowOption {
  id: WorkflowType;
  name: string;
  description: string;
}

// ─── Structured Output Types ────────────────────────────────────────────────

export interface OutputSection {
  id: string;
  title: string;
  content: string;
  type: "text" | "list" | "table" | "code";
  items?: string[];
}

export interface AgentRunOutput {
  agentType: AgentType;
  workflowName: string;
  timestamp: number;
  sections: OutputSection[];
  nextBestAction: {
    title: string;
    description: string;
    actionLabel: string;
  };
}

// ─── Agent Definitions ──────────────────────────────────────────────────────

export const agentOptions: AgentOption[] = [
  {
    id: "founder",
    name: "Founder Agent",
    role: "founder",
    description: "Strategy, validation, and product scoping",
    icon: "🧭",
    workflows: [
      {
        id: "idea_to_mvp",
        name: "Idea to MVP Spec",
        description: "Turn a raw idea into a structured MVP specification with scope, user stories, and constraints",
      },
      {
        id: "competitive_analysis",
        name: "Competitive Analysis",
        description: "Analyze the competitive landscape and identify positioning opportunities",
      },
      {
        id: "pivot_evaluation",
        name: "Pivot Evaluation",
        description: "Evaluate whether a product pivot makes strategic sense given current data",
      },
    ],
  },
  {
    id: "architect",
    name: "Architect Agent",
    role: "architect",
    description: "System design, schemas, and technical planning",
    icon: "🏗️",
    workflows: [
      {
        id: "mvp_to_technical_plan",
        name: "MVP to Technical Plan",
        description: "Convert an MVP spec into an architecture plan with stack decisions and module breakdown",
      },
      {
        id: "system_design",
        name: "System Design Review",
        description: "Evaluate and improve the architecture of an existing system or module",
      },
      {
        id: "database_schema",
        name: "Database Schema Design",
        description: "Design Firestore collections, indexes, and security rules for a feature set",
      },
    ],
  },
  {
    id: "builder",
    name: "Builder Agent",
    role: "builder",
    description: "Implementation planning, code scaffolding, and sprint execution",
    icon: "⚡",
    workflows: [
      {
        id: "implementation_plan",
        name: "Implementation Plan",
        description: "Break down a feature into ordered implementation tasks with file paths and dependencies",
      },
      {
        id: "code_review_prep",
        name: "Code Review Prep",
        description: "Generate a pre-flight checklist and potential issues before submitting code",
      },
      {
        id: "sprint_breakdown",
        name: "Sprint Breakdown",
        description: "Take a milestone and break it into a week-sized sprint with clear daily targets",
      },
    ],
  },
];

// ─── Mock Project Options (for linked project selector) ─────────────────────

export const mockProjectOptions = [
  { id: "p1", name: "Mission Control AI" },
  { id: "p2", name: "Client Wellness Portal" },
  { id: "p3", name: "Advanced Firebase Realtime" },
];

// ─── Mock Lead Options (for optional lead selector) ─────────────────────────

export const mockLeadOptions = [
  { id: "l1", name: "Acme Wellness Studio" },
  { id: "l2", name: "Podea Demo Lead" },
];

// ─── Mock Structured Outputs ────────────────────────────────────────────────

export const mockFounderOutput: AgentRunOutput = {
  agentType: "founder",
  workflowName: "Idea to MVP Spec",
  timestamp: Date.now(),
  sections: [
    {
      id: "goal",
      title: "Product Goal",
      type: "text",
      content:
        "Build a personal operating system that helps a solo technical founder manage projects, run AI workflows, track decisions, and develop skills — all from a single interface.",
    },
    {
      id: "target_user",
      title: "Target User",
      type: "text",
      content:
        "Solo developer–founder balancing product builds, freelance work, and continuous learning. Technical enough to use AI tooling but needs structure to avoid scattering effort.",
    },
    {
      id: "core_pain",
      title: "Core Pain Points",
      type: "list",
      content: "",
      items: [
        "Context scattered across Notion, spreadsheets, and memory",
        "No single place to run structured AI workflows and save outputs",
        "Decisions made informally and forgotten within weeks",
        "No way to connect learning goals to active project challenges",
        "Freelance pipeline tracked in head, leading to missed follow-ups",
      ],
    },
    {
      id: "mvp_scope",
      title: "MVP Scope — What's In",
      type: "list",
      content: "",
      items: [
        "Dashboard with daily priorities and suggested next actions",
        "Project management with phases, milestones, and task tracking",
        "Agent console for running role-based AI workflows",
        "Decision log with tradeoff tracking and review reminders",
        "Basic playbook system for saving reusable workflows",
        "Freelance lead pipeline with proposal generation",
      ],
    },
    {
      id: "mvp_out",
      title: "MVP Scope — What's Out",
      type: "list",
      content: "",
      items: [
        "Multi-user collaboration and team features",
        "Real-time AI model integration (mock outputs for V1)",
        "Mobile native app (responsive web only)",
        "Third-party integrations (GitHub, Slack, Calendar)",
        "Complex analytics or reporting dashboards",
      ],
    },
    {
      id: "constraints",
      title: "Constraints & Assumptions",
      type: "list",
      content: "",
      items: [
        "Single-user system — no auth complexity at V1",
        "Firebase as backend for fast iteration",
        "Next.js + Tailwind CSS for frontend",
        "Ship within 3 weeks of focused part-time work",
        "All AI outputs are mock data in V1, replaced with real APIs later",
      ],
    },
  ],
  nextBestAction: {
    title: "Run Architect Agent",
    description:
      "Now that the MVP spec is defined, convert it into a technical architecture plan with stack decisions, module breakdown, and database schema.",
    actionLabel: "Run Architect → MVP to Technical Plan",
  },
};

export const mockArchitectOutput: AgentRunOutput = {
  agentType: "architect",
  workflowName: "MVP to Technical Plan",
  timestamp: Date.now(),
  sections: [
    {
      id: "assumptions",
      title: "Technical Assumptions",
      type: "list",
      content: "",
      items: [
        "Single-user Firestore with userId field on all documents",
        "Server-side rendering via Next.js App Router with React Server Components",
        "Firebase Admin SDK for server-side operations, client SDK for auth only",
        "No external AI API calls in V1 — all agent outputs are mock JSON",
        "Deploy on Vercel with Firebase backend",
      ],
    },
    {
      id: "stack",
      title: "Chosen Stack",
      type: "list",
      content: "",
      items: [
        "Frontend: Next.js 15 + Tailwind CSS v4 + shadcn/ui",
        "Backend: Firebase Firestore (NoSQL) + Firebase Functions",
        "Auth: Firebase Authentication (email/password, Google SSO)",
        "Hosting: Vercel (Next.js) + Firebase (backend services)",
        "State: React state + URL params, no external state management",
      ],
    },
    {
      id: "modules",
      title: "Core Modules",
      type: "list",
      content: "",
      items: [
        "Dashboard Module — Today view with aggregated panels",
        "Projects Module — CRUD, detail tabs (roadmap, tasks, architecture)",
        "Agents Module — Agent console with selectors, output renderer, save actions",
        "Decisions Module — Log, detail drawer, filterable table",
        "Playbooks Module — Card grid, detail page, run integration",
        "Freelance Module — Lead pipeline, proposal viewer, service templates",
        "Learning Module — Weak spots, study sprints, project-linked learning",
        "Settings Module — Identity memory, preferences, integrations",
      ],
    },
    {
      id: "database",
      title: "Firestore Collection Design",
      type: "code",
      content: `users/{uid}
  └── profile, preferences, identity memory

projects/{projectId}           — userId indexed
tasks/{taskId}                 — projectId + userId indexed  
decisions/{decisionId}         — projectId + userId indexed
agentRuns/{runId}              — projectId + userId indexed
playbooks/{playbookId}         — userId indexed
leads/{leadId}                 — userId indexed
proposals/{proposalId}         — leadId + userId indexed
goals/{goalId}                 — userId indexed
memories/{memoryId}            — userId indexed
learningItems/{itemId}         — userId indexed`,
    },
    {
      id: "risks",
      title: "Technical Risks",
      type: "list",
      content: "",
      items: [
        "Firestore read costs could spike if dashboard over-queries — mitigate with server-side aggregation",
        "Mock-to-real agent transition may require output schema changes — define schemas early",
        "Single-user model may limit future monetisation — but keeps V1 shipping fast",
        "No offline support — acceptable for V1 desktop-first usage",
      ],
    },
  ],
  nextBestAction: {
    title: "Run Builder Agent",
    description:
      "Architecture is defined. Break the first milestone into a sprint with daily implementation targets.",
    actionLabel: "Run Builder → Sprint Breakdown",
  },
};

export const mockBuilderOutput: AgentRunOutput = {
  agentType: "builder",
  workflowName: "Implementation Plan",
  timestamp: Date.now(),
  sections: [
    {
      id: "objective",
      title: "Implementation Objective",
      type: "text",
      content:
        "Build the Agents Console page — a two-column layout where the user selects an agent and workflow, provides input, runs a simulated agent, and reviews/saves the structured output.",
    },
    {
      id: "steps",
      title: "Ordered Implementation Steps",
      type: "list",
      content: "",
      items: [
        "1. Install missing shadcn/ui components (select, textarea, label)",
        "2. Define TypeScript types for AgentType, WorkflowType, OutputSection, AgentRunOutput",
        "3. Create mock structured output data for Founder, Architect, and Builder agents",
        "4. Build AgentLeftPanel component with all selectors and the run button",
        "5. Build AgentRightPanel component with output renderer and empty state",
        "6. Build SaveActionsBar component with the four action buttons",
        "7. Compose the agents/page.tsx with two-column layout and state management",
        "8. Add loading skeleton state for the right panel during simulated runs",
        "9. Test responsive stacking on mobile breakpoints",
      ],
    },
    {
      id: "files",
      title: "Files to Create / Modify",
      type: "list",
      content: "",
      items: [
        "src/app/(dashboard)/agents/_components/mock-agent-data.ts — types + mock data",
        "src/app/(dashboard)/agents/_components/agent-left-panel.tsx — selector + input panel",
        "src/app/(dashboard)/agents/_components/agent-right-panel.tsx — output rendering",
        "src/app/(dashboard)/agents/_components/save-actions-bar.tsx — action buttons",
        "src/app/(dashboard)/agents/page.tsx — page composition and state",
      ],
    },
    {
      id: "edge_cases",
      title: "Edge Cases & Safeguards",
      type: "list",
      content: "",
      items: [
        "Show empty state when no agent run has been triggered yet",
        "Disable Run button when required fields (agent, workflow) are not selected",
        "Clear output when agent type changes to prevent showing stale data",
        "Gracefully handle case where selected workflow does not have mock output",
        "Show loading skeleton for 1.5 seconds to simulate API latency",
      ],
    },
    {
      id: "acceptance",
      title: "Acceptance Criteria",
      type: "list",
      content: "",
      items: [
        "User can select Founder, Architect, or Builder agent",
        "Workflow options update when agent selection changes",
        "Output renders as structured section cards, not raw text",
        "Next best action callout appears below output sections",
        "Save action buttons show toast on click",
        "Mobile layout stacks left panel above right panel",
      ],
    },
  ],
  nextBestAction: {
    title: "Begin Implementation",
    description:
      "The implementation plan is ready. Start with step 1 and work through sequentially. Ship the Agents Console today.",
    actionLabel: "Create Tasks from Plan",
  },
};

// ─── Output lookup helper ───────────────────────────────────────────────────

export function getMockOutput(
  agentType: AgentType,
  _workflowType: WorkflowType
): AgentRunOutput | null {
  switch (agentType) {
    case "founder":
      return mockFounderOutput;
    case "architect":
      return mockArchitectOutput;
    case "builder":
      return mockBuilderOutput;
    default:
      return null;
  }
}
