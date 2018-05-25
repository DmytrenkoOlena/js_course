
// 1. Написать функцию “itsMe”, которая принимает один аргумент - строку с.
// Она должна вернуть строку “It’s me, {a}”, где вместо {a}, значение аргумента.
// Если аргумент не был передан, вместо него должен быть использован ваш никнейм на
// github. Так же, перед тем как вернуть значение, эта функция должна вывести строку в
// консоль. Пример: itsMe('mario') // вернет "It's me, mario"

function itsMe(a) {
	if (!a) {
	let a = 'DmytrenkoOlena';
	}
	let fullString = "It’s me, " + a;
	console.log(fullString);
	return fullString;
}
// itsMe('mario');


// 2. Написать функцию “compare”, которая принимает два аргумента - два числа
// Она должна вернуть строку:
// “{первый} > {второй}”, если первое число больше второго.
// “{первый} < {второй}”, если второе число больше первого.
// “{первый} == {второй}”, если второе равняется первому.
// “НЕ ЧИСЛО”, если один или оба аргумента не являются числами.
// (вместо {первый} и {второй} -значения соответствующих аргументов)

function compare(num, numb) {
	if (num > numb) {
		console.log('“{первый} > {второй}”');
	} else if (num < numb) {
		console.log('“{первый} < {второй}”');
	} else if (num == numb) {
		console.log('“{первый} == {второй}”');
	} else if (typeof num != "number" || typeof numb != "number") {
		console.log('“НЕ ЧИСЛО”');
	}
}
// compare(3, 4)


// 3.Написать функцию “row”, которая принимает 4 аргумента - 3 числа и строку которая
// может быть ‘>’ или ‘<’
// Она должна вернуть строку в которой числа стоят в порядке убывания или возрастания в
// зависимости от аргумента строки.

function row(a, b, c, str) {

}

// 4.Написать функцию “fact”, которая принимает 1 аргумент - число.
// Она должна вернуть факториал числа.
// Пример:
// fact(4) // 24
// fact(0) // 1
// fact(5) // 120, так как 1 * 2 * 3 * 4 * 5 = 120
// Факториал числа n - произведение всех натуральных чисел от 1 до n включительно.

function fact(a) {
	let numb = 1;
	for(let i = 1; i < a; i++){
	numb *= (i + 1);
	}
	return numb;
}

// console.log(fact(5))


// 5. Написать функцию “matrixDiff”, которая принимает 2 аргумента, каждый из аргументов
// это массив массивов чисел.
// Она должна вернуть сумму абсолютных разниц соответствующих элементов этих
// структур. И должна вернуть NaN, если размеры массивов не совпадают.
// Пример:
// matrixDiff(
// [[2, 3], [4, 5]],
// [[2, 1], [6, 5]],
// ); // вернет 4, так как |3 - 1| + |4 - 6| = 4
// matrixDiff([[2, 3], [4, 5]],[[2, 1], [6]]); // вернет NaN

function matrixDiff(arr, array) {
	for (i = 0; i < arr.length; i++);
}









