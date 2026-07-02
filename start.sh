#!/bin/bash


# Run Laravel database migrations (create tables)
php artisan migrate --force

# Jalankan Seeder JIKA variabel environment RUN_SEEDERS=true
if [ "$RUN_SEEDERS" = "true" ]; then
    echo "Menjalankan Database Seeders..."
    php artisan db:seed --force
fi

# Clear and cache configurations for performance
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Start Apache in the foreground
apache2-foreground
