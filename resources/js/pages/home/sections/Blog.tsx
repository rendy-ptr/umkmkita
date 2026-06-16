const articles = [
    {
        cat: 'Tips Website',
        title: '7 Alasan UMKM Harus Punya Website di 2025',
        date: '28 Apr 2025',
        href: '#',
    },
    {
        cat: 'E-Commerce',
        title: 'Panduan Toko Online Sukses Setup QRIS',
        date: '22 Apr 2025',
        href: '#',
    },
    {
        cat: 'AI & Teknologi',
        title: 'Bagaimana AI Membantu Website UMKM',
        date: '18 Apr 2025',
        href: '#',
    },
];

export default function Blog() {
    return (
        <section id="blog" className="bg-[#EBEBE6] px-10 py-24 max-md:px-5">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-6 bg-[#00A36C]" />
                        <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-[#00A36C] uppercase">
                            Jurnal
                        </span>
                    </div>
                    <h2
                        className="font-display leading-[1.05] font-bold tracking-tight text-[#1A1A1A]"
                        style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
                    >
                        Jurnal<em className="text-[#00A36C] italic">.</em>
                    </h2>
                </div>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-0.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#00A36C] hover:text-[#00A36C]"
                >
                    Semua Artikel →
                </a>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((a) => (
                    <a
                        key={a.title}
                        href={a.href}
                        className="group cursor-pointer overflow-hidden rounded-xl border-2 border-[#1A1A1A] bg-[#F5F5F0] shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                    >
                        <div className="aspect-[16/9] w-full overflow-hidden bg-[#DEDEDA]">
                            <img
                                src="/artikel.jpg"
                                alt={a.title}
                                loading="lazy"
                                className="block h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <div className="mb-2 font-mono text-[10px] tracking-widest text-[#00A36C] uppercase">
                                {a.cat}
                            </div>
                            <div className="mb-2 font-display text-[17px] leading-[1.35] font-bold text-[#1A1A1A]">
                                {a.title}
                            </div>
                            <div className="text-xs text-[#8C8880]">
                                {a.date}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
