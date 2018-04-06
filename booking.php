<?php  

    $HTML = "";
    $cname = $_GET["client_name"];
//$_SESSION["email"] = $email;

    $cphone = $_GET["client_phone"];
  //  $_SESSION["fname"] = $fname;

    $email = $_GET["client_email"];
   // $_SESSION["surname"] = $surname;

    ini_set('SMTP','myserver');
    ini_set('smtp_port',25);
    $to = "$email";
    $subject = "Welcome to ShopOnline!";
    $message = "Dear ".$cname.", welcome to use ShopOnline! Your customer id is ".$cphone." and the password is ".$email." .";
    $headers = "From: Awais";

    mail($to,$subject,$message,$headers,"-r 100036063@student.swin.edu.au");

    $HTML = "$cname + $cphone + $email";
    echo $HTML;

?>