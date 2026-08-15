<?php

namespace App\Filament\Widgets;

use App\Models\Visitor;
use Filament\Widgets\ChartWidget;

class VisitorAnalyticsChart extends ChartWidget
{
    protected ?string $heading = 'Statistik Pengunjung (7 Hari Terakhir)';

    protected static ?int $sort = 1;

    protected function getData(): array
    {
        $data = [];
        $labels = [];

        for ($i = 6; $i >= 0; $i--) {
            $day = now()->subDays($i);
            $labels[] = $day->translatedFormat('d M');
            $data[] = Visitor::query()->where('date', $day->toDateString())->count('id');
        }

        return [
            'datasets' => [
                [
                    'label' => 'Total Pengunjung ',
                    'data' => $data,
                    'borderColor' => '#10b981',
                    'backgroundColor' => 'rgba(16, 185, 129, 0.1)',
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
