import { Head } from '@inertiajs/react';
import MarketingLayout from '@/layouts/marketing-layout';
import type { BlogItem } from '@/types/blog.type';
import type { PortfolioItem } from '@/types/portfolio.type';
import Blog from './sections/Blog';
import CtaBand from './sections/CtaBand';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import WhyUs from './sections/WhyUs';

interface HomeProps {
    portfolios: PortfolioItem[];
    blogs: BlogItem[];
}

export default function Home({ portfolios, blogs }: HomeProps) {
    return (
        <MarketingLayout>
            <Head title="UMKMKITA — Jasa Pembuatan Website Professional untuk UMKM Indonesia" />
            <Hero />
            <Marquee />
            <Services />
            <Portfolio portfolios={portfolios} />
            <WhyUs />
            <Testimonials />
            <Blog blogs={blogs} />
            <CtaBand />
        </MarketingLayout>
    );
}
