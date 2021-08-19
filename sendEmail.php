<?php 
use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['name']) && isset($_POST['email']) ){
    $name =  $_POST['name'];
    $lastname =  $_POST['lastname'];
    $email =  $_POST['email'];
    $telephone =  $_POST['telephone'];
    $body = $_POST['body'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "";
    $mail->Password = '';
    $mail->Port  = 465;
    $mail->SMTPSecure = "ssl";
    
    //email settings
    $mail->isHTML(true);
    $mail->setFrom($email,$name.''.$lastname);
    $mail->addAddress("");
    $mail->Subject = ("$email");
    $mail->Body  = $body;

    if($mail->send()){
        $status ="success";
        $response ="Email is sent";
    }else{
        $status = "failed";
        $response ="Something is wrong <br>".$mail->ErrorInfo;
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
    

}

?>