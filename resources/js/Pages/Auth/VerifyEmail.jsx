import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@/catalyst/button';
import { Heading } from '@/catalyst/heading';
import { Text, TextLink } from '@/catalyst/text';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="grid w-full max-w-sm grid-cols-1 gap-8">
                <Heading>Verify your email</Heading>

                <Text>
                    Thanks for signing up! Before getting started, could you
                    verify your email address by clicking on the link we just
                    emailed to you? If you didn't receive the email, we will
                    gladly send you another.
                </Text>

                {status === 'verification-link-sent' && (
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <Button type="submit" disabled={processing}>
                        Resend Verification Email
                    </Button>
                    <Text>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="text-zinc-950 underline decoration-zinc-950/50 hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:hover:decoration-white"
                        >
                            Log Out
                        </Link>
                    </Text>
                </form>
            </div>
        </GuestLayout>
    );
}
