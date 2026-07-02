import { Head } from '@inertiajs/react';
import { useState } from 'react';
import HeroGradient from '@/components/marketing/HeroGradient';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';

export interface PromoData {
    id: number;
    title: string;
    description: string;
    code: string;
    badge: string;
    expired_at: string;
}

export default function Promo({ promos }: { promos: PromoData[] }) {
    const heroReveal = useScrollReveal<HTMLDivElement>();
    const gridReveal = useScrollReveal<HTMLDivElement>();
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => {
            setCopiedCode(null);
        }, 2000);
    };

    return (
        <MarketingLayout>
            <Head title="Promo & Diskon Pembuatan Website UMKM — UMKMKITA" />

            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-40 lg:pb-20"
            >
                <HeroGradient />

                <div className="section-container relative z-10 mx-auto max-w-[800px]">
                    <div className="nb-shadow-sm mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-green-l px-4 py-1 text-xs font-bold text-brand-black">
                        <span>Penawaran Khusus & Terbatas</span>
                    </div>
                    <h1 className="mb-6 font-display text-4xl leading-[1.1] font-black tracking-tight text-brand-black sm:text-5xl lg:text-7xl">
                        Penawaran & Promo <br />
                        <em className="text-brand-accent italic">
                            Spesial UMKM
                        </em>
                        .
                    </h1>
                    <p className="mx-auto max-w-[560px] text-base leading-relaxed text-brand-gray-5 lg:text-lg">
                        Gunakan kode voucher promo eksklusif di bawah ini saat
                        berkonsultasi untuk menikmati diskon pembuatan website
                        dan penawaran bundling khusus.
                    </p>
                </div>
            </section>

            <section
                ref={gridReveal}
                className="scroll-reveal bg-brand-gray-1 px-6 py-16 lg:px-10 lg:py-24"
            >
                <div className="section-container">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {promos.map((p) => (
                            <div
                                key={p.id}
                                className="relative flex flex-col rounded-2xl border-3 border-brand-black bg-brand-white p-8 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                            >
                                <span className="absolute top-4 right-4 rounded-lg border-2 border-brand-black bg-brand-accent px-3 py-1 font-mono text-[9px] font-bold text-white uppercase">
                                    {p.badge}
                                </span>

                                <h3 className="mb-4 pr-16 font-display text-xl leading-tight font-bold text-brand-black">
                                    {p.title}
                                </h3>

                                <p className="mb-6 text-xs leading-relaxed text-brand-gray-5">
                                    {p.description}
                                </p>

                                <div className="mb-6 rounded-xl border-2 border-dashed border-brand-black bg-brand-white p-4 text-center">
                                    <span className="mb-1 block font-mono text-[10px] tracking-wider text-brand-gray-4 uppercase">
                                        Salin Kode Voucher
                                    </span>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="font-mono text-base font-black text-brand-black select-all">
                                            {p.code}
                                        </span>
                                        <button
                                            onClick={() => handleCopy(p.code)}
                                            className="cursor-pointer rounded border border-brand-black bg-brand-gray-1 px-2 py-1 font-mono text-[9px] font-bold transition-colors hover:bg-brand-accent hover:text-white"
                                        >
                                            {copiedCode === p.code
                                                ? 'Tersalin ✓'
                                                : 'Salin'}
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-auto flex items-center justify-between border-t border-brand-gray-2 pt-4">
                                    <span className="font-mono text-[10px] text-brand-gray-4 uppercase">
                                        Berakhir,
                                        {new Date(
                                            p.expired_at,
                                        ).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </span>
                                    <a
                                        href={`https://wa.me/6282329137621?text=Halo%20UMKMKITA,%20saya%20ingin%20klaim%20kode%20promo%20${p.code}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-brand-black transition-colors hover:text-brand-accent"
                                    >
                                        Klaim Promo →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
