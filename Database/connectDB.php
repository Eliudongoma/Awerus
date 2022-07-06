<?php
header("Access-Control-Allow-Origin: *");
$server = "localhost";
	$dbUser = "root";
	$dbPass = "";
	$dbName = "awerus";

	$conn= mysqli_connect($server, $dbUser, $dbPass, $dbName);

	 if(!$conn){
	 	die("Connection error:" . mysqli_connect_error());
	 }
	 echo "<h3>Connection success</h3>";
 ?>