<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use App\Models\Price;
use App\Models\Service;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatBotController extends Controller
{
    public function chat(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:1000',
            'history' => 'array',
        ]);

        $apiKey = config('services.groq.key');

        if (! $apiKey) {
            return response()->json(['reply' => 'Sistem AI sedang tidak tersedia (API Key belum di-setting).'], 503);
        }

        $services = Service::query()->get()->map(fn ($s) => "- {$s->title}: {$s->description} ({$s->price})")->join("\n");
        $prices = Price::query()->get()->map(fn ($p) => "- Paket {$p->title} ({$p->price}): {$p->description}")->join("\n");
        $faqs = Faq::query()->where('is_published', true)->get()->map(fn ($f) => "Q: {$f->question}\nA: {$f->answer}")->join("\n\n");

        $systemPrompt = "Kamu adalah asisten pintar untuk platform UMKMKITA. Gunakan bahasa Indonesia yang santai, ramah, dan profesional. Jawab pertanyaan pengguna secara singkat dan padat (maksimal 2 paragraf). Jangan berikan format markdown yang rumit.

Berikut adalah informasi resmi perusahaan UMKMKITA:

LAYANAN KAMI:
{$services}

DAFTAR HARGA:
{$prices}

FAQ (Tanya Jawab Umum):
{$faqs}

Gunakan informasi di atas untuk menjawab pertanyaan pengguna. Jika pengguna bertanya sesuatu di luar konteks UMKMKITA atau di luar layanan pembuatan website UMKM, arahkan kembali ke topik UMKMKITA dengan sopan.";

        $messages = [
            ['role' => 'system', 'content' => $systemPrompt],
        ];

        if ($request->has('history')) {
            foreach ($request->input('history') as $chat) {
                if (in_array($chat['role'], ['user', 'assistant'])) {
                    $messages[] = [
                        'role' => $chat['role'],
                        'content' => $chat['content'],
                    ];
                }
            }
        }

        $messages[] = ['role' => 'user', 'content' => $request->input('message')];

        try {
            $response = Http::withToken($apiKey)
                ->timeout(30)
                ->post('https://api.groq.com/openai/v1/chat/completions', [
                    'model' => 'llama-3.3-70b-versatile',
                    'messages' => $messages,
                    'temperature' => 0.7,
                    'max_tokens' => 500,
                ]);

            if ($response->successful()) {
                $reply = $response->json('choices.0.message.content');

                return response()->json(['reply' => $reply]);
            }

            Log::error('Groq API Error', ['response' => $response->body()]);

            return response()->json(['reply' => 'Maaf, aku sedang tidak bisa memproses pertanyaanmu saat ini.'], 500);

        } catch (Exception $e) {
            Log::error('ChatBot Exception', ['error' => $e->getMessage()]);

            return response()->json(['reply' => 'Waduh, terjadi gangguan koneksi ke AI.'], 500);
        }
    }
}
