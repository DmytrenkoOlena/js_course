
// Написать функцию “removeKeys1”, которая принимает два аргумента: первый это объект второй это массив строк.
// Эта функция должна вернуть исходный объект у которого не будет ключей, названия которых есть в массиве (втором аргумента). Например:
// removeKeys1({ a: 1, b: [], c: '' }, ['a', 'c']) Вернёт { b: [] }
// Написать функцию “removeKeys2”, аналогичную первой, которая вернет новый объект, у которого будут те же ключи 
// что и у первого аргумента, исключая те названия которых есть в массиве (втором аргументе)
// Написать функцию “absDiff”, которая принимает аргумент “a”, и возвращает функцию, 
// которая принимает только один аргумент аргумент “b”, и возвращает абсолютную разницу чисел “a” и “b”
// absDiff(3)(7) Вернёт 4
// Все написанные функции не должны быть вызваны ни разу в финальной версии кода!

let someObj = { a: 1, b: [], c: ''};
let someArr = ['a', 'c'];

function removeKeys1(obj, array) {
	for (i = 0; i < array.length; i++) {
		if (obj[array[i]] != undefined) {
			delete obj[array[i]];
		}
	}
	return obj;
}

function removeKeys2(obj, array) {
	let newObj = {};
	for (let key in obj) {
		if (array.includes(key) == false) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
// removeKeys2(someObj, someArr);

function absDiff(a) {
	return function (b) {
		return Math.abs(a - b);
	}
}

// console.log(absDiff(3)(7));

