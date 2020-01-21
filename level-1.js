//Question 1

var animal = "dog";

//Question 2

var person = {
    name: "Vlad",
    age: 31
};

//Question 3

outOfStock = true; 

if(outOfStock === true) {
    console.log("Out of stock");
} 
else {
    console.log("In stock");
}

//Question 4

var numbers = [11,22,33,44,55];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
          
//Question 5

for(var i = 15; i <= 25; i++) {
    console.log(i);
}

//Question 6

for(var i = 15; i <= 25; i++) {
    if(i === 20) {
    console.log(20);
    } else {
    console.log("");
    };
}


//Question 7

var dogs = [
    {
        name: "Lucky",
        age: 5,
        neutered: false
    },
    {
        name: "Scott",
        age: 3,
        neutered: true
    }
];

for(var i = 0; i < dogs.length; i++) {
    console.log(dogs[i].age);
    console.log(dogs[i].neutered);
}

//Question 8 

function whatIDontLike(sport) {
    console.log("I don't like " + sport);
}

whatIDontLike("hockey");

//Question 9

function subtraction(numberOne,numberTwo) {
    var result = numberOne - numberTwo;
    console.log(result);
}

//Question 10

var arrayOne = [];

function functionOne(argumentOne) {
    arrayOne.push(argumentOne);
}

functionOne("a");





    
