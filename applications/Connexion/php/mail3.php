<?php
    $adresse = isset($_POST['adresse']) ? $_POST['adresse'] : 'null';
    $datenaisssance = isset($_POST['datenaisssance']) ? $_POST['datenaisssance'] : 'null';
    $sexe = isset($_POST['sexe']) ? $_POST['sexe'] : 'null';
    $prenom = isset($_POST['prenom']) ? $_POST['prenom'] : 'null';

	$to      = $adresse;
	$subject = "Jeux Naissance";
	$message = "       <ul>  <li> Date de naissance :   $datenaisssance </li>    <li>Sexe :  $sexe </li>   <li>Prénom : $prenom </li> </ul>    " 
	$headers = 'From: contact@arnaud-jegoux.fr' . "\r\n" .
	    'Reply-To: arnaud.jegoux@gmail.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);


?>


