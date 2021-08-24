<?php
if(isset($_POST['S2_tel'])){
	$S2_name = $_POST['S2_name'];
	$S2_tel = $_POST['S2_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Size 2';

	$message = "
		
		Name: ".htmlspecialchars($S2_name)."
		Telephone: ".htmlspecialchars($S2_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>