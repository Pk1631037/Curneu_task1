<?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
   define('DB_PASSWORD', 'prem');
   define('DB_DATABASE', 'database');
   $db = mysqli_connect('localhost','root',"prem",'login');
   
   
if(isset($_POST) & !empty($_POST)){
	@$email = ($_POST['mailid']);
	@$password = ($_POST['password']);
	$sql_e= "SELECT * FROM details WHERE mail = '$email' AND password = '$password' ";
	$res_e = mysqli_query($db, $sql_e);
	if (mysqli_num_rows($res_e) > 0) {
		header('Location: index.html');
	}
	else{
		$message = "Username or Password are Incorrect";
		echo "<script type='text/javascript'>alert('$message');
		window.location.href='login.html';
		</script>";
	
}
}

?>