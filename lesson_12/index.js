const arr1 = [1, 13, -3, 0];
let sum = 0;in
let min = arr1[0];
let max = arr1[0];

for (let i = 0; i < arr1.length; i++) {
	sum += arr1[i];
}

console.log(sum);
console.log(sum / arr1.length);
console.log( Math.min.apply(null, arr1));
console.log( Math.max.apply(null, arr1));


const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };

console.log(obj1.join(' ,'));


let arr = [4, 5, 12, 7, 5, 4]; 
let newArr = [];

	for (let  i = 0; i < arr.length; i++) {
		if (typeof arr[i] != "string") {
			continue;
		} else {
			newArr.push(arr[i]); 
		}
	}

console.log(newArr);


