<?php
namespace App\Services;

use App\Models\Employee;
use App\Models\Fournisseur;
use App\Models\Products;
use App\Models\Stock;
use Carbon\Carbon;

class DashboardService
{
    public static function dashboard(){
        try{
            $currentMonth = Carbon::now()->month;
            $currentYear = Carbon::now()->year;
            return response()->json([
                "kpis" => [
                'total_employe' => Employee::count(),
                'total_products' => Products::count(),
                'total_fournisseur' =>Fournisseur::count(),
                'stock_entries' => Stock::where('movement_type', 'IN')->whereMonth('created_at', $currentMonth)->whereYear('created_at', $currentYear)->count(),
                ]

            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 409);
        }
    }

}
   