<!-- C:\Users\kanka\All-Frontend\Car Rental Agency\customer_registration.php -->



<?php

$fullName = filter_input(INPUT_POST,'fullName');
$email = filter_input(INPUT_POST,'email');
$phone = filter_input(INPUT_POST,'phone');
$password = filter_input(INPUT_POST,'password');

if(!empty($fullName) && !empty($email) && !empty($phone) && !empty($password)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "cars_agency";

    // Create connection
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO customer_registration (fullName, email, phone, password) VALUES ('$fullName', '$email', '$phone', '$password')";

    if ($conn->query($sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    echo "All fields are required.";
}
?>
