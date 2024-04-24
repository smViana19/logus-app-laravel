<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Gate;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __invoke()
    {
        // Criando um usuário e dando permissão de admin
        $user = \App\Models\User::factory()->create();
        auth()->login($user);
        $user->assignPermission('admin');

        Gate::authorize('admin');

        return 'Você é um admin';
    }
}
