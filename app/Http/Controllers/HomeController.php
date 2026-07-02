<?php

namespace App\Http\Controllers;

use App\Repositories\AdvantageRepository;
use App\Repositories\BlogRepository;
use App\Repositories\PortfolioRepository;
use App\Repositories\ServiceRepository;
use App\Repositories\TestimonialRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        private ServiceRepository $serviceRepository,
        private PortfolioRepository $portfolioRepository,
        private BlogRepository $blogRepository,
        private AdvantageRepository $advantageRepository,
        private TestimonialRepository $testimonialRepository,
    ) {}

    public function __invoke(Request $request): Response
    {
        return Inertia::render('home/index', [
            'portfolios' => $this->portfolioRepository->getAll(),
            'blogs' => $this->blogRepository->getLatestBlogs(3),
            'services' => $this->serviceRepository->getAll(),
            'advantages' => $this->advantageRepository->getAll(),
            'testimonials' => $this->testimonialRepository->getAll(3),
        ]);
    }
}
