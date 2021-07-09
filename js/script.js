let mainNav = document.getElementById('main-nav-id');
let humbergerIcon = document.getElementById('hamburger-icon-id');

humbergerIcon.addEventListener('click', function(){
    mainNav.classList.toggle('active');
});