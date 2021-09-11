//Function to Hide and Show Navigation in Mobile

const btnHamburger = document.querySelector("#btnHamburger");
const nav = document.querySelector("#nav");
const overlay = document.querySelector(".overlay");
btnHamburger.addEventListener("click", openMenu);

function openMenu(){
    btnHamburger.classList.toggle("open");

    if (btnHamburger.classList.contains("open")){
        nav.classList.add("fade-in");
        nav.classList.remove("fade-out");
        overlay.classList.add("fade-in");
        overlay.classList.remove("fade-out");
        document.body.style.overflow = "hidden";
        btnHamburger.setAttribute('aria-expanded', 'true');
    }
    else{
        nav.classList.add("fade-out");
        nav.classList.remove("fade-in");
        overlay.classList.add("fade-out");
        overlay.classList.remove("fade-in");
        document.body.style.overflow = "visible";
        btnHamburger.setAttribute('aria-expanded', 'false');
    }
}
