// First-pass logo concepts for Experience Foundry — internal exploration only.
// Every mark is a single-color SVG (fill: currentColor) so it survives one-color,
// reversed, and favicon use. Cobalt is the sole accent, used on at most one element.

function MarkAscend({ className = '', accentClassName = 'text-cobalt' }) {
    // Client direction — three ascending pillars with chamfered (milled) tops, the
    // fourth resolving into an up-right arrow. Growth / momentum, industrial not financial.
    return (
        <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true">
            <path d="M4 42V30L10 25V42H4Z" />
            <path d="M13 42V24L19 19V42H13Z" />
            <path d="M22 42V18L28 13V42H22Z" />
            <g className={accentClassName}>
                <path d="M33 42V18H39V42H33Z" />
                <path d="M32 20L46 6L41 24L32 20Z" />
            </g>
        </svg>
    );
}

function MarkAscendFoundry({ className = '', accentClassName = 'text-cobalt' }) {
    // Client direction, folded-ribbon variant — one continuous angular stroke zig-zags
    // upward (echoing the folded-metal facets of the reference) and ends in an arrow.
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path
                d="M4 42L11 23L18 42L25 15L32 42L40 9"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="miter"
                strokeLinecap="butt"
            />
            <path d="M33 14L46 4L41 21L33 14Z" fill="currentColor" className={accentClassName} />
        </svg>
    );
}

function MarkForgedF({ className = '' }) {
    // Concept 01 — a squared "F" (Foundry) with a 45° chamfer cut on the top-right
    // corner, so it reads as cast / milled metal rather than a typeface glyph.
    return (
        <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true">
            <path d="M14 10h17l3 3v3H14z" />
            <path d="M14 10h7v28h-7z" />
            <path d="M21 21h12l-3 6H21z" />
        </svg>
    );
}

function MarkMonogramEF({ className = '', accentClassName = 'text-cobalt' }) {
    // Concept 02 — an offset E + F monogram. The E sits back (lighter), the F locks
    // in front, sharing the stem. Reads as two letters forged into one block.
    return (
        <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true">
            <g opacity="0.32">
                <path d="M9 9h7v30H9z" />
                <path d="M9 9h20v6H9z" />
                <path d="M9 21h16v6H9z" />
                <path d="M9 33h20v6H9z" />
            </g>
            <g>
                <path d="M20 13h7v26h-7z" />
                <path d="M20 13h19l-2 6H20z" className={accentClassName} />
                <path d="M20 24h14v6H20z" />
            </g>
        </svg>
    );
}

function MarkMold({ className = '' }) {
    // Concept 03 — "the mold": a chamfered solid block with a negative-space F cut
    // out of it (debossed / cast feel). One corner beveled to echo forged metal.
    return (
        <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 8h28l4 4v28H8V8zm10 9v15h5v-5h7v-5h-7v-5h9v-5H18z"
            />
        </svg>
    );
}

function MarkPlatform({ className = '', accentClassName = 'text-cobalt' }) {
    // Concept 04 — stacked, offset bars: an operating platform / brands layered on a
    // shared foundation. Top bar is the single cobalt accent.
    return (
        <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true">
            <rect x="8" y="30" width="32" height="7" rx="1.5" />
            <rect x="8" y="19.5" width="25" height="7" rx="1.5" />
            <rect x="8" y="9" width="18" height="7" rx="1.5" className={accentClassName} />
        </svg>
    );
}

function MarkCrucible({ className = '', accentClassName = 'text-cobalt' }) {
    // Concept 05 — a crucible / arch that cradles a single spark. Speaks to "places
    // people belong to" — a form that holds something, not just a letter.
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path
                d="M13 39V22a11 11 0 0 1 22 0v17"
                fill="none"
                stroke="currentColor"
                strokeWidth="6.5"
                strokeLinecap="square"
            />
            <circle cx="24" cy="23" r="3.5" fill="currentColor" className={accentClassName} />
        </svg>
    );
}

function MarkSpark({ className = '', accentClassName = 'text-cobalt' }) {
    // Concept 06 — the chamfered mold as an outline with a single solid spark offset
    // inside. Maximum restraint: structure + one point of accent.
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path
                d="M10 10h24l4 4v24H10V10z"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
            />
            <rect x="20" y="20" width="11" height="11" fill="currentColor" className={accentClassName} />
        </svg>
    );
}

const concepts = [
    {
        id: '07',
        name: 'Ascend',
        mark: MarkAscend,
        clientDirection: true,
        idea: 'Closest to the client reference — three chamfered pillars stepping up, the fourth resolving into a cobalt up-right arrow. Solid silhouette, favicon-ready; growth without the stock-chart cliché.',
        watch: 'Make sure it doesn’t read “corporate finance” once paired with the wordmark — the milled/chamfered tops are what keep it on-brand.',
    },
    {
        id: '08',
        name: 'Ascend — folded',
        mark: MarkAscendFoundry,
        clientDirection: true,
        idea: 'The same ascent drawn as one continuous folded-ribbon stroke that zig-zags up and ends in an arrow — leans into the faceted, folded-metal feel of the reference.',
        watch: 'Stroke weight needs a min-size floor; thinner than 07 so test it at 16px before committing.',
    },
    {
        id: '01',
        name: 'Forged F',
        mark: MarkForgedF,
        idea: 'A squared “F” for Foundry with a single 45° chamfer — milled metal, not a typeface. Distinctive, confident, instantly ownable.',
        watch: 'Leans on Foundry alone; loses the “Experience” half of the name.',
    },
    {
        id: '02',
        name: 'EF monogram',
        mark: MarkMonogramEF,
        idea: 'E set back, F locked in front on a shared stem — two letters forged into one block. Closest to the brief’s chamfered “EF”.',
        watch: 'Most letters to balance; needs care to read at 16px.',
    },
    {
        id: '03',
        name: 'The Mold',
        mark: MarkMold,
        idea: 'A cast block with a negative-space F carved out — debossed, industrial, premium. Strong silhouette as a favicon / app icon.',
        watch: 'Negative space tightens at very small sizes — test the cut widths.',
    },
    {
        id: '04',
        name: 'Platform',
        mark: MarkPlatform,
        idea: 'Offset bars on a shared base — the operating platform; brands layered on infrastructure. Abstract, scalable, one accent bar.',
        watch: 'More abstract — reads as “system,” not obviously a monogram.',
    },
    {
        id: '05',
        name: 'Crucible',
        mark: MarkCrucible,
        idea: 'An arch that cradles a single spark — a form that holds something. Ties to “places people belong to,” not just initials.',
        watch: 'Conceptual; furthest from a literal monogram.',
    },
    {
        id: '06',
        name: 'Spark',
        mark: MarkSpark,
        idea: 'The chamfered mold as an outline with one solid spark inside — maximum restraint, structure plus a single point of cobalt.',
        watch: 'Thin outline needs a min-size floor; the spark is the only hook.',
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
                <span
                    className={`mt-1 text-[9px] font-medium uppercase tracking-[0.2em] ${
                        reversed ? 'text-steel' : 'text-steel'
                    }`}
                >
                    Brands
                </span>
            </span>
        </div>
    );
}

export default function LogoConcepts() {
    return (
        <div className="space-y-4">
            {concepts.map(({ id, name, mark: Mark, idea, watch, clientDirection }) => (
                <div
                    key={id}
                    className={`rounded-md border bg-white/70 p-4 ${
                        clientDirection
                            ? 'border-cobalt/35 ring-1 ring-cobalt/10'
                            : 'border-charcoal/15'
                    }`}
                >
                    <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-mono text-[11px] font-medium text-cobalt">{id}</span>
                        <h3 className="text-sm font-semibold text-charcoal">{name}</h3>
                        {clientDirection && (
                            <span className="rounded-[2px] bg-cobalt/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-cobalt">
                                Client direction
                            </span>
                        )}
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
