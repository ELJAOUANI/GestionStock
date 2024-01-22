<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryContoller;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmployeeGroupController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SubProductController;
use App\Http\Controllers\StockController;

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
route::prefix('category')->group(function()
{
    route::put('/update/{id}',[CategoryContoller::class,'update']);
    route::get('/get',[CategoryContoller::class,'get']);
Route::post('/store', [CategoryContoller::class, 'store']);
Route::delete('/delete/{id}', [CategoryContoller::class, 'delete']);
});
route::prefix('product')->group(function () {
    route::put('/update/{id}', [ProductController::class, 'update']);
    route::get('/get', [ProductController::class, 'get']);
    route::get('/getcate', [ProductController::class, 'getProductsByCategory']);
    Route::post('/store', [ProductController::class, 'store']);
    Route::post('/stockout', [ProductController::class, 'stockout']);
    Route::delete('/delete/{id}', [ProductController::class, 'delete']);
    Route::get('/get/{id}', [ProductController::class, 'getById']);
});
route::prefix('subproduct')->group(function () {
    route::put('/update/{id}', [SubProductController::class, 'update']);
    route::get('/get', [SubProductController::class, 'get']);
    Route::post('/store', [SubProductController::class, 'store']);
    Route::delete('/delete/{id}', [SubProductController::class, 'delete']);
});
route::prefix('employe')->group(function () {
    route::put('/update/{id}', [EmployeeController::class, 'update']);
    route::get('/get', [EmployeeController::class, 'get']);
    Route::post('/store', [EmployeeController::class, 'store']);
    Route::delete('/delete/{id}', [EmployeeController::class, 'delete']);
});
route::prefix('stock')->group(function () {
    route::post('/sortie', [StockController::class, 'getStockForProducts']);
    route::get('/get', [StockController::class, 'get']);
    route::get('/getstocksorties', [StockController::class, 'getStockSorties']);
    Route::post('/store' , [StockController::class, 'addstock']);
    Route::put('/updateStock/{id}' , [StockController::class, 'updateStock']);
    

});
route::prefix('group')->group(function () {
    route::post('/store', [GroupController::class, 'store']);
    route::post('/assign/{groupid}', [GroupController::class, 'assignEmployeeToGroup']);
    route::get('/get', [GroupController::class, 'get']);
    Route::post('/assignstock{groupId}', [GroupController::class, 'assignStockToGroup']);
    Route::delete('/delete/{groupId}', [GroupController::class, 'delete']);
});
route::prefix('group_emp')->group(function () {
    route::post('/store', [GroupController::class, 'store']);
    route::post('/assign/{groupid}', [GroupController::class, 'assignEmployeeToGroup']);
    Route::get('/getGroupEmployee/{id}', [EmployeeGroupController::class, 'getGroupEmployee']);
    route::get('/index', [EmployeeGroupController::class, 'index']);
    Route::post('/assignstock{groupId}', [GroupController::class, 'assignStockToGroup']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
