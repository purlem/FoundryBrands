# StartHere

A Laravel starter template with **Catalyst UI Kit** and **Laravel Breeze (Inertia + React)**.

## Stack

- **Backend:** Laravel 12, PHP 8.3+
- **Frontend:** Inertia.js + React 19, Vite 7, Tailwind CSS v4
- **UI:** [Catalyst UI Kit](https://tailwindcss.com/plus/ui-kit) (React + Headless UI)
- **Auth:** Laravel Breeze — login, registration, password reset, email verification, profile

## Quick start

Use this repo as a GitHub template, or clone it:

```bash
git clone <your-repo-url> my-app && cd my-app
composer run setup
composer run dev
```

Then visit [http://localhost:8000](http://localhost:8000).

### Manual setup

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm install
npm run dev        # in one terminal
php artisan serve  # in another
```

Or use the combined dev script:

```bash
composer run dev
```

## Project structure

| Path | Purpose |
|------|---------|
| `resources/js/Pages/` | Inertia page components |
| `resources/js/Layouts/` | Guest and authenticated layouts |
| `resources/js/Components/` | App-specific components (e.g. logo, error display) |
| `resources/catalyst-ui-kit/javascript/` | Catalyst UI components — import via `@/catalyst/<component>` |
| `routes/web.php` | Web routes |
| `app/Http/Controllers/` | Controllers |

## Conventions

- Use Catalyst's `Link` / `TextLink` for in-app navigation (wraps Inertia's Link).
- Auth pages use Catalyst form components (`Field`, `Input`, `Button`, etc.) with Breeze's `useForm` logic.
- Authenticated pages use `AuthenticatedLayout` (sidebar shell); guest pages use `GuestLayout`.
- Set `APP_NAME` in `.env` — it drives the app title and sidebar branding via `VITE_APP_NAME`.

## Updating Catalyst

Replace files in `resources/catalyst-ui-kit/javascript/` from your latest [Tailwind Plus](https://tailwindcss.com/plus) download. Keep `link.jsx` as-is — it wraps Inertia's Link instead of Next.js.

See `resources/catalyst-ui-kit/CHANGELOG.md` for kit release notes.

## Tests

```bash
php artisan test
npm run build   # verify frontend compiles
```

CI runs both on every push and pull request to `main`.

## License

MIT
