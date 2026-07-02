<?php

namespace App\Repositories;

use App\Models\Promo;

class PromoRepositories
{
    public function getAll()
    {
        return Promo::all();
    }
}
