import { Head } from '@inertiajs/react';
import { getIconComponent } from '@/components/IconRegistry';
import HeroGradient from '@/components/marketing/HeroGradient';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';

import type { ServiceData } from '@/types/service.type';

export default function Layanan({ services }: { services: ServiceData[] }) {
    const heroReveal = useScrollReveal<HTMLDivElement>();
    const listReveal = useScrollReveal<HTMLDivElement>();

    return (
        <MarketingLayout>
            <Head title="Layanan Jasa Pembuatan Website UMKM — UMKMKITA" />

            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-20 text-center lg:px-10 lg:pt-40 lg:pb-28"
            >
                <HeroGradient />

                <div className="section-container relative z-10 mx-auto max-w-[800px]">
                    <div className="nb-shadow-sm mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-green-l px-4 py-1 text-xs font-bold text-brand-black">
                        <span>Layanan Lengkap & Terpercaya</span>
                    </div>
                    <h1 className="mb-6 font-display text-4xl leading-[1.1] font-black tracking-tight text-brand-black sm:text-5xl lg:text-7xl">
                        Solusi Digital Terbaik untuk{' '}
                        <em className="text-brand-accent italic">
                            UMKM Indonesia
                        </em>
                        .
                    </h1>
                    <p className="mx-auto max-w-[560px] text-base leading-relaxed text-brand-gray-5 lg:text-lg">
                        Kami menyediakan berbagai jenis website dengan performa
                        tinggi, desain eksklusif, dan integrasi teknologi
                        termutakhir untuk membantu bisnis Anda bersaing di era
                        digital.
                    </p>
                </div>
            </section>

            {/* Services List Section */}
            <section
                ref={listReveal}
                className="scroll-reveal bg-brand-gray-1 px-6 py-20 lg:px-10 lg:py-28"
            >
                <div className="section-container">
                    <div className="space-y-12">
                        {services.map((svc) => {
                            const Icon = getIconComponent(svc.icon);

                            return (
                                <div
                                    key={svc.id}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border-3 border-brand-black bg-brand-white p-6 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none sm:p-8 lg:flex-row lg:gap-12 lg:p-12"
                                >
                                    {/* Left Side: Details */}
                                    <div className="flex-1">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-brand-black bg-brand-black text-white transition-all group-hover:bg-brand-accent">
                                            <Icon size={24} />
                                        </div>
                                        <div className="mb-1 font-mono text-[11px] font-bold tracking-widest text-brand-accent uppercase">
                                            {svc.category.replace(/-/g, ' ')}
                                        </div>
                                        <h3 className="mb-4 font-display text-xl font-bold text-brand-black lg:text-2xl">
                                            {svc.title}
                                        </h3>
                                        <p className="mb-6 text-sm leading-relaxed text-brand-gray-5 lg:text-base">
                                            {svc.description}
                                        </p>
                                        <div className="mb-6 flex flex-wrap items-center gap-3">
                                            <span className="font-mono text-xs font-bold text-brand-gray-4">
                                                HARGA:
                                            </span>
                                            <span className="rounded-lg border-2 border-brand-black bg-brand-green-l px-3 py-1 font-mono text-sm font-black text-brand-black">
                                                {svc.price}
                                            </span>
                                        </div>
                                        <a
                                            href={`https://wa.me/6282329137621?text=Halo%20UMKMKITA,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(svc.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-black px-6 py-3 text-xs font-bold text-white shadow-[4px_4px_0_0_#00a36c] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                        >
                                            Pesan Layanan Ini →
                                        </a>
                                    </div>

                                    {/* Right Side: Features Checklist */}
                                    <div className="mt-8 rounded-xl border-2 border-brand-black bg-brand-white p-6 lg:mt-0 lg:w-[380px] lg:shrink-0">
                                        <div className="mb-4 font-mono text-[11px] font-black tracking-wider text-brand-black uppercase">
                                            Apa Yang Anda Dapatkan:
                                        </div>
                                        <ul className="space-y-3">
                                            {svc.benefits?.map((feat, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2.5 text-xs text-brand-gray-5"
                                                >
                                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-accent/10 font-bold text-brand-accent">
                                                        ✓
                                                    </span>
                                                    <span className="leading-tight">
                                                        {feat}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
