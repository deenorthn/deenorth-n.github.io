//Resets the form fields with button
function resetContact() {
  document.getElementById("contactme").reset();
  localStorage.removeItem("userData"); // Clear stored data from local storage
   alert("Form has been cleared!"); // Notify the user that the form has been cleared
}

//Data is stored once submit button is clicked
function storeData() {
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var morning = document.getElementById("Morning").checked;
  var afternoon = document.getElementById("Afternoon").checked;
  var evening = document.getElementById("Evening").checked;
  var option = document.getElementById("options").value;
  var message = document.getElementById("Messege").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("cell", cell);
  localStorage.setItem("morning", morning);
  localStorage.setItem("afternoon", afternoon);
  localStorage.setItem("evening", evening);
  localStorage.setItem("option", option);
  localStorage.setItem("message", message);

  alert("Messege Sent!\nThank you for reaching out, I will get back to you as soon as possible.");
};