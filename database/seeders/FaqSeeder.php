<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $faqs = [
            [
                'question' => 'Apakah harga sudah termasuk domain dan hosting?',
                'answer' => 'Ya, semua paket layanan kami sudah termasuk sewa domain (.com / .id) dan hosting premium selama 1 tahun pertama. Untuk perpanjangan tahun berikutnya sangat terjangkau.',
                'is_published' => true,
            ],
            [
                'question' => 'Bagaimana sistem pembayaran proyek?',
                'answer' => 'Sistem pembayaran menggunakan DP 50% di awal sebelum pengerjaan dimulai, dan pelunasan 50% sisanya setelah proyek selesai direview dan siap online (live).',
                'is_published' => true,
            ],
            [
                'question' => 'Berapa lama waktu proses pengerjaan?',
                'answer' => 'Landing page selesai dalam 3-5 hari. Company profile 7-10 hari. Toko online dan sistem informasi kustom memerlukan waktu 14-30 hari kerja tergantung tingkat kerumitan fitur.',
                'is_published' => true,
            ],
            [
                'question' => 'Berapa biaya perpanjangan tahun berikutnya?',
                'answer' => 'Perpanjangan tahun berikutnya mencakup biaya domain, hosting, dan maintenance SSL. Untuk paket Lite Rp 350.000/tahun, Standard Rp 500.000/tahun, dan E-Commerce Rp 850.000/tahun.',
                'is_published' => true,
            ],
            [
                'question' => 'Apakah bisa melakukan upgrade paket di kemudian hari?',
                'answer' => 'Sangat bisa. Anda bisa melakukan upgrade dari paket Lite ke Standard atau ke E-Commerce kapan saja hanya dengan membayar selisih harga paket saja.',
                'is_published' => true,
            ],
            [
                'question' => 'Apakah saya bisa edit konten website sendiri setelah jadi?',
                'answer' => 'Tentu saja. Kami menggunakan CMS (Content Management System) yang sangat user-friendly. Kami juga memberikan panduan video gratis serta pelatihan singkat agar Anda bisa mengelola konten dengan mudah.',
                'is_published' => true,
            ],
            [
                'question' => 'Bagaimana dengan layanan setelah penjualan (after sales)?',
                'answer' => 'Kami memberikan gratis garansi perbaikan bug/error selama 1 tahun. Anda juga mendapatkan support konsultasi gratis melalui grup WhatsApp dedicated bersama tim developer kami.',
                'is_published' => true,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
