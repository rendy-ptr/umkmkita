<?php

namespace App\Http\Controllers;

class LayananController extends Controller
{
    public function index()
    {
        return inertia('layanan/index');
    }
}
