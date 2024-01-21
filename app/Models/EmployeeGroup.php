<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeGroup extends Model
{
    use HasFactory;

    protected $table = 'employees_group';

    protected $fillable = [
        'employee_id',
        'group_id',
    ];

    public function employees()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}
