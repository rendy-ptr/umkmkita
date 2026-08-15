<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrackVisitor
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            Visitor::firstOrCreate([
                'ip_address' => $request->ip(),
                'date' => now()->toDateString(),
            ]);
        } catch (\Exception $e) {
        }

        return $next($request);
    }
}
