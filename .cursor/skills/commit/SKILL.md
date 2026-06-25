---
name: commit
description: >-
  Propose a commit plan for the current diff and, after the user approves,
  create the local commit(s). Never pushes — the user handles `git push`
  manually. Use when the user asks to commit, prepare a commit, clean up and
  commit, or says "commit it" / "go ahead and commit" after a review.
---

# Commit

Treat the current diff as the **complete scope** of the commit. Do not add
unrelated changes, features, or refactors. If you notice issues worth fixing,
surface them to the user before committing rather than silently expanding the
diff.

If the user has not yet seen a review of the changes and the diff is
non-trivial, suggest running the `review` skill first — but do not force it.

## Permission (non-negotiable)

- **Never** run `git commit` until the user has **explicitly** approved the
  proposed commit plan from Phase 2. Entering this skill ("commit this",
  "review and commit", "you can commit") is a request to *enter* the commit
  flow — you still must present the plan and wait for approval before running
  any git command that writes history.
- **Never** run `git push`. Pushing is the user's responsibility — this skill
  stops after the local commit(s) are made. Do not suggest or offer to push.
- Never force-push or rewrite history under any circumstances.
- Never stage `.env`, credentials, or files the user didn't intend to change.

## Phase 1 — Gather context

Run these in parallel:

1. `git status` — confirm every modified, staged, and untracked file.
2. `git diff` (unstaged) and `git diff --cached` (staged) — read the full diff
   so the proposed commit message accurately reflects what changed.
3. `git log --oneline -10` — match the repo's existing commit-message style.

If the review skill has already been run in this session, reuse that context;
you don't need to re-read every file, but do re-run `git status` / `git diff`
so your plan reflects the current tree state.

## Phase 2 — Propose commit plan (wait for approval)

**Do not run `git commit` yet.**

1. Decide whether the diff is **one logical commit** or **multiple**. Split
   into separate commits when the changes cover distinct concerns (e.g.
   unrelated bug fix + feature, infra change + copy tweak). Keep it to a
   single commit when the diff tells one coherent story.
2. For each proposed commit, list:
   - The exact files to stage (`git add` paths).
   - The commit message (summary line, and body if needed) following the
     conventions below.
3. Present the plan to the user and **explicitly ask for approval** before
   running any git commands. Example:

   > Here's the proposed commit plan:
   >
   > **Commit 1** — `Add OTP login flow backed by Twilio Verify`
   > Files: `app/Http/Controllers/Auth/OtpLoginController.php`, …
   >
   > Approve this plan? Reply "yes" / "commit it" or tell me what to change.

4. If the user requests changes (re-split, different message, different files),
   revise and re-present. Only proceed to Phase 3 once they approve.

### Commit message conventions

- **Imperative mood**, concise summary on the first line (≤ 72 chars).
- Focus on *why* / *what changed*, not file-by-file narration.
- Match the repo's existing message style (see `git log` from Phase 1).
- Add a blank line + brief body only if the "why" isn't obvious from the
  summary.

## Phase 3 — Commit (after plan approval)

For each approved commit, in order:

1. `git add` the files listed in the approved plan. Never stage `.env`,
   credentials, or files the user didn't intend to change.
2. Run the commit using a HEREDOC:
   ```
   git commit -m "$(cat <<'EOF'
   Summary line here

   Optional body here.
   EOF
   )"
   ```
3. Run `git status` to confirm the commit landed and show what (if anything)
   remains uncommitted.

After all approved commits have been made, **stop**. Show a short summary
(e.g. `git log --oneline origin/<branch>..HEAD` or the new commit SHAs and
subjects) so the user can see what landed locally, and remind them that
pushing is their responsibility. **Do not push.**

## Commit-message examples (based on this repo's style)

```
Extract SalesAggregator service from duplicated sales queries
```

```
Fix button components: remove erroneous @csrf, normalize sizing
```

```
Add financials projections page with P&L upload and pro forma engine
```

Avoid vague messages like "Update SomeFile.php" — always describe what changed
and why.
