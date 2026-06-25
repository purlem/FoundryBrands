import { Head } from '@inertiajs/react';
import { Link } from '@/catalyst/link';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col bg-gray-50 text-black dark:bg-black dark:text-white">
                <header className="flex items-center justify-between px-6 py-4">
                    <ApplicationLogo className="h-8 w-auto" />
                    <nav className="-mx-3 flex justify-end gap-2">
                        {auth?.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-white"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-white"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <main className="flex flex-1 items-center justify-center">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                     👋
                    </h1>
                </main>
            </div>
        </>
    );
}
