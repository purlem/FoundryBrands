import MarketingLayout, { PageHeader, Section } from '@/Layouts/MarketingLayout';
import { Link } from '@/catalyst/link';
import { partner } from '@/data/site';
import { Head } from '@inertiajs/react';

function Bullet({ children }) {
    return (
        <li className="flex gap-3 text-graphite sm:text-lg">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cobalt" />
            {children}
        </li>
    );
}

export default function Partner() {
    const { intro, founders, close } = partner;

    return (
        <MarketingLayout>
            <Head title="Partner With Us">
                <meta
                    head-key="description"
                    name="description"
                    content="Experience Foundry partners with and acquires experience-driven brands, then scales them through franchising and operator-led support — without losing what made them special."
                />
            </Head>

            <PageHeader
                eyebrow={intro.eyebrow}
                title={intro.title}
                description={intro.body}
                dark
            />

            {/* Founders & Sellers — the primary audience */}
            <Section id={founders.id}>
                <div className="mx-auto max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cobalt">
                        {founders.eyebrow}
                    </p>
                    <h2 className="font-display mt-4 text-3xl tracking-tight text-charcoal sm:text-4xl">
                        {founders.headline}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-graphite sm:text-xl">
                        {founders.sub}
                    </p>

                    <ul className="mt-8 space-y-3">
                        {founders.points.map((point) => (
                            <Bullet key={point}>{point}</Bullet>
                        ))}
                    </ul>
                </div>

                <div className="mx-auto mt-16 max-w-3xl">
                    <h3 className="font-display text-2xl text-charcoal">{founders.lookFor.title}</h3>
                    <ul className="mt-6 space-y-3">
                        {founders.lookFor.items.map((item) => (
                            <Bullet key={item}>{item}</Bullet>
                        ))}
                    </ul>
                </div>

                <div className="mx-auto mt-10 max-w-3xl">
                    <Link
                        href={founders.cta.href}
                        className="inline-block rounded-full bg-charcoal px-8 py-3 text-sm font-semibold text-bone transition hover:bg-graphite"
                    >
                        {founders.cta.label}
                    </Link>
                </div>
            </Section>

            <Section className="relative overflow-hidden bg-charcoal">
                <img
                    src="/images/moodboard/connection.jpg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 size-full object-cover opacity-35"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/85 to-charcoal/95" />
                <div className="relative mx-auto max-w-3xl text-center">
                    <p className="font-display text-2xl leading-snug text-bone sm:text-3xl">
                        {close}
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-full bg-bone px-8 py-3 text-sm font-semibold text-charcoal transition hover:bg-bone/90"
                    >
                        Start a Conversation
                    </Link>
                </div>
            </Section>
        </MarketingLayout>
    );
}
