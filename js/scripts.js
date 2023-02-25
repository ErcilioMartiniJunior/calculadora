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
        
        //check if current operation already has a dot

        if(digit === "." && this.currentOperationsText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit
        this.updateScreen()
    }

    // process all calculator operations

    processOperation(operation) {
    
        // get current and previous value
        let operationValue
        let previous = +this.previousOperationText.innerText
        let current = +this.currentOperationsText.innerText

        //Operation verification
        switch(operation) {
            case "+":
                break
            default:
                return;
        }
    }

    // change values of the calculator screen

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
            calc.processOperation(value);
        }
    });
});