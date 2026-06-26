import { Head } from '@inertiajs/react';
import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';

const plans = [
    {
        name: 'Lite Page',
        price: 'Rp 750.000',
        desc: 'Sangat cocok untuk pemula, UKM mikro, landing page promo produk tunggal, atau kartu nama digital.',
        features: [
            '1 Halaman Landing Page',
            'Domain .com/.id (1 Tahun)',
            'Hosting Premium (1 Tahun)',
            'Free Sertifikat SSL Keamanan',
            'Integrasi WhatsApp Chat',
            '2 Kali Revisi Desain',
        ],
        btnText: 'Pilih Paket Lite',
        badge: 'Termurah',
        color: 'bg-brand-white',
    },
    {
        name: 'Standard Biz',
        price: 'Rp 1.500.000',
        desc: 'Ideal untuk profil perusahaan, UMKM berkembang, sekolah, yayasan, atau institusi yang ingin profil lengkap.',
        features: [
            'Hingga 5 Halaman Utama',
            'Domain .com/.id (1 Tahun)',
            'Hosting Premium (1 Tahun)',
            'Free Sertifikat SSL Keamanan',
            'Integrasi WhatsApp Chat & Form',
            'SEO Setup & Google Search Console',
            'Desain Custom Neubrutalism',
            'Panduan Video Pengelolaan',
            '3 Kali Revisi Desain',
        ],
        btnText: 'Pilih Paket Standard',
        badge: 'Terpopuler',
        color: 'bg-brand-green-l',
    },
    {
        name: 'E-Commerce / Custom',
        price: 'Rp 2.999.000',
        desc: 'Untuk toko online profesional dengan sistem payment gateway otomatis, integrasi ongkir, atau sistem web kustom.',
        features: [
            'Halaman Unlimited',
            'Keranjang Belanja & Katalog',
            'Integrasi RajaOngkir (Kirim Paket)',
            'Payment Gateway (QRIS, VA, Gopay)',
            'SSL Premium & Keamanan Ekstra',
            'Sistem Laporan Penjualan',
            'SEO Optimasi Premium',
            'Free Maintenance (3 Bulan)',
            'Revisi Sepuasnya (Selama Masa Build)',
        ],
        btnText: 'Mulai Project Kustom',
        badge: 'Terlengkap',
        color: 'bg-brand-white',
    },
];

const faqHarga = [
    {
        q: 'Bagaimana sistem pembayaran proyek?',
        a: 'Sistem pembayaran menggunakan DP 50% di awal sebelum pengerjaan dimulai, dan pelunasan 50% sisanya setelah proyek selesai direview dan siap online (live).',
    },
    {
        q: 'Berapa biaya perpanjangan tahun berikutnya?',
        a: 'Perpanjangan tahun berikutnya mencakup biaya domain, hosting, dan maintenance SSL. Untuk paket Lite Rp 350.000/tahun, Standard Rp 500.000/tahun, dan E-Commerce Rp 850.000/tahun.',
    },
    {
        q: 'Apakah bisa melakukan upgrade paket di kemudian hari?',
        a: 'Sangat bisa. Anda bisa melakukan upgrade dari paket Lite ke Standard atau ke E-Commerce kapan saja hanya dengan membayar selisih harga paket saja.',
    },
];

export default function Harga() {
    const heroReveal = useScrollReveal<HTMLDivElement>();
    const cardsReveal = useScrollReveal<HTMLDivElement>();
    const faqReveal = useScrollReveal<HTMLDivElement>();

    return (
        <MarketingLayout>
            <Head title="Paket Harga Jasa Pembuatan Website Terjangkau — UMKMKITA" />

            {/* Hero Section */}
            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-40 lg:pb-20"
            >
                <div
                    className="animate-move-dots pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'radial-gradient(#1A1A1A 2px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />

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

            {/* Pricing Cards Section */}
            <section
                ref={cardsReveal}
                className="scroll-reveal bg-brand-gray-1 px-6 py-16 lg:px-10 lg:py-24"
            >
                <div className="section-container">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {plans.map((p) => (
                            <div
                                key={p.name}
                                className={`relative flex flex-col rounded-2xl border-3 border-brand-black p-8 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none ${p.color}`}
                            >
                                {p.badge && (
                                    <span className="absolute top-4 right-4 rounded-lg border-2 border-brand-black bg-brand-black px-3 py-1 font-mono text-[9px] font-bold text-white uppercase">
                                        {p.badge}
                                    </span>
                                )}

                                <div className="mb-6">
                                    <h3 className="font-display text-2xl font-bold text-brand-black">
                                        {p.name}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-brand-gray-5">
                                        {p.desc}
                                    </p>
                                </div>

                                <div className="mb-8 flex items-baseline gap-1.5 border-t-2 border-b-2 border-brand-black py-4">
                                    <span className="font-mono text-3xl font-black text-brand-black lg:text-4xl">
                                        {p.price}
                                    </span>
                                    <span className="font-mono text-xs text-brand-gray-4">
                                        /sekali bayar
                                    </span>
                                </div>

                                <ul className="mb-8 space-y-3.5">
                                    {p.features.map((feat) => (
                                        <li
                                            key={feat}
                                            className="flex items-start gap-2.5 text-xs text-brand-gray-5"
                                        >
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-accent/15 font-bold text-brand-accent">
                                                ✓
                                            </span>
                                            <span className="leading-tight">
                                                {feat}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/6282329137621?text=Halo%20UMKMKITA,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(p.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto block w-full rounded-xl border-2 border-brand-black bg-brand-black py-3.5 text-center font-display text-sm font-bold text-white shadow-[4px_4px_0_0_#00a36c] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                >
                                    {p.btnText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section
                ref={faqReveal}
                className="scroll-reveal bg-brand-white px-6 py-20 lg:px-10 lg:py-28"
            >
                <div className="section-container max-w-[800px]">
                    <div className="mb-14 text-center">
                        <SectionEyebrow label="Tanya Jawab Harga" />
                        <h2 className="font-display text-3xl font-black text-brand-black lg:text-4xl">
                            Pertanyaan Seputar Biaya
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqHarga.map((faq) => (
                            <div
                                key={faq.q}
                                className="nb-shadow-sm rounded-xl border-2 border-brand-black bg-brand-white p-6"
                            >
                                <h4 className="mb-2 font-display text-base font-bold text-brand-black lg:text-lg">
                                    {faq.q}
                                </h4>
                                <p className="text-sm leading-relaxed text-brand-gray-5">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
