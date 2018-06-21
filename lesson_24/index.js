class Phone {
	constructor() {
		this.regExp = /^\+38(\(0\d\d\)|0\d\d)\d{3}[ -]?\d{2}[ -]?\d{2}$/; 
		this.phone = document.getElementById('phone');
		this.phone.onchange = this.validPhone.bind(this);
	}
	validPhone() {
		if (!this.regExp.test(this.phone.value)) {
			this.phone.style.border = '2px solid red';
		} else {
			this.phone.style.border = '2px solid green';
		}
	}
}
const phone = new Phone();
