<?php

namespace App\Actions\Comment;

use App\Data\StoreCommentData;
use App\Models\Blog;
use App\Models\Comment;
use Lorisleiva\Actions\Concerns\AsAction;

class StoreComment
{
    use AsAction;

    public function handle(StoreCommentData $data, Blog $blog): Comment
    {
        return $blog->comments()->create([
            'user_id' => $data->userId,
            'name' => $data->name,
            'email' => $data->email,
            'content' => $data->content,
        ]);
    }
}
