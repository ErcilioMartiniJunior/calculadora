// seleção dos elementos

const previosOperationText = document.querySelector("#previous-operation")
const currentOperationsText = document.querySelector("#current-operation")
const button = document.querySelectorAll("#buttons-container button")

// lógica de aplicação da calculadora

class Calculator {
    constructor(previosOperationText, currentOperationsText) {
        this.previosOperationText = previosOperationText
        this.currentOperationsText = currentOperationsText
        this.currentOperation = ""
    }

    // adiciona dígito na tela da calculadora

    addDigit(digit) {
        
        this.currentOperation = digit
        this.updateScreen()
    }

// muda valores da tela da calculadora

updateScreen() {
    this.currentOperationsText.innerText += this.currentOperation;
}

}

const calc = new Calculator(previosOperationText, currentOperationsText);

// eventos

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            console.log("Op: " + value);
        }
    });
});