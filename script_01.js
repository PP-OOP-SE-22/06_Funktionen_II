
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/








// */ module: calculator | test:
// agreement : "+", "-","*","/"



// application / App
startApp();
function startApp() {
    output(calculator(getNumber("1st"),getNumber("2nd"),getOp()))
}
    function getNumber(figure) {
        let inputStr = prompt("Please insert " + figure + " number");
        let num = parseInt(inputStr);
        return num;
}
output(getOp());
function getOp() {
    let op = prompt("please insert operator")
    if (isOpValid(op)) {
        return "operator ok";
    } else {
        return "operator nicht ok";
}
}
function isOpValid(op) {
    switch (isOpValid) {
        case "+":
            case "-":
                case "*":
                    case "/":
            return true;    
        default:
           return false;
    }
}


// */ module: calculator | test:
// agreement : "+", "-","*","/"

// output(calculator(2,2,"+"));
// output(calculator(2,2,"-"));
// output(calculator(2,2,"*"));
// output(calculator(2,2,"/"));
// output(calculator(2,0,"/"));
// output(calculator(2,2,"#?!"));

function calculator(a,b,op)
{
    switch (op)
    {
        case "+":  // addition
            return add(a,b);
        case "-": // subtraction
            return subtract(a,b);
        case "*": //multiply
            return multiply(a,b);
        case "/": //divide
            return divide(a,b);
        default: // Error
            return "something went wrong";
    }
}


// */ module: divide a / b | test:
// output(divide(2,3));
// output(divide(2,-3));
// output(divide(2,0));
function divide(a,b)
{
    if(b == 0) {
        return "Division by 0 not possible";
    }
    return a/b;
}
    


// */ module: multiply a * b | test:

// output(multiply(2,3));
// output(multiply(2,-3));
// output(multiply(2,0));
function multiply(a,b)
{   
    return a * b;
}

// */ module: subtract a - b | test:

// output(subtract(2,3));
// output(subtract(2,-3));
// output(subtract(2,0));
function subtract(a,b)
{   
    return a - b;
}

// */ module: addition a +b | test:

// output(add(2,3));
// output(add(2,-3));
// output(add(2,0));
function add(a,b)
{
    return a + b;
}


// module: console output | test:
// output("hello");
// output(2);
function output(outputData)
{
// console.log(typeof outputData);

    if (true)
    {
        console.log("The result is: " + outputData);
    } 
        else
        {
            console.log("Error: " + outputData);
        }
    }
    