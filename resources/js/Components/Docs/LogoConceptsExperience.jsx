// Round 2 logo concepts for Experience Foundry — a response to the 06.30 feedback
// that the first-pass marks read as "structure" but not yet "experience, movement,
// or human connection." Every mark keeps the forged / chamfered structure language
// but adds ONE element of motion or warmth, and moves the single cobalt accent onto
// that human / experience note (a path, a spark, a meeting point) rather than a
// finance-style arrowhead. Single-color, currentColor + one cobalt accent, so each
// still survives reversed + favicon use.

function MarkAscendArc({ className = '', accentClassName = 'text-cobalt' }) {
    // Keeps the approved ascending chamfered pillars, but trades the stiff up-right
    // arrow for a sweeping cobalt arc that rises across them — growth as a human
    // path / gesture, not a stock chart. Round cap = warmth against the milled tops.
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <g fill="currentColor">
                <path d="M5 42V31L11 26V42H5Z" />
                <path d="M14 42V25L20 20V42H14Z" />
                <path d="M23 42V19L29 14V42H23Z" />
            </g>
            <path
                d="M7 33Q26 3 45 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                className={accentClassName}
            />
            <circle cx="45" cy="16" r="3.2" fill="currentColor" className={accentClassName} />
        </svg>
    );
}

function MarkHearth({ className = '', accentClassName = 'text-cobalt' }) {
    // The crucible idea, given motion: an arch (structure) that cradles a trail of
    // sparks rising and growing as they lift off — energy / experience emerging from
    // the foundry. Ties directly to "places people belong to." Lead spark is cobalt.
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path
                d="M12 41V24a12 12 0 0 1 24 0v17"
                fill="none"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
            />
            <circle cx="24" cy="31" r="2.2" fill="currentColor" opacity="0.55" />
            <circle cx="24" cy="23" r="2.9" fill="currentColor" />
            <circle cx="24" cy="13" r="3.6" fill="currentColor" className={accentClassName} />
        </svg>
    );
}

function MarkAperture({ className = '', accentClassName = 'text-cobalt' }) {
    // Two chamfered brackets forming an open frame — a structure people enter and
    // belong inside, not a sealed block. The cobalt spark sits in the opening:
    // the human in the space the foundry makes. Strong, symmetric favicon.
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <g fill="currentColor">
                <path d="M9 9h12v6h-6v18h6v6H9V13z" />
                <path d="M39 9H27v6h6v18h-6v6h12V13z" />
            </g>
            <rect
                x="20"
                y="20"
                width="8"
                height="8"
                rx="1"
                fill="currentColor"
                className={accentClassName}
            />
        </svg>
    );
}

function MarkConfluence({ className = '', accentClassName = 'text-cobalt' }) {
    // Two forged strokes rising from a shared base, converging and lifting into one
    // — brands joining the platform, people meeting. The cobalt spark marks the
    // point of connection. Reads as momentum + togetherness, not a single arrow.
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path
                d="M7 42L23 22M41 42L25 22M24 24V8"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="24" cy="21" r="4" fill="currentColor" className={accentClassName} />
        </svg>
    );
}

const concepts = [
    {
        id: '09',
        name: 'Ascend · Arc',
        mark: MarkAscendArc,
        idea: 'The approved ascending pillars kept intact — but the rigid arrow becomes a sweeping cobalt arc that rises across them. Same growth story, now drawn as a human path rather than a finance chart. Lowest-risk evolution of what the client already chose.',
        watch: 'The arc needs a min-size floor (round cap, 4.5 stroke) — test at 16px so it doesn’t thin out against the solid pillars.',
    },
    {
        id: '10',
        name: 'Hearth',
        mark: MarkHearth,
        idea: 'The crucible, given movement: an arch that cradles a trail of sparks lifting and growing as they rise. Structure holding something human — the most direct answer to “experience / belonging,” and a distinctive silhouette no one reads as corporate finance.',
        watch: 'Three dots can muddy at favicon size — may need to drop to two, or grow the spacing, below 20px.',
    },
    {
        id: '11',
        name: 'Aperture',
        mark: MarkAperture,
        idea: 'Two chamfered brackets forming an open frame with a cobalt spark in the gap — a structure people step into and belong inside, not a sealed block. Symmetric, confident, and an excellent app icon.',
        watch: 'Could read as a generic “brackets / code” mark if the spark loses prominence — keep the accent saturated.',
    },
    {
        id: '12',
        name: 'Confluence',
        mark: MarkConfluence,
        idea: 'Two forged strokes rising from a shared base and meeting at a cobalt spark — brands joining the platform, people connecting. Carries momentum and togetherness in one move; the most literal take on “human connection.”',
        watch: 'Most abstract of the four — needs the wordmark to anchor meaning; reads as a person/arrow hybrid on its own.',
    },
];

function Lockup({ Mark, reversed = false }) {
    return (
        <div
            className={`flex items-center gap-3 rounded-[3px] px-4 py-3 ${
                reversed ? 'bg-charcoal text-bone' : 'bg-white text-charcoal'
            }`}
        >
            <Mark className="h-8 w-8 shrink-0" />
            <span className="block h-8 w-px bg-current opacity-15" />
            <span className="flex flex-col leading-none">
                <span className="font-display text-base tracking-tight">Experience Foundry</span>
                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-steel">
                    Brands
                </span>
            </span>
        </div>
    );
}

export default function LogoConceptsExperience() {
    return (
        <div className="space-y-4">
            {concepts.map(({ id, name, mark: Mark, idea, watch }) => (
                <div
                    key={id}
                    className="rounded-md border border-cobalt/35 bg-white/70 p-4 ring-1 ring-cobalt/10"
                >
                    <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-mono text-[11px] font-medium text-cobalt">{id}</span>
                        <h3 className="text-sm font-semibold text-charcoal">{name}</h3>
                        <span className="rounded-[2px] bg-cobalt/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-cobalt">
                            Round 2 · experience
                        </span>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-[auto_1fr]">
                        <div className="flex items-stretch gap-3">
                            <div className="flex h-28 w-28 items-center justify-center rounded-md border border-charcoal/10 bg-white">
                                <Mark className="h-16 w-16 text-charcoal" />
                            </div>
                            <div className="flex h-28 w-28 items-center justify-center rounded-md bg-charcoal">
                                <Mark className="h-16 w-16 text-bone" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm leading-relaxed text-graphite">{idea}</p>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-steel">
                                    favicon
                                </span>
                                <span className="flex items-center justify-center rounded-[2px] border border-charcoal/10 bg-white p-1">
                                    <Mark className="h-6 w-6 text-charcoal" />
                                </span>
                                <span className="flex items-center justify-center rounded-[2px] border border-charcoal/10 bg-white p-1">
                                    <Mark className="h-4 w-4 text-charcoal" />
                                </span>
                                <span className="flex items-center justify-center rounded-[2px] bg-charcoal p-1">
                                    <Mark className="h-4 w-4 text-bone" />
                                </span>
                            </div>
                            <p className="text-[11px] leading-relaxed text-amber-700">
                                <span className="font-semibold">Watch:</span> {watch}
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        <Lockup Mark={Mark} />
                        <Lockup Mark={Mark} reversed />
                    </div>
                </div>
            ))}
        </div>
    );
}
