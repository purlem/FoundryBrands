import ApplicationLogo from '@/Components/ApplicationLogo';
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/catalyst/dropdown';
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/catalyst/navbar';
import {
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
} from '@/catalyst/sidebar';
import { SidebarLayout } from '@/catalyst/sidebar-layout';
import { Avatar } from '@/catalyst/avatar';
import { usePage } from '@inertiajs/react';
import {
    HomeIcon,
    Cog6ToothIcon,
    ChevronUpIcon,
    ArrowRightStartOnRectangleIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';

const sidebarIconClass =
    'inline-flex shrink-0 [&>svg]:size-5 sm:[&>svg]:size-5 text-zinc-500 dark:text-zinc-400 group-data-[hover]:text-zinc-950 group-data-[current]:text-zinc-950 dark:group-data-[hover]:text-white dark:group-data-[current]:text-white';

function SidebarIcon({ children }) {
    return (
        <span className={sidebarIconClass} data-slot="icon">
            {children}
        </span>
    );
}

function AccountDropdownMenu({ anchor }) {
    return (
        <DropdownMenu className="min-w-64" anchor={anchor}>
            <DropdownItem href={route('profile.edit')}>
                <UserCircleIcon className="size-5 shrink-0" data-slot="icon" />
                <DropdownLabel>My account</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href={route('logout')} method="post" as="button">
                <ArrowRightStartOnRectangleIcon className="size-5 shrink-0" data-slot="icon" />
                <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
        </DropdownMenu>
    );
}

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const appName = import.meta.env.VITE_APP_NAME || 'Foundry Brand';
    const isDashboard = route().current('dashboard');
    const isProfile = route().current('profile.edit');

    const navbar = (
        <Navbar>
            <NavbarSpacer />
            <NavbarSection>
                <Dropdown>
                    <DropdownButton as={NavbarItem}>
                        <Avatar initials={user.name.slice(0, 2)} alt={user.name} />
                    </DropdownButton>
                    <AccountDropdownMenu anchor="bottom end" />
                </Dropdown>
            </NavbarSection>
        </Navbar>
    );

    const sidebar = (
        <Sidebar>
            <SidebarHeader>
                <SidebarItem href={route('dashboard')} current={isDashboard}>
                    <ApplicationLogo className="size-6 fill-zinc-950 dark:fill-white" data-slot="icon" />
                    <SidebarLabel>{appName}</SidebarLabel>
                </SidebarItem>
            </SidebarHeader>

            <SidebarBody>
                <SidebarSection>
                    <SidebarItem href={route('dashboard')} current={isDashboard} className="group">
                        <SidebarIcon>
                            <HomeIcon className="size-5" />
                        </SidebarIcon>
                        <SidebarLabel>Dashboard</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href={route('profile.edit')} current={isProfile} className="group">
                        <SidebarIcon>
                            <Cog6ToothIcon className="size-5" />
                        </SidebarIcon>
                        <SidebarLabel>Settings</SidebarLabel>
                    </SidebarItem>
                </SidebarSection>
            </SidebarBody>

            <SidebarFooter className="max-lg:hidden">
                <Dropdown>
                    <DropdownButton as={SidebarItem}>
                        <span className="flex min-w-0 items-center gap-3">
                            <Avatar initials={user.name.slice(0, 2)} alt={user.name} className="size-10" data-slot="avatar" />
                            <span className="min-w-0">
                                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">{user.name}</span>
                                <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                                    {user.email}
                                </span>
                            </span>
                        </span>
                        <span className="inline-flex shrink-0 text-zinc-500 dark:text-zinc-400" data-slot="icon">
                            <ChevronUpIcon className="size-5" />
                        </span>
                    </DropdownButton>
                    <AccountDropdownMenu anchor="top start" />
                </Dropdown>
            </SidebarFooter>
        </Sidebar>
    );

    return (
        <SidebarLayout navbar={navbar} sidebar={sidebar}>
            {header && <div className="mb-6">{header}</div>}
            {children}
        </SidebarLayout>
    );
}
