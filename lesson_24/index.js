class Phone {
	constructor() {
		this.regExp = /^\+38(\(0\d\d\)|0\d\d)\d{3}[ -]?\d{2}[ -]?\d{2}$/; 
		this.phone = document.getElementById('phone');
		this.phone.onchange = this.validPhone.bind(this);
	}
	validPhone() {
		if (!this.regExp.test(this.phone.value)) {
			this.phone.style.border = "2px solid red";
		} else {
			this.phone.style.border = "2px solid green";
		}
	}
}
class Email {
    constructor() {
        this.regExp = /^\w+\.?[\w]+@\w{1,12}\.[a-zA-Z]{2,6}/;
        this.email = document.getElementById('email');
        this.email.onchange = this.validEmail.bind(this);
    }
    validEmail() {
        if(!this.regExp.test(this.email.value)) {
            this.email.style.border = "2px solid red";
        } else {
            this.email.style.border = "2px solid green";
        }
    }
}
class TextArea {
	constructor () {
		this.regExp = /\w[\w!#$%&'*+\-/=?^_`{|}~]+\.?[\w!#$%&'*+\-/=?^_`{|}~]+@\w{1,12}\.[A-z]{2,3}/igm;
		this.content = document.getElementById('content');
		this.search = document.getElementById('search');
		
		this.search.onclick = this.getEmails.bind(this);
	}
	getEmails() {
		this.emailList = this.content.value.match(this.regExp);
		if(this.emailList) {
			this.list = document.createElement('ol');
			this.emailList.forEach(el => {
				let li = document.createElement('li');
				li.id = el;
				li.textContent = el;
				this.list.appendChild(li);
			});
			document.body.appendChild(this.list);
		}
	}
}

const phone = new Phone();
const email = new Email();
const textArea = new TextArea();
