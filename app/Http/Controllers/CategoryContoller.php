<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Services\CategoryServices;
use Illuminate\Http\Request;

class CategoryContoller extends Controller
{
    public function get()
    {
        return CategoryServices::get();
    }
    public function store(Request $request)
    {
        return CategoryServices::store($request);
    }
    public function update($id, Request $request)
    {
        return CategoryServices::update($id, $request);
    }
    public function delete($id)
    {
        return CategoryServices::delete($id);
    }
}
