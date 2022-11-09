const forms = document.querySelector(".forms"),
    form1 = document.querySelector(".form.login"),
    form2 = document.querySelector(".form.signup"),
    email1 = document.querySelector(".email1"),
    email2 = document.querySelector(".email2"),
    pwd1 = document.querySelector(".password"),
    pwd2 = document.querySelector(".password2"),
    pwdShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");


pwdShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password , .password2");

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace('bx-hide', 'bx-show');
                return;
            }
            password.type = "password";
                eyeIcon.classList.replace('bx-show', 'bx-hide');
        })
    })
})

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // preventing form submit 
        forms.classList.toggle("show-signup");
    })
})


// Handle the validation form
forms.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail1 = email1 => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email1).toLowerCase());
}
const isValidEmail2 = email2 => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email2).toLowerCase());
}

const validateInputs = () => {
    const emailValue1 = email1.value.trim();
    const emailValue2 = email2.value.trim();
    const pwdlValue1 = pwd1.value.trim();
    const pwdlValue2 = pwd2.value.trim();

    if(emailValue1 === "") {
        setError(email1, 'Email is requierd!');
    }
    else if(!isValidEmail1(emailValue1)) {
        setError(email1, 'Set a valid email address');
    }
    else{
        setSuccess(email1);
    }
    if(emailValue2 === "") {
        setError(email2, 'Email is requierd!');
    }
    else if(!isValidEmail2(emailValue2)) {
        setError(email2, 'Set a valid email address');
    }
    else{
        setSuccess(email2);
    }


    if(pwdlValue1 === "") {
        setError(pwd1, 'Password is required!');
    }
    else if(pwdlValue1.length < 8) {
        setError(pwd1, 'Password must be at least 8 characters.');
    }
    else{
        setSuccess(pwd1);
    }
    if(pwdlValue2 === "") {
        setError(pwd2, 'Please confirm your password!');
    }
    else if(pwdlValue1 !== pwdlValue2) {
        setError(pwd2, "Passwords doesn't match");
    }
    else{
        setSuccess(pwd2);
    }
}