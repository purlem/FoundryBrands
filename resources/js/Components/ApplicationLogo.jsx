export default function ApplicationLogo({ className = '', ...props }) {
    return (
        <img
            src="/images/logo/logo_color.svg"
            alt="Experience Foundry"
            className={`w-auto object-contain dark:brightness-0 dark:invert ${className}`}
            {...props}
        />
    );
}
