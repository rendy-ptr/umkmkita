<?php

namespace Database\Seeders;

use App\Models\Price;
use Illuminate\Database\Seeder;

class PriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $prices = [
            [
                'title' => 'Lite Page',
                'price' => 750000,
                'description' => 'Sangat cocok untuk pemula, UKM mikro, landing page promo produk tunggal, atau kartu nama digital.',
                'benefits' => [
                    '1 Halaman Landing Page',
                    'Domain .com/.id (1 Tahun)',
                    'Hosting Premium (1 Tahun)',
                    'Free Sertifikat SSL Keamanan',
                    'Integrasi WhatsApp Chat',
                    '2 Kali Revisi Desain',
                ],
                'badge' => 'Termurah',
            ],
            [
                'title' => 'Standard Biz',
                'price' => 1500000,
                'description' => 'Ideal untuk profil perusahaan, UMKM berkembang, sekolah, yayasan, atau institusi yang ingin profil lengkap.',
                'benefits' => [
                    'Hingga 5 Halaman Utama',
                    'Domain .com/.id (1 Tahun)',
                    'Hosting Premium (1 Tahun)',
                    'Free Sertifikat SSL Keamanan',
                    'Integrasi WhatsApp Chat & Form',
                    'SEO Setup & Google Search Console',
                    'Desain Custom Neubrutalism',
                    'Panduan Video Pengelolaan',
                    '3 Kali Revisi Desain',
                ],
                'badge' => 'Terpopuler',
            ],
            [
                'title' => 'Custom Project',
                'price' => 2999000,
                'description' => 'Untuk toko online profesional dengan sistem payment gateway otomatis, integrasi ongkir, atau sistem web kustom.',
                'benefits' => [
                    'Halaman Unlimited',
                    'Keranjang Belanja & Katalog',
                    'Integrasi RajaOngkir (Kirim Paket)',
                    'Payment Gateway (QRIS, VA, Gopay)',
                    'SSL Premium & Keamanan Ekstra',
                    'Sistem Laporan Penjualan',
                    'SEO Optimasi Premium',
                    'Free Maintenance (3 Bulan)',
                    'Revisi Sepuasnya (Selama Masa Build)',
                ],
                'badge' => 'Terlengkap',
            ],
        ];

        foreach ($prices as $price) {
            Price::create($price);
        }
    }
}
