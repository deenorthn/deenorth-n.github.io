// Prompt the user for their name and display it
var userName = prompt("Please enter your name", "Name");
if (userName) {
    document.getElementById("displayName").innerText = "Hello, " + userName + "! Welcome to my page!";
}

// Toggle image size on click
function toggleImageSize() {
    var image = document.getElementById("profilePicture");
    if (image.style.transform === "scale(2)") {
        image.style.transform = "scale(1)";
    } else {
        image.style.transform = "scale(2)";
    }
}

// Highlight link on mouseover
function highlightLink(link) {
    link.style.color = "blue";
    link.style.backgroundColor = "red";
}

// Reset link style on mouseout
function resetLink(link) {
    link.style.color = "";
    link.style.backgroundColor = "";
}