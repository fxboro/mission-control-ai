# Mission Control AI V1 — Technical Implementation Pack

## 1. V1 implementation goal

Build a personal AI operating system that helps the user:
- plan weekly work
- design and build products
- make founder decisions
- run freelance work
- learn from what they build

V1 should feel like:
- a dashboard
- a project system
- an agent console
- a memory layer
- a playbook engine

---

## 2. Recommended build stack

### Frontend
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod

### Backend
- Firebase Auth
- Firestore
- Firebase Cloud Functions
- Firebase Storage

### AI / orchestration
- Antigravity as IDE and agent workspace
- prompt and skill files in repo
- rules and workflows in repo docs

### Analytics
- PostHog or Firebase Analytics later if needed

---

## 3. Repo structure

```text
mission-control-ai/
  app/
    (dashboard)/
      page.tsx
      today/
        page.tsx
      projects/
        page.tsx
        [projectId]/
          page.tsx
      agents/
        page.tsx
      playbooks/
        page.tsx
        [playbookId]/
          page.tsx
      learning/
        page.tsx
      freelance/
        page.tsx
      decisions/
        page.tsx
      settings/
        page.tsx
    api/
      agent/
        run/route.ts
      weekly-review/route.ts
      proposals/route.ts
    login/
      page.tsx
    onboarding/
      page.tsx
    layout.tsx
    globals.css

  components/
    dashboard/
    agents/
    projects/
    playbooks/
    learning/
    freelance/
    ui/

  lib/
    auth/
    db/
    agents/
    memory/
    workflows/
    validators/
    utils/

  functions/
    src/
      agentRuns/
      decisionLogs/
      weeklyPlanning/
      playbooks/
      proposals/
      memory/
      index.ts

  firestore/
    firestore.rules
    firestore.indexes.json
    seed/

  agents/
    system/
      global-rules.md
      developer-mode.md
      founder-mode.md
      freelance-mode.md
      learning-mode.md
    prompts/
      execution-agent.md
      architect-agent.md
      builder-agent.md
      reviewer-agent.md
      founder-agent.md
      freelance-agent.md
      learning-agent.md
    output-contracts/

  skills/
    spec-mvp/
      SKILL.md
    plan-architecture/
      SKILL.md
    breakdown-feature/
      SKILL.md
    review-security/
      SKILL.md
    review-code-quality/
      SKILL.md
    generate-test-plan/
      SKILL.md
    draft-proposal/
      SKILL.md
    scope-project/
      SKILL.md
    weekly-review/
      SKILL.md
    teach-concept/
      SKILL.md

  docs/
  types/
  tests/

---

## 4. Antigravity build prompt pack

Below are modular prompts structured to produce clean outputs and avoid chaotic generation. Run them in the recommended phase order.

### Prompt 1: Frontend app shell and routing
You are building the V1 frontend shell for a web app called Mission Control AI.

**Context:**
Mission Control AI is a personal AI operating system for helping the user become a top-tier AI software developer, tech founder, and freelancer business owner.

**Tech stack:**
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

**Your task:**
Create the frontend application shell and route structure.

**Requirements:**
1. Build a clean, modern app shell with:
   - Left sidebar navigation on desktop
   - Top navigation bar
   - Responsive mobile layout with bottom navigation or collapsible menu
2. Create placeholder pages and route folders for:
   - Today, Projects, Project Detail, Agents, Playbooks, Learning, Freelance, Decisions, Settings, Login, Onboarding
3. Use a clean, professional UI style:
   - Minimal, high-clarity, dashboard-oriented, modern spacing.
4. Create reusable layout components:
   - AppSidebar, TopNav, PageHeader, EmptyState, StatusBadge, PriorityBadge.

### Prompt 2: Today dashboard implementation
Build the Today dashboard page for Mission Control AI.

**Goal:**
Create a responsive dashboard that gives the user instant clarity on what matters now.

**Sections required:**
1. Welcome header (greeting, mission, weekly focus, run agent)
2. Top 3 priorities card
3. Suggested next action card
4. Active projects panel
5. Current blockers panel
6. Weekly goals progress
7. Recent decisions/agent runs/freelance snapshot

**Requirements:**
- Use reusable card-based components.
- Make layout responsive and create realistic mock data.

### Prompt 3: Projects module frontend
Build the Projects list and detail pages.

**Requirements:**
- Filter bar (type, status, phase, sort, search).
- Table and card view toggle.
- Project detail tabs: Overview, Roadmap, Tasks, Architecture, Decisions, Agent Runs, Playbooks, Risks.
- Overview tab should show health, blockers, and recent activity.

### Prompt 4: Agents console frontend
Create a role-based AI workflow console.

**Layout:**
- Left side: Agent/Workflow/Project selectors, context tags, prompt input.
- Right side: Structured output renderer (cards), save actions bar (Create Tasks, Save Decision, etc.).

### Prompt 5: Remaining V1 pages
Build frontend for:
- Playbooks (Searchable grid)
- Learning Hub (Weak spots, topics, items)
- Freelance (Pipeline, leads, proposal CTA)
- Decisions (Table + detail drawer)
- Settings & Onboarding

### Prompt 6: Shared TypeScript schema layer
Create the shared TypeScript type system for Mission Control AI. Define entities: User, Goal, Project, Task, Decision, Playbook, Lead, Proposal, AgentRun, Memory. Include enums for statuses and priorities.

### Prompt 7: Zod validation schema pack
Create Zod schemas for all V1 entities and API requests (runAgent, createProject, etc.). Align strictly with TypeScript types.

### Prompt 8: Firestore data access layer
Implement the Firestore service layer with typed CRUD functions and query helpers for collections: users, goals, projects, tasks, decisions, playbooks, leads, proposals, agent_runs.

### Prompt 9: Firestore rules and indexes
Generate production-ready Firestore rules (single-user ownership) and `firestore.indexes.json`.

### Prompt 10: Agent orchestration backend
Implement the backend orchestration layer: context builder, memory loader, prompt resolver, model call abstraction, output validator, and run persistence. Support roles: Execution, Architect, Builder, Reviewer, Founder, Freelance, Learning.

### Prompt 11: API routes pack
Build authenticated API routes for: `/api/agent/run`, `/api/weekly-review`, `/api/proposals/create`, `/api/decisions/save`, `/api/projects/create`. Use Zod for validation.

### Prompt 12: Weekly review engine
Build backend logic to turn recent work (tasks, decisions, runs) into a focused next-week plan summary.

### Prompt 13: Proposal generation engine
Build the flow to turn a lead and notes into a structured proposal draft (problem summary, scope, deliverables, timeline, pricing).

### Prompt 14: Save actions system
Build utilities to map structured agent output into persistent Task, Decision, or Playbook records. Include UI for editing before saving.

### Prompt 15: Antigravity skills pack
Create `SKILL.md` files for: spec-mvp, plan-architecture, breakdown-feature, review-security, draft-proposal, weekly-review, teach-concept.

### Prompt 16: Agent prompt files pack
Create markdown prompt files for each agent role (execution, architect, etc.) and mode files (developer, founder, freelance).

### Prompt 17: Seed data
Generate realistic seed records for a sample user to make the UI feel live immediately.

### Prompt 18: Testing pack
Create unit and integration tests for Zod schemas, Firestore services, context builders, and API routes.

### Prompt 19: Full repo pass
Review the codebase for folder organization, naming consistency, and responsive layout quality.