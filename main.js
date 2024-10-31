function askName() {
var name = prompt("Please enter your name", "Name"); // Prompting the user to type in their name
document.getElementByID("displayName").innerText = "Hello," + Name + "Welcome to my page!";

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