# Mission Control AI — Global Rules

These rules apply across the entire Mission Control AI workspace.

They are the default operating constraints for all Antigravity-assisted planning, implementation, review, refactoring, and content generation in this project.

The goal of these rules is to keep the build:
- structured
- maintainable
- focused on V1 scope
- safe from chaotic overgeneration
- aligned with the product vision

---

## 1. Core mission

Mission Control AI is a personal AI operating system for helping the user become:
- a top-tier AI software developer
- a sharper tech founder
- a stronger freelance business owner

Every output in this workspace should support at least one of these outcomes:
- better execution
- better decision-making
- better product building
- better freelance/business operations
- better learning from real work

---

## 2. Product scope discipline

Always build for **V1 first**.

### Always do
- prefer the smallest shippable version
- separate V1 from future ideas
- keep workflows narrow and useful
- focus on clarity, structure, and practical utility
- preserve the product’s role-based design

### Never do
- do not add speculative enterprise features
- do not add multi-user collaboration unless explicitly requested
- do not add deep autonomy or agent self-direction unless explicitly requested
- do not expand the freelance workspace into a full CRM
- do not introduce unnecessary infrastructure complexity

When unsure, choose the simpler V1 option.

---

## 3. Source-of-truth files

These files are the primary build references for this project:

- `/docs/01-execution-document.md`
- `/docs/02-product-blueprint.md`
- `/docs/03-technical-implementation-pack.md`
- `/docs/04-wireframes.md`

### Rule
Before making major product, UI, architecture, or workflow decisions:
- read the relevant docs
- align implementation with those docs
- do not invent a conflicting product direction

If there is ambiguity:
- preserve the execution order from the execution document
- preserve the product shape from the blueprint
- preserve the structure from the implementation pack
- preserve the page hierarchy from the wireframes

---

## 4. UI and frontend rules

### Layout and structure
- use `/docs/04-wireframes.md` as the layout source of truth
- preserve page purpose and section hierarchy
- keep primary actions obvious
- keep pages structured, not decorative
- use reusable UI components

### Component rules
- prefer reusable cards, tables, tabs, drawers, badges, and detail panels
- extract shared UI patterns when used more than twice
- keep components small and composable
- avoid one-off UI patterns unless there is a strong reason

### Styling rules
- use a clean, professional, modern builder-oriented visual style
- prioritize readability and hierarchy over visual noise
- keep spacing and typography consistent
- optimize for dashboard clarity and focused execution

### Responsive rules
- every major screen must have a reasonable mobile layout
- do not treat mobile as an afterthought
- stack dense desktop layouts into clear vertical flows on smaller screens

### Never do
- do not turn pages into generic dashboards
- do not overload pages with too many cards or metrics
- do not replace structured UI with giant text blocks
- do not introduce inconsistent spacing or visual language between modules

---

## 5. Engineering rules

### Code quality
- keep code modular and maintainable
- prefer clarity over cleverness
- use strict TypeScript
- avoid `any` in core domain and orchestration logic
- keep naming consistent across UI, services, validators, and data models

### Architecture
- separate UI, business logic, orchestration, and persistence
- do not bury business logic inside route handlers
- do not bury orchestration logic inside UI components
- prefer service modules and utilities for reusable logic
- isolate vendor-specific integrations behind adapters or interfaces where practical

### Validation
- validate all important inputs
- validate all structured AI outputs before saving them
- use Zod for request and output validation
- do not persist unvalidated structured outputs

### Refactoring
Refactor when:
- a component becomes too large
- a route handler contains business logic
- the same logic appears more than twice
- a module becomes hard to reason about
- naming drift starts to appear

---

## 6. Data and security rules

### Ownership
Mission Control AI V1 uses a single-user ownership model.

Every read/write must respect:
- authenticated access only
- user-owned document access only
- `userId === auth.uid` ownership validation on write operations where relevant

### Security
- keep secrets server-side only
- do not expose sensitive configuration in the client
- keep security rules strict but V1-appropriate
- prefer explicit ownership validation over vague assumptions

### Data modeling
- keep the Firestore schema clean and explicit
- use consistent collection names
- keep enums and status names consistent
- avoid premature normalization complexity unless clearly justified

### Never do
- do not store structured data in vague free-text blobs if it belongs in a typed entity
- do not write loose ownership checks
- do not save AI-generated objects directly without validation and reviewability

---

## 7. Agent and workflow rules

Mission Control AI is built around role-based agents.

### Agent rules
Every agent output should:
- stay within the assigned role
- follow a structured output contract
- include assumptions where relevant
- explain tradeoffs where relevant
- end with a clear **next best action**

### Workflow rules
- each workflow should map to a real user job
- workflows must produce actionable output
- outputs should be saveable into tasks, decisions, playbooks, or project records where relevant
- avoid vague inspirational outputs

### Save-action rules
When an output is suitable for saving:
- map it into structured records
- let the user review and edit before save where appropriate
- maintain traceability back to the originating agent run

### Never do
- do not let the Agents Console degrade into a generic chatbot
- do not use inconsistent output shapes across similar workflows
- do not produce outputs that cannot be acted upon

---

## 8. Prompting rules for Antigravity work

### Always do
- work one module at a time
- define the target outcome clearly
- specify relevant files or folders
- specify tech stack and constraints
- ask for maintainable structure, not just raw output
- ask for reusable components and services
- request a summary of files created or changed

### Never do
- do not attempt to generate the entire app in one pass
- do not use giant vague prompts with no boundaries
- do not skip review after major code generation
- do not move to later phases before current-phase acceptance criteria are met

---

## 9. Review and QA rules

After every major generation step:
- inspect the produced file structure
- compare output to acceptance criteria
- check for duplication
- check type consistency
- check naming consistency
- check responsive behavior if UI changed
- check empty states if page flows changed

### Review priorities
1. correctness
2. structure
3. maintainability
4. consistency
5. polish

### Never do
- do not judge outputs by appearance alone
- do not continue building on a shaky foundation
- do not ignore naming drift or duplicated logic

---

## 10. Documentation rules

- keep docs up to date when major structural changes are made
- document meaningful architecture decisions
- keep rule, prompt, and skill files readable and sharp
- prefer concise but useful documentation over bloated internal prose

When a reusable pattern emerges:
- save it as a playbook, skill, prompt improvement, or documented workflow

---

## 11. V1 quality gates

These are non-negotiable.

### Gate 1 — Type safety
No loose typing in core product logic.

### Gate 2 — Output validation
No structured AI output gets persisted without validation.

### Gate 3 — Ownership enforcement
Every data write must be scoped to the authenticated user.

### Gate 4 — UI consistency
Every page must use the shared layout and design system.

### Gate 5 — Reuse over duplication
If the same pattern appears more than twice, extract it.

### Gate 6 — Actionability
Every core screen and core workflow must clearly suggest what the user should do next.

---

## 12. Final rule

Do not build Mission Control AI as a giant improvisation.

Build it like a disciplined internal product:
- phase by phase
- screen by screen
- workflow by workflow
- review by review
- with structure, validation, and reuse at every step
