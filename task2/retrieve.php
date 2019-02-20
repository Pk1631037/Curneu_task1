<?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
   define('DB_PASSWORD', 'prem');
   define('DB_DATABASE', 'database');
   $db = mysqli_connect('localhost','root',"prem",'login');
   
   
if(isset($_POST) & !empty($_POST)){
	@$hint = ($_POST['hint']);
	$sql_m= "SELECT password FROM details WHERE hint = '$hint' ";
	$res_m = mysqli_query($db, $sql_m);
	if (mysqli_num_rows($res_m) > 0) {
		while ($row = $res_m->fetch_assoc()) {
		$message= implode(',', $row);
		echo "<script type='text/javascript'>alert('Your Password : $message');
		window.location.href='login.html';
		</script>";
	}}
	else{
		$message = "Mail Id is not Registered";
		echo "<script type='text/javascript'>alert('$message');
		window.location.href='forgot.php';
		</script>";
	
}
}

?>