//es6-object.js
let person = {
    name: "Tiger",
    age: 20,
    eyecolor: "Red",
    fullname: () => {
        return ${person.name} : ${person.age};
    },
};

const x = person;
x.age = 30;
console.log(person.age);
console.log(x.fullname());

const numbers = [10,20,30];
function addFn(...num) {
    let sum=0;
    for (value of num) sum += parseInt(value);
    return sum;
}
console.log(addFn(10, 20, 30, 40));

//destructuring
const [a,b] = [10, 20, 30];
console.log(b);

const {name:rname, age} = person;
console.log(rname);