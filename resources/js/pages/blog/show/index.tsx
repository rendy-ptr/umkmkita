import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    Facebook,
    Linkedin,
    Twitter,
    Lock,
    ArrowUpRight,
} from 'lucide-react';

import MarketingLayout from '@/layouts/marketing-layout';
import blogRoute from '@/routes/blog';
import type { BlogItem } from '@/types/blog.type';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: 'tween' as const, ease: 'easeOut', duration: 0.8 },
    },
};

interface BlogShowProps {
    blog: BlogItem;
    otherBlogs: BlogItem[];
}

export default function BlogShow({ blog, otherBlogs }: BlogShowProps) {
    return (
        <MarketingLayout>
            <Head title={`${blog.title} — Blog UMKMKITA`} />

            {/* MEGA EDITORIAL HEADER (NEO-BRUTALISM) */}
            <motion.section
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-24 lg:px-10 lg:pt-40 lg:pb-32"
            >
                <div
                    className="animate-move-dots pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'radial-gradient(#1A1A1A 2px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <motion.div
                        variants={itemVariants}
                        className="mb-10 flex flex-col items-center gap-6"
                    >
                        <Link
                            href={blogRoute.index.url()}
                            className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-white px-4 py-2 font-mono text-xs font-bold tracking-widest text-brand-black uppercase shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                        >
                            <ArrowLeft size={16} strokeWidth={3} />
                            KEMBALI KE BLOG
                        </Link>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="mb-6 font-display text-4xl leading-[1.1] font-black tracking-tight text-brand-black uppercase lg:text-5xl xl:text-6xl"
                    >
                        {blog.title}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mb-10 max-w-3xl font-display text-xl font-bold text-brand-accent italic lg:text-2xl"
                    >
                        "{blog.desc}"
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 rounded-2xl border-4 border-brand-black bg-brand-white p-6 shadow-[8px_8px_0_0_#1A1A1A] lg:px-10 lg:py-8"
                    >
                        <div className="flex items-center gap-5">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-brand-black bg-brand-accent font-display text-2xl font-black text-white">
                                U
                            </div>
                            <div className="text-left">
                                <div className="font-display text-xl font-black text-brand-black">
                                    Tim Editor
                                </div>
                                <div className="font-mono text-xs font-bold tracking-widest text-brand-gray-5 uppercase">
                                    {blog.created_at}
                                </div>
                            </div>
                        </div>

                        <div className="hidden h-12 w-1 rounded-full bg-brand-black/10 sm:block" />

                        <div className="flex items-center gap-3">
                            <span className="mr-3 hidden font-mono text-xs font-bold tracking-widest text-brand-black uppercase md:inline">
                                Share Article
                            </span>
                            <button className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-brand-black bg-brand-gray-1 text-brand-black transition-all hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-[4px_4px_0_0_#1A1A1A]">
                                <Facebook size={18} strokeWidth={2.5} />
                            </button>
                            <button className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-brand-black bg-brand-gray-1 text-brand-black transition-all hover:-translate-y-1 hover:bg-[#1DA1F2] hover:text-white hover:shadow-[4px_4px_0_0_#1A1A1A]">
                                <Twitter size={18} strokeWidth={2.5} />
                            </button>
                            <button className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-brand-black bg-brand-gray-1 text-brand-black transition-all hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white hover:shadow-[4px_4px_0_0_#1A1A1A]">
                                <Linkedin size={18} strokeWidth={2.5} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="bg-brand-gray-1 px-6 pt-16 pb-24 lg:px-10 lg:pt-24 lg:pb-32"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-start gap-16 lg:grid-cols-12">
                        <motion.article
                            variants={itemVariants}
                            className="lg:col-span-8"
                        >
                            <div className="mb-16 overflow-hidden rounded-2xl border-4 border-brand-black bg-brand-white shadow-[8px_8px_0_0_#1A1A1A] lg:shadow-[16px_16px_0_0_#1A1A1A]">
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
                                    src={blog.image}
                                    alt={blog.title}
                                    className="aspect-[16/9] w-full object-cover lg:aspect-[2/1]"
                                />
                            </div>
                            {/* Teks Artikel */}
                            <div className="prose prose-p:text-brand-gray-5 prose-p:leading-relaxed prose-headings:font-display prose-headings:font-black prose-headings:text-brand-black prose-strong:text-brand-black max-w-none">
                                <h2 className="mt-12 mb-6 flex items-center gap-3 font-display text-2xl font-black text-brand-black lg:text-3xl">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                        1
                                    </span>
                                    {blog.subHeading1}
                                </h2>
                                <p className="text-lg leading-relaxed text-brand-gray-5 lg:text-xl">
                                    {blog.content1}
                                </p>

                                <div className="not-prose my-12 rounded-2xl border-4 border-brand-black bg-brand-green-l px-6 py-8 shadow-[6px_6px_0_0_#1A1A1A] lg:p-10">
                                    <p className="font-display text-xl leading-snug font-black text-brand-black italic lg:text-xl">
                                        "{blog.quote}"
                                    </p>
                                </div>

                                <h2 className="mt-12 mb-6 flex items-center gap-3 font-display text-2xl font-black text-brand-black lg:text-3xl">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                        2
                                    </span>
                                    {blog.subHeading2}
                                </h2>
                                <p className="text-lg leading-relaxed text-brand-gray-5 lg:text-xl">
                                    {blog.content2}
                                </p>

                                <h2 className="mt-12 mb-6 flex items-center gap-3 font-display text-2xl font-black text-brand-black lg:text-3xl">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                        3
                                    </span>
                                    {blog.subHeading3}
                                </h2>
                                <p className="text-lg leading-relaxed text-brand-gray-5 lg:text-xl">
                                    {blog.content3}
                                </p>
                            </div>
                        </motion.article>

                        <aside className="lg:col-span-4">
                            <div className="sticky top-32 flex flex-col gap-12">
                                {blog.category && (
                                    <motion.div variants={itemVariants}>
                                        <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-black text-brand-black uppercase">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                                #
                                            </span>
                                            Kategori
                                        </h3>
                                        <div className="inline-block rounded-xl border-4 border-brand-black px-4 py-1.5 font-display text-xs font-black text-brand-black uppercase shadow-[4px_4px_0_0_#1A1A1A]">
                                            {blog.category.label}
                                        </div>
                                    </motion.div>
                                )}

                                {otherBlogs && otherBlogs.length > 0 && (
                                    <motion.div
                                        variants={itemVariants}
                                        className="flex flex-col gap-6"
                                    >
                                        <h3 className="flex items-center gap-3 font-display text-2xl font-black text-brand-black uppercase">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-brand-black bg-brand-accent text-sm font-black text-white shadow-[2px_2px_0_0_#1A1A1A]">
                                                +
                                            </span>
                                            Artikel Lainnya
                                        </h3>

                                        <div className="flex flex-col gap-6">
                                            {otherBlogs.map((other) => (
                                                <Link
                                                    key={other.id}
                                                    href={blogRoute.show.url(
                                                        other.id,
                                                    )}
                                                    className="group flex flex-col gap-4 rounded-xl border-2 border-brand-black bg-brand-white p-4 shadow-[8px_8px_0_0_#1A1A1A] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none"
                                                >
                                                    {/* <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border-4 border-brand-black bg-brand-gray-1">
                                                        <img
                                                            src={other.image}
                                                            alt={other.title}
                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div> */}
                                                    <div className="flex flex-col">
                                                        <span className="mb-2 font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                                                            {
                                                                other.category
                                                                    .label
                                                            }
                                                        </span>
                                                        <h4 className="text-md font-display leading-snug font-bold text-brand-black">
                                                            {other.title}
                                                        </h4>
                                                    </div>
                                                    <div className="inline-flex items-center gap-1.5 text-xs text-brand-gray-4 transition-colors group-hover:text-brand-accent">
                                                        Baca Selengkapnya{' '}
                                                        <ArrowRight size={12} />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                <motion.div
                                    variants={itemVariants}
                                    className="relative rounded-2xl border-4 border-brand-black bg-brand-white p-8 shadow-[8px_8px_0_0_#1A1A1A]"
                                >
                                    <h3 className="mb-4 pr-8 font-display text-2xl font-black text-brand-black">
                                        Tingkatkan Omset Bisnis Anda
                                    </h3>
                                    <p className="mb-8 text-base leading-relaxed font-medium text-brand-gray-5">
                                        Konsultasikan strategi digital marketing
                                        yang paling tepat untuk UMKM Anda
                                        bersama tim ahli kami.
                                    </p>
                                    <a
                                        href="https://wa.me/6281234567890"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border-4 border-brand-black bg-brand-accent px-6 py-4 font-mono text-sm font-bold text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                    >
                                        KONSULTASI GRATIS{' '}
                                        <ArrowUpRight
                                            size={18}
                                            strokeWidth={2.5}
                                        />
                                    </a>
                                </motion.div>
                            </div>
                        </aside>
                    </div>
                </div>
            </motion.section>
        </MarketingLayout>
    );
}
