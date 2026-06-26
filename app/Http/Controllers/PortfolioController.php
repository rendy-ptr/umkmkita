<?php

namespace App\Http\Controllers;

use App\Actions\Portfolio\GetFilteredPortfolios;
use App\Data\PortfolioFilterData;
use App\Enums\Category;
use App\Http\Requests\PortfolioFilterRequest;
use App\Models\Portfolio;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index(PortfolioFilterRequest $request)
    {
        $dto = PortfolioFilterData::from($request->validated());

        $portfolios = GetFilteredPortfolios::run($dto);

        return Inertia::render('portfolio/index', [
            'portfolios' => $portfolios,
            'categories' => Category::options(),
            'filters' => $dto,
        ]);
    }

    public function show(int $id)
    {
        $portfolio = Portfolio::findOrFail($id);

        return Inertia::render('portfolio/show/index', [
            'portfolio' => $portfolio,
        ]);
    }
}
