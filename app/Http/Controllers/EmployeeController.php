<?php

namespace App\Http\Controllers;

use App\Services\EmployeeService;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function get()
    {
        return EmployeeService::get();
    }
    public function store(Request $request)
    {
        return EmployeeService::store($request);
    }
    public function update($id, Request $request)
    {
        return EmployeeService::update($id, $request);
    }
    public function delete($id)
    {
        return EmployeeService::delete($id);
    }
}
