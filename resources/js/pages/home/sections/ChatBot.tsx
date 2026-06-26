'use client';

import { Bot, MessageCircleMore, Send, User, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ChatMessage {
    id: string;
    role: 'user' | 'bot';
    text: string;
    time: string;
}

interface ChatbotWidgetProps {
    botName?: string;
    botStatus?: string;
    greeting?: string;
    onSendMessage?: (message: string) => Promise<string>;
}

const nowTime = () =>
    new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
    });
const uid = () => Math.random().toString(36).slice(2, 10);

const QUICK_REPLIES = [
    'Berapa harga jasanya?',
    'Layanan apa saja yang ada?',
    'Bagaimana cara daftarnya?',
];

async function dummyReply(userText: string): Promise<string> {
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 600));
    const lower = userText.toLowerCase();

    if (lower.includes('harga') || lower.includes('biaya')) {
        return 'Untuk info harga paket, tim kami akan bantu kirimkan penawaran sesuai kebutuhan tokomu. Boleh ceritakan dulu jenis usahanya apa?';
    }

    if (lower.includes('halo') || lower.includes('hai')) {
        return 'Halo juga! Senang bisa bantu. Lagi cari solusi apa nih untuk bisnismu?';
    }

    return 'Catat ya — aku terusin ke tim untuk dibantu lebih lanjut. Ada hal lain yang mau ditanyakan?';
}

export default function ChatBot({
    botName = 'UMKMKITA Assistant',
    botStatus = 'Online',
    greeting = 'Halo! 👋 Aku asisten AI UMKMKITA. Ada yang bisa aku bantu soal toko atau bisnismu hari ini?',
    onSendMessage,
}: ChatbotWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: uid(), role: 'bot', text: greeting, time: nowTime() },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickMenu, setShowQuickMenu] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen) {
            const t = setTimeout(() => inputRef.current?.focus(), 300);

            return () => clearTimeout(t);
        }
    }, [isOpen]);

    async function handleSend(overrideText?: string) {
        const textToSend =
            typeof overrideText === 'string' ? overrideText : input;
        const trimmed = textToSend.trim();

        if (!trimmed || isTyping) {
            return;
        }

        setMessages((prev) => [
            ...prev,
            { id: uid(), role: 'user', text: trimmed, time: nowTime() },
        ]);
        setInput('');
        setIsTyping(true);

        try {
            const replyText = onSendMessage
                ? await onSendMessage(trimmed)
                : await dummyReply(trimmed);
            setMessages((prev) => [
                ...prev,
                { id: uid(), role: 'bot', text: replyText, time: nowTime() },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    id: uid(),
                    role: 'bot',
                    text: 'Maaf, ada gangguan koneksi. Coba kirim pesanmu lagi ya.',
                    time: nowTime(),
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    }

    return (
        <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4 font-sans">
            <div
                className={`nb-shadow-lg w-[92vw] max-w-[380px] origin-bottom-right overflow-hidden rounded-2xl border-2 border-brand-black bg-brand-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-95 opacity-0'}`}
                style={{ height: isOpen ? 'min(600px, 70vh)' : 0 }}
                role="dialog"
                aria-label="Jendela obrolan asisten AI"
                aria-hidden={!isOpen}
            >
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3 border-b-2 border-brand-black bg-brand-accent px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-black bg-brand-white text-brand-black">
                                <Bot size={22} />
                                <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-black bg-green-500" />
                            </div>
                            <div className="leading-tight">
                                <p className="font-display text-base font-semibold text-brand-black">
                                    {botName}
                                </p>
                                <p className="font-mono text-[11px] text-brand-black/70">
                                    {botStatus}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Tutup obrolan"
                            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-brand-black bg-brand-white text-brand-black transition-transform duration-200 hover:bg-brand-black hover:text-brand-white active:translate-y-0"
                        >
                            <X size={18} strokeWidth={2.5} />
                        </button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
                        style={{ backgroundColor: 'var(--color-brand-gray-1)' }}
                    >
                        {messages.map((m) => {
                            const isBot = m.role === 'bot';

                            return (
                                <div
                                    key={m.id}
                                    className={`flex w-full gap-2 ${isBot ? 'flex-row items-end' : 'flex-row-reverse items-end'}`}
                                    style={{
                                        animation:
                                            'fadeUp 0.35s cubic-bezier(0.16,1,0.3,1) both',
                                    }}
                                >
                                    <div
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-black ${isBot ? 'bg-brand-accent text-brand-white' : 'bg-brand-white text-brand-black'}`}
                                    >
                                        {isBot ? (
                                            <Bot size={16} />
                                        ) : (
                                            <User size={16} />
                                        )}
                                    </div>
                                    <div
                                        className={`max-w-[70%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${isBot ? 'nb-shadow-sm rounded-bl-sm border-2 border-brand-black bg-brand-white text-brand-black' : 'nb-shadow-accent-sm rounded-br-sm border-2 border-brand-accent bg-brand-black text-brand-white'}`}
                                    >
                                        <p>{m.text}</p>
                                        <span
                                            className={`mt-1 block font-mono text-[10px] ${isBot ? 'text-brand-gray-4' : 'text-brand-gray-2'}`}
                                        >
                                            {m.time}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}

                        {isTyping && (
                            <div
                                className="flex w-full flex-row items-end gap-2"
                                style={{
                                    animation:
                                        'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both',
                                }}
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-black bg-brand-accent text-brand-white">
                                    <Bot size={16} />
                                </div>
                                <div className="nb-shadow-sm flex items-center gap-1.5 rounded-2xl rounded-bl-sm border-2 border-brand-black bg-brand-white px-4 py-3">
                                    {[0, 1, 2].map((i) => (
                                        <span
                                            key={i}
                                            className="h-2 w-2 rounded-full bg-brand-accent"
                                            style={{
                                                animation:
                                                    'pulse-dot 1s ease-in-out infinite',
                                                animationDelay: `${i * 0.15}s`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative flex items-center gap-2 border-t-2 border-brand-black bg-brand-white p-3">
                        {showQuickMenu && (
                            <div className="absolute bottom-full left-3 mb-2 flex w-56 animate-[fadeUp_0.2s_ease-out_both] flex-col gap-1 rounded-xl border-2 border-brand-black bg-brand-white p-2 shadow-[2px_2px_0_0_#1A1A1A]">
                                <div className="px-2 pb-1 text-[10px] font-bold tracking-wider text-brand-gray-4 uppercase">
                                    Saran Pertanyaan
                                </div>
                                {QUICK_REPLIES.map((reply) => (
                                    <button
                                        key={reply}
                                        onClick={() => {
                                            handleSend(reply);
                                            setShowQuickMenu(false);
                                        }}
                                        className="rounded-lg px-2 py-1.5 text-left text-xs font-semibold text-brand-black transition-colors hover:bg-brand-green-l"
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        )}

                        <button
                            onClick={() => setShowQuickMenu(!showQuickMenu)}
                            aria-label="Saran pertanyaan"
                            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-brand-black bg-brand-white text-brand-black transition-colors"
                        >
                            <span className="text-xl font-black">?</span>
                        </button>

                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Tulis pesanmu di sini..."
                            className="flex-1 rounded-xl border-2 border-brand-black bg-brand-white px-4 py-2 font-sans text-sm text-brand-black outline-none placeholder:text-brand-gray-4"
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={!input.trim() || isTyping}
                            aria-label="Kirim pesan"
                            className="hover:nb-shadow-sm flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-black bg-brand-accent text-brand-white transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                        >
                            <Send size={18} className="-ml-0.5" />
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? 'Tutup chatbot' : 'Buka chatbot'}
                aria-expanded={isOpen}
                className={`group relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-brand-black bg-brand-accent text-brand-white shadow-[4px_4px_0_0_#1A1A1A] transition-all duration-250 ease-[cubic-bezier(0.33,1,0.68,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:scale-95 ${
                    !isOpen ? 'animate-bounce' : ''
                }`}
            >
                {isOpen ? (
                    <X size={26} strokeWidth={2.5} />
                ) : (
                    <MessageCircleMore size={28} strokeWidth={2.5} />
                )}
            </button>
        </div>
    );
}
