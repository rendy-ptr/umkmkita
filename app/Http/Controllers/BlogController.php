<?php

namespace App\Http\Controllers;

use App\Actions\Blog\GetFilteredBlogs;
use App\Data\BlogFilterData;
use App\Enums\Category;
use App\Http\Requests\BlogFilterRequest;
use App\Repositories\BlogRepository;

class BlogController extends Controller
{
    public function __construct(
        private BlogRepository $blogRepository
    ) {}

    public function index(BlogFilterRequest $request)
    {
        $dto = BlogFilterData::from($request->validated());

        $blogs = GetFilteredBlogs::run($dto);

        return inertia('blog/index', [
            'blogs' => $blogs,
            'filters' => $dto,
            'categories' => Category::options(),
        ]);
    }

    public function show(int $id)
    {
        $blog = $this->blogRepository->getById($id);

        if (! $blog) {
            abort(404);
        }

        $otherBlogs = $this->blogRepository->getRelatedBlogs($id, 3);

        return inertia('blog/show/index', [
            'blog' => $blog,
            'otherBlogs' => $otherBlogs,
        ]);
    }
}
