<?php

namespace Database\Seeders;

use App\Enums\Icon;
use App\Models\Advantage;
use Illuminate\Database\Seeder;

class AdvantageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $reasons = [
            [
                'icon' => Icon::PALETTE->value,
                'title' => 'Desain Custom, Bukan Template',
                'description' => 'Setiap pixel dirancang khusus sesuai identitas brand bisnis Anda. Bukan WordPress theme yang pasaran.',
                'is_published' => true,
            ],
            [
                'icon' => Icon::BOT->value,
                'title' => 'AI & Otomasi Terintegrasi',
                'description' => 'Chatbot WhatsApp, auto-reply, dan analitik cerdas bekerja 24/7 untuk bisnis Anda.',
                'is_published' => true,
            ],
            [
                'icon' => Icon::HEADSET->value,
                'title' => 'Support Tanpa Batas Waktu',
                'description' => 'Tim dedicated siap membantu kapan saja. Bukan hanya saat build, tapi sepanjang perjalanan digital Anda.',
                'is_published' => true,
            ],
            [
                'icon' => Icon::ROCKET->value,
                'title' => 'Tech Stack Modern & Scalable',
                'description' => 'Dibangun dengan Laravel 13, React, dan infrastruktur cloud — siap handle ribuan pengunjung.',
                'is_published' => true,
            ],
        ];

        foreach ($reasons as $reason) {
            Advantage::create($reason);
        }
    }
}
