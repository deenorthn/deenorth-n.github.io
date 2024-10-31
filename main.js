function askName() {
var Name = prompt("Please enter your name", "Name"); // Prompting the user to type in their name
document.getElementByID("displayName").innerText = "Hello," + Name + "Welcome to my page!";
if (userName) { // Check if userName is not null or an empty string
        document.getElementByID("displayName").innerText = "Hello, " + userName + "!"; // Display user's name
    } else {
        document.getElementByID("displayName").innerText = "Hello!"; // Fallback message if no name was provided
    }
}
function toggleImageSize() { // Enlarging the image
	var image = document.getElementByID("profilePicture");
	if (image.style.transform = "scale(2)") {
		image.style.transform = "scale(1)";
	} else {
		image.style.transform = "scale(2)";
	}
{

function highlightLink(link) {
	link.style.color = "blue"; // Changes text color
	link.style.backgroundcolor = "red"; // Changes background color
}

function resetLink(link) {
	link.style.color = ""; // Resets text color
	link.style.backgroundcolor = ""; // Resets background color
}