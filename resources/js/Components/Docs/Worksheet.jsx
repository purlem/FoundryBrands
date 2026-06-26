import { StatusBadge } from '@/Components/Docs/Status';
import { Link } from '@inertiajs/react';

// A worksheet "section" — utilitarian, form-style header.
export function Block({ index, title, sub, children }) {
    return (
        <section className="mt-10">
            <div className="flex items-baseline gap-3 border-b border-charcoal/15 pb-2">
                {index && (
                    <span className="font-mono text-xs font-medium text-cobalt">{index}</span>
                )}
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                    {title}
                </h2>
            </div>
            {sub && <p className="mt-2 text-sm leading-relaxed text-steel">{sub}</p>}
            <div className="mt-4">{children}</div>
        </section>
    );
}

// A single worksheet field/row.
export function FieldCard({ label, status, href, children }) {
    return (
        <div className="rounded-md border border-charcoal/15 bg-white/70 p-4">
            <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold leading-snug text-charcoal">{label}</p>
                {status && <StatusBadge status={status} />}
            </div>
            {children && <div className="mt-2">{children}</div>}
            {href && <PageLink href={href} />}
        </div>
    );
}

// Mimics an editable textarea so it's obvious this is a draft you can change.
export function ProposalBox({ label = 'Proposed answer — draft', children, placeholder }) {
    const empty = !children;
    return (
        <div className="mt-3">
            <span className="flex items-center gap-1 font-mono text-[10px] font-medium uppercase tracking-wider text-cobalt">
                <PencilGlyph />
                {label}
            </span>
            <div className="relative mt-1 rounded-md border border-cobalt/40 bg-cobalt/[0.04] shadow-[inset_0_1px_2px_rgba(35,35,35,0.06)]">
                <div
                    className={`p-3 text-sm leading-relaxed ${
                        empty ? 'italic text-steel' : 'text-charcoal'
                    }`}
                >
                    {empty ? placeholder ?? 'Not yet drafted…' : children}
                </div>
                <ResizeGrip />
            </div>
        </div>
    );
}

// A read-only "note" field — context, not a proposal.
export function NoteText({ children }) {
    return <p className="text-sm leading-relaxed text-graphite">{children}</p>;
}

export function PageLink({ href, children = 'Open worksheet page \u2192' }) {
    return (
        <Link
            href={href}
            className="mt-3 inline-flex items-center font-mono text-xs font-semibold text-cobalt hover:underline"
        >
            {children}
        </Link>
    );
}

function PencilGlyph() {
    return (
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
                d="M8.5 1.5l2 2L4 10l-2.5.5L2 8 8.5 1.5z"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ResizeGrip() {
    return (
        <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            className="pointer-events-none absolute bottom-1 right-1 text-charcoal/25"
            aria-hidden="true"
        >
            <path d="M9 0L0 9M9 4L4 9" stroke="currentColor" strokeWidth="1" />
        </svg>
    );
}
