<?php

namespace App\Http\Controllers;

use App\Services\DashboardService;

class DashboardController extends Controller
{
    public function dashboard()
    {
        return DashboardService::dashboard();
    }
}