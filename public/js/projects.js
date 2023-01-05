const button = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');
const projectMenu = document.getElementById('user-menu-button');
const projectSignout = document.getElementById('projectSignout');

//TODO Fix the bug that always shows the menu for mobile screens
button.addEventListener('click', () => {
    if (menuDisplay.style.display === 'none') {
        menuDisplay.style.display = 'block';
    } else {
        menuDisplay.style.display = 'none';
    }
});

//click on the profile photo to sign out
projectMenu.addEventListener('click', () => {
    if (projectSignout.style.display === 'none') {
        projectSignout.style.display = 'block';
    } else {
        projectSignout.style.display = 'none';
    }
});