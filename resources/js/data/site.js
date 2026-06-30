export const site = {
    name: 'Experience Foundry',
    tagline: 'We build brands people belong to.',
    // Hero subheadline — leads with the lived experience, not the business model.
    heroSubhead:
        'We grow the kind of brands people build their lives around — the gym where everyone knows your name, the studio that becomes the hour you protect. Experience Foundry helps experience-driven brands reach more people, without losing what made them feel like home.',
    // Shorter line for SEO/OG meta tags.
    description:
        'Experience Foundry grows brands people build their lives around — experience-driven gyms, studios, and wellness brands designed around connection, routine, and belonging.',
    url: 'https://experiencefoundrybrands.com',
};

export const navigation = [
    { name: 'How We Grow', href: '/how-we-grow' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Partner With Us', href: '/partner' },
];

// Homepage closing CTA — the site's primary audience is founders/sellers.
// (We work with franchisees, but franchisee recruitment lives at the brand level,
// so the corporate site does not market the portfolio to prospective franchisees.)
export const homeCta = {
    eyebrow: 'Partner With Us',
    title: 'You built something people love.',
    body: 'We help experience-driven brands scale through franchising and operator-led growth — without losing what made them special.',
    cta: 'Partner with us',
    href: '/partner',
};

export const belief = {
    headline: 'People don\u2019t want more options.',
    subheadline: 'They want places they feel part of.',
    intro: 'In a world overflowing with options, the brands that endure aren\u2019t the ones with the most features or the lowest price. They\u2019re the ones people feel part of. Experience is what turns a place into a habit, a habit into an identity, and a customer into a community — the most durable advantage a brand can have, and the hardest to replicate.',
    dimensions: [
        {
            term: 'Connection',
            body: 'The brands we build create real human relationships — not transactions. People come for the session; they stay for the people who know their name.',
        },
        {
            term: 'Routine',
            body: 'The strongest brands become part of how people live — not an occasional visit, but a rhythm people return to because it makes the rest of life better.',
        },
        {
            term: 'Identity',
            body: 'People don\u2019t just use these brands; they identify with them. Showing up becomes part of who they are and who they\u2019re becoming.',
        },
        {
            term: 'Community',
            body: 'Belonging scales when people feel part of something bigger — a community that shows up, supports one another, and grows together.',
        },
        {
            term: 'Belonging',
            body: 'When connection, routine, and identity come together, belonging happens. This is the feeling great experience brands create — and the space Experience Foundry is built to own.',
        },
    ],
};

export const approach = {
    headline: 'How we build brands',
    intro: 'We acquire what works, strengthen the system, and scale without losing the soul.',
    steps: [
        {
            title: 'Find & Acquire what already works',
            description:
                'We identify experience-driven brands and partner with concepts that already have real traction, loyalty, repeat behavior, and emotional connection.',
        },
        {
            title: 'Strengthen the system',
            description:
                'We build the operating infrastructure — playbooks, training, marketing, technology, culture, and experience design needed to scale.',
        },
        {
            title: 'Scale without losing the soul',
            description:
                'We expand through franchising and operator-led growth — without losing the soul of the brand.',
        },
    ],
    whatWeBring: {
        headline: 'What we bring to every brand',
        intro: 'The operating infrastructure a brand needs to grow — so founders and operators can focus on the experience, not reinvent the back end.',
        items: [
            {
                title: 'Operations & playbooks',
                body: 'Documented systems that make a great experience repeatable from one location to the next.',
            },
            {
                title: 'Experience design',
                body: 'We protect the feeling that made the brand work, then engineer it to hold at scale.',
            },
            {
                title: 'Training & culture',
                body: 'People programs that carry the brand’s standards and soul into every new team.',
            },
            {
                title: 'Marketing & brand',
                body: 'Modern brand building and member marketing that fills locations and builds loyalty.',
            },
            {
                title: 'Technology',
                body: 'The shared platform and tools an independent brand rarely has the scale to build alone.',
            },
            {
                title: 'Franchise development',
                body: 'The engine that turns a proven concept into operator-led growth, market by market.',
            },
        ],
    },
};

export const portfolio = {
    eyebrow: 'Our Portfolio',
    title: 'Brands people belong to.',
    intro: 'Brands people build into their lives — gyms, studios, and wellness spaces where showing up becomes a habit, a community, and part of who you are. Each keeps its own identity and team; together they share an operating platform built to scale.',
    tie: {
        title: 'What ties them together',
        body: 'Every brand in the Foundry is a place people build into their lives — not a transaction, but a routine, an identity, and a community. That shared thesis is what we look for, and what we protect as we grow.',
    },
};

export const partner = {
    intro: {
        eyebrow: 'Partner With Us',
        title: 'You built something people love.',
        body: 'We help you scale it — without losing what made it special. Experience Foundry acquires and partners with experience-driven brands, then strengthens and grows them through franchising and operator-led support.',
    },
    founders: {
        id: 'founders',
        eyebrow: 'For Founders & Sellers',
        headline: 'A partner who scales what you built — without flattening it.',
        sub: 'Whether you’re ready for an exit or a partner to help you grow, we add the systems and franchising muscle while protecting the soul that made it work.',
        points: [
            'Without losing the soul',
            'With systems and operational expertise',
            'Through franchising + operator support',
            'While preserving what makes it special',
        ],
        lookFor: {
            title: 'What we look for',
            items: [
                'Real traction — loyalty, repeat behavior, and emotional connection already proven',
                'Belonging at the core — community, routine, and identity, not just a transaction',
                'Experience-driven — wellness, movement, recovery, or modern lifestyle',
                'A founder ready to scale — and to grow without losing the soul',
            ],
        },
        cta: { label: 'Start a conversation', href: '/contact' },
    },
    close: 'You built something people love. Let’s scale it — together.',
};

export const contactRoles = [
    { value: 'founder', label: 'I have a brand or concept to scale' },
    { value: 'other', label: 'Something else' },
];
