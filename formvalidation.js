// Form Validation
let registrationForm = document.querySelector('#register-form')
registrationForm.addEventListener('submit', function(event){
    event.preventDefault();      // Stop auto form submission
    if (validateForm()){
        signUp()
    }
    
})

let validateForm = () => {
    
    return (checkfirstName() && checklastName() && checkEmail() && checkPassword() && checkConfirmPassword())
}

let checkfirstName = () => {
    let inputEl = document.querySelector('#firstName')
    let inputFeedbackEl = document.querySelector('#firstName-feedback')
    let regExp = /^[a-zA-Z0-9]{4,15}$/
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}

let checklastName = () => {
    let inputEl = document.querySelector('#lastName')
    let inputFeedbackEl = document.querySelector('#lastName-feedback')
    let regExp = /^[a-zA-Z0-9]{4,15}$/
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}

let checkEmail = () => {
    let inputEl = document.querySelector('#eMail')
    let inputFeedbackEl = document.querySelector('#eMail-feedback')
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}

let checkPassword = () => {
    let inputEl = document.querySelector('#passWord')
    let inputFeedbackEl = document.querySelector('#passWord-feedback')
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}

let checkConfirmPassword = () => {
    let inputEl = document.querySelector('#c_passWord')
    let passwordEl = document.querySelector('#passWord')
    let inputFeedbackEl = document.querySelector('#c_passWord-feedback')
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (regExp.test(inputEl.value) && (inputEl.value === passwordEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}


// Make Valid
let makeValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid')
    inputEl.classList.remove('is-form-invalid')
    inputFeedbackEl.classList.add('text-success')
    inputFeedbackEl.classList.remove('text-danger')
    inputFeedbackEl.innerHTML = 'Looks Good'
}

let makeInValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid')
    inputEl.classList.add('is-form-invalid')
    inputFeedbackEl.classList.remove('text-success')
    inputFeedbackEl.classList.add('text-danger')
    inputFeedbackEl.innerHTML = `please Enter a ${inputEl.placeholder}`
}

let firstNameEl = document.querySelector('#firstName')
firstNameEl.addEventListener('keyup', function(){
    checkfirstName()
})

let lastNameEl = document.querySelector('#lastName')
lastNameEl.addEventListener('keyup', function(){
    checklastName()
})

let emailEl = document.querySelector('#eMail')
emailEl.addEventListener('keyup', function(){
    checkEmail()
})

let passwordEl = document.querySelector('#passWord')
passwordEl.addEventListener('keyup', function(){
    checkPassword()
})

let c_passwordEl = document.querySelector('#c_passWord')
c_passwordEl.addEventListener('keyup', function(){
    checkConfirmPassword()
})