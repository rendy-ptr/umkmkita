import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Promo', href: '/promo' },
    { label: 'Harga', href: '/harga' },
    { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const { url } = usePage();
    const [stuck, setStuck] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setStuck(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const isActive = (href: string) => {
        if (href === '/') {
            return url === '/';
        }

        return url.startsWith(href);
    };

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-4 bg-brand-white px-5 transition-transform duration-400 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-2 border-brand-black text-xl text-brand-black transition-colors hover:bg-brand-accent hover:text-white"
                    aria-label="Tutup menu"
                >
                    ✕
                </button>

                {navLinks.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`nb-shadow-sm w-[85%] rounded-xl border-2 border-brand-black px-6 py-3.5 text-center font-display text-base font-bold text-brand-black transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${isActive(href) ? 'bg-brand-accent text-white' : 'bg-brand-white'}`}
                    >
                        {label}
                    </Link>
                ))}

                <a
                    href="https://wa.me/6282329137621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-shadow-sm mt-2 w-[85%] rounded-xl border-2 border-brand-black bg-brand-accent px-8 py-3.5 text-center font-display text-sm font-bold text-white transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                    Mulai Project →
                </a>
            </div>

            {/* Header */}
            <header
                className={`fixed top-0 right-0 left-0 z-[9000] flex h-[72px] items-center justify-between px-6 transition-all duration-350 lg:px-10 ${stuck ? 'border-b-2 border-brand-black bg-brand-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md' : ''}`}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-1.5 rounded-xl border-2 border-brand-black bg-brand-accent px-3.5 py-2 font-display text-[15px] font-bold tracking-tight text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                >
                    <span className="inline-block h-2 w-2 rounded-full bg-brand-black" />
                    UMKMKITA<span className="text-brand-black">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="flex items-center gap-1">
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className={`hidden rounded-full px-4 py-2 text-[14px] font-medium transition-all md:inline-block ${
                                isActive(href)
                                    ? 'bg-brand-accent text-white'
                                    : 'text-brand-black hover:bg-brand-black/5'
                            }`}
                        >
                            {label}
                        </Link>
                    ))}

                    <a
                        href="https://wa.me/6282329137621"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 hidden rounded-full border-2 border-brand-black bg-brand-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none md:inline-flex"
                    >
                        Mulai Project
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="ml-3 flex cursor-pointer flex-col gap-1.5 rounded-lg border-2 border-brand-black p-2.5 transition-colors hover:bg-brand-accent hover:text-white md:hidden"
                        aria-label="Buka menu"
                    >
                        <span className="block h-[2px] w-[18px] rounded bg-current" />
                        <span className="block h-[2px] w-[18px] rounded bg-current" />
                        <span className="block h-[2px] w-[18px] rounded bg-current" />
                    </button>
                </nav>
            </header>
        </>
    );
}
