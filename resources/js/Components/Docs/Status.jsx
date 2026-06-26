export const STATUS_ORDER = ['resolved', 'proposed', 'in-progress', 'open'];

export const STATUS = {
    open: { label: 'Open', className: 'bg-amber-100 text-amber-800 ring-amber-600/20' },
    proposed: {
        label: 'Proposed',
        className: 'bg-indigo-100 text-indigo-800 ring-indigo-600/20',
    },
    'in-progress': {
        label: 'In progress',
        className: 'bg-cobalt/10 text-cobalt ring-cobalt/20',
    },
    resolved: {
        label: 'Resolved',
        className: 'bg-emerald-100 text-emerald-800 ring-emerald-600/20',
    },
};

export function StatusBadge({ status }) {
    const s = STATUS[status] ?? STATUS.open;
    return (
        <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-[3px] px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ring-1 ring-inset ${s.className}`}
        >
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
            {s.label}
        </span>
    );
}

export function summarize(items) {
    return items.reduce((acc, item) => {
        acc[item.status] = (acc[item.status] ?? 0) + 1;
        return acc;
    }, {});
}
