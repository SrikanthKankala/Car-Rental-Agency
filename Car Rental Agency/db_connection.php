<?php
// Database credentials
$servername = "localhost"; // Change this if your database is hosted elsewhere
$username = "root";
$password = "";
$database = "register";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
