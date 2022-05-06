const form = document.querySelector(".form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Last name cannot be empty");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be empty");
    email.placeholder = "name@host.tld";
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else {
    setSuccess(password);
  }
};

const setError = (element, message) => {
  const inputForm = element.parentElement;
  const errorDisplay = inputForm.querySelector(".error");
  const errorIcon = inputForm.querySelector(".error-icon");

  errorDisplay.innerText = message;
  inputForm.classList.add("error");
  errorIcon.style.display = "block";
};

const setSuccess = element => {
  const inputForm = element.parentElement;
  const errorDisplay = inputForm.querySelector(".error");
  const errorIcon = inputForm.querySelector(".error-icon");

  errorDisplay.innerText = "";
  inputForm.classList.remove("error");
  errorIcon.style.display = "none";
};

const isValidEmail = email => {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLocaleLowerCase());
};
