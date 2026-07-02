import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function CtaBand() {
    const ref = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            className="scroll-reveal bg-brand-white px-6 py-20 lg:px-10 lg:py-28"
        >
            <div className="section-container nb-shadow relative overflow-hidden rounded-2xl border-4 border-brand-black bg-brand-accent px-6 py-16 text-center text-white lg:py-24">
                <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                        backgroundImage:
                            'radial-gradient(#1A1A1A 2px, transparent 0), linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
                        backgroundSize: '24px 24px, 48px 48px, 48px 48px',
                    }}
                />

                <div className="relative z-10 mx-auto max-w-[800px]">
                    <div className="nb-shadow-sm mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-white px-4 py-1.5 text-xs font-bold text-brand-black">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-accent" />
                        Slot Konsultasi Terbatas Minggu Ini!
                    </div>

                    <h2
                        className="mb-6 font-display leading-[1.1] font-black tracking-tight text-brand-black"
                        style={{ fontSize: 'clamp(32px, 6vw, 72px)' }}
                    >
                        Siap Kembangkan Bisnis <br />
                        <em className="text-brand-white italic underline decoration-brand-black decoration-4">
                            UMKM Anda?
                        </em>
                    </h2>

                    <p className="mx-auto mb-10 max-w-[500px] text-base leading-relaxed font-medium text-brand-black/80 lg:text-lg">
                        Mulai langkah awal digitalisasi sekarang. Konsultasikan
                        ide Anda secara gratis dan dapatkan penawaran terbaik.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://wa.me/6282329137621"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-white bg-brand-black px-8 py-4 text-sm font-bold text-white shadow-[4px_4px_0_0_#FFF] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                        >
                            Hubungi WhatsApp Kami
                            <ArrowRight size={16} />
                        </a>
                        <Link
                            href="/harga"
                            className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-black bg-brand-white px-8 py-4 text-sm font-bold text-brand-black shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-brand-gray-1 hover:shadow-none"
                        >
                            Lihat Paket Harga
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] tracking-wider text-brand-black uppercase">
                        <span className="flex items-center gap-1.5 font-bold">
                            ✦ Domain & SSL Gratis
                        </span>
                        <span className="flex items-center gap-1.5 font-bold">
                            ✦ 1 Bulan Maintenance Gratis
                        </span>
                        <span className="flex items-center gap-1.5 font-bold">
                            ✦ Garansi Uang Kembali
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
