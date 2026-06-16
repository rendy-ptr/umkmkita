const items = [
    'Laravel 11',
    'Next.js 14',
    'QRIS Payment',
    'WhatsApp API',
    'SSL Gratis',
    'AI Powered',
    'Mobile First',
    'SEO Ready',
];

export default function Marquee() {
    return (
        <div className="overflow-hidden border-t border-b border-[#1A1A1A] bg-[#EBEBE6] py-4">
            <div className="flex animate-[marq_26s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-4 px-7 text-xs font-normal tracking-widest text-[#8C8880] uppercase"
                    >
                        {item}
                        <span className="text-[10px] text-[#2D6A4F]">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
