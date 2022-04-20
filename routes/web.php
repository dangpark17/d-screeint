<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CambioController;
use App\Http\Controllers\DofController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});
Route::resource('fixer', CambioController::class)->middleware('auth');
Route::resource('dof', DofController::class)->middleware('auth');
Auth::routes();

Route::get('/home', [HomeController::class,'index'])->name('home');

Route::group(['middleware'=>'auth'],function(){
    Route::get('/', [HomeController::class,'index'])->name('home');
});
