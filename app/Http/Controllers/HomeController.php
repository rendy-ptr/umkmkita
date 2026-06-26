<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(Request $request): Response
    {
        return Inertia::render('home/index', [
            'portfolios' => Portfolio::all(),
            'blogs' => Blog::all(),
        ]);
    }
}
