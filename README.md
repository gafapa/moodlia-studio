# MoodlIA Studio

> Status: concept only. This repository does not contain an implementation.

MoodlIA Studio is a possible visual workspace for teachers and course designers who want to create, inspect, and manage Moodle courses through the MoodlIA plugin.

The idea is to provide a guided interface over the same canonical operations used by the MoodlIA CLI and MCP endpoint. Studio should not introduce a separate Moodle automation model or duplicate business logic already implemented by the plugin.

## Potential Scope

- Connect to a Moodle site with the MoodlIA plugin installed.
- Browse courses, sections, activities, question banks, and grading structures.
- Create and edit course structures through guided forms.
- Work with questions, quizzes, rubrics, marking guides, lessons, and workshops.
- Preview proposed changes before applying them to Moodle.
- Audit course readiness, completion settings, and publishing state.
- Optionally assist course planning and content drafting with AI.

## Product Principles

- Keep Moodle as the source of truth.
- Reuse the canonical MoodlIA operation contract.
- Require explicit confirmation for writes and destructive operations.
- Make generated or AI-assisted changes reviewable before publication.
- Preserve transport parity with the CLI and MCP interfaces.
- Avoid storing Moodle credentials or academic data unless a reviewed security design requires it.
- Design for accessibility and internationalization from the beginning.

## Relationship to Other Projects

- `moodlia-moodle-plugin` provides the Moodle-side operations.
- `moodlia-cli` provides the command-line workflow and current TypeScript client.
- `moodlia-skills` provides reusable agent workflows and portable-content guidance.
- `moodlia-website` would present Studio if it becomes an active product.

## Non-Goals

- Reusing the old Moodle application as the implementation baseline.
- Replacing Moodle's complete administration interface.
- Creating a second operation contract.
- Adding a backend before its need and security model are established.
- Starting development before the target users and initial workflows are validated.

## Before Implementation

Development should begin only after defining:

1. The primary user and the first complete workflow.
2. Whether Studio is a browser-only application or requires a backend.
3. Authentication, credential storage, and CORS handling.
4. The shared client boundary between Studio and `moodlia-cli`.
5. The minimum Moodle and MoodlIA plugin versions.
6. The security model for writes, destructive actions, files, and AI providers.
7. Acceptance tests against a disposable Moodle environment.

Until those decisions are made, this repository is intentionally limited to the product idea.

## Quality Checks

```bash
npm install
npm run check
```

The concept-boundary tests ensure that the implementation gates remain documented and that an application is not introduced accidentally before those decisions are complete.
