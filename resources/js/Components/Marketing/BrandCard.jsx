import { brands } from '@/data/brands';
import { RevealStagger, RevealItem } from '@/Components/Marketing/Reveal';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function BrandCard({ brand, featured = false }) {
    const isExternal = brand.url && brand.status === 'active';
    const isComingSoon = brand.status === 'coming-soon';

    const content = (
        <article
            className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition ${
                isComingSoon
                    ? 'border-dashed border-steel/30 bg-graphite/5'
                    : 'border-charcoal/10 bg-white hover:border-cobalt/30 hover:shadow-xl hover:shadow-charcoal/10'
            }`}
        >
            {brand.image ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                    <img
                        src={brand.image}
                        alt={brand.name}
                        className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                </div>
            ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-graphite/5">
                    <span className="font-display text-5xl text-steel/30">EF</span>
                </div>
            )}

            <div className={`flex flex-1 flex-col ${featured ? 'p-8' : 'p-6 sm:p-8'}`}>
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-cobalt">
                        {brand.category}
                    </p>
                    <h3
                        className={`font-display mt-2 text-charcoal ${
                            featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                        }`}
                    >
                        {brand.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-steel">{brand.tagline}</p>
                </div>
                {isExternal && (
                    <ArrowTopRightOnSquareIcon className="size-5 shrink-0 text-steel transition group-hover:text-cobalt" />
                )}
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-graphite sm:text-base">
                {brand.description}
            </p>

            {brand.stats && (
                <dl className="mt-6 flex gap-8 border-t border-charcoal/5 pt-6">
                    <div>
                        <dt className="text-xs uppercase tracking-wider text-steel">Locations</dt>
                        <dd className="mt-1 text-lg font-semibold text-charcoal">
                            {brand.stats.locations}
                        </dd>
                    </div>
                    <div>
                        <dt className="text-xs uppercase tracking-wider text-steel">States</dt>
                        <dd className="mt-1 text-lg font-semibold text-charcoal">
                            {brand.stats.states}
                        </dd>
                    </div>
                </dl>
            )}

            {isComingSoon && (
                <p className="mt-6 text-sm font-medium text-steel">Coming soon</p>
            )}
            </div>
        </article>
    );

    if (isExternal) {
        return (
            <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                {content}
            </a>
        );
    }

    return content;
}

export function BrandGrid({ limit, showComingSoon = true }) {
    const items = showComingSoon
        ? brands
        : brands.filter((b) => b.status !== 'coming-soon');

    const display = limit ? items.slice(0, limit) : items;

    return (
        <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {display.map((brand) => (
                <RevealItem key={brand.slug} className="h-full">
                    <BrandCard brand={brand} featured={brand.status === 'active'} />
                </RevealItem>
            ))}
        </RevealStagger>
    );
}

export function BrandsSection() {
    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral">
                    Our Portfolio
                </p>
                <h2 className="font-display mt-4 text-3xl tracking-tight text-charcoal sm:text-4xl">
                    Brands people belong to
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-graphite">
                    Experience-driven brands with emotional connection at their core — built around
                    wellness, movement, recovery, and community.
                </p>
            </div>

            <div className="mt-12">
                <BrandGrid />
            </div>
        </div>
    );
}
