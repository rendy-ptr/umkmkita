import { Head } from '@inertiajs/react';
import HeroGradient from '@/components/marketing/HeroGradient';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';

interface Price {
    id: string;
    title: string;
    description: string;
    price: string;
    badge: string;
    benefits: string[];
}

export default function Harga({ prices }: { prices: Price[] }) {
    const heroReveal = useScrollReveal<HTMLDivElement>();
    const cardsReveal = useScrollReveal<HTMLDivElement>();

    return (
        <MarketingLayout>
            <Head title="Paket Harga Jasa Pembuatan Website Terjangkau — UMKMKITA" />

            {/* Hero Section */}
            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-40 lg:pb-20"
            >
                <HeroGradient />

                <div className="section-container relative z-10 mx-auto max-w-[800px]">
                    <div className="nb-shadow-sm mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-green-l px-4 py-1 text-xs font-bold text-brand-black">
                        <span>Investasi Terbaik Bisnis Anda</span>
                    </div>
                    <h1 className="mb-6 font-display text-4xl leading-[1.1] font-black tracking-tight text-brand-black sm:text-5xl lg:text-7xl">
                        Pilihan Paket Harga <br />
                        <em className="text-brand-accent italic">
                            Transparan & Jujur
                        </em>
                        .
                    </h1>
                    <p className="mx-auto max-w-[560px] text-base leading-relaxed text-brand-gray-5 lg:text-lg">
                        Tidak ada biaya tersembunyi. Semua paket sudah termasuk
                        domain, hosting, sertifikat keamanan SSL gratis, serta
                        garansi error 1 tahun penuh.
                    </p>
                </div>
            </section>

            <section
                ref={cardsReveal}
                className="scroll-reveal bg-brand-gray-1 px-6 py-16 lg:px-10 lg:py-24"
            >
                <div className="section-container">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {prices.map((p) => (
                            <div
                                key={p.id}
                                className="relative flex flex-col rounded-2xl border-3 border-brand-black p-8 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                            >
                                {p.badge && (
                                    <span className="absolute top-4 right-4 rounded-lg border-2 border-brand-black bg-brand-black px-3 py-1 font-mono text-[9px] font-bold text-white uppercase">
                                        {p.badge}
                                    </span>
                                )}

                                <div className="mb-6">
                                    <h3 className="font-display text-2xl font-bold text-brand-black">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-brand-gray-5">
                                        {p.description}
                                    </p>
                                </div>

                                <div className="mb-8 flex items-baseline gap-1.5 border-t-2 border-b-2 border-brand-black py-4">
                                    <span className="font-mono text-xl font-black text-brand-black lg:text-2xl">
                                        {p.price}
                                    </span>
                                    <span className="font-mono text-xs text-brand-gray-4">
                                        /sekali bayar
                                    </span>
                                </div>

                                <ul className="mb-8 space-y-3.5">
                                    {p.benefits.map((b, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2.5 text-xs text-brand-gray-5"
                                        >
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-accent/15 font-bold text-brand-accent">
                                                ✓
                                            </span>
                                            <span className="leading-tight">
                                                {b}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/6282329137621?text=Halo%20UMKMKITA,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(p.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto block w-full rounded-xl border-2 border-brand-black bg-brand-black py-3.5 text-center font-display text-sm font-bold text-white shadow-[4px_4px_0_0_#00a36c] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                >
                                    Pesan Paket {p.title.split(' ')[0]}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
