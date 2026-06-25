import InputError from '@/Components/InputError';
import { Button } from '@/catalyst/button';
import {
    Dialog,
    DialogActions,
    DialogBody,
    DialogDescription,
    DialogTitle,
} from '@/catalyst/dialog';
import { Field, Label } from '@/catalyst/fieldset';
import { Subheading } from '@/catalyst/heading';
import { Input } from '@/catalyst/input';
import { Text } from '@/catalyst/text';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={className}>
            <div className="space-y-1">
                <Subheading>Delete Account</Subheading>
                <Text>
                    Once your account is deleted, all of its resources and data will
                    be permanently deleted. Before deleting your account, please
                    download any data or information that you wish to retain.
                </Text>
            </div>

            <Button color="red" className="mt-6" onClick={confirmUserDeletion}>
                Delete Account
            </Button>

            <Dialog open={confirmingUserDeletion} onClose={closeModal} size="sm">
                <form onSubmit={deleteUser}>
                    <DialogTitle>Delete account</DialogTitle>
                    <DialogDescription>
                        Once your account is deleted, all of its resources and data
                        will be permanently deleted. Please enter your password to
                        confirm you would like to permanently delete your account.
                    </DialogDescription>
                    <DialogBody>
                        <Field>
                            <Label className="sr-only">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                placeholder="Password"
                                autoFocus
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </Field>
                    </DialogBody>
                    <DialogActions>
                        <Button plain type="button" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button color="red" type="submit" disabled={processing}>
                            Delete Account
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </section>
    );
}
