import MaskInput from './node_modules/mask-input';

export default class UIController {
    constructor () {
        this.myInput();
    }
    
    myInput() {
        this.numInp = document.getElementById('input'); 
    
        this.maskInput = new MaskInput(this.numInp, {
            mask: '0000-0000-0000-0000',
            alwaysShowMask: true,
            onChange: this.validCard.bind(this),
            maskChar: '_',
          });
    }

    validCard() {
        this.inpReg = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
        if (!this.inpReg.test(this.numInp.value)) {
            this.numInp.style.border = '2px solid red';
            this.inpVal = false;
        } else {
            this.numInp.style.border = '2px solid green';
            this.inpVal = true;
        }
    }
}
const uiController = new UIController();


