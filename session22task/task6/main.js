// Khai báo mảng số nguyên gồm 10 phần tử có sẵn
let numbers = [5, 12, 7, 5, 8, 5, 30, 12, 5, 20];

// Yêu cầu người dùng nhập một số nguyên cần tìm
let userInput = +prompt("Nhập vào một số nguyên cần đếm trong mảng:");

// Khởi tạo biến đếm số lần xuất hiện
let count = 0;

// Duyệt từng phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === userInput) {
        count++; // Nếu tìm thấy số trùng, tăng biến đếm
    }
}

// Hiển thị kết quả
alert(`Số ${userInput} xuất hiện ${count} lần trong mảng.`);
    