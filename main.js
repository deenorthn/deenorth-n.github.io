// Function to prompt the user for their name and display it
function askName() {
    var name = prompt("Please enter your name", "Name"); // Prompting the user to type in their name
    if (name) { 
        document.getElementById("displayName").innerText = "Hello, " + name + "!"; // Display user's name if entered
    } else {
        document.getElementById("displayName").innerText = "Hello!"; // Fallback message if no name was provided
    }
}

// Function to toggle image size on click
function toggleImageSize() {
    var image = document.getElementById("profilePicture");
    if (image.style.transform === "scale(2)") {
        image.style.transform = "scale(1)"; // Reset to original size
    } else {
        image.style.transform = "scale(2)"; // Enlarge image
    }
}

// Function to highlight navigation link on hover
function highlightLink(link) {
    link.style.color = "blue";
    link.style.backgroundColor = "red";
}

// Function to reset navigation link styling on mouse out
function resetLink(link) {
    link.style.color = "";
    link.style.backgroundColor = "";
}

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
    var message = document.getElementById("Message").value;

    // Save data to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("cell", cell);
    localStorage.setItem("message", message);

    alert("Message Sent!\nThank you for reaching out, I will get back to you as soon as possible.");
}
