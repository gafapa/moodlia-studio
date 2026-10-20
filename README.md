# MoodlIA Studio

MoodlIA Studio is a possible visual workspace for teachers and course designers who want to create, inspect, and manage Moodle courses through the MoodlIA plugin.

The idea is to provide a guided interface over the same canonical operations used by the MoodlIA CLI and MCP endpoint. Studio should not introduce a separate Moodle automation model or duplicate business logic already implemented by the plugin.

[Status](#status) · [Getting started](#getting-started) · [Usage](#usage) · [Development](#development) · [Security and privacy](#security-and-privacy) · [Documentation](#documentation) · [License](#license)

## Status

Status: concept only. This repository does not contain an implementation or an installable product.

## Getting started

There is no application to install or launch. Read the proposed scope and implementation gates below; use the existing CLI or plugin for current automation workflows.

## Usage

### Potential scope

- Connect to a Moodle site with the MoodlIA plugin installed.
- Browse courses, sections, activities, question banks, and grading structures.
- Create and edit course structures through guided forms.
- Work with questions, quizzes, rubrics, marking guides, lessons, and workshops.
- Preview proposed changes before applying them to Moodle.
- Audit course readiness, completion settings, and publishing state.
- Optionally assist course planning and content drafting with AI.

### Product principles

- Keep Moodle as the source of truth.
- Reuse the canonical MoodlIA operation contract.
- Require explicit confirmation for writes and destructive operations.
- Make generated or AI-assisted changes reviewable before publication.
- Preserve transport parity with the CLI and MCP interfaces.
- Avoid storing Moodle credentials or academic data unless a reviewed security design requires it.
- Design for accessibility and internationalization from the beginning.

### Non-Goals

- Reusing the old Moodle application as the implementation baseline.
- Replacing Moodle's complete administration interface.
- Creating a second operation contract.
- Adding a backend before its need and security model are established.
- Starting development before the target users and initial workflows are validated.

## Development

### Before implementation

Development should begin only after defining:

1. The primary user and the first complete workflow.
2. Whether Studio is a browser-only application or requires a backend.
3. Authentication, credential storage, and CORS handling.
4. The shared client boundary between Studio and `moodlia-cli`.
5. The minimum Moodle and MoodlIA plugin versions.
6. The security model for writes, destructive actions, files, and AI providers.
7. Acceptance tests against a disposable Moodle environment.

Until those decisions are made, this repository is intentionally limited to the product idea.

### Quality checks

```bash
npm install
npm run check
```

The concept-boundary tests ensure that the implementation gates remain documented and that an application is not introduced accidentally before those decisions are complete.

## Security and privacy

Authentication, credential storage, writes, files and AI-provider handling are design decisions to resolve before implementation. The concept must not be presented as an existing secure runtime.

## Documentation

- [Project Pages](https://gafapa.github.io/moodlia-studio/)

Build the repository documentation portal with `python tools/build-project-page.py`. Its status comes from this README; purpose and first steps are maintained in `docs/project-page.json`. The `pages.yml` workflow publishes the portal without deploying the application or changing `moodlia.com`.

Proposed visual workspace over the existing [MoodlIA plugin](https://github.com/gafapa/moodle-local_moodlia) contract.

- [Source code](https://github.com/gafapa/moodlia-studio)
- [Issue tracker](https://github.com/gafapa/moodlia-studio/issues)
- [MoodlIA website](https://moodlia.com)

### Relationship to other projects

- `moodlia-moodle-plugin` provides the Moodle-side operations.
- `moodlia-cli` provides the command-line workflow and current TypeScript client.
- `moodlia-skills` provides reusable agent workflows and portable-content guidance.
- `moodlia-website` would present Studio if it becomes an active product.

## License

Copyright (C) 2026 Pablo Gallego.

This project is free software released under the GNU General Public License version 3 or later. See `LICENSE`.
