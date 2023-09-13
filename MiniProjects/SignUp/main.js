function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form_mess");
    messageElement.textContent = message;
    messageElement.classList.remove("form_mess--error","form_mess--success");
    messageElement.classList.add(`form_mess--${type}`);
}


function setInputError(inputElement, message){
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-mess").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-mess").textContent = "";
}

document.addEventListener('DOMContentLoaded', () =>{
    const loginForm = document.querySelector('#login');
    const creatAccountForm = document.querySelector('#createAccount');

    document.querySelector("#linkCreateAccount").addEventListener("click", (e) =>{
        e.preventDefault();
        loginForm.classList.add("from--hidden");
        creatAccountForm.classList.remove("from--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", (e) =>{
        e.preventDefault();
        creatAccountForm.classList.add("from--hidden");
        loginForm.classList.remove("from--hidden");
    });

    loginForm.addEventListener("submit",e=>{
        e.preventDefault();

        setFormMessage(loginForm, "error","Invalid Username/Password combination.")
    });

    document.querySelectorAll(".form_input").forEach(inputElement =>{
        inputElement.addEventListener("blur",e=>{
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement,"Username must be atleast 10 character in length.");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});