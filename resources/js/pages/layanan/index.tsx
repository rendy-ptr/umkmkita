import { Head } from '@inertiajs/react';
import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';

const detailedServices = [
    {
        icon: 'shopping_cart',
        tag: 'E-Commerce',
        name: 'Toko Online / Web E-Commerce',
        desc: 'Solusi lengkap penjualan produk fisik maupun digital secara online. Dilengkapi katalog produk, keranjang belanja, kalkulator ongkir otomatis, dan integrasi QRIS/Virtual Account.',
        features: [
            'Payment Gateway (QRIS, VA, E-Wallet)',
            'Kalkulator Ongkir Otomatis (RajaOngkir)',
            'Manajemen Stok & Inventori',
            'Integrasi WhatsApp Order',
            'Dashboard Laporan Penjualan',
        ],
        price: 'Mulai Rp 1.500.000',
        badge: 'Paling Populer',
    },
    {
        icon: 'corporate_fare',
        tag: 'Branding',
        name: 'Company Profile / Web Instansi',
        desc: 'Meningkatkan kredibilitas bisnis Anda di mata klien dan investor. Tampilkan sejarah, visi misi, layanan, galeri foto, dan kontak resmi dengan desain premium berkarakter.',
        features: [
            'Desain Profesional & Modern',
            'Halaman Galeri & Kontak Interaktif',
            'Integrasi Google Maps & WhatsApp',
            'Formulir Hubungi Kami',
            'SEO Setup Dasar',
        ],
        price: 'Mulai Rp 750.000',
    },
    {
        icon: 'campaign',
        tag: 'Marketing',
        name: 'High-Converting Landing Page',
        desc: 'Halaman penawaran produk tunggal yang didesain khusus untuk mengkonversi pengunjung iklan menjadi pembeli. Sangat cocok untuk Facebook/TikTok Ads.',
        features: [
            'Satu Halaman Fokus Konversi',
            'Copywriting Menjual & Persuasif',
            'Integrasi Pixel & Tik Tok Tag',
            'Form Order Langsung WhatsApp',
            'Loading Speed Super Cepat',
        ],
        price: 'Mulai Rp 500.000',
    },
    {
        icon: 'account_balance',
        tag: 'Government',
        name: 'Sistem Informasi Desa & Publik',
        desc: 'Sistem portal web resmi untuk transparansi anggaran publik, pelayanan administrasi surat online, informasi pariwisata daerah, serta berita kegiatan kemasyarakatan.',
        features: [
            'Pengajuan Surat Online Warga',
            'Transparansi Dana & APBDes',
            'Direktori Warga & UMKM Lokal',
            'Sistem Berita & Pengumuman',
            'Keamanan Berlapis (SSL)',
        ],
        price: 'Mulai Rp 3.000.000',
    },
    {
        icon: 'school',
        tag: 'Edukasi',
        name: 'LMS / Platform Kursus Online',
        desc: 'Unggah materi video, buat kuis, berikan sertifikat, dan kelola pendaftaran siswa berbayar dalam satu platform yang Anda miliki sepenuhnya.',
        features: [
            'Manajemen Kelas & Kurikulum',
            'Kuis & Ujian Interaktif',
            'Generate Sertifikat Otomatis',
            'Sistem Afiliasi & Komisi',
            'Integrasi Video Aman (Vimeo/S3)',
        ],
        price: 'Mulai Rp 2.500.000',
    },
    {
        icon: 'calendar_month',
        tag: 'Booking',
        name: 'Booking & Smart POS System',
        desc: 'Sistem reservasi online untuk salon, klinik, hotel, atau jasa profesional lainnya yang digabungkan dengan Point of Sale pencatatan transaksi harian.',
        features: [
            'Kalender Reservasi Realtime',
            'Manajemen Jadwal Staff',
            'Pencatatan Penjualan Harian',
            'Notifikasi WhatsApp Reminder',
            'Kupon Diskon & Membership',
        ],
        price: 'Mulai Rp 2.000.000',
    },
];

const faqs = [
    {
        q: 'Apakah harga sudah termasuk domain dan hosting?',
        a: 'Ya, semua paket layanan kami sudah termasuk sewa domain (.com / .id) dan hosting premium selama 1 tahun pertama. Untuk perpanjangan tahun berikutnya sangat terjangkau.',
    },
    {
        q: 'Berapa lama waktu proses pengerjaan?',
        a: 'Landing page selesai dalam 3-5 hari. Company profile 7-10 hari. Toko online dan sistem informasi kustom memerlukan waktu 14-30 hari kerja tergantung tingkat kerumitan fitur.',
    },
    {
        q: 'Apakah saya bisa edit konten website sendiri setelah jadi?',
        a: 'Tentu saja. Kami menggunakan CMS (Content Management System) yang sangat user-friendly. Kami juga memberikan panduan video gratis serta pelatihan singkat agar Anda bisa mengelola konten dengan mudah.',
    },
    {
        q: 'Bagaimana dengan layanan setelah penjualan (after sales)?',
        a: 'Kami memberikan gratis garansi perbaikan bug/error selama 1 tahun. Anda juga mendapatkan support konsultasi gratis melalui grup WhatsApp dedicated bersama tim developer kami.',
    },
];

export default function Layanan() {
    const heroReveal = useScrollReveal<HTMLDivElement>();
    const listReveal = useScrollReveal<HTMLDivElement>();
    const faqReveal = useScrollReveal<HTMLDivElement>();

    return (
        <MarketingLayout>
            <Head title="Layanan Jasa Pembuatan Website UMKM — UMKMKITA" />

            {/* Hero Section */}
            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-20 text-center lg:px-10 lg:pt-40 lg:pb-28"
            >
                {/* Dots background */}
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
                        {detailedServices.map((svc) => (
                            <div
                                key={svc.name}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border-3 border-brand-black bg-brand-white p-6 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none sm:p-8 lg:flex-row lg:gap-12 lg:p-12"
                            >
                                {svc.badge && (
                                    <span className="absolute top-0 right-0 rounded-bl-xl border-b-2 border-l-2 border-brand-black bg-brand-accent px-4 py-1.5 font-mono text-[10px] font-bold text-white uppercase">
                                        {svc.badge}
                                    </span>
                                )}

                                {/* Left Side: Details */}
                                <div className="flex-1">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-brand-black bg-brand-black text-white transition-all group-hover:bg-brand-accent">
                                        <span className="material-symbols-rounded text-2xl">
                                            {svc.icon}
                                        </span>
                                    </div>
                                    <div className="mb-1 font-mono text-[11px] font-bold tracking-widest text-brand-accent uppercase">
                                        {svc.tag}
                                    </div>
                                    <h3 className="mb-4 font-display text-xl font-bold text-brand-black lg:text-2xl">
                                        {svc.name}
                                    </h3>
                                    <p className="mb-6 text-sm leading-relaxed text-brand-gray-5 lg:text-base">
                                        {svc.desc}
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
                                        href={`https://wa.me/6282329137621?text=Halo%20UMKMKITA,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(svc.name)}`}
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
                                        {svc.features.map((feat) => (
                                            <li
                                                key={feat}
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
                        <SectionEyebrow label="Tanya Jawab" />
                        <h2 className="font-display text-3xl font-black text-brand-black lg:text-4xl">
                            Pertanyaan Umum
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq) => (
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
