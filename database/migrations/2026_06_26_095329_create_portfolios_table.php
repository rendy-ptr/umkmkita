<?php

use App\Enums\Service;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('tagline');
            $table->string('client');
            $table->enum('service', array_column(Service::cases(), 'value'));
            $table->string('year', 4);
            $table->string('hero_image');
            $table->json('category');
            $table->json('content_blocks')->nullable();
            $table->text('challenge')->nullable();
            $table->json('solution')->nullable();
            $table->json('gallery')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};
