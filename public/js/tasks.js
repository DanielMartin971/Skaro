const button = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');
//Code below is from dash.js
const userMenu = document.getElementById('signout-btn');
const signoutMenu = document.getElementById('signoutHide');

//Leave taskMenu and tasksignout commented out DONT DELETE
// const taskMenu = document.getElementById('user-menu-button');
// const taskSignout = document.getElementById('taskSignout');


//TODO Fix the bug that always shows the menu for mobile screens
button.addEventListener('click', () => {
    if (menuDisplay.style.display === 'none') {
        menuDisplay.style.display = 'block';
    } else {
        menuDisplay.style.display = 'none';
    }
});
//added the same id elements from dashboard.js to all pages
userMenu.addEventListener('click', () => {
    if (signoutMenu.style.display === 'none') {
        signoutMenu.style.display = 'block';
    } else {
        signoutMenu.style.display = 'none';
    }
});

//DONT DELETE
//Hides the signout uption on click
// taskMenu.addEventListener('click', () => {
//     if (taskSignout.style.display === 'none') {
//         taskSignout.style.display = 'block';
//     } else {
//         taskSignout.style.display = 'none';
//     }
// });

