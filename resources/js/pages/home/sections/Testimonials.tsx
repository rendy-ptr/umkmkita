import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export interface TestimonialItem {
    id: number;
    name: string;
    role: string;
    text: string;
    stars: number;
}

interface TestimonialsProps {
    testimonials: TestimonialItem[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
    const ref = useScrollReveal<HTMLElement>();

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    return (
        <section
            ref={ref}
            className="scroll-reveal bg-brand-white px-6 py-24 lg:px-10 lg:py-32"
        >
            <div className="section-container">
                <SectionEyebrow label="Kata Mereka" />
                <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
                    <h2
                        className="font-display leading-[1.05] font-bold tracking-tight text-brand-black"
                        style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
                    >
                        Klien kami{' '}
                        <em className="text-brand-accent italic">berbicara</em>.
                    </h2>
                    <div className="nb-shadow-sm flex items-center gap-2 rounded-xl border-2 border-brand-black bg-brand-green-l px-4 py-2 font-mono text-xs font-bold text-brand-black">
                        <span>★ 4.9/5 Rating rata-rata dari 150+ UMKM</span>
                    </div>
                </div>

                {testimonials.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="group flex flex-col rounded-xl border-2 border-brand-black bg-brand-white p-7 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none lg:p-8"
                            >
                                <div className="mb-4 text-lg tracking-[2px] text-brand-accent">
                                    {'★'.repeat(t.stars)}
                                </div>
                                <p className="mb-6 font-display text-[16px] leading-[1.6] font-normal text-brand-black italic">
                                    "{t.text}"
                                </p>
                                <div className="mt-auto flex items-center gap-3 border-t border-brand-gray-2 pt-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-black bg-brand-green-l font-display text-sm font-bold text-brand-black">
                                        {getInitials(t.name)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-brand-black">
                                            {t.name}
                                        </div>
                                        {t.role && (
                                            <div className="text-[11px] text-brand-gray-4">
                                                {t.role}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border-4 border-brand-black bg-brand-gray-1 py-16 text-center shadow-[4px_4px_0_0_#1A1A1A]">
                        <p className="max-w-[400px] text-base leading-relaxed font-medium text-brand-black/80 lg:text-lg">
                            Belum ada testimoni saat ini.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
