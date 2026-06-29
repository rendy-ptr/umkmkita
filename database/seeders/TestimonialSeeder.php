<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonials = [
            [
                'name' => 'Ahmad Syahrul',
                'role' => 'Owner Batik Nusantara',
                'text' => 'Dalam 3 bulan setelah website live, orderan naik 3x lipat. Sistem kasir dan WhatsApp otomatisnya sangat membantu operasional sehari-hari.',
                'stars' => 5,
                'is_published' => true,
            ],
            [
                'name' => 'Budi Raharjo',
                'role' => 'Kepala Desa Sukamaju',
                'text' => 'Pengerjaan cepat, komunikatif, dan hasilnya melebihi ekspektasi. Portal administrasi desa kami sekarang jauh lebih transparan dan efisien.',
                'stars' => 5,
                'is_published' => true,
            ],
            [
                'name' => 'Sinta Permata',
                'role' => 'Direktur EduPro',
                'text' => 'LMS kami sekarang punya 500+ siswa aktif tanpa ada kendala server sama sekali. Sistem payment gateway-nya juga berjalan mulus.',
                'stars' => 5,
                'is_published' => true,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::updateOrCreate($testimonial);
        }
    }
}
