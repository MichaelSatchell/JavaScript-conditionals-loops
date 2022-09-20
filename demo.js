//1. FizzBuzz Function
//Using the Instructions below, write a function that prints numbers from 1 to an upper limit. That upper limit should be passed into your function as an argument.
//Ex. genBuzz(15) should print the genBuzz pattern described below from 1 to the upper limit of 15.


 const genBuzz = (limit) => {
    for(let i = 1; i <= limit; i++) {
         let word = ''
         if (i % 3 == 0) word = 'gen';
        if (i % 5 == 0) word = 'buzz';

             console.log(word || i)
     }
 }
     genBuzz(15);
//Instructions: For numbers from 1 to an upper limit (inclusive), print 'Gen' to the console if the number is a multiple of 3, print 'Buzz' if it is a multiple 5, print 'GenBuzz' if it a multiple of both 3 and 5. Otherwise, print the number to the console. Be sure to check that number your upperLimit is of type number.
//E-Commerce Item list

//Write your code below this line:

// function genBuzz(limit) {
//     for (let i = 1; i <= limit; i++) {
//         let word =''
//         if ( i % 3 == 0) word = 'gen';
//         if (i % 5 ==0) word = 'buzz';
           
//             console.log(word || i)
//         }
//     }


// genBuzz(22)

//2. E-Commerce Item list Function
//Write your code below this line:
// 2 - Use the requiremets below to create a function that takes in an item and prints the price to the console.
// Use a switch statement to print the price of the each item in the store to the console.
// Ex. itemList('shoes') should print Shoes are $50 to the console
// Items:

// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the function input is not an item in the store, then print 'Invalid Item' to the console.


 const itemPrice = () => {
     switch(item) {
        case Shoes: 
            console.log('Shoes ' + $50)
                 break;
        case Jeans:
            console.log('Jeans ' + $25)
                 break;
        case Hat: 
            console.log('Hat ' + $12)
                 break;
       case Socks:
             console.log('Socks ' + $2)
                break;
        default:
            console.log('Invalid Item')
                 break;
     }
 }
         item(Jeans)

// 3. Exercise Tracker
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:

const excerise = ['push-ups', 'sit-ups', 'bear crawls', '1 mile run', '60 second plank', 'burpees', 'jumping jacks', 'squats', 'weighted squats', 'inch worms'];
function randomExercise() {
    for(let i = 0; i < excerise.length; i++){
    console.log(excerise[i]);
    }
}

randomExercise();