const testimonials = [
    {
        stars: 5,
        text: 'Dalam 3 bulan setelah website live, orderan naik 3x lipat.',
        avatar: 'AS',
        name: 'Ahmad Syahrul',
        role: 'Owner Batik Nusantara',
    },
    {
        stars: 5,
        text: 'Pengerjaan cepat, komunikatif, dan hasilnya melebihi ekspektasi.',
        avatar: 'BR',
        name: 'Budi Raharjo',
        role: 'Kepala Desa Sukamaju',
    },
    {
        stars: 5,
        text: 'LMS kami sekarang punya 500+ siswa aktif. Luar biasa!',
        avatar: 'SP',
        name: 'Sinta Permata',
        role: 'Direktur EduPro',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#F5F5F0] px-10 py-24 max-md:px-5">
            <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-6 bg-[#00A36C]" />
                <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-[#00A36C] uppercase">
                    Kata Mereka
                </span>
            </div>
            <h2
                className="mb-12 font-display leading-[1.05] font-bold tracking-tight text-[#1A1A1A]"
                style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
            >
                Klien kami <em className="text-[#00A36C] italic">berbicara</em>.
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                    <div
                        key={t.name}
                        className="group cursor-pointer rounded-xl border-2 border-[#1A1A1A] bg-[#F5F5F0] p-7 shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-[#EBEBE6] hover:shadow-none"
                    >
                        <div className="mb-3.5 text-sm tracking-[2px] text-[#00A36C]">
                            {'★'.repeat(t.stars)}
                        </div>
                        <p className="mb-5 font-display text-[17px] leading-[1.6] font-normal text-[#1A1A1A] italic">
                            "{t.text}"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DEDEDA] font-display text-sm font-bold text-[#1A1A1A]">
                                {t.avatar}
                            </div>
                            <div>
                                <div className="text-sm font-medium text-[#1A1A1A]">
                                    {t.name}
                                </div>
                                <div className="text-[11px] text-[#8C8880]">
                                    {t.role}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
