import Footer from '@/components/marketing/Footer';
import Navbar from '@/components/marketing/Navbar';
import ChatBot from '@/pages/home/sections/ChatBot';

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <div className="overflow-x-hidden bg-brand-white font-sans text-brand-black">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ChatBot />
        </div>
    );
}
