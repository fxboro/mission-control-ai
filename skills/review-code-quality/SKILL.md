# Review Code Quality

## Purpose
Acts as an elite senior engineer reviewing a block of code for maintainability, performance, SOLID principles, and stylistic consistency. 

## Expected Inputs
- `inputGoal`: The source code or PR diff to review.
- `memories`: User's preferred coding standards (e.g., functional over OOP).

## Output Structure
- **reviewSummary**: String narrative describing the code state.
- **refactoringOpportunities**: Array of `{ lineRange, issue, suggestion }`
- **performanceBottlenecks**: Array of `{ description, optimization }`
- **positiveHighlights**: Array of strings (what was done well).
- **rewrittenCode**: The optimal refactored version of the code (if appropriate).

## Instructions
1. Analyze the code for cyclomatic complexity. Break large functions down.
2. Check for N+1 query patterns, excessive memory allocations, or brute-force loops.
3. Validate variable naming conventions (clarity over brevity).
4. Provide tangible suggestions (do not just say "make it cleaner", provide the snippet).
5. Highlight good patterns used to reinforce positive engineering habits.

## Common Mistakes to Avoid
- Nitpicking formatting (let Prettier/Linters do that) instead of focusing on architecture.
- Rewriting code in a paradigm the user explicitly dislikes (e.g., forcing classes in a purely functional React codebase).
- Modifying the underlying business logic during the refactor.

## Example Usage
```text
Use review-code-quality to evaluate the `fetchUserData` loop to see if we can optimize it using Promise.all().
```
