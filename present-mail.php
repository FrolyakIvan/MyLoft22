<?php
if(isset($_POST['P_tel'])){
	$P_name = $_POST['P_name'];
	$P_tel = $_POST['P_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Present Buy';

	$message = "
		
		Name: ".htmlspecialchars($P_name)."
		Telephone: ".htmlspecialchars($P_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>