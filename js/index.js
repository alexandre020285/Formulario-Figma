const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const menssagem = document.getElementById("menssagem");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    validacao()

})


username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

telefone.addEventListener("blur", () => {
    checkInputTelefone();
})

menssagem.addEventListener("blur", () => {
    checkInputMenssagem();
})


function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        formItem = username.parentElement;
        formItem.className = "form-content erro";
    } else {
        formItem = username.parentElement;
        formItem.className = "form-content ok";
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        formItem = email.parentElement;
        formItem.className = "form-content erro";
    } else {
        formItem = email.parentElement;
        formItem.className = "form-content ok";
    }
}

function checkInputTelefone() {
    const telefoneValue = telefone.value;

    if (telefoneValue === "") {
        formItem = telefone.parentElement;
        formItem.className = "form-content erro"
    } else {
        formItem = telefone.parentElement;
        formItem.className = "form-content ok"

    }
}

function checkInputMenssagem() {
    const menssagemValue = menssagem.value;

    if (menssagemValue === "") {
        formItem = menssagem.parentElement;
        formItem.className = "form-content erro"
    } else {
        formItem = menssagem.parentElement;
        formItem.className = "form-content ok"
    }
}


function validacao() {
    checkInputUsername();
    checkInputEmail();
    checkInputMenssagem();
    checkInputTelefone();

    const formItems = form.querySelectorAll(".form-content")

    const valido = [...formItems].every((item) => {
        return item.className === "form-content ok";
    });


    if (valido === true) {

        alert("PARABÉNS, CADASTRADO COM SUCESSO")
    }

}