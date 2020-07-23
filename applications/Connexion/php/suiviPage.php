 <?php
    $dir = 'sqlite:./../bdd/connexions.sqlite';
    $dbh  = new PDO($dir);

    $id = isset($_POST['id']) ? $_POST['id'] : 'null';
    $page = isset($_POST['page']) ? $_POST['page'] : 'null';
    echo $id;
    if ($id != 'null') {
  		$query =  "insert into page_visite (id,date_visite,page_visite) values($id,datetime('now','localtime'),'$page');" ;
    	$dbh->query($query);
    }
?>
