
const inputName = document.querySelector("#input-nombre");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-mes");
const inputYear = document.querySelector("#input-año");
const inputCVC = document.querySelector("#input-cvc");
const cardNumber = document.querySelector("#numeros-frente");
const cardName = document.querySelector("#titular");
const cardMonth = document.querySelector("#exp-mes");
const cardYear = document.querySelector("#exp-año");
const cardCVC = document.querySelector("#tarjeta-cvc");
const form = document.querySelector("#form");
const thankYou = document.querySelector("#thank-you");
const buttonContinue = document.querySelector("#continue");

function soloLetras(e) {
    let key = e.keyCode || e.which;
    let tecla = String.fromCharCode(key).toLowerCase();
    let letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    let especiales = [8, 37, 39, 46];
    let tecla_especial = false
    for (let i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Appleseed";
    }

    inputName.addEventListener('input', function () {
        if (this.value.length > 24)
            this.value = this.value.slice(0, 24);
    })
})

function soloNumeros(e) {
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key);
    var numeros = "0123456789";
    var especiales = [8, 37, 39, 46];
    var tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (numeros.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}




inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;

    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
    }

    inputNumber.addEventListener('input', function () {
        if (this.value.length > 16)
            this.value = this.value.slice(0, 16);
    })

})

inputMonth.addEventListener("input", () => {
    cardMonth.innerText = inputMonth.value;

    if (inputMonth.value.length === 0) {
        cardMonth.innerText = "00";
    }

    inputMonth.addEventListener('input', function () {
        if (this.value.length > 2)
            this.value = this.value.slice(0, 2);
    })
})

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value;

    if (inputYear.value.length === 0) {
        cardYear.innerText = "00";
    }

    inputYear.addEventListener('input', function () {
        if (this.value.length > 2)
            this.value = this.value.slice(0, 2);
    })
})

inputCVC.addEventListener("input", () => {
    cardCVC.innerText = inputCVC.value;

    if (inputCVC.value.length === 0) {
        cardCVC.innerText = "000";
    }

    inputCVC.addEventListener('input', function () {

        if (this.value.length > 3)
            this.value = this.value.slice(0, 3);
    })

})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    thankYou.classList.remove("disabled");
})

buttonContinue.addEventListener("click", () => {
    form.classList.remove("disabled");
    thankYou.classList.add("disabled");
    form.reset();
    cardName.innerText = "Jane Appleseed";
    cardNumber.innerText = "0000 0000 0000 0000";
    cardMonth.innerText = "00";
    cardYear.innerText = "00";
    cardCVC.innerText = "000";
})