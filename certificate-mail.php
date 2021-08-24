<?php
if(isset($_POST['C_tel'])){
	$C_name = $_POST['C_name'];
	$C_tel = $_POST['C_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Certificate RE-CALL';

	$message = "
		
		Name: ".htmlspecialchars($C_name)."
		Telephone: ".htmlspecialchars($C_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>