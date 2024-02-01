"use client";
import React from "react";

function MainComponent() {
  const [currentPage, setCurrentPage] = React.useState("login"); // login, register, forgot-password

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentPage("landing");
  }

  function validateAndSetPage(event, page) {
    event.preventDefault();
    // Input validation can be done here before setting the page
    setCurrentPage(page);
  }

  function renderForm(title, buttonText, onButtonClick, fields) {
    return (
      <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center">
        <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg">
          <h2 className="font-semibold text-lg text-center text-[#121212] mb-6 font-roboto">
            {title}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:z-10 sm:text-sm"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1D4ED8] hover:bg-[#2563EB] focus:outline-none"
              >
                {buttonText}
              </button>
            </div>
          </form>
          {onButtonClick && (
            <p className="mt-2 text-center">
              <button
                onClick={(event) =>
                  validateAndSetPage(event, onButtonClick.page)
                }
                className="text-[#1D4ED8] hover:underline"
              >
                {onButtonClick.text}
              </button>
            </p>
          )}
        </div>
      </div>
    );
  }

  function renderLoginPage() {
    const loginFields = [
      {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "Email address",
        label: "Email",
      },
      {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "Password",
        label: "Password",
      },
    ];
    return renderForm(
      "Login to School Portal",
      "Sign in",
      { text: "Register here", page: "register" },
      loginFields
    );
  }

  function renderRegistrationPage() {
    const registrationFields = [
      {
        id: "fullName",
        name: "fullName",
        type: "text",
        required: true,
        placeholder: "Full Name",
        label: "Full Name",
      },
      {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "Email address",
        label: "Email",
      },
      {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "Create a password",
        label: "Password",
      },
      {
        id: "confirmPassword",
        name: "confirmPassword",
        type: "password",
        required: true,
        placeholder: "Confirm password",
        label: "Confirm Password",
      },
    ];
    return renderForm(
      "Register for School Portal",
      "Register",
      { text: "Already have an account? Sign in", page: "login" },
      registrationFields
    );
  }

  function renderForgotPasswordPage() {
    const forgotPasswordFields = [
      {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "Enter your email",
        label: "Email",
      },
    ];
    return renderForm(
      "Forgot Password",
      "Submit",
      { text: "Back to Sign in", page: "login" },
      forgotPasswordFields
    );
  }

  function renderLandingPage() {
    return (
      <div className="min-h-screen bg-[#E2E8F0] flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center text-[#121212] mb-6 font-roboto">
          Welcome to School Portal
        </h1>
        <button
          onClick={() => setCurrentPage("login")}
          className="px-6 py-2 bg-[#EF4444] text-white rounded hover:bg-[#DC2626]"
        >
          Logout
        </button>
      </div>
    );
  }

  let pageContent;
  switch (currentPage) {
    case "login":
      pageContent = renderLoginPage();
      break;
    case "register":
      pageContent = renderRegistrationPage();
      break;
    case "forgot-password":
      pageContent = renderForgotPasswordPage();
      break;
    case "landing":
      pageContent = renderLandingPage();
      break;
    default:
      pageContent = <div>Page not found</div>;
      break;
  }

  return <div>{pageContent}</div>;
}


export default MainComponent;