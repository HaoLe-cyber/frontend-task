let input = prompt("Nhập số tiền:");
let amount = parseFloat(input);

let result = amount.toLocaleString('vi-VN') + ' VND';
alert("Money: " + result);