const button = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');
const taskMenu = document.getElementById('user-menu-button');
const taskSignout = document.getElementById('taskSignout');

//TODO Fix the bug that always shows the menu for mobile screens
button.addEventListener('click', () => {
    if (menuDisplay.style.display === 'none') {
        menuDisplay.style.display = 'block';
    } else {
        menuDisplay.style.display = 'none';
    }
});

//Hides the signout uption on click
taskMenu.addEventListener('click', () => {
    if (taskSignout.style.display === 'none') {
        taskSignout.style.display = 'block';
    } else {
        taskSignout.style.display = 'none';
    }
});

