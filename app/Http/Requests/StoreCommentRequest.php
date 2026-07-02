<?php

namespace App\Http\Requests;

use App\Data\StoreCommentData;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreCommentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if (Auth::check()) {
            return [
                'content' => 'required|string',
            ];
        }

        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'content' => 'required|string',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'email.unique' => 'Email ini sudah terdaftar sebagai penulis. Silakan login untuk berkomentar.',
        ];
    }

    public function toDTO(): StoreCommentData
    {
        return StoreCommentData::fromRequest($this->validated(), Auth::id());
    }
}
