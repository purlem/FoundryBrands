<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/how-we-grow', fn () => Inertia::render('HowWeGrow'))->name('how-we-grow');
Route::get('/portfolio', fn () => Inertia::render('Portfolio'))->name('portfolio');
Route::get('/partner', fn () => Inertia::render('Partner'))->name('partner');

Route::get('/contact', [ContactController::class, 'create'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::get('/docs/story', fn () => Inertia::render('Docs/Story'))->name('docs.story');
Route::get('/docs/story/mood-board', fn () => Inertia::render('Docs/MoodBoard'))->name('docs.story.mood-board');
Route::get('/docs/story/proof', fn () => Inertia::render('Docs/Proof'))->name('docs.story.proof');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
