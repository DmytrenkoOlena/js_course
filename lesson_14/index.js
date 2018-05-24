// Домашнее задание:
// Создать папку lesson_14, файл index.js, В нем :
//  Написать функцию add, которая принимает один аргумент строку из символов эмодзи, и должна вернуть 
// среднее арифметические значение, суммы двух кодов эмодзи (эмодзи-символы состоят из двух unicode кодов).
// Например add('🍔😁') вернёт 56179.5. Если аргумент будет пустой, то его необходимо 
// обработать строку из эмодзи красного сердца и флага украины

//  Написать функцию clearNumbers, которая принимает один аргумент - массив массивов. 
// Функция должна вернуть этот же массив массивов, но очистив их от не числовых значений.

//  Написать функцию revers, которая принимает бесконечное количество аргментов, где каждый и них - строка. 
// Функция должна вернуть массив строк в обратном порядке, где каждая строка - будет задом-наперед, 
// Например: revers('123', '456')вернет ['654', '321']

//  Написать функцию splitArray которая первым аргументом принимает массив чисел, 
// а вторым количество элементов в подмассивах. Функция должна вернуть массив массивов.
// Например:  splitArray([1, 4, 5, 6, 2], 2) вернет [[1, 4], [5, 6], [2]]. Если количества элементов 
// недостаточно - последний подмассив может содержать меньшее количество элементов.


function add(uSmile = '🇺🇦❤️'){
	let firstSmileChars = uSmile.charCodeAt(0) + uSmile.charCodeAt(1);
	let secondSmileChars = uSmile.charCodeAt(2) + uSmile.charCodeAt(3);
	return ((firstSmileChars + secondSmileChars) / 2);

}
	// console.log(add('🍔😁'));


function cleanNumbers(array){
	for (i = 0; i < array.length; i++) {
		for (n = array[i].length - 1; n >= 0; n--) {
			if (Number.isInteger(array[i][n]) == false) {
				array[i].splice(n, 1);
		}
		}
	}
	return array;
}
// cleanNumbers([[1,2,3], ['a', 4,'s', 'e'], [6, 'c','r']]);


function reverseString(str) {
	var newString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}
// console.log(reverseString('123', '456');



function splitArray (arr,n) {
	let emptArr = [];
	for (let i = 0, k = 0; i < arr.length; i +=n, k++){ 
		emptArr[k] =  arr.slice(i, i + n );
}
	return emptArr
}

//console.log(splitArray([1, 4, 5, 6, 2], 2) )




