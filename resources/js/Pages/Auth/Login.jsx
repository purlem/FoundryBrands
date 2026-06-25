import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@/catalyst/button';
import { Checkbox, CheckboxField } from '@/catalyst/checkbox';
import { Field, Label } from '@/catalyst/fieldset';
import { Heading } from '@/catalyst/heading';
import { Input } from '@/catalyst/input';
import { Strong, Text, TextLink } from '@/catalyst/text';
import { Head, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <form onSubmit={submit} className="grid w-full max-w-sm grid-cols-1 gap-8">
                <Heading>Sign in to your account</Heading>

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
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </Field>

                <Field>
                    <Label>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </Field>

                <div className="flex items-center justify-between">
                    <CheckboxField>
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <Label>Remember me</Label>
                    </CheckboxField>
                    {canResetPassword && (
                        <Text>
                            <TextLink href={route('password.request')}>
                                <Strong>Forgot password?</Strong>
                            </TextLink>
                        </Text>
                    )}
                </div>

                <Button type="submit" className="w-full" disabled={processing}>
                    Log in
                </Button>

                <Text>
                    Don't have an account?{' '}
                    <TextLink href={route('register')}>
                        <Strong>Sign up</Strong>
                    </TextLink>
                </Text>
            </form>
        </GuestLayout>
    );
}
