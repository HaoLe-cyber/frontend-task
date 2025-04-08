// Yêu cầu người dùng nhập vào một dãy số, cách nhau bởi dấu phẩy
let userInput = prompt("Nhập vào dãy số, cách nhau bởi dấu phẩy:");

// Chuyển chuỗi nhập vào thành mảng các số bằng split()
let numbers = userInput.split(",");

// Đảo ngược mảng bằng reverse()
numbers.reverse();

// Hiển thị kết quả
console.log("Mảng sau khi đảo ngược:", numbers);
