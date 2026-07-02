interface SectionEyebrowProps {
    label: string;
}

export default function SectionEyebrow({ label }: SectionEyebrowProps) {
    return (
        <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-6 bg-brand-accent" />
            <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-brand-accent uppercase">
                {label}
            </span>
        </div>
    );
}
