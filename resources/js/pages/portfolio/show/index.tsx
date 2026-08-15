import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Lock } from 'lucide-react';
import { getIconComponent } from '@/components/IconRegistry';
import HeroGradient from '@/components/marketing/HeroGradient';
import MarketingLayout from '@/layouts/marketing-layout';
import { getImageUrl } from '@/lib/utils';
import type { PortfolioItem } from '@/types/portfolio.type';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween' as const,
            ease: 'easeOut',
            duration: 1.2,
        },
    },
};

interface PortfolioShowProps {
    portfolio: PortfolioItem;
}

export default function PortfolioShow({ portfolio }: PortfolioShowProps) {
    return (
        <MarketingLayout>
            <Head title={`Case Study: ${portfolio.client} — UMKMKITA`} />

            <motion.section
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-24"
            >
                <HeroGradient />

                <div className="section-container relative z-10 mx-auto max-w-[1400px]">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start lg:gap-16">
                        <motion.div variants={itemVariants}>
                            <Link
                                href="/"
                                className="group mb-8 inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-white px-4 py-2 font-mono text-xs font-bold text-brand-black shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                            >
                                <ArrowLeft size={16} strokeWidth={3} />
                                KEMBALI KE BERANDA
                            </Link>

                            <h1 className="mb-6 font-display text-5xl leading-[1.05] font-black tracking-tight text-brand-black uppercase lg:text-6xl xl:text-7xl">
                                {portfolio.title}
                            </h1>

                            <p className="mb-10 font-display text-2xl font-bold text-brand-accent italic lg:text-3xl">
                                "{portfolio.tagline}"
                            </p>

                            <motion.div
                                variants={itemVariants}
                                className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
                            >
                                <div>
                                    <div className="mb-1 font-mono text-[10px] font-bold tracking-widest text-brand-gray-5 uppercase">
                                        Client
                                    </div>
                                    <div className="font-display text-xl font-black text-brand-black">
                                        {portfolio.client}
                                    </div>
                                </div>
                                <div className="hidden h-10 w-[3px] rounded-full bg-brand-black/10 sm:block" />
                                <div>
                                    <div className="mb-1 font-mono text-[10px] font-bold tracking-widest text-brand-gray-5 uppercase">
                                        Service
                                    </div>
                                    <div className="font-display text-xl font-black text-brand-black">
                                        {portfolio.service}
                                    </div>
                                </div>
                                <div className="hidden h-10 w-[3px] rounded-full bg-brand-black/10 sm:block" />
                                <div>
                                    <div className="mb-1 font-mono text-[10px] font-bold tracking-widest text-brand-gray-5 uppercase">
                                        Year
                                    </div>
                                    <div className="font-display text-xl font-black text-brand-black">
                                        {portfolio.year}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="relative mx-auto mt-8 w-full max-w-lg lg:mt-0 lg:max-w-none"
                        >
                            <div className="absolute -right-6 -bottom-6 h-full w-full rounded-2xl border-4 border-brand-black bg-brand-accent transition-transform duration-500 hover:translate-x-2 hover:translate-y-2" />

                            <div className="relative z-10 flex flex-col overflow-hidden rounded-2xl border-4 border-brand-black bg-brand-white">
                                <div className="relative flex h-14 items-center justify-center border-b-4 border-brand-black bg-[#E5E5E5] px-4">
                                    <div className="absolute left-4 flex gap-2">
                                        <div className="h-3.5 w-3.5 rounded-full border-2 border-brand-black bg-[#FF5F56]" />
                                        <div className="h-3.5 w-3.5 rounded-full border-2 border-brand-black bg-[#FFBD2E]" />
                                        <div className="h-3.5 w-3.5 rounded-full border-2 border-brand-black bg-[#27C93F]" />
                                    </div>
                                    <div className="flex w-1/2 max-w-[240px] items-center justify-center gap-1.5 rounded-md border-2 border-brand-black bg-white py-1 font-sans text-[11px] font-semibold tracking-wide text-brand-black/60 sm:max-w-xs md:text-xs">
                                        <Lock
                                            size={12}
                                            className="text-brand-black/40"
                                        />
                                        umkmkita.com
                                    </div>
                                </div>

                                <img
                                    src={getImageUrl(portfolio.hero_image)}
                                    alt={`${portfolio.title} showcase`}
                                    className="aspect-video w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="bg-brand-white px-6 pt-24 pb-16 lg:px-10 lg:pt-32 lg:pb-32"
            >
                <div className="section-container mx-auto max-w-6xl">
                    <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
                        <div className="flex flex-col gap-16">
                            {portfolio.content_blocks &&
                                portfolio.content_blocks.length > 0 &&
                                portfolio.content_blocks.map((block, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                    >
                                        <h2 className="mb-6 flex items-center gap-3 font-display text-3xl font-black text-brand-black lg:text-4xl">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                                {idx + 1}
                                            </span>
                                            {block.subheading}
                                        </h2>
                                        <p className="text-lg leading-relaxed text-brand-gray-5 lg:text-xl">
                                            {block.paragraph}
                                        </p>
                                    </motion.div>
                                ))}

                            <motion.div
                                variants={itemVariants}
                                className="nb-shadow-sm rounded-2xl border-4 border-brand-black bg-brand-green-l p-8 lg:p-10"
                            >
                                <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-black text-brand-black lg:text-3xl">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                        {(portfolio.content_blocks?.length ||
                                            0) + 1}
                                    </span>
                                    Tantangan Utama
                                </h2>
                                <p className="text-lg leading-relaxed text-brand-black">
                                    {portfolio.challenge}
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h2 className="mb-6 flex items-center gap-3 font-display text-3xl font-black text-brand-black lg:text-4xl">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                        {(portfolio.content_blocks?.length ||
                                            0) + 2}
                                    </span>
                                    Solusi & Hasil
                                </h2>
                                <p className="mb-10 text-lg leading-relaxed text-brand-gray-5 lg:text-xl">
                                    {portfolio.solution.text}
                                </p>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    {portfolio.solution.items.map(
                                        (feat, idx) => {
                                            const IconComponent =
                                                getIconComponent(feat.icon);

                                            return (
                                                <div
                                                    key={idx}
                                                    className="nb-card group relative overflow-hidden bg-brand-white p-8"
                                                >
                                                    <div className="absolute -top-4 -right-4 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-accent group-hover:opacity-10">
                                                        {IconComponent && (
                                                            <IconComponent
                                                                size={140}
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="relative z-10">
                                                        <div className="mb-6 inline-flex rounded-xl border-2 border-brand-black bg-brand-black p-3 text-white transition-all duration-300 group-hover:bg-brand-accent">
                                                            {IconComponent && (
                                                                <IconComponent
                                                                    size={28}
                                                                    strokeWidth={
                                                                        2.5
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                        <h3 className="mb-3 font-display text-xl font-bold text-brand-black">
                                                            {feat.title}
                                                        </h3>
                                                        <p className="text-base leading-relaxed text-brand-gray-5">
                                                            {feat.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            </motion.div>

                            {portfolio.gallery &&
                                portfolio.gallery.length > 0 && (
                                    <motion.div variants={itemVariants}>
                                        <h2 className="mb-6 flex items-center gap-3 font-display text-3xl font-black text-brand-black lg:text-4xl">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                                {(portfolio.content_blocks
                                                    ?.length || 0) + 3}
                                            </span>
                                            Hasil Website
                                        </h2>
                                        <div className="grid gap-8 sm:grid-cols-2">
                                            {portfolio.gallery.map(
                                                (img: string, idx: number) => (
                                                    <div
                                                        key={idx}
                                                        className="nb-card group overflow-hidden bg-brand-white p-2"
                                                    >
                                                        <div className="relative w-full overflow-hidden rounded-xl border-2 border-brand-black">
                                                            <div className="relative flex h-10 items-center justify-center border-b-4 border-brand-black bg-[#E5E5E5] px-4 sm:h-12">
                                                                <div className="absolute left-3 flex gap-1.5 sm:left-4 sm:gap-2">
                                                                    <div className="h-2.5 w-2.5 rounded-full border-2 border-brand-black bg-[#FF5F56] sm:h-3 sm:w-3" />
                                                                    <div className="h-2.5 w-2.5 rounded-full border-2 border-brand-black bg-[#FFBD2E] sm:h-3 sm:w-3" />
                                                                    <div className="h-2.5 w-2.5 rounded-full border-2 border-brand-black bg-[#27C93F] sm:h-3 sm:w-3" />
                                                                </div>
                                                                <div className="flex w-1/2 max-w-[160px] items-center justify-center gap-1.5 rounded-md border-2 border-brand-black bg-white py-1 font-sans text-[9px] font-semibold tracking-wide text-brand-black/60 sm:max-w-[200px] sm:text-[10px]">
                                                                    <Lock
                                                                        size={
                                                                            10
                                                                        }
                                                                        className="text-brand-black/40"
                                                                    />
                                                                    umkmkita.com
                                                                </div>
                                                            </div>
                                                            <div className="aspect-video w-full overflow-hidden">
                                                                <img
                                                                    src={getImageUrl(
                                                                        img,
                                                                    )}
                                                                    alt={`${portfolio.title} screenshot ${idx + 1}`}
                                                                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                        </div>

                        <aside className="flex flex-col gap-12">
                            {portfolio.category &&
                                portfolio.category.length > 0 && (
                                    <motion.div variants={itemVariants}>
                                        <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-black text-brand-black uppercase">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                                #
                                            </span>
                                            Kategori
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {portfolio.category.map(
                                                (cat, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="inline-block rounded-lg border-4 border-brand-black px-2 py-1 font-display text-xs font-black text-brand-black uppercase shadow-[2px_2px_0_0_#1A1A1A]"
                                                    >
                                                        {cat.replace(/_/g, ' ')}
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                            <motion.div
                                variants={itemVariants}
                                className="nb-shadow rounded-2xl border-4 border-brand-black bg-brand-white p-8 text-brand-black"
                            >
                                <h3 className="mb-4 font-display text-2xl font-black">
                                    Ingin Hasil Serupa?
                                </h3>
                                <p className="mb-8 text-base leading-relaxed text-brand-gray-5">
                                    Mari diskusikan bagaimana kami bisa membantu
                                    bisnis Anda mencapai target melalui strategi
                                    digital yang tepat.
                                </p>
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand-black bg-brand-accent px-6 py-4 font-mono text-sm font-bold text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                >
                                    KONSULTASI GRATIS
                                    <ArrowUpRight size={18} strokeWidth={2.5} />
                                </a>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </motion.section>
        </MarketingLayout>
    );
}
