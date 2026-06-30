import { useState } from 'react';

function initials(name) {
    return name
        .replace(/[^a-zA-Z\s.]/g, '')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join('');
}

// A person's portrait that degrades gracefully: if `src` is missing or the
// image fails to load, it renders a clean initials monogram in the brand
// palette instead of a broken image. Lets us ship real faces where we have
// them and drop the rest in later without touching layout.
export default function Portrait({ src, name, className = '', rounded = 'rounded-full' }) {
    const [failed, setFailed] = useState(false);
    const showImage = src && !failed;

    return (
        <div
            className={`relative overflow-hidden bg-graphite ${rounded} ${className}`}
            aria-hidden={showImage ? undefined : 'true'}
        >
            {showImage ? (
                <img
                    src={src}
                    alt={name}
                    onError={() => setFailed(true)}
                    className="size-full object-cover"
                />
            ) : (
                <div className="flex size-full items-center justify-center bg-gradient-to-br from-graphite to-charcoal">
                    <span className="font-display text-[0.9em] tracking-tight text-bone/80">
                        {initials(name)}
                    </span>
                </div>
            )}
        </div>
    );
}
