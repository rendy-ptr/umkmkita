<?php

namespace App\Models;

use App\Enums\Service;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'category' => 'array',
        'service' => Service::class,
        'gallery' => 'array',
        'solution' => 'array',
        'content_blocks' => 'array',
    ];
}
