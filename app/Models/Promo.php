<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    protected $guarded = [];

    protected $casts = [
        'expired_at' => 'date',
    ];
}
