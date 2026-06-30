import { Link } from '@/catalyst/link';
import { site } from '@/data/site';
import { motion, useReducedMotion } from 'motion/react';

const HERO_POSTER = '/images/site/hero-fitness.jpg';

export default function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-charcoal px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            {reduceMotion ? (
                <img
                    src={HERO_POSTER}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 size-full object-cover opacity-40"
                />
            ) : (
                <video
                    className="pointer-events-none absolute inset-0 size-full object-cover opacity-50"
                    poster={HERO_POSTER}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    ref={(el) => {
                        // Slow the footage to a calmer, more cinematic pace.
                        if (el) el.playbackRate = 0.6;
                    }}
                >
                    {/* Drop ambient loops here (steam, movement, light shifting).
                        Until they exist, the poster image renders — matching today's look. */}
                    <source src="/videos/site/hero.webm" type="video/webm" />
                    <source src="/videos/site/hero.mp4" type="video/mp4" />
                </video>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/72 to-charcoal" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-marigold/25 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-coral/15 via-transparent to-transparent" />

            <div className="relative mx-auto max-w-4xl text-center [text-shadow:_0_2px_24px_rgb(0_0_0_/_0.55)]">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-medium uppercase tracking-[0.25em] text-marigold"
                >
                    Experience Foundry Brands
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display mt-6 text-4xl leading-tight tracking-tight text-bone sm:text-5xl lg:text-7xl"
                >
                    {site.tagline}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-steel sm:text-xl"
                >
                    {site.heroSubhead}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="/portfolio"
                        className="rounded-full bg-bone px-8 py-3 text-sm font-semibold text-charcoal transition hover:bg-bone/90"
                    >
                        Explore the Portfolio
                    </Link>
                    <Link
                        href="/how-we-grow"
                        className="rounded-full border border-bone/20 px-8 py-3 text-sm font-semibold text-bone transition hover:border-bone/40 hover:bg-bone/5"
                    >
                        How We Grow
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
