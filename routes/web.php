<?php

use App\Http\Controllers\Api\ChatBotController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HargaController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;

// Home Route
Route::get('/', HomeController::class)->name('home');

// Route::inertia('/layanan', 'layanan/index')->name('layanan');
// Route::inertia('/harga', 'harga/index')->name('harga');
// Route::inertia('/jurnal', 'jurnal/index')->name('jurnal');
// Route::inertia('/promo', 'promo/index')->name('promo');
Route::prefix('faq')->group(function () {
    Route::get('/', [FaqController::class, 'index'])->name('faq.index');
});

// Layanan Routes
Route::prefix('layanan')->group(function () {
    Route::get('/', [ServiceController::class, 'index'])->name('layanan.index');
    // Route::get('/{id}', [LayananController::class, 'show'])->name('layanan.show');
});

// Harga Routes
Route::prefix('harga')->group(function () {
    Route::get('/', [PriceController::class, 'index'])->name('harga.index');
    // Route::get('/{id}', [HargaController::class, 'show'])->name('harga.show');
});

Route::prefix('promo')->group(function () {
    Route::get('/', [PromoController::class, 'index'])->name('promo.index');
    // Route::get('/{id}', [PromoController::class, 'show'])->name('promo.show');
});

// Portfolio Routes
Route::prefix('portfolio')->group(function () {
    Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');
    Route::get('/{id}', [PortfolioController::class, 'show'])->name('portfolio.show');
});

// Blog Routes
Route::prefix('blog')->group(function () {
    Route::get('/', [BlogController::class, 'index'])->name('blog.index');
    Route::get('/{id}', [BlogController::class, 'show'])->name('blog.show');
    Route::post('/{blog}/comments', [CommentController::class, 'store'])->name('blog.comments.store');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

// API Routes
Route::post('/api/chat', [ChatBotController::class, 'chat'])->name('api.chat');
