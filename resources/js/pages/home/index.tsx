import { Head } from '@inertiajs/react';
import Blog from './sections/Blog';
import CtaBand from './sections/CtaBand';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Navbar from './sections/Navbar';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import WaFloat from './sections/WaFloat';
import WhyUs from './sections/WhyUs';

export default function Home() {
    return (
        <>
            <Head title="UMKMKITA — Jasa Pembuatan Website Professional" />
            <div className="overflow-x-hidden bg-[#F5F5F0] text-[#1A1A1A]">
                <Navbar />
                <Hero />
                <Marquee />
                <Services />
                <Portfolio />
                <WhyUs />
                <Testimonials />
                <Blog />
                <CtaBand />
                <Footer />
                <WaFloat />
            </div>
        </>
    );
}
