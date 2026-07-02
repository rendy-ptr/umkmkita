<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Advantage extends Model
{
    protected $fillable = [
        'icon',
        'title',
        'description',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];
}
