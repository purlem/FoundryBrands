import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@/catalyst/button';
import { Field, Label } from '@/catalyst/fieldset';
import { Heading } from '@/catalyst/heading';
import { Input } from '@/catalyst/input';
import { Text } from '@/catalyst/text';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <form onSubmit={submit} className="grid w-full max-w-sm grid-cols-1 gap-8">
                <Heading>Confirm password</Heading>

                <Text>
                    This is a secure area of the application. Please confirm
                    your password before continuing.
                </Text>

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

                <Button type="submit" className="w-full" disabled={processing}>
                    Confirm
                </Button>
            </form>
        </GuestLayout>
    );
}
