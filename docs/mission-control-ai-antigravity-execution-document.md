# Mission Control AI: Antigravity Execution Document

## 1. Purpose
This document is the single source of truth for building **Mission Control AI V1** in **Antigravity**.

It is designed to help you execute like a disciplined product team using:
- Antigravity as the primary IDE and agent workspace
- A modular build sequence
- Reusable skills
- Explicit rules and workflows
- Structured reviews and QA gates

The goal is to avoid chaotic AI-led generation and replace it with a controlled build system.

## 2. Product mission
**Mission Control AI** is a personal AI operating system that helps the user become:
- A top-tier AI software developer
- A sharper tech founder
- A stronger freelance business owner

It should help the user:
- Plan work clearly
- Build products faster
- Make better technical and product decisions
- Scope and win freelance work
- Learn from real execution

## 3. V1 definition
### In scope:
- Today dashboard
- Projects module
- Agents console
- Playbooks module
- Learning hub
- Freelance workspace
- Decisions log
- Settings + onboarding
- Structured data model
- Agent orchestration backend
- Save actions system
- Antigravity skills pack
- Rules and mode files

### Out of scope:
- Complex autonomy
- Full CRM depth
- Multi-user collaboration
- Heavy external automation
- Advanced vector memory systems
- Email/calendar execution

## 4. Core build principles
These principles apply to every build step.

### Product principles
- Prefer the smallest shippable version first.
- Separate V1 essentials from future ideas.
- Optimize for clarity, structure, and compounding reuse.
- Keep every screen useful, not decorative.

### Engineering principles
- Do not code before acceptance criteria are clear.
- Keep types strict and centralized.
- Validate inputs and structured outputs.
- Separate UI, orchestration, and persistence layers.
- Prefer reusable services over inline logic.

### Agent principles
- Always specify the goal, context, and output format.
- Use one focused prompt per module.
- Save reusable outputs as skills, prompts, or playbooks.
- Review every major generation pass before continuing.

## 5. Working mode inside Antigravity
Use Antigravity as a structured build cockpit, not just a code generator.

### Recommended workspace setup
Create one dedicated workspace: `mission-control-ai`

### Recommended repo structure:
- `/app`
- `/components`
- `/lib`
- `/functions`
- `/firestore`
- `/agents`
- `/skills`
- `/docs`
- `/tests`

### Recommended conversation lanes in Antigravity
Use separate conversations or threads for:
- Product planning
- Frontend implementation
- Backend implementation
- Review and refactor
- Skills and prompts
- QA and validation

### Recommended execution rhythm
For each module:
1. Define target outcome
2. Run focused prompt
3. Inspect generated output
4. Run review pass
5. Fix issues
6. Commit or checkpoint
7. Move to next module

## 6. Roles to simulate during execution
Even if you are building solo, you should operate as if these roles exist.

### Product lead
- Owns: Scope discipline, workflow quality, user value

### Frontend engineer
- Owns: Layout, UI clarity, responsive behavior, component system

### Backend engineer
- Owns: Data model, orchestration, validation, persistence

### AI systems engineer
- Owns: Prompt files, skills, output contracts, context loading

### QA reviewer
- Owns: Acceptance criteria checks, edge cases, consistency, regression prevention

## 7. Main build phases
The build should be executed in five phases.
1. Foundation
2. Core frontend experience
3. Backend and orchestration
4. Agent system and skills
5. QA, polish, and hardening

---

## 8. Phase 1 — Foundation

### Objective
Create the app skeleton, route structure, domain model, validation layer, and Firestore base.

### Success outcome
By the end of this phase you should have:
- A running Next.js app shell
- Key route scaffolding
- Strict TypeScript domain types
- Zod schemas
- Firestore service and security baseline

### Antigravity prompts to run
Run in this order:
1. Frontend app shell and routing
2. Shared TypeScript schema layer
3. Zod validation schema pack
4. Firestore data access layer
5. Firestore rules and indexes

### Expected outputs
- `app/` route scaffold complete
- Reusable layout components
- Typed domain models
- Entity validators
- Firebase init files
- CRUD service files
- `firestore.rules`
- `firestore.indexes.json`

### Acceptance criteria
- App boots cleanly.
- All routes render without crashing.
- Types compile.
- Zod schemas align with types.
- Firestore services are typed and modular.
- Rules enforce user ownership logic.

### QA checklist
- Are all domain types named consistently?
- Are route names clean and predictable?
- Are collection names consistent between types, services, and rules?
- Are validators strict enough for both frontend and backend use?
- Does the shell look credible, not placeholder-chaotic?

### Common mistakes to avoid
- Building pages with no shared layout system.
- Using loose `any` typing.
- Mixing UI mock types with real domain types.
- Overcomplicating Firestore rules too early.

---

## 9. Phase 2 — Core frontend experience

### Objective
Build the visible user-facing product structure with realistic mock data and reusable components.

### Success outcome
You should have a navigable V1 product with strong layout and meaningful page structure.

### Antigravity prompts to run
Run in this order:
1. Today dashboard implementation
2. Projects module frontend
3. Agents console frontend
4. Playbooks, Learning, Freelance, Decisions frontend

### Pages that must exist
- Today
- Projects list
- Project detail
- Agents console
- Playbooks list
- Playbook detail
- Learning
- Freelance
- Lead detail
- Proposal detail
- Decisions
- Settings
- Onboarding

### Expected outputs
- Responsive page layouts
- Reusable cards, tables, tabs, drawers, filters
- Typed mock data models
- Section-level components
- Strong empty states

### Acceptance criteria
- Every core page renders with believable structure.
- Mobile layout is usable.
- Page hierarchy is obvious.
- Components are reusable.
- Visual system is consistent.

### QA checklist
- Does each page have a clear primary action?
- Does each page show meaningful information instead of filler?
- Are empty states helpful?
- Is there a clear hierarchy on desktop and mobile?
- Can mock data be replaced later without rewriting components?

### Common mistakes to avoid
- Overdesigning dashboards with too many cards.
- Using inconsistent spacing across modules.
- Letting tabs become content dumps.
- Making the Agents page feel like a basic chatbot.

---

## 10. Phase 3 — Backend and orchestration

### Objective
Implement the backend flows that make the app operational: agent workflow execution, weekly review, proposal generation, and save actions.

### Success outcome
You should be able to submit structured agent requests, validate outputs, persist runs, and convert outputs into product objects.

### Antigravity prompts to run
Run in this order:
1. Agent orchestration backend
2. API routes pack
3. Weekly review engine
4. Proposal generation engine
5. Save actions system

### Key backend flows
- `runAgentWorkflow`
- `generateWeeklyPlan`
- `createProposalDraft`
- `saveDecisionFromRun`
- Save actions mapping and persistence

### Required capabilities
- Authenticated requests
- Context building
- Memory loading
- Project context loading
- Prompt template resolution
- Model call abstraction
- Output validation
- Persistence of agent runs
- Mapping of outputs to tasks, decisions, playbooks

### Expected outputs
- `/api/agent/run`
- `/api/weekly-review`
- `/api/proposals/create`
- `/api/decisions/save`
- Context builder utilities
- Output validators
- Save mapping utilities

### Acceptance criteria
- Agent runs can be created from the UI.
- Structured output is validated before save.
- Agent runs persist cleanly.
- Save actions create the correct object types.
- Weekly review produces a structured result.
- Proposal flow stores an editable proposal.

### QA checklist
- Is the model call isolated behind an adapter?
- Can invalid structured output be safely rejected?
- Are route responses consistent?
- Is user ownership enforced on every write?
- Can every saved artifact be traced back to its agent run?

### Common mistakes to avoid
- Coupling orchestration too tightly to one model provider.
- Persisting unvalidated AI output directly.
- Mixing save-action mapping logic inside route handlers.
- Letting API responses become inconsistent across endpoints.

---

## 11. Phase 4 — Agent system and skills

### Objective
Build the prompt system, rules files, mode files, and Antigravity skills library that make the product repeatable and compounding.

### Success outcome
You should have a reusable agent layer both inside the app and inside Antigravity.

### Antigravity prompts to run
Run in this order:
1. Antigravity skills folder pack
2. Agent prompt files pack

### Required agent prompt files
- `execution-agent`
- `architect-agent`
- `builder-agent`
- `reviewer-agent`
- `founder-agent`
- `freelance-agent`
- `learning-agent`

### Required rules and mode files
- `global-rules`
- `developer-mode`
- `founder-mode`
- `freelance-mode`
- `learning-mode`

### Required skills
- `spec-mvp`
- `plan-architecture`
- `breakdown-feature`
- `review-security`
- `review-code-quality`
- `generate-test-plan`
- `draft-proposal`
- `scope-project`
- `weekly-review`
- `teach-concept`

### Expected outputs
- Prompt files in `/agents/prompts`
- Rules files in `/agents/system`
- Skill folders in `/skills`
- `SKILL.md` for each skill
- Usage examples

### Acceptance criteria
- Every prompt has a clear role, rules, and output contract.
- Every skill is reusable and practical.
- Outputs align with the app’s save-action system.
- Rules files are sharp and non-generic.

### QA checklist
- Does every agent end with a next best action?
- Are prompt instructions consistent across roles?
- Do skills produce structured, reusable outputs?
- Are common mistakes documented in each skill?
- Are workflows aligned with the product’s core jobs?

### Common mistakes to avoid
- Bloated prompt files with vague instructions.
- Inconsistent output structures across skills.
- Skills that are too abstract to use in real project work.
- Duplication between global rules and agent rules.

---

## 12. Phase 5 — QA, polish, and hardening

### Objective
Stabilize the codebase, improve consistency, seed realistic data, and add test coverage.

### Success outcome
You should have a credible V1 that works coherently, is testable, and can be iterated without collapsing into mess.

### Antigravity prompts to run
Run in this order:
1. Seed data and local dev setup
2. Testing pack
3. Full repo pass for cleanup and consistency

### Expected outputs
- Realistic seed data
- Local dev seeding utility
- Unit and integration test scaffolding
- Improved folder consistency
- Reduced duplication
- Improved responsive layouts
- Fixed empty states and naming mismatches

### Acceptance criteria
- Seed data makes the app feel real immediately.
- Tests run for core flows.
- Naming and structure are consistent.
- Accessibility basics are acceptable.
- Major UI pages feel polished enough for internal use.

### QA checklist
- Can a new developer understand the repo quickly?
- Are the most important flows covered by tests?
- Are labels, names, statuses, and enums consistent in UI and backend?
- Are empty states and failure states handled cleanly?
- Does the app feel cohesive rather than stitched together?

### Common mistakes to avoid
- Leaving test coverage until too late.
- Skipping seed data and then misjudging the UI.
- Avoiding consistency cleanup because “it still works.”

---

## 13. Master prompt execution order
Run these in exactly this order unless a major issue forces a rollback.

### Phase 1
1. Frontend app shell and routing
2. Shared TypeScript schema layer
3. Zod validation schema pack
4. Firestore data access layer
5. Firestore rules and indexes

### Phase 2
6. Today dashboard implementation
7. Projects module frontend
8. Agents console frontend
9. Playbooks, Learning, Freelance, Decisions frontend

### Phase 3
10. Agent orchestration backend
11. API routes pack
12. Weekly review engine
13. Proposal generation engine
14. Save actions system

### Phase 4
15. Antigravity skills folder pack
16. Agent prompt files pack

### Phase 5
17. Seed data and local dev setup
18. Testing pack
19. Full repo pass for cleanup and consistency

---

## 14. Required review checkpoints
You should pause and review at these points.

### Checkpoint A — after Phase 1
- **Review:** Types, schemas, services, rules, repo shape.
- **Decision:** Is the foundation stable enough to continue?

### Checkpoint B — after Phase 2
- **Review:** Page structure, layout quality, responsiveness, component reuse.
- **Decision:** Does the app already feel like a usable product shell?

### Checkpoint C — after Phase 3
- **Review:** Orchestration quality, route consistency, validation, save actions.
- **Decision:** Is the core data + agent loop reliable?

### Checkpoint D — after Phase 4
- **Review:** Prompt sharpness, skill usefulness, rule consistency.
- **Decision:** Are the agent outputs repeatable and aligned with product needs?

### Checkpoint E — after Phase 5
- **Review:** Cohesion, core flow reliability, developer ergonomics, readiness for V1 usage.
- **Decision:** Is this ready for real weekly use?

---

## 15. Definition of Done
A module is only done when all of the following are true:
- Acceptance criteria are met.
- Code compiles.
- Naming is consistent.
- Types are strict.
- Empty states exist.
- Responsive layout exists.
- Save paths or primary actions are clear.
- Any AI outputs involved are validated.
- The module fits the repo structure cleanly.

## 16. Quality gates
These are non-negotiable.

### Gate 1 — Type safety
No loose typing in core domain logic.

### Gate 2 — Output validation
No structured AI output gets persisted without validation.

### Gate 3 — Ownership enforcement
Every data write must be scoped to the authenticated user.

### Gate 4 — UI consistency
Every page must use the shared layout and design patterns.

### Gate 5 — Reuse over duplication
If the same logic or UI pattern appears more than twice, extract it.

### Gate 6 — Actionability
Every core screen must clearly suggest what the user should do next.

## 17. Checkpoint strategy
Use small checkpoints after major milestones.
- `foundation-complete`
- `frontend-shell-complete`
- `projects-and-dashboard-complete`
- `agent-console-complete`
- `backend-orchestration-complete`
- `save-actions-complete`
- `skills-and-prompts-complete`
- `seed-and-tests-complete`
- `v1-internal-ready`

## 18. Daily execution template
Use this template each day before building.

### Daily plan
- What module am I working on today?
- What is the single concrete outcome I need by the end of the session?
- Which Antigravity prompt will I run?
- What must be reviewed before I move on?

### End-of-day review
- What was completed?
- What broke or caused friction?
- What should be standardized into a playbook or skill?
- What is tomorrow’s next best action?

## 19. Weekly execution template
At the end of each week:
- Review completed prompts.
- Review unfinished modules.
- Log major technical and product decisions.
- Create one improvement playbook from repeated friction.
- Identify one weak spot to strengthen next week.
- Choose next week’s top 3 priorities.

## 20. Antigravity usage rules
Use these rules during actual prompt execution.

### Prompting rules
- Never ask for the whole app in one prompt.
- Always define the target files/modules.
- Always specify stack and constraints.
- Always ask for maintainable structure, not just output.
- Always ask for reusable components/services.

### Review rules
- Run a review pass after every major generation.
- Compare generated code to acceptance criteria, not just aesthetics.
- Check for duplication and naming drift immediately.

### Skill extraction rules
Save a new skill when:
- You repeat a workflow twice.
- A prompt produced especially good output.
- A review pattern keeps recurring.

### Refactor rules
Refactor when:
- A component grows too large.
- Route handlers contain business logic.
- Orchestration leaks into UI.
- Types start fragmenting across folders.

## 21. High-risk areas to monitor
1. **Agents Console drift**: Becoming a generic chat interface. (Fix: Enforce structured workflows).
2. **Save actions complexity**: Unclear mapping from AI output to records. (Fix: Keep mapping utilities explicit).
3. **Prompt inconsistency**: Different agents returning incompatible structures. (Fix: Enforce output contracts).
4. **Frontend sprawl**: Too many unique components. (Fix: Standardize cards/tables).
5. **Memory confusion**: Mixing user preferences with patterns without confidence controls. (Fix: Separate memory types).

## 22. First real-world test scenario
Once V1 is built enough, test with one real workflow end to end.
1. Create project.
2. Define weekly goal.
3. Run Founder Agent on a product idea.
4. Save output as project notes.
5. Run Architect Agent.
6. Save one decision.
7. Run Builder Agent on one feature.
8. Save tasks.
9. Complete a weekly review.

## 23. Internal V1 launch criteria
- Today dashboard is genuinely useful.
- Projects and Decisions are stable.
- Agents Console supports real structured runs.
- Save actions work end to end.
- Playbooks are reusable.
- Learning/Freelance pages are functional.
- Seed data is realistic.
- Core flows have test coverage.
- The app feels cohesive.

## 24. Post-V1 roadmap
1. Use it on real work for 2-3 weeks.
2. Observe repeated friction.
3. Log missed expectations.
4. Improve the 3 most-used workflows first.
5. Only then consider deeper memory or automation.

## 25. Final build commandment
**Do not let Antigravity build this as a giant improvisation.**
Build Mission Control AI V1 like a disciplined internal product: phase by phase, module by module, prompt by prompt, and review by review.