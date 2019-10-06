
class Calculator{
    constructor(previousOperandButtonTextElement, currentOperandButtonTextELement){
        this.currentOperandButtonTextELement=currentOperandButtonTextELement;
        this.previousOperandButtonTextElement=previousOperandButtonTextElement;
        this.clear();
        this.delete();
        this.appendNumber();
        this.chooseOperation();
        this.compute();
        this.updateDisplay();

    }

    clear(){
     this.current-operand = ''
     this.previous-operand = ''
     this.operation = undefined

    }

    delete(){

    }
    appendNumber(number){
    this.currentopernad= this.currentOperand.toString()+number.toString()
    }

    chooseOperation(operation){

    }
    compute(){

    }

    updateDispplay(){
this.currentOperandButtonTextELement.innerText= this.currentOperand
    }
}



const numberButtons=document.querySelectorAll('[data-number]')
const operatorButtons=document.querySelectorAll('[data-operator]')
const equalsButtons=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const previousOperandButtonTextElement=document.querySelector('[data-previous-operand]')
const currentOperandButtonTextELement=document.querySelector('[data-current-operand')

const calculator = new Calculator(previousOperandButtonTextElement,currentOperandButtonTextELement)

numberButtons.forEach(button =>{
button.addEventListern('click', () => {
   calculator.appendNumber(button.innerText)  
   calculator.updateDispplay()
})
})