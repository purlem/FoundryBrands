import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: [
            {
                find: '@/catalyst',
                replacement: path.resolve(__dirname, 'resources/catalyst-ui-kit/javascript'),
            },
            {
                find: '@',
                replacement: path.resolve(__dirname, 'resources/js'),
            },
        ],
    },
});
