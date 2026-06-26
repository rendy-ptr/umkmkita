<?php

namespace App\Models;

use App\Enums\Category;

class Blog
{
    private $data = [
        [
            'id' => 1,
            'category' => Category::TIPS_WEBSITE->value,
            'image' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
            'title' => '7 Alasan UMKM Harus Punya Website di 2026 Bukan Cuma Instagram.',
            'created_at' => '28-04-2025',
            'desc' => 'Di era digital yang berkembang sangat pesat, banyak pelaku UMKM merasa cukup hanya dengan memiliki akun Instagram atau TikTok. Namun, tahukah Anda bahwa bergantung 100% pada media sosial adalah strategi yang berisiko?',
            'subHeading1' => 'Kepemilikan Penuh Aset Digital',
            'content1' => 'Media sosial adalah "tanah sewaan". Jika algoritma berubah atau akun Anda terkena suspend, Anda bisa kehilangan akses ke pelanggan dalam semalam. Website adalah properti milik Anda sepenuhnya.',
            'quote' => 'Website bukan lagi sekadar pilihan, melainkan fondasi utama bisnis Anda di era modern.',
            'subHeading2' => 'Membangun Kredibilitas Profesional',
            'content2' => 'Pelanggan cenderung lebih percaya pada bisnis yang memiliki alamat domain resmi dibandingkan hanya profil media sosial. Website memberikan kesan bahwa bisnis Anda serius dan mapan.',
            'subHeading3' => 'Muncul di Pencarian Google (SEO)',
            'content3' => 'Ketika orang mencari solusi di Google, website Anda bisa muncul di sana. Media sosial jarang muncul di hasil pencarian spesifik untuk kebutuhan produk atau jasa lokal. Membangun website sekarang jauh lebih mudah dan terjangkau. Dengan UMKMKITA, Anda bisa memiliki website profesional yang sudah terintegrasi dengan teknologi AI untuk membantu pertumbuhan bisnis Anda.',
        ],
        [
            'id' => 2,
            'category' => Category::ECOMMERCE->value,
            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
            'title' => 'Panduan Toko Online Sukses: Setup QRIS hingga Integrasi Ongkir.',
            'created_at' => '22-04-2025',
            'desc' => 'Memiliki toko online bukan sekadar mengupload gambar produk. Di tahun 2025, konsumen menuntut kemudahan dan kecepatan dalam bertransaksi. Jika proses pembayaran Anda masih manual (cek mutasi manual), Anda berisiko kehilangan pembeli yang tidak sabar.',
            'subHeading1' => 'Otomasi Pembayaran dengan QRIS',
            'content1' => 'QRIS (Quick Response Code Indonesian Standard) telah menjadi standar baru. Dengan integrasi QRIS di website, pembeli cukup scan, bayar, dan sistem akan otomatis memverifikasi pesanan tersebut. Tidak perlu lagi kirim bukti transfer lewat WhatsApp.',
            'quote' => 'Kemudahan pembayaran adalah kunci utama konversi di toko online.',
            'subHeading2' => 'Kalkulasi Ongkir Real-Time',
            'content2' => 'Jangan biarkan pembeli bertanya "ongkir ke kecamatan X berapa?". Dengan integrasi API logistik (seperti RajaOngkir), website Anda bisa menghitung biaya kirim secara akurat berdasarkan berat produk dan lokasi pembeli saat itu juga.',
            'subHeading3' => 'Manajemen Stok yang Akurat',
            'content3' => 'Sangat mengecewakan bagi pembeli jika mereka sudah membayar tapi ternyata stok barang habis. Sistem e-commerce yang baik akan memotong stok secara otomatis dan memberikan peringatan jika stok menipis. UMKMKITA menyediakan paket E-Commerce lengkap yang sudah mencakup semua fitur di atas. Kami bantu Anda bertransformasi dari jualan manual ke sistem digital yang mandiri.',
        ],
        [
            'id' => 3,
            'category' => Category::AI_AND_TECHNOLOGY->value,
            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
            'title' => 'Bagaimana AI Membantu Website UMKM Konversi Lebih Tinggi.',
            'created_at' => '18-04-2025',
            'desc' => 'Artificial Intelligence (AI) bukan lagi sekadar tren teknologi untuk perusahaan besar. Pelaku UMKM kini bisa memanfaatkan AI untuk membuat website mereka bekerja lebih cerdas, bukan lebih keras.',
            'subHeading1' => 'Chatbot AI untuk Customer Service 24/7',
            'content1' => 'Banyak calon pembeli bertanya di malam hari saat Anda sedang istirahat. Chatbot yang ditenagai AI bisa menjawab pertanyaan umum seputar produk, stok, dan harga secara instan, sehingga peluang penjualan tidak hilang begitu saja.',
            'quote' => 'AI adalah asisten bisnis yang tidak pernah tidur.',
            'subHeading2' => 'Personalisasi Produk Otomatis',
            'content2' => 'AI dapat menganalisis perilaku pengunjung website dan secara otomatis menampilkan produk yang paling relevan bagi mereka. Jika pengunjung sering melihat kategori tertentu, AI akan menonjolkan koleksi tersebut.',
            'subHeading3' => 'Optimasi Konten dan Gambar',
            'content3' => 'AI membantu mengecilkan ukuran gambar tanpa mengurangi kualitas secara cerdas, sehingga website Anda loading sangat cepat. Kecepatan loading adalah faktor utama dalam meningkatkan konversi penjualan. Di UMKMKITA, kami mengintegrasikan teknologi AI terbaru ke dalam website Anda untuk membantu otomasi bisnis sejak hari pertama.',
        ],

    ];

    public static function all()
    {
        return collect((new static)->data)->map(function ($item) {
            $options = collect(Category::options());
            $categoryOption = $options->firstWhere('value', $item['category']);

            $item['category'] = $categoryOption ?? [
                'value' => $item['category'],
                'label' => $item['category'],
            ];

            return $item;
        })->toArray();
    }

    public static function find(int $id): ?array
    {
        foreach (self::all() as $item) {
            if ($item['id'] === $id) {
                return $item;
            }
        }

        return null;
    }
}
