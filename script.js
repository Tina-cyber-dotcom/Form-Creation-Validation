// Step 1: Run code after HTML is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Step 2: Select form and feedback div
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Step 3: Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop actual form submission

    // Step 4: Get and trim input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Step 5: Initialize validation
    let isValid = true;
    let messages = [];

    // Step 6: Validate username
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters.");
    }

    // Step 7: Validate email
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Enter a valid email address.");
    }

    // Step 8: Validate password
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Step 9: Display feedback
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});