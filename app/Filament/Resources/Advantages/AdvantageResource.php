<?php

namespace App\Filament\Resources\Advantages;

use App\Enums\Icon;
use App\Filament\Resources\Advantages\Pages\ManageAdvantages;
use App\Models\Advantage;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class AdvantageResource extends Resource
{
    protected static ?string $model = Advantage::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-light-bulb';

    protected static string|\UnitEnum|null $navigationGroup = 'Manajemen Konten';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('icon')
                    ->label('Icon')
                    ->options(Icon::class)
                    ->required(),
                TextInput::make('title')->required()->maxLength(255)->columnSpanFull(),
                Textarea::make('description')->required()->columnSpanFull(),
                Toggle::make('is_published')
                    ->label('Publish Advantage')
                    ->default(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->searchable()->limit(50)->label('Judul'),
                TextColumn::make('description')->searchable()->limit(50)->label('Deskripsi'),
                ToggleColumn::make('is_published')->label('Published'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageAdvantages::route('/'),
        ];
    }
}
