import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import blogRoute from '@/routes/blog';
import type { BlogItem } from '@/types/blog.type';

interface BlogProps {
    blogs: BlogItem[];
}

export default function Blog({ blogs }: BlogProps) {
    const ref = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="blog"
            className="scroll-reveal bg-brand-gray-1 px-6 py-24 lg:px-10 lg:py-32"
        >
            <div className="section-container">
                <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
                    <div>
                        <SectionEyebrow label="Blog & Insights" />
                        <h2
                            className="font-display leading-[1.05] font-bold tracking-tight text-brand-black"
                            style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
                        >
                            Insight & Blog{' '}
                            <em className="text-brand-accent italic">
                                Digital
                            </em>
                            .
                        </h2>
                    </div>
                    <Link
                        href={blogRoute.index.url()}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                        Semua Artikel <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.slice(0, 3).map((blog) => (
                        <article
                            key={blog.id}
                            className="group flex flex-col overflow-hidden rounded-xl border-2 border-brand-black bg-brand-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                        >
                            <div className="aspect-[16/9] w-full overflow-hidden border-b-2 border-brand-black bg-brand-gray-2">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    loading="lazy"
                                    className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-5 lg:p-6">
                                <div className="mb-2.5 flex items-center justify-between">
                                    <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                                        {blog.category.label}
                                    </span>
                                    <span className="font-mono text-[9px] font-medium text-brand-gray-4 uppercase">
                                        {blog.created_at}
                                    </span>
                                </div>
                                <h3 className="mb-2 font-display text-[17px] leading-[1.4] font-bold text-brand-black">
                                    {blog.title}
                                </h3>
                                <p className="mb-6 text-xs leading-relaxed text-brand-gray-5 line-clamp-3">
                                    {blog.desc}
                                </p>
                                <div className="mt-auto border-t border-brand-gray-2 pt-4">
                                    <Link
                                        href={blogRoute.show.url(blog.id)}
                                        className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-gray-4 transition-colors hover:text-brand-accent"
                                    >
                                        Baca Selengkapnya <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
