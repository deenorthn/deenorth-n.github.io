// Function to prompt the user for their name and display it
function askName() {
    var name = prompt("Please enter your name", "Name");
    if (name) { 
        document.getElementById("displayName").innerText = "Hello, " + name + "!";
    } else {
        document.getElementById("displayName").innerText = "Hello!";
    }
}

// Function to toggle image size on click
function toggleImageSize() {
    const image = document.getElementById("profilePicture");
    if (image.style.transform === "scale(2)") {
        image.style.transform = "scale(1)";
    } else {
        image.style.transform = "scale(2)";
    }
}

// Function to increase text size
function increaseTextSize() {
    document.body.style.fontSize = 'larger';
}

// Function to toggle color-blind mode
function toggleColorBlindMode() {
    document.body.classList.toggle('color-blind-mode');
}

// Function to display alt text for images
function showAltText(imageId) {
    const image = document.getElementById(imageId);
    alert(image.alt);
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
    document.getElementById("contactme").reset();
    localStorage.clear();
    alert("Form has been cleared!");
}

// Function to store form data in localStorage and notify user
function storeData() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var cell = document.getElementById("cell").value;
    var message = document.getElementById("Message").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("cell", cell);
    localStorage.setItem("message", message);

    alert("Message Sent!\nThank you for reaching out, I will get back to you as soon as possible.");
}
