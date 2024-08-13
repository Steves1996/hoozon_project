<?php

$host="localhost";
$username="rs2292003_ikonga";
$password="oZ25%SDWy9w)";
$dbname="rs2292003_ikonga";

$conn = mysqli_connect($host,$username,$password,$dbname);

if(!$conn){
    die("Could not connect to: ". mysqli_connect_error());
} 


?>