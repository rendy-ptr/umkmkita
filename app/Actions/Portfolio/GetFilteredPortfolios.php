<?php

namespace App\Actions\Portfolio;

use App\Data\PortfolioFilterData;
use App\Repositories\PortfolioRepository;
use Illuminate\Pagination\LengthAwarePaginator;
use Lorisleiva\Actions\Concerns\AsAction;

class GetFilteredPortfolios
{
    use AsAction;

    public function __construct(
        private PortfolioRepository $repository
    ) {}

    public function handle(PortfolioFilterData $data): LengthAwarePaginator
    {
        return $this->repository->getFilteredPaginated($data);
    }
}
