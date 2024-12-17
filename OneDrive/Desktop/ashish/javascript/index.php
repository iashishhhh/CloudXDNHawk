<?php
// Check if the form is submitted using POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect form data and sanitize inputs
    $firstName = htmlspecialchars(trim($_POST['firstName']));
    $lastName = htmlspecialchars(trim($_POST['lastName']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate required fields
    if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
        echo 'All fields are required.';
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email format.';
        exit;
    }

    // Prepare email content
    $to = 'Ashishchaudharywork232@gmail.com'; // Replace with your desired email address
    $headers = 'From: ' . $email . "\r\n";
    $headers .= 'Reply-To: ' . $email . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";

    $emailSubject = 'New Contact Form Submission: ' . $subject;
    $emailBody = '
        <html>
        <head>
            <title>Contact Form Submission</title>
        </head>
        <body>
            <h2>Contact Form Details</h2>
            <p><strong>First Name:</strong> ' . $firstName . '</p>
            <p><strong>Last Name:</strong> ' . $lastName . '</p>
            <p><strong>Email:</strong> ' . $email . '</p>
            <p><strong>Subject:</strong> ' . $subject . '</p>
            <p><strong>Message:</strong><br>' . nl2br($message) . '</p>
        </body>
        </html>
    ';

    // Send email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo 'Thank you for your submission. We have received your message!';
    } else {
        echo 'There was an error sending your message. Please try again later.';
    }
} else {
    echo 'Invalid request method.';
}
?>
