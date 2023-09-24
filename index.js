// // Function to validate the credit card form
// document.getElementById("creditCardForm").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the form from submitting

//     // Clear previous error messages
//     clearErrors();

//     // Get form input values
//     const cardName = document.getElementById("cardName").value.trim();
//     const cardNumber = document.getElementById("cardNumber").value.trim();
//     const cardMonth = document.getElementById("cardMonth").value.trim();
//     const cardYear = document.getElementById("cardYear").value.trim();
//     const cvc = document.getElementById("cvc").value.trim();

//     // Validate card holder name
//     if (cardName === "") {
//         showError("cardNameError", "CardHolder Name is required.");
//     }

//     // Validate card number (simplified validation)
//     if (!isValidCardNumber(cardNumber)) {
//         showError("cardNumberError", "Invalid Card Number.");
//     }

//     // Validate date (simplified validation)
//     if (!isValidDate(cardMonth, cardYear)) {
//         showError("cardDateError", "Invalid Date.");
//     }

//     // Validate CVC (simplified validation)
//     if (!isValidCVC(cvc)) {
//         showError("cvcError", "Invalid CVC.");
//     }
// });

// // Function to clear error messages
// function clearErrors() {
//     const errorElements = document.querySelectorAll(".error");
//     errorElements.forEach(function (errorElement) {
//         errorElement.textContent = "";
//     });
// }

// // Function to show an error message
// function showError(elementId, errorMessage) {
//     const errorElement = document.getElementById(elementId);
//     errorElement.textContent = errorMessage;
// }

// // Function to validate card number (simplified validation)
// function isValidCardNumber(cardNumber) {
//     // This is a simplified example.
//     // Check if the input is a 16-digit number.
//     return /^[0-9]{16}$/.test(cardNumber);
// }

// // Function to validate date (simplified validation)
// function isValidDate(month, year) {
//     // This is a simplified example.
//     // Check if the input is a valid month (01-12) and a future year.
//     const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
//     return /^(0[1-9]|1[0-2])$/.test(month) && /^[0-9]{2}$/.test(year) && year >= currentYear;
// }

// // Function to validate CVC (simplified validation)
// function isValidCVC(cvc) {
//     // This is a simplified example.
//     // Check if the input is a 3- or 4-digit number.
//     return /^[0-9]{3,4}$/.test(cvc);
// }



// Function to validate the credit card form
document.getElementById("creditCardForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    clearErrors();

    // Get form input values
    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardMonth = document.getElementById("cardMonth").value.trim();
    const cardYear = document.getElementById("cardYear").value.trim();
    const cvc = document.getElementById("cvc").value.trim();

    // Validate card holder name
    if (cardName === "") {
        showError("cardNameError", "CardHolder Name is required.");
    }

    // Validate card number (only numbers allowed)
    if (!/^\d+$/.test(cardNumber)) {
        showError("cardNumberError", "Card Number must contain only numbers.");
    }

    // Validate date (both month and year must be provided)
    if (cardMonth === "" || cardYear === "") {
        showError("cardDateError", "Date is required.");
    }

    // Validate CVC (not blank)
    if (cvc === "") {
        showError("cvcError", "CVC is required.");
    }

    // If there are no errors, replace the container with a new one
    if (!hasErrors()) {
        replaceContainer();
    }
});

// Function to clear error messages
function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (errorElement) {
        errorElement.textContent = "";
    });
}

// Function to show an error message
function showError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
}

// Function to check if there are any errors
function hasErrors() {
    const errorElements = document.querySelectorAll(".error");
    return Array.from(errorElements).some((errorElement) => errorElement.textContent !== "");
}

// Function to replace the container
// function replaceContainer() {
//     // Create a new container
//     const newContainer = document.createElement("div");
//     newContainer.className = "new-container";
//     newContainer.innerHTML = `<h2>Payment Successful!</h2>,
//     <p>Thank you for your payment.</p>`
//     ;

//     // Replace the existing container with the new one
//     const existingContainer = document.querySelector(".container");
//     existingContainer.parentNode.replaceChild(newContainer, existingContainer);
// }