	
 <?php
    $dir = 'sqlite:./../bdd/connexions.sqlite';
    $dbh  = new PDO($dir);

    $id = isset($_POST['id']) ? $_POST['id'] : 'null';
    $latitude = isset($_POST['latitude']) ? $_POST['latitude'] : 'null';
    $longitude = isset($_POST['longitude']) ? $_POST['longitude'] : 'null';

  	$query =  "update  connexion set latitude=$latitude,longitude=$longitude where id=$id" ;

    $dbh->query($query)
?>

