<?php

namespace App\Http\Controllers;

use App\Services\SubProductService;
use Illuminate\Http\Request;

class SubProductController extends Controller
{
    
    public function get()
    {
        return SubProductService::get();
    }
    public function store(Request $request)
    {
        return SubProductService::store($request);
    }
    public function update($id, Request $request)
    {
        return SubProductService::update($id, $request);
    }
    public function delete($id)
    {
        return SubProductService::delete($id);
    }

}
