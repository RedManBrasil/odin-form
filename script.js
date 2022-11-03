let passwords_equal = false; //variavel que acompanha se as senhas são iguais

let pwd_1input = "";
let pwd_2input = "";

const error_message = document.querySelector('#error_password');

const password_op = document.querySelector('#password'); 
password_op.addEventListener("change", (a) => { 
    pwd_1input = a.target.value;
    if (pwd_2input != ""){
        if (pwd_1input != pwd_2input){
            error_message.classList.remove("invisible");
        } else{
            error_message.classList.add("invisible");
        }
    }
});

const ConfirmPassword_op = document.querySelector('#confirm-password'); 
ConfirmPassword_op.addEventListener("change", (a) => { 
    pwd_2input = a.target.value;
    if (pwd_1input != pwd_2input){
        error_message.classList.remove("invisible");
    } else{
        error_message.classList.add("invisible");
    }
});

    