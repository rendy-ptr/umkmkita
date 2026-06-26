<?php

namespace App\Repositories;

use App\Data\PortfolioFilterData;
use App\Models\Portfolio;
use Illuminate\Pagination\LengthAwarePaginator;

class PortfolioRepository
{
    public function getFilteredPaginated(PortfolioFilterData $filters, int $perPage = 10): LengthAwarePaginator
    {
        $query = Portfolio::query()
            ->when(
                $filters->search,
                fn ($query, $searchTerm) => $query->whereRaw('LOWER(title) LIKE LOWER(?)', ["%{$searchTerm}%"])
            )
            ->when(
                $filters->category,
                fn ($query, $category) => $query->whereJsonContains('category', $category)
            );

        return $query->paginate($perPage)->withQueryString();
    }
}
