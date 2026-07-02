<?php

namespace App\Data;

class BlogFilterData
{
    public function __construct(
        public ?string $search = null,
        public ?string $category = null,
    ) {}

    public static function from(array $attributes): self
    {
        return new self(...$attributes);
    }
}
