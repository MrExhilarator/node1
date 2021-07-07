var calculator = require('./operations');
const process = require("process");


var args = process.argv.slice(2);
var operation = args[0];
args = args.slice(1).map(i => parseInt(i));

if (operation == "+") {
    console.log("Addition : "+calculator.addition(args));
}

if (operation == "-") {
    console.log("Subtraction : "+calculator.subtraction(args));
}

if (operation == "*") {
    console.log("Multiplication : " + calculator.multiplication(args));
}

if (operation == "/") {
    console.log("Division: " + calculator.division(args));
}