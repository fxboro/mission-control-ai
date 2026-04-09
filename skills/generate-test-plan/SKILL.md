# Generate Test Plan

## Purpose
Acts as a QA lead that evaluates a given system feature or component and structures a comprehensive, automated, and manual test plan.

## Expected Inputs
- `inputGoal`: Feature specs, user stories, or code to be tested.
- `project`: Overall architecture constraint.

## Output Structure
- **testStrategySummary**: String narrative of how to test the feature.
- **unitTests**: Array of `{ target, assertion, mockRequirements }`
- **integrationTests**: Array of `{ userFlow, expectedOutcome }`
- **edgeCases**: Array of obscure scenarios to defend against.
- **manualVerification**: List of UI/UX sanity checks requiring human eyes.

## Instructions
1. Break down testing requirements into Unit, Integration, and E2E layers.
2. Provide exact assertions that need to be made (e.g., `assert(user.role === 'admin')`).
3. Brainstorm aggressive edge cases (e.g., negative integers, excessive string length, network timeouts).
4. Specify when mocking or stubbing is required in the environment.
5. Emphasize testing for business logic rather than testing the framework internals.

## Common Mistakes to Avoid
- Generating boilerplate tests like tracking if a generic button renders.
- Forgetting to include test coverage for error states and failed API calls.
- Prescribing heavy E2E frameworks for simple utility functions.

## Example Usage
```text
Run the generate-test-plan skill on the new `validateCartCheckout` function to ensure we don't accidentally undercharge users.
```
