import { BrandSpotlightList } from '@/Components/Marketing/BrandSpotlight';
import ProofStats from '@/Components/Marketing/ProofStats';
import Voices from '@/Components/Marketing/Voices';
import MarketingLayout, { PageHeader, Section } from '@/Layouts/MarketingLayout';
import { Link } from '@/catalyst/link';
import { portfolio } from '@/data/site';
import { Head } from '@inertiajs/react';

export default function Portfolio() {
    return (
        <MarketingLayout>
            <Head title="Portfolio">
                <meta
                    head-key="description"
                    name="description"
                    content="The Experience Foundry portfolio — experience-driven brands built around connection, routine, and identity, each keeping its own identity while sharing an operating platform built to scale."
                />
            </Head>

            <PageHeader
                eyebrow={portfolio.eyebrow}
                title={portfolio.title}
                description={portfolio.intro}
                dark
            />

            <Section>
                <BrandSpotlightList />
            </Section>

            <Section className="bg-graphite/5">
                <Voices />
            </Section>

            <Section>
                <ProofStats />
            </Section>

            <Section>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
                        {portfolio.tie.title}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-graphite">
                        {portfolio.tie.body}
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/how-we-grow"
                            className="text-sm font-semibold text-cobalt transition hover:text-charcoal"
                        >
                            Why belonging is the advantage &rarr;
                        </Link>
                    </div>
                </div>
            </Section>

            <Section className="bg-gradient-to-br from-graphite to-charcoal">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-3xl tracking-tight text-bone sm:text-4xl">
                        Built something people love? Let’s talk.
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-steel">
                        We’re always looking for the next experience-driven brand to join the
                        Foundry.
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
