import { useState, useEffect } from 'react';

export default function Navbar() {
    const [stuck, setStuck] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setStuck(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-4 bg-[#F5F5F0] px-5 transition-transform duration-400 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-5 right-5 cursor-pointer text-3xl text-[#1A1A1A]"
                >
                    ✕
                </button>
                {[
                    'Beranda',
                    'Layanan',
                    'Portfolio',
                    'Promo',
                    'Harga',
                    'Jurnal',
                ].map((item) => (
                    <a
                        key={item}
                        href="#"
                        onClick={() => setMobileOpen(false)}
                        className="w-[85%] rounded-lg border-2 border-[#1A1A1A] px-6 py-3 text-center font-display text-base font-bold text-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                        {item}
                    </a>
                ))}
                <a
                    href="https://wa.me/6282329137621"
                    target="_blank"
                    className="mt-2 w-[85%] rounded-lg border-2 border-[#1A1A1A] bg-[#00A36C] px-8 py-3 text-center font-display text-sm font-bold text-white shadow-[4px_4px_0_#1A1A1A] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                    Mulai Project →
                </a>
            </div>

            {/* Header */}
            <header
                className={`fixed top-0 right-0 left-0 z-[9000] flex h-[68px] items-center justify-between border-b border-transparent px-10 transition-all duration-350 ${stuck ? 'border-[#1A1A1A] bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md' : ''}`}
            >
                <a
                    href="#"
                    className="flex items-center gap-1.5 rounded-lg border-2 border-[#1A1A1A] bg-[#00A36C] px-3 py-1.5 font-display text-[15px] font-bold tracking-tight text-white shadow-[3px_3px_0_#1A1A1A] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                >
                    <span className="inline-block h-2 w-2 rounded-full bg-[#1A1A1A]" />
                    UMKMKITA<span className="text-[#1A1A1A]">.</span>
                </a>

                <nav className="flex items-center gap-9">
                    {[
                        { label: 'Beranda', active: true },
                        { label: 'Layanan' },
                        { label: 'Portfolio' },
                        { label: 'Promo' },
                        { label: 'Harga' },
                        { label: 'Jurnal' },
                    ].map(({ label, active }) => (
                        <a
                            key={label}
                            href="#"
                            className={`hidden rounded-full px-5 py-2 text-[15px] font-medium text-[#1A1A1A] transition-all hover:bg-[#00A36C] hover:text-white md:inline-block ${active ? 'text-[#00A36C]' : ''}`}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/6282329137621"
                        target="_blank"
                        className="ml-3 rounded-full border-2 border-[#1A1A1A] bg-[#00A36C] px-6 py-2.5 text-sm font-semibold text-white shadow-[4px_4px_0_#1A1A1A] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#2D6A4F] hover:shadow-none"
                    >
                        Mulai Project
                    </a>
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="flex cursor-pointer flex-col gap-1.5 p-1.5 md:hidden"
                    >
                        <span className="block h-[1.5px] w-[22px] rounded bg-[#1A1A1A]" />
                        <span className="block h-[1.5px] w-[22px] rounded bg-[#1A1A1A]" />
                        <span className="block h-[1.5px] w-[22px] rounded bg-[#1A1A1A]" />
                    </button>
                </nav>
            </header>
        </>
    );
}
