<?php

  $to = "info@mccollcabinets.com.au";
  $subject = "Mail sent from landing page McColl Cabinet Makers";
  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $suburb = $_POST["suburb"];
  $email = $_POST["email"];
  $enquiry = $_POST["enquiry"];
  $textenquiry = $_POST["textenquiry"];

  $message = "Name: $name \n";
  $message.= "Phone: $phone \n";
  $message.= "Suburb: $suburb \n";
  $message.= "Email: $email \n";
  $message.= "Enquiry: $enquiry \n";
  $message.= "Message: $textenquiry \n";

  $header = "From: McColl Cabinet Makers < info@mccollcabinets.com.au >\r\n";
  $header.= "Cc: < info@mccollcabinets.com.au >\r\n";
  $header.= "X-Sender: McColl Cabinet Makers < info@mccollcabinets.com.au >\n";
  $header.= 'X-Mailer: PHP/' . phpversion();
  $header.= "MIME-Version: 1.0\r\n"; 
  $header.= "Content-Type: text/plain; charset=utf-8\r\n"; 
  $header.= "X-Priority: 1\r\n"; 
  
  if(mail($to, $subject, $message, $header)){
    echo json_encode('1');
  }else{
    echo json_encode('0');
  }  
?>
