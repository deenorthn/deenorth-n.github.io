function storeData() {
    // Retrieve form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;

    // Store form data in local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    // Confirm data saved
    alert("Your information has been saved successfully!");
}

// Attach event listener to the submit button
document.getElementById("contactme").addEventListener("submit", storeData);


// Function to reset the form fields
function resetContact() {
    document.getElementById('contactme').reset(); // Reset the form fields to default
    localStorage.removeItem('userData'); // Clear stored data from local storage
    alert('Form has been cleared!'); // Notify the user that the form has been cleared
}