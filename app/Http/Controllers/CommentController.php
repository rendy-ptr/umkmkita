<?php

namespace App\Http\Controllers;

use App\Actions\Comment\StoreComment;
use App\Http\Requests\StoreCommentRequest;
use App\Models\Blog;
use Illuminate\Http\RedirectResponse;

class CommentController extends Controller
{
    public function store(StoreCommentRequest $request, Blog $blog, StoreComment $createAction): RedirectResponse
    {
        $createAction->handle($request->toDTO(), $blog);

        return back()->with('success', 'Komentar berhasil dikirim.');
    }
}
