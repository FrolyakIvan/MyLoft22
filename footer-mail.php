<?php
	if(isset($_POST['F_tel'])){
	$F_name = $_POST['F_name'];
	$F_tel = $_POST['F_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Footer RE-CALL';

	$message = "
		
		Name: ".htmlspecialchars($F_name)."
		Telephone: ".htmlspecialchars($F_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>