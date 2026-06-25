import InputError from '@/Components/InputError';
import { Button } from '@/catalyst/button';
import { Field, Label } from '@/catalyst/fieldset';
import { Input } from '@/catalyst/input';
import { Subheading } from '@/catalyst/heading';
import { Text, TextLink } from '@/catalyst/text';
import { Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <div className="space-y-1">
                <Subheading>Profile Information</Subheading>
                <Text>
                    Update your account&apos;s profile information and email address.
                </Text>
            </div>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <Field>
                    <Label>Name</Label>
                    <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoFocus
                        autoComplete="name"
                    />
                    <InputError message={errors.name} className="mt-2" />
                </Field>

                <Field>
                    <Label>Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError message={errors.email} className="mt-2" />
                </Field>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <Text>
                            Your email address is unverified.{' '}
                            <TextLink href={route('verification.send')} method="post" as="button">
                                Click here to re-send the verification email.
                            </TextLink>
                        </Text>

                        {status === 'verification-link-sent' && (
                            <Text className="mt-2 font-medium text-green-600 dark:text-green-400">
                                A new verification link has been sent to your email address.
                            </Text>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <Button type="submit" disabled={processing}>
                        Save
                    </Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <Text>Saved.</Text>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
