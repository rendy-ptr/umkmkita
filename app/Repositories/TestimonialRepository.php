<?php

namespace App\Repositories;

use App\Models\Testimonial;
use Illuminate\Database\Eloquent\Collection;

class TestimonialRepository
{
    public function getAll(?int $limit = null): Collection
    {
        return Testimonial::query()
            ->where('is_published', true)
            ->latest()
            ->limit($limit)
            ->get();
    }
}
