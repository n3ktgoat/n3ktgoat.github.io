const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const messageInput = document.getElementById("message");
const messageError = document.getElementById("messageError");

function showError(input, errorElem, message) {
  input.classList.add("is-invalid");
  errorElem.textContent = message;
}

function clearError(input, errorElem) {
  input.classList.remove("is-invalid");
  errorElem.textContent = "";
}
function validateName() {
  const value = nameInput.value.trim();

  if (value === "") {
    showError(nameInput, nameError, "Potrebno je staviti ime");
    return false;
  }

  clearError(nameInput, nameError);
  return true;
}
function validateEmail() {
  const value = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (value === "") {
    showError(emailInput, emailError, "Potrebno je staviti email");
    return false;
  }

  if (!emailRegex.test(value)) {
    showError(emailInput, emailError, "Unesite validnu email adresu");
    return false;
  }

  clearError(emailInput, emailError);
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();

  if (value.length < 20) {
    showError(
      messageInput,
      messageError,
      "Poruka mora da ima barem 20 karaktera!"
    );
    return false;
  }

  clearError(messageInput, messageError);
  return true;
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isMessageValid) {
    console.log("Forma je validna");
  }
});
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);