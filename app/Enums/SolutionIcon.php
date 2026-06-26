<?php

namespace App\Enums;

use Filament\Support\Contracts\HasLabel;

enum SolutionIcon: string implements HasLabel
{
    case ARMCHAIR = 'Armchair';
    case BANKNOTE = 'Banknote';
    case CHART_LINE = 'ChartLine';
    case FILE_TEXT = 'FileText';
    case MESSAGE_SQUARE_TEXT = 'MessageSquareText';
    case PANELS_TOP_LEFT = 'PanelsTopLeft';
    case TRUCK = 'Truck';
    case UTENSILS_CROSSED = 'UtensilsCrossed';

    // Tambahan Icon Umum (Banyak)
    case SHIELD_CHECK = 'ShieldCheck';
    case ZAP = 'Zap';
    case GLOBE = 'Globe';
    case SMARTPHONE = 'Smartphone';
    case LAPTOP = 'Laptop';
    case USERS = 'Users';
    case ROCKET = 'Rocket';
    case TRENDING_UP = 'TrendingUp';
    case CLOUD = 'Cloud';
    case CODE = 'Code';
    case DATABASE = 'Database';
    case LOCK = 'Lock';
    case SEARCH = 'Search';
    case SHOPPING_CART = 'ShoppingCart';
    case STAR = 'Star';
    case WRENCH = 'Wrench';
    case HEART = 'Heart';
    case CAMERA = 'Camera';
    case HEADPHONES = 'Headphones';
    case MAP_PIN = 'MapPin';
    case CALENDAR = 'Calendar';
    case BELL = 'Bell';

    public function getLabel(): ?string
    {
        return preg_replace('/(?<!^)[A-Z]/', ' $0', $this->value);
    }
}
