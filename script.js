// Toggle password visibility
function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
// Password strength indicator
function checkStrength() {
    const pass = document.getElementById("regPassword").value;
    const bar = document.getElementById("strengthBar");

    let strength = 0;

    if (pass.length > 5) strength++;
    if (pass.match(/[A-Z]/)) strength++;
    if (pass.match(/[0-9]/)) strength++;
    if (pass.match(/[@$!%*?&]/)) strength++;

    const colors = ["red","orange","yellow","green"];

    bar.style.width = (strength * 25) + "%";
    bar.style.background = colors[strength-1];
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    document.body.classList.toggle("text-white");
}

// Reset password validation
function validateReset() {
    const newPass = document.getElementById("newPass").value;
    const confirmPass = document.getElementById("confirmPass").value;

    if (newPass !== confirmPass) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}