export default function HeroGradient() {
    return (
        <>
            {/* Base noise and dots */}
            <div
                className="animate-move-dots pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        'radial-gradient(#1A1A1A 2px, transparent 0)',
                    backgroundSize: '32px 32px',
                }}
            />
            {/* Moving Gradient Orbs */}
            <div
                className="pointer-events-none absolute -top-[10%] -left-[10%] h-[700px] w-[700px] animate-[orb-float_12s_infinite_ease-in-out] rounded-full opacity-60 mix-blend-multiply blur-[120px] lg:-top-[20%]"
                style={{
                    background:
                        'radial-gradient(circle, var(--color-brand-accent) 0%, transparent 70%)',
                }}
            />
            <div
                className="pointer-events-none absolute top-[20%] -right-[10%] h-[600px] w-[600px] animate-[orb-float-reverse_15s_infinite_ease-in-out] rounded-full opacity-50 mix-blend-multiply blur-[100px]"
                style={{
                    background:
                        'radial-gradient(circle, var(--color-brand-yellow) 0%, transparent 70%)',
                }}
            />
        </>
    );
}
