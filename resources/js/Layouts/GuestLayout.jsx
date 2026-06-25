import ApplicationLogo from '@/Components/ApplicationLogo';
import { AuthLayout as CatalystAuthLayout } from '@/catalyst/auth-layout';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <CatalystAuthLayout>
            <div className="flex w-full max-w-sm flex-col gap-8">
                <Link href="/" className="flex flex-wrap justify-start">
                    <ApplicationLogo className="h-9 fill-current text-zinc-950 dark:text-white" />
                </Link>
                {children}
            </div>
        </CatalystAuthLayout>
    );
}
