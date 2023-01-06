const signUpButton = document.getElementById('signUpButton')
const SignUpForm = document.getElementById('signUpForm')

signUpButton.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('CLICKED')
    // Grab user username and password
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value
    console.log(email, password)
    login(email, password)
})

signUpButton.addEventListener('click', function() {
    console.log('CLICKED')
})