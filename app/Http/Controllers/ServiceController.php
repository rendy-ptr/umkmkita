<?php

namespace App\Http\Controllers;

use App\Repositories\ServiceRepository;

class ServiceController extends Controller
{
    public function __construct(private ServiceRepository $serviceRepository) {}

    public function index()
    {
        return inertia('layanan/index', [
            'services' => $this->serviceRepository->getAll(),
        ]);
    }
}
