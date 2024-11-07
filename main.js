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
    var image = document.getElementById("profilePicture");
    if (image.style.transform === "scale(2)") {
        image.style.transform = "scale(1)";
    } else {
        image.style.transform = "scale(2)";
    }
}
