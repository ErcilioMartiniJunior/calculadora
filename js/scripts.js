// seleção dos elementos

const previosOperationText = document.querySelector("#previous-operation")
const currentOperationsText = document.querySelector("#current-operation")
const button = document.querySelectorAll("#buttons-container button")

// lógica de aplicação da calculadora

class Calculator {}

// eventos

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === ".") {
            console.log(value);
        } else {
            console.log("Op: " + value);
        }
    });
});