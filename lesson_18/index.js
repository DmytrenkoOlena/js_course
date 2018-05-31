const moment = require('moment');

let birthday = prompt("Дата вашего дня рождения (в формате 2019-01-31)", "");
let mBirthday = moment(birthday);
let mCurrent = moment(); 

document.write(moment(birthday, 'YYYY-MM-DD').diff(mCurrent, 'days'));