<?php

namespace App\Http\Controllers;

class PromoController extends Controller
{
    public function index()
    {
        return inertia('promo/index');
    }
}
