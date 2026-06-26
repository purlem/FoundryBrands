import { StatusBadge } from '@/Components/Docs/Status';
import { Block, ProposalBox } from '@/Components/Docs/Worksheet';
import DocsLayout from '@/Layouts/DocsLayout';

// What we need to gather. "value" stays null until the client confirms a real figure.
const metrics = [
    { metric: 'Total locations across brands', source: 'FPC + Pure Sweat ops', value: null },
    { metric: 'States / markets', source: 'FPC + Pure Sweat ops', value: null },
    { metric: 'Years operating', source: 'Fitness Premier', value: null },
    { metric: 'Years franchising', source: 'Fitness Premier', value: null },
    { metric: 'Total members served', source: 'Both brands', value: null },
    { metric: 'Franchisee outcome (one)', source: 'FPC franchise team', value: null },
    { metric: 'Member transformation story (one)', source: 'Marketing / studios', value: null },
];

// Numbers currently shown live on the site — these are placeholders, not confirmed.
const placeholders = [
    { where: 'Homepage stats', value: '30+', label: 'Locations across brands' },
    { where: 'Homepage stats', value: '10+', label: 'States & growing' },
    { where: 'Homepage stats', value: '2', label: 'Active portfolio brands' },
    { where: 'Brand card · Fitness Premier', value: '20+ / 6+', label: 'locations / states' },
    { where: 'Brand card · Pure Sweat', value: '12+ / 8+', label: 'locations / states' },
];

// Best-shot proof copy. Brackets = real numbers needed before this can ship.
const drafts = [
    'Across Fitness Premier Clubs and Pure Sweat Studios, members show up at [30+] locations in [10+] states.',
    '[15]+ years building, operating, and franchising experience-driven brands.',
    '\u201C[Member name] came for the workout and stayed for the people who knew their name.\u201D — a transformation story from [brand].',
    '[Franchisee name] opened [their first location] in [year] and now operates [N] — proof the system travels.',
];

export default function Proof() {
    const captured = metrics.filter((m) => m.value).length;

    return (
        <DocsLayout
            title="Proof Points — Internal"
            crumbs={[{ label: 'Story Worksheet', href: '/docs/story' }, { label: 'Proof Points' }]}
        >
            <header className="rounded-md border border-charcoal/15 bg-white/70 p-6">
                <div className="flex items-center gap-2">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-cobalt">
                        Credibility Worksheet
                    </p>
                    <StatusBadge status="open" />
                </div>
                <h1 className="font-display mt-2 text-3xl tracking-tight sm:text-4xl">
                    Make it stop feeling anonymous.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-graphite">
                    The narrative asserts belonging and scale but never demonstrates them. Real
                    proof from Fitness Premier and Pure Sweat is the single highest-impact upgrade —
                    and the one thing I genuinely can&rsquo;t invent. This page collects what we
                    need and drafts the copy around it.
                </p>
                <p className="mt-4 font-mono text-xs text-steel">
                    {captured} of {metrics.length} metrics confirmed
                </p>
            </header>

            <Block
                index="01"
                title="What to collect"
                sub="Hand these back as real figures and the rest falls into place."
            >
                <div className="overflow-hidden rounded-md border border-charcoal/15 bg-white/70">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-charcoal/15 font-mono text-[10px] uppercase tracking-wider text-steel">
                            <tr>
                                <th className="px-4 py-2.5 font-medium">Metric</th>
                                <th className="px-4 py-2.5 font-medium">Source</th>
                                <th className="px-4 py-2.5 font-medium">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-charcoal/10">
                            {metrics.map((m) => (
                                <tr key={m.metric}>
                                    <td className="px-4 py-2.5 text-charcoal">{m.metric}</td>
                                    <td className="px-4 py-2.5 text-steel">{m.source}</td>
                                    <td className="px-4 py-2.5">
                                        {m.value ? (
                                            <span className="font-display text-charcoal">
                                                {m.value}
                                            </span>
                                        ) : (
                                            <span className="inline-block min-w-24 rounded-[3px] border border-dashed border-amber-600/40 bg-amber-50/40 px-2 py-0.5 font-mono text-[11px] text-amber-700">
                                                needed
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Block>

            <Block
                index="02"
                title="Placeholders live on the site now"
                sub="These are estimates, not confirmed numbers. A wrong number hurts more than no number."
            >
                <div className="grid gap-2 sm:grid-cols-2">
                    {placeholders.map((p, i) => (
                        <div
                            key={i}
                            className="flex items-baseline justify-between gap-4 rounded-md border border-amber-600/20 bg-amber-50/40 px-4 py-3"
                        >
                            <div>
                                <p className="font-display text-lg tracking-tight text-charcoal">
                                    {p.value}
                                </p>
                                <p className="text-xs text-graphite">{p.label}</p>
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-steel">
                                {p.where}
                            </span>
                        </div>
                    ))}
                </div>
            </Block>

            <Block
                index="03"
                title="Drafted proof copy"
                sub="Best-shot wording. Anything in [brackets] needs a real number before it can ship."
            >
                <div className="space-y-3">
                    {drafts.map((d, i) => (
                        <ProposalBox key={i} label={`Draft ${String(i + 1).padStart(2, '0')}`}>
                            {d}
                        </ProposalBox>
                    ))}
                </div>
            </Block>

            <Block index="04" title="Where it lands">
                <p className="text-sm leading-relaxed text-graphite">
                    Confirmed figures update{' '}
                    <code className="rounded-[3px] bg-charcoal/5 px-1.5 py-0.5 font-mono text-xs text-charcoal">
                        resources/js/data/stats.js
                    </code>{' '}
                    (the homepage proof band) and the per-brand{' '}
                    <code className="rounded-[3px] bg-charcoal/5 px-1.5 py-0.5 font-mono text-xs text-charcoal">
                        stats
                    </code>{' '}
                    in{' '}
                    <code className="rounded-[3px] bg-charcoal/5 px-1.5 py-0.5 font-mono text-xs text-charcoal">
                        brands.js
                    </code>
                    . The member/franchisee stories become a future testimonial or content-pillar
                    section.
                </p>
            </Block>
        </DocsLayout>
    );
}
