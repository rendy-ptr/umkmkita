<?php

namespace App\Http\Controllers;

use App\Repositories\PromoRepositories;

class PromoController extends Controller
{
    public function __construct(private PromoRepositories $promoRepositories) {}

    public function index()
    {
        return inertia('promo/index', [
            'promos' => $this->promoRepositories->getAll(),
        ]);
    }
}
