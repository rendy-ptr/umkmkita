<?php

namespace App\Data;

class PortfolioFilterData
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
