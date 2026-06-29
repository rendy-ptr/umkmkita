<?php

namespace App\Filament\Widgets;

use App\Models\Portfolio;
use App\Models\Price;
use App\Models\Promo;
use App\Models\Service;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class DashboardStats extends BaseWidget
{
    protected function getColumns(): int
    {
        return 2;
    }

    protected function getStats(): array
    {
        return [
            Stat::make('Total Portofolio', (string) Portfolio::count('*'))
                ->description('Proyek yang telah diselesaikan')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->chart([7, 10, 13, 15, 17, 20])
                ->color('success'),
            Stat::make('Layanan Tersedia', (string) Service::count('*'))
                ->description('Paket layanan aktif')
                ->descriptionIcon('heroicon-m-squares-2x2')
                ->chart([2, 2, 3, 3, 4, 4])
                ->color('info'),
            Stat::make('Promo Aktif', (string) Promo::query()->where('expired_at', '>=', now())->count('*'))
                ->description('Promo yang bisa diklaim')
                ->descriptionIcon('heroicon-m-ticket')
                ->chart([5, 4, 6, 3, 5, 2])
                ->color('warning'),
            Stat::make('Harga Paket', (string) Price::count('*'))
                ->description('Paket tersedia')
                ->descriptionIcon('heroicon-m-currency-dollar')
                ->chart([1, 2, 2, 3, 4, 5])
                ->color('danger'),
        ];
    }
}
