<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use App\Enums\Category;
use App\Enums\Service;
use App\Enums\SolutionIcon;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Fieldset;
use Filament\Schemas\Schema;

class PortfolioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('tagline')
                    ->required(),
                TextInput::make('client')
                    ->required(),
                Select::make('service')
                    ->options(Service::class)
                    ->required(),
                TextInput::make('year')
                    ->required(),
                FileUpload::make('hero_image')
                    ->image()
                    ->disk('public')
                    ->directory('portfolios')
                    ->required(),
                Select::make('category')
                    ->options(Category::class)
                    ->multiple()
                    ->required(),
                Repeater::make('content_blocks')
                    ->label('Content Sections (Subheading + Paragraf)')
                    ->schema([
                        TextInput::make('subheading')->required(),
                        Textarea::make('paragraph')->required(),
                    ])
                    ->columnSpanFull(),
                Textarea::make('challenge')
                    ->columnSpanFull(),
                Fieldset::make('Solution')
                    ->schema([
                        Textarea::make('solution.text')
                            ->label('Solution Description')
                            ->required()
                            ->columnSpanFull(),
                        Repeater::make('solution.items')
                            ->label('Solution Points')
                            ->schema([
                                TextInput::make('title')->required(),
                                Textarea::make('desc')->required(),
                                Select::make('icon')
                                    ->label('Pilih Icon')
                                    ->options(SolutionIcon::class)
                                    ->searchable()
                                    ->required(),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columnSpanFull(),
                FileUpload::make('gallery')
                    ->image()
                    ->multiple()
                    ->columnSpanFull(),
            ]);
    }
}
