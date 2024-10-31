function askName() {
    var name = prompt("Please enter your name", "Name"); // Prompting the user to type in their name
    if (name) { 
        document.getElementById("displayName").innerText = "Hello, " + name + "!"; // Shows the user's name
    } else {
        document.getElementById("displayName").innerText = "Hello!"; //  This message will be showed if no name was provided
    }
}

function toggleImageSize() { // Enlarging the image
    var image = document.getElementById("profilePicture");
    if (image.style.transform === "scale(2)") {
        image.style.transform = "scale(1)";
    } else {
        image.style.transform = "scale(2)";
    }
}

function highlightLink(link) {
    link.style.color = "blue"; // Changes text color
    link.style.backgroundColor = "red"; // Changes background color
}

function resetLink(link) {
    link.style.color = ""; // Resets text color
    link.style.backgroundColor = ""; // Resets background color
}
