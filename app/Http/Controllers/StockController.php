<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\StockService;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function get()
    {
        return StockService::get();
    }
    public function getStockSorties()
    {
        return StockService::getStockSorties();
    }
    public function addstock(Request $request)
    {
        return StockService::addstock($request);
    }
}
