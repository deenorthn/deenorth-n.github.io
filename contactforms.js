// Resets the form fields with button
function resetContact() {
    document.getElementById("contactme").reset();
    localStorage.clear(); // Clear stored data from local storage
    alert("Form has been cleared!"); // Notify the user that the form has been cleared
}

// Data is stored once submit button is clicked
function storeData() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var cell = document.getElementById("cell").value;
    var morning = document.getElementById("Morning").checked;
    var afternoon = document.getElementById("Afternoon").checked;
    var evening = document.getElementById("Evening").checked;
    var option = document.getElementById("options").value;
    var message = document.getElementById("Message").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("cell", cell);
    localStorage.setItem("morning", morning);
    localStorage.setItem("afternoon", afternoon);
    localStorage.setItem("evening", evening);
    localStorage.setItem("option", option);
    localStorage.setItem("message", message);

    alert("Message Sent!\nThank you for contacting me; I will respond as soon as I can.");
}
