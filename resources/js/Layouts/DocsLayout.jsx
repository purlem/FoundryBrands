import { Head, Link } from '@inertiajs/react';

const GRID_BG = {
    backgroundImage:
        'linear-gradient(rgba(35,35,35,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(35,35,35,0.035) 1px, transparent 1px)',
    backgroundSize: '22px 22px',
};

export default function DocsLayout({ title, crumbs = [], children }) {
    return (
        <div className="min-h-screen bg-bone text-charcoal" style={GRID_BG}>
            <Head title={title} />

            <header className="sticky top-0 z-10 border-b border-charcoal/15 bg-bone/85 backdrop-blur">
                <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
                    <Link href="/docs/story" className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                            Experience Foundry
                        </span>
                        <span className="rounded-[3px] bg-charcoal px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-bone">
                            Internal
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="font-mono text-xs text-steel transition hover:text-charcoal"
                    >
                        View site &rarr;
                    </Link>
                </div>
            </header>

            <main className="mx-auto max-w-3xl px-6 py-10 sm:py-12">
                {crumbs.length > 0 && (
                    <nav className="mb-6 flex flex-wrap items-center gap-1.5 font-mono text-xs text-steel">
                        {crumbs.map((c, i) => (
                            <span key={c.label} className="flex items-center gap-1.5">
                                {c.href ? (
                                    <Link
                                        href={c.href}
                                        className="transition hover:text-charcoal"
                                    >
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span className="text-charcoal">{c.label}</span>
                                )}
                                {i < crumbs.length - 1 && (
                                    <span className="text-charcoal/30">/</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}
                {children}
            </main>
        </div>
    );
}
