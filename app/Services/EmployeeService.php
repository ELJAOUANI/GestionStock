<?php

namespace App\Services;

use App\Models\Employee;
use Carbon\Carbon;

class EmployeeService
{

    public static function get()
    {
        try {
            $currentMonth = Carbon::now()->startOfMonth();
            $currentYear = Carbon::now()->year;
            return response()->json([
                'employe' => Employee::orderBy('created_at', 'DESC')->get(),
                "kpis" => [
                    'total_employe' => Employee::count(),
                    'masse_salarial' => Employee::whereYear('created_at', $currentYear)
                        ->whereMonth('created_at', $currentMonth->month)
                        ->sum('salaire'),
                    'employee_payee' => Employee::whereYear('created_at', $currentYear)
                        ->whereMonth('created_at', $currentMonth->month)
                        ->where('employment_status', 'payee') // Assuming '0' represents payee
                        ->count(),
                    'employee_no_payee' =>  Employee::whereYear('created_at', $currentYear)
                        ->whereMonth('created_at', $currentMonth->month)
                        ->where('employment_status', 'nopaye') // Assuming '1' represents non-payee
                        ->count()

                ]
            ]);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 500);
        }
    }

    public static function store($request)
    {

        try {
            $employe = new Employee($request->all());
            $employe->save();
            return response()->json([
                "employe" => $employe
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
            return response()->json(['employe' => $employe], 200);
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
