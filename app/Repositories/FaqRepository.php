<?php

namespace App\Repositories;

use App\Models\Faq;

class FaqRepository
{
    public function getAll()
    {
        return Faq::all();
    }

    public function getPublished()
    {
        return Faq::query()->where('is_published', true)->get();
    }
}
