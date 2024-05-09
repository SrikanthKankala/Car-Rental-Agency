
// C:\Users\kanka\All-Frontend\Car Rental Agency\login_customer_car_detailes_script.js

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "#ddd";
}

function validateCustomerRegistration() {
    // Placeholder for customer registration validation
    return true;
}

function validateCustomerLogin() {
    // Placeholder for customer login validation
    return true;
}

function validateAgencyRegistration() {
    // Placeholder for agency registration validation
    return true;
}

function validateAgencyLogin() {
    // Placeholder for agency login validation
    return true;
}
$(document).ready(function() {
    displayCarDetails();
});

function displayCarDetails() {
    // Retrieve car details from localStorage or API
    // For demonstration purposes, assume car details are stored in localStorage

    var cars = JSON.parse(localStorage.getItem('cars'));

    if (cars && cars.length > 0) {
        cars.forEach(function(car, index) {
            var carHTML = '<div class="card">';
            carHTML += '<div class="card-body">';
            carHTML += '<h5 class="card-title">Vehicle Model: ' + car.vehicleModel + '</h5>';
            carHTML += '<p class="card-text">Vehicle Number: ' + car.vehicleNumber + '</p>';
            carHTML += '<p class="card-text">Seating Capacity: ' + car.seatingCapacity + '</p>';
            carHTML += '<p class="card-text">Rent Per Day: $' + car.rentPerDay + '</p>';
            // carHTML += '<div class="form-group">';
            // carHTML += '<label for="numberOfDays' + index + '">Number of Days</label>';
            // carHTML += '<select class="form-control" id="numberOfDays' + index + '">';
            // carHTML += '<option value="1">1 Day</option>';
            // carHTML += '<option value="2">2 Days</option>';
            // carHTML += '<option value="3">3 Days</option>';
            // carHTML += '<option value="4">4 Day</option>';
            // carHTML += '<option value="5">5 Day</option>';
            // carHTML += '<option value="6">6 Day</option>';
            // carHTML += '<option value="7">7 Day</option>';
            // // Add more options as needed
            // carHTML += '</select>';
            // carHTML += '</div>';
            // carHTML += '<div class="form-group">';
            // carHTML += '<label for="startDate' + index + '">Start Date</label>';
            // carHTML += '<input type="date" class="form-control" id="startDate' + index + '" required>';
            // carHTML += '</div>';
            carHTML += '<button type="button" class="btn btn-primary" onclick="rentCar(' + index + ')">Rent Car</button>';
            carHTML += '</div>';
            carHTML += '</div>';
            
            $('#carDetails').append(carHTML);
        });
    } else {
        $('#carDetails').html('<p>No cars available</p>');
    }
}

// function rentCar(index) {
//     var numberOfDays = $('#numberOfDays' + index).val();
//     var startDate = $('#startDate' + index).val();

//     // Perform further processing, such as calculating total rent and making a reservation
//     // For demonstration purposes, we'll just display an alert

//     alert('Renting car ' + index + ' for ' + numberOfDays + ' days starting from ' + startDate);
// }


function rentCar(index) {
    // Check if the user is logged in as an agency
    var isLoggedIn = localStorage.getItem('loggedInAgency');
    
    if (!isLoggedIn) {
        alert("Successfull.");
        return;
    }

    // Proceed with renting the car
    var numberOfDays = $('#numberOfDays' + index).val();
    var startDate = $('#startDate' + index).val();

    // Perform further processing, such as calculating total rent and making a reservation
    // For demonstration purposes, we'll just display an alert

    alert('Renting car ' + index + ' for ' + numberOfDays + ' days starting from ' + startDate);
}

