<?php

namespace App\Enums;

enum Category: string
{
    case COMPANY_PROFILE = 'company-profile';
    case ECOMMERCE = 'e-commerce';
    case GOVERNMENT = 'government';
    case LANDING_PAGE = 'landing-page';
    case TIPS_WEBSITE = 'tips-website';
    case AI_AND_TECHNOLOGY = 'ai-and-technology';
    case BRANDING = 'branding';
    case MARKETING = 'marketing';
    case EDUCATION = 'education';
    case BOOKING = 'booking';

    public function label(): string
    {
        return match ($this) {
            self::COMPANY_PROFILE => 'Company Profile',
            self::ECOMMERCE => 'E-Commerce',
            self::GOVERNMENT => 'Government',
            self::LANDING_PAGE => 'Landing Page',
            self::TIPS_WEBSITE => 'Tips Website',
            self::AI_AND_TECHNOLOGY => 'AI and Technology',
            self::BRANDING => 'Branding',
            self::MARKETING => 'Marketing',
            self::EDUCATION => 'Education',
            self::BOOKING => 'Booking',
        };
    }

    public static function options(): array
    {
        return array_map(fn ($enum) => [
            'value' => $enum->value,
            'label' => $enum->label(),
        ], self::cases());
    }
}
