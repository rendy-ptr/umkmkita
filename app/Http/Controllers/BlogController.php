<?php

namespace App\Http\Controllers;

use App\Enums\Category;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();

        return inertia('blog/index', [
            'blogs' => $blogs,
            'categories' => Category::options(),
        ]);
    }

    public function show(int $id)
    {
        $blog = Blog::find($id);

        if (! $blog) {
            abort(404);
        }

        $otherBlogs = collect(Blog::all())
            ->filter(fn ($b) => $b['id'] !== $id)
            ->take(3)
            ->values()
            ->toArray();

        return inertia('blog/show/index', [
            'blog' => $blog,
            'otherBlogs' => $otherBlogs,
        ]);
    }
}
