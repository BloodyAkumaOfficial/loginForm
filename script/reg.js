
const visibleButtonReg = document.querySelector('.visible__password__reg');

const capsOnMassageReg = document.querySelector('.capslockOnReg');

const randomPassButton = document.querySelector('.button__create__pass');

const regName = document.querySelector('.registration__name');
const regSurname = document.querySelector('.registration__surname');
const regEmail = document.querySelector('.registration__email');
const regNumber = document.querySelector('.registration__phone');
const regUsername = document.querySelector('.registration__username');
const regPassword = document.querySelector('.registration__password');
const regPasswordCheck = document.querySelector('.registration__chekpassword');

const errorName = document.querySelector('.error__name');
const errorSurname = document.querySelector('.error__surname');
const errorEmail = document.querySelector('.error__email');
const errorNumber = document.querySelector('.error__number');
const errorUsername = document.querySelector('.error__username');
const errorPassword = document.querySelector('.error__checkpassword');

const isRegName = (str) => /^[A-Z]+$/i.test(str);
const isRegEmail = (str) => /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(str);
const isRegNumber = (str) => /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(str);

const regButtonSubmit = document.querySelector('.button__registration__submit');

const regSuccesfullBlock = document.querySelector('.reg__succesfull');
const regSuccesfullPage = document.querySelector('.reg__succesfull__page');

const regSuccesfulLoading = document.querySelector('.reg__succesfull__loading');
const regSuccsesfullSpanFirst = document.querySelector('.Loading__1__reg');
const regSuccsesfullSpanSecond = document.querySelector('.Loading__2__reg');
const regSuccsesfullSpanThirt = document.querySelector('.Loading__3__reg');

const regSuccesfullDone = document.querySelector('.reg__succesfull__done');

function visibleButtonRegFunc () {
    visibleButtonReg.classList.toggle('not__visible');
    if (regPassword.getAttribute('type') === 'password') {
        regPassword.setAttribute('type', 'text');
        regPasswordCheck.setAttribute('type', 'text');
    } else {
        regPassword.setAttribute('type', 'password');
        regPasswordCheck.setAttribute('type', 'password');
    }
}

visibleButtonReg.addEventListener('click', visibleButtonRegFunc);

document.addEventListener('keydown', (event) => {
    let caps = event.getModifierState && event.getModifierState('CapsLock');
    if (caps) {
        capsOnMassageReg.style.display = 'inline';
    } else {
        capsOnMassageReg.style.display = 'none';
    }
})

function getRandomPass () {
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let possibleNum = '0123456789';
    let possibleLitters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let genPass = '';
    for (let i = 0; i < 9; i++) {
        genPass += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    genPass += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
    genPass += possibleLitters.charAt(Math.floor(Math.random() * possibleLitters.length));
    regPassword.value = genPass;
    regPasswordCheck.value = genPass;
}

function haveErrors () {
    if (!isRegName(regName.value)) {
        errorName.style.display = 'inline';
    } else {
        errorName.style.display = 'none';
    }
    if (!isRegName(regSurname.value)) {
        errorSurname.style.display = 'inline';
    } else {
        errorSurname.style.display = 'none';
    }
    if (!isRegNumber(regNumber.value)) {
        errorNumber.style.display = 'inline';
    } else {
        errorNumber.style.display = 'none';
    }
    if (!isRegEmail(regEmail.value)) {
        errorEmail.style.display = 'inline';
    } else {
        errorEmail.style.display = 'none';
    }
    let regUsernameVallue = regUsername.value;
    let regUsernameArr = regUsernameVallue.split('');
    if (regUsernameArr.includes(' ') || regUsernameVallue === '') {
        errorUsername.style.display = 'inline';
    } else {
        errorUsername.style.display = 'none';
    }
    let regPasswordVallue = regPassword.value;
    let regPasswordArr = regPasswordVallue.split('');
    let regPasswordCheckVallue = regPasswordCheck.value;
    if (regPasswordVallue !== '' && !regPasswordArr.includes(' ') && regPasswordVallue === regPasswordCheckVallue) {
        errorPassword.style.display = 'none';
    } else {
        errorPassword.style.display = 'inline';
    }
}

function loadingReg () {
    regSuccsesfullSpanFirst.innerHTML = '.';
    setTimeout(() => {
        regSuccsesfullSpanSecond.innerHTML = '.';
        }, 1000)
    setTimeout(() => {
        regSuccsesfullSpanThirt.innerHTML = '.';
    }, 2000)
    setTimeout(() => {
        regSuccsesfullSpanFirst.innerHTML = '';
        regSuccsesfullSpanSecond.innerHTML = '';
        regSuccsesfullSpanThirt.innerHTML = '';
    }, 3000)
    setInterval(() => {
        regSuccsesfullSpanFirst.innerHTML = '.';
        setTimeout(() => {
            regSuccsesfullSpanSecond.innerHTML = '.';
        }, 1000)
        setTimeout(() => {
            regSuccsesfullSpanThirt.innerHTML = '.';
        }, 2000)
        setTimeout(() => {
            regSuccsesfullSpanFirst.innerHTML = '';
            regSuccsesfullSpanSecond.innerHTML = '';
            regSuccsesfullSpanThirt.innerHTML = '';
        }, 3000)
    }, 4000)
    setTimeout(() => {
        regSuccesfulLoading.style.display = 'none';
        regSuccesfullDone.style.display = 'flex';
    }, 15000)
    setTimeout(() => {
        location.reload();
    }, 17000)
}

randomPassButton.addEventListener('click', getRandomPass);

regButtonSubmit.addEventListener('click', () => {
    haveErrors();
    if(errorName.style.display === 'none' && errorSurname.style.display === 'none' && errorEmail.style.display === 'none' && errorNumber.style.display === 'none' && errorUsername.style.display === 'none' && errorPassword.style.display === 'none') {
        regSuccesfullBlock.style.display = 'flex';
        loadingReg();
    }
})

