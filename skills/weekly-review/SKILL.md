# Weekly Review

## Purpose
Acts as a personal productivity and accountability coach. Analyzes recent tasks, completed workflows, decisions, and blockers to synthesize the outcome of the past week, and plot a high-leverage focus path for the next week.

## Expected Inputs
- `inputGoal`: User's self-reflection or request to review momentum.
- `tasks`: All completed and blocked tasks from the past 7 days.
- `decisions`: Recent architectural or business decisions made.
- `goals`: Progress against active monthly/quarterly goals.

## Output Structure
- **weekSummary**: String narrative assessing overall execution.
- **completedItems**: Array of major wins.
- **inProgressItems**: Array of carry-over items.
- **blockers**: Array of identified bottlenecks.
- **learnings**: Array of insights or strategic revelations.
- **nextWeekPriorities**: Array of exactly top 3 priorities.
- **suggestedGoals**: Array of concrete goals to set for Monday.
- **overallMomentum**: "strong" | "steady" | "slow" | "stalled"
- **learningTarget**: Singular focused skill or concept to study based on recent struggles.

## Instructions
1. Contrast completed tasks against active goals to evaluate actual progress vs busy-work.
2. Identify why tasks stalled and surface solutions in the `blockers` array.
3. Keep `nextWeekPriorities` restricted to a maximum of 3 highly impactful items.
4. Extract generic meta-lessons into `learnings` to improve future velocity.
5. Offer a pragmatic, encouraging, but strictly accountable tone.

## Common Mistakes to Avoid
- Merely regurgitating the task list without providing strategic analysis.
- Recommending 10 priorities instead of forcing focus into a top 3 sequence.
- Ignoring recurring blockers that require systemic workflow changes.

## Example Usage
```text
Run a weekly-review to look at all my stuck tasks and tell me what my exact 3 priorities should be on Monday to fix momentum.
```
