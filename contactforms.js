// Resets the form fields and clears localStorage
function resetContact() {
    document.getElementById("contactme").reset(); // Clears all input fields in the form
    localStorage.clear(); // Clears any saved data in localStorage
    alert("Form has been cleared!"); // Notify the user about the reset
}

// Stores form data in localStorage
function storeData() {
    // Collect form inputs
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const cell = document.getElementById("cell").value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || '';
    const availability = [
        document.getElementById("Morning").checked ? "Morning" : "",
        document.getElementById("Afternoon").checked ? "Afternoon" : "",
        document.getElementById("Evening").checked ? "Evening" : ""
    ].filter(Boolean).join(", "); // Joins selected checkboxes into a single string
    const option = document.getElementById("options").value;
    const message = document.getElementById("Message").value;

    // Check for required fields
    if (!contactMethod || !option) {
        alert("Please complete all required fields.");
        return;
    }

    // Store form data in localStorage
    localStorage.setItem("contactForm_name", name);
    localStorage.setItem("contactForm_email", email);
    localStorage.setItem("contactForm_cell", cell);
    localStorage.setItem("contactForm_contactMethod", contactMethod);
    localStorage.setItem("contactForm_availability", availability);
    localStorage.setItem("contactForm_option", option);
    localStorage.setItem("contactForm_message", message);

    // Notify user about successful submission
    alert("Message Sent!\nThank you for contacting me; I will respond as soon as I can.");
}
