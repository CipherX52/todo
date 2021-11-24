let form = document.getElementById("loginform");
form.addEventListener("submit",validate);

function validate(){
    init();

    let username = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");

    if (username.value.trim() == "admin" && password.value == "12345"){
        username.classList.add("is-valid");
        password.classList.add("is-valid");
        window.setTimeout(redirect,300);
    }
    else if (username.value.trim() == "admin" && password.value != "12345"){
        wrongPass();
        username.classList.add("is-valid");
        return false;
    }
    else{
        wrongName();
        wrongPass();
    }

}

function redirect(){
    window.location = "./todo.html";
}

function wrongName(){
    document.getElementById("warn1").innerText = "Please enter a valid username";
    document.querySelector("#floatingInput").classList.add("is-invalid");
}

function wrongPass(){   
    document.getElementById("warn2").innerText = "Invalid password";
    document.querySelector("#floatingPassword").classList.add("is-invalid");
}

function init(){
    document.getElementById("warn2").innerText = "";
    document.getElementById("warn1").innerText = "";
    document.getElementById("floatingInput").classList.remove("is-valid");
    document.getElementById("floatingPassword").classList.remove("is-valid");
    document.getElementById("floatingInput").classList.remove("is-invalid");
    document.getElementById("floatingPassword").classList.remove("is-invalid");
}