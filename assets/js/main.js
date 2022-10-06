// change background header scroll
const btn = document.getElementById('btn');

    function scrollHeader(){
        const header = document.getElementById('header-items'),
            logo = document.getElementById('logo'),
            navColor = document.querySelectorAll('.nav__item');

            if(this.scrollY >= 40){
                header.classList.add('scroll-header');
                logo.classList.add('color-items');
                btn.classList.add('color-items');
                for (let index = 0; index < navColor.length; index++) {
                    navColor[index].classList.add('color-menu');
                }
            }
            else{
                header.classList.remove('scroll-header');
                logo.classList.remove('color-items');
                btn.classList.remove('color-items');
                for (let index = 0; index < navColor.length; index++) {
                    navColor[index].classList.remove('color-menu');
                }
            }
    }

window.addEventListener('scroll', scrollHeader);

// show menu mobil
const nav = document.getElementById('nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('show');
})


// active view more explorer
const active = document.getElementById('view-active'),
    prueba = document.getElementById('prueba'),
    desactive = document.getElementById('view-desactive');

active.addEventListener('click', ()=>{
    prueba.classList.add('view-active')
    active.classList.add('menos')
    desactive.classList.remove('menos');
})

desactive.addEventListener('click', ()=>{
    prueba.classList.remove('view-active');
    active.classList.remove('menos');
    desactive.classList.add('menos');
})

// active view more about

const about = document.getElementById('about'),
        activeAbout = document.getElementById('view-active-1'),
        desactiveAbout = document.getElementById('view-desactive-1');

activeAbout.addEventListener('click', ()=>{
    about.classList.add('abut-active');
    activeAbout.classList.add('menos');
    desactiveAbout.classList.remove('menos');
})

desactiveAbout.addEventListener('click', ()=> {
    about.classList.remove('abut-active');
    activeAbout.classList.remove('menos');
    desactiveAbout.classList.add('menos');
})

// dark light theme 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const changeText = document.getElementById('change-text');

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})