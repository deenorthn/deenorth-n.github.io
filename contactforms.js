function storeData() {
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const cell = document.getElementById("cell").value.trim();
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || '';
    const availability = [
        document.getElementById("Morning").checked ? "Morning" : "",
        document.getElementById("Afternoon").checked ? "Afternoon" : "",
        document.getElementById("Evening").checked ? "Evening" : ""
    ].filter(Boolean).join(", ");
    const option = document.getElementById("options").value;
    const message = document.getElementById("Message").value.trim();

    if (!name || !email || !cell || !contactMethod || !option || !message) {
        displayFeedback("Please fill out all required fields.", "red");
        return;
    }

    // Save form data in localStorage
    localStorage.setItem("contactForm_name", name);
    localStorage.setItem("contactForm_email", email);
    localStorage.setItem("contactForm_cell", cell);
    localStorage.setItem("contactForm_contactMethod", contactMethod);
    localStorage.setItem("contactForm_availability", availability);
    localStorage.setItem("contactForm_option", option);
    localStorage.setItem("contactForm_message", message);

    displayFeedback("Message Sent! Thank you for reaching out.", "green");
}

// Helper function to display feedback
function displayFeedback(message, color) {
    const feedback = document.getElementById("form-feedback");
    feedback.style.display = "block";
    feedback.style.color = color;
    feedback.innerText = message;
    setTimeout(() => feedback.style.display = "none", 5000); // Auto-hide after 5 seconds
}
