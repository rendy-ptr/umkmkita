<?php

namespace App\Filament\Resources\Prices\Schemas;

use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class PriceForm
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
                TextInput::make('price')
                    ->required(),
                TextInput::make('badge')
                    ->required(),
                TagsInput::make('benefits')
                    ->label('Benefits')
                    ->placeholder('New benefit (press enter)')
                    ->columnSpanFull()
                    ->required(),
            ]);
    }
}
