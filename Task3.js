document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters long!";
        return;
    }
    message.style.color = "green";
    message.textContent = "Registration successful!";
});
