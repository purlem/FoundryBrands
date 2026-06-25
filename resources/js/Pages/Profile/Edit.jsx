import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Divider } from '@/catalyst/divider';
import { Heading } from '@/catalyst/heading';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="mx-auto max-w-4xl">
                <Heading>Settings</Heading>
                <Divider className="my-10 mt-6" />

                <UpdateProfileInformationForm />

                <Divider className="my-10" soft />

                <UpdatePasswordForm />

                <Divider className="my-10" soft />

                <DeleteUserForm />
            </div>
        </AuthenticatedLayout>
    );
}
