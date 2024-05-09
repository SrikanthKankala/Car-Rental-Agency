
// edit_car_script.js
$(document).ready(function() {
    // Fetch car details for editing
    var editCarDetails = JSON.parse(localStorage.getItem('editCarDetails'));
    if (editCarDetails) {
        // Populate form fields with existing car details
        $('#vehicleModel').val(editCarDetails.vehicleModel);
        $('#vehicleNumber').val(editCarDetails.vehicleNumber);
        $('#seatingCapacity').val(editCarDetails.seatingCapacity);
        $('#rentPerDay').val(editCarDetails.rentPerDay);
    }
});

function updateCarDetails() {
    // Collect updated form data
    var vehicleModel = document.getElementById("vehicleModel").value;
    var vehicleNumber = document.getElementById("vehicleNumber").value;
    var seatingCapacity = document.getElementById("seatingCapacity").value;
    var rentPerDay = document.getElementById("rentPerDay").value;

    // Create an object to store updated car details
    var updatedCarDetails = {
        vehicleModel: vehicleModel,
        vehicleNumber: vehicleNumber,
        seatingCapacity: seatingCapacity,
        rentPerDay: rentPerDay
    };

    // Retrieve the index of the car to be updated
    var editCarIndex = localStorage.getItem('editCarIndex');

    // Retrieve the list of cars from localStorage
    var cars = JSON.parse(localStorage.getItem('cars'));

    // Update the car details at the specified index
    cars[editCarIndex] = updatedCarDetails;

    // Update car details in localStorage
    localStorage.setItem('cars', JSON.stringify(cars));

    // Redirect to car details display page
    window.location.href = 'car_details_display.html';
}







