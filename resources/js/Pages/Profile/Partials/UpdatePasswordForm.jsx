import InputError from '@/Components/InputError';
import { Button } from '@/catalyst/button';
import { Field, Label } from '@/catalyst/fieldset';
import { Subheading } from '@/catalyst/heading';
import { Input } from '@/catalyst/input';
import { Text } from '@/catalyst/text';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <div className="space-y-1">
                <Subheading>Update Password</Subheading>
                <Text>
                    Ensure your account is using a long, random password to stay secure.
                </Text>
            </div>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <Field>
                    <Label>Current Password</Label>
                    <Input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        autoComplete="current-password"
                    />
                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </Field>

                <Field>
                    <Label>New Password</Label>
                    <Input
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        autoComplete="new-password"
                    />
                    <InputError message={errors.password} className="mt-2" />
                </Field>

                <Field>
                    <Label>Confirm Password</Label>
                    <Input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        autoComplete="new-password"
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </Field>

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
