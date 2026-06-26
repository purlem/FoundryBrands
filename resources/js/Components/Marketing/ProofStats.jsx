import { stats } from '@/data/stats';

export default function ProofStats() {
    return (
        <div className="rounded-3xl border border-charcoal/10 bg-white px-6 py-12 sm:px-12">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cobalt">
                    By the numbers
                </p>
                <h2 className="font-display mt-4 text-3xl tracking-tight text-charcoal sm:text-4xl">
                    Proof, not promises
                </h2>
                <p className="mt-4 text-graphite">
                    Real brands, real locations, real communities — growing through systems and
                    operators who care about the experience.
                </p>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <dt className="font-display text-4xl text-charcoal sm:text-5xl">
                            {stat.value}
                        </dt>
                        <dd className="mt-2 text-sm text-steel">{stat.label}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
