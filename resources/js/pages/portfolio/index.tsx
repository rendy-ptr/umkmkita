import { Head, Link, router } from '@inertiajs/react';
import { ArrowRight, Loader2, OctagonX, Search, X } from 'lucide-react';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import {
    index as portfolioIndex,
    show as portfolioShow,
} from '@/actions/App/Http/Controllers/PortfolioController';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';
import { getImageUrl } from '@/lib/utils';
import type { PortfolioItem } from '@/types/portfolio.type';

interface CategoryOption {
    value: string;
    label: string;
}

interface FilterParams {
    search?: string;
    category?: string;
}

interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    links: { url: string | null; label: string; active: boolean }[];
}

interface PortfolioProps {
    portfolios: PaginatedData<PortfolioItem>;
    categories: CategoryOption[];
    filters: FilterParams;
}

export default function Portfolio({
    portfolios,
    categories,
    filters,
}: PortfolioProps) {
    const [activeTab, setActiveTab] = useState(filters.category || '');
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [isLoading, setIsLoading] = useState(false);

    const performSearch = useDebouncedCallback((newFilters: FilterParams) => {
        router.get(
            portfolioIndex.url(),
            {
                search: newFilters.search,
                category: newFilters.category,
            },
            {
                preserveState: true,
                replace: true,
                preserveScroll: true,
                only: ['portfolios'],
                onBefore: () => setIsLoading(true),
                onFinish: () => setIsLoading(false),
            },
        );
    }, 500);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;
        setSearchQuery(newSearch);
        performSearch({
            search: newSearch,
            category: activeTab,
        });
    };

    const handleTabChange = (cat: string) => {
        setActiveTab(cat);
        performSearch({
            search: searchQuery,
            category: cat,
        });
    };

    const heroReveal = useScrollReveal<HTMLDivElement>();
    const gridReveal = useScrollReveal<HTMLDivElement>();

    const filteredPortfolios = portfolios.data;

    return (
        <MarketingLayout>
            <Head title="Portfolio Website Terbaik UMKM — UMKMKITA" />

            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x from-brand-yellow to-brand-yellow relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r via-brand-green-l px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-40 lg:pb-20"
            >
                <div
                    className="animate-move-dots pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'radial-gradient(#1A1A1A 2px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />

                <div className="section-container relative z-10 mx-auto max-w-[800px]">
                    <div className="nb-shadow-sm mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-green-l px-4 py-1 text-xs font-bold text-brand-black">
                        <span>Showcase & Hasil Kerja</span>
                    </div>
                    <h1 className="mb-6 font-display text-4xl leading-[1.1] font-black tracking-tight text-brand-black sm:text-5xl lg:text-7xl">
                        Galeri Karya{' '}
                        <em className="text-brand-accent italic">Terpilih</em>{' '}
                        Kami.
                    </h1>
                    <p className="mx-auto max-w-[560px] text-base leading-relaxed text-brand-gray-5 lg:text-lg">
                        Lihat portofolio proyek digital dari berbagai industri
                        yang telah kami bantu untuk tumbuh pesat, go-online, dan
                        meningkatkan omzet penjualan mereka.
                    </p>
                </div>
            </section>

            <section
                ref={gridReveal}
                className="scroll-reveal bg-brand-gray-1 px-6 py-16 lg:px-10 lg:py-24"
            >
                <div className="section-container">
                    <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="relative flex h-12 w-full items-center rounded-xl border-2 border-brand-black bg-brand-white shadow-[4px_4px_0_0_#1A1A1A] transition-all focus-within:border-brand-accent hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none sm:max-w-md">
                            <Search
                                className="pointer-events-none ml-4 text-brand-gray-5"
                                size={18}
                                strokeWidth={2.5}
                            />
                            <input
                                type="text"
                                placeholder="Cari portofolio..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="h-full w-full border-none bg-transparent px-3 font-mono text-sm font-bold text-brand-black placeholder:text-brand-gray-5 focus:ring-0 focus:outline-none"
                            />
                        </div>

                        <div className="relative flex w-full items-center gap-2 sm:w-auto">
                            <Select
                                value={activeTab}
                                onValueChange={handleTabChange}
                            >
                                <SelectTrigger className="!h-12 w-full min-w-[200px] rounded-xl border-2 border-brand-black !bg-brand-white px-4 font-mono text-sm font-bold text-brand-black shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none focus:ring-0 focus-visible:ring-0 data-[placeholder]:text-brand-black">
                                    <SelectValue placeholder="Pilih Kategori" />
                                </SelectTrigger>
                                <SelectContent className="z-50 overflow-hidden rounded-xl border-2 border-brand-black !bg-brand-white p-1 font-mono text-sm font-bold text-brand-black shadow-[4px_4px_0_0_#1A1A1A]">
                                    <SelectGroup className="flex flex-col gap-1">
                                        {categories.map((cat) => (
                                            <SelectItem
                                                key={cat.value}
                                                value={cat.value}
                                                className="cursor-pointer rounded-lg px-3 py-2 transition-colors focus:!bg-brand-accent focus:!text-white data-[state=checked]:!bg-brand-black data-[state=checked]:!text-white"
                                            >
                                                {cat.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {activeTab && (
                                <button
                                    onClick={() => handleTabChange('')}
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-brand-black bg-brand-accent text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                    title="Reset Kategori"
                                >
                                    <X size={20} strokeWidth={2.5} />
                                </button>
                            )}
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-brand-black bg-brand-accent p-12 text-white shadow-[4px_4px_0_0_#1A1A1A] sm:col-span-2 lg:col-span-3">
                            <Loader2 className="mb-4 h-12 w-12 animate-spin" />
                            <p className="font-mono text-lg font-bold">
                                Memuat data...
                            </p>
                        </div>
                    ) : filteredPortfolios.length === 0 ? (
                        <div className="bg-brand-yellow/20 flex min-h-[400px] flex-col items-center justify-center rounded-xl border-4 border-brand-black p-12 text-center shadow-[8px_8px_0_0_#1A1A1A] sm:col-span-2 lg:col-span-3">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-brand-black bg-brand-white shadow-[4px_4px_0_0_#1A1A1A]">
                                <OctagonX
                                    className="h-10 w-10 text-brand-accent"
                                    strokeWidth={3}
                                />
                            </div>
                            <h3 className="mb-4 font-display text-2xl font-black text-brand-black lg:text-3xl">
                                Waduh, Nggak Ketemu Nih!
                            </h3>
                            <p className="mb-8 max-w-md text-brand-gray-5">
                                Kami belum memiliki portofolio yang cocok dengan
                                kriteria pencarian atau kategori yang Anda
                                pilih. Coba gunakan kata kunci lain ya.
                            </p>
                            {(searchQuery || activeTab) && (
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setActiveTab('');
                                        router.get(
                                            portfolioIndex.url(),
                                            {},
                                            {
                                                preserveState: true,
                                                replace: true,
                                                preserveScroll: true,
                                            },
                                        );
                                    }}
                                    className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-brand-black bg-brand-accent px-8 font-mono text-sm font-bold text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                >
                                    Reset Semua Filter
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredPortfolios.map((p) => (
                                <article
                                    key={p.id}
                                    className="group flex flex-col overflow-hidden rounded-xl border-2 border-brand-black bg-brand-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                >
                                    <div className="aspect-[4/3] w-full overflow-hidden border-b-2 border-brand-black bg-brand-gray-2">
                                        <img
                                            src={getImageUrl(p.hero_image)}
                                            alt={p.title}
                                            className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-2 font-mono text-[10px] tracking-widest text-brand-accent uppercase">
                                            {p.category
                                                ?.map((c) =>
                                                    c.replace(/_/g, ' '),
                                                )
                                                .join(', ') || 'PROJECT'}
                                        </div>
                                        <h3 className="mb-3 font-display text-lg font-bold text-brand-black">
                                            {p.title}
                                        </h3>
                                        <p className="mb-5 line-clamp-3 text-xs leading-relaxed text-brand-gray-5">
                                            {p.description}
                                        </p>
                                        <div className="mt-auto border-t border-brand-gray-2 pt-4">
                                            <Link
                                                href={portfolioShow.url(p.id)}
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
                    )}

                    {portfolios.last_page > 1 && (
                        <div className="mt-12 flex justify-center gap-2">
                            {portfolios.links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url || '#'}
                                    preserveScroll
                                    preserveState
                                    className={`flex h-10 items-center justify-center rounded-lg border-2 border-brand-black px-4 font-mono text-sm font-bold shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none ${link.active ? 'bg-brand-accent text-white' : 'bg-white text-brand-black'} ${!link.url && 'pointer-events-none cursor-not-allowed opacity-50'}`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </MarketingLayout>
    );
}
