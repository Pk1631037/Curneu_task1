<?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
   define('DB_PASSWORD', 'prem');
   define('DB_DATABASE', 'database');
   $db = mysqli_connect('localhost','root','prem','login');
   
   
if(isset($_POST) & !empty($_POST)){
	@$email = ($_POST['mailid']);
	@$password = ($_POST['password']);
	@$hint = ($_POST['hint']);
	$sql_e = "SELECT * FROM details WHERE mail='$email'";
	$res_e = mysqli_query($db, $sql_e);
	if (mysqli_num_rows($res_e) > 0) {
  	    $message = "Sorry Email Already Taken";
		echo "<script type='text/javascript'>alert('$message');
		window.location.href='signup.html';
		</script>";
	}
	else{
	$sql = "INSERT INTO details (mail,password,hint) VALUES ('$email','$password','$hint')";
	$result = mysqli_query($db,$sql);
	if($result)
	{
		header('Location: login.html');

	}
	
	
}
}

?>
