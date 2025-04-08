// Khai báo mảng có sẵn với các số nguyên
let numbers = [5, 10, 15, 20, 25, 30, 35, 40];

// Yêu cầu người dùng nhập vào một số
let userInput = +prompt("Nhập vào một số bất kỳ:");

// Biến kiểm tra
let found = false;

// Duyệt qua từng phần tử trong mảng để kiểm tra
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === userInput) {
        found = true;
        break; // Thoát khỏi vòng lặp ngay khi tìm thấy
    }
}

// Hiển thị kết quả kiểm tra
if (found) {
    alert("Bingo");
} else {
    alert("Chúc bạn may mắn lần sau");
}
