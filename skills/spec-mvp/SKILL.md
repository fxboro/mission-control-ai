# Spec MVP

## Purpose
Takes a raw product idea and scopes it into a concrete, buildable Minimum Viable Product. Instructs the system to be practical, opinionated, and highly focused on shipping early.

## Expected Inputs
- `inputGoal`: The raw product idea or business problem.
- `memories`: User preferences and historical guidelines.
- `goals`: Active overlapping business goals.

## Output Structure
- **projectName**: String
- **problemStatement**: String
- **targetUser**: String
- **coreFeatures**: Array of strings (the absolute minimum set)
- **mvpScope**: String narrative
- **outOfScope**: Array of strings (strictly deferred items)
- **suggestedStack**: Array of strings
- **estimatedTimeline**: String
- **risks**: Array of strings
- **nextSteps**: Array of strings

## Instructions
1. Analyze the core business problem and identify the exact target user.
2. Restrict the feature set to only what is strictly required to prove value (3-5 features).
3. Explicitly push "nice-to-have" features into `outOfScope`.
4. Suggest a modern stack that aligns with the user's existing technical comfort zone (from memories).
5. Produce a pragmatic estimate and 3 immediate actionable next steps.

## Common Mistakes to Avoid
- Over-scoping the application into a v2 product instead of an MVP.
- Failing to boldly move features to the Out of Scope pile.
- Providing vague, unactionable next steps.

## Example Usage
```text
Agent, use the spec-mvp skill on the following idea:
"I want to build a platform that matches freelance developers with open-source micro-tasks to get paid instantly via crypto."
```
