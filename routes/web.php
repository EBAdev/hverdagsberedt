<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/', function () { return Inertia::render( 'HomePage' ); })->name("home");
Route::get('/about', function () { return Inertia::render( 'AboutPage' ); })->name("about");
Route::get('/contact', function () { return Inertia::render( 'ContactPage' ); })->name("contact");
