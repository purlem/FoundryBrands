import ApproachSteps from '@/Components/Marketing/ApproachSteps';
import { BrandGrid } from '@/Components/Marketing/BrandCard';
import Hero from '@/Components/Marketing/Hero';
import ProofStats from '@/Components/Marketing/ProofStats';
import MarketingLayout, { Section } from '@/Layouts/MarketingLayout';
import { Link } from '@/catalyst/link';
import { belief, homeCta, site } from '@/data/site';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <MarketingLayout>
            <Head title={site.tagline}>
                <meta head-key="description" name="description" content={site.description} />
                <meta head-key="og:title" property="og:title" content={`${site.name} — ${site.tagline}`} />
                <meta head-key="og:description" property="og:description" content={site.description} />
            </Head>

            <Hero />

            <Section>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-2xl leading-snug tracking-tight text-charcoal sm:text-3xl lg:text-4xl">
                        {belief.headline}{' '}
                        <span className="text-steel">{belief.subheadline}</span>
                    </h2>
                    <Link
                        href="/how-we-grow"
                        className="mt-6 inline-block text-sm font-semibold text-cobalt transition hover:text-charcoal"
                    >
                        What we believe &rarr;
                    </Link>
                </div>
            </Section>

            <Section>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cobalt">
                        Our Portfolio
                    </p>
                    <h2 className="font-display mt-4 text-3xl tracking-tight text-charcoal sm:text-4xl">
                        Brands people belong to
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-graphite">
                        Experience-driven brands with emotional connection at their core — each with
                        its own identity, all built to scale.
                    </p>
                </div>
                <div className="mt-12">
                    <BrandGrid />
                </div>
                <div className="mt-10 text-center">
                    <Link
                        href="/portfolio"
                        className="text-sm font-semibold text-cobalt transition hover:text-charcoal"
                    >
                        Explore the full portfolio &rarr;
                    </Link>
                </div>
            </Section>

            <Section>
                <ApproachSteps />
            </Section>

            <Section>
                <ProofStats />
            </Section>

            <Section>
                <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-graphite to-charcoal px-8 py-14 text-center sm:px-16">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel">
                        {homeCta.eyebrow}
                    </p>
                    <h2 className="font-display mt-4 text-3xl tracking-tight text-bone sm:text-4xl">
                        {homeCta.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-steel">
                        {homeCta.body}
                    </p>
                    <Link
                        href={homeCta.href}
                        className="mt-8 inline-block rounded-full bg-bone px-8 py-3 text-sm font-semibold text-charcoal transition hover:bg-bone/90"
                    >
                        {homeCta.cta}
                    </Link>
                </div>
            </Section>
        </MarketingLayout>
    );
}
