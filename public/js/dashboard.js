//Mobile menu will display when this is used
const mobileNav = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');

//signout button will be accessed through profile icon
const userMenu = document.getElementById('signout-btn');
const signoutMenu = document.getElementById('signoutHide');

//TODO getElementById for modal access
const modalDashboardTrigger = document.getElementById('modalDashboardTrigger');
const dashboardModal = document.getElementById('dashboardModal');
const closeDashboardTrigger = document.getElementById('closeDashTrigger');
console.log(closeDashboardTrigger);

//Open the mobile menu and close the mobile menu
mobileNav.addEventListener('click', () => {
    if (menuDisplay.style.display === 'none') {
        menuDisplay.style.display = 'block';
    } else {
        menuDisplay.style.display = 'none';
    }
});

//Open sign out menu and close it
userMenu.addEventListener('click', () => {
    if (signoutMenu.style.display === 'none') {
        signoutMenu.style.display = 'block';
    } else {
        signoutMenu.style.display = 'none';
    }
});

//toggle the modal open to show input form
modalDashboardTrigger.addEventListener('click', () => {
    dashboardModal.classList.toggle('modal-open');
});
//Toggle the modal to close on click
closeDashboardTrigger.addEventListener('click', () => {
    dashboardModal.classList.remove('modal-open');
});

