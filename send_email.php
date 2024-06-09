<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'serkaiz7@gmail.com';
  $subject = 'New Contact Form Submission';
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  
  $email_content = "<h1>New Contact Form Submission</h1>";
  $email_content .= "<p><strong>Name:</strong> $name</p>";
  $email_content .= "<p><strong>Email:</strong> $email</p>";
  $email_content .= "<p><strong>Message:</strong><br>$message</p>";
  
  if (mail($to, $subject, $email_content, $headers)) {
    echo "<p>Thank you for your message. It has been sent.</p>";
  } else {
    echo "<p>Sorry, something went wrong. Please try again later.</p>";
  }
} else {
  echo "<p>There was a problem with your submission. Please try again.</p>";
}
?>
