// Nhập số phần tử của mảng
let n = +prompt("Nhập số phần tử của mảng:");
let numbers = [];
let negativeCount = 0;

// Nhập từng phần tử vào mảng
for (let i = 0; i < n; i++) {
    let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
    numbers.push(num);

    // Kiểm tra số nguyên âm
    if (num < 0) {
        negativeCount++;
    }
}

// Hiển thị kết quả
alert("Mảng đã nhập: " + numbers.join(", "));
alert("Số lượng số nguyên âm trong mảng là: " + negativeCount);
