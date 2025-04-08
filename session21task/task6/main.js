let num = +prompt("Nhập một số nguyên bất kỳ:");
let result = "Các ước của " + num + " là: ";

for (let i = 1; i <= Math.abs(num); i++) {
    if (num % i === 0) {
        result += i + " ";
    }
}

alert(result);
