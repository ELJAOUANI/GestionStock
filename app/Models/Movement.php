<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movement extends Model
{
    use HasFactory ,SoftDeletes;
    protected $fillable = ['stock_id', 'quantity', 'type'];

    public function stock()
    {
        return $this->belongsTo(Stock::class);
    }
}
