// Resets the form fields with button
function resetContact() {
    document.getElementById("contactme").reset();
    localStorage.clear(); // Clear stored data from local storage
    alert("Form has been cleared!"); // Notify the user that the form has been cleared
}

// Data is stored once submit button is clicked
function storeData() {
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const cell = document.getElementById("cell").value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || '';
    const availability = [
        document.getElementById("Morning").checked ? "Morning" : "",
        document.getElementById("Afternoon").checked ? "Afternoon" : "",
        document.getElementById("Evening").checked ? "Evening" : ""
    ].filter(Boolean).join(", ");
    const option = document.getElementById("options").value;
    const message = document.getElementById("Message").value;

    if (!contactMethod || !option) {
        alert("Please complete all required fields.");
        return;
    }

    localStorage.setItem("contactForm_name", name);
    localStorage.setItem("contactForm_email", email);
    localStorage.setItem("contactForm_cell", cell);
    localStorage.setItem("contactForm_contactMethod", contactMethod);
    localStorage.setItem("contactForm_availability", availability);
    localStorage.setItem("contactForm_option", option);
    localStorage.setItem("contactForm_message", message);

    alert("Message Sent!\nThank you for contacting me; I will respond as soon as I can.");
}
