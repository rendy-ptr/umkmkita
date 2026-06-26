<?php

use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\get;

test('home page returns a successful response', function () {
    get(route('home'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('home/index'));
});

test('layanan page returns a successful response', function () {
    get(route('layanan'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('layanan/index'));
});

test('portfolio page returns a successful response', function () {
    get(route('portfolio'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('portfolio/index'));
});

test('harga page returns a successful response', function () {
    get(route('harga'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('harga/index'));
});

test('blog page returns a successful response', function () {
    get(route('blog'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('blog/index'));
});

test('promo page returns a successful response', function () {
    get(route('promo'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('promo/index'));
});
