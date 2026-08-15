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
                'hero_image' => 'portfolio_heros/plataran_1.webp',
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
                    'portfolio_galleries/plataran_2.webp',
                    'portfolio_galleries/plataran_3.webp',
                ],
            ],
            [
                'title' => 'Fashion Hub',
                'description' => 'Toko fashion online dengan QRIS payment.',
                'tagline' => 'Seamless Shopping Experience.',
                'client' => 'Fashion Hub Retail',
                'service' => Service::SHOPIFY_OR_CUSTOM_DEV->value,
                'year' => '2024',
                'hero_image' => 'portfolio_heros/3second_1.webp',
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
                    'portfolio_galleries/3second_2.webp',
                    'portfolio_galleries/3second_3.webp',
                ],
            ],
            [
                'title' => 'Desa Pintar',
                'description' => 'Portal informasi desa digital terintegrasi.',
                'tagline' => 'Empowering Public Service.',
                'client' => 'Pemerintah Desa Mandiri',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2023',
                'hero_image' => 'portfolio_heros/opendesa_1.webp',
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
                    'portfolio_galleries/opendesa_2.webp',
                    'portfolio_galleries/opendesa_3.webp',
                ],
            ],
            [
                'title' => 'Agro Seed',
                'description' => 'Landing page produk pertanian modern.',
                'tagline' => 'Boost Sales with Landing Page.',
                'client' => 'Agro Seed Indonesia',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2024',
                'hero_image' => 'portfolio_heros/eratani_1.webp',
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
                    'portfolio_galleries/eratani_2.webp',
                    'portfolio_galleries/eratani_3.webp',
                ],
            ],
            [
                'title' => 'Anytime Fitness',
                'description' => 'Sistem membership dan booking kelas kebugaran.',
                'tagline' => 'Sweat Now, Shine Later.',
                'client' => 'Anytime Fitness Indonesia',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2023',
                'hero_image' => 'portfolio_heros/anytime_1.webp',
                'category' => [Category::BOOKING->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Manajemen Member Otomatis',
                        'paragraph' => 'Sistem mendeteksi masa aktif member secara otomatis dan mengirimkan pengingat perpanjangan via WhatsApp tiga hari sebelum masa aktif habis.',
                    ],
                    [
                        'subheading' => 'Booking Kelas Mudah',
                        'paragraph' => 'Anggota dapat melihat jadwal kelas harian seperti Yoga, Zumba, atau HIIT dan langsung memesan slot (booking) tanpa harus menghubungi resepsionis.',
                    ],
                ],
                'challenge' => 'Urban Fit kesulitan melacak masa aktif member dan sering terjadi kelebihan kapasitas (overbooking) pada kelas-kelas favorit karena pencatatan masih manual.',
                'solution' => [
                    'text' => 'Kami mendesain portal keanggotaan (membership portal) mandiri dengan desain antarmuka yang sangat dinamis (sporty). Fitur utamanya mencakup kalender kelas interaktif dan integrasi payment gateway untuk perpanjangan otomatis.',
                    'items' => [
                        [
                            'icon' => 'Dumbbell',
                            'title' => 'Class Scheduler',
                            'desc' => 'Sistem booking dengan pembatasan kuota kelas secara real-time.',
                        ],
                        [
                            'icon' => 'IdCard',
                            'title' => 'Digital Member Card',
                            'desc' => 'Kartu keanggotaan digital berbentuk QR code untuk kemudahan akses masuk.',
                        ],
                    ],
                ],
                'gallery' => [
                    'portfolio_galleries/anytime_2.webp',
                    'portfolio_galleries/anytime_3.webp',
                ],
            ],
            [
                'title' => 'Klinik Pintar',
                'description' => 'Sistem antrian dan booking jadwal dokter online.',
                'tagline' => 'Smart Healthcare Solution.',
                'client' => 'Klinik Pintar Group',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2024',
                'hero_image' => 'portfolio_heros/klinikpintar_1.webp',
                'category' => [Category::BOOKING->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Kurangi Antrian Fisik',
                        'paragraph' => 'Sistem yang kami buat memungkinkan pasien mengambil nomor antrian secara online sejak dari rumah, sehingga ruang tunggu klinik tidak lagi sesak.',
                    ],
                    [
                        'subheading' => 'Manajemen Jadwal Dokter',
                        'paragraph' => 'Dokter dan staf memiliki dashboard khusus untuk melihat jadwal harian dan rekam medis pasien dengan antarmuka yang bersih dan cepat.',
                    ],
                ],
                'challenge' => 'Antrian panjang di ruang tunggu selalu menjadi komplain utama pasien. Staf klinik juga kewalahan mengatur jadwal dokter yang sering berubah dadakan.',
                'solution' => [
                    'text' => 'Mendevelop sistem booking cerdas berbasis web app. Pasien bisa melihat estimasi waktu dipanggil dan menerima notifikasi WhatsApp saat giliran mereka sudah dekat.',
                    'items' => [
                        [
                            'icon' => 'CalendarClock',
                            'title' => 'Smart Queue',
                            'desc' => 'Antrian digital real-time dengan prediksi waktu panggil.',
                        ],
                        [
                            'icon' => 'Activity',
                            'title' => 'Medical Records',
                            'desc' => 'Sistem pencatatan medis dasar yang terintegrasi dengan jadwal kunjungan.',
                        ],
                    ],
                ],
                'gallery' => [
                    'portfolio_galleries/klinikpintar_2.webp',
                    'portfolio_galleries/klinikpintar_3.webp',
                ],
            ],
            [
                'title' => 'Podomoro Park',
                'description' => 'Landing page eksklusif penjualan perumahan premium.',
                'tagline' => 'Luxury Living, Simplified.',
                'client' => 'Agung Podomoro Land',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2023',
                'hero_image' => 'portfolio_heros/podomoro_1.webp',
                'category' => [Category::LANDING_PAGE->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Tur Virtual 360',
                        'paragraph' => 'Menyematkan fitur tur virtual 360 derajat agar calon pembeli dapat merasakan kemewahan interior tanpa harus datang ke lokasi (show unit).',
                    ],
                    [
                        'subheading' => 'Lead Generation',
                        'paragraph' => 'Desain formulir yang diletakkan secara strategis untuk menangkap data calon pembeli potensial (leads) yang langsung terhubung ke email tim sales.',
                    ],
                ],
                'challenge' => 'Developer membutuhkan media promosi digital yang merepresentasikan kesan "Mewah" namun tetap efektif untuk mengumpulkan leads calon pembeli dengan cepat.',
                'solution' => [
                    'text' => 'Kami membangun landing page dengan estetika gelap (dark-mode) dipadukan aksen emas. Penggunaan animasi scroll halus memberikan kesan premium saat menelusuri fasilitas perumahan.',
                    'items' => [
                        [
                            'icon' => 'Home',
                            'title' => 'Premium Design',
                            'desc' => 'Tampilan elegan yang mengangkat nilai eksklusivitas properti.',
                        ],
                        [
                            'icon' => 'UserPlus',
                            'title' => 'Lead Magnet',
                            'desc' => 'Formulir teroptimasi untuk mengumpulkan database prospek berkualitas.',
                        ],
                    ],
                ],
                'gallery' => [
                    'portfolio_galleries/podomoro_2.webp',
                    'portfolio_galleries/podomoro_3.webp',
                ],
            ],
            [
                'title' => 'Fore Coffee',
                'description' => 'Sistem kasir cloud dengan fitur scan QR di meja.',
                'tagline' => 'Order Faster, Brew Better.',
                'client' => 'Fore Coffee Indonesia',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2024',
                'hero_image' => 'portfolio_heros/fore_1.webp',
                'category' => [Category::BOOKING->value, Category::ECOMMERCE->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Pemesanan Mandiri (Self-Order)',
                        'paragraph' => 'Pelanggan cukup scan QR Code di meja untuk melihat menu, memesan, dan membayar langsung dari HP mereka. Barista langsung menerima pesanan di dapur.',
                    ],
                    [
                        'subheading' => 'Laporan Real-Time',
                        'paragraph' => 'Pemilik dapat memantau penjualan harian, menu paling laris, hingga stok bahan baku secara langsung melalui dashboard dari mana saja.',
                    ],
                ],
                'challenge' => 'Kopi Senja sering kewalahan melayani pesanan saat jam sibuk, menyebabkan antrian panjang di kasir dan pesanan sering salah catat.',
                'solution' => [
                    'text' => 'Mengganti mesin kasir konvensional dengan sistem POS berbasis web. Fitur Self-Order QR mempercepat alur pemesanan dan secara drastis mengurangi beban kerja kasir.',
                    'items' => [
                        [
                            'icon' => 'QrCode',
                            'title' => 'QR Ordering',
                            'desc' => 'Menu digital responsif tanpa perlu install aplikasi.',
                        ],
                        [
                            'icon' => 'BarChart3',
                            'title' => 'Sales Analytics',
                            'desc' => 'Laporan komprehensif untuk analisa tren penjualan bulanan.',
                        ],
                    ],
                ],
                'gallery' => [
                    'portfolio_galleries/fore_2.webp',
                    'portfolio_galleries/fore_3.webp',
                ],
            ],
            [
                'title' => 'Wonderful Indonesia',
                'description' => 'Portal promosi destinasi wisata daerah dengan SEO tinggi.',
                'tagline' => 'Discover Hidden Paradises.',
                'client' => 'Kementerian Pariwisata',
                'service' => Service::MARKETING->value,
                'year' => '2023',
                'hero_image' => 'portfolio_heros/wonderful-indonesia_1.webp',
                'category' => [Category::GOVERNMENT->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Peringkat Halaman Satu Google',
                        'paragraph' => 'Melakukan riset kata kunci mendalam dan optimasi struktur SEO teknis sehingga portal ini menduduki peringkat #1 untuk puluhan kata kunci wisata daerah.',
                    ],
                    [
                        'subheading' => 'Direktori Wisata Terpadu',
                        'paragraph' => 'Menyediakan direktori lengkap mulai dari tempat wisata, kuliner, hingga penginapan yang terintegrasi dengan Google Maps.',
                    ],
                ],
                'challenge' => 'Kurangnya eksposur digital membuat banyak destinasi wisata potensial di daerah tersebut tidak diketahui oleh turis luar kota maupun mancanegara.',
                'solution' => [
                    'text' => 'Membangun ulang struktur portal dengan framework modern yang sangat cepat (SEO friendly). Mengimplementasikan strategi konten berbasis data pencarian turis.',
                    'items' => [
                        [
                            'icon' => 'Search',
                            'title' => 'SEO Mastery',
                            'desc' => 'Optimasi On-page dan Off-page untuk dominasi mesin pencari.',
                        ],
                        [
                            'icon' => 'Map',
                            'title' => 'Interactive Maps',
                            'desc' => 'Peta destinasi interaktif untuk merencanakan rute perjalanan.',
                        ],
                    ],
                ],
                'gallery' => [
                    'portfolio_galleries/wonderful-indonesia_2.webp',
                    'portfolio_galleries/wonderful-indonesia_3.webp',
                ],
            ],
            [
                'title' => 'Cottonink',
                'description' => 'Toko online eksklusif untuk brand pakaian butik premium.',
                'tagline' => 'Elegance in Every Pixel.',
                'client' => 'Cottonink Fashion',
                'service' => Service::SHOPIFY_OR_CUSTOM_DEV->value,
                'year' => '2024',
                'hero_image' => 'portfolio_heros/cottonink_1.webp',
                'category' => [Category::ECOMMERCE->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Sistem Inventaris Sinkron',
                        'paragraph' => 'Membangun jembatan (API) yang menghubungkan toko fisik dengan toko online sehingga stok pakaian selalu akurat dan mencegah overselling.',
                    ],
                    [
                        'subheading' => 'Personalisasi Belanja',
                        'paragraph' => 'Fitur rekomendasi gaya (style recommendation) berbasis algoritma sederhana yang menyarankan aksesoris pelengkap saat pelanggan memilih baju.',
                    ],
                ],
                'challenge' => 'Membuat platform digital yang mampu mencerminkan kualitas pakaian premium sambil menangani kerumitan variasi ukuran dan warna secara efektif.',
                'solution' => [
                    'text' => 'Desain bergaya minimalis-elegan dengan ruang putih (whitespace) yang lega untuk menonjolkan detail produk. Sistem checkout dibuat dalam 1 halaman (One-page checkout) untuk menekan angka keranjang ditinggalkan (cart abandonment).',
                    'items' => [
                        [
                            'icon' => 'Shirt',
                            'title' => 'Variant Management',
                            'desc' => 'Pengelolaan ratusan SKU varian warna dan ukuran yang rapi.',
                        ],
                        [
                            'icon' => 'ShoppingBag',
                            'title' => 'Quick Checkout',
                            'desc' => 'Proses pembayaran mulus tanpa paksaan pembuatan akun (Guest Checkout).',
                        ],
                    ],
                ],
                'gallery' => [
                    'portfolio_galleries/cottonink_2.webp',
                    'portfolio_galleries/cottonink_3.webp',
                ],
            ],
            [
                'title' => 'Hukumonline',
                'description' => 'Company profile korporat untuk biro konsultan hukum & regulasi.',
                'tagline' => 'Trust, Integrity, Digitalized.',
                'client' => 'Hukumonline.com',
                'service' => Service::DESIGN_AND_DEV->value,
                'year' => '2023',
                'hero_image' => 'portfolio_heros/hukumonline_1.webp',
                'category' => [Category::COMPANY_PROFILE->value],
                'content_blocks' => [
                    [
                        'subheading' => 'Otoritas & Kepercayaan',
                        'paragraph' => 'Fokus utama adalah membangun kredibilitas. Kami menyajikan portofolio kasus sukses dan profil mendalam dari tiap partner hukum dengan desain korporat yang berwibawa.',
                    ],
                    [
                        'subheading' => 'Aksesibilitas Klien',
                        'paragraph' => 'Menyediakan portal khusus klien (Client Area) berbasis password sederhana untuk mengunduh dokumen legal dan tagihan secara privat.',
                    ],
                ],
                'challenge' => 'Firma hukum ini membutuhkan pembaruan citra yang tadinya terkesan kuno menjadi firma modern tanpa kehilangan kesan profesional dan berintegritas.',
                'solution' => [
                    'text' => 'Menggunakan palet warna biru navy dan emas klasik dalam balutan layout modern. Menambahkan portal berita hukum (blog) untuk meningkatkan authority di mata mesin pencari.',
                    'items' => [
                        [
                            'icon' => 'Scale',
                            'title' => 'Corporate Identity',
                            'desc' => 'Branding digital yang memancarkan otoritas dan kepercayaan penuh.',
                        ],
                        [
                            'icon' => 'Lock',
                            'title' => 'Secure Portal',
                            'desc' => 'Area aman untuk klien mengakses dokumen rahasia mereka secara mandiri.',
                        ],
                    ],
                ],
                'gallery' => [
                    'portfolio_galleries/hukumonline_2.webp',
                    'portfolio_galleries/hukumonline_3.webp',
                ],
            ],
        ];

        foreach ($data as $item) {
            Portfolio::create($item);
        }

    }
}
