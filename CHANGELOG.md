# Changelog

All notable changes to the q-ring marketing site (<https://qring.i4c.studio>) are documented here.

The site mirrors the version of the upstream [`quantum_ring`](https://github.com/I4cTime/quantum_ring) project (`PROJECT_VERSION` in `lib/data/version.ts`). Site-only changes between upstream releases live under `[Unreleased]` until the next upstream version is published.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project follows [Semantic Versioning](https://semver.org/) at the upstream-release level.

## [Unreleased]

## [0.11.7] — 2026-04-27

### Changed
- Mirrored the upstream `quantum_ring` 0.11.7 release notes into `lib/data/changelog.ts` so the `/changelog` page reflects the latest documentation-quality release (every one of the 44 MCP tools now ships a 3-sentence Glama-TDQS-aligned description; common parameter `.describe()` strings include formats, defaults, and examples).
- Bumped `PROJECT_VERSION` (`lib/data/version.ts`) from `0.10.1` to `0.11.7` so the site footer matches the upstream package version.
- Filled the changelog gap that omitted upstream `0.11.5` (Kiro + Claude Code plugins, in-repo marketing site extraction to this repository, MCP tool description tightening).

## [0.11.0] — 2026-04-25

Initial public release of the marketing site as a standalone repository.

### Added
- Hero section with the social-card art, locale-stable TrustStrip KPIs, IntegrationsCarousel, LiveDemo terminal, global ⌘K command palette, AgentMode showcase, CursorPlugin section, FAQ, FreeCallout, and FinalCta.
- Docs page with a pinned floating table of contents, manual scroll-spy, and a copy-to-clipboard MCP prompt cookbook.
- Changelog page (`/changelog`) rendered from `lib/data/changelog.ts`.
- Vercel Analytics integration.

### Changed
- Stack rebuilt on HeroUI v3 + HeroUI Pro with Tailwind v4 and `lucide-react`.
- Vercel deploy uses the default Next.js builder output (the static-export override was dropped so dynamic features and analytics work end-to-end).

> Earlier history (pre-extraction) lives in [`quantum_ring`'s CHANGELOG](https://github.com/I4cTime/quantum_ring/blob/main/CHANGELOG.md) and in the rendered `/changelog` page on the site.

[Unreleased]: https://github.com/I4cTime/qring.i4c.studio/compare/v0.11.7...HEAD
[0.11.7]: https://github.com/I4cTime/qring.i4c.studio/compare/v0.11.0...v0.11.7
[0.11.0]: https://github.com/I4cTime/qring.i4c.studio/releases/tag/v0.11.0
