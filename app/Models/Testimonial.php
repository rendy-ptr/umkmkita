<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'name',
        'role',
        'text',
        'stars',
        'is_published',
    ];

    protected $casts = [
        'stars' => 'integer',
        'is_published' => 'boolean',
    ];
}
