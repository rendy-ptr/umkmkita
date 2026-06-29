import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { getIconComponent } from '@/components/IconRegistry';
import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import type { ServiceData } from '@/types/service.type';

interface ServiceCardProps {
    services: ServiceData[];
}

export default function Services({ services }: ServiceCardProps) {
    const ref = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            className="scroll-reveal bg-brand-white px-6 py-24 lg:px-10 lg:py-32"
        >
            <div className="section-container">
                {/* Intro */}
                <div className="mb-14 flex flex-wrap items-end justify-between gap-10">
                    <div>
                        <SectionEyebrow label="Layanan Kami" />
                        <h2
                            className="font-display leading-[1.05] font-bold tracking-tight text-brand-black"
                            style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
                        >
                            Website yang benar-benar
                            <br />
                            <em className="text-brand-accent italic">
                                bekerja
                            </em>{' '}
                            untuk bisnis Anda.
                        </h2>
                    </div>
                    <Link
                        href="/layanan"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-white px-6 py-3.5 text-sm font-medium text-brand-black shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                        Semua Layanan <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((svc) => {
                        const Icon = getIconComponent(svc.icon);

                        return (
                            <Link
                                key={svc.id}
                                href="/layanan"
                                className="group flex cursor-pointer flex-col rounded-xl border-2 border-brand-black bg-brand-white p-7 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none lg:p-8"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] border-2 border-brand-black bg-brand-black text-white transition-all duration-300 group-hover:bg-brand-accent">
                                    <Icon size={24} />
                                </div>
                                <div className="mb-1.5 font-mono text-[10px] tracking-widest text-brand-gray-4 uppercase">
                                    {svc.category.replace(/-/g, ' ')}
                                </div>
                                <div className="mb-2 font-display text-lg leading-tight font-bold text-brand-black">
                                    {svc.title}
                                </div>
                                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-brand-gray-5">
                                    {svc.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between border-t border-brand-gray-2 pt-4">
                                    <span className="font-mono text-xs font-medium text-brand-accent">
                                        {svc.price}
                                    </span>
                                    <span className="text-lg text-brand-gray-3 transition-all group-hover:translate-x-1 group-hover:text-brand-accent">
                                        →
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
