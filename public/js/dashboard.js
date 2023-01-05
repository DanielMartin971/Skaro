// TODO: ADD JAVASCRIPT FOR THE BUTTONS AND MUCH MORE

const mobileNav = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');
const userMenu = document.getElementById('signout-btn');
const signoutMenu = document.getElementById('signoutHide');

//TODO Fix the bug that always shows the menu for mobile screens
mobileNav.addEventListener('click', () => {
    if (menuDisplay.style.display === 'none') {
        menuDisplay.style.display = 'block';
    } else {
        menuDisplay.style.display = 'none';
    }
});

userMenu.addEventListener('click', () => {
    if (signoutMenu.style.display === 'none') {
        signoutMenu.style.display = 'block';
    } else {
        signoutMenu.style.display = 'none';
    }
})

