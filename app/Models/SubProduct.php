<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubProduct extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'name', 'stock_quantity', 'description', 'price', 'product_id', 'supplier_id', 'category_id'
    ];

    public function product()
    {
        return $this->belongsTo(Products::class);
    }

    public function fournisseur()
    {
        return $this->belongsTo(Fournisseur::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function isExpired()
    {
        return now()->greaterThan($this->expiry_date);
    }

    public function isValid()
    {
        // Add any additional conditions for validity checks
        return !$this->isExpired() && $this->stock_quantity > 0;
    }
    protected static function boot()
    {
        parent::boot();

        static::created(function ($subProduct) {
            $subProduct->updateStock();
        });
    }

    public function updateStock()
    {

        Stock::create([
            'sub_product_id' => $this->id,
            'quantity' => $this->stock_quantity, 
            'group_id' => $this->group_id ,
            'product_id' => $this->product_id,


           
        ]);
    }
}

