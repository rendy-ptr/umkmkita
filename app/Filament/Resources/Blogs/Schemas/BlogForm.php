<?php

namespace App\Filament\Resources\Blogs\Schemas;

use App\Enums\Category;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;

class BlogForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Hidden::make('user_id')->default(fn () => Auth::id()),
                TextInput::make('title')->required()->maxLength(255)->columnSpanFull(),
                Textarea::make('description')->required()->columnSpanFull(),
                FileUpload::make('hero_image')->image()->disk('public')->directory('blogs')->required()->columnSpanFull(),
                Select::make('category')
                    ->multiple()
                    ->options(Category::class)
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('quote')->nullable()->columnSpanFull(),
                Repeater::make('content_blocks')
                    ->schema([
                        TextInput::make('subheading')->required(),
                        Textarea::make('paragraph')->required(),
                    ])
                    ->columnSpanFull()
                    ->nullable(),
                Toggle::make('is_published')
                    ->label('Publish Blog')
                    ->default(false),
                DateTimePicker::make('published_at')
                    ->disabled()
                    ->dehydrated(false)
                    ->helperText('Otomatis terisi saat artikel dipublish.'),
            ]);
    }
}
