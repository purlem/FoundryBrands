<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactInquiry extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param  array{name: string, email: string, role: string, message: string}  $inquiry
     */
    public function __construct(public array $inquiry) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Contact Inquiry — Experience Foundry',
            replyTo: [$this->inquiry['email']],
        );
    }

    public function content(): Content
    {
        return new Content(
            text: 'mail.contact-inquiry',
        );
    }
}
