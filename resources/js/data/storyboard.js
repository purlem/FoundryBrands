// Internal working doc — the Experience Foundry "Story Board".
// Tracks the open questions that, once answered, define the story.
// Once an item is resolved, its answer gets baked into .cursor/rules/*.mdc (and /docs).
// Statuses: 'open' | 'proposed' | 'in-progress' | 'resolved'
//   open      = no answer yet (often needs client input/data)
//   proposed  = best-shot answer drafted, awaiting sign-off
//   in-progress = decided in principle, execution underway
//   resolved  = decided and baked into the rules/site

export const storyboard = {
    updated: 'June 26, 2026',

    // The logic of this whole exercise, in three beats.
    chain: [
        {
            label: 'Answer the questions',
            body: 'Work the open items below until each has a clear, agreed answer.',
        },
        {
            label: 'The story falls into place',
            body: 'Positioning, voice, value props, content pillars, colors, and website direction stop being loose ideas and become decided.',
        },
        {
            label: 'Identity follows',
            body: 'With the story settled, the logo, wordmark, and creative system have something true to express — they fall out of the story rather than guessing at it.',
        },
    ],

    // The question everything else hangs from (deck slide 3).
    coreQuestion:
        'What do we want founders, operators, franchisees, investors, and consumers to believe when they hear Experience Foundry Brands?',

    // The core question, broken down per audience. Each needs a one-line "target belief."
    audiences: [
        {
            name: 'Founders & Sellers',
            status: 'proposed',
            belief: 'Experience Foundry is the rare partner who can scale what I built without flattening it — they add the systems and franchising muscle I don\u2019t have, while protecting the soul that made it work.',
            note: 'The single most important belief. If a founder believes this, the partnership conversation starts from trust instead of fear of losing control.',
        },
        {
            name: 'Operators & Franchisees',
            status: 'proposed',
            belief: 'Buying into a Foundry brand means proven systems, real operator support, and an experience members keep coming back to — I\u2019m joining a platform, not just licensing a name.',
            note: 'The differentiator vs. a generic franchise is the operating platform behind the brand, not the logo.',
        },
        {
            name: 'Consumers',
            status: 'proposed',
            belief: 'This is a place I belong — woven into my routine and who I am — not just another option I\u2019m shopping.',
            note: 'Consumers never need to know "Experience Foundry" exists; they experience belonging at the brand level. EF is the infrastructure behind that feeling.',
        },
        {
            name: 'Investors',
            status: 'proposed',
            belief: 'Belonging is a durable economic moat. Experience Foundry is a disciplined operator that acquires proven, emotionally-resonant brands and compounds their value through systems, franchising, and scale — turning loyalty into repeatable, defensible returns.',
            note: 'Was the clear gap. Proposed answer reframes "belonging" (the soft story) as the hard economic thesis investors care about: retention, repeat behavior, and franchisable unit economics. Recommendation: keep this OFF the public site (lean/phased) and use it in pitch + relationship materials.',
        },
    ],

    // "What is already strong" — the settled foundation from deck slide 3.
    // These are givens, not open work — shown to balance the board and mark solid ground.
    foundations: [
        {
            title: 'The strategy has the right bones',
            status: 'resolved',
            note: 'The platform definition and the acquire \u2192 strengthen \u2192 scale model are intact and now carried across the site.',
            bakedInto: 'brand-positioning.mdc (Positioning)',
        },
        {
            title: 'The "Foundry" model is differentiated',
            status: 'resolved',
            note: 'Name rationale ("great brands are not accidental") lives on How We Grow; the internal Forge/Refine/Compound vocabulary is kept internal.',
            bakedInto: 'brand-positioning.mdc (Name rationale)',
        },
        {
            title: 'The belonging thesis is powerful',
            status: 'resolved',
            note: 'Carried by the belonging thesis that now opens How We Grow and the core belief (Connection · Routine · Identity · Community · Belonging).',
            bakedInto: 'brand-positioning.mdc (Positioning)',
        },
        {
            title: 'The founder value proposition is clear',
            status: 'resolved',
            note: 'Expressed in the founder quote and the For Founders & Sellers value prop.',
            bakedInto: 'brand-positioning.mdc (Value props)',
        },
    ],

    // "What needs elevation" — the working backlog from deck slide 3.
    elevation: [
        {
            title: 'Clarify this is a holding company that acquires & grows brands',
            status: 'resolved',
            note: 'Positioning statement, How We Grow page, and the "Where we stand" closer all make the acquire/strengthen/scale model explicit.',
            bakedInto: 'brand-positioning.mdc',
        },
        {
            title: 'External language needs to be simpler',
            status: 'proposed',
            note: 'Voice principles and say-more/say-less lists are defined; the discipline is in place.',
            proposal:
                'Adopt one governing north-star sentence every page ladders up to: "We build brands people belong to — we find experience-driven brands that already work, strengthen the systems behind them, and scale them through franchising without losing the soul." Then the only remaining work is editing existing copy down to that level of plainness.',
            bakedInto: 'brand-positioning.mdc (Brand Voice)',
        },
        {
            title: 'The website needs a stronger narrative',
            status: 'proposed',
            note: 'The narrative spine (Belief \u2192 Model \u2192 Partnership) is already right.',
            proposal:
                'The one missing beat is proof. The site currently asserts belonging and scale but never demonstrates them, which is why it can feel anonymous. Add a concrete proof layer — real location counts, years operating, and one Fitness Premier or Pure Sweat outcome/member story. That converts the narrative from claim to evidence. (Blocked on "Confirm real proof numbers" below.)',
            bakedInto: null,
            href: '/docs/story/proof',
        },
        {
            title: 'The identity needs to feel premium + scalable',
            status: 'proposed',
            note: 'Palette and type are set as a direction ("Modern Industrial Wellness"). No logo/wordmark designed yet.',
            proposal:
                'Brief for the mark: a single geometric monogram that reads as something forged/cast — a modern industrial glyph (e.g. a chamfered "EF" or an abstract molten-to-solid form), not a literal anvil. Must work in one color (charcoal or bone), at favicon size, and feel etched/debossed. Wordmark: Archivo, tight tracking, "Brands" as a quiet uppercase kicker. The premium signal is restraint, not ornament. Actual design is an agency/creative handoff — this is the brief, fully aligned to the documented direction.',
            bakedInto: 'brand-positioning.mdc (Visual identity)',
            href: '/docs/story/mood-board',
        },
    ],

    // Immediate priorities — the pre-launch / agency-handoff checklist (deck slide 21).
    // Listed in the deck's sequence; the last item is explicitly "then."
    priorities: [
        {
            title: 'Finalize positioning + value props',
            status: 'in-progress',
            note: 'Positioning is strong and the three-audience value props are drafted. "Finalize" = lock wording and get sign-off; see the Audiences proposals above.',
        },
        {
            title: 'Add proof points from Fitness Premier + Pure Sweat',
            status: 'open',
            note: 'Blocked on real numbers (see "Confirm real proof numbers"). The single highest-impact item — it\u2019s what makes the site stop feeling anonymous.',
            href: '/docs/story/proof',
        },
        {
            title: 'Secure branded domain',
            status: 'resolved',
            note: 'experiencefoundrybrands.com purchased via GoDaddy.',
        },
        {
            title: 'Build visual mood board + identity direction',
            status: 'in-progress',
            note: 'Identity direction ("Modern Industrial Wellness" — palette, type, imagery rules) is documented in brand-positioning.mdc. A visual mood board artifact still needs assembling for the agency brief.',
            href: '/docs/story/mood-board',
        },
        {
            title: 'Update website architecture + homepage copy',
            status: 'resolved',
            note: 'Architecture rebuilt and condensed (Home · How We Grow · Portfolio · Partner · Contact). Belief merged into How We Grow (why → how); homepage copy written to the new story. Ongoing refinement expected.',
        },
        {
            title: 'Clarify acquisition / founder partnership story',
            status: 'resolved',
            note: 'Carried by the positioning statement, the How We Grow model, and the founder value prop / quote.',
        },
        {
            title: 'Scope logo + identity system with agency',
            status: 'open',
            note: 'Not yet scoped. The creative brief is ready (see "The identity needs to feel premium + scalable") — this is a commercial/vendor step, not a strategy gap.',
            href: '/docs/story/mood-board',
        },
        {
            title: 'Then build website content + creative system',
            status: 'in-progress',
            note: 'Explicitly sequenced last. The website shell + content exist; the full creative system waits on the logo/identity handoff.',
        },
    ],

    // Specific decisions that are genuinely unresolved and block "done."
    decisions: [
        {
            title: 'Define the investor belief / messaging',
            status: 'proposed',
            note: 'Answered under Audiences \u2192 Investors.',
            proposal:
                'Belief defined (belonging as an economic moat). Recommendation: keep investors OFF the public site for now — the public site speaks to founders, operators, and consumers. Investor messaging lives in pitch and relationship materials, consistent with the lean/phased mandate.',
        },
        {
            title: 'Confirm real proof numbers',
            status: 'open',
            note: 'Genuinely blocked — I can\u2019t invent these. Needs client data.',
            proposal:
                'Collect: total locations across brands · states/markets · years operating + franchising · total members served · one franchisee outcome · one member transformation story. Until real figures exist, mark current counts as approximate or pull them — a wrong/empty number hurts more than no number.',
            href: '/docs/story/proof',
        },
        {
            title: 'Design the logo + wordmark',
            status: 'proposed',
            note: 'Direction proposed under "The identity needs to feel premium + scalable."',
            proposal:
                'Ready to brief an agency now; the strategic direction no longer blocks it. Interim: keep the Archivo text wordmark — it already reads premium and is a perfectly good placeholder until the mark exists.',
            href: '/docs/story/mood-board',
        },
        {
            title: 'Resolve the bone background deviation',
            status: 'proposed',
            note: 'We use a cooler bone (#f0f2f4) vs. the deck\u2019s warm Bone White (#F3F1EC).',
            proposal:
                'Recommendation: KEEP the cooler bone. A cooler, flatter neutral reads more "modern industrial" and premium, and pairs better with cobalt + steel. The warm cream leans hospitality/spa — exactly the "feminine spa / overly earthy" direction the deck says to avoid. Lock #f0f2f4 and update the rule note on sign-off.',
            href: '/docs/story/mood-board',
        },
        {
            title: 'Our Belief page treatment',
            status: 'resolved',
            note: 'The page padded a single thesis (Connection/Routine/Identity/Community all resolve into Belonging) into five full-bleed image rows, with mismatched stock — and a literal photo per abstract noun violated the brand’s own "premium = restraint, avoid corporate stock" rule.',
            proposal:
                'Resolved: stripped to a text-first typographic build, then merged into How We Grow as the "why" that opens the page (why → how). The standalone /belief page and its images were removed; nav dropped to How We Grow · Portfolio · Partner. Baked into brand-positioning.mdc (Site structure). Still open for Madison’s sign-off as an architecture change.',
            href: '/how-we-grow',
        },
        {
            title: 'Settle the name usage',
            status: 'proposed',
            note: '"Experience Foundry" vs. "Experience Foundry Brands."',
            proposal:
                'Recommendation: the spoken/brand name is "Experience Foundry." "Experience Foundry Brands" is the full descriptor used where the holding-company-with-a-portfolio meaning matters (domain, legal/footer line, investor + founder docs). Wordmark stays "Experience Foundry" with "Brands" as the kicker. One name to say, one to file under.',
        },
    ],
};
