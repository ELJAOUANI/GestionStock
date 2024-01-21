<?php

namespace App\Http\Controllers;

use App\Services\GroupService;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function assignEmployeeToGroup(Request $request, $groupid)
    {
        return GroupService::assignEmployeeToGroup($request, $groupid);
    }
    public function assignStockToGroup(Request $request, $groupid)
    {
        return GroupService::assignStockToGroup($request, $groupid);
    }
    public function store(Request $request)
    {
        return GroupService::store($request);
    }
    public function get()
    {
        return GroupService::get();
    }
    public function delete($id)
    {
        return GroupService::delete($id);
    }
}
