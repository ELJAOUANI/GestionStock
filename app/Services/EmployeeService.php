<?php
namespace App\Services;

use App\Models\Employee;

class EmployeeService
{
    public static function get()
    {
        try {
            $employe = Employee::all();
            return response()->json(['employe' => $employe], 200);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 500);
        }
    }

    public static function store($request)
    {

        try {
            $employee = new Employee($request->all());
            $employee->save();
            return response()->json([
                "employee" => $employee
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ], 409);
        }
    }

    public static function update($id, $request)
    {
        try {
            $employe = Employee::findOrFail($id);
            $employe->update($request->all());
            $employe->refresh();
            return response()->json(['employee' => $employe], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    public static function delete($id)
    {
        try {
            $employe = Employee::findOrFail($id);
            $employe->delete();
            return response()->json([
                "employe" => $employe
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 409);
        }
    }
}
