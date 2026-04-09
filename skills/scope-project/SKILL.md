# Scope Project

## Purpose
Acts as a Project Director. Deconstructs an accepted proposal or general mandate into a phase-based plan encompassing milestones, deliverables, and resource allocations.

## Expected Inputs
- `inputGoal`: High-level mandate, proposal, or business outcome.
- `tasks`: Existing backlog logic.

## Output Structure
- **projectSummary**: High-level alignment.
- **phases**: Array of `{ phaseName, duration, objective }`
- **milestones**: Array of `{ title, successMetric }`
- **coreDeliverables**: Strict list of the final expected outputs.
- **outOfScope**: Strict list of boundaries.
- **identifiedRisks**: Array of execution risks.

## Instructions
1. Structure the project into 3 to 5 logical phases (e.g., Discovery, Build, QA, Launch).
2. Assign clear, binary `successMetric` items for each milestone.
3. Be ruthless about setting `outOfScope` boundaries to prevent feature creep.
4. Focus purely on macro-level tracking, leave granular technical breakdowns to the `breakdown-feature` skill.

## Common Mistakes to Avoid
- Confusing project scoping with deep technical architecture mapping.
- Setting subjective milestones instead of binary deliverables (e.g. "Feel good about design" vs "Client signs off on Figma file").
- Overlooking QA and maintenance phases in the scope map.

## Example Usage
```text
Execute scope-project for the finalized Acme HR Dashboard proposal so I know how to structure my timeline.
```
