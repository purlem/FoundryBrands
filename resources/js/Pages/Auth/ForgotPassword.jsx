import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@/catalyst/button';
import { Field, Label } from '@/catalyst/fieldset';
import { Heading } from '@/catalyst/heading';
import { Input } from '@/catalyst/input';
import { Strong, Text, TextLink } from '@/catalyst/text';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <form onSubmit={submit} className="grid w-full max-w-sm grid-cols-1 gap-8">
                <Heading>Forgot your password?</Heading>

                <Text>
                    No problem. Just let us know your email address and we will
                    email you a password reset link.
                </Text>

                {status && (
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        {status}
                    </div>
                )}

                <Field>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </Field>

                <div className="flex flex-col gap-4">
                    <Button type="submit" className="w-full" disabled={processing}>
                        Email Password Reset Link
                    </Button>
                    <Text>
                        <TextLink href={route('login')}>
                            <Strong>Back to sign in</Strong>
                        </TextLink>
                    </Text>
                </div>
            </form>
        </GuestLayout>
    );
}
