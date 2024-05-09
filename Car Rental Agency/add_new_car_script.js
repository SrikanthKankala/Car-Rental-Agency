




// C:\Users\kanka\All-Frontend\Car Rental Agency\add_new_car_script.js



// add_new_car_script.js
function submitCarForm() {
    // Collect form data
    var vehicleModel = document.getElementById("vehicleModel").value;
    var vehicleNumber = document.getElementById("vehicleNumber").value;
    var seatingCapacity = document.getElementById("seatingCapacity").value;
    var rentPerDay = document.getElementById("rentPerDay").value;

    // Create an object to store car details
    var carDetails = {
        vehicleModel: vehicleModel,
        vehicleNumber: vehicleNumber,
        seatingCapacity: seatingCapacity,
        rentPerDay: rentPerDay
    };

    // Convert object to JSON string and store in localStorage
    var existingCars = JSON.parse(localStorage.getItem('cars')) || [];
    existingCars.push(carDetails);
    localStorage.setItem('cars', JSON.stringify(existingCars));

    // Redirect to car details display page
    window.location.href = 'car_details_display.html';
}
