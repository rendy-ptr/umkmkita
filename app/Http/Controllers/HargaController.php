<?php

namespace App\Http\Controllers;

class HargaController extends Controller
{
    public function index()
    {
        return inertia('harga/index');
    }
}
