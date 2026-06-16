export default function CtaBand() {
    return (
        <section className="relative overflow-hidden bg-[#1A1A1A] px-10 py-24 text-center text-white max-md:px-5">
            <div
                className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
                style={{
                    background:
                        'radial-gradient(ellipse, rgba(45,106,79,0.25) 0%, transparent 65%)',
                }}
            />
            <h2
                className="relative z-10 mb-5 font-display leading-none font-black tracking-tight"
                style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}
            >
                Wujudkan Ide Besar{' '}
                <em className="text-[#B7E4C7] italic">Anda</em>.
            </h2>
            <p className="relative z-10 mx-auto mb-10 max-w-[420px] text-base font-light text-white/60">
                Konsultasi gratis hari ini. Tim kami siap membantu bisnis Anda
                go digital.
            </p>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5">
                <a
                    href="https://wa.me/6282329137621"
                    target="_blank"
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#F5F5F0] bg-[#F5F5F0] px-8 py-3.5 text-sm font-semibold text-[#1A1A1A] transition-all hover:bg-transparent hover:text-white"
                >
                    Mulai Sekarang
                </a>
                <a
                    href="mailto:hello@umkmkita.id"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm text-white/70 transition-all hover:border-white/60 hover:text-white"
                >
                    hello@umkmkita.id
                </a>
            </div>
        </section>
    );
}
