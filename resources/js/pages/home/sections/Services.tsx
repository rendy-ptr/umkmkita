const services = [
    {
        icon: 'shopping_cart',
        tag: 'E-Commerce',
        name: 'Toko Online',
        href: '#',
    },
    {
        icon: 'corporate_fare',
        tag: 'Branding',
        name: 'Company Profile',
        href: '#',
    },
    { icon: 'campaign', tag: 'Marketing', name: 'Landing Page', href: '#' },
    {
        icon: 'account_balance',
        tag: 'Government',
        name: 'Sistem Informasi Desa',
        href: '#',
    },
    { icon: 'school', tag: 'Edukasi', name: 'LMS / Kursus Online', href: '#' },
];

export default function Services() {
    return (
        <section className="bg-[#F5F5F0] px-5 px-10 py-24 md:px-10">
            {/* Intro */}
            <div className="mb-14 flex flex-wrap items-end justify-between gap-10">
                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-6 bg-[#00A36C]" />
                        <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-[#00A36C] uppercase">
                            Layanan Kami
                        </span>
                    </div>
                    <h2
                        className="font-display leading-[1.05] font-bold tracking-tight text-[#1A1A1A]"
                        style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
                    >
                        Website yang benar-benar
                        <br />
                        <em className="text-[#00A36C] italic">bekerja</em> untuk
                        bisnis Anda.
                    </h2>
                </div>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#1A1A1A] bg-[#F5F5F0] px-6 py-3.5 text-sm font-medium text-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-[#EBEBE6] hover:shadow-none"
                >
                    Semua Layanan →
                </a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                {services.map((svc) => (
                    <a
                        key={svc.name}
                        href={svc.href}
                        className="group flex cursor-pointer flex-col gap-0 rounded-xl border-2 border-[#1A1A1A] bg-[#F5F5F0] p-8 shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-[#EBEBE6] hover:shadow-none"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white transition-all group-hover:-rotate-6 group-hover:bg-[#00A36C]">
                            <span className="material-symbols-rounded text-2xl">
                                {svc.icon}
                            </span>
                        </div>
                        <div className="mb-1.5 font-mono text-[10px] tracking-widest text-[#8C8880] uppercase">
                            {svc.tag}
                        </div>
                        <div className="font-display text-lg leading-tight font-bold text-[#1A1A1A]">
                            {svc.name}
                        </div>
                        <div className="mt-auto pt-5 text-xl text-[#C4C0B8] transition-all group-hover:translate-x-1 group-hover:text-[#00A36C]">
                            →
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
