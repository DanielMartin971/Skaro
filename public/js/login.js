const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');


loginButton.addEventListener('click', async (event) => {
    //Prevent Default of submitting
    event.preventDefault()
    // Grab user username and password
    const email = document.querySelector("#emailInput").value
    const password = document.querySelector("#passwordInput").value
    console.log(email, password);

    //Check if the email and password value are not empty
    if (email && password) {
        //Need to send a POST request to API endpoint
        const response = await sendLoginReequest(email, password);
        if (response.ok) {
            //if the response is ok redirect them to dashboard
            document.location.replace('/dashboard');
            //Dispay an alert for unsuccesful response
        } else {
            alert(response.statusText);
        }
    }

});

loginButton.addEventListener('click', function() {
    console.log('CLICKED');
})
