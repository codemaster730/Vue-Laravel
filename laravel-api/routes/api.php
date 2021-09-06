<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
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
Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

Route::middleware('auth:api')->group( function () {
//     return $request->user();
    Route::post('message', [MessageController::class, 'store']);
    Route::get('messages', [MessageController::class, 'index']);
    Route::delete('message/{id}', [MessageController::class, 'remove']);
    Route::get('users', [UserController::class, 'index']);
});
