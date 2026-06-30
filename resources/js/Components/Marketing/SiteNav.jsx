import { Wordmark } from '@/Layouts/MarketingLayout';
import { Link } from '@/catalyst/link';
import { navigation } from '@/data/site';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function SiteNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { url } = usePage();

    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-bone/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <Wordmark />

                <nav className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${
                                isActive(item.href)
                                    ? 'text-charcoal'
                                    : 'text-steel hover:text-charcoal'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="rounded-full bg-charcoal px-5 py-2 text-sm font-medium text-bone transition hover:bg-coral"
                    >
                        Get in Touch
                    </Link>
                </nav>

                <button
                    type="button"
                    className="rounded-lg p-2 text-charcoal md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                >
                    {mobileOpen ? (
                        <XMarkIcon className="size-6" />
                    ) : (
                        <Bars3Icon className="size-6" />
                    )}
                </button>
            </div>

            {mobileOpen && (
                <nav className="border-t border-charcoal/5 px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-base font-medium ${
                                    isActive(item.href) ? 'text-charcoal' : 'text-steel'
                                }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
