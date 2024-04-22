<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Auth\Guard;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

   

    public function permissions(): BelongsToMany
    {
        /*
    Metodo permissions() ---- 
    Este método é uma relação definida no modelo que retorna todas as permissões associadas a essa entidade. 
    É uma relação de "muitos para muitos" através do método belongsToMany()
    */
        return $this->belongsToMany(Permission::class);
    }

    // public function hasPermission(string $permission): bool
    // {
    //     /**
    //      * Método hasPermission(string $permission): 
    //      * Este método verifica se a entidade atual tem uma permissão específica. 
    //      * Ele recebe o nome da permissão como uma string e realiza uma consulta na tabela de relacionamento entre entidades e permissões
    //      * e um registro correspondente for encontrado, significa que a entidade possui a permissão, e o método retornará true. Caso contrário, retornará false.
    //      */
    //     return $this->permissions()->where('name', $permission)->exists();
    // }

    public function assignPermission(string $permission): void
    {
        /*
        * Método assignPermission(string $permission): 
        Este método é responsável por atribuir uma nova permissão à entidade
        */
        $permission = $this->permissions()->firstOrCreate([
            'name' => $permission,
        ]);

        $this->permissions()->attach($permission);
    }

    public function hasPermission(string $permission): bool
    {
        return $this->permissions()->where('name', $permission)->exists();
    }
}
