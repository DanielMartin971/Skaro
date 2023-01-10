const signUpButton = document.getElementById('signUpButton');
const SignUpForm = document.getElementById('signUpForm');


async function sendSignUpRequst(email, password) {
    return await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
}

signUpButton.addEventListener('click', async(event) => {
    //Prevent the form from submitting 
    event.preventDefault()
    // Grab user username and password
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    console.log(email, password);
    //Check if the email and password values are not empty
    if (email && password) {
        const response = await sendSignUpRequest(email, password);
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
});

