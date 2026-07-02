<?php

namespace Database\Seeders;

use App\Models\Promo;
use Illuminate\Database\Seeder;

class PromoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $promos = [
            [
                'title' => 'Promo Paket Launching Usaha',
                'badge' => 'Diskon 20%',
                'code' => 'UMKMLAUNCH20',
                'description' => 'Spesial buat Anda yang baru memulai usaha. Dapatkan potongan harga 20% untuk paket pembuatan website Standard Biz + Free Desain Logo sederhana.',
                'expired_at' => '2026-06-30',
            ],
            [
                'title' => 'Bundling WhatsApp Bot & POS',
                'badge' => 'Hemat Rp 500K',
                'code' => 'BUNDLESUPER',
                'description' => 'Optimalkan sistem kasir dan chat otomatis secara bersamaan. Hubungkan sistem inventory website dengan notifikasi WhatsApp realtime.',
                'expired_at' => '2026-07-15',
            ],
            [
                'title' => 'Promo Cash Back Pelunasan Di Awal',
                'badge' => 'Cashback 10%',
                'code' => 'LUNASCASH',
                'description' => 'Lakukan pelunasan penuh di awal proyek (tanpa sistem DP) dan dapatkan cashback langsung 10% dari total nilai proyek.',
                'expired_at' => '2099-12-31',
            ],
        ];

        foreach ($promos as $promo) {
            Promo::create($promo);
        }
    }
}
