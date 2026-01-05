document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation logic (replace this with server-side validation in real apps)
    if (username === "manish" && password === "godwin") {
        // Redirect to home page
        window.location.href = "homepage.html";
    } else {
        // Show error message
        const errorMessage = document.getElementById("error-message");
        errorMessage.classList.remove("hidden");
    }
});
