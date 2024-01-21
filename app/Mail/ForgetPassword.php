<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgetPassword extends Mailable
{
    use Queueable, SerializesModels;

    protected $user, $password;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, $password)
    {
        $this->user = $user;
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('eljaouanihamza98@gmail.com', 'Castle Food Support')
            ->markdown('emails.forget-password', [
                'full_name' => $this->user->name, // Adjust this based on your User model's name attribute
                'password' => $this->password
            ])->subject('Réinitialisation de mot de passe');
    }
}
