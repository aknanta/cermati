const toggle = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});