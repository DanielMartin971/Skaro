//Mobile menu will display when this is used
const mobileNav = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');

//signout button will be accessed through profile icon
const userMenu = document.getElementById('signout-btn');
const signoutMenu = document.getElementById('signoutHide');

//Used for modal access on the dashboard
const modalDashboardTrigger = document.getElementById('modalDashboardTrigger');
const dashboardModal = document.getElementById('dashboardModal');
const closeDashboardTrigger = document.getElementById('closeDashTrigger');

//access input form with for same as id
const formInput = document.getElementById('inputForm');

//DELETE functionality
const deleteTrigger = document.getElementById('deleteTrigger');
const deleteBody = document.getElementById('deleteBody');
const closeDelete = document.getElementById('closeDelete');



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


//Selects the form input element and is fired everytime the input field changes 
formInput.addEventListener('input', (event) => {
    console.log('Hello')
    console.log(event.target.value);
});

//Need to be able to open delete modal
deleteTrigger.addEventListener('click', () => {
    deleteBody.classList.toggle('modal-open');
});
//need to close the modal
closeDelete.addEventListener('click', () => {
    deleteBody.classList.remove('modal-open');
});


