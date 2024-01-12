<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'poste',
        'hire_date',
        'date_of_birth',
        'salaire',
        'bank_account_number',
        'education_level',
        'employment_status',
        'address',
        'city',
        'gender',
        'notes',
    ];
}
