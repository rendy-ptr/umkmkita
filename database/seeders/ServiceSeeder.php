<?php

namespace Database\Seeders;

use App\Enums\Category;
use App\Enums\Icon;
use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'icon' => Icon::SHOPPING_CART->value,
                'category' => Category::ECOMMERCE->value,
                'title' => 'Toko Online / Web E-Commerce',
                'description' => 'Solusi lengkap penjualan produk fisik maupun digital secara online. Dilengkapi katalog produk, keranjang belanja, kalkulator ongkir otomatis, dan integrasi QRIS/Virtual Account.',
                'benefits' => [
                    'Payment Gateway (QRIS, VA, E-Wallet)',
                    'Kalkulator Ongkir Otomatis (RajaOngkir)',
                    'Manajemen Stok & Inventori',
                    'Integrasi WhatsApp Order',
                    'Dashboard Laporan Penjualan',
                ],
                'price' => 'Mulai Rp 1.500.000',
            ],
            [
                'icon' => Icon::GLOBE->value,
                'category' => Category::BRANDING->value,
                'title' => 'Company Profile / Web Instansi',
                'description' => 'Meningkatkan kredibilitas bisnis Anda di mata klien dan investor. Tampilkan sejarah, visi misi, layanan, galeri foto, dan kontak resmi dengan desain premium berkarakter.',
                'benefits' => [
                    'Desain Profesional & Modern',
                    'Halaman Galeri & Kontak Interaktif',
                    'Integrasi Google Maps & WhatsApp',
                    'Formulir Hubungi Kami',
                    'SEO Setup Dasar',
                ],
                'price' => 'Mulai Rp 750.000',
            ],
            [
                'icon' => Icon::ROCKET->value,
                'category' => Category::MARKETING->value,
                'title' => 'High-Converting Landing Page',
                'description' => 'Halaman penawaran produk tunggal yang didesain khusus untuk mengkonversi pengunjung iklan menjadi pembeli. Sangat cocok untuk Facebook/TikTok Ads.',
                'benefits' => [
                    'Satu Halaman Fokus Konversi',
                    'Copywriting Menjual & Persuasif',
                    'Integrasi Pixel & Tik Tok Tag',
                    'Form Order Langsung WhatsApp',
                    'Loading Speed Super Cepat',
                ],
                'price' => 'Mulai Rp 500.000',
            ],
            [
                'icon' => Icon::USERS->value,
                'category' => Category::GOVERNMENT->value,
                'title' => 'Sistem Informasi Desa & Publik',
                'description' => 'Sistem portal web resmi untuk transparansi anggaran publik, pelayanan administrasi surat online, informasi pariwisata daerah, serta berita kegiatan kemasyarakatan.',
                'benefits' => [
                    'Pengajuan Surat Online Warga',
                    'Transparansi Dana & APBDes',
                    'Direktori Warga & UMKM Lokal',
                    'Sistem Berita & Pengumuman',
                    'Keamanan Berlapis (SSL)',
                ],
                'price' => 'Mulai Rp 3.000.000',
            ],
            [
                'icon' => Icon::LAPTOP->value,
                'category' => Category::EDUCATION->value,
                'title' => 'LMS / Platform Kursus Online',
                'description' => 'Unggah materi video, buat kuis, berikan sertifikat, dan kelola pendaftaran siswa berbayar dalam satu platform yang Anda miliki sepenuhnya.',
                'benefits' => [
                    'Manajemen Kelas & Kurikulum',
                    'Kuis & Ujian Interaktif',
                    'Generate Sertifikat Otomatis',
                    'Sistem Afiliasi & Komisi',
                    'Integrasi Video Aman (Vimeo/S3)',
                ],
                'price' => 'Mulai Rp 2.500.000',
            ],
            [
                'icon' => Icon::CALENDAR->value,
                'category' => Category::BOOKING->value,
                'title' => 'Booking & Smart POS System',
                'description' => 'Sistem reservasi online untuk salon, klinik, hotel, atau jasa profesional lainnya yang digabungkan dengan Point of Sale pencatatan transaksi harian.',
                'benefits' => [
                    'Kalender Reservasi Realtime',
                    'Manajemen Jadwal Staff',
                    'Pencatatan Penjualan Harian',
                    'Notifikasi WhatsApp Reminder',
                    'Kupon Diskon & Membership',
                ],
                'price' => 'Mulai Rp 2.000.000',
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
