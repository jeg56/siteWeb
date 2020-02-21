
 <?php
    $dir = 'sqlite:./../bdd/connexions.sqlite';
    $dbh  = new PDO($dir);

    $id = isset($_POST['id']) ? $_POST['id'] : 'null';
    $message = isset($_POST['message']) ? $_POST['message'] : 'null';

  	$query =  "update connexion set ERROR_CONNEXION='$message' where id=$id" ;

    $dbh->query($query)
?>

