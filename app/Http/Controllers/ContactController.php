<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactInquiry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Contact');
    }

    public function store(StoreContactRequest $request): RedirectResponse
    {
        Mail::to(config('site.contact_email'))->send(
            new ContactInquiry($request->validated())
        );

        return back()->with('success', 'Thank you for reaching out. We\'ll be in touch soon.');
    }
}
