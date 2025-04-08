let num1 = +prompt(`Enter the first number:`);
let num2 = +prompt(`Enter the second number:`);
let num3 = +prompt(`Enter the third number:`);
let num4 = +prompt(`Enter the fourth number:`);
let num5 = +prompt(`Enter the fifth number:`);
let result = 0;

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        result += i;
    }
}

alert(`The sum of odd numbers is: ${result}`);