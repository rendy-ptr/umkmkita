<?php

namespace App\Filament\Resources\Services\Schemas;

use App\Enums\Category;
use App\Enums\Icon;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('icon')
                    ->label('Icon')
                    ->options(Icon::class)
                    ->required(),
                Select::make('category')
                    ->label('Category')
                    ->options(Category::class)
                    ->required(),
                TextInput::make('title')
                    ->label('Title / Name')
                    ->required(),
                TextInput::make('price')
                    ->label('Price')
                    ->numeric()
                    ->prefix('Rp')
                    ->required(),
                Textarea::make('description')
                    ->label('Description')
                    ->columnSpanFull()
                    ->required(),
                TagsInput::make('benefits')
                    ->label('Benefits')
                    ->placeholder('New benefit (press enter)')
                    ->columnSpanFull()
                    ->required(),
                FileUpload::make('images')
                    ->label('Images')
                    ->multiple()
                    ->image()
                    ->disk('public')
                    ->directory('services')
                    ->columnSpanFull()
                    ->required(),
            ]);
    }
}
