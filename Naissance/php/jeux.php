<?php

    $dir = 'sqlite:./naissance.sqlite';
    $dbh  = new PDO($dir);

    $adresse = isset($_POST['adresse']) ? $_POST['adresse'] : 'null';
    $pseudo = isset($_POST['pseudo']) ? $_POST['pseudo'] : 'null';
    $datenaisssance = isset($_POST['datenaisssance']) ? $_POST['datenaisssance'] : 'null';
    $sexe = isset($_POST['sexe']) ? $_POST['sexe'] : 'null';
    $prenom = isset($_POST['prenom']) ? $_POST['prenom'] : 'null';

  	$query =  "SELECT count(*) FROM jeux where adresseMail= lower('$adresse') " ;

    foreach ($dbh->query($query) as $row)	
    {
        if ($row[0]==0) {
    		$query =  "insert into jeux (adresseMail,pseudo,datenaisssance,sexe,prenom) values (lower('$adresse'),'$pseudo','$datenaisssance','$sexe','$prenom');";
    		$dbh->query($query);

		} else {
    		$query =  "update jeux set datenaisssance='$datenaisssance',pseudo='$pseudo', sexe='$sexe',prenom='$prenom' where adresseMail= lower('$adresse');";
    		$dbh->query($query);
		}

    }

?>

