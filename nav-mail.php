<?php
if(isset($_POST['N_tel'])){
	$N_name = $_POST['N_name'];
	$N_tel = $_POST['N_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'NavBar RE-CALL';

	$message = "
		
		Name: ".htmlspecialchars($N_name)."
		Telephone: ".htmlspecialchars($N_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>