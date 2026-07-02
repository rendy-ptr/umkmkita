<?php

namespace App\Data;

class StoreCommentData
{
    public function __construct(
        public readonly string $content,
        public readonly ?int $userId = null,
        public readonly ?string $name = null,
        public readonly ?string $email = null,
    ) {}

    public static function fromRequest(array $attributes, ?int $userId = null): self
    {
        return new self(
            content: $attributes['content'],
            userId: $userId,
            name: $attributes['name'] ?? null,
            email: $attributes['email'] ?? null,
        );
    }
}
