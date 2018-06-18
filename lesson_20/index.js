function Human(arr) {
    this.arr = arr; 
}

Human.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.arr.name}, i am ${this.arr.age} years old`);
};

let human = new Human({ name: 'Elena', age: 19 });
human.sayHello()

function AlevelStudent(arr) {
    this.array = arr;
}

AlevelStudent.prototype = human;

AlevelStudent.prototype.averageMark = function() {
    let marks = this.array.marks;
    let sum = 0;
    for (let i in marks) {
        sum += marks[i];
    }
    console.log(sum / marks.length);
}

let alevelStudent = new AlevelStudent({ name: 'Elena', age: 19, marks: [3, 3, 5, 8, 6] });
alevelStudent.averageMark()