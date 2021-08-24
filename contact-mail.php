<?php
if(isset($_POST['CT_tel'])){
	$CT_name = $_POST['CT_name'];
	$CT_tel = $_POST['CT_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Contact RE-CALL';

	$message = "
		
		Name: ".htmlspecialchars($CT_name)."
		Telephone: ".htmlspecialchars($CT_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>