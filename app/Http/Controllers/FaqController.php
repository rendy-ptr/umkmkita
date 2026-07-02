<?php

namespace App\Http\Controllers;

use App\Repositories\FaqRepository;

class FaqController extends Controller
{
    public function __construct(private readonly FaqRepository $faqRepository) {}

    public function index()
    {

        return inertia('faq/index', [
            'faqs' => $this->faqRepository->getPublished(),
        ]);
    }
}
