const loginButton = document.getElementById('signUpButton')
const loginForm = document.getElementById('signUpForm')

loginButton.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('CLICKED')
    // Grab user username and password
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value
    console.log(email, password)
    login(email, password)
})

loginButton.addEventListener('click', function() {
    console.log('CLICKED')
})