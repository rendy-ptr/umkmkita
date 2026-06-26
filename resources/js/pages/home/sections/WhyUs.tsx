import { ArrowRight } from 'lucide-react';
import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const reasons = [
    {
        num: '01',
        icon: 'palette',
        title: 'Desain Custom, Bukan Template',
        desc: 'Setiap pixel dirancang khusus sesuai identitas brand bisnis Anda. Bukan WordPress theme yang pasaran.',
    },
    {
        num: '02',
        icon: 'smart_toy',
        title: 'AI & Otomasi Terintegrasi',
        desc: 'Chatbot WhatsApp, auto-reply, dan analitik cerdas bekerja 24/7 untuk bisnis Anda.',
    },
    {
        num: '03',
        icon: 'support_agent',
        title: 'Support Tanpa Batas Waktu',
        desc: 'Tim dedicated siap membantu kapan saja. Bukan hanya saat build, tapi sepanjang perjalanan digital Anda.',
    },
    {
        num: '04',
        icon: 'rocket_launch',
        title: 'Tech Stack Modern & Scalable',
        desc: 'Dibangun dengan Laravel 13, React, dan infrastruktur cloud — siap handle ribuan pengunjung.',
    },
];

export default function WhyUs() {
    const ref = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            className="scroll-reveal bg-brand-white px-6 py-24 lg:px-10 lg:py-32"
        >
            <div className="section-container">
                <SectionEyebrow label="Mengapa Kami" />
                <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
                    <h2
                        className="font-display leading-[1.05] font-bold tracking-tight text-brand-black"
                        style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
                    >
                        Bukan sekedar{' '}
                        <em className="text-brand-accent italic">vendor</em>,
                        <br />
                        kami mitra bisnis Anda.
                    </h2>
                    <a
                        href="https://wa.me/6282329137621"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-white px-6 py-3.5 text-sm font-medium text-brand-black shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                        Konsultasi Gratis <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {reasons.map((r) => (
                        <div
                            key={r.num}
                            className="group rounded-xl border-2 border-brand-black bg-brand-white p-8 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none lg:p-10"
                        >
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border-2 border-brand-black bg-brand-black text-white transition-all duration-300 group-hover:bg-brand-accent">
                                    <span className="material-symbols-rounded text-2xl">
                                        {r.icon}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3 font-display text-xl font-bold text-brand-black">
                                {r.title}
                            </div>
                            <p className="text-sm leading-[1.75] text-brand-gray-5">
                                {r.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
