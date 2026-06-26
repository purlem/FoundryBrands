<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactTest extends TestCase
{
    public function test_contact_page_loads(): void
    {
        $this->get(route('contact'))->assertOk();
    }

    public function test_contact_form_sends_email(): void
    {
        Mail::fake();

        $this->post(route('contact.store'), [
            'name' => 'Jane Founder',
            'email' => 'jane@example.com',
            'role' => 'founder',
            'message' => 'Interested in partnering on my wellness brand.',
        ])->assertRedirect();

        Mail::assertSent(\App\Mail\ContactInquiry::class);
    }

    public function test_contact_form_validates_required_fields(): void
    {
        $this->post(route('contact.store'), [])
            ->assertSessionHasErrors(['name', 'email', 'role', 'message']);
    }
}
