// Store DOM Variables
const menuBtn = document.querySelector('.nav__menu-hamburger');
const menu = document.querySelector('.nav__menu-overlay');
const menuPortrait = document.querySelector('.nav__menu-portrait');
const menuList = document.querySelector('.nav__menu-list');
const menuItems = document.querySelectorAll('.nav__menu-item');

// Initialize state of the menu
let showMenu = false;

// Add Event Listener
menuBtn.addEventListener('click', toggleMenu);
// Toggle classes for menu
function toggleMenu() {
    if(!showMenu){
        // Add relevant classes to each of the components
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuPortrait.classList.add('show');
        menuList.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));
        // Set state of the Menu
        showMenu = true;

    } else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuPortrait.classList.remove('show');
        menuList.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));
        // Set the state of the Menu
        showMenu = false;
    }
    
}

