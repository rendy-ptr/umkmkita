import { Link } from '@inertiajs/react';

const layanan = [
    'Pembuatan Website',
    'Toko Online',
    'Company Profile',
    'Landing Page',
    'LMS / Kursus',
    'Sistem Informasi Desa',
    'Booking & Smart POS',
];

const menu = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Promo', href: '/promo' },
    { label: 'Harga', href: '/harga' },
    { label: 'Blog', href: '/blog' },
];

const area = [
    'Website Jogja',
    'Website Solo',
    'Website Jakarta',
    'Website Bandung',
    'Website Surabaya',
    'Website Semarang',
    'Website Bali',
    'Website Medan',
    'Website Makassar',
    'Website Malang',
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/[0.07] bg-brand-black px-6 pt-16 pb-8 text-white/60 lg:px-10">
            <div className="section-container">
                <div className="mb-14 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr]">
                    {/* Brand */}
                    <div>
                        <div className="mb-3.5 flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-white">
                            <span className="inline-block h-2 w-2 rounded-full bg-brand-secondary" />
                            UMKMKITA
                            <span className="text-brand-secondary">.</span>
                        </div>
                        <p className="mb-5 max-w-[260px] text-sm leading-[1.75]">
                            Kami merancang, membangun, dan memelihara ekosistem
                            digital yang mendorong pertumbuhan nyata untuk UMKM
                            Indonesia.
                        </p>
                        <div className="flex flex-col gap-2.5">
                            {[
                                {
                                    icon: 'smartphone',
                                    label: 'WhatsApp Kami',
                                    href: 'https://wa.me/6282329137621',
                                },
                                {
                                    icon: 'email',
                                    label: 'hello@umkmkita.id',
                                    href: 'mailto:hello@umkmkita.id',
                                },
                                {
                                    icon: 'location_on',
                                    label: 'Yogyakarta, Indonesia',
                                    href: '#',
                                },
                            ].map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target={
                                        c.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        c.href.startsWith('http')
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                    className="flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                                >
                                    <span className="material-symbols-rounded text-base">
                                        {c.icon}
                                    </span>
                                    {c.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Layanan */}
                    <div>
                        <div className="mb-4 font-mono text-[10px] tracking-[0.18em] text-white/30 uppercase">
                            Layanan
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {layanan.map((l) => (
                                <Link
                                    key={l}
                                    href="/layanan"
                                    className="text-sm text-white/50 transition-colors hover:text-white"
                                >
                                    {l}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Menu */}
                    <div>
                        <div className="mb-4 font-mono text-[10px] tracking-[0.18em] text-white/30 uppercase">
                            Menu
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {menu.map((m) => (
                                <Link
                                    key={m.label}
                                    href={m.href}
                                    className="text-sm text-white/50 transition-colors hover:text-white"
                                >
                                    {m.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Area */}
                    <div>
                        <div className="mb-4 font-mono text-[10px] tracking-[0.18em] text-white/30 uppercase">
                            Area Layanan
                        </div>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                            {area.map((a) => (
                                <a
                                    key={a}
                                    href="#"
                                    className="text-sm text-white/50 transition-colors hover:text-white"
                                >
                                    {a}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-6">
                    <span className="font-mono text-xs text-white/25">
                        © {year} UMKMKITA. All rights reserved.
                    </span>
                    <div className="flex gap-5">
                        {[
                            { label: 'Instagram', href: '#' },
                            { label: 'TikTok', href: '#' },
                            {
                                label: 'WhatsApp',
                                href: 'https://wa.me/6282329137621',
                            },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={
                                    s.href.startsWith('http')
                                        ? '_blank'
                                        : undefined
                                }
                                rel={
                                    s.href.startsWith('http')
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                className="text-xs text-white/30 transition-colors hover:text-white"
                            >
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
