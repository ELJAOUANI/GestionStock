<?php
namespace App\Http\Controllers;

use App\Services\EmployeGroupService;


class EmployeeGroupController extends Controller
{
   public function index()
    {
    return EmployeGroupService::index();
    }
    public function getGroupEmployee($id)
    {
        return EmployeGroupService::getGroupEmployee($id);
    }
}