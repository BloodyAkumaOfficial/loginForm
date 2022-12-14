const logButton = document.querySelector('.buttons__login');
const regButton = document.querySelector('.buttons__reg');

const logPage = document.querySelector('.login');
const regPage = document.querySelector('.registration');

const changeThemeButton = document.querySelector('.header__theme__change');
const contentBlock = document.querySelector('.wrapper');
const inputs = document.getElementsByTagName('input');
const arrOfInputs = [...inputs];
const bodyBlock = document.querySelector('.body');

const clockHours = document.querySelector('.clock__hours');
const clockMinutes = document.querySelector('.clock__minutes');
const clockSeconds = document.querySelector('.clock__seconds');

logButton.addEventListener('click', () => {
    logButton.classList.add('button__active');
    regButton.classList.remove('button__active');
    logPage.classList.remove('hidden');
    regPage.classList.add('hidden');
});

regButton.addEventListener('click', () => {
    logButton.classList.remove('button__active');
    regButton.classList.add('button__active');
    logPage.classList.add('hidden');
    regPage.classList.remove('hidden');
})

function changeTheme() {
    changeThemeButton.classList.toggle('button__dark');
    contentBlock.classList.toggle('dark');
    logButton.classList.toggle('buttons__dark');
    regButton.classList.toggle('buttons__dark');
    loginSuccesfullPage.classList.toggle('dark');
    regSuccesfullPage.classList.toggle('dark');
    bodyBlock.classList.toggle('dark');
    arrOfInputs.forEach(e => {
        e.classList.toggle('inputs__dark');
    });  
}

changeThemeButton.addEventListener('click', changeTheme);

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    changeTheme();
}

let clock = new Date;
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    hours < 1 ? clockHours.innerHTML = '00' : hours < 10 ? clockHours.innerHTML = '0' + hours : clockHours.innerHTML = hours;
    minutes < 1 ? clockMinutes.innerHTML = '00' : minutes < 10 ? clockMinutes.innerHTML = '0' + minutes : clockMinutes.innerHTML = minutes;
    seconds < 1 ? clockSeconds.innerHTML = '00' : seconds < 10 ? clockSeconds.innerHTML = '0' + seconds : clockSeconds.innerHTML = seconds;
setInterval(() => {
    let clock = new Date;
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    hours < 1 ? clockHours.innerHTML = '00' : hours < 10 ? clockHours.innerHTML = '0' + hours : clockHours.innerHTML = hours;
    minutes < 1 ? clockMinutes.innerHTML = '00' : minutes < 10 ? clockMinutes.innerHTML = '0' + minutes : clockMinutes.innerHTML = minutes;
    seconds < 1 ? clockSeconds.innerHTML = '00' : seconds < 10 ? clockSeconds.innerHTML = '0' + seconds : clockSeconds.innerHTML = seconds;
}, 1000);