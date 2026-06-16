const reasons = [
    {
        num: '01',
        title: 'Desain Premium',
        desc: 'Standard internasional — clean, responsif, dan profesional.',
    },
    {
        num: '02',
        title: 'AI Terintegrasi',
        desc: 'Teknologi cerdas bekerja di balik layar untuk bisnis Anda.',
    },
    {
        num: '03',
        title: 'Support 24/7',
        desc: 'Kami hadir menemani perjalanan digital bisnis Anda.',
    },
    {
        num: '04',
        title: 'Skalabilitas',
        desc: 'Dibangun dengan framework modern Laravel & Next.js.',
    },
];

export default function WhyUs() {
    return (
        <section className="bg-[#F5F5F0] px-10 py-24 max-md:px-5">
            <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-6 bg-[#00A36C]" />
                <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-[#00A36C] uppercase">
                    Mengapa Kami
                </span>
            </div>
            <h2
                className="mb-14 font-display leading-[1.05] font-bold tracking-tight text-[#1A1A1A]"
                style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
            >
                Bukan sekedar <em className="text-[#00A36C] italic">vendor</em>,
                <br />
                kami mitra bisnis Anda.
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {reasons.map((r) => (
                    <div
                        key={r.num}
                        className="group rounded-xl border-2 border-[#1A1A1A] bg-[#F5F5F0] p-10 shadow-[6px_6px_0_#1A1A1A] transition-all hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-[#EBEBE6] hover:shadow-none"
                    >
                        <div className="mb-4 font-display text-[64px] leading-none font-black text-[#DEDEDA] transition-colors group-hover:text-[#B7E4C7]">
                            {r.num}
                        </div>
                        <div className="mb-2.5 font-display text-xl font-bold text-[#1A1A1A]">
                            {r.title}
                        </div>
                        <p className="text-sm leading-[1.75] font-light text-[#4A4844]">
                            {r.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
