const button = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');
const teamMenu = document.getElementById('user-menu-button');
const teamSignout = document.getElementById('teams');

//TODO Fix the bug that always shows the menu for mobile screens
button.addEventListener('click', () => {
    if (menuDisplay.style.display === 'none') {
        menuDisplay.style.display = 'block';
    } else {
        menuDisplay.style.display = 'none';
    }
});

//Shows and hides the signout button
teamMenu.addEventListener('click', () => {
    if (teamSignout.style.display === 'none') {
        teamSignout.style.display = 'block';
    } else {
        teamSignout.style.display = 'none';
    }
});