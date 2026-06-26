<?php

namespace Database\Seeders;

use App\Enums\Category;
use App\Enums\Service;
use App\Models\Portfolio;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'title' => 'Resto Nusantara',
                'description' => 'Website restoran dengan sistem reservasi online.',
                'tagline' => 'Digitalizing Culinary Heritage.',
                'client' => 'Resto Nusantara Group',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2024',
                'hero_image' => 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
                'category' => [Category::COMPANY_PROFILE->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Pendekatan Desain',
                        'paragraph' => 'Untuk mencapai target audiens yang lebih muda, kami mengadopsi gaya Neo-Brutalism dengan warna yang berani, tipografi yang tegas, namun tetap mempertahankan elemen klasik Nusantara melalui penggunaan motif batik subtil di latar belakang.',
                    ],
                    [
                        'subheading' => 'Hasil Akhir',
                        'paragraph' => 'Dalam 3 bulan pertama setelah peluncuran, reservasi online melalui sistem otomatis WhatsApp meningkat hingga 150%, membuktikan bahwa audiens menyukai kemudahan dan estetika baru dari Resto Nusantara.',
                    ],
                ],
                'challenge' => 'Resto Nusantara adalah restoran keluarga dengan sejarah panjang namun belum memiliki eksistensi digital. Mereka membutuhkan platform yang tidak hanya menampilkan menu, tetapi juga menyampaikan suasana restoran yang hangat dan tradisional ke audiens yang lebih muda (Millennials & Gen Z).',
                'solution' => [
                    'text' => 'Kami merancang website dengan konsep "Visual-First". Menggunakan fotografi makanan resolusi tinggi yang dikombinasikan dengan layout Neo-Brutalism yang modern namun tetap terasa hangat. Kami juga mengintegrasikan sistem reservasi meja WhatsApp yang simpel agar operasional mereka tetap mudah dikelola.',
                    'items' => [
                        [
                            'icon' => 'UtensilsCrossed',
                            'title' => 'Digital Menu',
                            'desc' => 'Menu interaktif dengan kategori dan harga yang jelas serta navigasi cepat.',
                        ],
                        [
                            'icon' => 'Armchair',
                            'title' => 'Smart Booking',
                            'desc' => 'Integrasi WhatsApp yang memungkinkan reservasi meja secara real-time tanpa ribet.',
                        ],
                    ],
                ],
                'gallery' => [
                    '/images/mockups/resto_1.png',
                    '/images/mockups/resto_2.jpg',
                ],
            ],
            [
                'title' => 'Fashion Hub',
                'description' => 'Toko fashion online dengan QRIS payment.',
                'tagline' => 'Seamless Shopping Experience.',
                'client' => 'Fashion Hub Retail',
                'service' => Service::SHOPIFY_OR_CUSTOM_DEV->value,
                'year' => '2024',
                'hero_image' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
                'category' => [Category::ECOMMERCE->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Optimasi Performa',
                        'paragraph' => 'Platform e-commerce yang kami kembangkan menggunakan teknologi server-side rendering yang memastikan waktu muat halaman kurang dari 2 detik, sangat krusial untuk mencegah pelanggan pergi.',
                    ],
                    [
                        'subheading' => 'Integrasi Pembayaran',
                        'paragraph' => 'Sistem QRIS dinamis yang kami buat memungkinkan konfirmasi pembayaran secara instan (real-time) sehingga proses pemesanan bisa langsung diteruskan ke bagian logistik tanpa jeda.',
                    ],
                ],
                'challenge' => 'Fashion Hub ingin beralih dari jualan manual di media sosial ke platform e-commerce mandiri. Tantangan utamanya adalah menciptakan sistem yang mampu menangani ratusan variasi produk dengan proses checkout yang sangat cepat.',
                'solution' => [
                    'text' => 'Kami membangun toko online dengan performa tinggi menggunakan optimasi gambar otomatis. Kami mengintegrasikan sistem pembayaran otomatis dan hitung ongkir real-time untuk memberikan pengalaman belanja yang mulus.',
                    'items' => [
                        [
                            'icon' => 'Banknote',
                            'title' => 'Auto-Payment',
                            'desc' => 'Konfirmasi pembayaran instan tanpa perlu cek mutasi manual.',
                        ],
                        [
                            'icon' => 'Truck',
                            'title' => 'Live Rates',
                            'desc' => 'Kalkulasi ongkir otomatis ke seluruh Indonesia secara akurat.',
                        ],
                    ],
                ],
                'gallery' => [
                    '/images/mockups/e-comerce_1.png',
                    '/images/mockups/e-comerce_2.png',
                ],
            ],
            [
                'title' => 'Desa Pintar',
                'description' => 'Portal informasi desa digital terintegrasi.',
                'tagline' => 'Empowering Public Service.',
                'client' => 'Pemerintah Desa Mandiri',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2023',
                'hero_image' => 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?auto=format&fit=crop&w=800&q=80',
                'category' => [Category::GOVERNMENT->value],
                'content_blocks' => [
                    [
                        'subheading' => 'UI yang Ramah Pengguna',
                        'paragraph' => 'Mengingat pengguna utama adalah warga desa dengan latar belakang teknologi yang beragam, kami mendesain UI/UX dengan komponen besar, kontras warna yang tinggi, dan alur navigasi yang sangat sederhana.',
                    ],
                    [
                        'subheading' => 'Transparansi Data',
                        'paragraph' => 'Sebuah modul khusus dikembangkan untuk menyajikan laporan realisasi anggaran desa menggunakan grafik interaktif yang mudah dimengerti, meningkatkan kepercayaan masyarakat secara drastis.',
                    ],
                ],
                'challenge' => 'Administrasi desa yang masih manual seringkali menghambat pelayanan warga. Desa Pintar membutuhkan sistem yang bisa memfasilitasi pengajuan surat secara online dan transparansi anggaran desa yang bisa diakses warga kapan saja.',
                'solution' => [
                    'text' => 'Kami membangun portal pelayanan mandiri yang user-friendly. Sistem dilengkapi dengan dashboard admin yang memudahkan staf desa dalam memproses dokumen secara cepat. Kami juga menambahkan modul visualisasi anggaran desa yang mudah dipahami.',
                    'items' => [
                        [
                            'icon' => 'FileText',
                            'title' => 'E-Surat Mandiri',
                            'desc' => 'Warga bisa ajukan surat pengantar hanya dari smartphone secara real-time.',
                        ],
                        [
                            'icon' => 'ChartLine',
                            'title' => 'Live Statistics',
                            'desc' => 'Visualisasi data penduduk dan anggaran yang transparan dan akurat.',
                        ],
                    ],
                ],
                'gallery' => [
                    '/images/mockups/village_1.jpg',
                    '/images/mockups/village_2.jpg',
                ],
            ],
            [
                'title' => 'Agro Seed',
                'description' => 'Landing page produk pertanian modern.',
                'tagline' => 'Boost Sales with Landing Page.',
                'client' => 'Agro Seed Indonesia',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2024',
                'hero_image' => 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80',
                'category' => [Category::LANDING_PAGE->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Copywriting Konversi',
                        'paragraph' => 'Fokus utama dari halaman ini adalah mengubah pengunjung menjadi pembeli. Kami memformulasikan teks pemasaran (copywriting) yang langsung menyasar poin masalah petani (hama & gagal panen) lalu menyajikan Agro Seed sebagai solusi instannya.',
                    ],
                    [
                        'subheading' => 'Alur Pemesanan 1-Klik',
                        'paragraph' => 'Kami mendesain agar tombol "Pesan Sekarang" mendominasi visual, dan langsung mengarahkan pengguna ke pesan WhatsApp yang sudah ter-template otomatis, memangkas proses pemesanan menjadi hitungan detik.',
                    ],
                ],
                'challenge' => 'Agro Seed membutuhkan halaman penawaran produk bibit unggul yang fokus pada konversi. Mereka ingin audiens bisa memahami keunggulan produk dengan cepat dan langsung melakukan pemesanan tanpa proses yang berbelit-belit.',
                'solution' => [
                    'text' => 'Kami merancang landing page satu halaman (single-page) yang menonjolkan keunggulan produk melalui copywriting yang persuasif dan elemen visual yang bersih. Kami mengintegrasikan sistem WhatsApp Marketing yang memungkinkan pelacakan pesanan secara lebih efisien.',
                    'items' => [
                        [
                            'icon' => 'PanelsTopLeft',
                            'title' => 'High Conversion',
                            'desc' => 'Layout yang dioptimalkan untuk mengarahkan pengunjung langsung ke tombol order.',
                        ],
                        [
                            'icon' => 'MessageSquareText',
                            'title' => 'WhatsApp Integration',
                            'desc' => 'Integrasi API WhatsApp untuk pemesanan instan tanpa perlu simpan nomor.',
                        ],
                    ],
                ],
                'gallery' => [
                    '/images/mockups/agro_1.jpg',
                    '/images/mockups/agro_2.jpg',
                ],
            ],
        ];

        foreach ($data as $item) {
            Portfolio::create($item);
        }

        Portfolio::factory()->count(50)->create();
    }
}
