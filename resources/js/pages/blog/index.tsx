import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

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

interface CategoryOption {
    value: string;
    label: string;
}

interface BlogItem {
    id: number;
    title: string;
    desc: string;
    image: string;
    created_at: string;
    category: CategoryOption;
}

interface BlogProps {
    blogs: BlogItem[];
    categories: CategoryOption[];
}

export default function Blog({ blogs, categories }: BlogProps) {
    const [activeTab, setActiveTab] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');
    const heroReveal = useScrollReveal<HTMLDivElement>();
    const gridReveal = useScrollReveal<HTMLDivElement>();

    const tabOptions = ['Semua', ...categories.map((c) => c.label)];

    const filteredBlogs = blogs.filter((b) => {
        const matchesTab =
            activeTab === 'Semua' || b.category.label === activeTab;
        const matchesSearch =
            b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.desc.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesTab && matchesSearch;
    });

    return (
        <MarketingLayout>
            <Head title="Blog & Insights Digital UMKM — UMKMKITA" />

            {/* Hero Section */}
            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-40 lg:pb-20"
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
                        <span>Edukatif & Informatif</span>
                    </div>
                    <h1 className="mb-6 font-display text-4xl leading-[1.1] font-black tracking-tight text-brand-black sm:text-5xl lg:text-7xl">
                        Blog & Insight{' '}
                        <em className="text-brand-accent italic">
                            Digitalisasi
                        </em>
                        .
                    </h1>
                    <p className="mx-auto max-w-[560px] text-base leading-relaxed text-brand-gray-5 lg:text-lg">
                        Pelajari tips praktis pengembangan web, optimasi SEO,
                        teknologi AI, serta strategi pemasaran digital terkini
                        untuk meningkatkan kinerja bisnis Anda secara konsisten.
                    </p>
                </div>
            </section>

            {/* Articles Grid Section */}
            <section
                ref={gridReveal}
                className="scroll-reveal bg-brand-gray-1 px-6 py-16 lg:px-10 lg:py-24"
            >
                <div className="section-container">
                    {/* Controls: Search & Category Dropdown */}
                    <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        {/* Search Input */}
                        <div className="relative flex h-12 w-full items-center rounded-xl border-2 border-brand-black bg-brand-white shadow-[4px_4px_0_0_#1A1A1A] transition-all focus-within:border-brand-accent hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none sm:max-w-md">
                            <Search
                                className="pointer-events-none ml-4 text-brand-gray-5"
                                size={18}
                                strokeWidth={2.5}
                            />
                            <input
                                type="text"
                                placeholder="Cari artikel..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-full w-full border-none bg-transparent px-3 font-mono text-sm font-bold text-brand-black placeholder:text-brand-gray-5 focus:ring-0 focus:outline-none"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative w-full sm:w-auto">
                            <Select
                                value={activeTab}
                                onValueChange={setActiveTab}
                            >
                                <SelectTrigger className="nb-shadow-sm !h-12 w-full min-w-[200px] rounded-xl border-2 border-brand-black !bg-brand-white px-4 font-mono text-sm font-bold text-brand-black transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus:ring-0 focus-visible:ring-0 data-[placeholder]:text-brand-black">
                                    <SelectValue placeholder="Pilih Kategori" />
                                </SelectTrigger>
                                <SelectContent className="z-50 overflow-hidden rounded-xl border-2 border-brand-black !bg-brand-white p-1 font-mono text-sm font-bold text-brand-black shadow-[4px_4px_0_0_#1A1A1A]">
                                    <SelectGroup className="flex flex-col gap-1">
                                        {tabOptions.map((cat) => (
                                            <SelectItem
                                                key={cat}
                                                value={cat}
                                                className="cursor-pointer rounded-lg px-3 py-2 transition-colors focus:!bg-brand-accent focus:!text-white data-[state=checked]:!bg-brand-black data-[state=checked]:!text-white"
                                            >
                                                {cat}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredBlogs.map((a) => (
                            <article
                                key={a.id}
                                className="group flex flex-col overflow-hidden rounded-xl border-2 border-brand-black bg-brand-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                            >
                                <div className="aspect-[16/9] w-full overflow-hidden border-b-2 border-brand-black bg-brand-gray-2">
                                    <img
                                        src={a.image}
                                        alt={a.title}
                                        className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-2.5 flex items-center justify-between">
                                        <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                                            {a.category.label}
                                        </span>
                                        <span className="font-mono text-[9px] font-medium text-brand-gray-4 uppercase">
                                            {a.created_at}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 font-display text-lg leading-[1.4] font-bold text-brand-black">
                                        {a.title}
                                    </h3>
                                    <p className="mb-6 text-xs leading-relaxed text-brand-gray-5">
                                        {a.desc}
                                    </p>
                                    <div className="mt-auto border-t border-brand-gray-2 pt-4">
                                        <Link
                                            href={`/blog/${a.id}`}
                                            className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-gray-4 transition-colors hover:text-brand-accent"
                                        >
                                            Baca Selengkapnya{' '}
                                            <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
