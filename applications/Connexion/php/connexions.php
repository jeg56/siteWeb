<?php

    $dir = 'sqlite:./../bdd/connexions.sqlite';
    $dbh  = new PDO($dir);

    $id = isset($_POST['id']) ? $_POST['id'] : 'null';
    $browser = isset($_POST['Browser']) ? $_POST['Browser'] : 'null';

  	$query =  "SELECT count(*) FROM connexion where id= $id " ;
  
    foreach ($dbh->query($query) as $row)	
    {
        if ($row[0]==0) {
    		$query =  "insert into connexion (ID,FIRST_CONNECTION,NAVIGATEUR,LAST_CONNECTION,NBRE_VISITE) values ((select max(ID)+1 from connexion),datetime('now','localtime'),'$browser',datetime('now','localtime'),1);";
    		$dbh->query($query);

    		// lecture
			$query =  "SELECT ID  FROM connexion where id= (select max(ID) from connexion);" ;
			foreach ($dbh->query($query) as $row)
			{
				$id = $row['ID'];	
				$return_arr[] = array("ID" => $id);			 
			}
			echo json_encode($return_arr);

		} else {
    		$query =  "update connexion set NAVIGATEUR='$browser', LAST_CONNECTION=datetime('now','localtime'),NBRE_VISITE=(select NBRE_VISITE+1 from connexion where id= $id) where id= $id;";
    		$dbh->query($query);

    		// lecture
			$query =  "SELECT ID, LAST_CONNECTION  FROM connexion where id= $id " ;
			foreach ($dbh->query($query) as $row)
			{
				$id = $row['ID'];
			 	$LAST_CONNECTION = $row['LAST_CONNECTION'];

			 	$return_arr[] = array("ID" => $id,
			 							"LAST_CONNECTION" => $LAST_CONNECTION );		 
			}
				echo json_encode($return_arr);
		}

    }

?>

