// //Add and collect values from the login form
// const loginFormHandle = async (event) => {
//     event.preventDefault();
// }

const loginButton = document.querySelector('#loginButton')
const loginForm = document.getElementById('loginForm')

loginButton.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('CLICKED')
    // Grab user username and password
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value
    
    login(email, password)
})

loginButton.addEventListener('click', function() {
    console.log('CLICKED')
})