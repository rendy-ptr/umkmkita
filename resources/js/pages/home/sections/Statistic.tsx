import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/marketing/SectionEyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const chartData = [
    { month: 'Bulan 1', omset: 20, traffic: 35, penjualan: 15 },
    { month: 'Bulan 2', omset: 40, traffic: 50, penjualan: 35 },
    { month: 'Bulan 3', omset: 55, traffic: 70, penjualan: 50 },
    { month: 'Bulan 4', omset: 75, traffic: 85, penjualan: 70 },
    { month: 'Bulan 5', omset: 90, traffic: 105, penjualan: 85 },
    { month: 'Bulan 6', omset: 120, traffic: 130, penjualan: 110 },
];

const metrics = [
    {
        key: 'omset',
        label: 'Statistik Omset',
        color: 'bg-yellow-400',
        unit: 'Total Pendapatan',
        suffix: 'Juta',
    },
    {
        key: 'traffic',
        label: 'Statistik Traffic',
        color: 'bg-brand-accent',
        unit: 'Kunjungan',
        suffix: 'Ribu',
    },
    {
        key: 'penjualan',
        label: 'Statistik Penjualan',
        color: 'bg-green-400',
        unit: 'Total Penjualan',
        suffix: 'Unit',
    },
];

export default function Statistic() {
    const ref = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            className="scroll-reveal bg-brand-white px-6 py-24 lg:px-10 lg:py-32"
        >
            <div className="section-container">
                <div className="mb-14 flex flex-wrap items-end justify-between gap-10">
                    <div>
                        <SectionEyebrow label="Bukti Nyata" />
                        <h2
                            className="font-display leading-[1.05] font-bold tracking-tight text-brand-black"
                            style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
                        >
                            Pertumbuhan Bisnis{' '}
                            <em className="text-brand-accent italic">
                                Terukur.
                            </em>
                        </h2>
                    </div>
                    <p className="max-w-xl text-brand-gray-5">
                        Berikut adalah bukti nyata bagaimana website yang kami
                        bangun telah membantu UMKM di seluruh Indonesia mencapai
                        pertumbuhan yang signifikan. Bukan sekadar janji, ini
                        adalah kisah sukses yang terukur.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
                    {metrics.map((metric, mIndex) => (
                        <div
                            key={metric.key}
                            className="flex flex-col rounded-2xl border-4 border-brand-black bg-white p-5 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none md:p-6"
                        >
                            <div className="mb-8 border-b-2 border-brand-black/10 pb-4">
                                <h3 className="font-display text-lg font-bold text-brand-black md:text-xl">
                                    {metric.label}
                                </h3>
                                <p className="mt-1 font-display text-xs font-bold text-brand-black/50">
                                    {metric.label.split(' ')[1]} 6 Bulan
                                    Terakhir
                                </p>
                            </div>

                            {/* Chart Dashboard Panel */}
                            <div className="relative mt-2 flex h-[280px] w-full flex-col pb-8 pl-8 md:pl-10">
                                {/* Legend */}
                                <div className="absolute -top-10 right-0 z-30 flex items-center gap-1.5 rounded-md border-2 border-brand-black bg-white px-2 py-1 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                    <div
                                        className={`h-2.5 w-2.5 border-2 border-brand-black ${metric.color}`}
                                    />
                                    <span className="font-display text-[9px] font-bold text-brand-black">
                                        {metric.unit}
                                    </span>
                                </div>

                                {/* Chart Area Wrapper */}
                                <div className="relative h-full w-full">
                                    {/* Y-Axis Line */}
                                    <div className="absolute top-0 bottom-0 left-0 z-10 w-[2px] bg-brand-black" />

                                    {/* Arrowheads */}
                                    <div className="absolute -top-3 -left-[5px] z-20 h-0 w-0 border-r-[6px] border-b-[8px] border-l-[6px] border-r-transparent border-b-brand-black border-l-transparent" />
                                    <div className="absolute -right-3 -bottom-[5px] z-20 h-0 w-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-brand-black" />

                                    {/* Grid Lines & Labels */}
                                    {[150, 100, 50, 0].map((val) => {
                                        const top = 100 - (val / 150) * 100;

                                        return (
                                            <div
                                                key={val}
                                                className="absolute right-0 left-0 z-0"
                                                style={{ top: `${top}%` }}
                                            >
                                                {/* Y Label */}
                                                <span className="absolute top-1/2 right-[calc(100%+8px)] -translate-y-1/2 font-display text-[10px] font-bold text-brand-black md:text-xs">
                                                    {val}
                                                </span>
                                                {/* Y Tick */}
                                                <div className="absolute top-1/2 right-full h-[2px] w-2 -translate-y-1/2 bg-brand-black" />
                                                {/* Grid Line */}
                                                <div
                                                    className={`absolute top-1/2 right-0 left-0 h-[2px] w-full -translate-y-1/2 ${
                                                        val === 0
                                                            ? 'z-20 bg-brand-black'
                                                            : 'bg-brand-black/5'
                                                    }`}
                                                />
                                            </div>
                                        );
                                    })}

                                    {/* Bars and X Labels */}
                                    <div className="absolute inset-0 z-10 flex items-end justify-around px-2">
                                        {chartData.map((data, index) => {
                                            const maxValue = 150;
                                            const value = data[
                                                metric.key as keyof typeof data
                                            ] as number;
                                            const heightPercentage =
                                                (value / maxValue) * 100;

                                            return (
                                                <div
                                                    key={index}
                                                    className="relative flex h-full flex-1 flex-col items-center justify-end"
                                                >
                                                    {/* Bar Container */}
                                                    <div className="flex h-full w-full items-end justify-center">
                                                        <motion.div
                                                            initial={{
                                                                height: 0,
                                                            }}
                                                            whileInView={{
                                                                height: `${heightPercentage}%`,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                                margin: '-50px',
                                                            }}
                                                            transition={{
                                                                duration: 0.8,
                                                                delay:
                                                                    index *
                                                                        0.1 +
                                                                    mIndex *
                                                                        0.2,
                                                                ease: [
                                                                    0.22, 1,
                                                                    0.36, 1,
                                                                ],
                                                            }}
                                                            className={`group relative w-full max-w-[28px] rounded-t-sm border-2 border-b-0 border-brand-black ${metric.color} md:max-w-[36px]`}
                                                        >
                                                            {/* Tooltip on hover */}
                                                            <div className="absolute -top-12 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center opacity-0 transition-opacity group-hover:opacity-100 md:flex">
                                                                <div className="rounded-lg border-2 border-brand-black bg-white px-2 py-1 font-display text-sm font-bold whitespace-nowrap text-brand-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                                                    {value}{' '}
                                                                    {
                                                                        metric.suffix
                                                                    }
                                                                </div>
                                                                {/* Tooltip Caret */}
                                                                <div className="h-0 w-0 border-t-[6px] border-r-[6px] border-l-[6px] border-t-brand-black border-r-transparent border-l-transparent" />
                                                            </div>
                                                        </motion.div>
                                                    </div>

                                                    {/* X-axis Tick */}
                                                    <div className="absolute top-full left-1/2 h-2 w-[2px] -translate-x-1/2 bg-brand-black" />

                                                    {/* X Label */}
                                                    <div className="absolute top-full mt-3 text-center font-display text-[10px] font-bold whitespace-nowrap text-brand-black">
                                                        {data.month}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
