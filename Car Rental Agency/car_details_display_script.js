

// <!-- car_details_display_script.js -->
$(document).ready(function() {
    // Fetch car details from localStorage and display
    displayCarDetails();
});

function displayCarDetails() {
    // Retrieve car details from localStorage
    var cars = JSON.parse(localStorage.getItem('cars'));

    // Display car details
    if (cars && cars.length > 0) {
 

        var carDetailsHTML = '';
        cars.forEach(function(car, index) {
            carDetailsHTML += '<div class="card">' + 
                             '<div class="card-body">' +
                             '<h5 class="card-title">Vehicle Model: ' + car.vehicleModel + '</h5>' +
                             '<p class="card-text">Vehicle Number: ' + car.vehicleNumber + '</p>' +
                             '<p class="card-text">Seating Capacity: ' + car.seatingCapacity + '</p>' +
                             '<p class="card-text">Rent Per Day: $' + car.rentPerDay + '</p>' +
                             // Add edit icon button
                             '<button type="button" class="btn btn-primary edit-icon" onclick="editCarDetails(\'' + index + '\')">Edit</button>' +
                             
                             // Add delete button
                             '<button type="button" class="btn btn-danger delete-icon" onclick="deleteCar(' + index + ')">Delete</button>' +
                             '</div>' +
                             '</div>';
        });
        $('#carDetails').html(carDetailsHTML);
    } else {
        $('#carDetails').html('<p>No cars available</p>');
    }
}

function editCarDetails(index) {
    // Retrieve cars from localStorage
    var cars = JSON.parse(localStorage.getItem('cars'));

    // Store the car details to be edited in localStorage
    localStorage.setItem('editCarIndex', index);
    localStorage.setItem('editCarDetails', JSON.stringify(cars[index]));

    // Redirect to the edit car page
    window.location.href = 'edit_cars.html';
}

function deleteCar(index) {
    // Retrieve cars from localStorage
    var cars = JSON.parse(localStorage.getItem('cars'));

    // Remove the car at the specified index
    cars.splice(index, 1);

    // Update the localStorage
    localStorage.setItem('cars', JSON.stringify(cars));

    // Refresh the displayed car details
    displayCarDetails();
}




