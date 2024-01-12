<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FournisseurController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// routes/api.php


Route::prefix('auth')->group(function(){
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/forget-password', [AuthController::class, 'forgetPassword']);
    Route::post('/check-authentication', [AuthController::class,'checkAuthentication']);
  

});
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::prefix('fournisseur')->group(function () {
    Route::post('/update/{id}', [FournisseurController::class, 'update']);
    Route::get('/index', [FournisseurController::class, 'index']);
    Route::post('/store', [FournisseurController::class, 'store']);
    Route::delete('/delete/{id}', [FournisseurController::class, 'delete']);
    Route::get('/export', [FournisseurController::class, 'export']);
    Route::post('/upload', [FournisseurController::class, 'upload']);
});


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
