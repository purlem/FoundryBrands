import { Wordmark } from '@/Layouts/MarketingLayout';
import { Link } from '@/catalyst/link';
import { navigation, site } from '@/data/site';

export default function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-charcoal/10 bg-charcoal text-bone">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    <div>
                        <Wordmark className="[&_img]:brightness-0 [&_img]:invert [&_span:first-child]:text-bone [&_span:last-child]:text-steel" />
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel">
                            {site.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-steel">
                            Explore
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-bone/80 transition hover:text-bone"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-steel">
                            Portfolio
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="https://fitnesspremierclubs.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-bone/80 transition hover:text-bone"
                                >
                                    Fitness Premier Clubs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.puresweatstudios.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-bone/80 transition hover:text-bone"
                                >
                                    Pure Sweat Studios
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 sm:flex-row sm:items-center">
                    <p className="text-sm text-steel">
                        &copy; {year} {site.name}. All rights reserved.
                    </p>
                    <Link href="/contact" className="text-sm text-cobalt transition hover:text-bone">
                        Contact us
                    </Link>
                </div>
            </div>
        </footer>
    );
}
