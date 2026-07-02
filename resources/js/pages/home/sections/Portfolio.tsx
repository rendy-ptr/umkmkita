import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { getImageUrl } from '@/lib/utils';
import portfolio from '@/routes/portfolio';
import type { PortfolioItem } from '@/types/portfolio.type';

interface PortfolioSectionProps {
    portfolios: PortfolioItem[];
}

export default function Portfolio({ portfolios }: PortfolioSectionProps) {
    const ref = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="portfolio"
            className="scroll-reveal relative overflow-hidden bg-brand-gray-2 px-6 py-24 lg:px-10 lg:py-32"
        >
            <div className="section-container">
                <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <SectionEyebrow label="Hasil Karya" />
                        <h2
                            className="font-display leading-[1.05] font-bold tracking-tight text-brand-black"
                            style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
                        >
                            Karya{' '}
                            <em className="text-brand-accent italic">
                                Terpilih
                            </em>
                            .
                        </h2>
                    </div>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                        Semua Portfolio <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <article className="group flex flex-col overflow-hidden rounded-xl border-[3px] border-brand-black bg-brand-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-brand-gray-1">
                            <img
                                src={getImageUrl(portfolios[0].hero_image)}
                                alt={portfolios[0].title}
                                className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-2 font-mono text-[10px] tracking-widest text-brand-accent uppercase">
                                {portfolios[0].category
                                    ?.map((c) => c.replace(/_/g, ' '))
                                    .join(', ') || 'PROJECT'}
                            </div>
                            <div className="mb-1.5 font-display text-xl leading-tight font-bold text-brand-black">
                                {portfolios[0].title}
                            </div>
                            <p className="mb-5 text-sm text-brand-gray-5">
                                {portfolios[0].description}
                            </p>
                            <div className="mt-auto border-t border-brand-gray-2 pt-4">
                                <Link
                                    href={portfolio.show.url(portfolios[0].id)}
                                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-brand-gray-4 transition-colors hover:text-brand-accent"
                                >
                                    Lihat Detail <ArrowRight size={12} />
                                </Link>
                            </div>
                        </div>
                    </article>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
                        {portfolios.slice(1, 4).map((p) => (
                            <article
                                key={p.id}
                                className="group flex flex-col overflow-hidden rounded-xl border-[3px] border-brand-black bg-brand-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none sm:flex-row"
                            >
                                <div className="hidden w-[180px] shrink-0 overflow-hidden bg-brand-gray-1 lg:block">
                                    <img
                                        src={getImageUrl(p.hero_image)}
                                        alt={p.title}
                                        className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="aspect-[16/9] w-full overflow-hidden bg-brand-gray-1 lg:hidden">
                                    <img
                                        src={getImageUrl(p.hero_image)}
                                        alt={p.title}
                                        className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="hidden flex-1 flex-col justify-center p-5 lg:flex">
                                    <div className="mb-1.5 font-mono text-[10px] tracking-widest text-brand-accent uppercase">
                                        {p.category.length > 0
                                            ? p.category
                                                  .map((c) =>
                                                      c.replace(/_/g, ' '),
                                                  )
                                                  .join(', ')
                                            : 'PROJECT'}
                                    </div>
                                    <div className="mb-1 font-display text-base leading-tight font-bold text-brand-black">
                                        {p.title}
                                    </div>
                                    <p className="mb-4 text-sm text-brand-gray-5">
                                        {p.description}
                                    </p>
                                    <div className="mt-auto border-t border-brand-gray-2 pt-4">
                                        <Link
                                            href={portfolio.show.url(p.id)}
                                            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-brand-gray-4 transition-colors hover:text-brand-accent"
                                        >
                                            Lihat Detail{' '}
                                            <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-4 lg:hidden">
                                    <div className="mb-1.5 font-mono text-[10px] tracking-widest text-brand-accent uppercase">
                                        {p.category
                                            ?.map((c) => c.replace(/_/g, ' '))
                                            .join(', ') || 'PROJECT'}
                                    </div>
                                    <div className="mb-4 font-display text-base leading-tight font-bold text-brand-black">
                                        {p.title}
                                    </div>
                                    <div className="mt-auto border-t border-brand-gray-2 pt-4">
                                        <Link
                                            href={portfolio.show.url(p.id)}
                                            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-brand-gray-4 transition-colors hover:text-brand-accent"
                                        >
                                            Lihat Detail{' '}
                                            <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
