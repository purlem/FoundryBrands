import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@/catalyst/button';
import { Field, Label } from '@/catalyst/fieldset';
import { Heading } from '@/catalyst/heading';
import { Input } from '@/catalyst/input';
import { Strong, Text, TextLink } from '@/catalyst/text';
import { Head, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="grid w-full max-w-sm grid-cols-1 gap-8">
                <Heading>Create your account</Heading>

                <Field>
                    <Label>Name</Label>
                    <Input
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </Field>

                <Field>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
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
                        required
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
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </Field>

                <Button type="submit" className="w-full" disabled={processing}>
                    Create account
                </Button>

                <Text>
                    Already have an account?{' '}
                    <TextLink href={route('login')}>
                        <Strong>Sign in</Strong>
                    </TextLink>
                </Text>
            </form>
        </GuestLayout>
    );
}
