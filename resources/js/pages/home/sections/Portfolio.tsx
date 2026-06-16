const portfolios = [
    { tag: 'Company Profile', title: 'Resto Nusantara', href: '#' },
    { tag: 'E-Commerce', title: 'Fashion Hub', href: '#' },
    { tag: 'Government', title: 'Desa Pintar', href: '#' },
    { tag: 'Landing Page', title: 'Agro Seed', href: '#' },
];

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="relative overflow-hidden bg-[#DEDEDA] px-10 py-24 max-md:px-5"
        >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-6 bg-[#00A36C]" />
                <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-[#00A36C] uppercase">
                    Hasil Karya
                </span>
            </div>
            <h2
                className="mb-10 font-display leading-[1.05] font-bold tracking-tight text-[#1A1A1A]"
                style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
            >
                Karya <em className="text-[#00A36C] italic">Terpilih</em>.
            </h2>

            {/* Grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {portfolios.map((p) => (
                    <a
                        key={p.title}
                        href={p.href}
                        className="group cursor-pointer overflow-hidden rounded-xl border-[3px] border-[#1A1A1A] bg-[#F5F5F0] shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                    >
                        {/* Image placeholder */}
                        <div className="aspect-[4/3] w-full overflow-hidden bg-[#EBEBE6]">
                            <img
                                src="/img.jpg"
                                alt={p.title}
                                className="block h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <div className="mb-2 font-mono text-[10px] tracking-widest text-[#00A36C] uppercase">
                                {p.tag}
                            </div>
                            <div className="font-display text-base leading-tight font-bold text-[#1A1A1A]">
                                {p.title}
                            </div>
                            <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#8C8880] transition-colors group-hover:text-[#1A1A1A]">
                                Lihat Detail →
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-14 text-center">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#1A1A1A] bg-[#F5F5F0] px-6 py-3.5 text-sm font-medium text-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-[#EBEBE6] hover:shadow-none"
                >
                    Lihat Semua 12 Portfolio →
                </a>
            </div>
        </section>
    );
}
