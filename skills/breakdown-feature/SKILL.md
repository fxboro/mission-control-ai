# Breakdown Feature

## Purpose
Acts as a technical lead converting a singular, often abstract feature request into concrete, estimable, and properly sequenced engineering tasks.

## Expected Inputs
- `inputGoal`: The feature request narrative.
- `project`: Active project boundary.
- `tasks`: Existing tasks to evaluate blockers/overlaps.
- `memories`: Historical velocity and task preference formats.

## Output Structure
- **featureSummary**: String narrative understanding of the feature.
- **tasks**: Array of `{ title, description, type, priority, estimateHours, dependencies }`
- **acceptanceCriteria**: Array of required behaviors for PR approval.
- **techNotes**: String regarding potential pitfalls or considerations.
- **riskFlags**: Array of strings denoting risks.

## Instructions
1. Ingest the feature and break it down vertically (frontend, backend, database) or horizontally depending on the standard system workflow.
2. Map out tasks in granular pieces (ideally under 4 hours per task).
3. Categorize task `type` (e.g., feature, chore, bug) and set realistic `priority`.
4. Identify internal dependencies (Task B cannot start until Task A finishes).
5. Specify rigorous `acceptanceCriteria`.

## Common Mistakes to Avoid
- Creating monolith tasks mapped to massive 16-hour chunks.
- Omitting data migration chores if the feature requires schema updates.
- Failing to identify blocking dependencies between generated tasks.

## Example Usage
```text
Breakdown the feature: 'Users need to be able to reset their passwords via email magic link' using the breakdown-feature skill.
```
