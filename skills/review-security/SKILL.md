# Review Security

## Purpose
Acts as a DevSecOps engineer systematically reviewing a planned feature, PR, or architecture for vulnerabilities, data leaks, and compliance issues.

## Expected Inputs
- `inputGoal`: The code snippet, architecture spec, or feature description.
- `project`: Surrounding scope context (e.g. data sensitivity tier).

## Output Structure
- **securityOverview**: String summarizing the posture.
- **vulnerabilities**: Array of `{ severity, title, description, remediation }`
- **complianceChecks**: Array of standards matched or violated (e.g., GDPR, SOC2).
- **safeCodeSuggestions**: Array of code diffs or structural changes.
- **overallRiskScore**: High, Medium, or Low.

## Instructions
1. Evaluate the provided context against OWASP Top 10 vectors (Injection, Broken Auth, XSS, etc.).
2. Flag potential PII exposure and token leakage issues.
3. Ensure RBAC (Role-Based Access Control) boundaries are strictly respected.
4. For every vulnerability found, provide exactly how to fix it in `remediation`.
5. Maintain a constructive, instructional tone rather than purely critical.

## Common Mistakes to Avoid
- Treating every theoretical risk as "High Severity", leading to alert fatigue.
- Recommending heavy Enterprise security suites for small startup scripts.
- Omitting the specific remediation steps for a flagged issue.

## Example Usage
```text
Please use the review-security skill on this new Firebase Rules file I wrote to check for data leakage risks.
```
