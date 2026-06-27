import { Link } from '@/catalyst/link';
import SiteFooter from '@/Components/Marketing/SiteFooter';
import SiteNav from '@/Components/Marketing/SiteNav';

export default function MarketingLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}

export function Wordmark({ className = '' }) {
    return (
        <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
            <img
                src="/images/logo/foundry-mark.png"
                alt=""
                aria-hidden="true"
                className="h-9 w-auto sm:h-10"
            />
            <span className="inline-flex flex-col">
                <span className="font-display text-xl leading-none tracking-tight text-charcoal sm:text-2xl">
                    Foundry
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-steel sm:text-xs">
                    Brands
                </span>
            </span>
        </Link>
    );
}

export function PageHeader({ eyebrow, title, description, dark = false }) {
    return (
        <div
            className={`px-6 py-16 sm:py-24 lg:px-8 ${
                dark ? 'bg-charcoal text-bone' : 'bg-bone text-charcoal'
            }`}
        >
            <div className="mx-auto max-w-3xl text-center">
                {eyebrow && (
                    <p
                        className={`text-sm font-medium uppercase tracking-[0.2em] ${
                            dark ? 'text-steel' : 'text-cobalt'
                        }`}
                    >
                        {eyebrow}
                    </p>
                )}
                <h1 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                    {title}
                </h1>
                {description && (
                    <p
                        className={`mt-6 text-lg leading-relaxed sm:text-xl ${
                            dark ? 'text-steel' : 'text-graphite'
                        }`}
                    >
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

export function Section({ children, className = '', id }) {
    return (
        <section id={id} className={`px-6 py-16 sm:py-24 lg:px-8 ${className}`}>
            <div className="mx-auto max-w-7xl">{children}</div>
        </section>
    );
}