let num1 = +prompt(`Enter the first number:`);
let num2 = +prompt(`Enter the second number:`);
let num3 = +prompt(`Enter the third number:`);
let num4 = +prompt(`Enter the fourth number:`);
let num5 = +prompt(`Enter the fifth number:`);

let even_total = 0;
let odd_total = 0;

let numbers = [num1, num2, num3, num4, num5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even_total++;
    } else {
        odd_total++;
    }
}

alert(`The amount of odd numbers are: ${odd_total}`);
alert(`The amount of even numbers are: ${even_total}`);
