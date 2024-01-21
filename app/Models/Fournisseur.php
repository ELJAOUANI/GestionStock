<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Fournisseur extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'name_fournisseur',
        'raison_social',
        'adresse',
        'ville',
        'd_paiment',
        'm_paiment',
        'livraison',
        'commercial_name',
        'fix',
        'phone_no_1',
        'email',
        'commercial_phone',
        'commercial_email',
        'is_active',
        'type',
    ];
       public function subProducts()
    {
        return $this->hasMany(SubProduct::class);
    }
    

}


