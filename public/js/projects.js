const button = document.getElementById('res-btn');
const menuDisplay = document.getElementById('mobile-menu');

const projectMenu = document.getElementById('user-menu-button');
const projectSignout = document.getElementById('projectSignout');

const modalTrigger = document.getElementById('modalTrigger');
const modal = document.getElementById('exampleModal');
const closeTrigger = document.getElementById('closeTrigger');



//This lets us use the burger menu on smaller screens
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

//toggle the modal open to show input form
modalTrigger.addEventListener('click', () => {
    modal.classList.toggle('modal-open');
});

//Toggle the modal to close on close
closeTrigger.addEventListener('click', () => {
    modal.classList.remove('modal-open');
});