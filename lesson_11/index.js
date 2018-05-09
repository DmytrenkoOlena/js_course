let a = 1;
let b = 13;
let operation = "sub";

switch(operation) {
	case "add":
	console.log(a + b);
	break;

	case "sub":
	console.log(a - b);
	break;

	case "mult":
	console.log(a * b);
	break;

	case "div":
	console.log(a / b);
	break;

	case "pow":
	console.log(Math.pow(a,b));
	break;

	default:
	console.log("Значение не соответствует операторам (add || sub || mult || div || pow) ");
	break;

}