// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klik di luar Hamburger
window.addEventListener('click',function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

//Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}


const sendButton = document.getElementById('send-button');
const contactForm = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');
sendButton.addEventListener('click', (event) => {
    if (!contactForm.checkValidity()) {
        event.preventDefault(); // Prevent the form from submitting
        // Display error message
        errorMessage.textContent = 'Please fill out all required fields. ⚠️';
        // Highlight invalid fields
        const invalidFields = contactForm.querySelectorAll(':invalid');
        for (const field of invalidFields) {
            field.classList.add('invalid');
        }
    } else {
        // If the form is valid, clear the error message and remove any invalid field highlighting
        errorMessage.textContent = '';
        const invalidFields = contactForm.querySelectorAll(':invalid');
        for (const field of invalidFields) {
            field.classList.remove('invalid');
        }
    }
});
