const n = 10;

const numbers = document.getElementById('numbers');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const second = document.getElementById('second');
const plural = document.getElementById('plural');

for (i = 1; i <= n; i += 1) {
	let span = document.createElement('span');
	span.setAttribute('id', `mySpan${i}`);
	span.appendChild(document.createTextNode(i));
	numbers.insertBefore(span, numbers.children[i]);
	if(i < n) {
		numbers.insertBefore(document.createTextNode(', '), numbers.children[i + 1])
	}
}

plural.innerHTML = 's';

let num = 0;
let counter = 0;
let speed = 1000;
let interval;
let timerPause = false;

second.appendChild(document.createTextNode(num));

function count() {
	interval = setInterval(function(){
		num += 1;
		second.innerHTML = num;

		if (num === 1) {
			plural.innerHTML = '';
		} else {
			plural.innerHTML = 's';
		}

		if (counter < n) {
			counter += 1;
			document.getElementById(`mySpan${counter}`).style.backgroundColor = 'green';
		} else if (counter === n) {
			counter += n + 1;
			document.getElementById(`mySpan${counter - n - 1}`).style.backgroundColor = 'gray';
			counter -= 1;
		} else if (counter > n + 1) {
			counter -= 1;
			document.getElementById(`mySpan${counter - n}`).style.backgroundColor = 'gray';
		} else if (counter === n + 1) {
			counter = 0;
			document.getElementById(`mySpan${counter + 1}`).style.backgroundColor = 'green';
			counter += 1;
		}
		start.setAttribute('disabled', 'true');
		timerPause = false;
	}, speed);


	pause.addEventListener('click', function(){
		clearInterval(interval);
		start.removeAttribute('disabled');
		timerPause = true;
	})

	stop.addEventListener('click', function(){
		clearInterval(interval);
		second.innerHTML = 0;
		num = 0;
		counter = 0;

		let numb = numbers.children;
		for (let i = 1; i < numb.length - 1; i++ ) {
			numb[i].style.backgroundColor = '';
		}

		plural.innerHTML = 's';
		start.removeAttribute('disabled');
		timerPause = false;
	})
}

start.addEventListener('click', count);

document.getElementById('x1').addEventListener('click', function(){
	speed = 1000;
	clearInterval(interval);
	if (num > 0 && timerPause === false) count();
});
document.getElementById('x2').addEventListener('click', function(){
	speed = 500;
	clearInterval(interval);
	if (num > 0 && timerPause === false) count();
});
document.getElementById('x3').addEventListener('click', function(){
	speed = 336;
	clearInterval(interval);
	if (num > 0 && timerPause === false) count();
})