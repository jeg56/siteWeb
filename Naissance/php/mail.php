<?php

    $adresse = isset($_POST['adresse']) ? $_POST['adresse'] : 'null';
    $pseudo = isset($_POST['pseudo']) ? $_POST['pseudo'] : 'null';
    $datenaisssance = isset($_POST['datenaisssance']) ? $_POST['datenaisssance'] : 'null';
    $sexe = isset($_POST['sexe']) ? $_POST['sexe'] : 'null';
    $prenom = isset($_POST['prenom']) ? $_POST['prenom'] : 'null';

	$to      = $adresse;
	$subject = "Jeux Naissance";
	$message = "   Bonjour $pseudo, <br> Ci-dessous vos pronos : <br> - Date de naissance :   $datenaisssance <br> - Sexe :  $sexe  <br> - Prénom : $prenom  <br> <br> Merci pour votre participation!! <br><br> Stéphanie et Arnaud "; 
	$headers = 'From: Steph et Arnaud <contact@arnaud-jegoux.fr>' . "\r\n" .
			'Cc: arnaud.jegoux@gmail.com,stephanie_demay@hotmail.fr' . "\r\n" .
			'Content-type: text/html; charset=UTF-8' . "\r\n" .
			'Reply-To: arnaud.jegoux@gmail.com,stephanie_demay@hotmail.fr' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();


	mail($to, $subject, $message, $headers);


?>


