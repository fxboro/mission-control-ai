# Wireframes

## 1. Global app shell

### Purpose
Provide a consistent layout across the app.

### Desktop structure

┌─────────────────────────────────────────────────────────────────────┐
│ Top bar: Logo | Search | Quick Add | Run Agent | Notifications     │
├───────────────┬─────────────────────────────────────────────────────┤
│ Left sidebar  │ Main content area                                  │
│               │                                                     │
│ - Today       │                                                     │
│ - Projects    │                                                     │
│ - Agents      │                                                     │
│ - Playbooks   │                                                     │
│ - Learning    │                                                     │
│ - Freelance   │                                                     │
│ - Decisions   │                                                     │
│ - Settings    │                                                     │
│               │                                                     │
└───────────────┴─────────────────────────────────────────────────────┘

### Sidebar nav items
- Today
- Projects
- Agents
- Playbooks
- Learning
- Freelance
- Decisions
- Settings

### Top bar actions
- Search
- Quick Add
- Run Agent
- Profile menu

### Global components
- AppSidebar
- TopNav
- SearchCommand
- QuickCreateMenu
- RunAgentButton

### Mobile structure

┌─────────────────────────────┐
│ Top bar: Logo | Search | +  │
├─────────────────────────────┤
│ Main content                │
│                             │
├─────────────────────────────┤
│ Bottom nav                  │
│ Today | Projects | Agents   │
│ More                        │
└─────────────────────────────┘

## 2. Today dashboard

### Purpose
Give instant clarity on what matters right now.

### Primary actions
- View today’s priorities
- Jump into current project
- Run suggested workflow
- See blockers
- Review recent agent outputs

### Desktop layout

┌─────────────────────────────────────────────────────────────────────┐
│ Header: Good morning, Chima                                         │
│ Mission summary | Weekly focus | Run Agent                          │
├───────────────────────────────┬─────────────────────────────────────┤
│ Top 3 Priorities              │ Suggested Next Action               │
│ 1. ...                        │ Recommended workflow                │
│ 2. ...                        │ CTA: Run workflow                   │
│ 3. ...                        │                                     │
├───────────────────────────────┼─────────────────────────────────────┤
│ Active Projects               │ Current Blockers                    │
│ Project cards                 │ blocker cards                       │
├───────────────────────────────┼─────────────────────────────────────┤
│ Weekly Goals                  │ Recent Decisions                    │
│ progress bars                 │ latest 3 decisions                  │
├───────────────────────────────┼─────────────────────────────────────┤
│ Learning Focus                │ Freelance Snapshot                  │
│ current topic                 │ leads, proposals, follow-ups        │
├────────────────────────────────────────────────────────────────┤
│ Recent Agent Runs                                                  │
└────────────────────────────────────────────────────────────────────┘

### Sections
1. Header strip
2. Top 3 priorities
3. Suggested next action
4. Active projects
5. Blockers
6. Weekly goals
7. Recent decisions
8. Learning focus
9. Freelance snapshot
10. Recent agent runs

### Components
1. WelcomeHeader
2. TopPrioritiesCard
3. SuggestedActionCard
4. ProjectMiniCard
5. BlockerList
6. GoalProgressCard
7. RecentDecisionsList
8. LearningFocusCard
9. FreelanceSnapshotCard
10. RecentAgentRunsTable

### Empty state
- You do not have any active projects yet.
- Create your first project or run the Founder Agent to turn an idea into an MVP spec.
- [Create Project] [Run Founder Agent]

### Mobile notes
Stack sections vertically in this order:
1. Suggested action
2. Top priorities
3. Active projects
4. Blockers
5. Goals
6. Decisions
7. Learning
8. Freelance
9. Recent runs

## 3. Projects list page

### Purpose
Manage all projects across product, freelance, learning, and internal work.

### Primary actions
- Create project
- Filter projects
- Open a project
- Sort by status/priority/update date

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Projects                                            [+ New Project] │
│ Filters: Type | Status | Phase | Sort | Search                      │
├─────────────────────────────────────────────────────────────────────┤
│ Table / card view toggle                                            │
├─────────────────────────────────────────────────────────────────────┤
│ Name       Type       Status     Phase     Next Milestone   Risk    │
│ ------------------------------------------------------------------  │
│ Mission... Product    Active     Build     Agent Console    Medium  │
│ Client ... Freelance  Active     Spec      Proposal Draft   High    │
│ ...                                                                 │
└─────────────────────────────────────────────────────────────────────┘

### Components
- PageHeader
- ProjectFiltersBar
- ProjectTable
- ProjectCardGrid
- CreateProjectDialog

### Project table columns
- Name
- Type
- Status
- Phase
- Current focus
- Next milestone
- Risk
- Updated at

### Empty state
- No projects yet.
- Projects are where your ideas, freelance work, and learning missions live.
- [Create first project]

## 4. Create project modal / page

### Purpose
Create a new project with enough structure to be useful immediately.

### Fields
- Project name
- Type
- Summary
- Target user
- Problem
- Current phase
- Stack
- Current focus
- Next milestone

### Wireframe
┌──────────────────────────────────────────┐
│ Create Project                           │
├──────────────────────────────────────────┤
│ Name                                     │
│ Type: Product / Freelance / Learning     │
│ Summary                                  │
│ Target user                              │
│ Problem                                  │
│ Phase                                    │
│ Stack                                    │
│ Current focus                            │
│ Next milestone                           │
│                                          │
│ [Cancel]                 [Create Project]│
└──────────────────────────────────────────┘

## 5. Project detail page

### Purpose
Serve as the operating center for one project.

### Primary actions
- Review current project state
- Inspect roadmap
- Manage tasks
- Review architecture and decisions
- Run agents in project context

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Project: Mission Control AI                                         │
│ Type: Product | Status: Active | Phase: Build | Run Agent           │
├─────────────────────────────────────────────────────────────────────┤
│ Summary                                                             │
│ Goal | Current focus | Next milestone | Risk summary                │
├─────────────────────────────────────────────────────────────────────┤
│ Tabs: Overview | Roadmap | Tasks | Architecture | Decisions         │
│       Agent Runs | Playbooks | Risks                                │
├─────────────────────────────────────────────────────────────────────┤
│ Tab content area                                                    │
└─────────────────────────────────────────────────────────────────────┘

### Overview tab
┌───────────────────────────────┬─────────────────────────────────────┐
│ Project health                │ Current blockers                    │
│ milestone status              │ blocker list                        │
├───────────────────────────────┼─────────────────────────────────────┤
│ Linked goals                  │ Last agent output                   │
│ goal list                     │ summary + CTA                       │
├───────────────────────────────┼─────────────────────────────────────┤
│ Recent tasks                  │ Recent decisions                    │
└───────────────────────────────┴─────────────────────────────────────┘

### Roadmap tab
- Milestone list
- Phase breakdown
- Upcoming work

### Tasks tab
- Kanban or table
- Filter by type/status/priority

### Architecture tab
- Architecture notes
- Module cards
- Schema notes
- Risks
- Technical decisions

### Decisions tab
- Decision table
- Decision details drawer

### Agent Runs tab
- List of project-linked runs
- Open output detail
- Save as playbook

### Playbooks tab
- Linked playbooks to reuse for this project

### Risks tab
- Product risks
- Technical risks
- Business risks

## 6. Tasks panel / tasks page

### Purpose
Track execution clearly without becoming a giant project management app.

### View options
- List view
- Kanban view

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Tasks                                             [+ Add Task]       │
│ Filters: Project | Status | Priority | Type | Assignee: Me          │
├─────────────────────────────────────────────────────────────────────┤
│ Todo           In Progress         Blocked          Done             │
│ [task card]    [task card]         [task card]      [task card]     │
│ [task card]                                                     ... │
└─────────────────────────────────────────────────────────────────────┘

### Task card fields
- Title
- Project
- Task type
- Linked workflow
- Priority
- Due date
- Status

## 7. Agents console page

### Purpose
Run role-based workflows and save useful outputs.

### Primary actions
- Choose agent
- Choose workflow
- Provide input
- Review output
- Save output into system records

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Agents Console                                                      │
├───────────────────────────────┬─────────────────────────────────────┤
│ Left panel                    │ Right panel                         │
│                               │                                     │
│ Agent selector                │ Structured output                   │
│ Workflow selector             │                                     │
│ Project selector              │ Sections rendered as cards          │
│ Input form                    │                                     │
│                               │                                     │
│ [Run Agent]                   │ Save actions:                       │
│                               │ [Create Tasks] [Save Decision]      │
│                               │ [Save Playbook] [Attach to Project] │
└───────────────────────────────┴─────────────────────────────────────┘

### Left panel fields
- Agent type
- Workflow type
- Linked project
- Optional lead
- Goal / prompt textarea
- Context tags
- Run button

### Right panel sections
- Output header
- Structured output sections
- Next best action
- Save actions bar

### Empty state
- Pick an agent and workflow to begin.
- Recommended: Founder Agent → Idea to MVP

## 8. Agent run detail page / drawer

### Purpose
Review a single run in detail and convert output into persistent artifacts.

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Agent Run: Architect Agent | MVP to Technical Plan                  │
│ Date | Linked project | Run again                                   │
├─────────────────────────────────────────────────────────────────────┤
│ Input Summary                                                        │
├─────────────────────────────────────────────────────────────────────┤
│ Output sections                                                     │
│ - Goal                                                              │
│ - Assumptions                                                       │
│ - Architecture                                                      │
│ - Risks                                                             │
│ - Next best action                                                  │
├─────────────────────────────────────────────────────────────────────┤
│ Save Actions                                                        │
│ [Create Tasks] [Save Decision] [Save Playbook]                      │
└─────────────────────────────────────────────────────────────────────┘

## 9. Playbooks list page

### Purpose
Store and rerun your best repeatable workflows.

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Playbooks                                           [+ New Playbook] │
│ Search | Category filter | Tag filter                               │
├─────────────────────────────────────────────────────────────────────┤
│ Card grid                                                            │
│ ┌────────────────────┐  ┌────────────────────┐                      │
│ │ MVP Scoping        │  │ Proposal Drafting  │                      │
│ │ Category: Product  │  │ Category: Freelance│                      │
│ │ Tags: MVP, founder │  │ Tags: client, scope│                      │
│ │ [Run] [Open]       │  │ [Run] [Open]       │                      │
│ └────────────────────┘  └────────────────────┘                      │
└─────────────────────────────────────────────────────────────────────┘

### Card fields
- Title
- Category
- Summary
- Tags
- Last used
- Run/open actions

### Empty state
- No playbooks saved yet.
- When you find a workflow worth repeating, save it here.

## 10. Playbook detail page

### Purpose
Display one reusable workflow clearly.

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Playbook: MVP Scoping                                               │
│ Category: Product | Tags: founder, validation | [Run Playbook]      │
├─────────────────────────────────────────────────────────────────────┤
│ Summary                                                             │
├─────────────────────────────────────────────────────────────────────┤
│ Steps                                                               │
│ 1. Define target user                                               │
│ 2. Clarify pain                                                     │
│ 3. Limit MVP scope                                                  │
│ ...                                                                 │
├─────────────────────────────────────────────────────────────────────┤
│ Checklist                                                           │
├─────────────────────────────────────────────────────────────────────┤
│ Reusable prompt                                                     │
└─────────────────────────────────────────────────────────────────────┘

## 11. Learning hub page

### Purpose
Turn real project work into deliberate improvement.

### Primary actions
- Review weak spots
- Pick next topic
- See project-linked learning items
- Mark items as applied/mastered

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Learning Hub                                                        │
├───────────────────────────────┬─────────────────────────────────────┤
│ Current weak spots            │ Current study sprint                │
│ - auth flows                  │ Topic + exercise                    │
│ - testing discipline          │                                     │
├───────────────────────────────┼─────────────────────────────────────┤
│ Recommended next topics       │ Apply in current project            │
├───────────────────────────────┼─────────────────────────────────────┤
│ Learning items list                                                 │
└─────────────────────────────────────────────────────────────────────┘

### Sections
- Weak spots
- Study sprint
- Recommended topics
- Apply-it-now
- Learning items table

### Empty state
- No learning items yet.
- Run a Weekly Review or Learning Agent session to generate your first learning targets.

## 12. Freelance workspace page

### Purpose
Help you move from lead to scoped, profitable work.

### Primary actions
- View pipeline
- Create or update lead
- Generate proposal
- Review service templates

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Freelance Workspace                              [+ New Lead]        │
├─────────────────────────────────────────────────────────────────────┤
│ Pipeline summary: New | Qualified | Proposal Sent | Won | Lost      │
├───────────────────────────────┬─────────────────────────────────────┤
│ Lead list                     │ Selected lead detail                │
│                               │ business, pain, notes              │
│                               │ [Run Freelance Agent]              │
│                               │ [Create Proposal]                  │
├───────────────────────────────┴─────────────────────────────────────┤
│ Service templates / offer cards                                    │
└─────────────────────────────────────────────────────────────────────┘

### Lead list columns
- Business
- Niche
- Status
- Urgency
- Budget signal
- Last updated

### Service templates
- AI workflow audit
- MVP build sprint
- Automation setup package
- Product strategy workshop

## 13. Lead detail page / drawer

### Purpose
Inspect one opportunity deeply.

### Fields
- Business name
- Contact name
- Niche
- Source
- Pain point
- Urgency
- Budget signal
- Notes
- Proposal history

### Actions
- Qualify lead
- Run Freelance Agent
- Create proposal draft
- Mark won/lost

## 14. Proposal detail page

### Purpose
Review and refine a proposal draft.

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Proposal: AI Intake Workflow for Wellness Studio                    │
│ Lead: Podea Demo Lead | Status: Draft                               │
├─────────────────────────────────────────────────────────────────────┤
│ Problem summary                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ Recommended scope                                                   │
├─────────────────────────────────────────────────────────────────────┤
│ Deliverables                                                        │
├─────────────────────────────────────────────────────────────────────┤
│ Timeline                                                            │
├─────────────────────────────────────────────────────────────────────┤
│ Pricing logic                                                       │
├─────────────────────────────────────────────────────────────────────┤
│ Assumptions / risks                                                 │
├─────────────────────────────────────────────────────────────────────┤
│ [Edit] [Duplicate] [Export]                                         │
└─────────────────────────────────────────────────────────────────────┘

## 15. Decisions page

### Purpose
Store important technical and business choices so context does not vanish.

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Decisions                                          [+ Log Decision]  │
│ Filters: Project | Type | Date | Review due                         │
├─────────────────────────────────────────────────────────────────────┤
│ Date       Title              Project        Tradeoff     Review     │
│ ------------------------------------------------------------------  │
│ 25 Mar     Use Firebase Auth  Mission Ctrl   Speed vs...  20 Apr     │
│ ...                                                                 │
└─────────────────────────────────────────────────────────────────────┘

### Decision detail drawer
- Title
- Context
- Options considered
- Selected option
- Rationale
- Tradeoffs
- Risks
- Review date

### Empty state
- No decisions logged yet.
- Good products get stronger when decisions are explicit and reviewable.

## 16. Settings page

### Purpose
Configure identity memory, preferences, and operating rules.

### Sections
- Profile
- Mission
- Preferred stack
- Weekly capacity
- Business focus
- Growth focus
- Default agent behavior
- Integrations
- Data controls

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Settings                                                            │
├─────────────────────────────────────────────────────────────────────┤
│ Profile                                                             │
│ Mission                                                             │
│ Preferred Stack                                                     │
│ Weekly Capacity                                                     │
│ Business Focus                                                      │
│ Growth Focus                                                        │
│ Agent Preferences                                                   │
│ Integrations                                                        │
└─────────────────────────────────────────────────────────────────────┘

## 17. Onboarding page

### Purpose
Capture the minimum identity memory needed for useful outputs.

### Fields
- Name
- Mission statement
- Preferred stack
- Current goals
- Weekly available hours
- Business focus
- Growth focus
- Primary mode: builder / founder / freelancer / hybrid

### Wireframe
┌─────────────────────────────────────────────────────────────────────┐
│ Welcome to Mission Control AI                                       │
│ Let’s set up your operating profile.                                │
├─────────────────────────────────────────────────────────────────────┤
│ Name                                                                │
│ Mission                                                             │
│ Preferred stack                                                     │
│ Weekly capacity                                                     │
│ Business focus                                                      │
│ Growth focus                                                        │
│ Current mode                                                        │
│                                                                     │
│ [Continue]                                                          │
└─────────────────────────────────────────────────────────────────────┘
