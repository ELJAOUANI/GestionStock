<?php

namespace App\Http\Controllers;

use App\Services\ProductsService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function get()
    {
        return ProductsService::get();
    }
    public function getById($id)
    {
        return ProductsService::getById($id);
    }
    public function store(Request $request)
    {
        return ProductsService::store($request);
    }
    public function getProductsByCategory(Request $request)
    {
        return ProductsService::getProductsByCategory($request);
    }
    public function stockout(Request $request)
    {
        return ProductsService::stockout($request);
    }
    public function update($id, Request $request)
    {
        return ProductsService::update($id, $request);
    }

    public function delete($id)
    {
        return ProductsService::delete($id);
    }
}
