<?php
	$id = isset($_POST['id']) ? $_POST['id'] : 'null';

	$to      = 'arnaud.jegoux@gmail.com';
	$subject = "Nvx utilisateur : $id";
	$message = "Utilisateur est cours de visite : $id";
	$headers = 'From: contact@arnaud-jegoux.fr' . "\r\n" .
	    'Reply-To: arnaud.jegoux@gmail.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
?>