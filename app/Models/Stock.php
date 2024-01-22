<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Stock extends Model
{
    
    use HasFactory , SoftDeletes;
    protected $table = 'stock';
   

    protected $fillable = ['group_id','movement_type','product_id', 'sub_product_id', 'quantity','sortie_id'];


    public function product()
    {
        return $this->belongsTo(Products::class);
    }

    public function subProduct()
    {
        return $this->belongsTo(SubProduct::class);
    }
  
    public function group(){
       return $this->belongsTo(Group::class) ;
    }

 
}
