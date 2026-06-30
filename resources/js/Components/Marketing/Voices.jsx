import Portrait from '@/Components/Marketing/Portrait';
import { voices } from '@/data/voices';

function VoiceCard({ voice }) {
    return (
        <figure className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-7">
            <blockquote className="flex-1 text-lg leading-relaxed text-charcoal">
                <span className="font-display mr-1 text-2xl leading-none text-cobalt/40">&ldquo;</span>
                {voice.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4 border-t border-charcoal/10 pt-6">
                <Portrait src={voice.portrait} name={voice.name} className="size-12 shrink-0" />
                <div>
                    <p className="font-display text-base text-charcoal">{voice.name}</p>
                    <p className="mt-0.5 text-sm text-steel">{voice.role}</p>
                </div>
            </figcaption>
        </figure>
    );
}

export default function Voices({ limit }) {
    const quotes = limit ? voices.quotes.slice(0, limit) : voices.quotes;

    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cobalt">
                    {voices.eyebrow}
                </p>
                <h2 className="font-display mt-4 text-3xl tracking-tight text-charcoal sm:text-4xl">
                    {voices.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-graphite">{voices.intro}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {quotes.map((voice) => (
                    <VoiceCard key={voice.name} voice={voice} />
                ))}
            </div>
        </div>
    );
}
