<?php

return array(
    'action' => 'http://yourdomain/modules/forms/submit.php',
    'forms' => array(
        'mailchimp' => array(
            'inputs_allowed'   => array( 'email' ),
            'inputs_required' => array( 'email' ),
            'message_success' => 'You was successfully subscribed!',
            'api_key' => '######',
            'list_id' => '######'
        ),
        'standard'  => array(
            'email'           => 'your@email.net',
            'email_subject'   => 'Mail from site',
            'inputs_allowed'   => array( 'name', 'lastname', 'email', 'subject', 'message' ),
            'inputs_required' => array( 'name', 'lastname', 'email', 'message' ),
            'message_success' => 'Your message was successfully sent!',
        )
    )
);
