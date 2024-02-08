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
    public function getStockEntries()
    {
        return StockService::getStockEntries();
    }
    public function addstock(Request $request)
    {
        return StockService::addstock($request);
    }
    public function getStockSortieById($id)
    {
        return StockService::getStockSortieById($id);
    }
    public function updateStockOut(Request $request, $sortieId)
    {
        return StockService::updateStockOut($request, $sortieId);
    }
   
}
