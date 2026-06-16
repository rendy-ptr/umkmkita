import { useEffect, useRef } from 'react';

const stats = [
    { num: 150, label: 'Klien puas', suffix: '+' },
    { num: 9, label: 'Layanan Utama' },
    { num: 5, label: 'Tahun Pengalaman' },
    { num: '24', label: 'Jam Support', static: true },
];

export default function Hero() {
    const numsRef = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        numsRef.current.forEach((el) => {
            if (!el || el.dataset.static) {
                return;
            }

            const target = parseInt(el.dataset.count || '0');
            let current = 0;
            const step = Math.ceil(target / 60);
            const timer = setInterval(() => {
                current = Math.min(current + step, target);
                el.textContent = current.toString();

                if (current >= target) {
                    clearInterval(timer);
                }
            }, 24);
        });
    }, []);

    return (
        <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-10 pt-[120px] pb-20">
            {/* Grid background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        'radial-gradient(#C4C0B8 1.5px, transparent 0), linear-gradient(#DEDEDA 1px, transparent 1px), linear-gradient(90deg, #DEDEDA 1px, transparent 1px)',
                    backgroundSize: '32px 32px, 64px 64px, 64px 64px',
                }}
            />

            {/* Mesh balls */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-[10%] -left-[5%] h-[70%] w-[70%] animate-pulse rounded-full bg-[#00A36C] opacity-35 blur-[80px]" />
                <div
                    className="absolute -right-[5%] -bottom-[10%] h-[70%] w-[70%] animate-pulse rounded-full bg-[#2D6A4F] opacity-35 blur-[80px]"
                    style={{ animationDelay: '-4s' }}
                />
                <div
                    className="absolute top-[30%] right-[10%] h-[40%] w-[40%] animate-pulse rounded-full bg-[#FF6B00] opacity-20 blur-[80px]"
                    style={{ animationDelay: '-8s' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Badge */}
                <div className="mb-7 inline-flex animate-[fadeUp_0.7s_0.3s_forwards] items-center gap-2 rounded-full border border-[#2D6A4F]/20 px-4 py-1.5 text-[11px] font-medium tracking-widest text-[#2D6A4F] uppercase opacity-0">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2D6A4F]" />
                    Jasa Website Professional
                </div>

                {/* Heading */}
                <h1
                    className="mb-0 font-display leading-[0.9] font-black tracking-tight text-[#1A1A1A]"
                    style={{ fontSize: 'clamp(52px, 9vw, 130px)' }}
                >
                    <span className="block overflow-hidden">
                        <span className="block animate-[lineUp_0.9s_0.4s_forwards] opacity-0">
                            Partner{' '}
                            <em className="text-[#00A36C] italic">Digital</em>
                        </span>
                    </span>
                    <span className="block overflow-hidden">
                        <span className="block animate-[lineUp_0.9s_0.55s_forwards] opacity-0">
                            UMKM Anda.
                        </span>
                    </span>
                </h1>

                {/* Bottom row */}
                <div className="mt-13 flex animate-[fadeUp_0.8s_0.85s_forwards] flex-wrap items-end justify-between gap-10 opacity-0">
                    <p className="max-w-[420px] text-xl leading-[1.75] font-light text-[#4A4844]">
                        Perluas jangkauan Bisnis Anda. Omset siap tembus 5 kali
                        lipat dengan Website UMKM Kita! Melalui transformasi
                        bisnis digital, mulai dari 750k bisnis Anda bisa scale
                        up lebih cepat!
                    </p>
                    <div className="flex flex-wrap items-center gap-3.5">
                        <a
                            href="https://wa.me/6282329137621"
                            target="_blank"
                            className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#1A1A1A] bg-[#00A36C] px-7 py-3.5 text-sm font-semibold text-white shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-[#2D6A4F] hover:shadow-none"
                        >
                            Mulai Konsultasi
                        </a>
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-[#1A1A1A] bg-[#F5F5F0] px-6 py-3.5 text-sm font-medium text-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-[#EBEBE6] hover:shadow-none"
                        >
                            Lihat Portfolio ↓
                        </a>
                    </div>
                </div>

                {/* Stats ticker */}
                <div className="mt-14 flex animate-[fadeUp_0.7s_1s_forwards] flex-wrap items-center gap-8 border-t border-[#1A1A1A] pt-8 opacity-0">
                    {stats.map((s, i) => (
                        <div key={s.label} className="flex items-center gap-3">
                            {i > 0 && (
                                <div className="mr-5 h-9 w-px shrink-0 bg-[#1A1A1A]" />
                            )}
                            <span
                                ref={(el) => {
                                    if (el) {
                                        numsRef.current[i] = el;
                                    }
                                }}
                                data-count={s.static ? undefined : s.num}
                                data-static={s.static ? 'true' : undefined}
                                className="font-display text-3xl leading-none font-bold text-[#1A1A1A]"
                            >
                                {s.static ? s.num : '0'}
                                {s.suffix ?? ''}
                            </span>
                            <span className="max-w-[80px] text-xs leading-tight text-[#8C8880]">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
