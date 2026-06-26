<?php

namespace App\Enums;

enum Service: string
{
    case DESIGN_AND_DEV = 'Design & Dev';
    case SHOPIFY_OR_CUSTOM_DEV = 'Shopify / Custom Dev';
    case MARKETING = 'Marketing';
    case MAINTENANCE = 'Maintenance';

    // public function label(): string
    // {
    //     return match($this) {
    //         self::DESIGN_AND_DEV => 'Design & Development',
    //         self::SHOPIFY_OR_CUSTOM_DEV => 'E-commerce Platform',
    //         self::MARKETING => 'Digital Marketing',
    //         self::MAINTENANCE => 'Maintenance & Support',
    //     };
    // }
}
