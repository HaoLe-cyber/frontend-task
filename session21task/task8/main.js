for (let num = 100; num <= 999; num++) {
    let hundreds = Math.floor(num / 100); // Chữ số hàng trăm
    let tens = Math.floor((num % 100) / 10); // Chữ số hàng chục
    let ones = num % 10; // Chữ số hàng đơn vị

    let sum = Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(ones, 3);

    if (sum === num) {
        console.log(num);
    }
}
