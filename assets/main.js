const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav_toggle', 'nav_manu')

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navManu = document.getElementById('nav_manu')
    navManu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))




const sr = ScrollReveal ({
    origin:'top',
    distance: '80px',
    duration:2000,
    reset: true
})

sr.reveal('.home_title',{})
sr.reveal('.botton',{delay: 200})
sr.reveal('.home_img',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})

sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200}) 
sr.reveal('.about_text',{delay: 400}) 


sr.reveal('.skills_data',{delay: 200}) 
sr.reveal('.skills_img',{delay: 400})

sr.reveal('.work_img',{interval: 200})

sr.reveal('.contact_input',{interval: 200}) 



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["an art", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});





