<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'hero_image',
        'category',
        'quote',
        'content_blocks',
        'is_published',
        'published_at',
    ];

    protected $casts = [
        'category' => 'array',
        'content_blocks' => 'array',
        'is_published' => 'boolean',
        'published_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    protected static function booted()
    {
        static::saving(function ($blog) {
            if ($blog->is_published && is_null($blog->published_at)) {
                $blog->published_at = now();
            }
        });
    }
}
