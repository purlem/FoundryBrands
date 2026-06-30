import ApproachSteps from '@/Components/Marketing/ApproachSteps';
import MarketingLayout, { PageHeader, Section } from '@/Layouts/MarketingLayout';
import { Link } from '@/catalyst/link';
import { approach, belief } from '@/data/site';
import { Head } from '@inertiajs/react';

export default function HowWeGrow() {
    return (
        <MarketingLayout>
            <Head title="How We Grow">
                <meta
                    head-key="description"
                    name="description"
                    content="People don't want more options — they want places they feel part of. How Experience Foundry acquires experience-driven brands, strengthens their systems, and scales them through franchising without losing what made them special."
                />
            </Head>

            {/* Why we exist — the belonging thesis */}
            <PageHeader
                eyebrow="Why we exist"
                title={
                    <>
                        <span className="block text-balance">{belief.headline}</span>
                        <span className="mt-2 block text-balance text-steel">
                            {belief.subheadline}
                        </span>
                    </>
                }
                description={belief.intro}
                dark
            />

            {/* The thesis as a typographic build — four forces that resolve into belonging. */}
            <Section>
                <div className="mx-auto max-w-3xl">
                    <dl className="divide-y divide-charcoal/10 border-y border-charcoal/10">
                        {belief.dimensions.slice(0, -1).map((item, index) => (
                            <div key={item.term} className="py-8">
                                <dt className="flex items-baseline gap-3">
                                    <span className="font-display text-xl text-cobalt/30">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-display text-2xl tracking-tight text-charcoal sm:text-3xl">
                                        {item.term}
                                    </span>
                                </dt>
                                <dd className="mt-3 max-w-2xl text-lg leading-relaxed text-graphite">
                                    {item.body}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {(() => {
                        const last = belief.dimensions[belief.dimensions.length - 1];
                        return (
                            <div className="mt-12 text-center">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-steel">
                                    Which becomes
                                </p>
                                <h2 className="font-display mt-4 text-4xl tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
                                    {last.term}
                                </h2>
                                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-graphite">
                                    {last.body}
                                </p>
                            </div>
                        );
                    })()}
                </div>
            </Section>

            {/* Bridge from why to how */}
            <Section className="bg-graphite/5">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cobalt">
                        How we grow &middot; Why &ldquo;Foundry&rdquo;
                    </p>
                    <h2 className="font-display mt-4 text-3xl leading-snug tracking-tight text-charcoal sm:text-4xl">
                        Great brands are not accidental.
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-graphite">
                        Belonging is built, not stumbled into. Experience Foundry identifies brands
                        with traction, strengthens the system around them, and scales what already
                        makes them special.
                    </p>
                </div>
            </Section>

            <Section>
                <ApproachSteps showLink={false} compact />
            </Section>

            <Section className="bg-graphite/5">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cobalt">
                        The Platform
                    </p>
                    <h2 className="font-display mt-4 text-3xl tracking-tight text-charcoal sm:text-4xl">
                        {approach.whatWeBring.headline}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-graphite">
                        {approach.whatWeBring.intro}
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {approach.whatWeBring.items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-charcoal/10 bg-white p-8"
                        >
                            <h3 className="font-display text-xl text-charcoal">{item.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-graphite sm:text-base">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <figure className="mx-auto max-w-3xl text-center">
                    <span className="font-display block text-6xl leading-none text-cobalt/30">
                        &ldquo;
                    </span>
                    <blockquote className="font-display -mt-4 text-2xl leading-snug tracking-tight text-charcoal sm:text-3xl lg:text-4xl">
                        We don’t manufacture brands. We strengthen what already works — and build the
                        system that lets it grow.
                    </blockquote>
                </figure>
            </Section>

            <Section className="relative overflow-hidden bg-charcoal">
                <img
                    src="/images/moodboard/strength.jpg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 size-full object-cover opacity-30"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/85 to-charcoal/95" />
                <div className="relative mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel">
                        Where we stand
                    </p>
                    <h2 className="font-display mt-4 text-3xl tracking-tight text-bone sm:text-4xl">
                        Experience is the product.
                        <br />
                        Acquisition + franchising is the growth model.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-steel">
                        Experience Foundry is a franchise holding company and operating platform — an
                        acquisition partner for brands with emotional connection, and a growth
                        partner for founders ready to scale.
                    </p>
                    <Link
                        href="/partner"
                        className="mt-8 inline-block rounded-full bg-bone px-8 py-3 text-sm font-semibold text-charcoal transition hover:bg-bone/90"
                    >
                        Partner With Us
                    </Link>
                </div>
            </Section>
        </MarketingLayout>
    );
}
