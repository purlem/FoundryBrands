import { approach } from '@/data/site';
import { Link } from '@/catalyst/link';
import Reveal, { RevealStagger, RevealItem } from '@/Components/Marketing/Reveal';

export default function ApproachSteps({ showLink = true, compact = false }) {
    return (
        <div>
            {!compact && (
                <Reveal className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral">
                        Our Approach
                    </p>
                    <h2 className="font-display mt-4 text-3xl tracking-tight text-charcoal sm:text-4xl">
                        {approach.headline}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-graphite">{approach.intro}</p>
                </Reveal>
            )}

            <RevealStagger className={`grid gap-8 ${compact ? '' : 'mt-12'} md:grid-cols-3`}>
                {approach.steps.map((step, index) => (
                    <RevealItem
                        key={step.title}
                        className="relative rounded-2xl border border-charcoal/10 bg-white p-8"
                    >
                        <span className="font-display text-5xl text-marigold/40">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-display mt-4 text-xl text-charcoal">{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-graphite sm:text-base">
                            {step.description}
                        </p>
                    </RevealItem>
                ))}
            </RevealStagger>

            {showLink && !compact && (
                <div className="mt-10 text-center">
                    <Link
                        href="/how-we-grow"
                        className="text-sm font-semibold text-cobalt transition hover:text-coral"
                    >
                        Learn more about how we grow &rarr;
                    </Link>
                </div>
            )}
        </div>
    );
}
