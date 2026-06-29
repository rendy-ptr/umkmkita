import { Head } from '@inertiajs/react';
import MarketingLayout from '@/layouts/marketing-layout';
import type { AdvantageItem } from '@/types/advantage.type';
import type { BlogItem } from '@/types/blog.type';
import type { PortfolioItem } from '@/types/portfolio.type';
import type { ServiceData } from '@/types/service.type';
import Blog from './sections/Blog';
import CtaBand from './sections/CtaBand';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import type { TestimonialItem } from './sections/Testimonials';
import WhyUs from './sections/WhyUs';

interface HomeProps {
    portfolios: PortfolioItem[];
    blogs: BlogItem[];
    services: ServiceData[];
    advantages: AdvantageItem[];
    testimonials: TestimonialItem[];
}

export default function Home({
    portfolios,
    blogs,
    services,
    advantages,
    testimonials,
}: HomeProps) {
    return (
        <MarketingLayout>
            <Head title="UMKMKITA — Jasa Pembuatan Website Professional untuk UMKM Indonesia" />
            <Hero />
            <Marquee />
            <Services services={services} />
            <Portfolio portfolios={portfolios} />
            <WhyUs advantages={advantages} />
            <Testimonials testimonials={testimonials} />
            <Blog blogs={blogs} />
            <CtaBand />
        </MarketingLayout>
    );
}
