<?php

	if(isset($_POST['S3_tel'])){
	$S3_name = $_POST['S3_name'];
	$S3_tel = $_POST['S3_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Size 3';

	$message = "
		
		Name: ".htmlspecialchars($S3_name)."
		Telephone: ".htmlspecialchars($S3_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>