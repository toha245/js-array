// fast task : declare an array

let fruits = ['mango', 'palm', 'jackfruit', 'apple', 'orange'];
console.log(fruits[3]);
fruits[2] = 'jambura';
console.log(fruits);


// second task : add or remove elements (array manipulation)
let touristDestinations = ['cox bazar', 'seintmartin', 'sada pathor'];
touristDestinations.push('radar gul');
touristDestinations.push('sajek','bandorbon');
touristDestinations.pop();
console.log(touristDestinations);


// third task : checking array membership with 'includes'
// array of books containing different book.
const books = ['poddoja', 'love candy', 'kuasha', 'kasmir', 'enjoy your life'];
// Using the includes method to check array
console.log(books.includes('javascript'));
// printing a massage 
if(books.includes('javascript')){
    console.log('Yes, it’s there!');
}
else{
    console.log('No, it’s not there.');
}


// fourth task : Checking if it's an Array
// messages for array and not array
let arrayMessage = 'It’s an array';
let notArrayMessage = 'Not an array';

// different variables 
// variable no-1
let numbers = [20, 19, 50, 40,80];
let array = numbers;

// checking variable 
console.log(Array.isArray(array));

// applying messages for array and not array
if(Array.isArray(array)){
    console.log(arrayMessage);
}
else{
    console.log(notArrayMessage);
}

// variable no-2
let friends = 'hojaifa, muin, naim, kaim, daim';
let string = friends;

// checking variable 
console.log(Array.isArray(string));

// applying messages for array and not array

if(Array.isArray(string)){
    console.log(arrayMessage);
}
else{
    console.log(notArrayMessage);
}

// variable no-3

let isStudent = true;
let boolean = isStudent;

// checking variable 
console.log(Array.isArray(boolean));

// applying messages for array and not array

if(Array.isArray(boolean)){
    console.log(arrayMessage);
}
else{
    console.log(notArrayMessage);
}


// fifth task

// two arrays
// array - 1
const Friends = ['toha', 'muin', 'hojaifa'];
console.log(Friends);

// array - 2
const roles = [1, 2, 3];
console.log(roles);

// Using the concat method to combine the two arrays
const concat = Friends.concat(roles);
console.log(concat);


// console.log();