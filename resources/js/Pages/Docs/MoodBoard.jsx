import LogoConcepts from '@/Components/Docs/LogoConcepts';
import { StatusBadge } from '@/Components/Docs/Status';
import { Block, FieldCard, NoteText, ProposalBox } from '@/Components/Docs/Worksheet';
import DocsLayout from '@/Layouts/DocsLayout';

const palette = [
    { name: 'Soft Charcoal', hex: '#232323', role: 'Primary text · dark sections', dark: true },
    { name: 'Warm Graphite', hex: '#3B3F46', role: 'Dark gradients (pairs with charcoal)', dark: true },
    {
        name: 'Bone (cool)',
        hex: '#F0F2F4',
        role: 'Background',
        note: 'Deviates from the deck\u2019s warm Bone White (#F3F1EC) — see decision below.',
    },
    { name: 'Warm Steel', hex: '#7C8793', role: 'Muted text · labels · eyebrows', dark: true },
    { name: 'Muted Cobalt', hex: '#4B6EAF', role: 'The single accent — used sparingly', dark: true },
];

const imagery = [
    { src: '/images/moodboard/recovery-sauna.jpg', label: 'Recovery · Ritual' },
    { src: '/images/moodboard/space.jpg', label: 'The Space' },
    { src: '/images/moodboard/studio.jpg', label: 'The Studio' },
    { src: '/images/moodboard/movement.jpg', label: 'Movement' },
    { src: '/images/moodboard/strength.jpg', label: 'Strength' },
    { src: '/images/moodboard/connection.jpg', label: 'Connection' },
];

const dos = [
    'Real people, movement, spaces, rituals',
    'Cinematic, editorial, human warmth',
    'Generous negative space — let images breathe',
    'Premium wellness meets modern hospitality',
];

const donts = [
    'Feminine spa palettes',
    'Overly earthy / crunchy wellness',
    'Startup-tech-blue overload',
    'Corporate stock + abstract franchise imagery',
    'Too many colors',
];

const briefDeliverables = [
    'Primary logo + monogram mark',
    'Wordmark (Archivo) with "Brands" kicker lockup',
    'Favicon / app icon (must read at 16px)',
    'One-color and reversed (bone-on-charcoal) versions',
    'Color tokens + usage rules (cobalt as sole accent)',
    'Type scale (display vs. body)',
    'Photography art-direction guide',
    'Social / template starter kit',
];

export default function MoodBoard() {
    return (
        <DocsLayout
            title="Visual Mood Board — Internal"
            crumbs={[{ label: 'Story Worksheet', href: '/docs/story' }, { label: 'Visual Mood Board' }]}
        >
            <header className="rounded-md border border-charcoal/15 bg-white/70 p-6">
                <div className="flex items-center gap-2">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-cobalt">
                        Visual Direction
                    </p>
                    <StatusBadge status="proposed" />
                </div>
                <h1 className="font-display mt-2 text-3xl tracking-tight sm:text-4xl">
                    Modern Industrial Wellness
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-graphite">
                    Premium, intentional, elevated, human, and experience-led. The feeling sits
                    where modern wellness meets hospitality — structured and cinematic, never
                    corporate or spa-soft. The premium signal is restraint, not ornament.
                </p>
            </header>

            <Block index="01" title="Palette" sub="Five tokens. Cobalt is the only accent.">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {palette.map((c) => (
                        <div
                            key={c.name}
                            className="overflow-hidden rounded-md border border-charcoal/15 bg-white"
                        >
                            <div
                                className="flex h-20 items-end p-2"
                                style={{ backgroundColor: c.hex }}
                            >
                                <span
                                    className={`font-mono text-[10px] uppercase tracking-wider ${
                                        c.dark ? 'text-white/80' : 'text-charcoal/60'
                                    }`}
                                >
                                    {c.hex}
                                </span>
                            </div>
                            <div className="p-3">
                                <p className="text-xs font-semibold text-charcoal">{c.name}</p>
                                <p className="mt-1 text-[11px] leading-relaxed text-steel">
                                    {c.role}
                                </p>
                                {c.note && (
                                    <p className="mt-1.5 text-[11px] leading-relaxed text-amber-700">
                                        {c.note}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Block>

            <Block index="02" title="Typography" sub="Archivo throughout — the deck's own typeface.">
                <div className="space-y-3">
                    <div className="rounded-md border border-charcoal/15 bg-white/70 p-6">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                            Display · Archivo ExtraBold · tight tracking
                        </p>
                        <p className="font-display mt-2 text-3xl tracking-tight text-charcoal sm:text-4xl">
                            We build brands people belong to.
                        </p>
                    </div>
                    <div className="rounded-md border border-charcoal/15 bg-white/70 p-6">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                            Body · Archivo regular / light
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-graphite">
                            We acquire experience-driven brands that already work, strengthen the
                            systems behind them, and scale them through franchising — without losing
                            what made them special.
                        </p>
                    </div>
                </div>
            </Block>

            <Block
                index="03"
                title="Imagery direction"
                sub="Real people, movement, spaces, rituals — cinematic and human. References: Equinox, Alo, modern hospitality."
            >
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {imagery.map((img) => (
                        <figure
                            key={img.src}
                            className="group relative overflow-hidden rounded-md bg-charcoal"
                        >
                            <img
                                src={img.src}
                                alt={img.label}
                                className="aspect-[4/3] h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                            />
                            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-2 font-mono text-[10px] uppercase tracking-wider text-bone">
                                {img.label}
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md border border-emerald-600/20 bg-emerald-50/50 p-4">
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
                            Aim for
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-graphite">
                            {dos.map((d) => (
                                <li key={d}>· {d}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-md border border-amber-600/20 bg-amber-50/50 p-4">
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-800">
                            Avoid
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-graphite">
                            {donts.map((d) => (
                                <li key={d}>· {d}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Block>

            <Block
                index="04"
                title="Creative brief — logo + identity system"
                sub="Ready to hand to an agency. The strategy no longer blocks design."
            >
                <FieldCard label="The mark" status="proposed">
                    <ProposalBox label="Brief — draft">
                        A single geometric monogram that reads as something <em>forged or cast</em>{' '}
                        — a modern industrial glyph (e.g. a chamfered &ldquo;EF&rdquo; or an abstract
                        molten-to-solid form), not a literal anvil. It must work in one color,
                        survive at favicon size, and feel etched/debossed. The wordmark stays Archivo
                        with tight tracking and &ldquo;Brands&rdquo; as a quiet uppercase kicker. The
                        premium signal is restraint, not ornament.
                    </ProposalBox>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-steel">
                        deliverables
                    </p>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                        {briefDeliverables.map((d) => (
                            <div
                                key={d}
                                className="flex items-center gap-2 rounded-[3px] border border-charcoal/10 bg-white px-3 py-2 text-xs text-graphite"
                            >
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                                {d}
                            </div>
                        ))}
                    </div>
                </FieldCard>
            </Block>

            <Block
                index="05"
                title="Logo concepts — first pass"
                sub="In-house exploration against the brief above — not final, not commissioned. Each mark is single-color (so it survives reversed + favicon use) with cobalt as the only accent. Shown at full size, reversed on charcoal, at favicon size, and locked up with the Archivo wordmark."
            >
                <ProposalBox label="Reading these">
                    These are sketches to react to, not a chosen direction. The goal is to find which
                    territory feels most like the brand — a literal monogram (01–03), or a more
                    abstract “experience/platform” glyph (04–06) — before any outside design spend.
                </ProposalBox>
                <div className="mt-4">
                    <LogoConcepts />
                </div>
            </Block>

            <Block index="06" title="Decisions on this page">
                <div className="space-y-3">
                    <FieldCard label="Bone background deviation" status="proposed">
                        <NoteText>
                            We use a cooler bone (#F0F2F4) vs. the deck&rsquo;s warm Bone White
                            (#F3F1EC).
                        </NoteText>
                        <ProposalBox>
                            Keep the cooler bone. A cooler, flatter neutral reads more &ldquo;modern
                            industrial&rdquo; and pairs better with cobalt + steel; the warm cream
                            leans spa/hospitality — the exact direction the deck says to avoid.
                        </ProposalBox>
                    </FieldCard>
                    <FieldCard label="Logo design" status="open">
                        <NoteText>
                            Brief is ready and a first pass of in-house concepts now sits in section
                            05 to react to. The interim Archivo text wordmark remains a perfectly
                            good placeholder; commissioning a designer is a later, optional step.
                        </NoteText>
                    </FieldCard>
                </div>
            </Block>
        </DocsLayout>
    );
}
