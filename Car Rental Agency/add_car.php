<!-- C:\Users\kanka\All-Frontend\Car Rental Agency\add_car.php -->

<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Establish connection to MySQL database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cars";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve form data
    $vehicleModel = $_POST['vehicleModel'];
    $vehicleNumber = $_POST['vehicleNumber'];
    $seatingCapacity = $_POST['seatingCapacity'];
    $rentPerDay = $_POST['rentPerDay'];

    // Prepare SQL statement to insert data into the database
    $sql = "INSERT INTO cars (vehicleModel, vehicleNumber, seatingCapacity, rentPerDay) 
            VALUES ('$vehicleModel', '$vehicleNumber', '$seatingCapacity', '$rentPerDay')";

    // Execute the statement
    if ($conn->query($sql) === TRUE) {
        // Data successfully inserted into the database
        echo "New record created successfully";
    } else {
        // If there's an error in SQL execution, display the error message
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close connection
    $conn->close();
} else {
    // If the form is not submitted, redirect to the form page
    header("Location: add_new_cars.html");
    exit;
}
?>
