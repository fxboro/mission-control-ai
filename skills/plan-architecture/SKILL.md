# Plan Architecture

## Purpose
Takes an MVP specification or feature set and produces a detailed technical architecture report. Focuses on pragmatic scalability, developer experience, and clear technical tradeoffs.

## Expected Inputs
- `inputGoal`: High-level feature request or core system need.
- `project`: Current project phase, tech stack, and scope constraints.
- `tasks`: Existing technical tasks to avoid duplication.
- `memories`: User technical preferences and team guidelines.

## Output Structure
- **architectureOverview**: String narrative
- **components**: Array of `{ name, responsibility, techChoice }`
- **dataModel**: Array of `{ entity, fields, relationships }`
- **apiEndpoints**: Array of `{ method, path, description }`
- **deploymentStrategy**: String narrative
- **techDecisions**: Array of `{ decision, rationale, alternatives }`
- **implementationOrder**: Array of strings defining sequence
- **risks**: Array of technical risks

## Instructions
1. Construct a comprehensive system architecture overview using modern conventions.
2. Outline the exact data schema including relations (e.g., 1:N, N:N).
3. Specify API boundaries clearly using RESTful standards (or GraphQL if specified in stack).
4. For every major technical choice, document the rationale and at least one rejected alternative.
5. Formulate a strictly ordered implementation sequence prioritizing foundational logic first (e.g., schema -> auth -> core endpoints -> UI).

## Common Mistakes to Avoid
- Designing microservices for a project that clearly benefits from a monolith MVP.
- Leaving API definitions ambiguous or without HTTP verbs.
- Providing an unstructured deployment strategy.

## Example Usage
```text
Execute plan-architecture for the new real-time collaboration feature in Project Alpha.
```
