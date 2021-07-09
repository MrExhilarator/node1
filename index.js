var calculator = require('./operations');
const process = require("process");


var args = process.argv.slice(2);
var operation = args[0];
args = args.slice(1).map(i => parseInt(i));

switch(operation){
    case '+':
        console.log("Addition : "+calculator.addition(args));
        break;
    case '-':
        console.log("Subtraction : "+calculator.subtraction(args));
        break;
    case '*':
        console.log("Multiplication : " + calculator.multiplication(args));
        break;
    case '/':
        console.log("Division: " + calculator.division(args));
        break;
    default:
        console.log("Invalid operator");
}
