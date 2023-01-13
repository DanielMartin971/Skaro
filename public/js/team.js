const button = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');
const userMenu = document.getElementById('signout-btn');
const signoutMenu = document.getElementById('signoutHide');
//DONT DELETE
// const teamMenu = document.getElementById('user-menu-button');
// const teamSignout = document.getElementById('teams');

//TODO Fix the bug that always shows the menu for mobile screens
button.addEventListener('click', () => {
    if (menuDisplay.style.display === 'none') {
        menuDisplay.style.display = 'block';
    } else {
        menuDisplay.style.display = 'none';
    }
});

//Shows and hides the signout button
userMenu.addEventListener('click', () => {
    if (signoutMenu.style.display === 'none') {
        signoutMenu.style.display = 'block';
    } else {
        signoutMenu.style.display = 'none';
    }
});

//DONT DELETE!
// teamMenu.addEventListener('click', () => {
//     if (teamSignout.style.display === 'none') {
//         teamSignout.style.display = 'block';
//     } else {
//         teamSignout.style.display = 'none';
//     }
// });