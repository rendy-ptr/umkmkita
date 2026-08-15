import { Head } from '@inertiajs/react';
import {
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import React, { useState } from 'react';
import { getIconComponent } from '@/components/IconRegistry';
import HeroGradient from '@/components/marketing/HeroGradient';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';
import { getImageUrl } from '@/lib/utils';

import type { ServiceData } from '@/types/service.type';

export default function Layanan({ services }: { services: ServiceData[] }) {
    const heroReveal = useScrollReveal<HTMLDivElement>();
    const listReveal = useScrollReveal<HTMLDivElement>();

    const [activePreviews, setActivePreviews] = useState<
        Record<number, boolean>
    >({});
    const [currentImages, setCurrentImages] = useState<Record<number, number>>(
        {},
    );

    const togglePreview = (id: number) => {
        setActivePreviews((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleNextImage = (id: number, length: number) => {
        setCurrentImages((prev) => ({
            ...prev,
            [id]: ((prev[id] || 0) + 1) % length,
        }));
    };

    const handlePrevImage = (id: number, length: number) => {
        setCurrentImages((prev) => ({
            ...prev,
            [id]: ((prev[id] || 0) - 1 + length) % length,
        }));
    };

    const handleSetImage = (id: number, index: number) => {
        setCurrentImages((prev) => ({ ...prev, [id]: index }));
    };

    return (
        <MarketingLayout>
            <Head title="Layanan Jasa Pembuatan Website UMKM — UMKMKITA" />

            <section
                ref={heroReveal}
                className="scroll-reveal animate-gradient-x relative overflow-hidden border-b-4 border-brand-black bg-gradient-to-r from-brand-yellow via-brand-green-l to-brand-yellow px-6 pt-32 pb-20 text-center lg:px-10 lg:pt-40 lg:pb-28"
            >
                <HeroGradient />

                <div className="section-container relative z-10 mx-auto max-w-[800px]">
                    <div className="nb-shadow-sm mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-green-l px-4 py-1 text-xs font-bold text-brand-black">
                        <span>Layanan Lengkap & Terpercaya</span>
                    </div>
                    <h1 className="mb-6 font-display text-4xl leading-[1.1] font-black tracking-tight text-brand-black sm:text-5xl lg:text-7xl">
                        Solusi Digital Terbaik untuk{' '}
                        <em className="text-brand-accent italic">
                            UMKM Indonesia
                        </em>
                        .
                    </h1>
                    <p className="mx-auto max-w-[560px] text-base leading-relaxed text-brand-gray-5 lg:text-lg">
                        Kami menyediakan berbagai jenis website dengan performa
                        tinggi, desain eksklusif, dan integrasi teknologi
                        termutakhir untuk membantu bisnis Anda bersaing di era
                        digital.
                    </p>
                </div>
            </section>

            {/* Services List Section */}
            <section
                ref={listReveal}
                className="scroll-reveal bg-brand-gray-1 px-6 py-20 lg:px-10 lg:py-28"
            >
                <div className="section-container">
                    <div className="space-y-12">
                        {services.map((svc) => {
                            const imagesList = Array.isArray(svc.images)
                                ? svc.images
                                : [];
                            const showPreview = activePreviews[svc.id] || false;
                            const currentImage = currentImages[svc.id] || 0;
                            const Icon = getIconComponent(svc.icon);

                            return (
                                <div
                                    key={svc.id}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border-3 border-brand-black bg-brand-white p-6 shadow-[4px_4px_0_0_#1A1A1A] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none sm:p-8 lg:p-12"
                                >
                                    <div className="flex flex-col lg:flex-row lg:gap-12">
                                        {/* Left Side: Details */}
                                        <div className="flex-1">
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-brand-black bg-brand-black text-white transition-all group-hover:bg-brand-accent">
                                                <Icon size={24} />
                                            </div>
                                            <div className="mb-1 font-mono text-[11px] font-bold tracking-widest text-brand-accent uppercase">
                                                {svc.category.replace(
                                                    /-/g,
                                                    ' ',
                                                )}
                                            </div>
                                            <h3 className="mb-4 font-display text-xl font-bold text-brand-black lg:text-2xl">
                                                {svc.title}
                                            </h3>
                                            <p className="mb-6 text-sm leading-relaxed text-brand-gray-5 lg:text-base">
                                                {svc.description}
                                            </p>
                                            <div className="mb-6 flex flex-wrap items-center gap-3">
                                                <span className="font-mono text-xs font-bold text-brand-gray-4">
                                                    HARGA:
                                                </span>
                                                <span className="rounded-lg border-2 border-brand-black bg-brand-green-l px-3 py-1 font-mono text-sm font-black text-brand-black">
                                                    Mulai{' '}
                                                    {new Intl.NumberFormat('id-ID', {
                                                        style: 'currency',
                                                        currency: 'IDR',
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0,
                                                    }).format(Number(svc.price))}
                                                </span>
                                            </div>
                                            <a
                                                href={`https://wa.me/6282329137621?text=Halo%20UMKMKITA,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(svc.title)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-black bg-brand-black px-6 py-3 text-xs font-bold text-white shadow-[4px_4px_0_0_#00a36c] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                                            >
                                                Pesan Layanan Ini →
                                            </a>
                                        </div>

                                        <div className="mt-8 rounded-xl border-2 border-brand-black bg-brand-white p-6 lg:mt-0 lg:w-[380px] lg:shrink-0">
                                            <div className="mb-4 font-mono text-[11px] font-black tracking-wider text-brand-black uppercase">
                                                Apa Yang Anda Dapatkan:
                                            </div>
                                            <ul className="space-y-3">
                                                {svc.benefits?.map(
                                                    (feat, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2.5 text-xs text-brand-gray-5"
                                                        >
                                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-accent/10 font-bold text-brand-accent">
                                                                ✓
                                                            </span>
                                                            <span className="leading-tight">
                                                                {feat}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    {imagesList.length > 0 && (
                                        <div className="mt-8 border-t-2 border-dashed border-brand-gray-2 pt-6 lg:mt-10 lg:pt-8">
                                            <div className="flex justify-center">
                                                <button
                                                    onClick={() =>
                                                        togglePreview(svc.id)
                                                    }
                                                    className="flex items-center gap-2 font-mono text-[11px] font-black tracking-wider text-brand-gray-5 uppercase transition-colors hover:text-brand-accent"
                                                >
                                                    <span>
                                                        Preview Tampilan
                                                    </span>
                                                    {showPreview ? (
                                                        <ChevronUp size={16} />
                                                    ) : (
                                                        <ChevronDown
                                                            size={16}
                                                        />
                                                    )}
                                                </button>
                                            </div>

                                            {showPreview && (
                                                <div className="relative mx-auto mt-8 max-w-6xl animate-in pb-4 duration-500 fade-in slide-in-from-top-4">
                                                    <div className="relative flex w-full items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                                                        {imagesList.length >=
                                                            2 && (
                                                            <div
                                                                className="hidden aspect-video w-1/4 cursor-pointer overflow-hidden rounded-2xl bg-white opacity-40 shadow-md grayscale transition-all duration-500 hover:opacity-100 hover:shadow-lg hover:grayscale-0 sm:block"
                                                                onClick={() =>
                                                                    handlePrevImage(
                                                                        svc.id,
                                                                        imagesList.length,
                                                                    )
                                                                }
                                                            >
                                                                <img
                                                                    key={`prev-${currentImage}`}
                                                                    src={getImageUrl(
                                                                        imagesList[
                                                                            (currentImage -
                                                                                1 +
                                                                                imagesList.length) %
                                                                                imagesList.length
                                                                        ],
                                                                    )}
                                                                    alt="Previous preview"
                                                                    className="h-full w-full animate-in object-cover object-top duration-500 fade-in"
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                        )}

                                                        <div className="z-10 aspect-video w-full shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgb(0,0,0,0.15)] ring-1 ring-black/5 transition-all duration-500 sm:w-1/2">
                                                            <img
                                                                key={`curr-${currentImage}`}
                                                                src={getImageUrl(
                                                                    imagesList[
                                                                        currentImage
                                                                    ],
                                                                )}
                                                                alt={`${svc.title} preview highlighted`}
                                                                className="h-full w-full animate-in object-cover object-top duration-500 fade-in zoom-in-[0.98]"
                                                                loading="lazy"
                                                            />
                                                        </div>

                                                        {imagesList.length >=
                                                            2 && (
                                                            <div
                                                                className="hidden aspect-video w-1/4 cursor-pointer overflow-hidden rounded-2xl bg-white opacity-40 shadow-md grayscale transition-all duration-500 hover:opacity-100 hover:shadow-lg hover:grayscale-0 sm:block"
                                                                onClick={() =>
                                                                    handleNextImage(
                                                                        svc.id,
                                                                        imagesList.length,
                                                                    )
                                                                }
                                                            >
                                                                <img
                                                                    key={`next-${currentImage}`}
                                                                    src={getImageUrl(
                                                                        imagesList[
                                                                            (currentImage +
                                                                                1) %
                                                                                imagesList.length
                                                                        ],
                                                                    )}
                                                                    alt="Next preview"
                                                                    className="h-full w-full animate-in object-cover duration-500 fade-in"
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {imagesList.length > 1 && (
                                                        <div className="mt-8 flex items-center justify-center gap-6">
                                                            <button
                                                                onClick={() =>
                                                                    handlePrevImage(
                                                                        svc.id,
                                                                        imagesList.length,
                                                                    )
                                                                }
                                                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-gray-5 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:text-brand-accent hover:shadow-lg"
                                                                aria-label="Previous image"
                                                            >
                                                                <ChevronLeft
                                                                    size={24}
                                                                />
                                                            </button>

                                                            <div className="flex items-center gap-2.5">
                                                                {imagesList.map(
                                                                    (
                                                                        _,
                                                                        idx,
                                                                    ) => (
                                                                        <button
                                                                            key={
                                                                                idx
                                                                            }
                                                                            onClick={() =>
                                                                                handleSetImage(
                                                                                    svc.id,
                                                                                    idx,
                                                                                )
                                                                            }
                                                                            aria-label={`Go to image ${idx + 1}`}
                                                                            className={`h-2.5 rounded-full transition-all duration-500 ${idx === currentImage ? 'w-8 bg-brand-accent' : 'w-2.5 bg-brand-gray-3 hover:bg-brand-gray-4'}`}
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>

                                                            <button
                                                                onClick={() =>
                                                                    handleNextImage(
                                                                        svc.id,
                                                                        imagesList.length,
                                                                    )
                                                                }
                                                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-gray-5 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:text-brand-accent hover:shadow-lg"
                                                                aria-label="Next image"
                                                            >
                                                                <ChevronRight
                                                                    size={24}
                                                                />
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
