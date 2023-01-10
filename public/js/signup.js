const signUpButton = document.getElementById("signUpButton");
const SignUpForm = document.getElementById("signUpForm");

async function sendSignUpRequest(email, password, firstName, lastName) {
  return await fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, firstName, lastName }),
    headers: { "Content-Type": "application/json" },
  });
}

signUpButton.addEventListener("click", async (event) => {
  //Prevent the form from submitting
  event.preventDefault();
  // Grab user username and password
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const firstName = document.getElementById("firstNameInput").value;
  const lastName = document.getElementById("lastNameInput").value;

  console.log(email, password);
  //Check if the email and password values are not empty
  if (email && password) {
    const response = await sendSignUpRequest(
      email,
      password,
      firstName,
      lastName
    );
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
});
