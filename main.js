const emailInput = document.getElementById("email-address");
const errorMessage = document.getElementById("error-text");
const errorOutline = document.querySelector(".error");
const btn = document.querySelector("button");

btn.addEventListener("click", validEmail);

function validEmail() {
  const email = emailInput.value.trim();

  if (!emailRegex(email)) {
    errorMessage.style.display = "block";
    errorOutline.style.borderColor = "red";
  } else {
    errorMessage.style.display = "none";
  }
}

function emailRegex(email) {
  const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailpattern.test(email);
}
