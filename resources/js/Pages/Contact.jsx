import InputError from '@/Components/InputError';
import MarketingLayout, { PageHeader, Section } from '@/Layouts/MarketingLayout';
import { Button } from '@/catalyst/button';
import { Field, Label } from '@/catalyst/fieldset';
import { Input } from '@/catalyst/input';
import { Select } from '@/catalyst/select';
import { Textarea } from '@/catalyst/textarea';
import { contactRoles } from '@/data/site';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function Contact() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        role: 'founder',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <MarketingLayout>
            <Head title="Contact">
                <meta
                    head-key="description"
                    name="description"
                    content="Get in touch with Experience Foundry — for founders and sellers ready to scale an experience-driven brand without losing what made it special."
                />
            </Head>

            <PageHeader
                eyebrow="Contact"
                title="Start a conversation"
                description="Whether you're a founder exploring a partnership or simply curious about what we're building — we'd love to hear from you."
            />

            <Section>
                <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-2">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cobalt">
                            Who we hear from
                        </p>
                        <h2 className="font-display mt-3 text-2xl tracking-tight text-charcoal sm:text-3xl">
                            Let&rsquo;s find the right way to grow together.
                        </h2>

                        <ul className="mt-8 space-y-5">
                            {[
                                'Founders and sellers ready to scale their brand',
                                'Brands with traction, loyalty, and a story',
                                'Partners and collaborators in wellness & fitness',
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-graphite">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cobalt" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 border-t border-charcoal/10 pt-6">
                            <p className="text-sm leading-relaxed text-steel">
                                We read every message ourselves. Tell us a little about what
                                you&rsquo;re building, and we&rsquo;ll be in touch — no pressure,
                                just a conversation.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        {flash?.success && (
                            <div className="mb-6 rounded-xl border border-cobalt/20 bg-cobalt/5 px-4 py-3 text-sm text-charcoal">
                                {flash.success}
                            </div>
                        )}

                        <form
                            onSubmit={submit}
                            className="grid grid-cols-1 gap-6 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-xl shadow-charcoal/5 sm:p-8"
                        >
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <Field>
                                    <Label>Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        required
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </Field>

                                <Field>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        required
                                        autoComplete="email"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </Field>
                            </div>

                            <Field>
                                <Label>I am a...</Label>
                                <Select
                                    name="role"
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)}
                                >
                                    {contactRoles.map((role) => (
                                        <option key={role.value} value={role.value}>
                                            {role.label}
                                        </option>
                                    ))}
                                </Select>
                                <InputError message={errors.role} className="mt-2" />
                            </Field>

                            <Field>
                                <Label>Message</Label>
                                <Textarea
                                    name="message"
                                    rows={6}
                                    value={data.message}
                                    required
                                    placeholder={'Tell us about your brand, concept, or what you’re looking for…'}
                                    onChange={(e) => setData('message', e.target.value)}
                                />
                                <InputError message={errors.message} className="mt-2" />
                            </Field>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Button type="submit" disabled={processing} color="dark/zinc">
                                    {processing ? 'Sending...' : 'Send Message'}
                                </Button>
                                <p className="text-xs text-steel">
                                    We typically reply within a couple of business days.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
        </MarketingLayout>
    );
}
