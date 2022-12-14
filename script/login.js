const visibleButtonLogin = document.querySelector('.visible__password');
const logPassword = document.querySelector('.login__userpassword');
const logUsername = document.querySelector('.login__username');

const logButtonSubmit = document.querySelector('.button__login__submit');

const logUsernameError = document.querySelector('.input__error');

const capsOnMassage = document.querySelector('.capslockOn');

const loginSuccesfullBlock = document.querySelector('.login__succesfull');
const loginSuccesfullPage = document.querySelector('.login__succesfull__page');

const logSuccsesfullSpanFirst = document.querySelector('.Loading__1');
const logSuccsesfullSpanSecond = document.querySelector('.Loading__2');
const logSuccsesfullSpanThirt = document.querySelector('.Loading__3');

const loginSuccesfulLoading = document.querySelector('.login__succesfull__loading');
const loginSuccesfullDone = document.querySelector('.login__succesfull__done');

function visibleButtonLoginFunc() {
    visibleButtonLogin.classList.toggle('not__visible');
    if (logPassword.getAttribute('type') === 'password') {
        logPassword.setAttribute('type', 'text');
    } else {
        logPassword.setAttribute('type', 'password');
    }
}

visibleButtonLogin.addEventListener('click', visibleButtonLoginFunc);

document.addEventListener('keydown', (event) => {
    let caps = event.getModifierState && event.getModifierState('CapsLock');
    if (caps) {
        capsOnMassage.style.display = 'inline';
    } else {
        capsOnMassage.style.display = 'none';
    }
})

logButtonSubmit.addEventListener('click', () => {
    let logUsernameValue = logUsername.value;
    let logPasswordValue = logPassword.value;
    let logUsernameValueArray = logUsernameValue.split('');
    let logPasswordValueArray = logPasswordValue.split('');
    if (!logUsernameValueArray.includes(' ') && !logPasswordValueArray.includes(' ') && logUsernameValue !== '' && logPasswordValue !== '') {
        logUsernameError.innerHTML = '';
        loginSuccesfullBlock.style.display = 'flex';
        loadingLogin ();
    } else if (logUsernameValueArray.includes(' ') || logPasswordValueArray.includes(' ')) {
        logUsernameError.innerHTML = 'The fields contains spaces';
    }

})

function loadingLogin () {
    logSuccsesfullSpanFirst.innerHTML = '.';
    setTimeout(() => {
            logSuccsesfullSpanSecond.innerHTML = '.';
        }, 1000)
    setTimeout(() => {
            logSuccsesfullSpanThirt.innerHTML = '.';
    }, 2000)
    setTimeout(() => {
            logSuccsesfullSpanFirst.innerHTML = '';
            logSuccsesfullSpanSecond.innerHTML = '';
            logSuccsesfullSpanThirt.innerHTML = '';
    }, 3000)
    setInterval(() => {
        logSuccsesfullSpanFirst.innerHTML = '.';
        setTimeout(() => {
            logSuccsesfullSpanSecond.innerHTML = '.';
        }, 1000)
        setTimeout(() => {
            logSuccsesfullSpanThirt.innerHTML = '.';
        }, 2000)
        setTimeout(() => {
            logSuccsesfullSpanFirst.innerHTML = '';
            logSuccsesfullSpanSecond.innerHTML = '';
            logSuccsesfullSpanThirt.innerHTML = '';
        }, 3000)
    }, 4000)
    setTimeout(() => {
        loginSuccesfulLoading.style.display = 'none';
        loginSuccesfullDone.style.display = 'flex';
    }, 15000)
    setTimeout(() => {
        location.reload();
    }, 17000)
}