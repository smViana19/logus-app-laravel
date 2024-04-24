<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('cadastrar'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


//rota de teste

Route::middleware(['auth', 'can:aluno'])->group(function () {
    Route::get('/teste', function() {
        // Encontre o usuário com ID 1
        $user = User::find(1);

        // Verifica se o usuário existe
        if ($user) {
            // Atribua a permissão de aluno ao usuário
            $user->assignPermission('aluno');

            // Faça login como o usuário
            Auth::login($user);
        } else {
            // Se o usuário não existir, emita um aviso
            return "Usuário com ID 1 não encontrado.";
        }

        return view('teste');
    });
});

//rota da agenda
Route::get('/agenda', function () {
    return Inertia::render('Agenda');
})->middleware(['auth', 'verified'])->name('agenda');


//rota da agenda
Route::get('/posts', function () {
    return Inertia::render('Posts');
})->middleware(['auth', 'verified'])->name('posts');

//rota do método pomodoro
Route::get('/pomodoro', function () {
    return Inertia::render('Pomodoro');
})->middleware(['auth', 'verified'])->name('pomodoro');








require __DIR__.'/auth.php';
