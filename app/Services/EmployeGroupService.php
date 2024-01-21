<?php

namespace App\Services;

use App\Models\EmployeeGroup;

class EmployeGroupService
{


    public static function index()
    {
        try {
            // Retrieve employee group data
            $employeeGroups = EmployeeGroup::with('employees')->get();

            return response()->json(['employeeGroups' => $employeeGroups], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
    public static function getGroupEmployee($id)
    {
        try {
            $employeeGroup = EmployeeGroup::find($id);

            if (!$employeeGroup) {
                return response()->json(['error' => 'Employee group not found'], 404);
                }
            return response()->json(['employeeGroup' => $employeeGroup], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
}
