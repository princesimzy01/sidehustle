var emailerror = document.getElementById("email-error");
var nameerror = document.getElementById("name-error");
var submiterror = document.getElementById("submiterror");
var phoneerror = document.getElementById("phone-error");
var pass = document.getElementById("password");

function validateName() {
  var name = document.getElementById("name").value;

  if (name.length == 0) {
    nameerror.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameerror.innerHTML = "Full Name Required";
    return false;
  }
  nameerror.innerHTML = "This looks good ";
  nameerror.style.color = "green";
  return true;
}
const validatePhone = () => {
  var phone = document.getElementById("phone").value;
  if (phone.length !== 11) {
    phoneerror.innerHTML = "Phone Number has to be 11 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneerror.innerHTML = "Only Numbers please";
    return false;
  }

  phoneerror.innerHTML = "This is Perfect";
  phoneerror.style.color = "green";
  return true;
};

function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    emailerror.innerHTML = "Input Your Email Address!";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailerror.innerHTML = "Email is Invalid";
    return false;
  }
  emailerror.innerHTML = "Valid!";
  emailerror.style.color = "green";
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    pass.value.length == 0
  ) {
    submiterror.style.display = "block";
    submiterror.innerHTML = "Please you have not completed the form";
    setTimeout(function () {
      submiterror.style.display = "none";
    }, 3000);
    return false;
  } else {
    submiterror.innerHTML = "Great";
    submiterror.style.color = "green";
  }
}
