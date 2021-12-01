/* 1. "Fizzbuzz" is a famous interview question used in programming interviews. It goes
something like this:
Directions:
Write a while loop that:
● Loop through the numbers 1 to 20
● If the number is divisible by 3, print "Fizz"
● If the number is divisible by 5, print "Buzz"
● If the number is divisible by 3 and 5, print "FizzBuzz"
● If the number is not divisible by 3 or 5, print the number/*
* Programming Quiz
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `x` with a starting value of `1`
* - Your code should include a `while` loop
* - Your `while` loop should have a stop condition
* - Your code should use a conditional statement
* - Your code should increment `x` by `1` each time the loop executes
* - Your code should produce the expected output
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE
PRINTED.
*/



var x = 1;

while ( x < 100 ) {
   if ( x % 5 === 0 && x % 3 === 0) {
      console.log("FizzBuzz"); 
   } 
   else if ( x % 5 === 0) {
       console.log("Buzz");
   }
   else if ( x % 3 === 0) {
       console.log("Fizz")
   }
   else {
       console.log(x);
   }
     x++;
}



/* 2. Write a loop that prints out the following song. Starting at 99, and ending at 1
bottle.
/*
* Programming Quiz
**
Use the following `while` loop to write out the song "99 bottles of juice".
* Log the your lyrics to the console.
**
Note
* - Each line of the lyrics needs to be logged to the same line.
* - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `num` with a starting value of `99`
* - Your code should include a `while` loop
* - Your `while` loop should have a stop condition
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE
PRINTED.
*/


var num = 99;

while (num >= 1){ 

    if (num > 2){
    console.log(num +" bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }else if(num === 2) {
        console.log(num +" bottles of juice on the wall! "+num +" bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    }else {
        console.log(num +" bottle of juice on the wall! "+num +" bottle of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    }
    
    num= num - 1;
}






/*3. NASA's countdown to launch includes checkpoints where NASA engineers complete
certain technical tasks. During the final minute, NASA has 6 tasks to complete:
Directions:
Write a while loop that counts down from 60 seconds and:
● If there's a task being completed, it prints out the task
● If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.
/*
* Programming Quiz: Countdown, Liftoff! (4-3)
* *
Using a while loop, print out the countdown output above.
*/
/** QUIZ REQUIREMENTS
* - Your code should include a `while` loop
* - Your `while` loop should have a stop condition
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE
PRINTED.
*/



var x = 60;

while ( x > -1) {
    if ( x === 50 ) {
      console.log("T- " + x + " seconds" + " Orbiter transfers from ground to internal power");
    }
    else if ( x === 31) {
        console.log("T- " + x + " seconds" + " Ground launch sequencer is go for auto sequence start");
    }
    else if ( x === 16) {
        console.log("T- " + x + " seconds" + " Activate launch pad sound suppression system");
    }
    else if ( x === 10) {
        console.log("T- " + x + " seconds" + " Activate main engine hydrogen burnoff system");
    }
    else if ( x === 6) {
        console.log("T- " + x + " seconds" + " Main engine start");
    }
    else if ( x === 0) {
        console.log("T- " + x + " seconds" + " Solid rocket booster ignition and liftoff!");
    }
    else {
        console.log("T- " + x + " seconds");
    }
    x--;
}




/* 4. Rewrite the following while loop as a for loop:
var x = 9;
while (x >= 1) {
console.log("hello " + x);
/*
* Programming Quiz
*/
/*
* QUIZ REQUIREMENTS
* - Your code should use a `for` loop
* - Your `for` loop should specify a starting condition `x` with the value of `9`
* - Your `for` loop should have a stop condition for the value of `x`
* - Your `for` loop should decrement `x` each time it executes
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE
PRINTED.
*/





for (let x = 9; x >= 1; x--) {
    console.log("hello " + x);
    
}







/* 5. Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!
for (x < 10; x++) {
console.log(x);
}
/*
* Programming Quiz: Fix the Error
*/
/** QUIZ REQUIREMENTS
* - Your code should use a `for` loop
* - Your `for` loop should specify a starting condition `x` with the value of `5`
* - Your `for` loop should have a stop condition for the value of `x`
* - Your `for` loop should increment `x` each time it executes
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE
PRINTED.
*/



for (let x = 5; x < 10; x++) {
    console.log(x);
    
}







/* 6. The for loop below has an error. Fix it!
for (let k = 0 k < 200 k++) {
console.log(k);
}
/*
* Programming Quiz: Fix the Error
*/
/*
* QUIZ REQUIREMENTS
* - Your code should use a `for` loop
* - Your `for` loop should specify a starting condition `k` with the value of `0`
* - Your `for` loop should have a stop condition for the value of `k`* - Your `for` loop should increment `k` each time it executes
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE
PRINTED.
*/



for (let k = 0; k < 200; k++) {
    console.log(k);
    
}




/* 7. Write a for (note: not a function) loop that prints out the factorial of the number
12:
/*
* Programming Quiz: Factorials
*/


var num = 12;
const factorial = num => {
    let output = 1;
    for (let i = num; i > 1; i--) {
        output *= i;
        
    };
    return output;
};
console.log(factorial(num));





/* 8. Theater seats often display a row and seat number to help theater goers find their
seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a
nested for loop to print out all of the different seat combinations in the theater.
/*
* Programming Quiz: Find my Seat
* *
Write a nested for loop to print out all of the different seat combinations in the theater.
* The first row-seat combination should be 0-0
* The last row-seat combination will be 25-99
* *
Things to note:
* - the row and seat numbers start at 0, not 1
* - the highest seat number is 99, not 100
*/
/*
* QUIZ REQUIREMENTS
* - Your code should use a nested `for` loop'
* - Your code should produce the expected output, as explained above
*/// Write your code here





for (let y = 0; y < 26; y++) {
    for (let z = 0; z < 100; z++) {
        console.log( y + "," + z);
        
    }
    
}
