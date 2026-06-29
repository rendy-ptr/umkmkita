<?php

namespace App\Actions\Blog;

use App\Data\BlogFilterData;
use App\Repositories\BlogRepository;
use Illuminate\Pagination\LengthAwarePaginator;
use Lorisleiva\Actions\Concerns\AsAction;

class GetFilteredBlogs
{
    use AsAction;

    public function __construct(
        private BlogRepository $repository
    ) {}

    public function handle(BlogFilterData $data): LengthAwarePaginator
    {
        return $this->repository->getFilteredPaginated($data);
    }
}
