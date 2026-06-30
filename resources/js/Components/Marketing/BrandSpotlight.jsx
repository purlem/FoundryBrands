import Portrait from '@/Components/Marketing/Portrait';
import { brands } from '@/data/brands';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

function ChapterHeader({ brand, number }) {
    return (
        <div className="border-t border-charcoal/15 pt-8">
            <div className="flex items-baseline gap-4">
                <span className="font-display text-sm tabular-nums text-marigold">{number}</span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-steel">
                    {brand.category}
                </span>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <h2 className="font-display text-4xl tracking-tight text-charcoal sm:text-5xl">
                    {brand.name}
                </h2>
                <p className="text-base font-medium text-steel sm:pb-1 sm:text-right">
                    {brand.tagline}
                </p>
            </div>
        </div>
    );
}

export default function BrandSpotlight({ brand, index = 0 }) {
    const number = String(index + 1).padStart(2, '0');
    const detail = brand.portfolio;
    const isComingSoon = brand.status === 'coming-soon';
    const isExternal = brand.url && brand.status === 'active';
    const reversed = index % 2 === 1;

    if (isComingSoon) {
        return (
            <article id={`brand-${brand.slug}`} className="scroll-mt-24">
                <ChapterHeader brand={brand} number={number} />
                <p className="mt-10 max-w-2xl text-lg leading-relaxed text-graphite">
                    {brand.description}
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.15em] text-steel">
                    In development
                </p>
            </article>
        );
    }

    return (
        <article id={`brand-${brand.slug}`} className="scroll-mt-24">
            <ChapterHeader brand={brand} number={number} />

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-5 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal sm:aspect-[3/2] lg:aspect-[4/5]">
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                    </div>

                    {brand.stats && (
                        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-charcoal/10">
                            <div className="bg-bone p-5">
                                <dt className="text-xs uppercase tracking-wider text-steel">
                                    Locations
                                </dt>
                                <dd className="font-display mt-1 text-3xl text-charcoal">
                                    {brand.stats.locations}
                                </dd>
                            </div>
                            <div className="bg-bone p-5">
                                <dt className="text-xs uppercase tracking-wider text-steel">
                                    States
                                </dt>
                                <dd className="font-display mt-1 text-3xl text-charcoal">
                                    {brand.stats.states}
                                </dd>
                            </div>
                        </dl>
                    )}

                    {isExternal && (
                        <a
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cobalt transition hover:text-coral"
                        >
                            Visit site
                            <ArrowTopRightOnSquareIcon className="size-4" />
                        </a>
                    )}
                </div>

                <div className={`lg:col-span-7 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <p className="text-xl leading-relaxed text-charcoal">{brand.description}</p>

                    {detail?.experience && (
                        <figure className="mt-8 border-l-2 border-coral/50 pl-6">
                            <figcaption className="text-xs font-medium uppercase tracking-[0.2em] text-coral">
                                {detail.experience.eyebrow}
                            </figcaption>
                            <blockquote className="font-display mt-4 text-2xl leading-snug tracking-tight text-charcoal sm:text-[1.75rem]">
                                {detail.experience.body}
                            </blockquote>
                        </figure>
                    )}

                    {detail?.story && (
                        <div className="mt-8 border-t border-charcoal/10 pt-8">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cobalt">
                                {detail.story.eyebrow}
                            </p>

                            {detail.story.founder && (
                                <div className="mt-5 flex items-center gap-4">
                                    <Portrait
                                        src={detail.story.founder.portrait}
                                        name={detail.story.founder.name}
                                        className="size-14 shrink-0"
                                    />
                                    <div>
                                        <p className="font-display text-lg text-charcoal">
                                            {detail.story.founder.name}
                                        </p>
                                        <p className="mt-0.5 text-sm text-steel">
                                            {detail.story.founder.role}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="mt-5 space-y-5">
                                {detail.story.paragraphs.map((paragraph) => (
                                    <p
                                        key={paragraph.slice(0, 40)}
                                        className="text-base leading-relaxed text-graphite"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {detail?.gallery && (
                        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                            {detail.gallery.map((image) => (
                                <figure key={image.src} className="group">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-charcoal">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    {image.caption && (
                                        <figcaption className="mt-2 text-xs leading-snug text-steel">
                                            {image.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

export function BrandSpotlightList() {
    return (
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {brands.map((brand, index) => (
                <BrandSpotlight key={brand.slug} brand={brand} index={index} />
            ))}
        </div>
    );
}
