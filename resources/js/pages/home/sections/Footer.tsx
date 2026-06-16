const layanan = [
    'Pembuatan Website',
    'Toko Online',
    'Company Profile',
    'Landing Page',
    'LMS / Kursus',
    'Sistem Informasi Desa',
    'Booking & Smart POS',
];
const menu = ['Beranda', 'Layanan', 'Portfolio', 'Promo', 'Harga', 'Jurnal'];
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
    return (
        <footer className="border-t border-white/[0.07] bg-[#1A1A1A] px-10 pt-16 pb-8 text-white/60 max-md:px-5">
            <div className="mb-14 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr]">
                {/* Brand */}
                <div>
                    <div className="mb-3.5 flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-white">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#2D6A4F]" />
                        UMKMKITA<span className="text-[#2D6A4F]">.</span>
                    </div>
                    <p className="mb-5 max-w-[260px] text-sm leading-[1.75]">
                        Kami merancang, membangun, dan memelihara ekosistem
                        digital yang mendorong pertumbuhan nyata untuk UMKM
                        Indonesia.
                    </p>
                    <div className="flex flex-col gap-2">
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
                                className="flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white"
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
                            <a
                                key={l}
                                href="#"
                                className="text-sm text-white/50 transition-colors hover:text-white"
                            >
                                {l}
                            </a>
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
                            <a
                                key={m}
                                href="#"
                                className="text-sm text-white/50 transition-colors hover:text-white"
                            >
                                {m}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Area */}
                <div>
                    <div className="mb-4 font-mono text-[10px] tracking-[0.18em] text-white/30 uppercase">
                        Area Layanan
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
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

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-6">
                <span className="font-mono text-xs text-white/25">
                    © 2025 UMKMKITA. All rights reserved.
                </span>
                <div className="flex gap-4">
                    {['Instagram', 'TikTok', 'WhatsApp'].map((s) => (
                        <a
                            key={s}
                            href="#"
                            className="text-xs text-white/30 transition-colors hover:text-white"
                        >
                            {s}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
