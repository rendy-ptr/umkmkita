import { ArrowDown, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import HeroGradient from '@/components/marketing/HeroGradient';

import { animateCount } from '@/lib/count';

const stats = [
    { num: 150, label: 'Klien puas', suffix: '+' },
    { num: 9, label: 'Layanan Utama' },
    { num: 5, label: 'Tahun Pengalaman' },
    { num: '24', label: 'Jam Support', static: true },
];

function StatCount({ stat }: { stat: (typeof stats)[0] }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!stat.static && ref.current) {
            animateCount(
                ref.current,
                stat.num as number,
                2500,
                stat.suffix || '',
                1000,
            );
        }
    }, [stat]);

    return (
        <span
            ref={ref}
            className="font-display text-3xl leading-none font-bold text-brand-black lg:text-4xl"
        >
            {stat.static ? stat.num : '0'}
        </span>
    );
}

export default function Hero() {
    return (
        <section className="animate-gradient-x relative flex min-h-svh flex-col justify-end overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-[120px] pb-20 lg:px-10">
            <HeroGradient />

            <div className="section-container relative z-10 w-full">
                <div className="mb-7 inline-flex animate-[fadeUp_0.7s_0.3s_forwards] items-center gap-2 rounded-full border border-brand-secondary/20 px-4 py-1.5 text-[11px] font-medium tracking-widest text-brand-secondary uppercase opacity-0">
                    <span className="h-1.5 w-1.5 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-brand-secondary" />
                    Jasa Website Professional
                </div>

                <h1
                    className="mb-0 font-display leading-[1.1] font-black tracking-tight text-brand-black"
                    style={{ fontSize: 'clamp(48px, 9vw, 130px)' }}
                >
                    <span className="block overflow-hidden">
                        <span className="block animate-[lineUp_0.9s_0.4s_forwards] pb-[0.1em] opacity-0">
                            Partner{' '}
                            <em className="text-brand-accent italic">
                                Digital
                            </em>
                        </span>
                    </span>
                    <span className="block overflow-hidden">
                        <span className="block animate-[lineUp_0.9s_0.55s_forwards] pb-[0.1em] opacity-0">
                            UMKM Anda.
                        </span>
                    </span>
                </h1>

                <div className="mt-12 flex animate-[fadeUp_0.8s_0.85s_forwards] flex-wrap items-end justify-between gap-10 opacity-0 lg:mt-14">
                    <p className="max-w-[440px] text-lg leading-[1.8] font-light text-brand-gray-5 lg:text-xl">
                        Transformasi digital untuk UMKM Indonesia. Mulai dari
                        750K, bisnis Anda siap{' '}
                        <strong className="font-medium text-brand-black">
                            scale up
                        </strong>{' '}
                        dengan website professional yang menghasilkan.
                    </p>
                    <div className="flex flex-wrap items-center gap-3.5">
                        <a
                            href="https://wa.me/6282329137621"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-brand-black bg-brand-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                        >
                            Mulai Konsultasi
                            <ArrowRight size={16} />
                        </a>
                        <a
                            href="#portfolio"
                            className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-white px-6 py-3.5 text-sm font-medium text-brand-black shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                        >
                            Lihat Portfolio <ArrowDown size={16} />
                        </a>
                    </div>
                </div>

                <div className="mt-14 flex animate-[fadeUp_0.7s_1s_forwards] flex-wrap items-center gap-6 border-t-2 border-brand-black pt-8 opacity-0 lg:gap-10">
                    {stats.map((s, i) => (
                        <div key={s.label} className="flex items-center gap-3">
                            {i > 0 && (
                                <div className="mr-4 h-9 w-px shrink-0 bg-brand-black/20 lg:mr-6" />
                            )}
                            <StatCount stat={s} />
                            <span className="max-w-[80px] text-xs leading-tight font-medium text-brand-gray-4">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
