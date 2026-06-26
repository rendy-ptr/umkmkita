<?php

namespace Database\Factories;

use App\Enums\Category;
use App\Enums\Service;
use App\Models\Portfolio;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Portfolio>
 */
class PortfolioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = array_column(Category::cases(), 'value');
        $services = array_column(Service::cases(), 'value');

        $unsplashImages = [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
        ];

        return [
            'title' => $this->faker->company() . ' ' . $this->faker->randomElement(['Website', 'App', 'Platform', 'Portal', 'Dashboard', 'E-Commerce', 'Redesign']),
            'description' => $this->faker->paragraphs(3, true),
            'tagline' => $this->faker->catchPhrase(),
            'client' => $this->faker->company(),
            'service' => $this->faker->randomElement($services),
            'year' => (string) $this->faker->year(),
            'hero_image' => $this->faker->randomElement($unsplashImages),
            'category' => $this->faker->randomElements($categories, $this->faker->numberBetween(1, 2)),
            'content_blocks' => [
                [
                    'subheading' => 'Project Overview',
                    'paragraph' => $this->faker->paragraphs(2, true),
                ],
                [
                    'subheading' => 'The Approach',
                    'paragraph' => $this->faker->paragraphs(2, true),
                ],
            ],
            'challenge' => $this->faker->paragraphs(2, true),
            'solution' => [
                'text' => $this->faker->paragraphs(2, true),
                'items' => [
                    [
                        'icon' => $this->faker->randomElement(['Sparkles', 'CheckCircle2', 'Zap', 'Layers', 'ChartLine']),
                        'title' => 'Performa Meningkat',
                        'desc' => $this->faker->paragraph(2),
                    ],
                    [
                        'icon' => $this->faker->randomElement(['Truck', 'User', 'MessageSquareText', 'Banknote', 'Armchair']),
                        'title' => 'Pengalaman Pengguna',
                        'desc' => $this->faker->paragraph(2),
                    ],
                    [
                        'icon' => $this->faker->randomElement(['Sparkles', 'CheckCircle2', 'Zap', 'Layers', 'ChartLine']),
                        'title' => 'Desain Modern',
                        'desc' => $this->faker->paragraph(2),
                    ],
                    [
                        'icon' => $this->faker->randomElement(['FileText', 'Calendar', 'PanelsTopLeft']),
                        'title' => 'Manajemen Mudah',
                        'desc' => $this->faker->paragraph(2),
                    ],
                ],
            ],
            'gallery' => $this->faker->randomElements($unsplashImages, 4),
        ];
    }
}
