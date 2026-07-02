<?php

namespace App\Http\Controllers;

use App\Repositories\PriceRepository;

class PriceController extends Controller
{
    public function __construct(private PriceRepository $priceRepository) {}

    public function index()
    {
        return inertia('harga/index', [
            'prices' => $this->priceRepository->getAll(),
        ]);
    }
}
