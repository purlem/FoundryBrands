import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@/catalyst/button';
import { Field, Label } from '@/catalyst/fieldset';
import { Heading } from '@/catalyst/heading';
import { Input } from '@/catalyst/input';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit} className="grid w-full max-w-sm grid-cols-1 gap-8">
                <Heading>Reset password</Heading>

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
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </Field>

                <Field>
                    <Label>Confirm Password</Label>
                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </Field>

                <Button type="submit" className="w-full" disabled={processing}>
                    Reset Password
                </Button>
            </form>
        </GuestLayout>
    );
}
