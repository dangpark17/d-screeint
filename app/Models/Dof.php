<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dof extends Model
{
    use HasFactory;
    protected $table = 'dofs';
    protected $primaryKey = 'id';
    protected $fillable = [
        'dia',
        'valor'
    ];
}
