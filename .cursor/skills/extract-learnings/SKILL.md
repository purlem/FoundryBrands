---
name: extract-learnings
description: >-
  Review the current conversation thread and extract valuable learnings into
  project .md files (AGENTS.md, .cursor/rules/). Use when the user asks to
  capture learnings, update project memory, extract knowledge from the thread,
  save context for future sessions, or update AGENTS.md with what was learned.
---

# Extract Learnings

Review the current conversation thread and determine whether anything should be
added to the project's persistent knowledge files (`AGENTS.md`,
`.cursor/rules/*.mdc`) to help future sessions.

## Core Principle: Be Ruthlessly Selective

Every line added to these files consumes context-window tokens in **every
future session**. A bloated file degrades agent performance. Only add knowledge
that meets the bar defined in the evaluation criteria below.

## Phase 1 — Read existing knowledge files and measure size

Before proposing additions, read what already exists so you don't duplicate,
and measure current size so you can judge whether the file is under pressure:

1. Read `AGENTS.md` in the current repo root (if it exists). Note the **line
   count** — this determines whether you're in normal mode or size-pressure
   mode (see Phase 4).
2. List and skim `.cursor/rules/*.mdc` files.
3. Note the current structure, sections, and level of detail. Build a mental
   map of every existing entry so you can compare importance in Phase 4.

## Phase 2 — Scan the conversation for new learnings

Review the full conversation for any of the following signal types:

| Signal | Example |
|--------|---------|
| **Bug caused by non-obvious behavior** | "Amounts in `customer_subscriptions.price` are cents, not dollars" |
| **Architectural decision with rationale** | "We chose Zustand over Redux because…" |
| **Gotcha / trap that wasted time** | "Must run `pod install` after changing native deps" |
| **Convention the agent got wrong and was corrected** | "Use `<x-modal>` not hand-rolled markup" |
| **Data model relationship that isn't obvious from schema** | "`variation` column stores a name string, not a FK" |
| **Workflow or command that is hard to discover** | "To deploy: `cd ios && bundle exec fastlane beta`" |
| **Integration quirk** | "Stripe Terminal location IDs differ between test and live" |

Ignore anything that is:
- Standard language/framework knowledge the agent already has
- One-off debugging that won't recur (e.g., a typo fix)
- Already documented in the existing files
- Speculative or unverified
- Specific to a single conversation with no future relevance

## Phase 3 — Audit existing knowledge for staleness

Code changes in the conversation may have **invalidated, changed, or made
redundant** something already documented. Cross-reference every existing entry
against the thread's code changes:

1. **Identify files changed in this thread** — look at edits, diffs, and new
   files created during the conversation.
2. **For each existing knowledge entry**, ask:
   - Does the code change **contradict** this entry? (e.g., a column was
     renamed, a component was replaced, a workflow changed)
   - Does the code change **make this entry redundant**? (e.g., a gotcha was
     fixed so the warning is no longer needed)
   - Does the code change **require updating** this entry? (e.g., a new
     parameter was added, a default changed, a file was moved)
3. **Check for stale references**: file paths, class/function names, config
   keys, table/column names, or commands that no longer exist.

Mark each stale item as one of:
- **Remove** — the information is now wrong or obsolete
- **Update** — the information is partially correct but needs revision
- **Keep** — still accurate despite the code changes

## Phase 4 — Evaluate candidates

### For additions

For every potential new learning, ask these three questions:

1. **Will a future agent session likely get this wrong without the note?**
   If the answer is no, skip it.
2. **Is this project-specific (not general programming knowledge)?**
   If the answer is no, skip it.
3. **Can it be expressed in 1–3 concise lines?**
   If it requires a paragraph of explanation, consider whether it belongs in a
   `.cursor/rules/*.mdc` file with a `globs` scope instead of `AGENTS.md`.

Then assign each candidate an **importance tier** — you'll need this in
size-pressure mode:

- **Tier A (critical):** Prevents data loss, silent correctness bugs, or
  security issues. E.g., "Do not run `php artisan test` — it truncates live
  tables." Missing this causes real damage.
- **Tier B (high):** Prevents a non-obvious mistake that would cost 30+
  minutes to debug, or documents a canonical API/pattern the agent must use.
  E.g., "`product_price()` is the canonical pricing function."
- **Tier C (useful):** Saves time on a recurring task or documents a
  convention. E.g., "Use `<x-button.primary>` for standard actions."
- **Tier D (trivia):** Nice-to-know context that rarely changes an outcome.

### For removals and updates

Removing stale knowledge is **just as valuable** as adding new knowledge —
it reduces token cost and prevents the agent from following outdated guidance.
Propose a removal or update if:

1. The code no longer matches the documented behavior.
2. A referenced file, class, route, column, or command no longer exists.
3. A workaround was documented for a bug that has since been fixed.

### Size-pressure mode (when AGENTS.md is near the limit)

If `AGENTS.md` is **over ~180 lines** (approaching the ~200-line guardrail),
enter size-pressure mode. In this mode, every addition must be paid for by a
removal of equal or greater size, and you must actively hunt for lower-value
existing content to evict.

1. **Tier every existing section/entry** in `AGENTS.md` using the same A/B/C/D
   scale above. Do this based on what the entry *currently* says, independent
   of the new thread. Err on the side of generosity for existing content — it
   was added deliberately — but be honest about Tier C/D material.
2. **Rank new candidates** by tier. Only Tier A and B additions are eligible
   in size-pressure mode; drop Tier C/D candidates entirely unless they
   directly replace an existing Tier C/D entry on the same topic.
3. **Find eviction candidates** for each surviving addition. A new Tier A
   entry can evict any existing Tier B/C/D entry of comparable size. A new
   Tier B entry can only evict existing Tier C/D entries. Never evict a
   Tier A entry to make room for a Tier B one.
4. **Prefer condensation over deletion** when possible: a verbose Tier B
   section can often be tightened to half its length without losing the
   critical bits, freeing space without losing knowledge.
5. **Target the final file to stay under ~200 lines.** If after all trimming
   the additions still push it over, either drop the weakest addition or
   propose splitting a self-contained section out to a scoped
   `.cursor/rules/*.mdc` file.

When you present changes in Phase 5, **explicitly justify each eviction**:
name the existing entry being removed/shrunk, its tier, the new entry
replacing it, its tier, and the net line delta.

## Phase 5 — Propose changes

Present findings to the user, grouped by type:

```
### Proposed removals / updates

**Target: AGENTS.md** (or `.cursor/rules/some-rule.mdc`)

> Section: [section name]
>
> − Line(s) to remove or replace
> + Updated line(s) (if updating, not removing)

**Reason:** One sentence on what changed in the code.

---

### Proposed additions

**Target: AGENTS.md** (or `.cursor/rules/some-rule.mdc`)

> Section: [existing section name, or "New section: X"]
>
> + Line(s) to add

**Rationale:** One sentence on why this earns its token cost.
```

Present removals/updates **before** additions — cleaning house first makes it
easier to judge whether new additions are still needed and keeps file size in
check.

In **size-pressure mode**, also include at the top:

```
### File pressure summary

- Current `AGENTS.md`: <N> lines (limit ~200)
- Proposed net change: <+/- N> lines → <final> lines
- Evictions: <brief list of entries being removed/shrunk and their tiers>
- Additions: <brief list of new entries and their tiers>
```

If there is nothing to add, remove, or update, say so. An empty result is a
good result — it means the knowledge files are already well-maintained.

### Deciding where to put new entries

| Destination | When to use |
|-------------|-------------|
| `AGENTS.md` | Applies broadly; relevant regardless of which files are open |
| `.cursor/rules/*.mdc` with `alwaysApply: true` | Global constraint, but better as a standalone rule (e.g., "never commit .env") |
| `.cursor/rules/*.mdc` with `globs` | Only relevant when editing specific file types or directories |
| Skip entirely | General knowledge, already documented, or one-off |

### Size guardrails

- `AGENTS.md` should stay under ~200 lines. At **~180 lines** enter
  size-pressure mode (Phase 4) — additions must be paid for by evictions.
- If the file is already **over 200 lines**, a pure cleanup pass (no new
  additions) is often the right answer. Identify the lowest-tier existing
  content and propose removing or splitting it out to a scoped
  `.cursor/rules/*.mdc` file before considering any additions.
- Individual `.mdc` rules should be under 50 lines.
- Prefer updating an existing section over creating a new one.
- A removal + addition that nets zero new lines is always preferable to a
  pure addition.
- Splitting a cohesive domain (e.g., "Financials Pipeline", "POS theme
  tokens") out to its own `.cursor/rules/*.mdc` with `globs` scope is the
  preferred way to shrink `AGENTS.md` without losing knowledge — the content
  only loads into context when relevant files are open.

## Phase 6 — Apply (with user approval)

Only after the user approves:

1. Make the edits to the target files.
2. Show a brief diff summary of what changed.
3. Do **not** commit automatically — let the user decide when to commit.

## Anti-patterns to avoid

- **Dumping the whole conversation** into a file. Summarize; don't transcribe.
- **Adding "nice to know" trivia** that doesn't prevent mistakes.
- **Documenting standard library behavior** (e.g., "useState triggers re-render").
- **Adding TODOs or future plans** — these files are for stable knowledge, not
  task tracking.
- **Over-specifying** — if the codebase makes something obvious (e.g., a
  well-named function), don't document it redundantly.
