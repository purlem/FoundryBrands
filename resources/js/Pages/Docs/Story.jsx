import { STATUS, STATUS_ORDER, StatusBadge, summarize } from '@/Components/Docs/Status';
import {
    Block,
    FieldCard,
    NoteText,
    PageLink,
    ProposalBox,
} from '@/Components/Docs/Worksheet';
import { storyboard } from '@/data/storyboard';
import DocsLayout from '@/Layouts/DocsLayout';

export default function Story() {
    const { chain, coreQuestion, audiences, foundations, elevation, priorities, decisions, updated } =
        storyboard;
    const all = [...audiences, ...foundations, ...elevation, ...priorities, ...decisions];
    const counts = summarize(all);

    return (
        <DocsLayout title="Story Worksheet — Internal">
            {/* Masthead */}
            <header className="rounded-md border border-charcoal/15 bg-white/70 p-6">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-cobalt">
                    Story Worksheet · Working Brainstorm
                </p>
                <h1 className="font-display mt-2 text-3xl tracking-tight sm:text-4xl">
                    Define the story first.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-graphite">
                    A scratchpad for working out the open questions behind Experience Foundry —
                    not a public page. Proposed answers are drafts shown in editable-style boxes;
                    treat them as starting points to react to. As each item is settled, its answer
                    gets baked into the project rules and docs.
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-charcoal/10 pt-4 font-mono text-xs sm:grid-cols-4">
                    <Meta term="Project" value="Experience Foundry" />
                    <Meta term="Updated" value={updated} />
                    <Meta term="Items" value={String(all.length)} />
                    <Meta
                        term="Status"
                        value={STATUS_ORDER.filter((s) => counts[s])
                            .map((s) => `${counts[s]} ${STATUS[s].label.toLowerCase()}`)
                            .join(' · ')}
                    />
                </dl>
            </header>

            {/* How this works — the chain */}
            <Block index="00" title="How this works">
                <ol className="grid gap-3 sm:grid-cols-3">
                    {chain.map((step, i) => (
                        <li
                            key={step.label}
                            className="rounded-md border border-charcoal/15 bg-white/70 p-4"
                        >
                            <span className="font-mono text-xs text-cobalt">
                                step {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="mt-1 text-sm font-semibold text-charcoal">{step.label}</p>
                            <p className="mt-1 text-xs leading-relaxed text-steel">{step.body}</p>
                        </li>
                    ))}
                </ol>
            </Block>

            {/* Core question */}
            <Block index="01" title="The core question">
                <div className="rounded-md border-l-2 border-charcoal bg-white/70 p-5">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-steel">
                        Q
                    </span>
                    <p className="font-display mt-1 text-xl leading-snug tracking-tight text-charcoal sm:text-2xl">
                        {coreQuestion}
                    </p>
                </div>
            </Block>

            {/* Audience beliefs */}
            <Block
                index="02"
                title="What each audience should believe"
                sub="The core question, broken down. Each audience needs one clear target belief."
            >
                <div className="space-y-3">
                    {audiences.map((a) => (
                        <FieldCard key={a.name} label={a.name} status={a.status}>
                            <ProposalBox
                                label="Target belief — draft"
                                placeholder="Type the target belief…"
                            >
                                {a.belief || null}
                            </ProposalBox>
                            {a.note && (
                                <p className="mt-2 text-xs leading-relaxed text-steel">{a.note}</p>
                            )}
                        </FieldCard>
                    ))}
                </div>
            </Block>

            {/* Foundations — what's already strong */}
            <Block
                index="03"
                title="What's already strong"
                sub="The settled foundation from the strategy — solid ground, already baked in. Not open work."
            >
                <div className="space-y-3">
                    {foundations.map((item) => (
                        <FieldCard key={item.title} label={item.title} status={item.status}>
                            <NoteText>{item.note}</NoteText>
                            {item.bakedInto && (
                                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-steel">
                                    baked into · {item.bakedInto}
                                </p>
                            )}
                        </FieldCard>
                    ))}
                </div>
            </Block>

            {/* Elevation */}
            <Block
                index="04"
                title="What needs elevation"
                sub="The four gaps the strategy flagged. Resolve each, then bake it in."
            >
                <div className="space-y-3">
                    {elevation.map((item) => (
                        <FieldCard key={item.title} label={item.title} status={item.status}>
                            <NoteText>{item.note}</NoteText>
                            {item.proposal && <ProposalBox>{item.proposal}</ProposalBox>}
                            {item.bakedInto && (
                                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-steel">
                                    baked into · {item.bakedInto}
                                </p>
                            )}
                            {item.href && <PageLink href={item.href} />}
                        </FieldCard>
                    ))}
                </div>
            </Block>

            {/* Priorities — checklist */}
            <Block
                index="05"
                title="Immediate priorities"
                sub="The pre-launch / agency-handoff checklist, in sequence."
            >
                <ol className="space-y-2">
                    {priorities.map((item, i) => (
                        <li
                            key={item.title}
                            className="flex gap-3 rounded-md border border-charcoal/15 bg-white/70 p-4"
                        >
                            <Checkbox done={item.status === 'resolved'} />
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-3">
                                    <p className="text-sm font-semibold leading-snug text-charcoal">
                                        <span className="font-mono text-xs text-steel">
                                            {String(i + 1).padStart(2, '0')}.{' '}
                                        </span>
                                        {item.title}
                                    </p>
                                    <StatusBadge status={item.status} />
                                </div>
                                <p className="mt-1.5 text-xs leading-relaxed text-graphite">
                                    {item.note}
                                </p>
                                {item.href && <PageLink href={item.href} />}
                            </div>
                        </li>
                    ))}
                </ol>
            </Block>

            {/* Open decisions */}
            <Block
                index="06"
                title="Open decisions"
                sub="Specific calls that still block 'done.'"
            >
                <div className="space-y-3">
                    {decisions.map((item) => (
                        <FieldCard
                            key={item.title}
                            label={item.title}
                            status={item.status}
                            href={item.href}
                        >
                            <NoteText>{item.note}</NoteText>
                            {item.proposal && <ProposalBox>{item.proposal}</ProposalBox>}
                        </FieldCard>
                    ))}
                </div>
            </Block>

            <footer className="mt-10 rounded-md border border-dashed border-charcoal/25 bg-white/40 p-4 font-mono text-xs leading-relaxed text-steel">
                // Resolved items get written into .cursor/rules/brand-positioning.mdc (and any
                future /docs notes), so the decision sticks and guides every future build.
            </footer>
        </DocsLayout>
    );
}

function Meta({ term, value }) {
    return (
        <div>
            <dt className="text-[10px] uppercase tracking-wider text-steel">{term}</dt>
            <dd className="mt-0.5 text-charcoal">{value}</dd>
        </div>
    );
}

function Checkbox({ done }) {
    return (
        <span
            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border text-[10px] ${
                done
                    ? 'border-emerald-600 bg-emerald-600 text-white'
                    : 'border-charcoal/30 bg-white'
            }`}
        >
            {done ? '\u2713' : ''}
        </span>
    );
}
