const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const mockUp = document.querySelector('.hero__image');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')) //close hamburger menu
    {
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        mockUp.style.setProperty('--beforeplaceholder', '1');


    }
    else { 
        //open hamburger menu
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        mockUp.style.setProperty('--beforeplaceholder', '0');
        
    }
});