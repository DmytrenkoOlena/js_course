
let myAge = 0;
let year;

if ( (myAge % 10 >= 5 || myAge % 10 == 0 || (myAge % 100 >= 11 && myAge % 100 < 21) )) {
  year = "лет";

} else if ( myAge % 10 == 1) {
  year = "год";

} else 
  year = "года";

console.log (`Мой возраст ${myAge} ${year}`);