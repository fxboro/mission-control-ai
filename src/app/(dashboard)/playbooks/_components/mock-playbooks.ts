import type { Playbook } from "@/types";

export const mockPlaybooks: Playbook[] = [
  {
    id: "pb1",
    userId: "user1",
    title: "MVP Scoping Workflow",
    category: "Product",
    summary: "Define a lean first version of any product idea. Covers target user, core problem, key features, and success criteria.",
    tags: ["founder", "mvp", "strategy"],
    steps: [
      "Define the target user persona",
      "Identify the core problem statement",
      "List potential features and rank by impact vs effort",
      "Cut to 3 core features only",
      "Define success metrics for V1",
      "Write a one-page PRD",
    ],
    checklist: [
      "User persona documented",
      "Problem statement validated",
      "Feature list prioritized",
      "MVP scope finalized",
      "Success metrics defined",
      "PRD drafted",
    ],
    promptTemplate: `You are acting as a Founder strategist. Help me scope a lean MVP.

Context: [PROJECT_NAME]
Target User: [TARGET_USER]
Problem: [CORE_PROBLEM]

Tasks:
1. Validate the problem statement
2. Suggest 5 features ranked by impact
3. Recommend which 3 to build first
4. Define measurable success criteria
5. Output a one-page PRD summary`,
    lastUsed: Date.now() - 86400000 * 2,
    createdAt: Date.now() - 86400000 * 30,
    updatedAt: Date.now() - 86400000 * 2,
  },
  {
    id: "pb2",
    userId: "user1",
    title: "Firebase Project Setup",
    category: "Technical",
    summary: "Standardized setup for new Firebase projects. Covers Auth, Firestore rules, Cloud Functions, and hosting config.",
    tags: ["backend", "setup", "firebase"],
    steps: [
      "Create Firebase project in console",
      "Enable Authentication providers",
      "Design Firestore data model",
      "Write security rules",
      "Set up Cloud Functions boilerplate",
      "Configure hosting and deploy targets",
      "Set up CI/CD pipeline",
    ],
    checklist: [
      "Firebase project created",
      "Auth providers configured",
      "Firestore schema designed",
      "Security rules deployed",
      "Cloud Functions scaffolded",
      "Hosting configured",
      "CI/CD pipeline active",
    ],
    promptTemplate: `You are a Firebase architect. Help me set up a new Firebase project.

Project: [PROJECT_NAME]
Auth Providers: [AUTH_PROVIDERS]
Data Model: [DATA_MODEL_DESCRIPTION]

Tasks:
1. Suggest optimal Firestore schema
2. Generate security rules for the schema
3. Scaffold Cloud Functions structure
4. Recommend hosting configuration`,
    lastUsed: Date.now() - 86400000 * 5,
    createdAt: Date.now() - 86400000 * 45,
    updatedAt: Date.now() - 86400000 * 5,
  },
  {
    id: "pb3",
    userId: "user1",
    title: "Discovery Call Script",
    category: "Freelance",
    summary: "Guide for running effective client discovery calls. Extracts pain points, budget signals, and urgency markers.",
    tags: ["sales", "client", "discovery"],
    steps: [
      "Open with context-setting (2 min)",
      "Ask about current workflow and pain points",
      "Explore budget and timeline expectations",
      "Identify decision-makers and blockers",
      "Present relevant case studies or past work",
      "Agree on next steps and timeline",
    ],
    checklist: [
      "Pain points documented",
      "Budget range confirmed",
      "Timeline expectations set",
      "Decision-maker identified",
      "Next steps agreed",
      "Follow-up scheduled",
    ],
    promptTemplate: `You are a freelance sales coach. Help me prepare for a discovery call.

Lead: [BUSINESS_NAME]
Niche: [NICHE]
Known Pain Point: [PAIN_POINT]

Tasks:
1. Generate 5 targeted discovery questions
2. Suggest relevant case study angles
3. Identify likely budget signals to listen for
4. Draft a follow-up email template`,
    lastUsed: Date.now() - 86400000,
    createdAt: Date.now() - 86400000 * 20,
    updatedAt: Date.now() - 86400000,
  },
  {
    id: "pb4",
    userId: "user1",
    title: "Code Review Checklist",
    category: "Technical",
    summary: "Systematic walk-through for reviewing PRs. Covers correctness, performance, security, and code style.",
    tags: ["review", "quality", "engineering"],
    steps: [
      "Read the PR description and linked issue",
      "Check for correctness and edge cases",
      "Review error handling patterns",
      "Evaluate performance implications",
      "Verify security considerations",
      "Check test coverage",
      "Review code style and naming conventions",
    ],
    checklist: [
      "PR description reviewed",
      "Logic correctness verified",
      "Edge cases handled",
      "Error handling adequate",
      "No performance regressions",
      "Security reviewed",
      "Tests pass and cover changes",
      "Code style consistent",
    ],
    promptTemplate: `You are a senior code reviewer. Review the following code changes.

Context: [PR_DESCRIPTION]
Language: [LANGUAGE]

Focus Areas:
1. Correctness and edge cases
2. Performance implications
3. Security vulnerabilities
4. Test coverage gaps
5. Code style consistency`,
    createdAt: Date.now() - 86400000 * 60,
    updatedAt: Date.now() - 86400000 * 7,
  },
  {
    id: "pb5",
    userId: "user1",
    title: "Proposal Writing Flow",
    category: "Freelance",
    summary: "Transform discovery insights into a winning proposal. Covers problem framing, scope, deliverables, pricing, and risk management.",
    tags: ["proposal", "client", "pricing"],
    steps: [
      "Summarize the client problem from discovery notes",
      "Define project scope and boundaries",
      "List concrete deliverables",
      "Build timeline with milestones",
      "Calculate pricing using value-based logic",
      "Document assumptions and risks",
      "Draft the proposal document",
      "Internal review before sending",
    ],
    checklist: [
      "Problem summary written",
      "Scope boundaries defined",
      "Deliverables listed",
      "Timeline created",
      "Pricing calculated",
      "Assumptions documented",
      "Risks identified",
      "Proposal reviewed internally",
    ],
    promptTemplate: `You are a freelance business consultant. Help me write a winning proposal.

Client: [CLIENT_NAME]
Problem: [PROBLEM_SUMMARY]
Budget Signal: [BUDGET_SIGNAL]
Timeline: [EXPECTED_TIMELINE]

Tasks:
1. Frame the problem compellingly
2. Define scope with clear boundaries
3. List deliverables with acceptance criteria
4. Suggest value-based pricing rationale
5. Identify top 3 risks and mitigations`,
    lastUsed: Date.now() - 86400000 * 3,
    createdAt: Date.now() - 86400000 * 25,
    updatedAt: Date.now() - 86400000 * 3,
  },
  {
    id: "pb6",
    userId: "user1",
    title: "Weekly Sprint Planning",
    category: "Product",
    summary: "Structure your week around goals, priorities, and capacity. Prevents scope creep and ensures focus.",
    tags: ["planning", "productivity", "focus"],
    steps: [
      "Review last week's outcomes",
      "Check current goal progress",
      "Identify top 3 priorities for the week",
      "Estimate capacity (hours available)",
      "Assign tasks to priority slots",
      "Identify blockers and plan mitigations",
      "Set daily check-in reminders",
    ],
    checklist: [
      "Last week reviewed",
      "Goals progress checked",
      "Top 3 priorities set",
      "Capacity estimated",
      "Tasks assigned",
      "Blockers identified",
      "Daily rhythm planned",
    ],
    promptTemplate: `You are a productivity coach. Help me plan my week.

Goals: [CURRENT_GOALS]
Available Hours: [WEEKLY_CAPACITY]
Blockers: [KNOWN_BLOCKERS]

Tasks:
1. Suggest priority ordering
2. Allocate time blocks per priority
3. Identify risks to the plan
4. Suggest one thing to cut if needed`,
    lastUsed: Date.now() - 86400000 * 6,
    createdAt: Date.now() - 86400000 * 40,
    updatedAt: Date.now() - 86400000 * 6,
  },
  {
    id: "pb7",
    userId: "user1",
    title: "Learning Sprint Setup",
    category: "Learning",
    summary: "Design a focused study sprint for any technical topic. Covers goal-setting, resource curation, and practice exercises.",
    tags: ["learning", "study", "growth"],
    steps: [
      "Define the learning objective",
      "Assess current knowledge level",
      "Curate 3-5 high-quality resources",
      "Design practice exercises",
      "Set daily study schedule",
      "Plan a capstone project",
      "Schedule review and reflection",
    ],
    checklist: [
      "Objective defined",
      "Starting level assessed",
      "Resources curated",
      "Exercises designed",
      "Schedule set",
      "Capstone project planned",
      "Review date scheduled",
    ],
    promptTemplate: `You are a learning coach. Help me design a study sprint.

Topic: [TOPIC]
Current Level: [CURRENT_LEVEL]
Available Time: [DAILY_HOURS] hours/day for [DURATION] days

Tasks:
1. Define measurable learning outcomes
2. Recommend top resources
3. Design 3 progressive exercises
4. Suggest a capstone mini-project`,
    createdAt: Date.now() - 86400000 * 15,
    updatedAt: Date.now() - 86400000 * 8,
  },
];

export const playbookCategories = [...new Set(mockPlaybooks.map((p) => p.category))];
export const playbookTags = [...new Set(mockPlaybooks.flatMap((p) => p.tags))];
