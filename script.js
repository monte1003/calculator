const display = document.getElementById('display')
const buttons =  document.querySelectorAll('button')
const operators = ['%','*','/','-','+','=']

let output=""

const calculate = (btnValue)=>{
    if (btnValue == '=' && btnValue!=''){
        output = eval(output.replace("%", "/100"))
    }
    else if(btnValue === 'AC'){
        output =""
    }
    else if(btnValue === 'DEL'){
        output = output.toString().slice(0,-1)

    }
    else{
        if(output=="" && operators.includes(btnValue)) return;
        output += btnValue
    }
    display.value = output

}

buttons.forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>calculate(e.target.dataset.value))
})