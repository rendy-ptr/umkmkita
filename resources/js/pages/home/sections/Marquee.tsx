const items = [
    'Laravel 13',
    'React 19',
    'QRIS Payment',
    'WhatsApp API',
    'SSL Gratis',
    'AI Powered',
    'Mobile First',
    'SEO Ready',
    'Tailwind CSS',
    'Inertia.js',
];

export default function Marquee() {
    return (
        <div className="overflow-hidden border-t-2 border-b-2 border-brand-black bg-brand-gray-1 py-4">
            <div className="flex animate-[marq_30s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-4 px-7 text-[13px] font-medium tracking-widest text-brand-gray-5 uppercase"
                    >
                        {item}
                        <span className="text-[10px] text-brand-accent">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
