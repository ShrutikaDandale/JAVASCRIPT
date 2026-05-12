
// CONDITIONAL STATEMENTS

// IF STATEMENT
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
}


// IF ELSE
let number = 7;
if (number % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


// ELSE IF
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// SWITCH CASE
let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}