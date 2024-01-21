<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupStock extends Model
{
    use HasFactory;

    protected $fillable = ['group_id', 'stock_id', 'quantity'];

    public function stock()
    {
        return $this->belongsTo(Stock::class);
    }
}
