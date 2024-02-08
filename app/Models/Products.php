<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Products extends Model
{
    use HasFactory , SoftDeletes;
    protected $table = 'products';
    
    protected $fillable = ['current_stock','name', 'description', 'price', 'category_id', 'supplier_id', 'quantity' , 'created_by'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
  

    public function fournisseur()
    {
        return $this->belongsTo(Fournisseur::class , "supplier_id");
    }
    public function subProducts()
    {
        return $this->hasMany(SubProduct::class);
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
    // protected static function boot()
    // {
    //     parent::boot();

    //     static::created(function ($product) {
    //         // Implement the logic to update the stock here
    //         // You can create a new stock entry or update an existing one
    //         $product->updateStock();
    //     });
    // }

    // public function updateStock()
    // {
    //     // Implement the logic to update the stock
    //     // For example, you can create a new stock entry
    //     Stock::create([
    //         'product_id' => $this->id,
    //         'quantity' => $this->quantity ,// Set the initial quantity as needed
    //         'sub_product_id' => $this->sub_product_id ,// Set the initial quantity as needed
    //         'group_id' => $this->group_id // Set the initial quantity as needed

    //     ]);

    // }

    public function stocks()
    {
        return $this->hasMany(Stock::class, 'product_id');
    }

    // ... other methods and attributes ...

    public function refreshCurrentStock()
    {
        // Calculate current stock
        $currentStock = $this->getCurrentStockAttribute();

        // Save the calculated current stock to the database
        $this->update(['current_stock' => $currentStock]);
    }
    public function getCurrentStockAttribute()
    {
        $incomingStock = $this->stocks()->where('movement_type', 'IN')->sum('quantity');
        $outgoingStock = $this->stocks()->where('movement_type', 'OUT')->sum('quantity');
        $availableStock = $incomingStock - $outgoingStock;
        return max(0, $availableStock);
    }
}
