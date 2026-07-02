<?php

namespace App\Repositories;

use App\Data\BlogFilterData;
use App\Models\Blog;
use Illuminate\Pagination\LengthAwarePaginator;

class BlogRepository
{
    public function getFilteredPaginated(BlogFilterData $filters, int $perPage = 10): LengthAwarePaginator
    {
        $query = Blog::query()
            ->with('user')
            ->withCount('comments')
            ->where('is_published', true)
            ->when(
                $filters->search,
                fn ($query, $searchTerm) => $query->whereRaw('LOWER(title) LIKE LOWER(?)', ["%{$searchTerm}%"])
            )
            ->when(
                $filters->category,
                fn ($query, $category) => $query->whereJsonContains('category', $category)
            );

        return $query->paginate($perPage)->withQueryString();
    }

    public function getAll()
    {
        return Blog::query()
            ->with('user')
            ->withCount('comments')
            ->where('is_published', true)
            ->get();
    }

    public function getById(int $id)
    {
        return Blog::query()
            ->with(['user', 'comments.user'])
            ->withCount('comments')
            ->where('is_published', true)
            ->findOrFail($id);
    }

    public function getRelatedBlogs(int $excludeId, int $limit = 3)
    {
        return Blog::query()
            ->with('user')
            ->withCount('comments')
            ->where('is_published', true)
            ->where('id', '!=', $excludeId)
            ->limit($limit)
            ->get();
    }

    public function getLatestBlogs(int $limit = 3)
    {
        return Blog::query()
            ->with('user')
            ->withCount('comments')
            ->where('is_published', true)
            ->orderBy('published_at', 'desc')
            ->limit($limit)
            ->get();
    }
}
