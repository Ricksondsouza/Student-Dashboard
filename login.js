function validatePassword() {
    var passwordInput = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Replace 'yourPassword' with the actual correct password
    var correctPassword = "abcd";

    if (passwordInput === correctPassword) {
        // Set a flag in localStorage to indicate that the user is logged in
        localStorage.setItem("loggedIn", "true");

        // Redirect to the main content page
        window.location.href = "index.html";
    } else {
        // Display an error message if the password is incorrect
        errorMessage.textContent = "Invalid password. Please try again.";
    }
}
