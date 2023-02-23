// element selection

const previosOperationText = document.querySelector("#previous-operation")
const currentOperationsText = document.querySelector("#current-operation")
const button = document.querySelectorAll("#buttons-container button")

// calculator logic application

class Calculator {
    constructor(previosOperationText, currentOperationsText) {
        this.previosOperationText = previosOperationText
        this.currentOperationsText = currentOperationsText
        this.currentOperation = ""
    }

    // add digit to calculator screen

    addDigit(digit) {
        
        this.currentOperation = digit
        this.updateScreen()
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