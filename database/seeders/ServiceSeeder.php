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
                'price' => 1500000,
                'images' => [
                    'services/ecommerce/nike.webp',
                    'services/ecommerce/tokopedia.webp',
                    'services/ecommerce/indachi.webp',
                    'services/ecommerce/scarlett.webp',
                    'services/ecommerce/hakon.webp',
                ],
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
                'price' => 750000,
                'images' => [
                    'services/company-profile/glass.webp',
                    'services/company-profile/lumbung.webp',
                    'services/company-profile/paragon.webp',
                    'services/company-profile/tesla.webp',
                    'services/company-profile/spacex.webp',
                ],
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
                'price' => 500000,
                'images' => [
                    'services/landing-page/linear.webp',
                    'services/landing-page/masterclass.webp',
                    'services/landing-page/notion.webp',
                    'services/landing-page/shopify.webp',
                    'services/landing-page/stripe.webp',
                ],
            ],
            [
                'icon' => Icon::USERS->value,
                'category' => Category::GOVERNMENT->value,
                'title' => 'Sistem Informasi Desa/Lembaga & Layanan Publik',
                'description' => 'Sistem portal web resmi untuk transparansi anggaran publik, pelayanan administrasi surat online, informasi pariwisata daerah, serta berita kegiatan kemasyarakatan.',
                'benefits' => [
                    'Pengajuan Surat Online Warga',
                    'Transparansi Dana & APBDes',
                    'Direktori Warga & UMKM Lokal',
                    'Sistem Berita & Pengumuman',
                    'Keamanan Berlapis (SSL)',
                ],
                'price' => 3000000,
                'images' => [
                    'services/e-goverment/banyuwangi.webp',
                    'services/e-goverment/desa-digital.webp',
                    'services/e-goverment/jabar.webp',
                    'services/e-goverment/jakarta.webp',
                    'services/e-goverment/yogya.webp',
                ],
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
                'price' => 2500000,
                'images' => [
                    'services/e-education/buildwithangga.webp',
                    'services/e-education/domestika.webp',
                    'services/e-education/kajabi.webp',
                    'services/e-education/skillshare.webp',
                    'services/e-education/skillacademy.webp',
                ],
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
                'price' => 2000000,
                'images' => [
                    'services/smart-pos/aropi.webp',
                    'services/smart-pos/fresha.webp',
                    'services/smart-pos/moka.webp',
                    'services/smart-pos/watch-party.webp',
                    'services/smart-pos/wevin.webp',
                ],
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
