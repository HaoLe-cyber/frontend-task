// Khai báo mảng số nguyên gồm 5 phần tử ngẫu nhiên
let numbers = [12, 7, 25, 8, 30];

// Khởi tạo tổng số chẵn và tổng số lẻ
let evenSum = 0;
let oddSum = 0;

// Duyệt từng phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i]; // Nếu là số chẵn, cộng vào tổng chẵn
    } else {
        oddSum += numbers[i]; // Nếu là số lẻ, cộng vào tổng lẻ
    }
}

// Hiển thị kết quả
console.log("Tổng các số chẵn là:", evenSum);
console.log("Tổng các số lẻ là:", oddSum);
