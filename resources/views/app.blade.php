<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Experience Foundry') }}</title>

        @php
            $ogImage = rtrim(config('app.url'), '/') . '/images/logo/og-image.png';
            $ogTitle = config('app.name', 'Experience Foundry') . ' — We build brands people belong to.';
            $ogDescription = 'Experience Foundry acquires and scales experience-driven brands designed around connection, routine, and identity — powered by franchising, systems, and operators.';
        @endphp

        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/images/logo/foundry-mark.png">
        <link rel="apple-touch-icon" href="/images/logo/foundry-mark.png">

        <!-- Open Graph / link previews (SMS, iMessage, social) -->
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="{{ config('app.name', 'Experience Foundry') }}">
        <meta property="og:title" content="{{ $ogTitle }}">
        <meta property="og:description" content="{{ $ogDescription }}">
        <meta property="og:image" content="{{ $ogImage }}">
        <meta property="og:image:width" content="919">
        <meta property="og:image:height" content="1024">
        <meta property="og:image:alt" content="Experience Foundry mark">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $ogTitle }}">
        <meta name="twitter:description" content="{{ $ogDescription }}">
        <meta name="twitter:image" content="{{ $ogImage }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=archivo:300,400,500,600,700,800&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
