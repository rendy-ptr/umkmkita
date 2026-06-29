<?php

namespace App\Repositories;

use App\Models\Advantage;

class AdvantageRepository
{
    public function getAll()
    {
        return Advantage::query()
            ->where('is_published', true)
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
