// Function to clear form fields and localStorage data
function resetContact() {
    document.getElementById("contactme").reset(); // Reset form fields
    localStorage.clear(); // Clear local storage
    alert("Form has been cleared!");
}

// Function to store form data in localStorage and notify user
function storeData() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var cell = document.getElementById("cell").value;
    var contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value;
    var availability = Array.from(document.querySelectorAll('input[name="availability"]:checked')).map(input => input.value);
    var reason = document.getElementById("options").value;
    var message = document.getElementById("Message").value;

    // Save data to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("cell", cell);
    localStorage.setItem("contactMethod", contactMethod);
    localStorage.setItem("availability", JSON.stringify(availability));
    localStorage.setItem("reason", reason);
    localStorage.setItem("message", message);

    alert("Message Sent!\nThank you for reaching out, I will get back to you as soon as possible.");
}
