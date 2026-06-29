<?php

namespace App\Repositories;

use App\Models\Price;

class PriceRepository
{
    public function getAll()
    {
        return Price::all();
    }
}
