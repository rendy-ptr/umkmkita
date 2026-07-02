import { Head } from '@inertiajs/react';
import HeroGradient from '@/components/marketing/HeroGradient';
import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export default function Faq({ faqs }: { faqs: FAQItem[] }) {
    const heroReveal = useScrollReveal<HTMLDivElement>();
    const faqReveal = useScrollReveal<HTMLDivElement>();

    return (
        <MarketingLayout>
            <Head title="Pertanyaan Umum (FAQ) — UMKMKITA" />

            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-40 lg:pb-20"
            >
                <HeroGradient />

                <div className="section-container relative z-10 mx-auto max-w-[800px]">
                    <div className="nb-shadow-sm mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-green-l px-4 py-1 text-xs font-bold text-brand-black">
                        <span>Pusat Bantuan</span>
                    </div>
                    <h1 className="mb-6 font-display text-4xl leading-[1.1] font-black tracking-tight text-brand-black sm:text-5xl lg:text-7xl">
                        Tanya Jawab <br />
                        <em className="text-brand-accent italic">
                            Seputar Layanan
                        </em>
                        .
                    </h1>
                    <p className="mx-auto max-w-[560px] text-base leading-relaxed text-brand-gray-5 lg:text-lg">
                        Temukan jawaban dari pertanyaan yang paling sering
                        diajukan oleh klien-klien kami.
                    </p>
                </div>
            </section>

            <section
                ref={faqReveal}
                className="scroll-reveal bg-brand-white px-6 py-20 lg:px-10 lg:py-28"
            >
                <div className="section-container max-w-[800px]">
                    <div className="mb-14 text-center">
                        <SectionEyebrow label="Semua Jawaban" />
                        <h2 className="font-display text-3xl font-black text-brand-black lg:text-4xl">
                            Pertanyaan Umum
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="nb-shadow-sm rounded-xl border-2 border-brand-black bg-brand-white p-6"
                            >
                                <h4 className="mb-2 font-display text-base font-bold text-brand-black lg:text-lg">
                                    {faq.question}
                                </h4>
                                <p className="text-sm leading-relaxed text-brand-gray-5">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
