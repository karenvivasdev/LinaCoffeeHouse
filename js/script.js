//========================
// REVEAL AL HACER SCROLL
//========================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section =>{

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            section.classList.add("active");

        }

    });

}

revealSections();


//========================
// BOTÓN WHATSAPP
//========================

const whatsapp = document.querySelector(".whatsapp-btn");

if(whatsapp){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 250){

            whatsapp.classList.add("show");

        }else{

            whatsapp.classList.remove("show");

        }

    });

}
//========================
// NAVBAR AL HACER SCROLL
//========================

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
const cta = document.querySelector('.cta');

window.addEventListener('scroll', () => {

    const rect = cta.getBoundingClientRect();
    const movement = rect.top * -0.40;

    cta.style.setProperty(
        '--parallax',
        `${movement}px`
    );

});