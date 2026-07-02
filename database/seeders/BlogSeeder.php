<?php

namespace Database\Seeders;

use App\Enums\Category;
use App\Models\Blog;
use Faker\Factory;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'id' => 1,
                'user_id' => 1,
                'title' => '7 Alasan UMKM Harus Punya Website di 2026 Bukan Cuma Instagram.',
                'description' => 'Di era digital yang berkembang sangat pesat, banyak pelaku UMKM merasa cukup hanya dengan memiliki akun Instagram atau TikTok. Namun, tahukah Anda bahwa bergantung 100% pada media sosial adalah strategi yang berisiko?',
                'hero_image' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
                'category' => [Category::TIPS_WEBSITE->value],
                'quote' => 'Website bukan lagi sekadar pilihan, melainkan fondasi utama bisnis Anda di era modern.',
                'content_blocks' => [
                    [
                        'subheading' => 'Kepemilikan Penuh Aset Digital',
                        'paragraph' => 'Media sosial adalah "tanah sewaan". Jika algoritma berubah atau akun Anda terkena suspend, Anda bisa kehilangan akses ke pelanggan dalam semalam. Website adalah properti milik Anda sepenuhnya.',
                    ],
                    [
                        'subheading' => 'Membangun Kredibilitas Profesional',
                        'paragraph' => 'Pelanggan cenderung lebih percaya pada bisnis yang memiliki alamat domain resmi dibandingkan hanya profil media sosial. Website memberikan kesan bahwa bisnis Anda serius dan mapan.',
                    ],
                    [
                        'subheading' => 'Muncul di Pencarian Google (SEO)',
                        'paragraph' => 'Ketika orang mencari solusi di Google, website Anda bisa muncul di sana. Media sosial jarang muncul di hasil pencarian spesifik untuk kebutuhan produk atau jasa lokal. Membangun website sekarang jauh lebih mudah dan terjangkau. Dengan UMKMKITA, Anda bisa memiliki website profesional yang sudah terintegrasi dengan teknologi AI untuk membantu pertumbuhan bisnis Anda.',
                    ],
                    [
                        'subheading' => 'Optimasi Konten dan Gambar',
                        'paragraph' => 'AI membantu mengecilkan ukuran gambar tanpa mengurangi kualitas secara cerdas, sehingga website Anda loading sangat cepat. Kecepatan loading adalah faktor utama dalam meningkatkan konversi penjualan. Di UMKMKITA, kami mengintegrasikan teknologi AI terbaru ke dalam website Anda untuk membantu otomasi bisnis sejak hari pertama.',
                    ],
                ],
                'is_published' => true,
                'published_at' => '2026-06-28T13:52:18+07:00',
            ],
            [
                'id' => 2,
                'user_id' => 1,
                'title' => 'Panduan Toko Online Sukses: Setup QRIS hingga Integrasi Ongkir.',
                'description' => 'Memiliki toko online bukan sekadar mengupload gambar produk. Di tahun 2025, konsumen menuntut kemudahan dan kecepatan dalam bertransaksi. Jika proses pembayaran Anda masih manual (cek mutasi manual), Anda berisiko kehilangan pembeli yang tidak sabar.',
                'category' => [Category::ECOMMERCE->value, Category::TIPS_WEBSITE->value],
                'hero_image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
                'content_blocks' => [
                    [
                        'subheading' => 'Otomasi Pembayaran dengan QRIS',
                        'paragraph' => 'QRIS (Quick Response Code Indonesian Standard) telah menjadi standar baru. Dengan integrasi QRIS di website, pembeli cukup scan, bayar, dan sistem akan otomatis memverifikasi pesanan tersebut. Tidak perlu lagi kirim bukti transfer lewat WhatsApp.',
                    ],
                    [
                        'subheading' => 'Kalkulasi Ongkir Real-Time',
                        'paragraph' => 'Jangan biarkan pembeli bertanya "ongkir ke kecamatan X berapa?". Dengan integrasi API logistik (seperti RajaOngkir), website Anda bisa menghitung biaya kirim secara akurat berdasarkan berat produk dan lokasi pembeli saat itu juga.',
                    ],
                    [
                        'subheading' => 'Manajemen Stok yang Akurat',
                        'paragraph' => 'Sangat mengecewakan bagi pembeli jika mereka sudah membayar tapi ternyata stok barang habis. Sistem e-commerce yang baik akan memotong stok secara otomatis dan memberikan peringatan jika stok menipis. UMKMKITA menyediakan paket E-Commerce lengkap yang sudah mencakup semua fitur di atas. Kami bantu Anda bertransformasi dari jualan manual ke sistem digital yang mandiri.',
                    ],
                ],
                'quote' => 'Kemudahan pembayaran adalah kunci utama konversi di toko online.',
                'is_published' => true,
                'published_at' => '2026-06-27T19:12:30+07:00',
            ],
            [
                'id' => 3,
                'user_id' => 1,
                'title' => 'Bagaimana AI Membantu Website UMKM Konversi Lebih Tinggi.',
                'description' => 'Artificial Intelligence (AI) bukan lagi sekadar tren teknologi untuk perusahaan besar. Pelaku UMKM kini bisa memanfaatkan AI untuk membuat website mereka bekerja lebih cerdas, bukan lebih keras.',
                'category' => [Category::AI_AND_TECHNOLOGY->value, Category::TIPS_WEBSITE->value],
                'hero_image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
                'content_blocks' => [
                    [
                        'subheading' => 'Chatbot AI untuk Customer Service 24/7',
                        'paragraph' => 'Banyak calon pembeli bertanya di malam hari saat Anda sedang istirahat. Chatbot yang ditenagai AI bisa menjawab pertanyaan umum seputar produk, stok, dan harga secara instan, sehingga peluang penjualan tidak hilang begitu saja.',
                    ],
                    [
                        'subheading' => 'Personalisasi Produk Otomatis',
                        'paragraph' => 'AI dapat menganalisis perilaku pengunjung website dan secara otomatis menampilkan produk yang paling relevan bagi mereka. Jika pengunjung sering melihat kategori tertentu, AI akan menonjolkan koleksi tersebut.',
                    ],
                    [
                        'subheading' => 'Optimasi Konten dan Gambar',
                        'paragraph' => 'AI membantu mengecilkan ukuran gambar tanpa mengurangi kualitas secara cerdas, sehingga website Anda loading sangat cepat. Kecepatan loading adalah faktor utama dalam meningkatkan konversi penjualan. Di UMKMKITA, kami mengintegrasikan teknologi AI terbaru ke dalam website Anda untuk membantu otomasi bisnis sejak hari pertama.',
                    ],
                ],
                'quote' => 'AI adalah asisten bisnis yang tidak pernah tidur.',
                'is_published' => true,
                'published_at' => '2026-06-27T19:12:30+07:00',
            ],

        ];

        $faker = Factory::create('id_ID');
        $categories = Category::cases();
        $images = [
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
        ];

        for ($i = 4; $i <= 15; $i++) {
            $data[] = [
                'id' => $i,
                'user_id' => 1,
                'title' => $faker->sentence(rand(5, 8)).' (Data Test)',
                'description' => $faker->paragraph(2),
                'category' => [$faker->randomElement($categories)->value],
                'hero_image' => $faker->randomElement($images),
                'content_blocks' => [
                    [
                        'subheading' => $faker->sentence(4),
                        'paragraph' => $faker->paragraph(4),
                    ],
                    [
                        'subheading' => $faker->sentence(4),
                        'paragraph' => $faker->paragraph(4),
                    ],
                    [
                        'subheading' => $faker->sentence(4),
                        'paragraph' => $faker->paragraph(4),
                    ],
                ],
                'quote' => $faker->sentence(8),
                'is_published' => true,
                'published_at' => now()->subDays(rand(1, 30))->toIso8601String(),
            ];
        }

        foreach ($data as $item) {
            Blog::updateOrCreate(['id' => $item['id']], $item);
        }
    }
}
