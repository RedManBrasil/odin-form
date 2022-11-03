let pwd_1input = "";
let pwd_2input = "";

const error_message = document.querySelector('#error_password');
const submit_btn = document.querySelector('#submit_button');

submit_btn.disabled = true; //the submit button starts disabled

const password_op = document.querySelector('#password'); 
password_op.addEventListener("change", (a) => { 
    pwd_1input = a.target.value;
    if (pwd_2input != ""){
        if (pwd_1input != pwd_2input){
            submit_btn.disabled = true;
            error_message.classList.remove("invisible");
        } else{
            submit_btn.disabled = false;
            error_message.classList.add("invisible");
        }
    }
});

const ConfirmPassword_op = document.querySelector('#confirm-password'); 
ConfirmPassword_op.addEventListener("change", (a) => { 
    pwd_2input = a.target.value;
    if (pwd_1input != pwd_2input){
        submit_btn.disabled = true;
        error_message.classList.remove("invisible");
    } else{
        submit_btn.disabled = false;
        error_message.classList.add("invisible");
    }
});

    