
let data = [
	{className: 'class', attributes: { 'data-name': 'Anatoliy' }, content: 'Some Text1' },
	{className: 'class', attributes: { 'data-name': 'Anatoliy' }, content: 'Some Text2'},
	{className: 'class', attributes: { 'data-name': 'Anatoliy' }, content: 'Some Text3'}
	];


function init(data, counter) {
	let ul = document.createElement('ul');

	for (i = 0; i < data.length; i++) {
		let className = data[i].className;
		let attributes = data[i].attributes;
		let content = data[i].content;

		for (j = 0; j <= counter; j++) {
			let li = document.createElement('li');

			for (let prop in attributes) {
				li.setAttribute(prop, attributes[prop]);
			}

			li.classList.add(className);
			li.innerHTML = content;

			ul.appendChild(li);
		}
	}

	let body = document.getElementsByTagName('body')[0];
	body.appendChild(ul);
}
function listen() {
	let ul = document.getElementsByTagName('ul');

	if (!ul.length) {
		return false;
	}

	for (let elem of ul) {
		elem.remove();
	}

	return true;
}

let deleteBtn = document.getElementById('delete');

deleteBtn.addEventListener('click', listen, false);



















