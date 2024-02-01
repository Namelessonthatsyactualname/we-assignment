document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    const goToRegisterLink = document.getElementById("goToRegister");
    const goToLoginLink = document.getElementById("goToLogin");
    const goToForgotPasswordLink = document.getElementById("goToForgotPassword");
    const goToLoginFromForgotLink = document.getElementById("goToLoginFromForgot");

    goToRegisterLink.addEventListener("click", function (event) {
        event.preventDefault();
        showForm(registerForm);
    });

    goToLoginLink.addEventListener("click", function (event) {
        event.preventDefault();
        showForm(loginForm);
    });

    goToForgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        showForm(forgotPasswordForm);
    });

    goToLoginFromForgotLink.addEventListener("click", function (event) {
        event.preventDefault();
        showForm(loginForm);
    });

    function showForm(formToShow) {
        loginForm.classList.add("hidden");
        registerForm.classList.add("hidden");
        forgotPasswordForm.classList.add("hidden");

        formToShow.classList.remove("hidden");
    }
});
